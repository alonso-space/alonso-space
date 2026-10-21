const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>&copy; {year} alonso-space.</p>
    </footer>
  );
}
