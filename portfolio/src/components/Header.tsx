import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <h1>AlonsoSpace</h1>
        <nav className="main-nav">
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#formacion">Formación</a>
          <a href="#conocimientos">Conocimientos</a>
          <a href="#proyectos">Proyectos</a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
