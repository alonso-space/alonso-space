export type Project = {
  title: string;
  link: string;
  img: string;
  imgHover: string;
  tech: string;
  techs: string[];
  description?: string;
};

// Vite carga todas las imágenes de src/assets/img y nos da su URL final
const images = import.meta.glob<string>("../assets/img/**/*.png", {
  eager: true,
  query: "?url",
  import: "default",
});

const img = (path: string): string => {
  const url = images[`../assets/img/${path}`];
  if (!url) throw new Error(`Imagen no encontrada: src/assets/img/${path}`);
  return url;
};

export const projects: Project[] = [
  {
    title: "GamesOnMyLAN",
    link: "https://alonso333-red.github.io/GamesOnMyLAN/",
    img: img("default/goml.png"),
    imgHover: img("hover/goml.png"),
    tech: img("techs/node.png"),
    techs: ["Node.js", "Express", "PostgreSQL", "Docker"],
    description:
      "Plataforma autohospedada para alojar, administrar y jugar juegos de navegador en la red local, con usuarios, archivos, permisos y moderación.",
  },
  {
    title: "The Solar System",
    link: "https://alonso333-red.github.io/TheSolarSystem/",
    img: img("default/solar.png"),
    imgHover: img("hover/solar.png"),
    tech: img("techs/react.png"),
    techs: ["React"],
  },
  {
    title: "UFO",
    link: "https://github.com/Alonso333-RED/UFO",
    img: img("default/ufo.png"),
    imgHover: img("hover/ufo.png"),
    tech: img("techs/godot.png"),
    techs: ["Godot", "GDScript"],
    description:
      "Bullet hell liviano: esquiva obstáculos y proyectiles aleatorios y sobrevive el mayor tiempo posible. Funciona en móvil y PC.",
  },
  {
    title: "Naval Warfare",
    link: "https://github.com/Alonso333-RED/NavalWarfare",
    img: img("default/navalwarfare.png"),
    imgHover: img("hover/navalwarfare.png"),
    tech: img("techs/python.png"),
    techs: ["Python", "Arcade"],
    description:
      "Videojuego de duelos entre barcos con habilidades únicas y elementos aleatorios que fomentan la estrategia.",
  },
  {
    title: "Leukocytemania",
    link: "https://github.com/Alonso333-RED/Leukocytemania",
    img: img("default/leukocytemania.png"),
    imgHover: img("hover/leukocytemania.png"),
    tech: img("techs/godot.png"),
    techs: ["Godot"],
  },
  {
    title: "Astro PHP",
    link: "https://github.com/Alonso333-RED/AstroPHP",
    img: img("default/astrophp.png"),
    imgHover: img("hover/astrophp.png"),
    tech: img("techs/php.png"),
    techs: ["PHP", "MySQL"],
    description:
      "Herramienta web en PHP para gestionar una base de datos astronómica, con arquitectura MVC y operaciones CRUD.",
  },
  {
    title: "Bio Game",
    link: "https://github.com/Alonso333-RED/BioGame",
    img: img("default/BioGame.png"),
    imgHover: img("hover/BioGame.png"),
    tech: img("techs/html.png"),
    techs: ["HTML"],
  },
];
