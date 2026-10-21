type TagCardProps = { title: string; tags: string[] };

export default function TagCard({ title, tags }: TagCardProps) {
  return (
    <div className="info-card">
      <h4>{title}</h4>
      <ul className="tag-list">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}
