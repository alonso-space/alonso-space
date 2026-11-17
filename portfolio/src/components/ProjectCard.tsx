import type { Project, ProjectCategory } from "../data/projects";

type ProjectCardProps = { project: Project; variant: "featured" | "compact" };

// Ícono del marcador cuando el proyecto todavía no tiene imagen
const placeholderIcons: Record<ProjectCategory, string> = {
  web: "🌐",
  game: "🎮",
  other: "🧩",
};

export default function ProjectCard({ project, variant }: ProjectCardProps) {
  const { title, category, repo, demo, img, imgHover, tech, techs } = project;
  return (
    <article
      className={`project-card project-card-${variant} spot`}
      data-tilt=""
    >
      <div className="project-card-image">
        {img ? (
          <>
            <img
              src={img}
              alt={title}
              loading="lazy"
              className="project-card-img project-card-img-normal"
            />
            {imgHover && (
              <img
                src={imgHover}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="project-card-img project-card-img-hover"
              />
            )}
          </>
        ) : (
          <div className="project-card-placeholder" aria-hidden="true">
            <span>{placeholderIcons[category]}</span>
          </div>
        )}
        {project.status === "in-progress" && (
          <span className="project-badge">En desarrollo</span>
        )}
      </div>
      <div className="project-card-info">
        <div className="project-card-title">
          <h3>{title}</h3>
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
        {project.description && (
          <p className="project-card-desc">{project.description}</p>
        )}
        {(repo || demo) && (
          <div className="project-card-actions">
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Código de ${title} en GitHub`}
              >
                Código
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Demo de ${title}`}
              >
                Demo ↗
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
