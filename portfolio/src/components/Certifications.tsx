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
                <div className="info-card certification-card spot">
                  <h4>{item.title}</h4>
                  <p className="setup-text">{item.issuer}</p>
                  {item.img && (
                    <img
                      src={item.img}
                      alt={`Insignia ${item.title} de ${item.issuer}`}
                      width={180}
                      height={180}
                      loading="lazy"
                      className="certification-badge"
                    />
                  )}
                  {(item.link || item.file) && (
                    <div className="certification-actions">
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="certification-action is-primary"
                        >
                          <span
                            className="certification-icon is-credential"
                            aria-hidden="true"
                          />
                          Ver credencial
                        </a>
                      )}
                      {item.file && (
                        <a
                          href={item.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="certification-action"
                        >
                          <span
                            className="certification-icon is-file"
                            aria-hidden="true"
                          />
                          Certificado PDF
                        </a>
                      )}
                    </div>
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
