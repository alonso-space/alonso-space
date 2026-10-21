import type { Project } from "../data/projects";

export default function ProjectCard({
  title,
  link,
  img,
  imgHover,
  tech,
  techs,
  description,
}: Project) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <div className="project-card-image">
        <img
          src={img}
          alt={title}
          className="project-card-img project-card-img-normal"
        />
        <img
          src={imgHover}
          alt=""
          aria-hidden="true"
          className="project-card-img project-card-img-hover"
        />
        <div className="project-card-overlay">
          <span>Ver proyecto</span>
        </div>
      </div>

      <div className="project-card-info">
        <div className="project-card-title">
          <h2>{title}</h2>
          {tech && (
            <img
              src={tech}
              alt=""
              aria-hidden="true"
              className="project-card-tech"
            />
          )}
        </div>

        <ul className="project-tags">
          {techs.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>

        {description && <p className="project-card-desc">{description}</p>}
      </div>
    </a>
  );
}
