import {
  animateBootLine,
  animateBootProgress,
  transitionBootToDesktop,
} from "./animations.js";

export async function runBootSequence({
  bootScreenEl,
  bootLinesEl,
  bootProgressEl,
  desktopEl,
  lines,
}) {
  for (const line of lines) {
    await animateBootLine(bootLinesEl, line);
  }

  await animateBootProgress(bootProgressEl);
  await transitionBootToDesktop(bootScreenEl, desktopEl);

  document.dispatchEvent(
    new CustomEvent("boot:complete", {
      detail: { finishedAt: Date.now() },
    })
  );
}
