import { experience } from "../data/experience";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experiencia" className="experience-section container">
      <SectionHeading
        index="04"
        title="Experiencia"
        subtitle="Dónde he aplicado lo que sé"
      />
      <ol className="timeline">
        {experience.map((item) => (
          <li
            key={item.role}
            className={
              item.pending ? "timeline-item is-pending" : "timeline-item"
            }
          >
            <Reveal>
              <div className="info-card spot">
                <div className="education-heading">
                  <h3>{item.role}</h3>
                  <span className="education-period">{item.period}</span>
                </div>
                <p className="timeline-place">{item.place}</p>
                <p className="setup-text">{item.detail}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
