export type SkillGroup = {
  title: string;
  items: string[];
};

// Mismo contenido y orden que el currículum
export const skillGroups: SkillGroup[] = [
  {
    title: "💻 Lenguajes",
    items: ["Python", "Java", "JavaScript", "PHP", "GDScript", "TypeScript"],
  },
  {
    title: "🌐 Desarrollo web",
    items: ["Node.js", "Express", "React"],
  },
  {
    title: "🗄️ Bases de datos",
    items: ["SQL", "MySQL", "PostgreSQL"],
  },
  {
    title: "🔧 Herramientas",
    items: ["Git", "GitHub", "Docker", "Vite", "Godot Engine"],
  },
  {
    title: "🐧 Sistemas operativos",
    items: ["Linux", "Windows"],
  },
  {
    title: "📋 Ofimática y diseño",
    items: ["Google Workspace", "Canva"],
  },
];
