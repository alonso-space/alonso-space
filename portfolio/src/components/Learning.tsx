import { learningItems } from "../data/learning";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Learning() {
  return (
    <section id="aprendiendo" className="learning-section container">
      <SectionHeading
        index="07"
        title="Aprendiendo ahora"
        subtitle="Lo que estoy explorando en este momento"
      />
      <div className="row g-4">
        {learningItems.map((item, index) => (
          <div key={item.title} className="col-12 col-sm-6 col-lg-3">
            <Reveal delay={index * 70}>
              <div className="info-card spot learning-card">
                <span className="learning-icon" aria-hidden="true">
                  {item.icon}
                </span>
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
