const TFNSW_BASE_URL = "https://api.transport.nsw.gov.au";
const GTFS_SCHEDULE_PATHS = [
  "/v1/gtfs/schedule/sydneytrains",
  "/v1/gtfs/schedule/nswtrains",
];
const GTFS_TRIP_CACHE_TTL_MS = 1000 * 60 * 60 * 6;

let gtfsTripStopCache = {
  expiresAt: 0,
  trips: new Map(),
};

function corsHeaders(request, env) {
  const requestOrigin = request.headers.get("Origin") || "";
  const allowedOrigin = env.ALLOWED_ORIGIN || requestOrigin || "*";
  const origin =
    allowedOrigin === "*" || allowedOrigin === requestOrigin
      ? allowedOrigin
      : allowedOrigin;

  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}

function jsonResponse(request, env, body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders(request, env),
      "Content-Type": "application/json",
    },
  });
}

function buildTfnswUrl(path, params) {
  const url = new URL(path, TFNSW_BASE_URL);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && String(value).trim() !== "") {
      url.searchParams.set(key, String(value));
    }
  });
  return url;
}

async function fetchTfnswJson(request, env, path, params) {
  if (!env.TFNSW_API_KEY) {
    return jsonResponse(request, env, { error: "TFNSW_API_KEY is not configured." }, 500);
  }

  const upstreamUrl = buildTfnswUrl(path, params);
  const response = await fetch(upstreamUrl.toString(), {
    headers: {
      Authorization: `apikey ${env.TFNSW_API_KEY}`,
      Accept: "application/json",
    },
  });

  const headers = {
    ...corsHeaders(request, env),
    "Content-Type": response.headers.get("Content-Type") || "application/json",
    "Cache-Control": "no-store",
  };

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

async function fetchTfnswArrayBuffer(env, path) {
  if (!env.TFNSW_API_KEY) {
    throw new Error("TFNSW_API_KEY is not configured.");
  }

  const upstreamUrl = buildTfnswUrl(path, {});
  const response = await fetch(upstreamUrl.toString(), {
    headers: {
      Authorization: `apikey ${env.TFNSW_API_KEY}`,
      Accept: "application/zip",
    },
  });

  if (!response.ok) {
    throw new Error(`TfNSW GTFS request failed (${response.status}).`);
  }

  return response.arrayBuffer();
}

function readUint16(dataView, offset) {
  return dataView.getUint16(offset, true);
}

function readUint32(dataView, offset) {
  return dataView.getUint32(offset, true);
}

function decodeBytes(bytes) {
  return new TextDecoder("utf-8").decode(bytes);
}

function findZipEndOfCentralDirectory(dataView) {
  const signature = 0x06054b50;
  const minimumOffset = Math.max(0, dataView.byteLength - 65557);
  for (let offset = dataView.byteLength - 22; offset >= minimumOffset; offset -= 1) {
    if (readUint32(dataView, offset) === signature) {
      return offset;
    }
  }
  throw new Error("Could not read GTFS zip directory.");
}

function getZipEntries(zipBuffer) {
  const bytes = new Uint8Array(zipBuffer);
  const dataView = new DataView(zipBuffer);
  const eocdOffset = findZipEndOfCentralDirectory(dataView);
  const entryCount = readUint16(dataView, eocdOffset + 10);
  let offset = readUint32(dataView, eocdOffset + 16);
  const entries = new Map();

  for (let index = 0; index < entryCount; index += 1) {
    if (readUint32(dataView, offset) !== 0x02014b50) {
      throw new Error("Invalid GTFS zip central directory.");
    }

    const method = readUint16(dataView, offset + 10);
    const compressedSize = readUint32(dataView, offset + 20);
    const fileNameLength = readUint16(dataView, offset + 28);
    const extraLength = readUint16(dataView, offset + 30);
    const commentLength = readUint16(dataView, offset + 32);
    const localHeaderOffset = readUint32(dataView, offset + 42);
    const nameStart = offset + 46;
    const fileName = decodeBytes(bytes.subarray(nameStart, nameStart + fileNameLength));
    entries.set(fileName, { method, compressedSize, localHeaderOffset });
    offset = nameStart + fileNameLength + extraLength + commentLength;
  }

  return entries;
}

async function inflateRaw(bytes) {
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

async function readZipTextFile(zipBuffer, entries, fileName) {
  const entry = entries.get(fileName);
  if (!entry) {
    throw new Error(`GTFS file is missing ${fileName}.`);
  }

  const bytes = new Uint8Array(zipBuffer);
  const dataView = new DataView(zipBuffer);
  const localOffset = entry.localHeaderOffset;
  if (readUint32(dataView, localOffset) !== 0x04034b50) {
    throw new Error(`Invalid GTFS zip entry for ${fileName}.`);
  }

  const fileNameLength = readUint16(dataView, localOffset + 26);
  const extraLength = readUint16(dataView, localOffset + 28);
  const dataStart = localOffset + 30 + fileNameLength + extraLength;
  const compressedBytes = bytes.subarray(dataStart, dataStart + entry.compressedSize);

  if (entry.method === 0) {
    return decodeBytes(compressedBytes);
  }
  if (entry.method === 8) {
    return decodeBytes(await inflateRaw(compressedBytes));
  }
  throw new Error(`Unsupported GTFS zip compression method ${entry.method}.`);
}

function parseCsvLine(line) {
  const values = [];
  let value = "";
  let quoted = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    if (char === '"') {
      if (quoted && line[index + 1] === '"') {
        value += '"';
        index += 1;
      } else {
        quoted = !quoted;
      }
    } else if (char === "," && !quoted) {
      values.push(value);
      value = "";
    } else {
      value += char;
    }
  }

  values.push(value);
  return values;
}

function parseCsvRows(text, onRow) {
  const lines = text.split(/\r?\n/);
  const headers = parseCsvLine(lines.shift() || "");
  lines.forEach((line) => {
    if (!line.trim()) {
      return;
    }
    const values = parseCsvLine(line);
    const row = {};
    headers.forEach((header, index) => {
      row[header] = values[index] || "";
    });
    onRow(row);
  });
}

function normalizeTripId(value) {
  return String(value || "").trim().toLowerCase();
}

function expandTripIds(tripIds) {
  return uniqueValues(
    tripIds.flatMap((tripId) => [
      tripId,
      tripId.replace(/^\d+\./, ""),
    ])
  );
}

function uniqueValues(values) {
  return [...new Set(values.filter(Boolean))];
}

function getGtfsCacheKey(path, tripId) {
  return `${path}::${tripId}`;
}

function getCachedGtfsTripStops(path, tripIds) {
  const now = Date.now();
  if (gtfsTripStopCache.expiresAt <= now) {
    gtfsTripStopCache = { expiresAt: 0, trips: new Map() };
    return null;
  }
  for (const tripId of tripIds) {
    const stops = gtfsTripStopCache.trips.get(getGtfsCacheKey(path, tripId));
    if (stops?.length) {
      return { matchedSchedulePath: path, matchedTripId: tripId, stops };
    }
  }
  return null;
}

function cacheGtfsTripStops(path, tripId, stops) {
  if (!gtfsTripStopCache.expiresAt) {
    gtfsTripStopCache.expiresAt = Date.now() + GTFS_TRIP_CACHE_TTL_MS;
  }
  if (stops.length) {
    gtfsTripStopCache.trips.set(getGtfsCacheKey(path, tripId), stops);
  }
}

function findTripStopRows(stopTimesText, tripIds) {
  const headerEnd = stopTimesText.indexOf("\n");
  const headers = parseCsvLine(stopTimesText.slice(0, headerEnd).replace(/\r$/, ""));
  const tripIdIndex = headers.indexOf("trip_id");
  const stopIdIndex = headers.indexOf("stop_id");
  const sequenceIndex = headers.indexOf("stop_sequence");
  const matches = new Map(tripIds.map((tripId) => [tripId, []]));
  const seenLineStarts = new Set();

  tripIds.forEach((tripId) => {
    const candidates = uniqueValues([tripId, tripId.toUpperCase()]);
    candidates.forEach((candidate) => {
      [`\n${candidate},`, `\n"${candidate}",`].forEach((needle) => {
        let offset = stopTimesText.indexOf(needle, headerEnd);
        while (offset !== -1) {
          const lineStart = offset + 1;
          const nextOffset = stopTimesText.indexOf("\n", lineStart);
          const lineEnd = nextOffset === -1 ? stopTimesText.length : nextOffset;
          if (!seenLineStarts.has(lineStart)) {
            seenLineStarts.add(lineStart);
            const line = stopTimesText.slice(lineStart, lineEnd).replace(/\r$/, "");
            const values = parseCsvLine(line);
            const rowTripId = normalizeTripId(values[tripIdIndex]);
            if (matches.has(rowTripId)) {
              matches.get(rowTripId).push({
                stopId: values[stopIdIndex] || "",
                stopSequence: Number(values[sequenceIndex] || 0),
              });
            }
          }
          offset = stopTimesText.indexOf(needle, lineEnd);
        }
      });
    });
  });

  for (const tripId of tripIds) {
    const stops = matches.get(tripId) || [];
    if (stops.length) {
      stops.sort((a, b) => a.stopSequence - b.stopSequence);
      return { matchedTripId: tripId, stops };
    }
  }

  return { matchedTripId: "", stops: [] };
}

function addStopNames(stopsText, stopRows) {
  const wantedStopIds = new Set(stopRows.map((stop) => stop.stopId));
  const stopNames = new Map();
  parseCsvRows(stopsText, (row) => {
    if (wantedStopIds.has(row.stop_id)) {
      stopNames.set(row.stop_id, row.stop_name || row.stop_id);
    }
  });
  return stopRows.map((stop) => ({
    ...stop,
    stopName: stopNames.get(stop.stopId) || stop.stopId,
  }));
}

async function getGtfsTripStopsFromPath(env, path, tripIds) {
  const cached = getCachedGtfsTripStops(path, tripIds);
  if (cached) {
    return cached;
  }

  const zipBuffer = await fetchTfnswArrayBuffer(env, path);
  const entries = getZipEntries(zipBuffer);
  const stopTimesText = await readZipTextFile(zipBuffer, entries, "stop_times.txt");
  const matched = findTripStopRows(stopTimesText, tripIds);
  if (!matched.stops.length) {
    return matched;
  }
  const stopsText = await readZipTextFile(zipBuffer, entries, "stops.txt");
  const stops = addStopNames(stopsText, matched.stops);
  cacheGtfsTripStops(path, matched.matchedTripId, stops);
  return { matchedSchedulePath: path, matchedTripId: matched.matchedTripId, stops };
}

async function getGtfsTripStops(env, tripIds) {
  let lastError = null;
  for (const path of GTFS_SCHEDULE_PATHS) {
    try {
      const result = await getGtfsTripStopsFromPath(env, path, tripIds);
      if (result.stops?.length) {
        return result;
      }
    } catch (error) {
      lastError = error;
    }
  }

  if (lastError && GTFS_SCHEDULE_PATHS.length === 1) {
    throw lastError;
  }
  return { matchedSchedulePath: "", matchedTripId: "", stops: [] };
}

async function handleStopFinder(request, env, url) {
  const query = url.searchParams.get("query") || "";
  if (!query.trim()) {
    return jsonResponse(request, env, { error: "Missing query." }, 400);
  }

  return fetchTfnswJson(request, env, "/v1/tp/stop_finder", {
    outputFormat: "rapidJSON",
    coordOutputFormat: "EPSG:4326",
    type_sf: "any",
    name_sf: query,
    TfNSWSF: "true",
    TfNSWSFStopsOnly: "true",
    odvSugMacro: "true",
  });
}

async function handleDepartures(request, env, url) {
  const stopId = url.searchParams.get("stopId") || "";
  if (!stopId.trim()) {
    return jsonResponse(request, env, { error: "Missing stopId." }, 400);
  }

  return fetchTfnswJson(request, env, "/v1/tp/departure_mon", {
    outputFormat: "rapidJSON",
    coordOutputFormat: "EPSG:4326",
    mode: "direct",
    type_dm: "stop",
    name_dm: stopId,
    itdDate: url.searchParams.get("date") || "",
    itdTime: url.searchParams.get("time") || "",
    departureMonitorMacro: "true",
    TfNSWDM: "true",
    limit: url.searchParams.get("limit") || "12",
  });
}

async function handleGtfsTripStops(request, env, url) {
  const tripIds = (url.searchParams.get("tripIds") || url.searchParams.get("tripId") || "")
    .split(",")
    .map(normalizeTripId)
    .filter(Boolean);
  if (!tripIds.length) {
    return jsonResponse(request, env, { error: "Missing tripId." }, 400);
  }

  try {
    return jsonResponse(request, env, await getGtfsTripStops(env, expandTripIds(tripIds)));
  } catch (error) {
    return jsonResponse(request, env, { error: String(error.message || error) }, 502);
  }
}

async function handleTripDetails(request, env, url) {
  const originId = url.searchParams.get("originId") || "";
  const destinationId = url.searchParams.get("destinationId") || "";
  if (!originId.trim() || !destinationId.trim()) {
    return jsonResponse(request, env, { error: "Missing originId or destinationId." }, 400);
  }

  return fetchTfnswJson(request, env, "/v1/tp/trip", {
    outputFormat: "rapidJSON",
    coordOutputFormat: "EPSG:4326",
    depArrMacro: "dep",
    itdTripDateTimeDepArr: "dep",
    type_origin: "stop",
    name_origin: originId,
    type_destination: "stop",
    name_destination: destinationId,
    itdDate: url.searchParams.get("date") || "",
    itdTime: url.searchParams.get("time") || "",
    calcNumberOfTrips: url.searchParams.get("limit") || "6",
    TfNSWTR: "true",
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const headers = corsHeaders(request, env);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers });
    }

    if (request.method !== "GET") {
      return jsonResponse(request, env, { error: "Method not allowed." }, 405);
    }

    if (url.pathname === "/api/tfnsw/stop-finder") {
      return handleStopFinder(request, env, url);
    }

    if (url.pathname === "/api/tfnsw/departures") {
      return handleDepartures(request, env, url);
    }

    if (url.pathname === "/api/tfnsw/gtfs-trip-stops") {
      return handleGtfsTripStops(request, env, url);
    }

    if (url.pathname === "/api/tfnsw/trip-details") {
      return handleTripDetails(request, env, url);
    }

    if (url.pathname === "/api/tfnsw/health") {
      return jsonResponse(request, env, { ok: true });
    }

    return jsonResponse(request, env, { error: "Not found." }, 404);
  },
};
