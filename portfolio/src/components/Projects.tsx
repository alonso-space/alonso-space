import { useState } from "react";
import { projects, type ProjectCategory } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Filter = "all" | ProjectCategory;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "Todos" },
  { id: "web", label: "Web" },
  { id: "game", label: "Juegos" },
  { id: "other", label: "Otros" },
];

const featured = projects.filter((project) => project.featured);
const others = projects.filter((project) => !project.featured);

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const visibleOthers = others.filter(
    (project) => filter === "all" || project.category === filter,
  );
  return (
    <section id="proyectos" className="projects-section container">
      <SectionHeading
        index="01"
        title="Proyectos"
        subtitle="Lo más importante que he construido"
      />
      <div className="row g-4">
        {featured.map((project, index) => (
          <div key={project.title} className="col-12 col-md-6">
            <Reveal delay={index * 80}>
              <ProjectCard project={project} variant="featured" />
            </Reveal>
          </div>
        ))}
      </div>
      <Reveal>
        <div className="projects-others-head">
          <h3 className="projects-others-title">Otros proyectos</h3>
          <div
            className="filter-chips"
            role="group"
            aria-label="Filtrar por tipo"
          >
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                className={item.id === filter ? "chip is-active" : "chip"}
                aria-pressed={item.id === filter}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </Reveal>
      <div className="row g-4" key={filter}>
        {visibleOthers.length === 0 && (
          <p className="projects-empty">
            Aún no hay proyectos en esta categoría.
          </p>
        )}
        {visibleOthers.map((project) => (
          <div
            key={project.title}
            className="col-12 col-sm-6 col-lg-4 project-pop"
          >
            <ProjectCard project={project} variant="compact" />
          </div>
        ))}
      </div>
      <div className="projects-more">
        <a
          href="https://github.com/alonso-space?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-custom"
        >
          Ver todos los repositorios en GitHub ↗
        </a>
      </div>
    </section>
  );
}
