import { useState } from "react";
import { navItems } from "../data/navigation";
import { useActiveSection } from "../hooks/useActiveSection";
import ScrollProgress from "./ScrollProgress";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(navItems.map((item) => item.id));
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="site-header">
      <div className="header-inner">
        <h1>AlonsoSpace</h1>
        <nav
          id="main-nav"
          className={menuOpen ? "main-nav is-open" : "main-nav"}
          aria-label="Principal"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={item.id === activeId ? "is-active" : undefined}
              aria-current={item.id === activeId ? "location" : undefined}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="menu-toggle-bar" />
            <span className="menu-toggle-bar" />
            <span className="menu-toggle-bar" />
          </button>
        </div>
      </div>
      <ScrollProgress />
    </header>
  );
}
