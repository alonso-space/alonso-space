import { complementaryStudies, mainStudy } from "../data/education";

export default function Education() {
  return (
    <section id="formacion" className="education-section container">
      <h2 className="section-title">Formación</h2>
      <p className="section-subtitle">Lo que he estudiado y practicado</p>

      <div className="info-card education-main">
        <div className="education-heading">
          <h3>{mainStudy.title}</h3>
          {mainStudy.period && (
            <span className="education-period">{mainStudy.period}</span>
          )}
        </div>
        <p className="setup-text">{mainStudy.detail}</p>
      </div>

      <h3 className="education-subtitle">Formación complementaria</h3>
      <div className="row g-4">
        {complementaryStudies.map((item) => (
          <div key={item.title} className="col-12 col-md-4">
            <div className="info-card">
              <h4>{item.title}</h4>
              <p className="setup-text">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
