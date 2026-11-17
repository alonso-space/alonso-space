import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "../utils/motion";

// Cuenta desde 0 hasta "end" cuando el número entra en pantalla
export default function CountUp({ end }: { end: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(() => (prefersReducedMotion() ? end : 0));
  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion()) return;
    let frameId = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / 900, 1);
        setValue(Math.round(end * (1 - (1 - progress) ** 3)));
        if (progress < 1) frameId = requestAnimationFrame(step);
      };
      frameId = requestAnimationFrame(step);
    });
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [end]);
  return <span ref={ref}>{value}</span>;
}
