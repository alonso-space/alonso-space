export default function Hero() {
  return (
    <section id="inicio" className="hero-section container">
      <p className="hero-eyebrow">// bienvenido a mi espacio</p>
      <h2 className="hero-title">
        Hola, soy Alonso <span className="hero-wave">👋</span>
      </h2>
      <p className="hero-subtitle">
        Programador aficionado explorando el desarrollo de software, la
        astronomía y todo lo que tenga que ver con tecnología.
      </p>
      <div className="hero-actions">
        <a href="#proyectos" className="btn btn-primary">
          Ver proyectos
        </a>
        <a href="#sobre-mi" className="btn btn-outline-custom">
          Sobre mí
        </a>
      </div>
    </section>
  );
}
