import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 600);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <a
      href="#inicio"
      className={visible ? "back-to-top is-visible" : "back-to-top"}
      aria-label="Volver arriba"
      tabIndex={visible ? 0 : -1}
    >
      ↑
    </a>
  );
}
