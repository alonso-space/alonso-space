import TagCard from "./TagCard";
import avatar from "../assets/img/avatar.webp";

type TextCardProps = { title: string; text: string };

function TextCard({ title, text }: TextCardProps) {
  return (
    <div className="info-card">
      <h4>{title}</h4>
      <p className="setup-text">{text}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="sobre-mi" className="about-section container">
      <h2 className="section-title">Sobre mí</h2>
      <p className="section-subtitle">
        Un poco de contexto sobre quién soy y qué me interesa
      </p>

      <div className="row g-4 about-grid">
        <div className="col-12 col-lg-5">
          <div className="info-card bio-card">
            <div className="avatar-placeholder">
              <img src={avatar} alt="Avatar" />
            </div>
            <h3>Alonso</h3>
            <p className="bio-tagline">Chile 🇨🇱</p>
            <p className="bio-text">
              Estudiante de Enseñanza Media Técnico-Profesional en Programación.
              Tengo experiencia práctica desarrollando proyectos personales con
              JavaScript, Node.js, Express, PHP y bases de datos SQL:
              aplicaciones web con gestión de usuarios, operaciones CRUD y
              persistencia de datos. Además, tengo un gran interés en la
              astronomía.
            </p>
          </div>
        </div>

        <div className="col-12 col-lg-7">
          <div className="row g-4">
            <div className="col-12 col-md-6">
              <TagCard title="🗣️ Idiomas" tags={["Español", "Inglés"]} />
            </div>
            <div className="col-12 col-md-6">
              <TagCard
                title="🚀 Intereses"
                tags={["Astronomía", "Informatica", "Videojuegos"]}
              />
            </div>
            <div className="col-12 col-md-6">
              <TextCard
                title="💻 Mi setup"
                text="Laptop Acer Aspire A114-33 + Linux Mint como daily driver."
              />
            </div>
            <div className="col-12 col-md-6">
              <TextCard
                title="🎯 Objetivos"
                text="Desarrollar mis habilidades en programación y crear proyectos de software, mientras continúo aprendiendo y explorando nuevas tecnologías."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="social-links">
        <a
          href="https://github.com/alonso-space"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub: alonso-space
        </a>
      </div>
    </section>
  );
}
