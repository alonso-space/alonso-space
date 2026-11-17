import { complementaryStudies, mainStudy } from "../data/education";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="formacion" className="education-section container">
      <SectionHeading
        index="03"
        title="Formación"
        subtitle="Lo que he estudiado y practicado"
      />
      <Reveal>
        <div className="info-card spot education-main">
          <div className="education-heading">
            <h3>{mainStudy.title}</h3>
            {mainStudy.period && (
              <span className="education-period">{mainStudy.period}</span>
            )}
          </div>
          <p className="setup-text">{mainStudy.detail}</p>
        </div>
      </Reveal>
      <h3 className="education-subtitle">Formación complementaria</h3>
      <div className="row g-4">
        {complementaryStudies.map((item, index) => (
          <div key={item.title} className="col-12 col-md-4">
            <Reveal delay={index * 80}>
              <div className="info-card spot">
                <h4>{item.title}</h4>
                <p className="setup-text">{item.detail}</p>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
