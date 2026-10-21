const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>&copy; {year} AlonsoSpace.</p>
    </footer>
  );
}
