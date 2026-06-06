const STORAGE_KEY = "academic-os.cityrail.native.v1";
const LIVE_STORAGE_KEY = "academic-os.cityrail.live.v1";
const PID_BASE_WIDTH = 1000;
const PID_BASE_HEIGHT = 640;
const LIVE_MAX_RESULTS = 12;
const TFNSW_TIME_ZONE = "Australia/Sydney";
const TFNSW_PROXY_BASE_URL = "https://cityrail-live.tt026.workers.dev";
const STATIC_GTFS_INDEX_BASE = "assets/cityrail/gtfs-index";
const ALL_STATIONS_COLLAPSE_MIN_RUN = 4;

const intercityLineName = "Intercity";
const regionalLineName = "Regional";

const lineColors = {
  T1: "#f99d1c",
  T2: "#0098cd",
  T3: "#f37021",
  T4: "#005aa3",
  T5: "#c4258f",
  T6: "#7c3e21",
  T7: "#6f818e",
  T8: "#00954c",
  T9: "#d11f2f",
  Intercity: "#2f5f9f",
  Regional: "#4f4f4f",
};

const legacyHornsbyStops = [
  "Town Hall",
  "Wynyard",
  "Milsons Point",
  "North Sydney",
  "St Leonards",
  "Chatswood",
  "Gordon",
  "Hornsby",
];

const defaultBerowraStops = [
  "Town Hall",
  "Wynyard",
  "Milsons Point",
  "North Sydney",
  "Waverton",
  "Wollstonecraft",
  "St Leonards",
  "Artarmon",
  "Chatswood",
  "Roseville",
  "Lindfield",
  "Killara",
  "Gordon",
  "Pymble",
  "Turramurra",
  "Warrawee",
  "Wahroonga",
  "Waitara",
  "Hornsby",
  "Asquith",
  "Mount Colah",
  "Mount Kuring-gai",
  "Berowra",
];

const defaultOlympicParkStops = [
  "Roseville",
  "Chatswood",
  "Artarmon",
  "St Leonards",
  "Wollstonecraft",
  "Waverton",
  "North Sydney",
  "Milsons Point",
  "Wynyard",
  "Town Hall",
  "Central",
  "Redfern",
  "Strathfield",
  "Olympic Park",
];

const fallbackTemplates = [
  {
    name: "Olympic Park via Central",
    line: "T7",
    destination: "Olympic Park",
    via: "via Central",
    platform: "2",
    carsCount: "8",
    stops: [...defaultOlympicParkStops],
  },
  {
    name: "T4 to Cronulla all stations",
    line: "T4",
    destination: "Cronulla",
    via: "via Hurstville",
    platform: "7",
    carsCount: "8",
    stops: [
      "Central",
      "Redfern",
      "Sydenham",
      "Hurstville",
      "Sutherland",
      "Caringbah",
      "Woolooware",
      "Cronulla",
    ],
  },
];

const defaultConfig = {
  line: "T7",
  destination: "Olympic Park",
  via: "via Central",
  platform: "2",
  carsCount: 8,
  capacities: ["low", "low", "medium", "medium", "low", "low", "low", "low"],
  stopsType: "All Stops",
  departsTime: "10:12pm",
  paEffect: "off",
  stops: [...defaultOlympicParkStops],
};

const defaultLiveSettings = {
  stationQuery: "",
  stationId: "",
  stationName: "",
  platformFilter: "",
  routeFilter: "",
};

let audioContext = null;
const audioBufferCache = new Map();
const staticGtfsShardCache = new Map();
const cleanupByRoot = new WeakMap();

let allStationsGroups = [];
let allStationsPromise = null;

let stationAliases = {};
let stationAliasesPromise = null;

let stopTemplates = [];
let stopTemplatesPromise = null;

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function createOption(value, label, selected = false) {
  const option = document.createElement("option");
  option.value = String(value ?? "");
  option.textContent = String(label ?? "");
  option.selected = selected;
  return option;
}

function setStatus(state, message) {
  if (state?.elements?.liveStatus) {
    state.elements.liveStatus.textContent = message || "";
  }
}

function clampCars(value) {
  return Math.max(1, Math.min(10, Number(value) || 1));
}

function normalizeCapacities(carsCount, capacities) {
  const count = clampCars(carsCount);
  const next = Array.isArray(capacities) ? capacities.slice(0, count) : [];
  while (next.length < count) {
    next.push("low");
  }
  return next.map((level) =>
    level === "medium" || level === "high" ? level : "low"
  );
}

function normalizeConfig(raw) {
  const merged = {
    ...clone(defaultConfig),
    ...(raw && typeof raw === "object" ? raw : {}),
  };

  merged.carsCount = clampCars(merged.carsCount);
  merged.capacities = normalizeCapacities(merged.carsCount, merged.capacities);
  merged.stops = Array.isArray(merged.stops)
    ? merged.stops.map((stop) => String(stop).trim()).filter(Boolean)
    : [];
  const paEffect = String(merged.paEffect || "off").trim().toLowerCase();
  if (paEffect === "outdoor") {
    merged.paEffect = "room";
  } else if (paEffect === "off" || paEffect === "on" || paEffect === "room") {
    merged.paEffect = paEffect;
  } else {
    merged.paEffect = "off";
  }

  return merged;
}

function normalizeSimpleStationName(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function arraysEqual(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) {
    return false;
  }
  return a.every((value, index) => value === b[index]);
}

function isLegacyHornsbyDefault(config) {
  if (!config || typeof config !== "object") {
    return false;
  }

  const stops = Array.isArray(config.stops)
    ? config.stops.map(normalizeSimpleStationName)
    : [];
  const legacyStops = legacyHornsbyStops.map(normalizeSimpleStationName);

  return (
    String(config.line || "").toUpperCase() === "T1" &&
    normalizeSimpleStationName(config.destination) === "hornsby" &&
    normalizeSimpleStationName(config.via) === "via gordon" &&
    String(config.platform || "").trim() === "16" &&
    Number(config.carsCount) === 8 &&
    arraysEqual(stops, legacyStops)
  );
}

function isPreviousBerowraDefault(config) {
  if (!config || typeof config !== "object") {
    return false;
  }

  const stops = Array.isArray(config.stops)
    ? config.stops.map(normalizeSimpleStationName)
    : [];
  const previousStops = defaultBerowraStops.map(normalizeSimpleStationName);

  return (
    String(config.line || "").toUpperCase() === "T1" &&
    normalizeSimpleStationName(config.destination) === "berowra" &&
    normalizeSimpleStationName(config.via) === "via gordon" &&
    String(config.platform || "").trim() === "16" &&
    Number(config.carsCount) === 8 &&
    arraysEqual(stops, previousStops)
  );
}

function loadConfig() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return clone(defaultConfig);
    }
    const parsed = normalizeConfig(JSON.parse(raw));
    if (isLegacyHornsbyDefault(parsed) || isPreviousBerowraDefault(parsed)) {
      return clone(defaultConfig);
    }
    return parsed;
  } catch {
    return clone(defaultConfig);
  }
}

function saveConfig(config) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch {
    // ignore localStorage failures
  }
}

function normalizeLiveSettings(raw) {
  const merged = {
    ...defaultLiveSettings,
    ...(raw && typeof raw === "object" ? raw : {}),
  };

  return {
    stationQuery: String(merged.stationQuery || "").trim(),
    stationId: String(merged.stationId || "").trim(),
    stationName: String(merged.stationName || "").trim(),
    platformFilter: String(merged.platformFilter || "").trim(),
    routeFilter: String(merged.routeFilter || "").trim(),
  };
}

function loadLiveSettings() {
  try {
    const raw = window.localStorage.getItem(LIVE_STORAGE_KEY);
    return normalizeLiveSettings(raw ? JSON.parse(raw) : null);
  } catch {
    return normalizeLiveSettings(null);
  }
}

function saveLiveSettings(settings) {
  try {
    window.localStorage.setItem(
      LIVE_STORAGE_KEY,
      JSON.stringify(normalizeLiveSettings(settings))
    );
  } catch {
    // ignore localStorage failures
  }
}

function parseDepartureTime(value) {
  if (!value) {
    return null;
  }

  const text = String(value).trim().toLowerCase();
  const match = text.match(/^(\d{1,2})(?::(\d{2}))?\s*(am|pm)?$/);
  if (!match) {
    return null;
  }

  let hours = Number(match[1]);
  const minutes = Number(match[2] || "0");
  const suffix = match[3];

  if (minutes >= 60) {
    return null;
  }

  if (suffix) {
    if (hours === 12) {
      hours = 0;
    }
    if (suffix === "pm") {
      hours += 12;
    }
  }

  if (hours >= 24) {
    return null;
  }

  return { hours, minutes };
}

function getSydneyDateParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-AU", {
    timeZone: TFNSW_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);
  return Object.fromEntries(parts.map((part) => [part.type, part.value]));
}

function formatDateForTfnsw(date = new Date()) {
  const parts = getSydneyDateParts(date);
  const year = parts.year;
  const month = parts.month;
  const day = parts.day;
  return `${year}${month}${day}`;
}

function formatTimeForTfnsw(date = new Date()) {
  const parts = getSydneyDateParts(date);
  return `${parts.hour}${parts.minute}`;
}

function formatInputTimeFromDate(value) {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }
  const parts = getSydneyDateParts(date);
  return `${parts.hour}:${parts.minute}`;
}

function parsePlatformFromText(value) {
  const match = String(value || "").match(/platform\s*(\d+)/i);
  return match ? match[1] : "";
}

function normalizePlatform(value) {
  const text = String(value || "").trim();
  if (!text) {
    return "";
  }
  const platformText = parsePlatformFromText(text);
  if (platformText) {
    return platformText;
  }
  if (/^\d{1,2}$/.test(text)) {
    return text;
  }
  return "";
}

function isRailModeLocation(location = {}) {
  const modes = Array.isArray(location.modes) ? location.modes.map(Number) : [];
  return modes.includes(1);
}

function isRailTransport(transportation = {}) {
  const product = transportation.product || {};
  const productText = [
    product.name,
    transportation.operator?.name,
    transportation.name,
    transportation.number,
    transportation.description,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    Number(product.class) === 1 ||
    Number(product.iconId) === 1 ||
    /\b(?:Sydney Trains|NSW TrainLink|Intercity|Regional|Train)\b/i.test(productText)
  ) && !/\b(?:Bus|Buses|Light Rail|Metro|Ferry|Coach)\b/i.test(productText);
}

function cleanTfnswName(value) {
  return String(value || "")
    .replace(/\s+Station(?:,\s*Platform\s+\d+)?(?:,\s*[^,]+)?$/i, "")
    .replace(/\s+Station(?:\s+Platform\s+\d+)?$/i, "")
    .replace(/,\s*Platform\s+\d+(?:,\s*[^,]+)?$/i, "")
    .replace(/\s+Platform\s+\d+$/i, "")
    .replace(/,\s*$/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

function inferLine(value) {
  const text = String(value || "");
  const lineMatch = text.match(/\bT[1-9]\b/i);
  if (lineMatch) {
    return lineMatch[0].toUpperCase();
  }
  if (/\b(?:BMT|CCN|SCO|SHL|HUN|Sth Coast|Blue Mountains|Central Coast|Newcastle|Hunter)\b/i.test(text)) {
    return intercityLineName;
  }
  if (/\b(?:XPT|XPLORER|Regional|CoachLink|NSW TrainLink)\b/i.test(text)) {
    return regionalLineName;
  }
  return defaultConfig.line;
}

function splitDestinationAndVia(value) {
  const text = cleanTfnswName(value);
  const parts = text.split(/\s+via\s+/i);
  if (parts.length >= 2) {
    return {
      destination: parts[0].trim(),
      via: `via ${parts.slice(1).join(" via ").trim()}`,
    };
  }
  return { destination: text, via: "" };
}

function uniqueStrings(values) {
  return [...new Set(values.map((value) => String(value || "").trim()).filter(Boolean))];
}

function getTransportText(transportation = {}) {
  return [
    transportation.number,
    transportation.name,
    transportation.disassembledName,
    transportation.description,
    transportation.product?.name,
  ]
    .filter(Boolean)
    .join(" ");
}

function normalizeStopCandidate(location) {
  if (!location || typeof location !== "object") {
    return null;
  }
  if (!isRailModeLocation(location)) {
    return null;
  }
  const id = location.properties?.stopId || location.id || location.extId;
  const name = cleanTfnswName(
    location.disassembledName || location.name || location.parent?.name || id
  );
  if (!id || !name) {
    return null;
  }
  return { id: String(id), name };
}

function parseStopCandidates(payload) {
  const locations = Array.isArray(payload?.locations) ? payload.locations : [];
  return uniqueStrings(
    locations
      .map(normalizeStopCandidate)
      .filter(Boolean)
      .map((item) => JSON.stringify(item))
  )
    .map((item) => JSON.parse(item))
    .slice(0, 40);
}

function extractOnwardStops(event, destination) {
  const onward =
    event?.onwardLocations ||
    event?.onwardStops ||
    event?.transportation?.onwardLocations ||
    [];
  const stops = Array.isArray(onward)
    ? onward
        .map((item) => cleanTfnswName(item.disassembledName || item.name || item))
        .filter(Boolean)
    : [];
  const destinationName = cleanTfnswName(destination);
  if (destinationName && !stops.includes(destinationName)) {
    stops.push(destinationName);
  }
  return stops.length ? stops : destinationName ? [destinationName] : [];
}

function extractStopName(value) {
  if (!value) {
    return "";
  }
  if (typeof value === "string") {
    return cleanTfnswName(value);
  }
  return cleanTfnswName(
    value.disassembledName ||
      value.name ||
      value.location?.disassembledName ||
      value.location?.name ||
      value.parent?.disassembledName ||
      value.parent?.name
  );
}

function normalizeTripIdentifier(value) {
  return String(value || "").trim().toLowerCase();
}

function getStaticGtfsShardId(value) {
  let hash = 0x811c9dc5;
  const text = normalizeTripIdentifier(value);
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return hash.toString(16).padStart(8, "0").slice(0, 2);
}

function getStaticGtfsShardUrl(shardId) {
  return new URL(`${STATIC_GTFS_INDEX_BASE}/shards/${shardId}.json`, window.location.href);
}

async function fetchStaticGtfsShard(shardId) {
  if (staticGtfsShardCache.has(shardId)) {
    return staticGtfsShardCache.get(shardId);
  }

  const request = fetch(getStaticGtfsShardUrl(shardId).toString(), { cache: "no-store" })
    .then((response) => {
      if (response.status === 404) {
        return null;
      }
      if (!response.ok) {
        throw new Error(`Static GTFS shard failed (${response.status})`);
      }
      return response.json();
    })
    .catch(() => null);
  staticGtfsShardCache.set(shardId, request);
  return request;
}

function normalizeStaticGtfsTripRecord(record, tripId) {
  if (Array.isArray(record)) {
    return {
      matchedTripId: tripId,
      stops: record,
      orderedStops: false,
    };
  }
  if (!record || typeof record !== "object") {
    return null;
  }
  const stops = Array.isArray(record.stops) ? record.stops : [];
  return {
    matchedTripId: tripId,
    stops,
    orderedStops: true,
  };
}

async function fetchStaticGtfsTripById(tripId) {
  const normalizedTripId = normalizeTripIdentifier(tripId);
  if (!normalizedTripId) {
    return null;
  }
  const shard = await fetchStaticGtfsShard(getStaticGtfsShardId(normalizedTripId));
  return normalizeStaticGtfsTripRecord(shard?.trips?.[normalizedTripId], normalizedTripId);
}

function sortGtfsStopRows(stops) {
  return Array.isArray(stops)
    ? [...stops].sort((a, b) => Number(a.stopSequence || 0) - Number(b.stopSequence || 0))
    : [];
}

function getGtfsStopRows(payload) {
  if (!Array.isArray(payload?.stops)) {
    return [];
  }
  return payload.orderedStops ? [...payload.stops] : sortGtfsStopRows(payload.stops);
}

function getGtfsStopName(stop) {
  return cleanTfnswName(stop?.stopName || stop?.name || stop?.stopId);
}

function getGtfsOriginIndex(stopRows, departure) {
  const originId = String(departure.originId || "");
  const originName = cleanTfnswName(departure.originName);
  return stopRows.findIndex((stop) => {
    const stopId = String(stop.stopId || "");
    const parentStopId = String(stop.parentStopId || stop.parent_station || "");
    const stopName = getGtfsStopName(stop);
    return (
      (originId && (stopId === originId || parentStopId === originId)) ||
      (originName && stopName === originName)
    );
  });
}

function getGtfsRemainingRows(stopRows, departure) {
  const originIndex = getGtfsOriginIndex(stopRows, departure);
  if (originIndex < 0) {
    return null;
  }
  return stopRows.slice(originIndex + 1).filter((stop) => stop.dropoff !== false);
}

function scoreGtfsTripCandidate(stopRows, departure) {
  const remainingRows = getGtfsRemainingRows(stopRows, departure);
  if (!remainingRows) {
    return -1;
  }

  const remainingNames = remainingRows.map((stop) => normalizeSimpleStationName(getGtfsStopName(stop)));
  const destinationName = normalizeSimpleStationName(departure.destination);
  const viaName = normalizeSimpleStationName(String(departure.via || "").replace(/^via\s+/i, ""));

  let score = remainingRows.length;
  if (destinationName && remainingNames.includes(destinationName)) {
    score += 1000;
  }
  if (viaName && remainingNames.includes(viaName)) {
    score += 250;
  }
  if (remainingRows.length > 1) {
    score += 25;
  }
  return score;
}

function trimGtfsRowsToDestination(stopRows, departure) {
  const destinationName = normalizeSimpleStationName(departure.destination);
  if (!destinationName) {
    return stopRows;
  }

  const destinationIndex = stopRows.findIndex(
    (stop) => normalizeSimpleStationName(getGtfsStopName(stop)) === destinationName
  );
  return destinationIndex >= 0 ? stopRows.slice(0, destinationIndex + 1) : stopRows;
}

async function fetchStaticGtfsTripStops(departure) {
  const tripIds = Array.isArray(departure.tripIds)
    ? uniqueStrings(departure.tripIds.map(normalizeTripIdentifier))
    : [];
  let fallbackPayload = null;
  let bestPayload = null;
  let bestScore = -1;

  for (const tripId of tripIds) {
    const payload = await fetchStaticGtfsTripById(tripId);
    const stopRows = getGtfsStopRows(payload);
    if (!payload || !stopRows.length) {
      continue;
    }
    fallbackPayload ||= { ...payload, stops: stopRows };
    const score = scoreGtfsTripCandidate(stopRows, departure);
    if (score < 0) {
      continue;
    }
    if (score > bestScore) {
      bestScore = score;
      bestPayload = {
        ...payload,
        stops: stopRows,
      };
    }
  }

  return bestPayload || fallbackPayload;
}

function parseGtfsTripStops(payload, departure) {
  const stopRows = getGtfsStopRows(payload);
  const remainingRows = getGtfsRemainingRows(stopRows, departure);

  if (!remainingRows) {
    return [];
  }

  return uniqueStrings(
    trimGtfsRowsToDestination(remainingRows, departure)
      .map(getGtfsStopName)
      .filter(Boolean)
  );
}

async function fetchTripDetails(state, departure) {
  if (!departure?.tripIds?.length) {
    return { stops: [], platform: "", carsCount: 0 };
  }

  const staticPayload = await fetchStaticGtfsTripStops(departure);
  return {
    stops: staticPayload ? parseGtfsTripStops(staticPayload, departure) : [],
    platform: "",
    carsCount: 0,
  };
}

function normalizeDepartureEvent(event, index, filters = {}) {
  if (!event || typeof event !== "object") {
    return null;
  }

  const transportation = event.transportation || {};
  if (!isRailTransport(transportation)) {
    return null;
  }
  const destinationRaw =
    transportation.destination?.name ||
    transportation.destination?.disassembledName ||
    transportation.disassembledName ||
    transportation.name ||
    event.destination?.name ||
    "";
  const { destination, via } = splitDestinationAndVia(destinationRaw);
  if (!destination) {
    return null;
  }

  const departAt =
    event.departureTimeEstimated ||
    event.departureTimePlanned ||
    event.arrivalTimeEstimated ||
    event.arrivalTimePlanned ||
    "";
  const platform =
    normalizePlatform(event.location?.properties?.platformName) ||
    normalizePlatform(event.location?.properties?.plannedPlatformName) ||
    normalizePlatform(event.location?.properties?.platform) ||
    normalizePlatform(event.location?.name) ||
    normalizePlatform(event.location?.disassembledName);
  const transportText = getTransportText(transportation);
  const stops = extractOnwardStops(event, destination);
  const destinationId =
    transportation.destination?.id ||
    transportation.destination?.extId ||
    transportation.destination?.properties?.stopId ||
    "";
  const tripIds = uniqueStrings([
    transportation.properties?.gtfsTripId,
    transportation.properties?.RealtimeTripId,
    transportation.properties?.AVMSTripID,
    transportation.properties?.tripCode,
    event.properties?.RealtimeTripId,
    event.properties?.AVMSTripID,
    event.properties?.tripCode,
  ].map(normalizeTripIdentifier));

  return {
    id: String(event.id || event.globalId || event.properties?.journeyId || `${departAt}-${index}`),
    originId: filters.stationId || event.location?.properties?.stopId || event.location?.id || event.location?.extId || "",
    originName: filters.stationName || extractStopName(event.location),
    destinationId: destinationId ? String(destinationId) : "",
    rawDepartAt: departAt,
    tripId: tripIds[0] || "",
    tripIds,
    line: inferLine(transportText),
    routeName: transportation.name || transportation.disassembledName || transportText || "Sydney Trains",
    destination,
    via,
    platform,
    departsTime: formatInputTimeFromDate(departAt),
    departsDisplay: departAt ? new Date(departAt).toLocaleTimeString("en-AU", {
      timeZone: TFNSW_TIME_ZONE,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }) : "--",
    stopsType: stops.length > 2 ? "Limited Stops" : "All Stops",
    carsCount: defaultConfig.carsCount,
    stops,
  };
}

function parseDepartureEvents(payload, filters = {}) {
  const events = Array.isArray(payload?.stopEvents) ? payload.stopEvents : [];
  const routeFilter = String(filters.routeFilter || "").trim().toLowerCase();
  const platformFilter = String(filters.platformFilter || "").trim();

  return events
    .map((event, index) => normalizeDepartureEvent(event, index, filters))
    .filter(Boolean)
    .filter((item) => !routeFilter || item.routeName.toLowerCase().includes(routeFilter))
    .filter((item) => !platformFilter || item.platform === platformFilter)
    .slice(0, LIVE_MAX_RESULTS);
}

async function fetchLiveJson(state, path, params) {
  const url = new URL(path, `${TFNSW_PROXY_BASE_URL}/`);
  Object.entries(params || {}).forEach(([key, value]) => {
    if (value !== undefined && value !== null && String(value).trim() !== "") {
      url.searchParams.set(key, String(value));
    }
  });

  const response = await fetch(url.toString(), { cache: "no-store" });
  if (!response.ok) {
    const message = await response.text().catch(() => "");
    throw new Error(message || `Live request failed (${response.status})`);
  }
  return response.json();
}

function computeDepartureDate(value) {
  const parsed = parseDepartureTime(value);
  if (!parsed) {
    return null;
  }
  const now = new Date();
  const target = new Date(now);
  target.setHours(parsed.hours, parsed.minutes, 0, 0);
  if (target.getTime() < now.getTime()) {
    target.setDate(target.getDate() + 1);
  }
  return target;
}

function isDepartureNow(config) {
  const target = computeDepartureDate(config.departsTime);
  if (!target) {
    return false;
  }
  const remainingMs = Math.max(target.getTime() - Date.now(), 0);
  if (remainingMs > 23 * 60 * 60 * 1000) {
    return true;
  }
  return remainingMs <= 0;
}

function formatDepartureCountdown(value) {
  const target = computeDepartureDate(value);
  if (!target) {
    return "--";
  }

  const remainingMs = Math.max(target.getTime() - Date.now(), 0);
  if (remainingMs > 23 * 60 * 60 * 1000) {
    return "Now";
  }

  const remainingMinutes = Math.ceil(remainingMs / 60000);
  if (remainingMinutes <= 0) {
    return "Now";
  }

  if (remainingMinutes < 60) {
    return `${remainingMinutes} min`;
  }

  const hours = Math.floor(remainingMinutes / 60);
  const minutes = remainingMinutes % 60;
  return `${hours} hr ${minutes} min`;
}

function formattedNow() {
  return new Date().toLocaleTimeString("en-AU", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

function setText(root, bindKey, value) {
  const el = root.querySelector(`[data-cr-bind="${bindKey}"]`);
  if (!el) {
    return;
  }
  el.textContent = value ?? "";
}

function setDepartsText(root, value) {
  setText(root, "departs", value);
  const departsEl = root.querySelector('[data-cr-bind="departs"]');
  if (!departsEl) {
    return;
  }
  const text = String(value ?? "");
  departsEl.classList.toggle("is-long", text.includes(" hr "));
}

function normalizeStationName(name) {
  if (!name) {
    return "";
  }
  const cleaned = String(name).replace(/^mt\s+/i, "Mount ").trim();
  const normalizedKey = normalizeAliasKey(cleaned);
  return stationAliases[normalizedKey] || cleaned;
}

function normalizeKey(value) {
  if (!value) {
    return "";
  }
  return normalizeStationName(value)
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[^\w\s]/g, "")
    .trim();
}

function normalizeAliasKey(value) {
  if (!value) {
    return "";
  }
  return String(value).toLowerCase().replace(/\s+/g, " ").trim();
}

async function loadTextFile(path) {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`blocked:${path}`);
  }
  return response.text();
}

async function loadAllStationsGroups() {
  try {
    const text = await loadTextFile("./train/all_stations.txt");
    const groups = text
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#"))
      .map((line) =>
        line.split(",").map((entry) =>
          entry
            .split("|")
            .map((name) => normalizeKey(name))
            .filter(Boolean)
        )
      )
      .filter((group) => group.length >= 2);
    allStationsGroups = groups;
  } catch {
    allStationsGroups = [];
  }
}

async function loadStationAliases() {
  try {
    const text = await loadTextFile("./train/station_aliases.txt");
    const lines = text
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#"));

    const aliases = {};
    lines.forEach((line) => {
      const [aliasRaw, canonicalRaw] = line.split("=").map((part) => part.trim());
      if (!aliasRaw || !canonicalRaw) {
        return;
      }
      aliases[normalizeAliasKey(aliasRaw)] = canonicalRaw;
    });
    stationAliases = aliases;
  } catch {
    stationAliases = {};
  }
}

async function loadStopTemplates() {
  try {
    const text = await loadTextFile("./train/templates.txt");
    const lines = text.split(/\r?\n/);
    const templates = [];
    let current = null;

    lines.forEach((rawLine) => {
      const line = rawLine.trim();
      if (!line || line.startsWith("#")) {
        if (current && current.stops.length) {
          templates.push(current);
        }
        current = null;
        return;
      }

      const isHeader = line.startsWith("[") && line.endsWith("]");
      if (isHeader) {
        if (current && current.stops.length) {
          templates.push(current);
        }
        current = {
          name: line.slice(1, -1).trim(),
          stops: [],
          line: "",
          destination: "",
          via: "",
          platform: "",
          carsCount: "",
        };
        return;
      }

      if (!current) {
        return;
      }

      const metaMatch = line.match(/^(\w+)\s*:\s*(.+)$/);
      if (metaMatch) {
        const key = metaMatch[1].toLowerCase();
        const value = metaMatch[2].trim();
        if (key === "line") {
          const normalized = /^t\d+/i.test(value) ? value.toUpperCase() : value;
          current.line = normalized === "Intercity/Regional" ? intercityLineName : normalized;
        }
        if (key === "destination") current.destination = value;
        if (key === "via") current.via = value;
        if (key === "platform") current.platform = value;
        if (key === "cars") current.carsCount = value;
        return;
      }

      current.stops.push(line);
    });

    if (current && current.stops.length) {
      templates.push(current);
    }

    stopTemplates = templates.length ? templates : clone(fallbackTemplates);
  } catch {
    stopTemplates = clone(fallbackTemplates);
  }
}

function ensureResources() {
  if (!allStationsPromise) {
    allStationsPromise = loadAllStationsGroups();
  }
  if (!stationAliasesPromise) {
    stationAliasesPromise = loadStationAliases();
  }
  if (!stopTemplatesPromise) {
    stopTemplatesPromise = loadStopTemplates();
  }
  return Promise.all([allStationsPromise, stationAliasesPromise, stopTemplatesPromise]);
}

function matchRunLength(stopKeys, startIndex, group) {
  const startKey = stopKeys[startIndex];
  if (!startKey) {
    return 0;
  }

  let best = 0;
  const positions = [];
  group.forEach((variants, idx) => {
    if (variants.includes(startKey)) {
      positions.push(idx);
    }
  });

  positions.forEach((pos) => {
    [1, -1].forEach((dir) => {
      let length = 0;
      let groupIndex = pos;
      for (let i = startIndex; i < stopKeys.length; i += 1) {
        if (groupIndex < 0 || groupIndex >= group.length) {
          break;
        }
        const variants = group[groupIndex];
        if (!variants.includes(stopKeys[i])) {
          break;
        }
        length += 1;
        groupIndex += dir;
      }
      if (length > best) {
        best = length;
      }
    });
  });

  return best;
}

function collapseStops(stops) {
  const cleaned = Array.isArray(stops) ? stops.filter(Boolean) : [];
  if (!allStationsGroups.length || cleaned.length < ALL_STATIONS_COLLAPSE_MIN_RUN) {
    return cleaned.map((name) => ({ type: "station", name }));
  }

  const stopKeys = cleaned.map((stop) => normalizeKey(stop));
  const result = [];
  let lastCollapseEnd = null;
  let i = 0;

  const bestRunAtIndex = (startIndex) => {
    let bestRun = 0;
    for (const group of allStationsGroups) {
      const run = matchRunLength(stopKeys, startIndex, group);
      bestRun = Math.max(bestRun, run);
    }
    return bestRun;
  };

  while (i < cleaned.length) {
    const bestRun = bestRunAtIndex(i);
    if (bestRun >= ALL_STATIONS_COLLAPSE_MIN_RUN) {
      const lastIndex = i + bestRun - 1;
      if (lastCollapseEnd !== cleaned[i]) {
        result.push({ type: "station", name: cleaned[i] });
      }
      result.push({ type: "allStationsTo", to: cleaned[lastIndex] });
      lastCollapseEnd = cleaned[lastIndex];
      const canChain = bestRunAtIndex(lastIndex) >= ALL_STATIONS_COLLAPSE_MIN_RUN;
      i = canChain ? lastIndex : lastIndex + 1;
      continue;
    }

    result.push({ type: "station", name: cleaned[i] });
    i += 1;
  }

  return result;
}

function formatStops(stops) {
  const tokens = collapseStops(stops);
  if (tokens.length === 0) {
    return "First stop to be announced.";
  }
  if (tokens.length === 1) {
    return `First stop, ${tokens[0].name}.`;
  }
  if (tokens.length === 2) {
    const second =
      tokens[1].type === "allStationsTo"
        ? `all stations to ${tokens[1].to}`
        : tokens[1].name;
    return `First stop ${tokens[0].name}, and then ${second}.`;
  }

  const phrases = [];
  let afterAllStations = false;
  tokens.forEach((token, index) => {
    if (index === 0) {
      phrases.push(`First stop ${token.name}`);
      return;
    }

    const isLast = index === tokens.length - 1;
    if (token.type === "allStationsTo") {
      phrases.push(isLast ? `and then all stations to ${token.to}` : `then all stations to ${token.to}`);
      afterAllStations = true;
      return;
    }

    if (isLast) {
      phrases.push(afterAllStations ? `and then ${token.name}` : `and ${token.name}`);
      return;
    }

    if (afterAllStations || index === 1) {
      phrases.push(`then ${token.name}`);
      afterAllStations = false;
      return;
    }

    phrases.push(token.name);
  });

  return `${phrases.join(", ")}.`;
}

function buildAnnouncement(config) {
  const stops = Array.isArray(config.stops) ? config.stops.filter(Boolean) : [];
  const via = stops.length === 1 ? "" : config.via ? ` ${config.via}` : "";
  const platform = config.platform || "the platform";
  const platformNumber = Number.parseInt(config.platform, 10);

  const destination =
    config.destination && config.destination.trim()
      ? config.destination.trim()
      : stops.length
      ? stops[stops.length - 1]
      : "";

  if (!Number.isFinite(platformNumber) || platformNumber < 1 || platformNumber > 25) {
    return null;
  }

  const prefix = isDepartureNow(config)
    ? `The train on platform ${platform}`
    : `The next train to arrive on platform ${platform}`;

  if (stops.length === 1) {
    return `${prefix} goes to ${destination} only.`;
  }

  return `${prefix} goes to ${destination}${via}. ${formatStops(stops)}`;
}

function audioSrc(filename) {
  return `./train/audio/${encodeURIComponent(filename)}`;
}

function makeAudioEntry(primary, fallback) {
  return {
    primary,
    fallback: fallback || null,
  };
}

function makeSilenceEntry(ms) {
  return { silenceMs: ms };
}

function makeStationAudioEntry(name, preferInflection) {
  const base = normalizeStationName(name);
  if (!base) {
    return null;
  }
  if (preferInflection) {
    return makeAudioEntry(`${base}.f.mp3`, `${base}.mp3`);
  }
  return makeAudioEntry(`${base}.mp3`);
}

function resolvePlatformAudio(config) {
  const number = Number.parseInt(config.platform, 10);
  if (Number.isFinite(number) && number >= 1 && number <= 25) {
    if (isDepartureNow(config)) {
      return `The train on platform ${number}.mp3`;
    }
    return `The next train to arrive on platform ${number}.mp3`;
  }
  return null;
}

function buildAnnouncementAudio(config) {
  const files = [];
  files.push(makeAudioEntry("CHIMES.mp3"));

  const platformAudio = resolvePlatformAudio(config);
  if (platformAudio) {
    files.push(makeAudioEntry(platformAudio));
  }

  files.push(makeAudioEntry("goes to.mp3"));

  const viaName = config.via ? config.via.replace(/^via\s+/i, "").trim() : "";
  const stops = Array.isArray(config.stops) ? config.stops.filter(Boolean) : [];
  const destination =
    config.destination && config.destination.trim()
      ? config.destination.trim()
      : stops.length
      ? stops[stops.length - 1]
      : "";

  const preferDestinationInflection = !viaName && stops.length !== 1;
  const destinationEntry = makeStationAudioEntry(destination, preferDestinationInflection);
  if (destinationEntry) {
    files.push(destinationEntry);
  }

  if (stops.length === 1) {
    files.push(makeAudioEntry("only.f.mp3"));
  } else {
    if (viaName) {
      files.push(makeAudioEntry("via.mp3"));
      const viaEntry = makeStationAudioEntry(viaName, true);
      if (viaEntry) {
        files.push(viaEntry);
      }
    }

    const tokens = collapseStops(stops);
    if (tokens.length) {
      files.push(makeSilenceEntry(300));
      files.push(makeAudioEntry("First stop.mp3"));

      const first = makeStationAudioEntry(tokens[0].name, false);
      if (first) {
        files.push(first);
      }

      let afterAllStations = false;
      for (let i = 1; i < tokens.length; i += 1) {
        const token = tokens[i];
        const isLast = i === tokens.length - 1;

        if (tokens.length === 2 && isLast) {
          files.push(makeAudioEntry("and then.mp3"));
          if (token.type === "allStationsTo") {
            files.push(makeAudioEntry("all stations to.mp3"));
            const target = makeStationAudioEntry(token.to, true);
            if (target) {
              files.push(target);
            }
          } else {
            const name = makeStationAudioEntry(token.name, true);
            if (name) {
              files.push(name);
            }
          }
          continue;
        }

        if (token.type === "allStationsTo") {
          if (isLast) {
            files.push(makeAudioEntry("and then.mp3"));
            files.push(makeAudioEntry("all stations to.mp3"));
          } else {
            files.push(makeAudioEntry("then all stations to.mp3"));
          }
          const target = makeStationAudioEntry(token.to, isLast);
          if (target) {
            files.push(target);
          }
          afterAllStations = true;
          continue;
        }

        if (isLast) {
          files.push(makeAudioEntry(afterAllStations ? "and then.mp3" : "and.mp3"));
          const name = makeStationAudioEntry(token.name, true);
          if (name) {
            files.push(name);
          }
          continue;
        }

        if (afterAllStations || i === 1) {
          files.push(makeAudioEntry("then.mp3"));
          afterAllStations = false;
        }

        const name = makeStationAudioEntry(token.name, false);
        if (name) {
          files.push(name);
        }
      }
    }
  }

  return files;
}

async function loadArrayBuffer(file) {
  const response = await fetch(audioSrc(file), { cache: "force-cache" });
  if (response.status === 404) {
    throw new Error(`missing:${file}`);
  }
  if (!response.ok) {
    throw new Error(`blocked:${file}`);
  }
  return response.arrayBuffer();
}

function ensureAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioContext;
}

async function fetchAudioBuffers(entries, context) {
  const buffers = [];

  for (const entry of entries) {
    if (entry && typeof entry === "object" && "silenceMs" in entry) {
      const durationMs = Math.max(0, Number(entry.silenceMs) || 0);
      const frameCount = Math.ceil((durationMs / 1000) * context.sampleRate);
      buffers.push(context.createBuffer(1, frameCount, context.sampleRate));
      continue;
    }

    const candidates =
      typeof entry === "string"
        ? [entry]
        : [entry.primary, entry.fallback].filter(Boolean);

    let loaded = null;
    for (const file of candidates) {
      try {
        if (audioBufferCache.has(file)) {
          loaded = audioBufferCache.get(file);
        } else {
          const arrayBuffer = await loadArrayBuffer(file);
          const buffer = await context.decodeAudioData(arrayBuffer.slice(0));
          audioBufferCache.set(file, buffer);
          loaded = buffer;
        }
        break;
      } catch (error) {
        const message = String(error.message || "");
        if (message.startsWith("missing:")) {
          continue;
        }
        throw error;
      }
    }

    if (!loaded) {
      throw new Error(`missing:${candidates[0]}`);
    }

    buffers.push(loaded);
  }

  return buffers;
}

function renderCombinedBuffer(buffers, context) {
  const totalLength = buffers.reduce((sum, buffer) => sum + buffer.length, 0);
  const channels = Math.max(...buffers.map((buffer) => buffer.numberOfChannels));
  const combined = context.createBuffer(channels, totalLength, context.sampleRate);

  let offset = 0;
  buffers.forEach((buffer) => {
    for (let channel = 0; channel < channels; channel += 1) {
      const sourceData = buffer.getChannelData(
        Math.min(channel, buffer.numberOfChannels - 1)
      );
      combined.getChannelData(channel).set(sourceData, offset);
    }
    offset += buffer.length;
  });

  return combined;
}

function stopAnnouncement(state) {
  state.announcementToken += 1;
  if (state.announcementSource) {
    try {
      state.announcementSource.stop();
    } catch {
      // source may already be stopped
    }
    state.announcementSource.disconnect();
    state.announcementSource = null;
  }
  state.announcementActive = false;
}

async function playAudioSequence(state, entries, token) {
  if (!entries.length) {
    return;
  }

  const context = ensureAudioContext();
  if (context.state === "suspended") {
    await context.resume();
  }

  let buffers;
  try {
    buffers = await fetchAudioBuffers(entries, context);
  } catch (error) {
    if (token !== state.announcementToken || state.isDisposed) {
      return;
    }
    const message = String(error.message || "");
    if (message.startsWith("missing:")) {
      state.elements.announcementText.textContent = `Missing audio file: ${message.replace("missing:", "")}`;
      return;
    }
    state.elements.announcementText.textContent = "Audio load failed. Check local server path for train/audio.";
    return;
  }

  if (token !== state.announcementToken || state.isDisposed) {
    return;
  }

  const combined = renderCombinedBuffer(buffers, context);
  const source = context.createBufferSource();
  source.buffer = combined;

  let outputNode = source;
  if (state.config.paEffect === "on") {
    const highPass = context.createBiquadFilter();
    highPass.type = "highpass";
    highPass.frequency.value = 420;

    const lowPass = context.createBiquadFilter();
    lowPass.type = "lowpass";
    lowPass.frequency.value = 2800;

    const midBoost = context.createBiquadFilter();
    midBoost.type = "peaking";
    midBoost.frequency.value = 2200;
    midBoost.Q.value = 1.2;
    midBoost.gain.value = 6;

    const grit = context.createWaveShaper();
    const curve = new Float32Array(65536);
    for (let i = 0; i < curve.length; i += 1) {
      const x = (i / (curve.length - 1)) * 2 - 1;
      curve[i] = Math.tanh(x * 2.2);
    }
    grit.curve = curve;
    grit.oversample = "4x";

    const compressor = context.createDynamicsCompressor();
    compressor.threshold.value = -26;
    compressor.ratio.value = 6;
    compressor.attack.value = 0.005;
    compressor.release.value = 0.1;

    outputNode
      .connect(highPass)
      .connect(lowPass)
      .connect(midBoost)
      .connect(grit)
      .connect(compressor)
      .connect(context.destination);

    outputNode = compressor;
  } else if (state.config.paEffect === "room" || state.config.paEffect === "outdoor") {
    const isRoom = state.config.paEffect === "room";
    const isOutdoor = state.config.paEffect === "outdoor";

    const highPass = context.createBiquadFilter();
    highPass.type = "highpass";
    highPass.frequency.value = isOutdoor ? 150 : 120;

    const lowPass = context.createBiquadFilter();
    lowPass.type = "lowpass";
    lowPass.frequency.value = isOutdoor ? 8000 : 6000;

    const highShelf = context.createBiquadFilter();
    highShelf.type = "highshelf";
    highShelf.frequency.value = 4500;
    highShelf.gain.value = isOutdoor ? 6 : 0;

    const preDelay = context.createDelay(0.2);
    preDelay.delayTime.value = isOutdoor ? 0.01 : isRoom ? 0.015 : 0.02;

    const feedbackDelay = context.createDelay(0.8);
    feedbackDelay.delayTime.value = isOutdoor ? 0.08 : isRoom ? 0.12 : 0.16;

    const feedbackGain = context.createGain();
    feedbackGain.gain.value = isOutdoor ? 0.05 : isRoom ? 0.1 : 0.14;

    const wetGain = context.createGain();
    wetGain.gain.value = isOutdoor ? 0.04 : isRoom ? 0.12 : 0.18;

    const dryGain = context.createGain();
    dryGain.gain.value = isOutdoor ? 0.98 : isRoom ? 0.95 : 0.92;

    const compressor = context.createDynamicsCompressor();
    compressor.threshold.value = -22;
    compressor.ratio.value = 3.5;
    compressor.attack.value = 0.01;
    compressor.release.value = 0.25;

    outputNode
      .connect(highPass)
      .connect(lowPass)
      .connect(highShelf)
      .connect(preDelay)
      .connect(feedbackDelay)
      .connect(wetGain)
      .connect(compressor)
      .connect(context.destination);

    outputNode
      .connect(highPass)
      .connect(lowPass)
      .connect(highShelf)
      .connect(dryGain)
      .connect(context.destination);

    feedbackDelay.connect(feedbackGain).connect(feedbackDelay);
    outputNode = compressor;
  } else {
    outputNode.connect(context.destination);
  }

  state.announcementActive = true;
  state.announcementSource = source;
  source.onended = () => {
    if (state.announcementSource !== source) {
      return;
    }
    state.announcementActive = false;
    state.announcementSource = null;
  };

  if (token !== state.announcementToken || state.isDisposed) {
    source.disconnect();
    return;
  }

  source.start();
}

function buildCapacityBars(capacities) {
  const levels = Array.isArray(capacities) ? capacities : [];
  const labels = Array.from({ length: levels.length }, (_, idx) => levels.length - idx);
  const labelHtml = labels
    .map((label, idx) => {
      const classes = ["pid__capacity-label"];
      if (idx === labels.length - 1) {
        classes.push("is-end");
      }
      return `<span class="${classes.join(" ")}">${label}</span>`;
    })
    .join("");
  const blockWidth = 66;
  const gapWidth = 6;
  const totalWidth = levels.length * blockWidth + (levels.length - 1) * gapWidth;
  const barsHtml = levels
    .map((level, idx) => {
      const classes = ["pid__capacity-bar"];
      if (level === "medium") classes.push("is-mid", "is-double");
      if (level === "high") classes.push("is-high", "is-triple");
      if (level === "low") classes.push("is-low");
      if (idx === levels.length - 1) classes.push("is-end");
      return `<span class="${classes.join(" ")}"></span>`;
    })
    .join("");
  return `
    <div class="pid__capacity-labels" style="grid-template-columns: repeat(${levels.length}, 1fr); width: ${totalWidth}px;">${labelHtml}</div>
    <div class="pid__capacity-bars" style="grid-template-columns: repeat(${levels.length}, 1fr); width: ${totalWidth}px;">${barsHtml}</div>
  `;
}

function renderStopsList(state) {
  const listEl = state.elements.stopsList;
  const stops = state.config.stops.length ? state.config.stops : ["No scheduled stops"];
  const shouldScroll = stops.length > 7;

  if (state.stopRafId) {
    cancelAnimationFrame(state.stopRafId);
    state.stopRafId = 0;
  }

  listEl.style.transform = "translate3d(0, 0, 0)";
  listEl.classList.toggle("is-scrolling", shouldScroll);

  if (!shouldScroll) {
    listEl.replaceChildren(
      ...stops.map((stop) => {
        const item = document.createElement("li");
        item.textContent = stop;
        return item;
      })
    );
    return;
  }

  const gaps = ["", "", ""];
  const loopStops = stops.concat(gaps, stops);
  listEl.replaceChildren(
    ...loopStops.map((stop) => {
      const item = document.createElement("li");
      if (!stop) {
        item.className = "pid__gap";
        item.setAttribute("aria-hidden", "true");
        item.textContent = "\u00a0";
      } else {
        item.textContent = stop;
      }
      return item;
    })
  );

  const duration = Math.max(14000, stops.length * 1700);
  const rowsPerLoop = stops.length + gaps.length;
  const beginScroll = (attempt = 0) => {
    const sampleRow = listEl.querySelector("li");
    const rowHeight =
      sampleRow
        ? Number.parseFloat(window.getComputedStyle(sampleRow).height) || sampleRow.offsetHeight
        : 0;
    const loopDistance = rowHeight * rowsPerLoop;
    if (loopDistance <= 1) {
      if (attempt < 180) {
        state.stopRafId = requestAnimationFrame(() => beginScroll(attempt + 1));
      }
      return;
    }

    const start = performance.now();
    const tick = (now) => {
      const elapsed = (now - start) % duration;
      const progress = elapsed / duration;
      const offset = -loopDistance * progress;
      listEl.style.transform = `translate3d(0, ${offset}px, 0)`;
      state.stopRafId = requestAnimationFrame(tick);
    };

    state.stopRafId = requestAnimationFrame(tick);
  };

  state.stopRafId = requestAnimationFrame(() => beginScroll(0));
}

function renderCapacityControls(state) {
  const controlsEl = state.elements.capacityControls;
  controlsEl.innerHTML = state.config.capacities
    .map((level, index) => {
      const carNumber = state.config.capacities.length - index;
      return `
        <label class="cityrail-capacity-row">
          <span>Car ${carNumber}</span>
          <select class="cityrail-input" data-cr-capacity-index="${index}">
            <option value="low" ${level === "low" ? "selected" : ""}>Low</option>
            <option value="medium" ${level === "medium" ? "selected" : ""}>Medium</option>
            <option value="high" ${level === "high" ? "selected" : ""}>High</option>
          </select>
        </label>
      `;
    })
    .join("");

  controlsEl.querySelectorAll("[data-cr-capacity-index]").forEach((select) => {
    select.addEventListener("change", (event) => {
      const idx = Number(event.currentTarget.dataset.crCapacityIndex);
      const next = [...state.config.capacities];
      next[idx] = event.currentTarget.value;
      state.config.capacities = normalizeCapacities(state.config.carsCount, next);
      render(state);
    });
  });
}

function populateTemplateSelect(state) {
  const options = stopTemplates.length ? stopTemplates : fallbackTemplates;
  state.elements.templateSelect.replaceChildren(
    createOption("", "Custom"),
    ...options.map((template) => createOption(template.name, template.name))
  );
}

function updatePidScale(state) {
  const viewport = state.elements.pidViewport;
  const stage = state.elements.pidStage;
  const pidRoot = state.elements.pidRoot;
  if (!viewport || !stage || !pidRoot) {
    return;
  }

  const viewportWidth = viewport.clientWidth;
  const viewportHeight = viewport.clientHeight;
  const baseWidth = PID_BASE_WIDTH;
  const baseHeight = PID_BASE_HEIGHT;
  if (viewportWidth <= 0 || viewportHeight <= 0 || baseWidth <= 0 || baseHeight <= 0) {
    return;
  }

  const scale = Math.max(
    0.1,
    Math.min(viewportWidth / baseWidth, viewportHeight / baseHeight)
  );

  stage.style.width = `${baseWidth * scale}px`;
  stage.style.height = `${baseHeight * scale}px`;
  pidRoot.style.width = `${baseWidth}px`;
  pidRoot.style.height = `${baseHeight}px`;
  pidRoot.style.transform = `scale(${scale})`;
}

function render(state) {
  const { root, config, elements } = state;

  const pidRoot = state.elements.pidRoot;
  const badge = root.querySelector(".pid__line-badge");
  const isIntercity = config.line === intercityLineName;
  const isRegional = config.line === regionalLineName;
  const isIntercityLayout = isIntercity || isRegional;

  if (pidRoot) {
    pidRoot.classList.toggle("is-intercity", isIntercityLayout);
    pidRoot.classList.toggle("is-regional", isRegional);
  }
  if (badge) {
    badge.classList.toggle("is-intercity", isIntercityLayout);
  }

  setText(root, "line", config.line);
  if (isIntercityLayout) {
    const parsed = parseDepartureTime(config.departsTime);
    const departsText = parsed
      ? `${String(parsed.hours).padStart(2, "0")}:${String(parsed.minutes).padStart(2, "0")}`
      : "--";
    setText(root, "destination", departsText);
    setText(root, "via", config.destination || "\u00a0");
  } else {
    setText(root, "destination", config.destination);
    setText(root, "via", config.via || "\u00a0");
  }
  setText(root, "platform", config.platform);
  setText(root, "cars", `${config.carsCount} cars`);
  setText(root, "stopsType", config.stopsType);
  setText(root, "time", formattedNow());
  const departsText = formatDepartureCountdown(config.departsTime);
  setDepartsText(root, departsText);

  const lineColor = lineColors[config.line];
  if (lineColor && !isIntercityLayout && pidRoot) {
    pidRoot.style.setProperty("--pid-line-bg", lineColor);
  }

  elements.capacityBars.innerHTML = buildCapacityBars(config.capacities);
  renderStopsList(state);
  renderCapacityControls(state);

  elements.fields.line.value = config.line;
  elements.fields.destination.value = config.destination;
  elements.fields.via.value = config.via;
  elements.fields.platform.value = config.platform;
  elements.fields.carsCount.value = String(config.carsCount);
  elements.fields.stopsType.value = config.stopsType;
  elements.fields.departsTime.value = config.departsTime;
  elements.fields.paEffect.value = config.paEffect;
  if (document.activeElement !== elements.fields.stops) {
    elements.fields.stops.value = state.rawStopsInput ?? config.stops.join("\n");
  }

  updatePidScale(state);
  saveConfig(config);
}

function applyTemplate(state, templateName) {
  const template = stopTemplates.find((item) => item.name === templateName);
  if (!template) {
    return;
  }

  const via = template.via ? String(template.via).trim() : "";
  const destination =
    template.destination && String(template.destination).trim()
      ? String(template.destination).trim()
      : template.stops[template.stops.length - 1] || state.config.destination;

  state.config = normalizeConfig({
    ...state.config,
    line: template.line || state.config.line,
    destination,
    via: via ? (via.toLowerCase().startsWith("via ") ? via : `via ${via}`) : "",
    platform: template.platform ? String(template.platform) : state.config.platform,
    carsCount: template.carsCount ? Number(template.carsCount) : state.config.carsCount,
    stops: template.stops.slice(),
  });
  state.rawStopsInput = state.config.stops.join("\n");

  render(state);
}

function renderLiveStationOptions(state) {
  const select = state.elements.liveStationSelect;
  const currentId = state.liveSettings.stationId;
  const options = state.liveStations || [];
  select.replaceChildren(
    createOption("", options.length ? "Select a station" : "Search for a station", !currentId),
    ...options.map((station) => createOption(station.id, station.name, station.id === currentId))
  );
}

function renderLiveDepartures(state) {
  const listEl = state.elements.liveResults;
  const departures = state.liveDepartures || [];
  listEl.replaceChildren();

  if (!departures.length) {
    const empty = document.createElement("p");
    empty.className = "cityrail-live-empty";
    empty.textContent = "No live departures loaded.";
    listEl.appendChild(empty);
    return;
  }

  departures.forEach((departure, index) => {
    const row = document.createElement("button");
    row.type = "button";
    row.className = "cityrail-live-result";
    row.dataset.liveDepartureIndex = String(index);

    const time = document.createElement("span");
    time.className = "cityrail-live-time";
    time.textContent = departure.departsDisplay || departure.departsTime || "--";

    const service = document.createElement("span");
    service.className = "cityrail-live-service";
    service.textContent = `${departure.line} ${departure.destination}`;

    const meta = document.createElement("span");
    meta.className = "cityrail-live-meta";
    meta.textContent = [
      departure.platform ? `Platform ${departure.platform}` : "",
      departure.via,
      departure.routeName,
    ]
      .filter(Boolean)
      .join(" | ");

    row.append(time, service, meta);
    listEl.appendChild(row);
  });
}

function saveLiveStateFromInputs(state) {
  state.liveSettings = normalizeLiveSettings({
    ...state.liveSettings,
    stationQuery: state.elements.liveStationQuery.value,
    stationId: state.elements.liveStationSelect.value,
    stationName:
      state.liveStations.find((station) => station.id === state.elements.liveStationSelect.value)?.name ||
      state.liveSettings.stationName,
    platformFilter: state.elements.livePlatformFilter.value,
    routeFilter: state.elements.liveRouteFilter.value,
  });
  saveLiveSettings(state.liveSettings);
}

async function lookupLiveStations(state) {
  saveLiveStateFromInputs(state);
  const query = state.liveSettings.stationQuery;
  if (!query) {
    setStatus(state, "Enter a station name to search.");
    return;
  }

  setStatus(state, "Searching stations...");
  try {
    const payload = await fetchLiveJson(state, "/api/tfnsw/stop-finder", { query });
    state.liveStations = parseStopCandidates(payload);
    if (state.liveStations.length && !state.liveStations.some((station) => station.id === state.liveSettings.stationId)) {
      state.liveSettings.stationId = state.liveStations[0].id;
      state.liveSettings.stationName = state.liveStations[0].name;
    }
    renderLiveStationOptions(state);
    saveLiveSettings(state.liveSettings);
    setStatus(
      state,
      state.liveStations.length
        ? `Found ${state.liveStations.length} station match${state.liveStations.length === 1 ? "" : "es"}.`
        : "No station matches found."
    );
  } catch (error) {
    setStatus(state, String(error.message || error));
  }
}

async function fetchLiveDepartures(state) {
  saveLiveStateFromInputs(state);
  const stationId = state.liveSettings.stationId;
  if (!stationId) {
    setStatus(state, "Select a station before refreshing departures.");
    return;
  }

  setStatus(state, "Loading live departures...");
  try {
    const now = new Date();
    const payload = await fetchLiveJson(state, "/api/tfnsw/departures", {
      stopId: stationId,
      date: formatDateForTfnsw(now),
      time: formatTimeForTfnsw(now),
      limit: LIVE_MAX_RESULTS,
    });
    state.liveDepartures = parseDepartureEvents(payload, state.liveSettings);
    renderLiveDepartures(state);
    setStatus(
      state,
      state.liveDepartures.length
        ? `Loaded ${state.liveDepartures.length} live departure${state.liveDepartures.length === 1 ? "" : "s"}. Select one to import.`
        : "No matching live departures found."
    );
  } catch (error) {
    setStatus(state, String(error.message || error));
  }
}

async function importLiveDeparture(state, departure) {
  if (!departure) {
    return;
  }

  setStatus(state, "Loading stopping pattern...");
  let tripDetails = { stops: [], platform: "", carsCount: 0 };
  try {
    tripDetails = await fetchTripDetails(state, departure);
  } catch (error) {
    console.warn("Unable to load detailed live stopping pattern.", error);
  }

  const stops = tripDetails.stops.length ? tripDetails.stops : departure.stops;
  const carsCount = clampCars(tripDetails.carsCount || departure.carsCount || state.config.carsCount);
  state.config = normalizeConfig({
    ...state.config,
    line: departure.line || state.config.line,
    destination: departure.destination || state.config.destination,
    via: departure.via || "",
    platform: tripDetails.platform || departure.platform || state.config.platform,
    carsCount,
    capacities: normalizeCapacities(carsCount, state.config.capacities),
    stopsType: stops?.length > 2 ? "Limited Stops" : departure.stopsType || "Live Service",
    departsTime: departure.departsTime || state.config.departsTime,
    stops: stops?.length ? stops : [departure.destination].filter(Boolean),
  });
  state.rawStopsInput = state.config.stops.join("\n");
  state.elements.templateSelect.value = "";
  render(state);
  setStatus(
    state,
    tripDetails.stops.length
      ? `Imported ${departure.destination} with ${tripDetails.stops.length} stops.`
      : `Imported ${departure.destination}; detailed stops were not available.`
  );
}

async function playAnnouncement(state) {
  await ensureResources();
  stopAnnouncement(state);
  if (state.isDisposed) {
    return;
  }
  const token = state.announcementToken;

  const announcement = buildAnnouncement(state.config);
  if (!announcement) {
    state.elements.announcementText.textContent = "Invalid platform number. Enter 1-25.";
    return;
  }

  state.elements.announcementText.textContent = announcement;
  const audioEntries = buildAnnouncementAudio(state.config);
  await playAudioSequence(state, audioEntries, token);
}

export function createCityRailNativeApp() {
  const root = document.createElement("div");
  root.className = "cityrail-native-app";
  root.innerHTML = `
    <aside class="cityrail-sidebar">
      <h4 class="cityrail-sidebar-title">CITYRAIL CONTROL PANEL</h4>

      <label class="cityrail-label">
        Template
        <select class="cityrail-input" data-cr-template>
          <option value="">Custom</option>
        </select>
      </label>

      <section class="cityrail-live-panel" aria-label="Live timetable import">
        <h5 class="cityrail-live-title">LIVE TIMETABLE</h5>
        <label class="cityrail-label">
          Station Search
          <input class="cityrail-input" data-cr-live="stationQuery" placeholder="Central" />
        </label>
        <button type="button" class="retro-btn cityrail-live-btn" data-cr-live-action="lookup">
          Find Stations
        </button>
        <label class="cityrail-label">
          Station
          <select class="cityrail-input" data-cr-live="station">
            <option value="">Search for a station</option>
          </select>
        </label>
        <div class="cityrail-control-row">
          <label class="cityrail-label">
            Platform
            <input class="cityrail-input" data-cr-live="platform" placeholder="any" />
          </label>
          <label class="cityrail-label">
            Route
            <input class="cityrail-input" data-cr-live="route" placeholder="any" />
          </label>
        </div>
        <button type="button" class="retro-btn cityrail-live-btn" data-cr-live-action="refresh">
          Refresh Live Services
        </button>
        <p class="cityrail-live-status" data-cr-live-status>Search a station to load live services.</p>
        <div class="cityrail-live-results" data-cr-live-results></div>
      </section>

      <label class="cityrail-label">
        Line
        <select class="cityrail-input" data-cr-field="line">
          <option value="T1">T1</option>
          <option value="T2">T2</option>
          <option value="T3">T3</option>
          <option value="T4">T4</option>
          <option value="T5">T5</option>
          <option value="T6">T6</option>
          <option value="T7">T7</option>
          <option value="T8">T8</option>
          <option value="T9">T9</option>
          <option value="Intercity">Intercity</option>
          <option value="Regional">Regional</option>
        </select>
      </label>

      <label class="cityrail-label">
        Destination
        <input class="cityrail-input" data-cr-field="destination" />
      </label>

      <label class="cityrail-label">
        Via
        <input class="cityrail-input" data-cr-field="via" />
      </label>

      <div class="cityrail-control-row">
        <label class="cityrail-label">
          Platform
          <input class="cityrail-input" data-cr-field="platform" />
        </label>
        <label class="cityrail-label">
          Cars
          <select class="cityrail-input" data-cr-field="carsCount">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </label>
      </div>

      <label class="cityrail-label">
        Stopping Pattern
        <input class="cityrail-input" data-cr-field="stopsType" />
      </label>

      <label class="cityrail-label">
        Departure Time
        <input class="cityrail-input" data-cr-field="departsTime" />
      </label>

      <label class="cityrail-label">
        PA Effect
        <select class="cityrail-input" data-cr-field="paEffect">
          <option value="off">Off</option>
          <option value="on">Muffled</option>
          <option value="room">On</option>
        </select>
      </label>

      <label class="cityrail-label">
        Stops (one per line)
        <textarea class="cityrail-textarea" data-cr-field="stops"></textarea>
      </label>

      <div class="cityrail-capacity-controls" data-cr-capacity-controls></div>

      <button type="button" class="retro-btn cityrail-announce-btn" data-cr-action="announce">
        Play Announcement
      </button>
    </aside>

    <section class="cityrail-display-wrap" data-cr-display-wrap>
      <div class="cityrail-pid-viewport" data-cr-pid-viewport>
        <div class="cityrail-pid-stage" data-cr-pid-stage>
      <main class="pid" data-cr-pid role="img" aria-label="Sydney Trains passenger information display">
        <header class="pid__top">
          <div class="pid__title">Next service</div>
          <div class="pid__timeblock">
            <span>Time now</span>
            <span data-cr-bind="time">00:00:00</span>
          </div>
        </header>

        <section class="pid__summary">
          <div class="pid__line-badge">
            <span data-cr-bind="line">T1</span>
            <img class="pid__line-icon" src="./train/tfnsw_t.svg" alt="" aria-hidden="true" />
          </div>
          <div class="pid__destination">
            <div class="pid__destination-main" data-cr-bind="destination">Hornsby</div>
            <div class="pid__destination-via" data-cr-bind="via">via Gordon</div>
          </div>
          <div class="pid__platform">
            <div class="pid__platform-label">Platform</div>
            <div class="pid__platform-number" data-cr-bind="platform">16</div>
          </div>
        </section>

        <div class="pid__capacity" data-cr-capacity></div>

        <section class="pid__details">
          <div class="pid__stops-window">
            <ul class="pid__stops" data-cr-bind="stops"></ul>
          </div>
          <div class="pid__meta">
            <div class="pid__tags">
              <div class="pid__tag" data-cr-bind="cars">8 cars</div>
              <div class="pid__tag" data-cr-bind="stopsType">Limited Stops</div>
            </div>
            <div class="pid__depart">
              <div class="pid__depart-label">Departs</div>
              <div class="pid__depart-time" data-cr-bind="departs">2 min</div>
            </div>
          </div>
        </section>

        <div class="pid__actions">
          <div class="pid__announcement" aria-live="polite" aria-atomic="true">
            <span class="pid__announcement-text" data-cr-announcement>Ready for announcement.</span>
          </div>
        </div>
      </main>
        </div>
      </div>
    </section>
  `;
  return root;
}

export function initCityRailNativeApp(root) {
  if (!root || root.dataset.cityrailMounted === "true") {
    return;
  }
  root.dataset.cityrailMounted = "true";

  const config = normalizeConfig(loadConfig());
  const liveSettings = loadLiveSettings();
  const fields = {
    line: root.querySelector('[data-cr-field="line"]'),
    destination: root.querySelector('[data-cr-field="destination"]'),
    via: root.querySelector('[data-cr-field="via"]'),
    platform: root.querySelector('[data-cr-field="platform"]'),
    carsCount: root.querySelector('[data-cr-field="carsCount"]'),
    stopsType: root.querySelector('[data-cr-field="stopsType"]'),
    departsTime: root.querySelector('[data-cr-field="departsTime"]'),
    paEffect: root.querySelector('[data-cr-field="paEffect"]'),
    stops: root.querySelector('[data-cr-field="stops"]'),
  };

  const state = {
    root,
    config,
    liveSettings,
    liveStations: liveSettings.stationId
      ? [{ id: liveSettings.stationId, name: liveSettings.stationName || liveSettings.stationId }]
      : [],
    liveDepartures: [],
    rawStopsInput: config.stops.join("\n"),
    stopRafId: 0,
    tickerId: 0,
    announcementSource: null,
    announcementActive: false,
    announcementToken: 0,
    isDisposed: false,
    pidResizeObserver: null,
    elements: {
      fields,
      templateSelect: root.querySelector("[data-cr-template]"),
      capacityBars: root.querySelector("[data-cr-capacity]"),
      capacityControls: root.querySelector("[data-cr-capacity-controls]"),
      stopsList: root.querySelector('[data-cr-bind="stops"]'),
      announceButton: root.querySelector('[data-cr-action="announce"]'),
      announcementText: root.querySelector("[data-cr-announcement]"),
      displayWrap: root.querySelector("[data-cr-display-wrap]"),
      pidViewport: root.querySelector("[data-cr-pid-viewport]"),
      pidStage: root.querySelector("[data-cr-pid-stage]"),
      pidRoot: root.querySelector("[data-cr-pid]"),
      liveStationQuery: root.querySelector('[data-cr-live="stationQuery"]'),
      liveStationSelect: root.querySelector('[data-cr-live="station"]'),
      livePlatformFilter: root.querySelector('[data-cr-live="platform"]'),
      liveRouteFilter: root.querySelector('[data-cr-live="route"]'),
      liveLookupButton: root.querySelector('[data-cr-live-action="lookup"]'),
      liveRefreshButton: root.querySelector('[data-cr-live-action="refresh"]'),
      liveStatus: root.querySelector("[data-cr-live-status]"),
      liveResults: root.querySelector("[data-cr-live-results]"),
    },
  };

  const applyFieldUpdate = (fieldName, value) => {
    if (fieldName === "carsCount") {
      state.config.carsCount = clampCars(value);
      state.config.capacities = normalizeCapacities(
        state.config.carsCount,
        state.config.capacities
      );
    } else if (fieldName === "stops") {
      const rawStopsText = String(value).replace(/\r/g, "");
      state.rawStopsInput = rawStopsText;
      state.config.stops = rawStopsText
        .split("\n")
        .map((entry) => entry.trim())
        .filter(Boolean);
    } else {
      state.config[fieldName] = String(value);
    }
    state.elements.templateSelect.value = "";
    render(state);
  };

  Object.entries(fields).forEach(([fieldName, fieldEl]) => {
    if (!fieldEl) {
      return;
    }
    const eventName = fieldEl.tagName === "SELECT" ? "change" : "input";
    fieldEl.addEventListener(eventName, (event) => {
      applyFieldUpdate(fieldName, event.currentTarget.value);
    });
  });

  state.elements.liveStationQuery.value = liveSettings.stationQuery;
  state.elements.livePlatformFilter.value = liveSettings.platformFilter;
  state.elements.liveRouteFilter.value = liveSettings.routeFilter;
  renderLiveStationOptions(state);
  renderLiveDepartures(state);

  [
    state.elements.liveStationQuery,
    state.elements.livePlatformFilter,
    state.elements.liveRouteFilter,
  ].forEach((fieldEl) => {
    fieldEl.addEventListener("input", () => {
      saveLiveStateFromInputs(state);
    });
  });

  state.elements.liveStationSelect.addEventListener("change", () => {
    saveLiveStateFromInputs(state);
  });

  state.elements.liveStationQuery.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      lookupLiveStations(state);
    }
  });

  state.elements.liveLookupButton.addEventListener("click", () => {
    lookupLiveStations(state);
  });

  state.elements.liveRefreshButton.addEventListener("click", () => {
    fetchLiveDepartures(state);
  });

  state.elements.liveResults.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-live-departure-index]");
    if (!button) {
      return;
    }
    const index = Number(button.dataset.liveDepartureIndex);
    await importLiveDeparture(state, state.liveDepartures[index]);
  });

  state.elements.templateSelect.addEventListener("change", (event) => {
    applyTemplate(state, event.currentTarget.value);
  });

  state.elements.announceButton.addEventListener("click", async () => {
    await playAnnouncement(state);
  });

  const rerenderStopsOnShow = (event) => {
    if (event?.detail?.id !== "cityrail") {
      return;
    }
    renderStopsList(state);
    updatePidScale(state);
  };
  document.addEventListener("window:open", rerenderStopsOnShow);
  document.addEventListener("window:restore", rerenderStopsOnShow);

  const updatePidScaleOnWindowResize = (event) => {
    if (event?.detail?.id !== "cityrail") {
      return;
    }
    updatePidScale(state);
  };
  document.addEventListener("window:resize", updatePidScaleOnWindowResize);

  if (typeof ResizeObserver === "function" && state.elements.displayWrap) {
    state.pidResizeObserver = new ResizeObserver(() => {
      updatePidScale(state);
    });
    state.pidResizeObserver.observe(state.elements.displayWrap);
  }

  state.tickerId = window.setInterval(() => {
    setText(root, "time", formattedNow());
    setDepartsText(root, formatDepartureCountdown(state.config.departsTime));
  }, 1000);

  ensureResources().then(() => {
    populateTemplateSelect(state);
  });

  render(state);

  const cleanup = () => {
    state.isDisposed = true;
    stopAnnouncement(state);

    if (state.stopRafId) {
      cancelAnimationFrame(state.stopRafId);
      state.stopRafId = 0;
    }

    if (state.tickerId) {
      clearInterval(state.tickerId);
      state.tickerId = 0;
    }

    if (state.pidResizeObserver) {
      state.pidResizeObserver.disconnect();
      state.pidResizeObserver = null;
    }

    document.removeEventListener("window:open", rerenderStopsOnShow);
    document.removeEventListener("window:restore", rerenderStopsOnShow);
    document.removeEventListener("window:resize", updatePidScaleOnWindowResize);

    root.dataset.cityrailMounted = "false";
    cleanupByRoot.delete(root);
  };

  cleanupByRoot.set(root, cleanup);
}

export function destroyCityRailNativeApp(root) {
  if (!root) {
    return;
  }
  cleanupByRoot.get(root)?.();
}
