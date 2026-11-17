import avatar from "../assets/img/avatar.webp";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import TagCard from "./TagCard";

type TextCardProps = { title: string; text: string };

function TextCard({ title, text }: TextCardProps) {
  return (
    <div className="info-card spot">
      <h4>{title}</h4>
      <p className="setup-text">{text}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="sobre-mi" className="about-section container">
      <SectionHeading
        index="05"
        title="Sobre mí"
        subtitle="Un poco de contexto sobre quién soy y qué me interesa"
      />
      <div className="row g-4 about-grid">
        <div className="col-12 col-lg-5">
          <Reveal>
            <div className="info-card spot bio-card">
              <div className="avatar-placeholder">
                <img src={avatar} alt="Avatar" />
              </div>
              <h3>Alonso</h3>
              <p className="bio-tagline">Chile 🇨🇱</p>
              <p className="bio-text">
                Estudiante de Enseñanza Media Técnico-Profesional en
                Programación. Tengo experiencia práctica desarrollando proyectos
                personales con JavaScript, Node.js, Express y bases de datos
                SQL: aplicaciones web con gestión de usuarios, operaciones CRUD
                y persistencia de datos. Además, tengo un gran interés en la
                astronomía.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="col-12 col-lg-7">
          <div className="row g-4">
            <div className="col-12 col-md-6">
              <Reveal delay={80}>
                <TagCard title="🗣️ Idiomas" tags={["Español", "Inglés"]} />
              </Reveal>
            </div>
            <div className="col-12 col-md-6">
              <Reveal delay={160}>
                <TagCard
                  title="🚀 Intereses"
                  tags={["Astronomía", "Informática", "Videojuegos"]}
                />
              </Reveal>
            </div>
            <div className="col-12 col-md-6">
              <Reveal delay={80}>
                <TextCard
                  title="💻 Mi setup"
                  text="Laptop Acer Aspire A114-33 + Linux Mint como daily driver."
                />
              </Reveal>
            </div>
            <div className="col-12 col-md-6">
              <Reveal delay={160}>
                <TextCard
                  title="🎯 Objetivos"
                  text="Desarrollar mis habilidades en programación y crear proyectos de software, mientras continúo aprendiendo y explorando nuevas tecnologías."
                />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
