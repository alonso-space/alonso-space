export type NavItem = { id: string; label: string };

// Orden de arriba hacia abajo en la página. Las secciones sin entrada aquí
// (certificaciones, aprendizaje) se leen al hacer scroll
export const navItems: NavItem[] = [
  { id: "inicio", label: "Inicio" },
  { id: "proyectos", label: "Proyectos" },
  { id: "conocimientos", label: "Conocimientos" },
  { id: "formacion", label: "Formación" },
  { id: "experiencia", label: "Experiencia" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "contacto", label: "Contacto" },
];
