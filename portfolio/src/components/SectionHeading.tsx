type SectionHeadingProps = { index: string; title: string; subtitle: string };

export default function SectionHeading({
  index,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <span className="section-index" aria-hidden="true">
        {index}
      </span>
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>
    </div>
  );
}
