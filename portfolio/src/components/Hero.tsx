import { projects } from "../data/projects";
import { useTypewriter } from "../hooks/useTypewriter";
import CountUp from "./CountUp";

const roles = [
  "Estudiante de programación",
  "Desarrollador web",
  "Creador de videojuegos",
  "Aficionado a la astronomía",
];

const terminalLines = [
  { key: "role", value: '"Estudiante de programación"' },
  { key: "stack", value: '["Node.js", "React", "PostgreSQL"]' },
  { key: "learning", value: '"Seguridad web y Docker"' },
  { key: "location", value: '"Chile"' },
  { key: "openTo", value: '"Práctica profesional"' },
];

const techCount = new Set(projects.flatMap((project) => project.techs)).size;
const gameCount = projects.filter(
  (project) => project.category === "game",
).length;

const stats = [
  { label: "Proyectos", value: projects.length },
  { label: "Tecnologías", value: techCount },
  { label: "Videojuegos", value: gameCount },
];

function Terminal() {
  return (
    <div className="terminal spot" aria-hidden="true">
      <div className="terminal-bar">
        <span className="terminal-dot" />
        <span className="terminal-dot" />
        <span className="terminal-dot" />
        <span className="terminal-title">alonso.ts</span>
      </div>
      <div className="terminal-body">
        <p className="terminal-line">
          <span className="tk-keyword">const</span> alonso = {"{"}
        </p>
        {terminalLines.map(({ key, value }) => (
          <p key={key} className="terminal-line terminal-indent">
            <span className="tk-key">{key}</span>:{" "}
            <span className="tk-string">{value}</span>,
          </p>
        ))}
        <p className="terminal-line">{"};"}</p>
      </div>
    </div>
  );
}

export default function Hero() {
  const role = useTypewriter(roles);
  return (
    <section id="inicio" className="hero-section container">
      <div className="hero-orb" aria-hidden="true" />
      <div className="row align-items-center g-5">
        <div className="col-12 col-lg-7">
          <p className="hero-eyebrow">// bienvenido a mi espacio</p>
          <h2 className="hero-title">
            Hola, soy <span className="hero-name">Alonso</span>{" "}
            <span className="hero-wave">👋</span>
          </h2>
          <p className="visually-hidden">{roles.join(", ")}</p>
          <p className="hero-role" aria-hidden="true">
            <span>{role}</span>
            <span className="hero-caret" />
          </p>
          <p className="hero-subtitle">
            Construyo aplicaciones web, herramientas autoalojadas y videojuegos
            para aprender y mejorar. Busco mi práctica profesional en desarrollo
            de software.
          </p>
          <div className="hero-actions">
            <a href="#proyectos" className="btn btn-primary">
              Ver proyectos
            </a>
            <a href="#contacto" className="btn btn-outline-custom">
              Contacto
            </a>
          </div>
          <ul className="hero-stats">
            {stats.map((stat) => (
              <li key={stat.label}>
                <strong>
                  <CountUp end={stat.value} />
                </strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-12 col-lg-5">
          <Terminal />
        </div>
      </div>
    </section>
  );
}
