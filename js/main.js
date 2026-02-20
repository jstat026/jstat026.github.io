import * as animations from "./animations.js";
import { createWindowManager } from "./window-manager.js";
import { createCityRailNativeApp, destroyCityRailNativeApp, initCityRailNativeApp } from "./cityrail-native.js";
import { createMinecraftSection } from "./minecraft-app.js";

const portfolioData = {
  about: {
    name: "Dr. Alex Morgan",
    role: "Assistant Professor of Computer Science",
    affiliation: "Department of Computing, Meridian University",
    bio: "I design dependable machine learning systems for public-interest domains. My group studies interpretable AI, human-centered evaluation, and data stewardship practices for long-term impact.",
    interests: [
      "Reliable and interpretable machine learning",
      "Human-AI collaboration in scientific workflows",
      "Responsible data infrastructures and governance",
      "Computational social science methods",
    ],
    photo: "./assets/icons/profile-placeholder.svg",
  },
  publications: [
    {
      id: "pub-2026-1",
      year: 2026,
      title: "Auditing Foundation Models Under Distribution Drift",
      authors: "A. Morgan, J. Patel, R. Chen",
      venue: "Transactions on Machine Learning Systems",
      keywords: ["audit", "foundation models", "robustness"],
      abstract:
        "We propose a lifecycle audit protocol that combines stress testing and behavior logging to quantify drift impact before deployment.",
    },
    {
      id: "pub-2025-1",
      year: 2025,
      title: "Grounded Explanations for Decision Support in Education",
      authors: "A. Morgan, K. Alvarez",
      venue: "CHI 2025",
      keywords: ["explainability", "education", "HCI"],
      abstract:
        "This paper introduces explanation cards linked to evidence traces and shows improved trust calibration in advising workflows.",
    },
    {
      id: "pub-2024-1",
      year: 2024,
      title: "Data Contracts for Cross-Lab Reproducibility",
      authors: "A. Morgan, S. Okafor, T. Singh",
      venue: "NeurIPS Datasets and Benchmarks",
      keywords: ["reproducibility", "data contracts", "MLOps"],
      abstract:
        "We define machine-readable data contracts that formalize provenance, schema evolution, and quality constraints across labs.",
    },
    {
      id: "pub-2023-1",
      year: 2023,
      title: "Measuring Longitudinal Fairness in Public Sector ML",
      authors: "A. Morgan, P. Li",
      venue: "FAccT 2023",
      keywords: ["fairness", "public sector", "evaluation"],
      abstract:
        "Our study evaluates fairness metrics over multi-year windows and documents hidden regressions not visible in one-shot benchmarks.",
    },
  ],
  researchAreas: [
    {
      id: "area-1",
      name: "Interpretable Machine Learning",
      description: "Transparent model design and explanation systems for high-stakes decision support.",
      points: [
        "Counterfactual explanation frameworks",
        "Error taxonomy for model debugging",
        "Evaluation protocols with domain experts",
      ],
    },
    {
      id: "area-2",
      name: "Responsible AI Operations",
      description: "Operational methods for governance, monitoring, and incident response in deployed models.",
      points: [
        "Model cards connected to runtime telemetry",
        "Risk-trigger thresholds and rollback policies",
        "Cross-team accountability workflows",
      ],
    },
    {
      id: "area-3",
      name: "Computational Social Systems",
      description: "Empirical analysis of institutional behavior using mixed quantitative methods.",
      points: [
        "Causal inference under policy interventions",
        "NLP for civic text corpora",
        "Hybrid qualitative-quantitative validation",
      ],
    },
  ],
  teaching: [
    {
      courseCode: "CS 521",
      title: "Interpretable AI",
      semester: "Spring 2026",
      description:
        "Graduate seminar on explainability methods, uncertainty communication, and human factors in model interpretation.",
    },
    {
      courseCode: "CS 430",
      title: "Machine Learning Systems",
      semester: "Fall 2025",
      description:
        "Project-focused course on training pipelines, evaluation infrastructure, deployment constraints, and monitoring.",
    },
    {
      courseCode: "CS 250",
      title: "Data Structures & Algorithms",
      semester: "Spring 2025",
      description:
        "Core undergraduate algorithms course with emphasis on proofs, complexity, and implementation tradeoffs.",
    },
  ],
  cv: {
    sections: [
      {
        heading: "Education",
        lines: [
          "Ph.D., Computer Science, Northbridge Institute (2021)",
          "M.S., Data Science, Northbridge Institute (2017)",
        ],
      },
      {
        heading: "Appointments",
        lines: [
          "Assistant Professor, Meridian University (2023-present)",
          "Postdoctoral Fellow, Center for Trustworthy AI (2021-2023)",
        ],
      },
      {
        heading: "Selected Honors",
        lines: [
          "NSF CAREER Award (placeholder)",
          "Best Paper Honorable Mention, CHI 2025",
        ],
      },
    ],
    downloadUrl: "#",
  },
  mathStat301: {
    course: "Mathematical Statistics 1",
    topicsIndexPath: "./assets/notes/mathstat301/topics.json",
  },
  cityRail: {
    name: "CityRail Control",
  },
  flappy: {
    gravity: 1200,
    fallGravityMultiplier: 1.52,
    jumpVelocity: -360,
    pipeSpeed: 190,
    spawnInterval: 1.2,
  },
  minecraft: {
    seed: 30117,
    chunkSize: 16,
    maxHeight: 48,
    waterLevel: 10,
    streamRadiusDesktop: 5,
    streamRadiusMobile: 3,
    moveSpeed: 8.7,
    sprintMultiplier: 1.42,
    crouchMultiplier: 0.58,
    jumpSpeed: 9.5,
    gravity: 26,
    mouseSensitivity: 0.0021,
    mobileLookSensitivity: 0.0042,
    mobileMoveDeadzone: 0.12,
    postFxProfile: "max",
    fogDensity: 0.018,
    bloomStrength: 0.45,
    bloomRadius: 0.24,
    bloomThreshold: 0.52,
    shadowDistanceDesktop: 52,
    shadowDistanceMobile: 30,
    audioAssetBasePath: "./assets/minecraft/audio",
  },
  music: {
    defaultTrack: "./assets/music/%E8%AA%AA%E8%AC%8A%E8%80%85.mp3",
  },
  contact: {
    email: "alex.morgan@meridian.edu",
    office: "Room 402, Franklin Computing Hall",
    links: [
      { label: "Google Scholar", url: "#" },
      { label: "ORCID", url: "#" },
      { label: "GitHub", url: "#" },
    ],
  },
};

const windowMeta = [
  {
    id: "about",
    exeName: "about.exe",
    title: "About Me",
    icon: "./assets/icons/about.svg",
    defaultPos: { x: 48, y: 42 },
    defaultSize: { w: 470, h: 390 },
    sectionKey: "about",
    isHidden: true,
  },
  {
    id: "publications",
    exeName: "papers.exe",
    title: "Publications",
    icon: "./assets/icons/papers.svg",
    defaultPos: { x: 210, y: 74 },
    defaultSize: { w: 560, h: 440 },
    sectionKey: "publications",
    isHidden: true,
  },
  {
    id: "research",
    exeName: "research.exe",
    title: "Research",
    icon: "./assets/icons/research.svg",
    defaultPos: { x: 130, y: 118 },
    defaultSize: { w: 520, h: 400 },
    sectionKey: "research",
    isHidden: true,
  },
  {
    id: "teaching",
    exeName: "teach.exe",
    title: "Teaching",
    icon: "./assets/icons/teach.svg",
    defaultPos: { x: 270, y: 132 },
    defaultSize: { w: 520, h: 360 },
    sectionKey: "teaching",
    isHidden: true,
  },
  {
    id: "stat301",
    exeName: "301.exe",
    title: "Mathematical Statistics 1",
    icon: "./assets/icons/301.svg",
    defaultPos: { x: 240, y: 88 },
    defaultSize: { w: 1092, h: 610 },
    sectionKey: "stat301",
  },
  {
    id: "cityrail",
    exeName: "cityrail.exe",
    title: "CityRail Announcer",
    icon: "./assets/icons/cityrail.svg",
    defaultPos: { x: 168, y: 64 },
    defaultSize: { w: 1045, h: 570 },
    sectionKey: "cityrail",
    canResize: true,
    resizeAspectRatio: 1045 / 570,
    canMaximize: false,
    fixedSize: false,
  },
  {
    id: "flappy",
    exeName: "flappy.exe",
    title: "Flappy Bird",
    icon: "./assets/flappy/bird.png",
    defaultPos: { x: 132, y: 118 },
    defaultSize: { w: 560, h: 420 },
    sectionKey: "flappy",
    canResize: false,
    canMaximize: false,
    fixedSize: true,
  },
  {
    id: "music",
    exeName: "music.exe",
    title: "Music Player",
    icon: "./assets/icons/music.svg",
    defaultPos: { x: 182, y: 92 },
    defaultSize: { w: 520, h: 300 },
    sectionKey: "music",
  },
  {
    id: "minecraft",
    exeName: "minecraft.exe",
    title: "Minecraft",
    icon: "./assets/icons/minecraft.svg",
    defaultPos: { x: 124, y: 72 },
    defaultSize: { w: 760, h: 520 },
    sectionKey: "minecraft",
    canResize: true,
    canMaximize: true,
    fixedSize: false,
  },
  {
    id: "cv",
    exeName: "cv.exe",
    title: "CV Viewer",
    icon: "./assets/icons/cv.svg",
    defaultPos: { x: 350, y: 100 },
    defaultSize: { w: 520, h: 430 },
    sectionKey: "cv",
    isHidden: true,
  },
  {
    id: "contact",
    exeName: "email.exe",
    title: "Contact",
    icon: "./assets/icons/email.svg",
    defaultPos: { x: 420, y: 82 },
    defaultSize: { w: 500, h: 390 },
    sectionKey: "contact",
    isHidden: true,
  },
];

const launchableWindowMeta = windowMeta.filter((meta) => !meta.isHidden);
const launchableWindowIds = new Set(launchableWindowMeta.map((meta) => meta.id));
const launchableWindowMetaById = new Map(launchableWindowMeta.map((meta) => [meta.id, meta]));

const dom = {
  desktop: document.getElementById("desktop"),
  desktopIcons: document.getElementById("desktop-icons"),
  windowLayer: document.getElementById("window-layer"),
  windowTemplate: document.getElementById("window-template"),
  startMenu: document.getElementById("start-menu"),
  startButton: document.getElementById("start-button"),
  taskbarApps: document.getElementById("taskbar-apps"),
  clock: document.getElementById("taskbar-clock"),
};

const iconMap = new Map();
const taskButtonMap = new Map();
const scrollCleanupMap = new Map();
const windowContentHostMap = new Map();
const windowContentCleanupMap = new Map();
const mountedWindowSections = new Set();
const stat301TopicContentCache = new Map();

const WINDOW_SESSION_STORAGE_KEY = "academic-os.windowSession.v1";

let manager = null;
let startMenuOpen = false;
let stat301TopicsIndexCache = null;
let isApplyingWindowSession = false;

function createElement(tag, className, text) {
  const el = document.createElement(tag);
  if (className) {
    el.className = className;
  }
  if (typeof text === "string") {
    el.textContent = text;
  }
  return el;
}

function updateClock() {
  const formatter = new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });
  dom.clock.textContent = formatter.format(new Date());
}

function renderDesktopIcons() {
  dom.desktopIcons.innerHTML = "";

  launchableWindowMeta.forEach((meta) => {
    const button = createElement("button", "desktop-icon");
    button.type = "button";
    button.setAttribute("role", "listitem");
    button.setAttribute("aria-label", `Open ${meta.title}`);
    button.dataset.windowId = meta.id;

    button.innerHTML = `
      <span class="desktop-icon-inner">
        <img src="${meta.icon}" alt="" aria-hidden="true" />
        <span class="desktop-icon-label">${meta.exeName}</span>
      </span>
    `;

    button.addEventListener("dblclick", () => openWindow(meta.id, button));
    button.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openWindow(meta.id, button);
      }
    });
    button.addEventListener("click", () => {
      dom.desktopIcons
        .querySelectorAll(".desktop-icon")
        .forEach((icon) => icon.classList.remove("is-selected"));
      button.classList.add("is-selected");
    });

    dom.desktopIcons.appendChild(button);
    iconMap.set(meta.id, button);
  });
}

function renderStartMenu() {
  const listItems = launchableWindowMeta
    .map(
      (meta) => `
      <li>
        <button class="start-item" type="button" data-window-id="${meta.id}">
          <img src="${meta.icon}" alt="" aria-hidden="true" />
          <span>${meta.title}</span>
        </button>
      </li>`
    )
    .join("");

  dom.startMenu.innerHTML = `
    <div class="start-menu-brand">Academic OS</div>
    <ul class="start-menu-list">
      ${listItems}
    </ul>
  `;

  dom.startMenu.querySelectorAll(".start-item").forEach((item) => {
    const windowId = item.dataset.windowId;
    item.addEventListener("click", () => {
      const icon = iconMap.get(windowId);
      openWindow(windowId, icon);
      closeStartMenu();
    });
  });
}

function createResizeHandles(windowEl) {
  ["e", "s", "se"].forEach((edge) => {
    const handle = createElement("div", "resize-handle");
    handle.dataset.edge = edge;
    windowEl.appendChild(handle);
  });
}

function toSafeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildAboutSection() {
  const { about } = portfolioData;

  const wrapper = createElement("section", "about-section");
  wrapper.innerHTML = `
    <h3 class="section-heading" data-parallax="0.02">about.exe</h3>
    <div class="about-grid">
      <figure class="profile-frame reveal-item">
        <img src="${toSafeHTML(about.photo)}" alt="Profile placeholder for ${toSafeHTML(about.name)}" />
      </figure>
      <div>
        <p class="inline-meta reveal-item"><strong>${toSafeHTML(about.name)}</strong></p>
        <p class="inline-meta reveal-item">${toSafeHTML(about.role)}</p>
        <p class="inline-meta reveal-item">${toSafeHTML(about.affiliation)}</p>
        <p class="reveal-item">${toSafeHTML(about.bio)}</p>
        <h4 class="section-heading reveal-item">Research Interests</h4>
        <ul class="retro-list">
          ${about.interests.map((interest) => `<li class="reveal-item">${toSafeHTML(interest)}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;

  return wrapper;
}

function buildPublicationsSection(onMutation) {
  const wrapper = createElement("section", "publications-section");

  wrapper.innerHTML = `
    <h3 class="section-heading" data-parallax="0.02">papers.exe</h3>
    <div class="filter-row">
      <label>
        Year
        <select class="retro-input" data-filter="year">
          <option value="all">All</option>
        </select>
      </label>
      <label>
        Keyword
        <input class="retro-input" data-filter="keyword" type="text" placeholder="type to filter" />
      </label>
    </div>
    <div class="publication-list" data-publication-list></div>
  `;

  const yearSelect = wrapper.querySelector('[data-filter="year"]');
  const keywordInput = wrapper.querySelector('[data-filter="keyword"]');
  const list = wrapper.querySelector("[data-publication-list]");

  const years = [...new Set(portfolioData.publications.map((paper) => paper.year))].sort((a, b) => b - a);
  years.forEach((year) => {
    const option = document.createElement("option");
    option.value = String(year);
    option.textContent = String(year);
    yearSelect.appendChild(option);
  });

  const renderList = () => {
    const yearValue = yearSelect.value;
    const keywordValue = keywordInput.value.trim().toLowerCase();

    const filtered = portfolioData.publications.filter((paper) => {
      const yearMatch = yearValue === "all" || String(paper.year) === yearValue;
      const haystack = `${paper.title} ${paper.authors} ${paper.venue} ${paper.keywords.join(" ")}`.toLowerCase();
      const keywordMatch = !keywordValue || haystack.includes(keywordValue);
      return yearMatch && keywordMatch;
    });

    if (!filtered.length) {
      list.innerHTML = '<p class="inline-meta">No publications match the current filter.</p>';
      onMutation?.();
      return;
    }

    list.innerHTML = filtered
      .map(
        (paper) => `
        <article class="pub-item reveal-item" data-pub-id="${paper.id}">
          <button class="pub-summary" type="button" aria-expanded="false">
            <span class="pub-meta">${paper.year} | ${toSafeHTML(paper.authors)}</span>
            <span class="pub-title">${toSafeHTML(paper.title)}</span>
            <span class="pub-venue">${toSafeHTML(paper.venue)}</span>
          </button>
          <div class="pub-abstract">${toSafeHTML(paper.abstract)}</div>
        </article>
      `
      )
      .join("");

    list.querySelectorAll(".pub-summary").forEach((summary) => {
      summary.addEventListener("click", () => {
        const item = summary.closest(".pub-item");
        const open = item.classList.toggle("is-open");
        summary.setAttribute("aria-expanded", String(open));
      });
    });

    onMutation?.();
  };

  yearSelect.addEventListener("change", renderList);
  keywordInput.addEventListener("input", renderList);

  renderList();
  return wrapper;
}

function buildResearchSection() {
  const wrapper = createElement("section", "research-section");
  const items = portfolioData.researchAreas
    .map(
      (area, index) => `
      <article class="accordion-item ${index === 0 ? "is-open" : ""} reveal-item">
        <button class="accordion-header" type="button" aria-expanded="${index === 0 ? "true" : "false"}">
          ${toSafeHTML(area.name)}
        </button>
        <div class="accordion-panel">
          <p>${toSafeHTML(area.description)}</p>
          <ul class="retro-list">
            ${area.points.map((point) => `<li>${toSafeHTML(point)}</li>`).join("")}
          </ul>
        </div>
      </article>
    `
    )
    .join("");

  wrapper.innerHTML = `
    <h3 class="section-heading" data-parallax="0.02">research.exe</h3>
    <div class="accordion">${items}</div>
  `;

  wrapper.querySelectorAll(".accordion-header").forEach((header) => {
    header.addEventListener("click", () => {
      const item = header.closest(".accordion-item");
      const isOpen = item.classList.contains("is-open");

      wrapper.querySelectorAll(".accordion-item").forEach((node) => {
        node.classList.remove("is-open");
        node.querySelector(".accordion-header")?.setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("is-open");
        header.setAttribute("aria-expanded", "true");
      }
    });
  });

  return wrapper;
}

function buildTeachingSection() {
  const wrapper = createElement("section", "teaching-section");
  wrapper.innerHTML = `
    <h3 class="section-heading" data-parallax="0.02">teach.exe</h3>
    <div class="teach-list">
      ${portfolioData.teaching
        .map(
          (course) => `
          <article class="teach-card reveal-item">
            <p class="teach-term">${toSafeHTML(course.semester)} | ${toSafeHTML(course.courseCode)}</p>
            <p><strong>${toSafeHTML(course.title)}</strong></p>
            <p>${toSafeHTML(course.description)}</p>
          </article>
        `
        )
        .join("")}
    </div>
  `;

  return wrapper;
}

function buildCvSection() {
  const wrapper = createElement("section", "cv-section");
  const lines = portfolioData.cv.sections
    .map((section) => `${section.heading}\n${section.lines.map((line) => `  - ${line}`).join("\n")}`)
    .join("\n\n");

  wrapper.innerHTML = `
    <h3 class="section-heading" data-parallax="0.02">cv.exe</h3>
    <div class="notepad reveal-item">${toSafeHTML(lines)}</div>
    <p class="inline-meta">
      <a href="${toSafeHTML(portfolioData.cv.downloadUrl)}" target="_blank" rel="noopener noreferrer">Download CV (placeholder)</a>
    </p>
  `;

  return wrapper;
}

function buildCityRailSection() {
  const wrapper = createElement("section", "cityrail-section");
  const nativeAppEl = createCityRailNativeApp();
  nativeAppEl.classList.add("reveal-item");
  wrapper.appendChild(nativeAppEl);
  initCityRailNativeApp(nativeAppEl);
  wrapper.cleanup = () => {
    destroyCityRailNativeApp(nativeAppEl);
  };
  return wrapper;
}

function buildFlappySection() {
  const wrapper = createElement("section", "flappy-section");
  wrapper.tabIndex = 0;
  wrapper.setAttribute("aria-label", "Flappy Bird game");
  wrapper.innerHTML = `
    <div class="flappy-stage" data-flappy-stage>
      <canvas class="flappy-canvas" data-flappy-canvas aria-label="Flappy Bird game canvas"></canvas>
      <p class="flappy-overlay" data-flappy-overlay></p>
    </div>
  `;

  const stageEl = wrapper.querySelector("[data-flappy-stage]");
  const canvas = wrapper.querySelector("[data-flappy-canvas]");
  const overlayEl = wrapper.querySelector("[data-flappy-overlay]");
  const scoreEl = wrapper.querySelector("[data-flappy-score]");
  const bestEl = wrapper.querySelector("[data-flappy-best]");
  const context = canvas.getContext("2d");
  const bestStorageKey = "academic-os.flappy.best.v1";
  const config = portfolioData.flappy || {};

  if (!context) {
    overlayEl.textContent = "Canvas not supported in this browser.";
    return wrapper;
  }

  const state = {
    width: 0,
    height: 0,
    mode: "ready",
    bird: { x: 0, y: 0, vy: 0, radius: 14, tilt: -0.4, downTiltTimer: 0, crashTiltTimer: 0 },
    pipes: [],
    spawnTimer: 0,
    score: 0,
    best: Number(window.localStorage.getItem(bestStorageKey) || 0) || 0,
    lastTime: 0,
    rafId: 0,
    elapsed: 0,
  };

  const gravity = Number(config.gravity) || 1120;
  const fallGravityMultiplier = Math.max(1, Number(config.fallGravityMultiplier) || 1.28);
  const jumpVelocity = Number(config.jumpVelocity) || -360;
  const pipeSpeed = Number(config.pipeSpeed) || 175;
  const spawnInterval = Number(config.spawnInterval) || 1.32;
  const pipeWidth = 72;
  const groundBandHeight = 40;
  const downTiltDelaySeconds = 0.3;
  const crashTiltDelaySeconds = 0.1;
  const birdSprite = new Image();
  const sfxFiles = {
    wing: "./assets/flappy/sfx_wing.wav",
    point: "./assets/flappy/sfx_point.wav",
    hit: "./assets/flappy/sfx_hit.wav",
    die: "./assets/flappy/sfx_die.wav",
  };
  const sfxGain = {
    wing: 0.34,
    point: 0.32,
    hit: 0.45,
    die: 0.45,
  };
  const AudioContextCtor = window.AudioContext || window.webkitAudioContext || null;
  let sfxContext = null;
  let sfxInitPromise = null;
  const sfxBuffers = new Map();
  let pendingDieTimeoutId = 0;
  let birdSpriteReady = false;
  let birdRenderSprite = null;
  birdSprite.addEventListener("load", () => {
    birdSpriteReady = true;
    const targetSize = Math.max(1, Math.round(state.bird.radius * 3));
    const preScaled = document.createElement("canvas");
    preScaled.width = targetSize;
    preScaled.height = targetSize;
    const preScaledContext = preScaled.getContext("2d");
    if (preScaledContext) {
      preScaledContext.imageSmoothingEnabled = false;
      preScaledContext.clearRect(0, 0, targetSize, targetSize);
      preScaledContext.drawImage(birdSprite, 0, 0, targetSize, targetSize);
      birdRenderSprite = preScaled;
    }
  });
  birdSprite.src = "./assets/flappy/bird.png";

  function initSfx() {
    if (!AudioContextCtor) {
      return Promise.resolve();
    }
    if (sfxInitPromise) {
      return sfxInitPromise;
    }
    try {
      sfxContext = new AudioContextCtor({ latencyHint: "interactive" });
    } catch {
      sfxContext = null;
      sfxInitPromise = Promise.resolve();
      return sfxInitPromise;
    }

    sfxInitPromise = Promise.all(
      Object.entries(sfxFiles).map(async ([name, path]) => {
        try {
          const response = await fetch(path);
          const data = await response.arrayBuffer();
          if (!sfxContext) {
            return;
          }
          const buffer = await sfxContext.decodeAudioData(data);
          sfxBuffers.set(name, buffer);
        } catch {
          // ignore per-file decode failures
        }
      })
    ).catch(() => {
      // ignore shared load failures
    });
    return sfxInitPromise;
  }

  function playSfx(name) {
    if (!sfxContext) {
      return;
    }
    const buffer = sfxBuffers.get(name);
    if (!buffer) {
      return;
    }

    const startBuffer = () => {
      try {
        const source = sfxContext.createBufferSource();
        source.buffer = buffer;
        const gainNode = sfxContext.createGain();
        gainNode.gain.value = sfxGain[name] || 0.4;
        source.connect(gainNode);
        gainNode.connect(sfxContext.destination);
        source.start(0);
      } catch {
        // ignore audio playback failures
      }
    };

    if (sfxContext.state === "suspended") {
      sfxContext
        .resume()
        .then(() => {
          startBuffer();
        })
        .catch(() => {
          // ignore resume failures
        });
      return;
    }

    startBuffer();
  }

  function clearPendingDieTimeout() {
    if (!pendingDieTimeoutId) {
      return;
    }
    window.clearTimeout(pendingDieTimeoutId);
    pendingDieTimeoutId = 0;
  }

  function playCrashSfxSequence() {
    clearPendingDieTimeout();
    playSfx("hit");
    pendingDieTimeoutId = window.setTimeout(() => {
      pendingDieTimeoutId = 0;
      if (state.mode === "crashing" || state.mode === "gameover") {
        playSfx("die");
      }
    }, 120);
  }

  function disposeSfx() {
    if (sfxContext) {
      sfxContext.close().catch(() => {
        // ignore close failures
      });
    }
    sfxContext = null;
    sfxInitPromise = null;
    sfxBuffers.clear();
  }

  function getGroundY() {
    return Math.max(16, state.height - groundBandHeight);
  }

  function getFloorY() {
    return getGroundY() - state.bird.radius;
  }

  function isWindowVisible() {
    const hostWindow = wrapper.closest(".window");
    return Boolean(
      hostWindow &&
        !hostWindow.hidden &&
        hostWindow.style.display !== "none"
    );
  }

  function isWindowFocused() {
    const hostWindow = wrapper.closest(".window");
    return Boolean(hostWindow && hostWindow.classList.contains("is-active"));
  }

  function setOverlay(text) {
    overlayEl.textContent = text;
    overlayEl.classList.toggle("is-visible", Boolean(text));
  }

  function persistBest() {
    try {
      window.localStorage.setItem(bestStorageKey, String(state.best));
    } catch {
      // ignore storage failures
    }
  }

  function updateHud() {
    if (scoreEl) {
      scoreEl.textContent = `Score: ${state.score}`;
    }
    if (bestEl) {
      bestEl.textContent = `Best: ${state.best}`;
    }
  }

  function syncCanvasSize() {
    const nextWidth = Math.round(stageEl.clientWidth);
    const nextHeight = Math.round(stageEl.clientHeight);
    if (nextWidth < 32 || nextHeight < 32) {
      return;
    }
    if (state.width === nextWidth && state.height === nextHeight) {
      return;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(nextWidth * dpr);
    canvas.height = Math.round(nextHeight * dpr);
    canvas.style.width = `${nextWidth}px`;
    canvas.style.height = `${nextHeight}px`;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);

    state.width = nextWidth;
    state.height = nextHeight;
    state.bird.x = Math.max(80, state.width * 0.28);
    if (state.mode === "ready") {
      state.bird.y = state.height * 0.45;
    } else {
      state.bird.y = Math.min(Math.max(state.bird.radius, state.bird.y), getFloorY());
    }
  }

  function spawnPipe() {
    const gapHeight = Math.max(122, Math.min(172, state.height * 0.28));
    const topPadding = 36;
    const bottomPadding = 56;
    const minCenter = topPadding + gapHeight * 0.5;
    const maxCenter = getGroundY() - bottomPadding - gapHeight * 0.5;
    const center = minCenter + Math.random() * Math.max(20, maxCenter - minCenter);

    state.pipes.push({
      x: state.width + pipeWidth + 6,
      width: pipeWidth,
      gapTop: center - gapHeight * 0.5,
      gapBottom: center + gapHeight * 0.5,
      passed: false,
    });
  }

  function resetRound() {
    clearPendingDieTimeout();
    state.mode = "ready";
    state.score = 0;
    state.pipes = [];
    state.spawnTimer = 0;
    state.bird.vy = 0;
    state.bird.tilt = -0.4;
    state.bird.downTiltTimer = 0;
    state.bird.crashTiltTimer = 0;
    state.bird.x = Math.max(80, state.width * 0.28);
    state.bird.y = state.height * 0.45;
    updateHud();
    setOverlay("Press Space to start");
  }

  function startPlaying() {
    state.mode = "playing";
    setOverlay("");
  }

  function flap() {
    if (!isWindowVisible()) {
      return;
    }

    if (state.mode === "gameover") {
      resetRound();
      startPlaying();
    } else if (state.mode === "ready") {
      startPlaying();
    }

    if (state.mode === "crashing") {
      return;
    }

    state.bird.downTiltTimer = 0;
    state.bird.vy = jumpVelocity;
  }

  function gameOver() {
    if (state.mode !== "playing") {
      return;
    }
    state.mode = "crashing";
    state.bird.vy = Math.max(state.bird.vy, 300);
    state.bird.crashTiltTimer = 0;
    playCrashSfxSequence();
    setOverlay("");
  }

  function hitPipe(pipe) {
    const left = state.bird.x - state.bird.radius;
    const right = state.bird.x + state.bird.radius;
    const overlapsX = right > pipe.x && left < pipe.x + pipe.width;
    if (!overlapsX) {
      return false;
    }
    const top = state.bird.y - state.bird.radius;
    const bottom = state.bird.y + state.bird.radius;
    return top < pipe.gapTop || bottom > pipe.gapBottom;
  }

  function update(dt) {
    if (!isWindowVisible()) {
      return;
    }

    if (state.mode !== "playing" && state.mode !== "crashing") {
      return;
    }

    if (state.mode === "playing") {
      state.spawnTimer += dt;
      while (state.spawnTimer >= spawnInterval) {
        state.spawnTimer -= spawnInterval;
        spawnPipe();
      }
    }

    const gravityScale =
      state.mode === "crashing"
        ? Math.max(1.05, fallGravityMultiplier * 0.75)
        : state.bird.vy > 0
          ? fallGravityMultiplier
          : 1;
    state.bird.vy += gravity * gravityScale * dt;
    state.bird.y += state.bird.vy * dt;
    if (state.mode === "crashing") {
      state.bird.crashTiltTimer += dt;
    }

    if (state.mode === "playing") {
      if (state.bird.vy > 28) {
        state.bird.downTiltTimer += dt;
      } else {
        state.bird.downTiltTimer = 0;
      }

      const shouldApplyDownTilt = state.bird.downTiltTimer >= downTiltDelaySeconds;
      const delayedVy = shouldApplyDownTilt ? state.bird.vy : Math.min(state.bird.vy, -14);
      const targetTilt = Math.max(-0.55, Math.min(1.02, (delayedVy + 40) / 300));
      const tiltEasing = targetTilt > state.bird.tilt ? 0.13 : 0.05;
      state.bird.tilt += (targetTilt - state.bird.tilt) * tiltEasing;
    }

    if (state.mode === "playing") {
      state.pipes.forEach((pipe) => {
        pipe.x -= pipeSpeed * dt;
        if (!pipe.passed && pipe.x + pipe.width < state.bird.x - state.bird.radius) {
          pipe.passed = true;
          state.score += 1;
          playSfx("point");
          if (state.score > state.best) {
            state.best = state.score;
            persistBest();
          }
          updateHud();
        }
      });

      state.pipes = state.pipes.filter((pipe) => pipe.x + pipe.width > -12);
    }

    if (state.mode === "playing" && state.bird.y - state.bird.radius <= 0) {
      gameOver();
    }

    if (state.mode === "playing" && state.pipes.some(hitPipe)) {
      gameOver();
    }

    const floorY = getFloorY();
    if (state.bird.y >= floorY) {
      state.bird.y = floorY;
      state.bird.vy = 0;
      if (state.mode === "crashing") {
        state.mode = "gameover";
        setOverlay("Game over. Press Space to retry");
      } else if (state.mode === "playing") {
        gameOver();
      }
    }
  }

  function advanceAmbience(dt) {
    state.elapsed += dt;
  }

  function drawBackground() {
    context.fillStyle = "#4ec0ca";
    context.fillRect(0, 0, state.width, state.height);

    const groundY = getGroundY();
    const groundHeight = state.height - groundY;
    const grassHeight = Math.max(6, Math.min(groundHeight - 2, 10));
    const dirtY = groundY + grassHeight;

    context.fillStyle = "#ded895";
    context.fillRect(0, groundY, state.width, groundHeight);

    context.save();
    context.beginPath();
    context.rect(0, dirtY, state.width, Math.max(0, state.height - dirtY));
    context.clip();
    context.strokeStyle = "#d1c654";
    context.lineWidth = 6;
    context.lineCap = "square";
    const stripeSpacing = 26;
    const stripeOffset = (state.elapsed * pipeSpeed) % stripeSpacing;
    for (let x = -40 - stripeOffset; x < state.width + 60; x += stripeSpacing) {
      context.beginPath();
      context.moveTo(x + 18, dirtY);
      context.lineTo(x, state.height + 8);
      context.stroke();
    }
    context.restore();

    context.fillStyle = "#73bf2e";
    context.fillRect(0, groundY, state.width, grassHeight);

    context.strokeStyle = "#9de659";
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(0, groundY + 3);
    context.lineTo(state.width, groundY + 3);
    context.stroke();

    context.strokeStyle = "#543847";
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(0, groundY);
    context.lineTo(state.width, groundY);
    context.stroke();

    context.beginPath();
    context.moveTo(0, dirtY);
    context.lineTo(state.width, dirtY);
    context.stroke();
  }

  function drawPipes() {
    const groundY = getGroundY();
    const pipeOutline = "#543847";
    const pipeFill = "#73bf2e";
    const pipeHighlight = "#9de659";
    const pipeShadow = "#558c22";

    const drawPipeBody = (x, y, width, height) => {
      if (height <= 0) {
        return;
      }

      context.fillStyle = pipeFill;
      context.fillRect(x, y, width, height);
      context.strokeStyle = pipeOutline;
      context.lineWidth = 3;
      context.lineJoin = "round";
      context.strokeRect(x, y, width, height);

      context.fillStyle = pipeHighlight;
      context.fillRect(x + width * 0.08, y, width * 0.16, height);
      context.fillRect(x + width * 0.33, y, width * 0.06, height);

      context.fillStyle = pipeShadow;
      context.fillRect(x + width * 0.66, y, width * 0.25, height);
    };

    const drawPipeCap = (x, y, width, isTopCap) => {
      const capHeight = Math.max(16, Math.round(width * 0.28));
      const capInset = Math.max(4, Math.round(width * 0.08));
      const capY = isTopCap ? y - capHeight : y;
      const capX = x - capInset;
      const capWidth = width + capInset * 2;

      context.fillStyle = pipeFill;
      context.fillRect(capX, capY, capWidth, capHeight);
      context.strokeStyle = pipeOutline;
      context.lineWidth = 3;
      context.lineJoin = "round";
      context.strokeRect(capX, capY, capWidth, capHeight);

      context.fillStyle = pipeHighlight;
      context.fillRect(capX + capWidth * 0.07, capY + 2, capWidth * 0.16, capHeight - 4);
      context.fillRect(capX + capWidth * 0.28, capY + 2, capWidth * 0.06, capHeight - 4);

      context.fillStyle = pipeShadow;
      context.fillRect(capX + capWidth * 0.7, capY + 2, capWidth * 0.22, capHeight - 4);
    };

    state.pipes.forEach((pipe) => {
      const capOffset = 8;
      const topHeight = Math.max(10, pipe.gapTop - capOffset);
      const bottomY = pipe.gapBottom + capOffset;
      const bottomHeight = Math.max(10, groundY - bottomY);

      drawPipeBody(pipe.x, 0, pipe.width, topHeight);
      drawPipeCap(pipe.x, topHeight, pipe.width, true);

      drawPipeBody(pipe.x, bottomY, pipe.width, bottomHeight);
      drawPipeCap(pipe.x, bottomY, pipe.width, false);
    });
  }

  function drawBird() {
    const crashTilt = Math.PI / 2;
    const isCrashTiltActive =
      state.mode === "gameover" || (state.mode === "crashing" && state.bird.crashTiltTimer >= crashTiltDelaySeconds);
    const tilt = isCrashTiltActive ? crashTilt : state.bird.tilt;
    context.save();
    context.translate(state.bird.x, state.bird.y);
    context.rotate(tilt);
    if (birdSpriteReady) {
      const sprite = birdRenderSprite || birdSprite;
      const size = sprite === birdRenderSprite ? birdRenderSprite.width : state.bird.radius * 3;
      context.imageSmoothingEnabled = false;
      context.drawImage(sprite, -size * 0.5, -size * 0.5, size, size);
    } else {
      context.fillStyle = "#f2bc2b";
      context.beginPath();
      context.arc(0, 0, state.bird.radius * 1.2, 0, Math.PI * 2);
      context.fill();
    }

    context.restore();
  }

  function drawScoreBanner() {
    const bannerX = 10;
    const bannerY = 10;
    const bannerWidth = 150;
    const bannerHeight = 42;

    context.fillStyle = "rgba(0, 0, 0, 0.34)";
    context.fillRect(bannerX, bannerY, bannerWidth, bannerHeight);

    context.save();
    context.fillStyle = "#fff";
    context.font = "bold 14px 'Pixelated MS Sans Serif', sans-serif";
    context.textBaseline = "top";
    context.fillText(`Score ${state.score}`, bannerX + 8, bannerY + 7);
    context.fillText(`Best ${state.best}`, bannerX + 8, bannerY + 23);
    context.restore();
  }

  function draw() {
    if (state.width < 32 || state.height < 32) {
      return;
    }

    drawBackground();
    drawPipes();
    drawBird();
    drawScoreBanner();
  }

  function loop(timestamp) {
    syncCanvasSize();

    if (!state.lastTime) {
      state.lastTime = timestamp;
    }

    const dt = Math.min((timestamp - state.lastTime) / 1000, 0.035);
    state.lastTime = timestamp;

    if (state.mode === "playing") {
      advanceAmbience(dt);
    }
    update(dt);
    draw();
    state.rafId = requestAnimationFrame(loop);
  }

  function advanceDeterministic(ms) {
    const frameSeconds = 1 / 60;
    const frameCount = Math.max(1, Math.round(ms / (1000 / 60)));
    for (let i = 0; i < frameCount; i += 1) {
      if (state.mode === "playing") {
        advanceAmbience(frameSeconds);
      }
      update(frameSeconds);
    }
    draw();
  }

  function handleKeydown(event) {
    const isSpace = event.code === "Space" || event.key === " ";
    if (!isSpace || !isWindowFocused()) {
      return;
    }
    event.preventDefault();
    initSfx();
    playSfx("wing");
    flap();
  }

  function handleWrapperPointerDown() {
    wrapper.focus();
  }

  function handleStagePointerDown(event) {
    if (event.button !== 0) {
      return;
    }
    initSfx();
    playSfx("wing");
    flap();
  }

  wrapper.addEventListener("pointerdown", handleWrapperPointerDown);
  stageEl.addEventListener("pointerdown", handleStagePointerDown);

  document.addEventListener("keydown", handleKeydown);
  window.addEventListener("resize", syncCanvasSize, { passive: true });

  const renderGameToText = () =>
    JSON.stringify({
      mode: state.mode,
      score: state.score,
      best: state.best,
      world: {
        width: state.width,
        height: state.height,
        origin: "top-left",
        y_axis: "down",
      },
      player: {
        x: Number(state.bird.x.toFixed(2)),
        y: Number(state.bird.y.toFixed(2)),
        vy: Number(state.bird.vy.toFixed(2)),
        radius: state.bird.radius,
      },
      pipes: state.pipes.map((pipe) => ({
        x: Number(pipe.x.toFixed(2)),
        width: pipe.width,
        gapTop: Number(pipe.gapTop.toFixed(2)),
        gapBottom: Number(pipe.gapBottom.toFixed(2)),
        passed: pipe.passed,
      })),
      controls: "Press Space to jump",
    });
  window.render_game_to_text = renderGameToText;

  window.advanceTime = advanceDeterministic;
  initSfx();

  updateHud();
  syncCanvasSize();
  resetRound();
  state.rafId = requestAnimationFrame(loop);

  wrapper.cleanup = () => {
    clearPendingDieTimeout();
    disposeSfx();
    if (state.rafId) {
      cancelAnimationFrame(state.rafId);
      state.rafId = 0;
    }
    document.removeEventListener("keydown", handleKeydown);
    window.removeEventListener("resize", syncCanvasSize);
    wrapper.removeEventListener("pointerdown", handleWrapperPointerDown);
    stageEl.removeEventListener("pointerdown", handleStagePointerDown);
    if (window.render_game_to_text === renderGameToText) {
      delete window.render_game_to_text;
    }
    if (window.advanceTime === advanceDeterministic) {
      delete window.advanceTime;
    }
  };

  return wrapper;
}

function buildMusicSection() {
  const wrapper = createElement("section", "music-section");
  const configuredDefaultTrack = portfolioData.music?.defaultTrack;
  const defaultTrack = typeof configuredDefaultTrack === "string" && configuredDefaultTrack.trim()
    ? configuredDefaultTrack.trim()
    : "./assets/music/%E8%AA%AA%E8%AC%8A%E8%80%85.mp3";

  wrapper.innerHTML = `
    <h3 class="section-heading" data-parallax="0.02">music.exe</h3>
    <p class="music-help">Paste an MP3 URL. Leave it blank to play the default local track.</p>
    <label class="music-link-row">
      MP3 Link
      <input class="retro-input" data-music-link type="url" placeholder="https://example.com/track.mp3" />
    </label>
    <div class="music-actions">
      <button class="retro-btn" type="button" data-music-action="play">Play</button>
      <button class="retro-btn" type="button" data-music-action="pause">Pause</button>
      <button class="retro-btn" type="button" data-music-action="stop">Stop</button>
    </div>
    <div class="music-progress">
      <span class="music-time" data-music-current>0:00</span>
      <input
        class="music-progress-bar"
        data-music-progress
        type="range"
        min="0"
        max="1000"
        step="1"
        value="0"
        aria-label="Track progress"
      />
      <span class="music-time music-time-end" data-music-duration>0:00</span>
    </div>
    <p class="music-now-playing">Source: <span data-music-source>Default track (assets/music/說謊者.mp3)</span></p>
    <audio class="music-player" data-music-audio preload="metadata"></audio>
    <p class="music-status" data-music-status>Ready.</p>
  `;

  const linkEl = wrapper.querySelector("[data-music-link]");
  const audioEl = wrapper.querySelector("[data-music-audio]");
  const sourceEl = wrapper.querySelector("[data-music-source]");
  const statusEl = wrapper.querySelector("[data-music-status]");
  const progressEl = wrapper.querySelector("[data-music-progress]");
  const currentTimeEl = wrapper.querySelector("[data-music-current]");
  const durationEl = wrapper.querySelector("[data-music-duration]");
  let isSeeking = false;

  function setStatus(text, isError = false) {
    statusEl.textContent = text;
    statusEl.classList.toggle("is-error", Boolean(isError));
  }

  function getSelectedTrack() {
    const provided = String(linkEl.value || "").trim();
    return provided || defaultTrack;
  }

  function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) {
      return "0:00";
    }
    const whole = Math.floor(seconds);
    const mins = Math.floor(whole / 60);
    const secs = whole % 60;
    return `${mins}:${String(secs).padStart(2, "0")}`;
  }

  function updateProgressUI() {
    const duration = Number.isFinite(audioEl.duration) ? audioEl.duration : 0;
    const current = Number.isFinite(audioEl.currentTime) ? audioEl.currentTime : 0;
    currentTimeEl.textContent = formatTime(current);
    durationEl.textContent = formatTime(duration);

    if (!isSeeking) {
      const ratio = duration > 0 ? Math.min(1, Math.max(0, current / duration)) : 0;
      progressEl.value = String(Math.round(ratio * 1000));
    }
  }

  function syncSourceLabel(track) {
    const usingDefault = track === defaultTrack;
    sourceEl.textContent = usingDefault ? "Default track (assets/music/說謊者.mp3)" : track;
  }

  function loadTrackFromInput() {
    const track = getSelectedTrack();
    const currentSource = audioEl.getAttribute("src") || "";
    if (track !== currentSource) {
      audioEl.setAttribute("src", track);
      audioEl.load();
      progressEl.value = "0";
      currentTimeEl.textContent = "0:00";
      durationEl.textContent = "0:00";
    }
    syncSourceLabel(track);
    return track;
  }

  async function playSelectedTrack() {
    const track = loadTrackFromInput();
    try {
      await audioEl.play();
      setStatus(track === defaultTrack ? "Playing default track." : "Playing supplied link.");
    } catch {
      setStatus("Unable to play this source. Check that the link is a reachable MP3.", true);
    }
  }

  wrapper.querySelector('[data-music-action="play"]').addEventListener("click", () => {
    playSelectedTrack();
  });

  wrapper.querySelector('[data-music-action="pause"]').addEventListener("click", () => {
    audioEl.pause();
    setStatus("Paused.");
  });

  wrapper.querySelector('[data-music-action="stop"]').addEventListener("click", () => {
    audioEl.pause();
    audioEl.currentTime = 0;
    updateProgressUI();
    setStatus("Stopped.");
  });

  linkEl.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") {
      return;
    }
    event.preventDefault();
    playSelectedTrack();
  });

  audioEl.addEventListener("loadedmetadata", () => {
    const duration = Number.isFinite(audioEl.duration) ? audioEl.duration : 0;
    updateProgressUI();
    if (duration > 0) {
      setStatus(`Loaded (${duration.toFixed(1)}s).`);
    }
  });

  audioEl.addEventListener("timeupdate", updateProgressUI);
  audioEl.addEventListener("play", updateProgressUI);
  audioEl.addEventListener("pause", updateProgressUI);

  progressEl.addEventListener("pointerdown", () => {
    isSeeking = true;
  });

  progressEl.addEventListener("input", () => {
    const duration = Number.isFinite(audioEl.duration) ? audioEl.duration : 0;
    if (duration <= 0) {
      return;
    }
    const ratio = Number(progressEl.value) / 1000;
    const targetTime = Math.min(duration, Math.max(0, duration * ratio));
    audioEl.currentTime = targetTime;
    updateProgressUI();
  });

  progressEl.addEventListener("change", () => {
    isSeeking = false;
    updateProgressUI();
  });

  progressEl.addEventListener("pointerup", () => {
    isSeeking = false;
  });

  audioEl.addEventListener("ended", () => {
    updateProgressUI();
    setStatus("Playback finished.");
  });

  audioEl.addEventListener("error", () => {
    setStatus("Audio load failed for this source.", true);
  });

  syncSourceLabel(defaultTrack);
  updateProgressUI();

  wrapper.cleanup = () => {
    audioEl.pause();
    audioEl.removeAttribute("src");
    audioEl.load();
  };

  return wrapper;
}

function buildMinecraftAppSection() {
  return createMinecraftSection(portfolioData.minecraft || {});
}

function buildContactSection() {
  const wrapper = createElement("section", "contact-section");
  const links = portfolioData.contact.links
    .map((link) => `<li><a href="${toSafeHTML(link.url)}" target="_blank" rel="noopener noreferrer">${toSafeHTML(link.label)}</a></li>`)
    .join("");

  wrapper.innerHTML = `
    <h3 class="section-heading" data-parallax="0.02">email.exe</h3>
    <p class="inline-meta reveal-item"><strong>Email:</strong> ${toSafeHTML(portfolioData.contact.email)}</p>
    <p class="inline-meta reveal-item"><strong>Office:</strong> ${toSafeHTML(portfolioData.contact.office)}</p>

    <form class="contact-form" novalidate>
      <label class="reveal-item">
        Your Name
        <input class="retro-input" name="name" required />
      </label>
      <label class="reveal-item">
        Subject
        <input class="retro-input" name="subject" required />
      </label>
      <label class="reveal-item">
        Message
        <textarea class="retro-input" name="message" rows="6" required></textarea>
      </label>
      <div class="contact-actions reveal-item">
        <button class="retro-btn" type="submit">Send via Mail Client</button>
        <span class="contact-status" aria-live="polite"></span>
      </div>
    </form>

    <ul class="link-list reveal-item">${links}</ul>
  `;

  const form = wrapper.querySelector("form");
  const status = wrapper.querySelector(".contact-status");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !subject || !message) {
      status.textContent = "Please complete all fields before sending.";
      return;
    }

    const fullSubject = `[Portfolio Inquiry] ${subject}`;
    const body = `Name: ${name}\n\n${message}`;
    const mailto = `mailto:${portfolioData.contact.email}?subject=${encodeURIComponent(fullSubject)}&body=${encodeURIComponent(body)}`;

    status.textContent = "Opening your default mail client...";
    window.location.href = mailto;
  });

  return wrapper;
}

function renderMathNotation(container) {
  if (typeof window.renderMathInElement !== "function") {
    return;
  }

  window.renderMathInElement(container, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "\\(", right: "\\)", display: false },
      { left: "$", right: "$", display: false },
    ],
    throwOnError: false,
    strict: "ignore",
  });
}

function toTitleCase(input) {
  if (!input) {
    return "";
  }
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}

function renderStat301Callout(type, title, bodyMarkdown) {
  const normalizedType = ["example", "theorem", "definition", "proof", "note"].includes(type)
    ? type
    : "note";
  const label = toTitleCase(normalizedType);
  const calloutTitle = title?.trim() || "";
  let titleText = label;
  if (calloutTitle) {
    titleText = normalizedType === "theorem"
      ? `${label} (${calloutTitle})`
      : `${label}: ${calloutTitle}`;
  }

  return `
    <section class="stat301-callout stat301-callout-${normalizedType}">
      <p class="stat301-callout-title">${toSafeHTML(titleText)}</p>
      <div class="stat301-callout-body">${markdownToStatHtml(bodyMarkdown)}</div>
    </section>
  `;
}

function markdownToStatHtml(markdown) {
  const callouts = [];
  const sourceWithCalloutTokens = markdown
    .replace(/\r\n/g, "\n")
    .replace(
      /:::([a-zA-Z]+)(?:[ \t]+([^\n]+))?\n([\s\S]*?)\n:::/g,
      (_, rawType, rawTitle = "", rawBody = "") => {
        const token = `@@STAT301_CALLOUT_${callouts.length}@@`;
        callouts.push({
          type: rawType.trim().toLowerCase(),
          title: rawTitle.trim(),
          body: rawBody.trim(),
        });
        // Keep tokens isolated so split(/\n{2,}/) cannot merge them with prose blocks.
        return `\n\n${token}\n\n`;
      }
    );

  const blocks = sourceWithCalloutTokens
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  const html = [];

  blocks.forEach((block) => {
    const tokenMatch = block.match(/^@@STAT301_CALLOUT_(\d+)@@$/);
    if (tokenMatch) {
      const idx = Number(tokenMatch[1]);
      const callout = callouts[idx];
      if (callout) {
        html.push(renderStat301Callout(callout.type, callout.title, callout.body));
      }
      return;
    }

    const lines = block.split("\n").map((line) => line.trimEnd());

    if (block.startsWith("$$") && block.endsWith("$$")) {
      const mathContent = block.replace(/^\$\$/, "").replace(/\$\$$/, "").trim();
      html.push(`<div class="stat301-math-block"><p>$$${toSafeHTML(mathContent)}$$</p></div>`);
      return;
    }

    const hasBulletStart = lines.some((line) => /^\s*-\s+/.test(line));
    if (hasBulletStart) {
      const items = [];
      let currentItem = "";
      let validBulletBlock = true;

      lines.forEach((line) => {
        const bulletMatch = line.match(/^\s*-\s+(.+)$/);
        if (bulletMatch) {
          if (currentItem) {
            items.push(currentItem);
          }
          currentItem = bulletMatch[1].trim();
          return;
        }

        const trimmed = line.trim();
        if (!trimmed) {
          return;
        }

        if (!currentItem) {
          validBulletBlock = false;
          return;
        }

        currentItem = `${currentItem} ${trimmed}`;
      });

      if (currentItem) {
        items.push(currentItem);
      }

      if (validBulletBlock && items.length) {
        html.push(
          `<ul class="stat301-bullets">${items
            .map((item) => `<li>${toSafeHTML(item)}</li>`)
            .join("")}</ul>`
        );
        return;
      }
    }

    const headingMatch = lines[0].match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      const headingLevel = headingMatch[1].length;
      const headingText = headingMatch[2].trim();
      const tagName = headingLevel === 1 ? "h4" : "h5";
      const className = headingLevel === 1 ? "stat301-topic-title" : "stat301-subheading";
      html.push(`<${tagName} class="${className}">${toSafeHTML(headingText)}</${tagName}>`);
      if (lines.length > 1) {
        html.push(
          `<p class="stat301-topic-intro">${toSafeHTML(lines.slice(1).join(" ").trim())}</p>`
        );
      }
      return;
    }

    if (block.startsWith("Example:")) {
      const text = lines.join(" ").replace(/^Example:\s*/, "");
      html.push(renderStat301Callout("example", "", text));
      return;
    }

    html.push(`<p class="stat301-topic-intro">${toSafeHTML(lines.join(" "))}</p>`);
  });

  return html.join("");
}

async function loadStat301TopicsIndex() {
  if (stat301TopicsIndexCache) {
    return stat301TopicsIndexCache;
  }

  const response = await fetch(portfolioData.mathStat301.topicsIndexPath, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Unable to load topics index (${response.status}).`);
  }

  const payload = await response.json();
  if (!payload || !Array.isArray(payload.topics) || !payload.topics.length) {
    throw new Error("Topics index format is invalid.");
  }

  stat301TopicsIndexCache = payload;
  return payload;
}

async function loadStat301TopicMarkdown(filePath) {
  if (stat301TopicContentCache.has(filePath)) {
    return stat301TopicContentCache.get(filePath);
  }

  const response = await fetch(filePath, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Unable to load topic file (${response.status}).`);
  }

  const markdown = await response.text();
  stat301TopicContentCache.set(filePath, markdown);
  return markdown;
}

function setStat301Status(contentEl, message, isError = false) {
  contentEl.innerHTML = `<p class="stat301-status${isError ? " is-error" : ""}">${toSafeHTML(message)}</p>`;
}

function buildStat301Section() {
  const wrapper = createElement("section", "stat301-section");
  const fallbackCourse = portfolioData.mathStat301.course;

  wrapper.innerHTML = `
    <h3 class="section-heading" data-parallax="0.02">301.exe - ${toSafeHTML(fallbackCourse)}</h3>
    <div class="stat301-layout">
      <nav class="stat301-sidebar" aria-label="Topics for ${toSafeHTML(fallbackCourse)}">
        <ul class="stat301-topic-list" data-stat301-topic-list></ul>
      </nav>
      <article class="stat301-content" data-stat301-content></article>
    </div>
  `;

  const topicListEl = wrapper.querySelector("[data-stat301-topic-list]");
  const contentEl = wrapper.querySelector("[data-stat301-content]");
  const headingEl = wrapper.querySelector(".section-heading");
  let activeToken = 0;

  const setTopic = async (topic, buttons) => {
    const token = ++activeToken;

    buttons.forEach((button) => {
      const isActive = button.dataset.topicId === topic.id;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    setStat301Status(contentEl, "Loading topic...");

    try {
      const markdown = await loadStat301TopicMarkdown(topic.file);
      if (token !== activeToken) {
        return;
      }

      contentEl.innerHTML = markdownToStatHtml(markdown);
      renderMathNotation(contentEl);
    } catch (error) {
      if (token !== activeToken) {
        return;
      }
      setStat301Status(contentEl, `Failed to load topic content. ${error.message}`, true);
    }
  };

  const initialize = async () => {
    setStat301Status(contentEl, "Loading notes...");

    try {
      const data = await loadStat301TopicsIndex();
      headingEl.textContent = `301.exe - ${data.course || fallbackCourse}`;

      topicListEl.innerHTML = data.topics
        .map(
          (topic) => `
            <li>
              <button
                class="stat301-topic-btn retro-btn"
                type="button"
                data-topic-id="${toSafeHTML(topic.id)}"
                aria-pressed="false"
              >
                ${toSafeHTML(topic.label || topic.title || topic.id)}
              </button>
            </li>
          `
        )
        .join("");

      const topicButtons = [...topicListEl.querySelectorAll(".stat301-topic-btn")];
      topicButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const topic = data.topics.find((item) => item.id === button.dataset.topicId);
          if (topic) {
            setTopic(topic, topicButtons);
          }
        });
      });

      if (data.topics[0]) {
        await setTopic(data.topics[0], topicButtons);
      } else {
        setStat301Status(contentEl, "No topics found in index file.", true);
      }
    } catch (error) {
      setStat301Status(
        contentEl,
        `Unable to load external notes files. Run from a local HTTP server and check ${portfolioData.mathStat301.topicsIndexPath}.`,
        true
      );
    }
  };

  initialize();
  return wrapper;
}

function buildSection(sectionKey, onMutation) {
  switch (sectionKey) {
    case "about":
      return buildAboutSection();
    case "publications":
      return buildPublicationsSection(onMutation);
    case "research":
      return buildResearchSection();
    case "teaching":
      return buildTeachingSection();
    case "stat301":
      return buildStat301Section();
    case "cityrail":
      return buildCityRailSection();
    case "flappy":
      return buildFlappySection();
    case "music":
      return buildMusicSection();
    case "minecraft":
      return buildMinecraftAppSection();
    case "cv":
      return buildCvSection();
    case "contact":
      return buildContactSection();
    default:
      return createElement("section", "");
  }
}

function refreshScrollableEffects(windowId, contentEl) {
  scrollCleanupMap.get(windowId)?.();
  scrollCleanupMap.set(windowId, animations.enhanceScrollableContent(contentEl));
}

function loadStoredWindowSession() {
  try {
    const raw = window.localStorage.getItem(WINDOW_SESSION_STORAGE_KEY);
    if (!raw) {
      return null;
    }
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.windows)) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function persistWindowSession() {
  if (!manager || isApplyingWindowSession) {
    return;
  }

  try {
    const snapshot = manager.getSessionState();
    window.localStorage.setItem(WINDOW_SESSION_STORAGE_KEY, JSON.stringify(snapshot));
  } catch {
    // ignore localStorage failures (private mode / quota)
  }
}

function restoreWindowSessionIfAny() {
  const snapshot = loadStoredWindowSession();
  if (!snapshot || !manager) {
    return;
  }

  isApplyingWindowSession = true;
  try {
    if (Array.isArray(snapshot.windows)) {
      snapshot.windows.forEach((item) => {
        if (item?.isOpen && typeof item.id === "string") {
          ensureWindowContentMounted(item.id);
        }
      });
    }
    manager.applySessionState(snapshot);
  } finally {
    isApplyingWindowSession = false;
  }
}

function bindWindowSessionPersistence() {
  [
    "window:open",
    "window:close",
    "window:minimize",
    "window:restore",
    "window:focus",
    "window:maximize",
    "window:move",
    "window:resize",
  ].forEach((eventName) => {
    document.addEventListener(eventName, persistWindowSession);
  });

  window.addEventListener("beforeunload", persistWindowSession);
}

function renderWindows() {
  launchableWindowMeta.forEach((meta) => {
    const fragment = dom.windowTemplate.content.cloneNode(true);
    const windowEl = fragment.querySelector(".window");
    const titleIcon = fragment.querySelector(".window-title-icon");
    const titleText = fragment.querySelector(".window-title");
    const contentEl = fragment.querySelector(".window-content");

    titleIcon.src = meta.icon;
    titleText.textContent = `${meta.title} - ${meta.exeName}`;
    const titleId = `${meta.id}-title`;
    titleText.id = titleId;
    windowEl.setAttribute("aria-labelledby", titleId);
    windowContentHostMap.set(meta.id, contentEl);

    if (meta.sectionKey === "stat301") {
      contentEl.classList.add("window-content-stat301");
    }
    if (meta.sectionKey === "cityrail") {
      contentEl.classList.add("window-content-cityrail");
    }
    if (meta.sectionKey === "flappy") {
      contentEl.classList.add("window-content-flappy");
    }
    if (meta.sectionKey === "minecraft") {
      contentEl.classList.add("window-content-minecraft");
    }

    const shouldAddResizeHandles = meta.canResize !== false;
    if (shouldAddResizeHandles) {
      createResizeHandles(windowEl);
    }
    dom.windowLayer.appendChild(fragment);

    const createdWindow = dom.windowLayer.lastElementChild;
    const titlebar = createdWindow.querySelector(".window-titlebar");
    const resizeHandles = createdWindow.querySelectorAll(".resize-handle");

    const taskButton = createElement("button", "taskbar-app retro-btn is-hidden");
    taskButton.type = "button";
    taskButton.dataset.windowId = meta.id;
    taskButton.innerHTML = `<img src="${meta.icon}" alt="" aria-hidden="true" /><span>${toSafeHTML(meta.title)}</span>`;

    taskButton.addEventListener("click", async () => {
      const state = manager.getState(meta.id);
      if (!state) {
        return;
      }

      if (!state.isOpen) {
        await openWindow(meta.id, iconMap.get(meta.id));
        return;
      }

      if (state.isMinimized) {
        await manager.restoreWindow(meta.id, taskButton);
        return;
      }

      if (taskButton.classList.contains("is-active")) {
        await manager.minimizeWindow(meta.id, taskButton);
      } else {
        manager.focusWindow(meta.id);
      }
    });

    dom.taskbarApps.appendChild(taskButton);
    taskButtonMap.set(meta.id, taskButton);

    manager.registerWindow({
      id: meta.id,
      title: meta.title,
      element: createdWindow,
      taskButtonEl: taskButton,
      iconEl: iconMap.get(meta.id),
      defaultPos: meta.defaultPos,
      defaultSize: meta.defaultSize,
      canResize: meta.canResize !== false,
      resizeAspectRatio:
        Number.isFinite(meta.resizeAspectRatio) && meta.resizeAspectRatio > 0
          ? meta.resizeAspectRatio
          : null,
      canMaximize: meta.canMaximize !== false,
      fixedSize: meta.fixedSize === true,
    });

    manager.initDrag(createdWindow, titlebar);
    manager.initResize(createdWindow, resizeHandles);

    const controlButtons = createdWindow.querySelectorAll(".window-control");
    controlButtons.forEach((button) => {
      const action = button.dataset.action;
      if (action === "maximize" && meta.canMaximize === false) {
        button.disabled = true;
        button.classList.add("is-disabled");
        button.setAttribute("aria-disabled", "true");
      }

      button.addEventListener("click", async (event) => {
        event.stopPropagation();
        const action = button.dataset.action;

        if (action === "minimize") {
          await manager.minimizeWindow(meta.id, taskButton);
          return;
        }

        if (action === "maximize") {
          manager.toggleMaximize(meta.id);
          return;
        }

        if (action === "close") {
          await manager.closeWindow(meta.id, iconMap.get(meta.id));
        }
      });
    });

    if (meta.canMaximize !== false) {
      titlebar.addEventListener("dblclick", () => manager.toggleMaximize(meta.id));
    }

    createdWindow.addEventListener("keydown", async (event) => {
      if (event.key === "Escape") {
        if (document.pointerLockElement) {
          return;
        }
        await manager.closeWindow(meta.id, iconMap.get(meta.id));
      }
    });

  });
}

function unmountWindowContent(windowId) {
  if (!mountedWindowSections.has(windowId)) {
    return;
  }

  const cleanup = windowContentCleanupMap.get(windowId);
  if (typeof cleanup === "function") {
    cleanup();
  }
  windowContentCleanupMap.delete(windowId);

  scrollCleanupMap.get(windowId)?.();
  scrollCleanupMap.delete(windowId);

  const contentEl = windowContentHostMap.get(windowId);
  if (contentEl) {
    contentEl.replaceChildren();
  }
  mountedWindowSections.delete(windowId);
}

function ensureWindowContentMounted(windowId) {
  if (mountedWindowSections.has(windowId)) {
    return;
  }

  const meta = launchableWindowMetaById.get(windowId);
  const contentEl = windowContentHostMap.get(windowId);
  if (!meta || !contentEl) {
    return;
  }

  const section = buildSection(meta.sectionKey, () => refreshScrollableEffects(meta.id, contentEl));
  contentEl.appendChild(section);
  if (typeof section.cleanup === "function") {
    windowContentCleanupMap.set(windowId, section.cleanup);
  }
  mountedWindowSections.add(windowId);
  refreshScrollableEffects(meta.id, contentEl);
}

async function openWindow(windowId, sourceEl) {
  if (!launchableWindowIds.has(windowId)) {
    return;
  }
  ensureWindowContentMounted(windowId);
  await manager.openWindow(windowId, sourceEl);
}

async function openStartMenu() {
  if (startMenuOpen) {
    return;
  }

  startMenuOpen = true;
  dom.startButton.setAttribute("aria-expanded", "true");
  dom.startButton.classList.add("is-pressed");
  await animations.animateStartMenu(dom.startMenu, true);
}

async function closeStartMenu() {
  if (!startMenuOpen) {
    return;
  }

  startMenuOpen = false;
  dom.startButton.setAttribute("aria-expanded", "false");
  dom.startButton.classList.remove("is-pressed");
  await animations.animateStartMenu(dom.startMenu, false);
}

function bindWindowContentLifecycle() {
  document.addEventListener("window:close", (event) => {
    const windowId = event?.detail?.id;
    if (typeof windowId !== "string") {
      return;
    }
    unmountWindowContent(windowId);
  });
}

function bindGlobalEvents() {
  dom.startButton.addEventListener("click", async () => {
    if (startMenuOpen) {
      await closeStartMenu();
    } else {
      await openStartMenu();
    }
  });

  document.addEventListener("pointerdown", async (event) => {
    if (!startMenuOpen) {
      return;
    }

    const insideMenu = dom.startMenu.contains(event.target);
    const insideButton = dom.startButton.contains(event.target);

    if (!insideMenu && !insideButton) {
      await closeStartMenu();
    }
  });

  document.addEventListener("keydown", async (event) => {
    if (event.key === "Escape") {
      if (startMenuOpen) {
        await closeStartMenu();
      }
    }
  });
}

async function init() {
  updateClock();
  setInterval(updateClock, 1000 * 30);

  manager = createWindowManager({
    layerEl: dom.windowLayer,
    mobileBreakpoint: 768,
    animations,
  });

  renderDesktopIcons();
  renderStartMenu();
  renderWindows();
  bindWindowContentLifecycle();
  bindWindowSessionPersistence();
  restoreWindowSessionIfAny();
  bindGlobalEvents();

  await animations.animateDesktopIcons(dom.desktopIcons.querySelectorAll(".desktop-icon"));
  persistWindowSession();
}

init();
