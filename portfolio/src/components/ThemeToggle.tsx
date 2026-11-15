import { useState } from "react";

type Theme = "light" | "dark";

// Misma clave que lee el script de index.html
const STORAGE_KEY = "portfolio-theme";

function getCurrentTheme(): Theme {
  return document.documentElement.getAttribute("data-bs-theme") === "light"
    ? "light"
    : "dark";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getCurrentTheme);
  const nextTheme: Theme = theme === "dark" ? "light" : "dark";
  const label =
    nextTheme === "light" ? "Cambiar a tema claro" : "Cambiar a tema oscuro";
  const iconClass =
    theme === "dark" ? "theme-toggle-icon-sun" : "theme-toggle-icon-moon";
  const toggleTheme = () => {
    document.documentElement.setAttribute("data-bs-theme", nextTheme);
    try {
      localStorage.setItem(STORAGE_KEY, nextTheme);
    } catch {
      // Sin almacenamiento (modo privado): el cambio dura solo esta visita
    }
    setTheme(nextTheme);
  };
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      <span className={`theme-toggle-icon ${iconClass}`} aria-hidden="true" />
    </button>
  );
}
