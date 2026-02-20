const DEFAULT_CONFIG = {
  isocraftPath: "./assets/isocraft/index.html",
};

function normalizeConfig(input = {}) {
  const next = input && typeof input === "object" ? input : {};
  const rawPath = typeof next.isocraftPath === "string" ? next.isocraftPath.trim() : "";
  return {
    isocraftPath: rawPath || DEFAULT_CONFIG.isocraftPath,
  };
}

function createFallbackUi(stageEl, gameUrl) {
  const fallback = document.createElement("div");
  fallback.className = "minecraft-isocraft-fallback is-hidden";
  fallback.innerHTML = `
    <p><strong>isocraft failed to load in window.</strong></p>
    <p>Try reloading isocraft.exe. If this persists, open isocraft directly:</p>
    <p><a href="${gameUrl}" target="_blank" rel="noopener noreferrer">Open isocraft</a></p>
  `;
  stageEl.appendChild(fallback);
  return fallback;
}

export function createMinecraftSection(rawConfig = {}) {
  const config = normalizeConfig(rawConfig);

  const section = document.createElement("section");
  section.className = "minecraft-section minecraft-section-isocraft";
  section.innerHTML = `
    <div class="minecraft-stage minecraft-stage-isocraft" data-minecraft-stage>
      <iframe
        class="minecraft-iframe"
        data-minecraft-iframe
        src="${config.isocraftPath}"
        title="isocraft"
        loading="eager"
        allow="fullscreen; autoplay; gamepad; xr-spatial-tracking"
      ></iframe>
    </div>
  `;

  const stageEl = section.querySelector("[data-minecraft-stage]");
  const iframeEl = section.querySelector("[data-minecraft-iframe]");
  const fallbackEl = createFallbackUi(stageEl, config.isocraftPath);

  let loadTimeoutId = window.setTimeout(() => {
    fallbackEl.classList.remove("is-hidden");
  }, 10000);

  const onLoad = () => {
    if (loadTimeoutId) {
      window.clearTimeout(loadTimeoutId);
      loadTimeoutId = 0;
    }
    fallbackEl.classList.add("is-hidden");
  };

  const onError = () => {
    if (loadTimeoutId) {
      window.clearTimeout(loadTimeoutId);
      loadTimeoutId = 0;
    }
    fallbackEl.classList.remove("is-hidden");
  };

  iframeEl.addEventListener("load", onLoad);
  iframeEl.addEventListener("error", onError);

  section.cleanup = () => {
    if (loadTimeoutId) {
      window.clearTimeout(loadTimeoutId);
      loadTimeoutId = 0;
    }
    iframeEl.removeEventListener("load", onLoad);
    iframeEl.removeEventListener("error", onError);
    iframeEl.src = "about:blank";
  };

  return section;
}
