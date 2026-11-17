// Respeta la preferencia del sistema: quien pide menos movimiento no ve animaciones
export const prefersReducedMotion = (): boolean =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
