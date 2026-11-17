export type ProjectCategory = "web" | "game" | "other";

export type Project = {
  title: string;
  category: ProjectCategory;
  // Los destacados van arriba y en grande; el resto va en "Otros proyectos"
  featured: boolean;
  techs: string[];
  repo?: string;
  demo?: string;
  img?: string;
  imgHover?: string;
  tech?: string;
  status?: "in-progress";
  description?: string;
};

// Vite carga todas las imágenes de src/assets/img y nos da su URL final
const images = import.meta.glob<string>("../assets/img/**/*.png", {
  eager: true,
  query: "?url",
  import: "default",
});

// Si el archivo todavía no existe devuelve undefined y la tarjeta muestra un
// marcador. Al agregar la imagen con el nombre indicado aparece sola
const img = (path: string): string | undefined =>
  images[`../assets/img/${path}`];

const github = (repo: string): string =>
  `https://github.com/alonso-space/${repo}`;

export const projects: Project[] = [
  {
    title: "GamesOnMyLAN",
    category: "web",
    featured: true,
    repo: github("GamesOnMyLAN"),
    demo: "https://alonso-space.github.io/GamesOnMyLAN/",
    img: img("default/goml.png"),
    imgHover: img("hover/goml.png"),
    tech: img("techs/node.png"),
    techs: ["Node.js", "Express", "PostgreSQL", "Docker"],
    description:
      "Plataforma autohospedada para alojar, administrar y jugar juegos de navegador en la red local, con usuarios, archivos, permisos y moderación.",
  },
  {
    title: "LANotes",
    category: "web",
    featured: true,
    repo: github("LANotes"),
    demo: "https://alonso-space.github.io/LANotes/",
    img: img("default/lanotes.png"),
    imgHover: img("hover/lanotes.png"),
    tech: img("techs/node.png"),
    techs: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Docker",
      "React",
      "TypeScript",
    ],
    description:
      "Aplicación de notas autoalojada para tu red local. Sin nube: tus notas permanecen en tu propia máquina.",
  },
  {
    title: "Tankecitos",
    category: "game",
    featured: true,
    repo: github("Tankecitos"),
    img: img("default/tankecitos.png"),
    imgHover: img("hover/tankecitos.png"),
    tech: img("techs/godot.png"),
    techs: ["Godot", "GDScript", "WebSockets", "Docker"],
    description:
      "Arena de tanques multijugador que corre en el navegador, hecha con Godot 4. Un servidor headless con autoridad simula físicas, balas y daño, y los jugadores se conectan por WebSockets, con controles para escritorio y móvil.",
  },
  {
    title: "Naval Warfare",
    category: "game",
    featured: true,
    repo: github("NavalWarfare"),
    img: img("default/navalwarfare.png"),
    imgHover: img("hover/navalwarfare.png"),
    tech: img("techs/python.png"),
    techs: ["Python", "Arcade"],
    description:
      "Videojuego de duelos entre barcos con habilidades únicas y elementos aleatorios que fomentan la estrategia.",
  },
  {
    title: "SimpleShopping",
    category: "web",
    featured: false,
    repo: github("SimpleShopping"),
    img: img("default/simpleshopping.png"),
    imgHover: img("hover/simpleshopping.png"),
    tech: img("techs/node.png"),
    techs: ["Node.js", "Express", "Handlebars", "MySQL"],
    description:
      "Tienda en línea sencilla: catálogo de productos, carrito por sesión y resumen de compra con IVA.",
  },
  {
    title: "Astro PHP",
    category: "web",
    featured: false,
    status: "in-progress",
    repo: github("AstroPHP"),
    img: img("default/astrophp.png"),
    imgHover: img("hover/astrophp.png"),
    tech: img("techs/php.png"),
    techs: ["PHP", "MySQL"],
    description:
      "Herramienta web en PHP para gestionar una base de datos astronómica, con arquitectura MVC y operaciones CRUD.",
  },
  {
    title: "The Solar System",
    category: "web",
    featured: false,
    repo: github("TheSolarSystem"),
    demo: "https://alonso-space.github.io/TheSolarSystem/",
    img: img("default/solar.png"),
    imgHover: img("hover/solar.png"),
    tech: img("techs/react.png"),
    techs: ["React", "Vite"],
    description:
      "Aplicación interactiva para explorar el sistema solar, con una representación visual de los planetas e información astronómica básica.",
  },
  {
    title: "UFO",
    category: "game",
    featured: false,
    repo: github("UFO"),
    img: img("default/ufo.png"),
    imgHover: img("hover/ufo.png"),
    tech: img("techs/godot.png"),
    techs: ["Godot", "GDScript"],
    description:
      "Bullet hell liviano: esquiva obstáculos y proyectiles aleatorios y sobrevive el mayor tiempo posible. Funciona en móvil y PC.",
  },
  {
    title: "Leukocytemania",
    category: "game",
    featured: false,
    img: img("default/leukocytemania.png"),
    imgHover: img("hover/leukocytemania.png"),
    tech: img("techs/godot.png"),
    techs: ["Godot"],
    description:
      "Un juego sobre una célula del sistema inmunitario que se alimenta de bacterias. Fue desarrollado como parte de BioGame, un proyecto de videojuegos educativos sobre biología.",
  },
  {
    title: "Bio Game",
    category: "web",
    featured: false,
    repo: github("BioGame"),
    img: img("default/BioGame.png"),
    imgHover: img("hover/BioGame.png"),
    tech: img("techs/html.png"),
    techs: ["HTML", "JavaScript"],
    description:
      "Catálogo de videojuegos sobre biología y salud, construido por un curso de estudiantes completo.",
  },
  {
    title: "Flotarix",
    category: "game",
    featured: false,
    status: "in-progress",
    repo: github("Flotarix"),
    img: img("default/flotarix.png"),
    imgHover: img("hover/flotarix.png"),
    tech: img("techs/python.png"),
    techs: ["Python", "Arcade"],
    description:
      "Juego de tablero por turnos: construye y comanda tu flota espacial y decide con movimiento y posicionamiento para destruir a la rival. Cada nave tiene su estilo, fortalezas y debilidades.",
  },
  {
    title: "MicroProjects",
    category: "other",
    featured: false,
    repo: github("MicroProjects"),
    img: img("default/microprojects.png"),
    imgHover: img("hover/microprojects.png"),
    techs: ["JavaScript"],
    description: "Repositorio personal de microproyectos.",
  },
  {
    title: "RedSaber",
    category: "other",
    featured: false,
    repo: github("RedSaber"),
    img: img("default/redsaber.png"),
    imgHover: img("hover/redsaber.png"),
    techs: ["JavaScript"],
    description: "Proyecto personal de desarrollo web.",
  },
];
