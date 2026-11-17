import { contactLinks } from "../data/contact";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contacto" className="contact-section container">
      <SectionHeading
        index="08"
        title="Contacto"
        subtitle="¿Tienes una oportunidad o quieres colaborar? Hablemos"
      />
      <Reveal>
        <div className="contact-links">
          {contactLinks.map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span aria-hidden="true">{link.icon}</span>
                {link.label}
              </a>
            ) : (
              <span
                key={link.label}
                className="contact-link is-disabled"
                aria-disabled="true"
              >
                <span aria-hidden="true">{link.icon}</span>
                {link.label}
              </span>
            ),
          )}
        </div>
      </Reveal>
    </section>
  );
}
