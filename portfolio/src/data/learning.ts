export type LearningItem = { icon: string; title: string; detail: string };

export const learningItems: LearningItem[] = [
  {
    icon: "🛡️",
    title: "Seguridad web",
    detail: "Sesiones, CSRF, hashing de contraseñas y buenas prácticas.",
  },
  {
    icon: "🐳",
    title: "Despliegue con Docker",
    detail: "Empaquetar y publicar mis aplicaciones de forma reproducible.",
  },
  {
    icon: "🧱",
    title: "Backend y arquitectura",
    detail: "Cómo se estructura una aplicación web que crece.",
  },
  {
    icon: "🧩",
    title: "Diseño de software",
    detail: "Resolución de problemas y código limpio.",
  },
];
