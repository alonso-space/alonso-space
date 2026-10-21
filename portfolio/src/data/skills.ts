export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "💻 Lenguajes",
    items: ["Python", "Java", "JavaScript", "PHP", "GDScript"],
  },
  {
    title: "🌐 Desarrollo web",
    items: ["Node.js", "Express", "React"],
  },
  {
    title: "🗄️ Bases de datos",
    items: ["SQL", "MySQL", "Oracle Database (SQL)", "PostgreSQL"],
  },
  {
    title: "🐧 Sistemas operativos",
    items: ["Linux", "Windows"],
  },
  {
    title: "🔧 Herramientas",
    items: ["Git", "GitHub", "Docker", "Vite"],
  },
  {
    title: "🧪 Entornos y motores",
    items: ["XAMPP", "LAMPP", "Godot Engine"],
  },
  {
    title: "📋 Productividad",
    items: ["Google Workspace", "Canva"],
  },
];
