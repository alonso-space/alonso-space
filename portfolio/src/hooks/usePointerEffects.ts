import { useEffect } from "react";
import { prefersReducedMotion } from "../utils/motion";

// Un solo listener para todo el sitio: foco de luz que sigue al mouse en las
// tarjetas (.spot) e inclinación 3D en las que llevan data-tilt
export function usePointerEffects() {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const findCard = (event: PointerEvent) =>
      event.target instanceof Element
        ? event.target.closest<HTMLElement>(".spot")
        : null;
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const card = findCard(event);
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      card.style.setProperty("--mx", `${x}px`);
      card.style.setProperty("--my", `${y}px`);
      if (card.dataset.tilt === undefined) return;
      card.style.setProperty("--tilt-y", `${(x / rect.width - 0.5) * 8}deg`);
      card.style.setProperty("--tilt-x", `${(0.5 - y / rect.height) * 8}deg`);
    };
    const onOut = (event: PointerEvent) => {
      const card = findCard(event);
      const next = event.relatedTarget;
      if (!card || (next instanceof Node && card.contains(next))) return;
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerout", onOut, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerout", onOut);
    };
  }, []);
}
