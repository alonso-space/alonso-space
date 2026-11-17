import { skillGroups } from "../data/skills";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import TagCard from "./TagCard";

export default function Skills() {
  return (
    <section id="conocimientos" className="skills-section container">
      <SectionHeading
        index="02"
        title="Conocimientos técnicos"
        subtitle="Lenguajes, herramientas y tecnologías que uso"
      />
      <div className="row g-4">
        {skillGroups.map((group, index) => (
          <div key={group.title} className="col-12 col-sm-6 col-lg-3">
            <Reveal delay={(index % 4) * 70}>
              <TagCard title={group.title} tags={group.items} />
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
