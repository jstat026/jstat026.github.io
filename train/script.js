const storageKey = "pidConfig.v3";
const embeddedMode = new URLSearchParams(window.location.search).get("embedded") === "1";

if (embeddedMode) {
  document.documentElement.classList.add("is-embedded");
  document.body.classList.add("is-embedded");
}

const defaultConfig = {
  line: "T1",
  destination: "Hornsby",
  via: "via Gordon",
  platform: "16",
  carsCount: 8,
  capacities: ["low", "low", "low", "medium", "medium", "low", "low", "low"],
  stopsType: "Limited Stops",
  departsTime: "10:12pm",
  paEffect: "off",
  stops: [
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
  ],
};

const bindMap = {
  line: "[data-bind='line']",
  destination: "[data-bind='destination']",
  via: "[data-bind='via']",
  platform: "[data-bind='platform']",
  cars: "[data-bind='cars']",
  stopsType: "[data-bind='stopsType']",
  departs: "[data-bind='departs']",
  stops: "[data-bind='stops']",
  time: "[data-bind='time']",
};

const cloneConfig = (config) => JSON.parse(JSON.stringify(config));

const mergeConfig = (base, override) => {
  if (!override || typeof override !== "object") return base;
  const result = { ...base };
  Object.keys(override).forEach((key) => {
    if (key in base) {
      result[key] = override[key];
    }
  });
  return result;
};

const loadConfig = () => {
  const stored = localStorage.getItem(storageKey);
  if (!stored) return cloneConfig(defaultConfig);
  try {
    const parsed = JSON.parse(stored);
    return mergeConfig(cloneConfig(defaultConfig), parsed);
  } catch (error) {
    return cloneConfig(defaultConfig);
  }
};

let pidConfig = loadConfig();
let scrollRafId = null;
let announcementAudio = null;
let announcementActive = false;
let announcementQueue = [];
let audioContext = null;
let announcementSource = null;
const audioBufferCache = new Map();
let allStationsGroups = [];
let allStationsPromise = null;
let stationAliases = {};
let stationAliasesPromise = null;
let stopTemplates = [];
let stopTemplatesPromise = null;
const lineColors = {
  T1: "#F99D1C",
  T2: "#0098CD",
  T3: "#F37021",
  T4: "#005AA3",
  T5: "#C4258F",
  T6: "#7C3E21",
  T7: "#6F818E",
  T8: "#00954C",
  T9: "#D11F2F",
};
const intercityLineName = "Intercity";
const regionalLineName = "Regional";

const setText = (key, value) => {
  const el = document.querySelector(bindMap[key]);
  if (!el) return;
  el.textContent = value ?? "";
};

const stopScrollAnimation = (stopsEl) => {
  if (scrollRafId) {
    cancelAnimationFrame(scrollRafId);
    scrollRafId = null;
  }
  if (stopsEl) {
    stopsEl.style.transform = "translateY(0)";
    stopsEl.style.willChange = "auto";
  }
};

const startScrollAnimation = (stopsEl, durationMs, loopDistance) => {
  const start = performance.now();
  stopsEl.style.willChange = "transform";

  const tick = (now) => {
    const elapsed = (now - start) % durationMs;
    const progress = elapsed / durationMs;
    const offset = -loopDistance * progress;
    stopsEl.style.transform = `translate3d(0, ${offset}px, 0)`;
    scrollRafId = requestAnimationFrame(tick);
  };

  scrollRafId = requestAnimationFrame(tick);
};

const updateStops = (stops) => {
  const stopsEl = document.querySelector(bindMap.stops);
  if (!stopsEl) return;
  const items = Array.isArray(stops) ? stops : [];
  const entries = items.map((stop) => `<li>${stop}</li>`);
  const shouldScroll = entries.length > 6;
  stopScrollAnimation(stopsEl);
  if (shouldScroll) {
    const gapCount = 4;
    const gaps = Array.from({ length: gapCount }, () =>
      `<li class="pid__gap" aria-hidden="true">&nbsp;</li>`
    );
    const loopMarkup = entries.concat(gaps).join("");
    stopsEl.innerHTML = loopMarkup + loopMarkup;
    stopsEl.classList.add("is-scrolling");
    stopsEl.style.animation = "none";
    const durationMs = Math.max(entries.length * 1.8, 16) * 1000;
    requestAnimationFrame(() => {
      const loopDistance = stopsEl.scrollHeight / 2;
      startScrollAnimation(stopsEl, durationMs, loopDistance);
    });
  } else {
    stopsEl.innerHTML = entries.join("");
    stopsEl.classList.remove("is-scrolling");
    stopsEl.style.animation = "none";
  }
};

const normalizeCapacity = (carsCount, capacities) => {
  const count = Math.max(1, Math.min(10, Number(carsCount) || 1));
  const result = Array.isArray(capacities) ? capacities.slice(0, count) : [];
  while (result.length < count) {
    result.push("low");
  }
  return result;
};

const renderCapacity = (carsCount, capacities) => {
  const container = document.querySelector("[data-capacity]");
  if (!container) return;
  const levels = normalizeCapacity(carsCount, capacities);
  const labels = Array.from({ length: levels.length }, (_, idx) => levels.length - idx);
  const labelHtml = labels.map((label) => `<span>${label}</span>`).join("");
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
  container.innerHTML = `
    <div class="pid__capacity-labels" style="grid-template-columns: repeat(${levels.length}, 1fr); width: ${totalWidth}px;">${labelHtml}</div>
    <div class="pid__capacity-bars" style="grid-template-columns: repeat(${levels.length}, 1fr); width: ${totalWidth}px;">${barsHtml}</div>
  `;
};

const renderCapacityControls = (carsCount, capacities) => {
  const container = document.querySelector("[data-capacity-controls]");
  if (!container) return;
  const levels = normalizeCapacity(carsCount, capacities);
  const rows = levels
    .map((level, idx) => {
      const label = levels.length - idx;
      return `
        <div class="pid__controls-capacity-row">
          <span>Car ${label}</span>
          <select class="pid__controls-input" data-capacity-index="${idx}">
            <option value="low" ${level === "low" ? "selected" : ""}>Low</option>
            <option value="medium" ${level === "medium" ? "selected" : ""}>Medium</option>
            <option value="high" ${level === "high" ? "selected" : ""}>High</option>
          </select>
        </div>
      `;
    })
    .join("");
  container.innerHTML = rows;
};

const applyConfig = (config) => {
  const carsCount = Math.max(1, Math.min(10, Number(config.carsCount) || 1));
  config.carsCount = carsCount;
  config.capacities = normalizeCapacity(carsCount, config.capacities);
  const stops = Array.isArray(config.stops) ? config.stops.filter(Boolean) : [];
  const destination =
    config.destination && config.destination.trim() ? config.destination.trim() : "";
  const isIntercity = config.line === intercityLineName;
  const isRegional = config.line === regionalLineName;
  const isIntercityLayout = isIntercity || isRegional;
  setText("line", config.line);
  const pidRoot = document.querySelector(".pid");
  if (pidRoot) {
    pidRoot.classList.toggle("is-intercity", isIntercityLayout);
    pidRoot.classList.toggle("is-regional", isRegional);
  }
  if (isIntercityLayout) {
    setText("destination", formatDepartureTime24(config.departsTime));
    setText("via", destination || "\u00a0");
  } else {
    setText("destination", destination);
    const viaText = config.via && config.via.trim() ? config.via : "\u00a0";
    setText("via", viaText);
  }
  setText("platform", config.platform);
  setText("cars", `${carsCount} cars`);
  setText("stopsType", config.stopsType);
  const badge = document.querySelector(".pid__line-badge");
  if (badge) {
    badge.classList.toggle("is-intercity", isIntercityLayout);
  }
  const lineColor = lineColors[config.line];
  if (lineColor && !isIntercityLayout) {
    document.documentElement.style.setProperty("--pid-line-bg", lineColor);
  }
  if (isRegional) {
    renderCapacity(0, []);
  } else {
    renderCapacity(config.carsCount, config.capacities);
  }
  updateStops(config.stops);
};

const updateTime = () => {
  const now = new Date();
  const value = now.toLocaleTimeString("en-AU", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  setText("time", value);
};

const parseDepartureTime = (value) => {
  if (!value) return null;
  const trimmed = value.trim().toLowerCase();
  const match = trimmed.match(/^(\d{1,2})(?::(\d{2}))?\s*(am|pm)?$/);
  if (!match) return null;
  let hours = Number(match[1]);
  const minutes = Number(match[2] || "0");
  const suffix = match[3];
  if (minutes >= 60) return null;
  if (suffix) {
    if (hours === 12) hours = 0;
    if (suffix === "pm") hours += 12;
  }
  if (hours >= 24) return null;
  return { hours, minutes };
};

const computeDepartureDate = (value) => {
  const parsed = parseDepartureTime(value);
  if (!parsed) return null;
  const now = new Date();
  const target = new Date(now);
  target.setHours(parsed.hours, parsed.minutes, 0, 0);
  if (target.getTime() < now.getTime()) {
    target.setDate(target.getDate() + 1);
  }
  return target;
};

const updateDepartCountdown = () => {
  const target = computeDepartureDate(pidConfig.departsTime);
  if (!target) {
    setText("departs", "--");
    return;
  }
  const remainingMs = Math.max(target.getTime() - Date.now(), 0);
  if (remainingMs > 23 * 60 * 60 * 1000) {
    setText("departs", "Now");
    return;
  }
  const remainingMinutes = Math.ceil(remainingMs / 60000);
  let label = "Now";
  if (remainingMinutes > 0) {
    if (remainingMinutes >= 60) {
      const hours = Math.floor(remainingMinutes / 60);
      const minutes = remainingMinutes % 60;
      label = `${hours} hr ${minutes} min`;
    } else {
      label = `${remainingMinutes} min`;
    }
  }
  setText("departs", label);
};

const formatDepartureTime24 = (value) => {
  const parsed = parseDepartureTime(value);
  if (!parsed) return "--";
  const hours = parsed.hours.toString().padStart(2, "0");
  const minutes = parsed.minutes.toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};

const isDepartureNow = () => {
  const target = computeDepartureDate(pidConfig.departsTime);
  if (!target) return false;
  const remainingMs = Math.max(target.getTime() - Date.now(), 0);
  if (remainingMs > 23 * 60 * 60 * 1000) return true;
  return remainingMs <= 0;
};

const saveConfig = () => {
  localStorage.setItem(storageKey, JSON.stringify(pidConfig));
};

const getByPath = (obj, path) => {
  return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), obj);
};

const setByPath = (obj, path, value) => {
  obj[path] = value;
};

const normalizeStops = (value) => {
  return value
    .split(/\n|,/)
    .map((stop) => stop.trim())
    .filter(Boolean);
};

const formatTimeInput = (date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const suffix = hours >= 12 ? "pm" : "am";
  const hour12 = hours % 12 || 12;
  const minuteText = minutes.toString().padStart(2, "0");
  return `${hour12}:${minuteText}${suffix}`;
};

const normalizeKey = (value) => {
  if (!value) return "";
  return normalizeStationName(value)
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[^\w\s]/g, "")
    .trim();
};

const normalizeAliasKey = (value) => {
  if (!value) return "";
  return value.toLowerCase().replace(/\s+/g, " ").trim();
};

const loadTextFile = (path) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", path, true);
    request.responseType = "text";
    request.onload = () => {
      if (request.status === 200 || (request.status === 0 && request.responseText)) {
        resolve(request.responseText);
        return;
      }
      reject(new Error(`blocked:${path}`));
    };
    request.onerror = () => reject(new Error(`blocked:${path}`));
    request.send();
  });
};

const loadAllStationsGroups = async () => {
  try {
    const text = await loadTextFile("all_stations.txt");
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
  } catch (error) {
    allStationsGroups = [];
  }
};

const loadStationAliases = async () => {
  try {
    const text = await loadTextFile("station_aliases.txt");
    const lines = text
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#"));
    const aliases = {};
    lines.forEach((line) => {
      const [aliasRaw, canonicalRaw] = line.split("=").map((part) => part.trim());
      if (!aliasRaw || !canonicalRaw) return;
      aliases[normalizeAliasKey(aliasRaw)] = canonicalRaw;
    });
    stationAliases = aliases;
  } catch (error) {
    stationAliases = {};
  }
};

const loadStopTemplates = async () => {
  try {
    const text = await loadTextFile("templates.txt");
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
      if (!current) return;
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
    stopTemplates = templates;
  } catch (error) {
    stopTemplates = [];
  }
};

const matchRunLength = (stopKeys, startIndex, group) => {
  const startKey = stopKeys[startIndex];
  if (!startKey) return 0;
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
        if (groupIndex < 0 || groupIndex >= group.length) break;
        const variants = group[groupIndex];
        if (!variants.includes(stopKeys[i])) break;
        length += 1;
        groupIndex += dir;
      }
      if (length > best) best = length;
    });
  });
  return best;
};

const collapseStops = (stops) => {
  const cleaned = Array.isArray(stops) ? stops.filter(Boolean) : [];
  if (!allStationsGroups.length || cleaned.length < 3) {
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
    if (bestRun >= 3) {
      const lastIndex = i + bestRun - 1;
      if (lastCollapseEnd !== cleaned[i]) {
        result.push({ type: "station", name: cleaned[i] });
      }
      result.push({ type: "allStationsTo", to: cleaned[lastIndex] });
      lastCollapseEnd = cleaned[lastIndex];
      const canChain = bestRunAtIndex(lastIndex) >= 3;
      i = canChain ? lastIndex : lastIndex + 1;
      continue;
    }
    result.push({ type: "station", name: cleaned[i] });
    i += 1;
  }
  return result;
};

const formatStops = (stops) => {
  const tokens = collapseStops(stops);
  if (tokens.length === 0) return "First stop to be announced.";
  if (tokens.length === 1) return `First stop, ${tokens[0].name}.`;
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
      phrases.push(`and ${token.name}`);
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
};

const buildAnnouncement = (config) => {
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
  const prefix = isDepartureNow()
    ? `The train on platform ${platform}`
    : `The next train to arrive on platform ${platform}`;
  if (stops.length === 1) {
    return `${prefix} goes to ${destination} only.`;
  }
  return `${prefix} goes to ${destination}${via}. ${formatStops(stops)}`;
};

const normalizeStationName = (name) => {
  if (!name) return "";
  const cleaned = name.replace(/^mt\s+/i, "Mount ").trim();
  const normalizedKey = normalizeAliasKey(cleaned);
  return stationAliases[normalizedKey] || cleaned;
};

const audioSrc = (filename) => `audio/${encodeURIComponent(filename)}`;

const makeAudioEntry = (primary, fallback) => ({
  primary,
  fallback: fallback || null,
});

const makeSilenceEntry = (ms) => ({ silenceMs: ms });

const makeStationAudioEntry = (name, preferInflection) => {
  const base = normalizeStationName(name);
  if (!base) return null;
  if (preferInflection) {
    return makeAudioEntry(`${base}.f.mp3`, `${base}.mp3`);
  }
  return makeAudioEntry(`${base}.mp3`);
};

const announceError = (missing) => {
  const output = document.querySelector(".pid__announcement-text");
  if (output) output.textContent = `Missing audio file: ${missing}`;
};

const loadArrayBuffer = (file) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", audioSrc(file), true);
    request.responseType = "arraybuffer";
    request.onload = () => {
      const hasData = request.response && request.response.byteLength > 0;
      if (request.status === 404) {
        reject(new Error(`missing:${file}`));
        return;
      }
      if (request.status === 200 || (request.status === 0 && hasData)) {
        resolve(request.response);
        return;
      }
      reject(new Error(`blocked:${file}`));
    };
    request.onerror = () => reject(new Error(`blocked:${file}`));
    request.send();
  });
};

const resolvePlatformAudio = (platform) => {
  const number = Number.parseInt(platform, 10);
  if (Number.isFinite(number) && number >= 1 && number <= 25) {
    if (isDepartureNow()) {
      return `The train on platform ${number}.mp3`;
    }
    return `The next train to arrive on platform ${number}.mp3`;
  }
  return null;
};

const buildAnnouncementAudio = (config) => {
  const files = [];
  files.push(makeAudioEntry("CHIMES.mp3"));
  const platformAudio = resolvePlatformAudio(config.platform);
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
  if (destinationEntry) files.push(destinationEntry);

  if (stops.length === 1) {
    files.push(makeAudioEntry("only.f.mp3"));
  } else {
    if (viaName) {
      files.push(makeAudioEntry("via.mp3"));
      const viaEntry = makeStationAudioEntry(viaName, true);
      if (viaEntry) files.push(viaEntry);
    }

    const tokens = collapseStops(stops);
    if (tokens.length) {
      files.push(makeSilenceEntry(300));
      files.push(makeAudioEntry("First stop.mp3"));
      const first = makeStationAudioEntry(tokens[0].name, false);
      if (first) files.push(first);
      let afterAllStations = false;
      for (let i = 1; i < tokens.length; i += 1) {
        const token = tokens[i];
        const isLast = i === tokens.length - 1;
        if (tokens.length === 2 && isLast) {
          files.push(makeAudioEntry("and then.mp3"));
          if (token.type === "allStationsTo") {
            files.push(makeAudioEntry("all stations to.mp3"));
            const target = makeStationAudioEntry(token.to, true);
            if (target) files.push(target);
          } else {
            const name = makeStationAudioEntry(token.name, true);
            if (name) files.push(name);
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
          if (target) files.push(target);
          afterAllStations = true;
          continue;
        }
        if (isLast) {
          files.push(makeAudioEntry("and.mp3"));
          const useInflection = tokens.length > 1;
          const name = makeStationAudioEntry(token.name, useInflection);
          if (name) files.push(name);
          continue;
        }
        if (afterAllStations || i === 1) {
          files.push(makeAudioEntry("then.mp3"));
          afterAllStations = false;
        }
        const name = makeStationAudioEntry(token.name, false);
        if (name) files.push(name);
      }
    }
  }

  return files;
};

const stopAnnouncement = () => {
  if (announcementAudio) {
    announcementAudio.pause();
    announcementAudio.currentTime = 0;
  }
  if (announcementSource) {
    announcementSource.stop();
    announcementSource.disconnect();
    announcementSource = null;
  }
  announcementAudio = null;
  announcementActive = false;
};

const ensureAudioContext = () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioContext;
};

const fetchAudioBuffers = async (files, context) => {
  const buffers = [];
  for (const entry of files) {
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
          const buffer = await context.decodeAudioData(arrayBuffer);
          audioBufferCache.set(file, buffer);
          loaded = buffer;
        }
        break;
      } catch (error) {
        const message = String(error.message || "");
        if (message.startsWith("blocked:") && window.location.protocol === "file:") {
          announceError("Audio load blocked over file://. Run a local server.");
          return null;
        }
        if (message.startsWith("missing:")) {
          continue;
        }
        announceError(file);
        return null;
      }
    }
    if (!loaded) {
      announceError(candidates[0]);
      return null;
    }
    buffers.push(loaded);
  }
  return buffers;
};

const renderCombinedBuffer = (buffers, context) => {
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
};

const playAudioSequence = async (files) => {
  if (!files.length) return;
  const context = ensureAudioContext();
  if (context.state === "suspended") {
    await context.resume();
  }

  const buffers = await fetchAudioBuffers(files, context);
  if (!buffers) return;
  const combined = renderCombinedBuffer(buffers, context);

  announcementActive = true;
  const source = context.createBufferSource();
  source.buffer = combined;
  let outputNode = source;
  if (pidConfig.paEffect === "on") {
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
  } else if (pidConfig.paEffect === "room" || pidConfig.paEffect === "outdoor") {
    const isRoom = pidConfig.paEffect === "room";
    const isOutdoor = pidConfig.paEffect === "outdoor";
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
  announcementSource = source;
  source.onended = () => {
    announcementActive = false;
    announcementSource = null;
  };
  source.start();
};

const playAnnouncement = async () => {
  if (allStationsPromise) {
    await allStationsPromise;
  }
  if (stationAliasesPromise) {
    await stationAliasesPromise;
  }
  stopAnnouncement();
  const output = document.querySelector(".pid__announcement-text");
  const announcement = buildAnnouncement(pidConfig);
  if (!announcement) {
    announceError("Invalid platform number. Enter 1–25.");
    return;
  }
  currentAnnouncement = announcement;
  if (output) output.textContent = currentAnnouncement;
  const audioFiles = buildAnnouncementAudio(pidConfig);
  playAudioSequence(audioFiles);
};

const initControls = () => {
  const controls = document.querySelector(".pid__controls");
  const inputs = document.querySelectorAll("[data-key]");
  const templateSelect = document.querySelector("[data-template-select]");
  const announceButton = document.querySelector(".pid__announce");
  let inputDebounce = null;

  const syncInputs = () => {
    inputs.forEach((input) => {
      const key = input.dataset.key;
      if (!key) return;
      const value = getByPath(pidConfig, key);
      if (input.dataset.type === "list") {
        input.value = Array.isArray(value) ? value.join("\n") : "";
        return;
      }
      if (input.tagName === "SELECT") {
        input.value = value ?? "";
        return;
      }
      input.value = value ?? "";
    });
    renderCapacityControls(pidConfig.carsCount, pidConfig.capacities);
  };

  const handleCapacityChange = (event) => {
    const select = event.target;
    const index = Number(select.dataset.capacityIndex);
    if (!Number.isFinite(index)) return;
    const levels = normalizeCapacity(pidConfig.carsCount, pidConfig.capacities);
    levels[index] = select.value;
    pidConfig.capacities = levels;
    applyConfig(pidConfig);
    saveConfig();
  };

  const handleInput = (event) => {
    const input = event.target;
    const key = input.dataset.key;
    if (!key) return;
    let value = input.value;
    if (input.dataset.type === "list") {
      value = normalizeStops(input.value);
    } else if (input.type === "number") {
      value = input.value === "" ? 0 : Number(input.value);
    }
    setByPath(pidConfig, key, value);
    if (key === "carsCount") {
      pidConfig.capacities = normalizeCapacity(value, pidConfig.capacities);
      renderCapacityControls(pidConfig.carsCount, pidConfig.capacities);
    }
    const isTextInput =
      input.tagName === "TEXTAREA" || (input.tagName === "INPUT" && input.type === "text");
    if (isTextInput) {
      if (inputDebounce) window.clearTimeout(inputDebounce);
      inputDebounce = window.setTimeout(() => {
        applyConfig(pidConfig);
        updateDepartCountdown();
        saveConfig();
      }, 200);
      return;
    }
    applyConfig(pidConfig);
    updateDepartCountdown();
    saveConfig();
  };

  const populateTemplateSelect = () => {
    if (!templateSelect) return;
    const options = stopTemplates
      .map((template) => `<option value="${template.name}">${template.name}</option>`)
      .join("");
    templateSelect.innerHTML = `<option value="">Select a template</option>${options}`;
  };

  const handleTemplateSelect = () => {
    if (!templateSelect || !templateSelect.value) return;
    const template = stopTemplates.find((item) => item.name === templateSelect.value);
    if (!template) return;
    pidConfig.stops = template.stops.slice();
    if (template.line) pidConfig.line = template.line;
    if (template.destination && template.destination.trim()) {
      pidConfig.destination = template.destination.trim();
    } else {
      const fallbackDestination = template.stops[template.stops.length - 1] || "";
      pidConfig.destination = fallbackDestination;
    }
    const via = template.via.trim();
    if (via) {
      pidConfig.via = via.toLowerCase().startsWith("via ") ? via : `via ${via}`;
    } else {
      pidConfig.via = "";
    }
    if (template.platform) pidConfig.platform = String(template.platform);
    if (template.carsCount) pidConfig.carsCount = Number(template.carsCount);
    pidConfig.capacities = normalizeCapacity(pidConfig.carsCount, pidConfig.capacities);
    applyConfig(pidConfig);
    updateDepartCountdown();
    syncInputs();
    saveConfig();
  };

  inputs.forEach((input) => {
    input.addEventListener("input", handleInput);
    input.addEventListener("change", handleInput);
  });

  const capacityContainer = document.querySelector("[data-capacity-controls]");
  if (capacityContainer) {
    capacityContainer.addEventListener("change", handleCapacityChange);
  }

  if (templateSelect) {
    templateSelect.addEventListener("change", handleTemplateSelect);
  }

  syncInputs();

  if (stopTemplatesPromise) {
    stopTemplatesPromise.then(populateTemplateSelect);
  } else {
    populateTemplateSelect();
  }

  if (announceButton) {
    announceButton.addEventListener("click", playAnnouncement);
  }
};

applyConfig(pidConfig);
updateTime();
updateDepartCountdown();
setInterval(updateTime, 1000);
setInterval(updateDepartCountdown, 1000);
stopTemplatesPromise = loadStopTemplates();
allStationsPromise = loadAllStationsGroups();
stationAliasesPromise = loadStationAliases();
initControls();
