function animeLib() {
  return window.anime;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function tunedDuration(value) {
  return prefersReducedMotion() ? Math.max(60, Math.round(value * 0.35)) : value;
}

function resolveCenter(element) {
  if (!element || !(element instanceof Element)) {
    return null;
  }
  const rect = element.getBoundingClientRect();
  if (rect.width <= 0 || rect.height <= 0) {
    return null;
  }
  return {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2,
  };
}

function immediate(element, styles = {}) {
  Object.entries(styles).forEach(([key, value]) => {
    element.style[key] = value;
  });
}

export function hasAnimationEngine() {
  return typeof animeLib() === "function";
}

export function animateBootLine(container, text, options = {}) {
  const typeSpeed = options.typeSpeed ?? -1;
  const line = document.createElement("div");
  line.className = "boot-line";
  container.appendChild(line);

  if (!hasAnimationEngine() || prefersReducedMotion() || typeSpeed <= 0) {
    line.textContent = text;
    return Promise.resolve(line);
  }

  return new Promise((resolve) => {
    const cursor = "_";
    const state = { index: 0 };

    animeLib()({
      targets: state,
      index: text.length,
      round: 1,
      duration: tunedDuration(text.length * typeSpeed),
      easing: "linear",
      update: () => {
        line.textContent = `${text.slice(0, state.index)}${cursor}`;
      },
      complete: () => {
        line.textContent = text;
        resolve(line);
      },
    });
  });
}

export function animateBootProgress(progressEl) {
  if (!hasAnimationEngine() || prefersReducedMotion()) {
    immediate(progressEl, { width: "100%" });
    return Promise.resolve();
  }

  return animeLib()({
    targets: progressEl,
    width: ["0%", "100%"],
    duration: tunedDuration(28),
    easing: "easeInOutQuad",
  }).finished;
}

export function transitionBootToDesktop(bootEl, desktopEl) {
  desktopEl.classList.remove("is-hidden");

  if (!hasAnimationEngine() || prefersReducedMotion()) {
    bootEl.classList.add("is-hidden");
    immediate(desktopEl, { opacity: "1", transform: "none" });
    return Promise.resolve();
  }

  immediate(desktopEl, { opacity: "0", transform: "scale(1.02)" });

  return animeLib()
    .timeline({ easing: "easeOutCubic" })
    .add({
      targets: bootEl,
      opacity: [1, 0],
      duration: tunedDuration(24),
    })
    .add(
      {
        targets: desktopEl,
        opacity: [0, 1],
        scale: [1.02, 1],
        duration: tunedDuration(36),
      },
      "-=18"
    )
    .finished.then(() => {
      bootEl.classList.add("is-hidden");
      immediate(desktopEl, { opacity: "1", transform: "none" });
    });
}

export function animateDesktopIcons(iconElements) {
  const icons = [...iconElements];
  if (!icons.length) {
    return Promise.resolve();
  }

  if (!hasAnimationEngine() || prefersReducedMotion()) {
    icons.forEach((icon) => {
      immediate(icon, { opacity: "1", transform: "none" });
    });
    return Promise.resolve();
  }

  return animeLib()({
    targets: icons,
    opacity: [0, 1],
    translateY: [18, 0],
    delay: animeLib().stagger(90),
    duration: tunedDuration(520),
    easing: "easeOutCubic",
  }).finished;
}

function animateWindowBetween(windowEl, fromElement, toElement, mode = "open") {
  const fromCenter = resolveCenter(fromElement);
  const toCenter = resolveCenter(toElement ?? windowEl);
  const targetCenter = resolveCenter(windowEl);

  if (!hasAnimationEngine() || prefersReducedMotion()) {
    immediate(windowEl, {
      opacity: "1",
      transform: "none",
      display: "flex",
    });
    return Promise.resolve();
  }

  const openLike = mode === "open" || mode === "restore";
  const closeToCenter = mode === "close";

  const anchorFrom = fromCenter ?? targetCenter ?? toCenter;
  const anchorTo = toCenter ?? targetCenter ?? fromCenter;

  const dx = closeToCenter ? 0 : anchorFrom && anchorTo ? anchorFrom.x - anchorTo.x : 0;
  const dy = closeToCenter ? 0 : anchorFrom && anchorTo ? anchorFrom.y - anchorTo.y : 0;
  const travelX = openLike ? dx : -dx;
  const travelY = openLike ? dy : -dy;

  const startScale = openLike ? 0.24 : 1;
  const endScale = openLike ? 1 : closeToCenter ? 0.08 : 0.18;
  const easing = openLike ? "easeOutElastic(1, .75)" : closeToCenter ? "easeInQuad" : "easeInBack";
  const duration = openLike ? tunedDuration(550) : closeToCenter ? tunedDuration(230) : tunedDuration(300);

  windowEl.style.willChange = "transform, opacity";

  return animeLib()({
    targets: windowEl,
    opacity: openLike ? [0, 1] : [1, 0],
    translateX: openLike ? [travelX, 0] : [0, travelX],
    translateY: openLike ? [travelY, 0] : [0, travelY],
    scale: [startScale, endScale],
    duration,
    easing,
  }).finished.finally(() => {
    windowEl.style.willChange = "";
    immediate(windowEl, { transform: "none" });
  });
}

export function animateWindowOpen(windowEl, sourceEl) {
  return animateWindowBetween(windowEl, sourceEl, windowEl, "open");
}

export function animateWindowClose(windowEl, targetEl) {
  return animateWindowBetween(windowEl, windowEl, windowEl, "close");
}

export function animateWindowMinimize(windowEl, targetEl) {
  return animateWindowBetween(windowEl, windowEl, targetEl, "minimize");
}

export function animateWindowRestore(windowEl, sourceEl) {
  return animateWindowBetween(windowEl, sourceEl, windowEl, "restore");
}

export function animateStartMenu(menuEl, opening = true) {
  if (opening) {
    menuEl.classList.remove("is-hidden");
  }

  if (!hasAnimationEngine() || prefersReducedMotion()) {
    if (!opening) {
      menuEl.classList.add("is-hidden");
    }
    return Promise.resolve();
  }

  const listItems = menuEl.querySelectorAll(".start-item");

  if (opening) {
    return animeLib()
      .timeline({ easing: "easeOutCubic" })
      .add({
        targets: menuEl,
        opacity: [0, 1],
        translateY: [12, 0],
        duration: tunedDuration(220),
      })
      .add(
        {
          targets: listItems,
          opacity: [0, 1],
          translateX: [-8, 0],
          delay: animeLib().stagger(40),
          duration: tunedDuration(180),
        },
        "-=130"
      )
      .finished;
  }

  return animeLib()({
    targets: menuEl,
    opacity: [1, 0],
    translateY: [0, 8],
    duration: tunedDuration(170),
    easing: "easeInCubic",
  }).finished.then(() => {
    menuEl.classList.add("is-hidden");
    immediate(menuEl, { opacity: "", transform: "" });
  });
}

export function animateIconHover(iconEl) {
  if (!hasAnimationEngine() || prefersReducedMotion()) {
    return;
  }
  animeLib().remove(iconEl);
  animeLib()({
    targets: iconEl,
    scale: [1, 1.06, 1],
    duration: tunedDuration(260),
    easing: "easeOutQuad",
  });
}

export function animateDragSettle(windowEl) {
  if (!hasAnimationEngine() || prefersReducedMotion()) {
    return Promise.resolve();
  }

  return animeLib()({
    targets: windowEl,
    keyframes: [{ scale: 0.995 }, { scale: 1 }],
    duration: tunedDuration(120),
    easing: "easeOutQuad",
  }).finished;
}

function clearWallpaperVars(desktopEl) {
  desktopEl.style.removeProperty("--wallpaper-drift-x");
  desktopEl.style.removeProperty("--wallpaper-drift-y");
  desktopEl.style.removeProperty("--wallpaper-drift-x-inverse");
  desktopEl.style.removeProperty("--wallpaper-drift-y-inverse");
  desktopEl.style.removeProperty("--wallpaper-stripe-offset");
  desktopEl.style.removeProperty("--wallpaper-glow-1");
  desktopEl.style.removeProperty("--wallpaper-glow-2");
  desktopEl.style.removeProperty("--wallpaper-wave-1-x");
  desktopEl.style.removeProperty("--wallpaper-wave-1-y");
  desktopEl.style.removeProperty("--wallpaper-wave-2-x");
  desktopEl.style.removeProperty("--wallpaper-wave-2-y");
  desktopEl.style.removeProperty("--wallpaper-wave-alpha-1");
  desktopEl.style.removeProperty("--wallpaper-wave-alpha-2");
}

function createWallpaperWaveLayer(desktopEl) {
  desktopEl.querySelector('[data-wallpaper-wave-layer="true"]')?.remove();

  const layerEl = document.createElement("div");
  layerEl.className = "wallpaper-wave-layer";
  layerEl.dataset.wallpaperWaveLayer = "true";

  const bandConfigs = [
    { top: 6, height: 19, opacity: 0.72 },
    { top: 23, height: 15, opacity: 0.6 },
    { top: 40, height: 17, opacity: 0.68 },
    { top: 59, height: 15, opacity: 0.56 },
    { top: 76, height: 18, opacity: 0.63 },
  ];

  const bands = bandConfigs.map((config, index) => {
    const band = document.createElement("div");
    band.className = "wallpaper-wave-band";
    band.dataset.waveBand = String(index);
    band.style.top = `${config.top}%`;
    band.style.height = `${config.height}%`;
    band.style.opacity = String(config.opacity);
    layerEl.appendChild(band);
    return band;
  });

  desktopEl.insertBefore(layerEl, desktopEl.firstChild);
  return { layerEl, bands };
}

export function startWallpaperAnimation(desktopEl) {
  if (!desktopEl || !hasAnimationEngine() || prefersReducedMotion()) {
    return {
      stop() {
        if (!desktopEl) {
          return;
        }
        clearWallpaperVars(desktopEl);
        desktopEl.querySelector('[data-wallpaper-wave-layer="true"]')?.remove();
      },
    };
  }

  const state = {
    driftX: -10,
    driftY: 6,
    stripeOffset: 0,
    glow1: 0.05,
    glow2: 0.06,
    wave1X: 0,
    wave1Y: 0,
    wave2X: 0,
    wave2Y: 0,
    waveAlpha1: 0.14,
    waveAlpha2: 0.11,
  };

  const apply = () => {
    desktopEl.style.setProperty("--wallpaper-drift-x", `${Math.round(state.driftX)}px`);
    desktopEl.style.setProperty("--wallpaper-drift-y", `${Math.round(state.driftY)}px`);
    desktopEl.style.setProperty("--wallpaper-drift-x-inverse", `${Math.round(-state.driftX)}px`);
    desktopEl.style.setProperty("--wallpaper-drift-y-inverse", `${Math.round(-state.driftY)}px`);
    desktopEl.style.setProperty("--wallpaper-stripe-offset", `${Math.round(state.stripeOffset)}px`);
    desktopEl.style.setProperty("--wallpaper-glow-1", state.glow1.toFixed(3));
    desktopEl.style.setProperty("--wallpaper-glow-2", state.glow2.toFixed(3));
    desktopEl.style.setProperty("--wallpaper-wave-1-x", `${Math.round(state.wave1X)}px`);
    desktopEl.style.setProperty("--wallpaper-wave-1-y", `${Math.round(state.wave1Y)}px`);
    desktopEl.style.setProperty("--wallpaper-wave-2-x", `${Math.round(state.wave2X)}px`);
    desktopEl.style.setProperty("--wallpaper-wave-2-y", `${Math.round(state.wave2Y)}px`);
    desktopEl.style.setProperty("--wallpaper-wave-alpha-1", state.waveAlpha1.toFixed(3));
    desktopEl.style.setProperty("--wallpaper-wave-alpha-2", state.waveAlpha2.toFixed(3));
  };

  apply();
  const { layerEl: waveLayerEl, bands: waveBands } = createWallpaperWaveLayer(desktopEl);

  const driftAnim = animeLib()({
    targets: state,
    driftX: [-12, 12],
    driftY: [8, -8],
    duration: tunedDuration(15000),
    easing: "easeInOutSine",
    direction: "alternate",
    loop: true,
    update: apply,
  });

  const stripeAnim = animeLib()({
    targets: state,
    stripeOffset: [0, 24],
    duration: tunedDuration(12000),
    easing: "linear",
    loop: true,
    update: apply,
  });

  const glowAnim = animeLib()({
    targets: state,
    glow1: [0.04, 0.075],
    glow2: [0.055, 0.085],
    duration: tunedDuration(4200),
    easing: "easeInOutQuad",
    direction: "alternate",
    loop: true,
    update: apply,
  });

  const waveAnimPrimary = animeLib()({
    targets: state,
    wave1X: [-110, 120],
    wave1Y: [-44, 40],
    duration: tunedDuration(5200),
    easing: "easeInOutSine",
    direction: "alternate",
    loop: true,
    update: apply,
  });

  const waveAnimSecondary = animeLib()({
    targets: state,
    wave2X: [130, -140],
    wave2Y: [38, -34],
    duration: tunedDuration(6400),
    easing: "easeInOutSine",
    direction: "alternate",
    loop: true,
    update: apply,
  });

  const waveAlphaAnim = animeLib()({
    targets: state,
    waveAlpha1: [0.11, 0.2],
    waveAlpha2: [0.08, 0.17],
    duration: tunedDuration(2400),
    easing: "easeInOutQuad",
    direction: "alternate",
    loop: true,
    update: apply,
  });

  const waveBandAnimations = waveBands.map((band, index) =>
    animeLib()({
      targets: band,
      translateX: index % 2 === 0 ? [-110, 115] : [105, -120],
      translateY: [0, index % 2 === 0 ? 20 : -18, 0],
      skewX: [index % 2 === 0 ? -4 : 4, index % 2 === 0 ? 5 : -5],
      scaleX: [1.05, 1.17],
      duration: tunedDuration(5200 + index * 620),
      easing: "easeInOutSine",
      direction: "alternate",
      loop: true,
      delay: index * 160,
    })
  );

  const waveBandPulse = waveBands.map((band, index) =>
    animeLib()({
      targets: band,
      opacity: [Number(band.style.opacity) || 0.6, 0.85, Number(band.style.opacity) || 0.6],
      duration: tunedDuration(2300 + index * 170),
      easing: "easeInOutSine",
      loop: true,
      delay: index * 110,
    })
  );

  return {
    stop() {
      driftAnim.pause();
      stripeAnim.pause();
      glowAnim.pause();
      waveAnimPrimary.pause();
      waveAnimSecondary.pause();
      waveAlphaAnim.pause();
      waveBandAnimations.forEach((animation) => animation.pause());
      waveBandPulse.forEach((animation) => animation.pause());
      waveBands.forEach((band) => animeLib().remove(band));
      waveLayerEl.remove();
      clearWallpaperVars(desktopEl);
    },
  };
}

export function enhanceScrollableContent(container) {
  const revealNodes = container.querySelectorAll(".reveal-item");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const node = entry.target;
        if (node.classList.contains("is-visible")) {
          return;
        }

        node.classList.add("is-visible");
        if (hasAnimationEngine() && !prefersReducedMotion()) {
          animeLib()({
            targets: node,
            opacity: [0, 1],
            translateY: [10, 0],
            duration: tunedDuration(260),
            easing: "easeOutQuad",
          });
        }
      });
    },
    { threshold: 0.16, root: container }
  );

  revealNodes.forEach((node) => revealObserver.observe(node));

  const parallaxNodes = container.querySelectorAll("[data-parallax]");
  let rafId = 0;

  const onScroll = () => {
    if (rafId) {
      return;
    }

    rafId = window.requestAnimationFrame(() => {
      rafId = 0;
      const amount = container.scrollTop;
      parallaxNodes.forEach((node) => {
        const factor = Number(node.getAttribute("data-parallax")) || 0.06;
        node.style.transform = `translateY(${Math.round(amount * factor)}px)`;
      });
    });
  };

  container.addEventListener("scroll", onScroll, { passive: true });

  return () => {
    revealObserver.disconnect();
    container.removeEventListener("scroll", onScroll);
    if (rafId) {
      cancelAnimationFrame(rafId);
    }
  };
}
