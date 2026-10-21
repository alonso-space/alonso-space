import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="proyectos" className="projects-section container">
      <h2 className="section-title">Proyectos</h2>
      <p className="section-subtitle">Algunas cosas que he construido</p>

      <div className="row g-4">
        {projects.map((project) => (
          <div key={project.title} className="col-6 col-md-4 col-lg-3">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
