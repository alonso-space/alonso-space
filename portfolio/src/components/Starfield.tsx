import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  phase: number;
  drift: number;
};

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    // El canvas no entiende variables CSS: se lee el color y se relee al cambiar el tema
    const readStarColor = () =>
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-star")
        .trim();
    let starColor = readStarColor();
    let stars: Star[] = [];
    let width = 0;
    let height = 0;
    let frameId = 0;
    const createStar = (): Star => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.3 + 0.3,
      baseAlpha: Math.random() * 0.6 + 0.3,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      phase: Math.random() * Math.PI * 2,
      drift: Math.random() * 0.05 + 0.01,
    });
    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      const starCount = Math.floor((width * height) / 9000);
      stars = Array.from({ length: starCount }, createStar);
    };
    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = starColor;
      for (const star of stars) {
        const twinkle = prefersReducedMotion
          ? 1
          : Math.sin(time * star.twinkleSpeed + star.phase) * 0.4 + 0.6;
        ctx.globalAlpha = star.baseAlpha * twinkle;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        if (!prefersReducedMotion) {
          star.y += star.drift;
          if (star.y > height) {
            star.y = 0;
            star.x = Math.random() * width;
          }
        }
      }
      ctx.globalAlpha = 1;
      frameId = requestAnimationFrame(draw);
    };
    const themeObserver = new MutationObserver(() => {
      starColor = readStarColor();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-bs-theme"],
    });
    window.addEventListener("resize", resize);
    resize();
    frameId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(frameId);
      themeObserver.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);
  return <canvas id="starfield" ref={canvasRef} />;
}
