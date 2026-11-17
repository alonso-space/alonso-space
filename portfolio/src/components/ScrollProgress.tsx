import { useEffect, useRef } from "react";

// Barra fina bajo el header que se llena según lo que has bajado en la página
export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      barRef.current?.style.setProperty("transform", `scaleX(${ratio})`);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return <div ref={barRef} className="scroll-progress" aria-hidden="true" />;
}
