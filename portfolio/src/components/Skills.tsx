import { skillGroups } from "../data/skills";
import TagCard from "./TagCard";

export default function Skills() {
  return (
    <section id="conocimientos" className="skills-section container">
      <h2 className="section-title">Conocimientos técnicos</h2>
      <p className="section-subtitle">
        Lenguajes, herramientas y tecnologías que uso
      </p>

      <div className="row g-4">
        {skillGroups.map((group) => (
          <div key={group.title} className="col-12 col-sm-6 col-lg-3">
            <TagCard title={group.title} tags={group.items} />
          </div>
        ))}
      </div>
    </section>
  );
}
