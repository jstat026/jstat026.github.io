Original prompt: can you make a new app called flappy.exe? it will be a flappy bird clone. use space bar to jump

- Planned: add `flappy.exe` to window metadata, desktop/start menu, and section builder.
- Planned: implement native canvas Flappy Bird clone (`Space` to jump, score, restart on game over).
- Planned: validate with Playwright by opening app and pressing `Space`.

- Completed: added `flappy` portfolio config in `/Users/tt021/Desktop/web2/js/main.js` (`gravity`, `jumpVelocity`, `pipeSpeed`, `spawnInterval`).
- Completed: registered new launchable app in `windowMeta`:
  - `id: "flappy"`
  - `exeName: "flappy.exe"`
  - icon: `/Users/tt021/Desktop/web2/assets/icons/flappy.svg`
  - default size: `560x420`.
- Completed: created `buildFlappySection()` native window content with:
  - canvas game area + overlay + HUD,
  - Space-to-jump controls,
  - collision/score/pipe spawning/game-over/retry,
  - persistent best score in localStorage.
- Completed: exposed `window.render_game_to_text` and deterministic `window.advanceTime(ms)` hooks for automated validation.
- Completed: added Flappy-specific styles in `/Users/tt021/Desktop/web2/css/style.css` (`.flappy-*`, `.window-content-flappy`).

- Validation:
  - `node --check /Users/tt021/Desktop/web2/js/main.js` passed.
  - Playwright run using skill client generated:
    - `/Users/tt021/Desktop/web2/output/flappy-test/shot-0.png`, `shot-1.png`, `shot-2.png`
    - `/Users/tt021/Desktop/web2/output/flappy-test/state-0.json..state-2.json`
  - Additional Space-input run generated:
    - `/Users/tt021/Desktop/web2/output/flappy-test-2/shot-0.png`
    - `/Users/tt021/Desktop/web2/output/flappy-test-2/state-0.json` (`mode: "playing"` with airborne `player.y`, confirming jump/start).

- Follow-up fix: contained Flappy canvas strictly within the window content area.
  - CSS clipping/box sizing added to `.flappy-section`, `.flappy-stage`, and `.flappy-canvas`.
  - Canvas sizing now uses `stageEl.clientWidth/clientHeight` (content box) instead of border-including rect.

- Follow-up polish: improved visuals without external assets.
  - Gradient sky + glow sun + moving cloud layers.
  - Rolling terrain + patterned ground strip.
  - Shaded pipes with caps/highlights.
  - Bird tilt, wing flap animation, and cleaner score badge.
  - Added ambience time state + deterministic stepping parity.

- Follow-up validation:
  - `node --check /Users/tt021/Desktop/web2/js/main.js` passed.
  - Playwright run:
    - `/Users/tt021/Desktop/web2/output/flappy-polish/shot-0.png`
    - `/Users/tt021/Desktop/web2/output/flappy-polish/shot-1.png`
    - `/Users/tt021/Desktop/web2/output/flappy-polish/state-0.json`
    - `/Users/tt021/Desktop/web2/output/flappy-polish/state-1.json`

- Follow-up fix (requested): remove sun and eliminate right-edge hill gap.
  - Removed sun/glow rendering from `drawBackground()` in `/Users/tt021/Desktop/web2/js/main.js`.
  - Updated hill path generation to always add a final sample at `x = state.width`, preventing a visible right-edge wedge when canvas width is not a multiple of the hill step.

- Follow-up validation (requested fix):
  - `node --check /Users/tt021/Desktop/web2/js/main.js` passed.
  - Playwright run:
    - `/Users/tt021/Desktop/web2/output/flappy-bg-fix/shot-0.png`
    - `/Users/tt021/Desktop/web2/output/flappy-bg-fix/shot-1.png`
    - `/Users/tt021/Desktop/web2/output/flappy-bg-fix/state-0.json`
    - `/Users/tt021/Desktop/web2/output/flappy-bg-fix/state-1.json`
  - Manual screenshot inspection confirmed:
    - no sun rendered,
    - hills extend to the right edge.

- TODO / suggestions:
  - If desired, add one automated visual assertion that samples right-edge hill pixels to guard against future regressions.

- Follow-up feature (requested): make `cityrail.exe` resizable with locked aspect ratio, and scale PID uniformly while resizing.
  - Enabled CityRail window resizing in `/Users/tt021/Desktop/web2/js/main.js` and added `resizeAspectRatio: 1320 / 720`.
  - Passed `resizeAspectRatio` into window registration so constraints are window-specific.
  - Extended `/Users/tt021/Desktop/web2/js/window-manager.js`:
    - added per-window aspect constraint handling,
    - enforced ratio during pointer resize on `e`, `s`, and `se` handles,
    - normalized saved/restored bounds to respect aspect ratio,
    - centralized min-size handling.
  - Updated CityRail native app structure in `/Users/tt021/Desktop/web2/js/cityrail-native.js`:
    - wrapped PID inside viewport/stage containers,
    - added `updatePidScale(state)` to scale the entire PID board via transform,
    - wired scaling to render, `window:open`, `window:restore`, `window:resize`, and `ResizeObserver`.
  - Updated `/Users/tt021/Desktop/web2/css/style.css`:
    - added `.cityrail-pid-viewport` + `.cityrail-pid-stage`,
    - switched PID typography/layout tokens to fixed base metrics,
    - removed responsive PID reflow overrides so geometry stays proportional.

- Follow-up validation (CityRail resize + scale):
  - `node --check /Users/tt021/Desktop/web2/js/main.js` passed.
  - `node --check /Users/tt021/Desktop/web2/js/window-manager.js` passed.
  - `node --check /Users/tt021/Desktop/web2/js/cityrail-native.js` passed.
  - Playwright automation (`playwright_cli.sh` + `run-code`) produced:
    - `/Users/tt021/Desktop/web2/output/playwright/cityrail-resize-v2-initial.png`
    - `/Users/tt021/Desktop/web2/output/playwright/cityrail-resize-v2-after-se-shrink.png`
    - `/Users/tt021/Desktop/web2/output/playwright/cityrail-resize-v2-after-e-grow.png`
    - `/Users/tt021/Desktop/web2/output/playwright/cityrail-resize-v2-after-s-grow.png`
  - Measured from automation output:
    - window ratio stayed effectively constant (`~1.83`) across drags,
    - PID transform scales uniformly (`scaleX == scaleY`, e.g. `0.5312`, `0.8672`, `1`),
    - PID internal aspect stayed constant while scaling.
