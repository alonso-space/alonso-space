import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = { children: ReactNode; delay?: number };

// Hace aparecer su contenido (fade + subida) la primera vez que entra en pantalla
export default function Reveal({ children, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.12 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={visible ? "reveal is-visible" : "reveal"}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
