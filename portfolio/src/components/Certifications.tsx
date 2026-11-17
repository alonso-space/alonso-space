import { certifications } from "../data/certifications";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section id="certificaciones" className="certifications-section container">
      <SectionHeading
        index="06"
        title="Certificaciones"
        subtitle="Cursos y reconocimientos"
      />
      {certifications.length === 0 ? (
        <Reveal>
          <div className="empty-card">
            <span aria-hidden="true">🏅</span>
            <p>Aquí irán mis certificaciones. Próximamente.</p>
          </div>
        </Reveal>
      ) : (
        <div className="row g-4">
          {certifications.map((item, index) => (
            <div key={item.title} className="col-12 col-md-6 col-lg-4">
              <Reveal delay={(index % 3) * 80}>
                <div className="info-card spot">
                  <h4>{item.title}</h4>
                  <p className="setup-text">
                    {item.issuer}
                    {item.year && ` · ${item.year}`}
                  </p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-link"
                    >
                      Ver credencial ↗
                    </a>
                  )}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
