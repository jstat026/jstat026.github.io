function noopPromise() {
  return Promise.resolve();
}

export function createWindowManager({ layerEl, mobileBreakpoint = 768, animations = {} }) {
  const animation = {
    animateWindowOpen: animations.animateWindowOpen ?? noopPromise,
    animateWindowClose: animations.animateWindowClose ?? noopPromise,
    animateWindowMinimize: animations.animateWindowMinimize ?? noopPromise,
    animateWindowRestore: animations.animateWindowRestore ?? noopPromise,
    animateDragSettle: animations.animateDragSettle ?? noopPromise,
  };

  const states = new Map();
  const mobileQuery = window.matchMedia(`(max-width: ${mobileBreakpoint}px)`);

  let activeWindowId = null;
  let zIndexCounter = 30;
  let wasMobile = mobileQuery.matches;

  function isMobile() {
    return mobileQuery.matches;
  }

  function emit(action, id) {
    const state = states.get(id);
    document.dispatchEvent(
      new CustomEvent(`window:${action}`, {
        detail: {
          id,
          state: state
            ? {
                id: state.id,
                title: state.title,
                isOpen: state.isOpen,
                isMinimized: state.isMinimized,
                isMaximized: state.isMaximized,
                x: state.x,
                y: state.y,
                w: state.w,
                h: state.h,
                zIndex: state.zIndex,
                lastFocusTs: state.lastFocusTs,
              }
            : null,
        },
      })
    );
  }

  function refreshWindowVisualState() {
    states.forEach((state) => {
      const active = state.id === activeWindowId && state.isOpen && !state.isMinimized;
      state.element.classList.toggle("is-active", active);
      state.taskButtonEl?.classList.toggle("is-active", active);
      state.taskButtonEl?.classList.toggle("is-minimized", state.isMinimized);
      state.taskButtonEl?.setAttribute("aria-pressed", String(active));

      if (!state.isOpen) {
        state.taskButtonEl?.classList.add("is-hidden");
      } else {
        state.taskButtonEl?.classList.remove("is-hidden");
      }
    });
  }

  function minimizeOtherOpenWindows(exceptId) {
    if (!isMobile()) {
      return;
    }

    states.forEach((state) => {
      if (state.id === exceptId || !state.isOpen || state.isMinimized) {
        return;
      }

      state.isMinimized = true;
      state.element.hidden = true;
      state.element.style.display = "none";
      emit("minimize", state.id);
    });
  }

  function enforceSingleOpenWindowOnMobile() {
    if (!isMobile()) {
      return;
    }

    const visible = [...states.values()]
      .filter((state) => state.isOpen && !state.isMinimized)
      .sort((a, b) => b.zIndex - a.zIndex);

    if (visible.length <= 1) {
      return;
    }

    const keep = visible[0];
    minimizeOtherOpenWindows(keep.id);
    activeWindowId = keep.id;
  }

  function clampToLayer(state, x, y, w = state.w, h = state.h) {
    if (layerEl.clientWidth <= 0 || layerEl.clientHeight <= 0) {
      return { x, y };
    }

    const maxX = Math.max(0, layerEl.clientWidth - w);
    const maxY = Math.max(0, layerEl.clientHeight - h);

    return {
      x: Math.min(Math.max(0, x), maxX),
      y: Math.min(Math.max(0, y), maxY),
    };
  }

  function getMinSize(state) {
    return {
      minW: state.fixedSize ? state.defaultSize.w : 320,
      minH: state.fixedSize ? state.defaultSize.h : 220,
    };
  }

  function getAspectConstraint(state, x = state.x, y = state.y) {
    const ratio = Number(state.resizeAspectRatio);
    if (!Number.isFinite(ratio) || ratio <= 0) {
      return null;
    }

    const { minW: baseMinW, minH: baseMinH } = getMinSize(state);
    let minW = baseMinW;
    let minH = minW / ratio;
    if (minH < baseMinH) {
      minH = baseMinH;
      minW = minH * ratio;
    }

    const rawMaxW = Math.max(minW, layerEl.clientWidth - x);
    const rawMaxH = Math.max(minH, layerEl.clientHeight - y);

    let maxW = rawMaxW;
    let maxH = maxW / ratio;
    if (maxH > rawMaxH) {
      maxH = rawMaxH;
      maxW = maxH * ratio;
    }

    return { ratio, minW, minH, maxW, maxH };
  }

  function applyAspectSize(state, preferredW, x = state.x, y = state.y) {
    const constraint = getAspectConstraint(state, x, y);
    if (!constraint) {
      return false;
    }

    const nextW = Math.min(Math.max(preferredW, constraint.minW), constraint.maxW);
    state.w = nextW;
    state.h = nextW / constraint.ratio;
    return true;
  }

  function applyBounds(state) {
    if (isMobile()) {
      state.element.style.left = "";
      state.element.style.top = "";
      state.element.style.width = "";
      state.element.style.height = "";
      return;
    }

    if (state.fixedSize) {
      state.w = state.defaultSize.w;
      state.h = state.defaultSize.h;
      state.isMaximized = false;
      state.restoreBounds = null;
    }

    if (!applyAspectSize(state, state.w)) {
      const { minW, minH } = getMinSize(state);
      state.w = Math.max(minW, state.w);
      state.h = Math.max(minH, state.h);
    }

    const clamped = clampToLayer(state, state.x, state.y, state.w, state.h);
    state.x = clamped.x;
    state.y = clamped.y;

    state.element.style.left = `${Math.round(state.x)}px`;
    state.element.style.top = `${Math.round(state.y)}px`;
    state.element.style.width = `${Math.round(state.w)}px`;
    state.element.style.height = `${Math.round(state.h)}px`;
  }

  function syncViewportMode() {
    layerEl.classList.toggle("is-mobile-layout", isMobile());

    if (isMobile() && !wasMobile) {
      states.forEach((state) => {
        state.desktopBounds = {
          x: state.x,
          y: state.y,
          w: state.w,
          h: state.h,
        };
        applyBounds(state);
      });
    }

    if (!isMobile() && wasMobile) {
      states.forEach((state) => {
        if (state.desktopBounds) {
          state.x = state.desktopBounds.x;
          state.y = state.desktopBounds.y;
          state.w = state.desktopBounds.w;
          state.h = state.desktopBounds.h;
        }
        applyBounds(state);
      });
    }

    enforceSingleOpenWindowOnMobile();

    wasMobile = isMobile();
  }

  function registerWindow({
    id,
    title,
    element,
    taskButtonEl,
    iconEl,
    defaultPos,
    defaultSize,
    canResize = true,
    resizeAspectRatio = null,
    canMaximize = true,
    fixedSize = false,
  }) {
    const state = {
      id,
      title,
      element,
      taskButtonEl,
      iconEl,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 0,
      x: defaultPos.x,
      y: defaultPos.y,
      w: defaultSize.w,
      h: defaultSize.h,
      defaultPos,
      defaultSize,
      canResize,
      resizeAspectRatio,
      canMaximize,
      fixedSize,
      desktopBounds: null,
      restoreBounds: null,
      hasOpened: false,
      lastFocusTs: 0,
    };

    element.hidden = true;
    element.style.display = "none";
    element.dataset.windowId = id;

    states.set(id, state);

    element.addEventListener("pointerdown", () => {
      focusWindow(id);
    });

    applyBounds(state);
    refreshWindowVisualState();
  }

  function getState(id) {
    return states.get(id) ?? null;
  }

  function getAllStates() {
    return [...states.values()];
  }

  function getActiveWindowId() {
    return activeWindowId;
  }

  function getSessionState() {
    return {
      version: 1,
      activeWindowId,
      windows: [...states.values()].map((state) => ({
        id: state.id,
        isOpen: state.isOpen,
        isMinimized: state.isMinimized,
        isMaximized: state.isMaximized,
        x: state.x,
        y: state.y,
        w: state.w,
        h: state.h,
        zIndex: state.zIndex,
        lastFocusTs: state.lastFocusTs,
        hasOpened: state.hasOpened,
        restoreBounds: state.restoreBounds
          ? {
              x: state.restoreBounds.x,
              y: state.restoreBounds.y,
              w: state.restoreBounds.w,
              h: state.restoreBounds.h,
            }
          : null,
      })),
    };
  }

  function applySessionState(snapshot) {
    if (!snapshot || !Array.isArray(snapshot.windows)) {
      return;
    }

    const savedById = new Map(
      snapshot.windows
        .filter((item) => item && typeof item.id === "string")
        .map((item) => [item.id, item])
    );

    let maxZ = zIndexCounter;

    states.forEach((state) => {
      const saved = savedById.get(state.id);
      const { minW, minH } = getMinSize(state);

      if (!saved) {
        state.isOpen = false;
        state.isMinimized = false;
        state.isMaximized = false;
        state.restoreBounds = null;
        state.element.hidden = true;
        state.element.style.display = "none";
        state.element.style.zIndex = "";
        state.zIndex = 0;
        return;
      }

      if (Number.isFinite(saved.x)) {
        state.x = saved.x;
      }
      if (Number.isFinite(saved.y)) {
        state.y = saved.y;
      }
      if (!state.fixedSize && Number.isFinite(saved.w)) {
        state.w = Math.max(minW, saved.w);
      }
      if (!state.fixedSize && Number.isFinite(saved.h)) {
        state.h = Math.max(minH, saved.h);
      }
      if (!state.fixedSize && Number.isFinite(state.resizeAspectRatio)) {
        if (Number.isFinite(saved.w)) {
          state.h = state.w / state.resizeAspectRatio;
        } else if (Number.isFinite(saved.h)) {
          state.w = state.h * state.resizeAspectRatio;
        }
      }
      if (state.fixedSize) {
        state.w = state.defaultSize.w;
        state.h = state.defaultSize.h;
      }

      state.isOpen = Boolean(saved.isOpen);
      state.isMinimized = Boolean(saved.isOpen && saved.isMinimized);
      state.isMaximized = Boolean(
        saved.isOpen && saved.isMaximized && state.canMaximize && !state.fixedSize
      );
      state.hasOpened = Boolean(saved.hasOpened || saved.isOpen);
      state.lastFocusTs = Number.isFinite(saved.lastFocusTs) ? saved.lastFocusTs : 0;
      state.zIndex = Number.isFinite(saved.zIndex) ? saved.zIndex : state.zIndex;
      maxZ = Math.max(maxZ, state.zIndex);

      if (
        saved.restoreBounds &&
        Number.isFinite(saved.restoreBounds.x) &&
        Number.isFinite(saved.restoreBounds.y) &&
        Number.isFinite(saved.restoreBounds.w) &&
        Number.isFinite(saved.restoreBounds.h)
      ) {
        state.restoreBounds = {
          x: saved.restoreBounds.x,
          y: saved.restoreBounds.y,
          w: Math.max(minW, saved.restoreBounds.w),
          h: Math.max(minH, saved.restoreBounds.h),
        };
        if (Number.isFinite(state.resizeAspectRatio)) {
          state.restoreBounds.h = state.restoreBounds.w / state.resizeAspectRatio;
        }
      } else {
        state.restoreBounds = null;
      }

      if (!state.isOpen) {
        state.element.hidden = true;
        state.element.style.display = "none";
        state.element.style.zIndex = "";
        return;
      }

      if (state.isMaximized && !isMobile()) {
        const padding = 4;
        state.x = 0;
        state.y = 0;
        state.w = Math.max(minW, layerEl.clientWidth - padding);
        state.h = Math.max(minH, layerEl.clientHeight - padding);
      }

      applyBounds(state);
      state.element.hidden = state.isMinimized;
      state.element.style.display = state.isMinimized ? "none" : "flex";
      state.element.style.zIndex = String(state.zIndex);
    });

    zIndexCounter = maxZ;

    const preferredId = snapshot.activeWindowId;
    const preferredState = preferredId ? states.get(preferredId) : null;
    if (preferredState && preferredState.isOpen && !preferredState.isMinimized) {
      activeWindowId = preferredId;
    } else {
      const fallback = [...states.values()]
        .filter((state) => state.isOpen && !state.isMinimized)
        .sort((a, b) => b.zIndex - a.zIndex)[0];
      activeWindowId = fallback?.id ?? null;
    }

    enforceSingleOpenWindowOnMobile();

    refreshWindowVisualState();
  }

  function focusWindow(id) {
    const state = states.get(id);
    if (!state || !state.isOpen || state.isMinimized) {
      return;
    }

    minimizeOtherOpenWindows(id);

    zIndexCounter += 1;
    state.zIndex = zIndexCounter;
    state.lastFocusTs = Date.now();
    state.element.style.zIndex = String(state.zIndex);
    activeWindowId = id;

    refreshWindowVisualState();
    emit("focus", id);
  }

  async function openWindow(id, sourceEl) {
    const state = states.get(id);
    if (!state) {
      return;
    }

    if (state.isOpen && state.isMinimized) {
      await restoreWindow(id, sourceEl);
      return;
    }

    if (state.isOpen) {
      focusWindow(id);
      return;
    }

    state.isOpen = true;
    state.isMinimized = false;
    state.isMaximized = false;

    minimizeOtherOpenWindows(id);

    if (!state.hasOpened) {
      state.x = state.defaultPos.x;
      state.y = state.defaultPos.y;
      state.w = state.defaultSize.w;
      state.h = state.defaultSize.h;
    }

    applyBounds(state);
    state.element.hidden = false;
    state.element.style.display = "flex";

    focusWindow(id);
    await animation.animateWindowOpen(state.element, sourceEl ?? state.iconEl);
    state.hasOpened = true;

    emit("open", id);
    refreshWindowVisualState();
  }

  async function closeWindow(id, targetEl) {
    const state = states.get(id);
    if (!state || !state.isOpen) {
      return;
    }

    await animation.animateWindowClose(state.element);

    state.isOpen = false;
    state.isMinimized = false;
    state.isMaximized = false;
    state.restoreBounds = null;
    state.element.hidden = true;
    state.element.style.display = "none";

    if (activeWindowId === id) {
      const candidate = [...states.values()]
        .filter((item) => item.isOpen && !item.isMinimized)
        .sort((a, b) => b.lastFocusTs - a.lastFocusTs)[0];
      activeWindowId = candidate?.id ?? null;
    }

    refreshWindowVisualState();
    emit("close", id);
  }

  async function minimizeWindow(id, taskbarEl) {
    const state = states.get(id);
    if (!state || !state.isOpen || state.isMinimized) {
      return;
    }

    refreshWindowVisualState();
    await animation.animateWindowMinimize(state.element, taskbarEl ?? state.taskButtonEl);

    state.isMinimized = true;
    state.element.hidden = true;
    state.element.style.display = "none";

    if (activeWindowId === id) {
      const candidate = [...states.values()]
        .filter((item) => item.isOpen && !item.isMinimized)
        .sort((a, b) => b.lastFocusTs - a.lastFocusTs)[0];
      activeWindowId = candidate?.id ?? null;
    }

    refreshWindowVisualState();
    emit("minimize", id);
  }

  async function restoreWindow(id, sourceEl) {
    const state = states.get(id);
    if (!state || !state.isOpen || !state.isMinimized) {
      return;
    }

    minimizeOtherOpenWindows(id);

    state.isMinimized = false;
    state.element.hidden = false;
    state.element.style.display = "flex";

    applyBounds(state);
    focusWindow(id);

    await animation.animateWindowRestore(state.element, sourceEl ?? state.taskButtonEl ?? state.iconEl);

    refreshWindowVisualState();
    emit("restore", id);
  }

  function toggleMaximize(id) {
    const state = states.get(id);
    if (!state || !state.isOpen || isMobile() || !state.canMaximize || state.fixedSize) {
      return;
    }

    const padding = 4;
    const layerWidth = layerEl.clientWidth;
    const layerHeight = layerEl.clientHeight;
    const { minW, minH } = getMinSize(state);

    if (!state.isMaximized) {
      state.restoreBounds = { x: state.x, y: state.y, w: state.w, h: state.h };
      state.x = 0;
      state.y = 0;
      state.w = Math.max(minW, layerWidth - padding);
      state.h = Math.max(minH, layerHeight - padding);
      state.isMaximized = true;
    } else {
      if (state.restoreBounds) {
        state.x = state.restoreBounds.x;
        state.y = state.restoreBounds.y;
        state.w = state.restoreBounds.w;
        state.h = state.restoreBounds.h;
      }
      state.isMaximized = false;
      state.restoreBounds = null;
    }

    applyBounds(state);
    focusWindow(id);
    emit("maximize", id);
  }

  function initDrag(windowEl, handleEl) {
    const id = windowEl.dataset.windowId;
    if (!id || !handleEl) {
      return;
    }

    let dragging = false;
    let rafId = 0;
    let startOffsetX = 0;
    let startOffsetY = 0;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    function frame() {
      const state = states.get(id);
      if (!state) {
        return;
      }

      const smoothing = isMobile() ? 1 : 0.4;
      currentX += (targetX - currentX) * smoothing;
      currentY += (targetY - currentY) * smoothing;

      state.x = currentX;
      state.y = currentY;
      applyBounds(state);

      if (Math.abs(targetX - currentX) > 0.35 || Math.abs(targetY - currentY) > 0.35) {
        rafId = requestAnimationFrame(frame);
      } else {
        rafId = 0;
      }
    }

    function onPointerMove(event) {
      if (!dragging) {
        return;
      }

      const state = states.get(id);
      if (!state) {
        return;
      }

      const proposedX = event.clientX - startOffsetX;
      const proposedY = event.clientY - startOffsetY;
      const clamped = clampToLayer(state, proposedX, proposedY);

      targetX = clamped.x;
      targetY = clamped.y;

      if (!rafId) {
        rafId = requestAnimationFrame(frame);
      }
    }

    async function onPointerUp() {
      if (!dragging) {
        return;
      }

      dragging = false;
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);

      const state = states.get(id);
      if (!state) {
        return;
      }

      state.x = targetX;
      state.y = targetY;
      applyBounds(state);
      await animation.animateDragSettle(state.element);
      emit("move", id);
    }

    handleEl.addEventListener("pointerdown", (event) => {
      const state = states.get(id);
      if (!state || isMobile() || state.isMaximized) {
        return;
      }

      if (event.target.closest(".window-controls")) {
        return;
      }

      dragging = true;
      focusWindow(id);

      const rect = state.element.getBoundingClientRect();
      startOffsetX = event.clientX - rect.left;
      startOffsetY = event.clientY - rect.top;
      currentX = state.x;
      currentY = state.y;
      targetX = state.x;
      targetY = state.y;

      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp, { once: true });
    });
  }

  function initResize(windowEl, handles) {
    const id = windowEl.dataset.windowId;
    if (!id || !handles?.length) {
      return;
    }

    handles.forEach((handle) => {
      handle.addEventListener("pointerdown", (event) => {
        const state = states.get(id);
        if (!state || isMobile() || state.isMaximized || !state.canResize || state.fixedSize) {
          return;
        }

        event.preventDefault();
        focusWindow(id);

        const edge = handle.dataset.edge;
        const startX = event.clientX;
        const startY = event.clientY;
        const startW = state.w;
        const startH = state.h;
        const { minW, minH } = getMinSize(state);

        function onPointerMove(moveEvent) {
          const dx = moveEvent.clientX - startX;
          const dy = moveEvent.clientY - startY;

          if (Number.isFinite(state.resizeAspectRatio) && state.resizeAspectRatio > 0) {
            let preferredW = startW;
            if (edge === "e") {
              preferredW = startW + dx;
            } else if (edge === "s") {
              preferredW = (startH + dy) * state.resizeAspectRatio;
            } else {
              const widthFromX = startW + dx;
              const widthFromY = (startH + dy) * state.resizeAspectRatio;
              const xDelta = Math.abs(widthFromX - startW);
              const yDelta = Math.abs(widthFromY - startW);
              preferredW = xDelta >= yDelta ? widthFromX : widthFromY;
            }

            applyAspectSize(state, preferredW);
            applyBounds(state);
            return;
          }

          let nextW = startW;
          let nextH = startH;

          if (edge.includes("e")) {
            nextW = Math.max(minW, startW + dx);
          }

          if (edge.includes("s")) {
            nextH = Math.max(minH, startH + dy);
          }

          const maxW = Math.max(minW, layerEl.clientWidth - state.x);
          const maxH = Math.max(minH, layerEl.clientHeight - state.y);

          state.w = Math.min(nextW, maxW);
          state.h = Math.min(nextH, maxH);

          applyBounds(state);
        }

        function onPointerUp() {
          window.removeEventListener("pointermove", onPointerMove);
          window.removeEventListener("pointerup", onPointerUp);
          emit("resize", id);
        }

        window.addEventListener("pointermove", onPointerMove);
        window.addEventListener("pointerup", onPointerUp, { once: true });
      });
    });
  }

  function handleViewportEvents() {
    const listener = () => syncViewportMode();
    if (typeof mobileQuery.addEventListener === "function") {
      mobileQuery.addEventListener("change", listener);
    } else {
      mobileQuery.addListener(listener);
    }

    window.addEventListener("resize", listener);
    syncViewportMode();
  }

  handleViewportEvents();

  return {
    registerWindow,
    openWindow,
    closeWindow,
    minimizeWindow,
    restoreWindow,
    focusWindow,
    toggleMaximize,
    initDrag,
    initResize,
    getState,
    getAllStates,
    getActiveWindowId,
    getSessionState,
    applySessionState,
    isMobile,
    syncViewportMode,
  };
}
