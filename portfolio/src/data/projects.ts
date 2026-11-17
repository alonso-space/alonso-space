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
const images = import.meta.glob<string>("../assets/img/**/*.webp", {
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
    img: img("default/goml.webp"),
    imgHover: img("hover/goml.webp"),
    tech: img("techs/node.webp"),
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
    img: img("default/lanotes.webp"),
    imgHover: img("hover/lanotes.webp"),
    tech: img("techs/node.webp"),
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
    img: img("default/tankecitos.webp"),
    imgHover: img("hover/tankecitos.webp"),
    tech: img("techs/godot.webp"),
    techs: ["Godot", "GDScript", "WebSockets", "Docker"],
    description:
      "Arena de tanques multijugador que corre en el navegador, hecha con Godot 4. Un servidor headless con autoridad simula físicas, balas y daño, y los jugadores se conectan por WebSockets, con controles para escritorio y móvil.",
  },
  {
    title: "Naval Warfare",
    category: "game",
    featured: true,
    repo: github("NavalWarfare"),
    img: img("default/navalwarfare.webp"),
    imgHover: img("hover/navalwarfare.webp"),
    tech: img("techs/python.webp"),
    techs: ["Python", "Arcade"],
    description:
      "Videojuego de duelos entre barcos con habilidades únicas y elementos aleatorios que fomentan la estrategia.",
  },
  // Orden de "Otros proyectos": del más completo y avanzado al menos completo.
  // Si agregas uno nuevo, ubícalo según cuán terminado y sólido esté
  {
    title: "RedSaber",
    category: "web",
    featured: false,
    repo: github("RedSaber"),
    img: img("default/redsaber.webp"),
    imgHover: img("hover/redsaber.webp"),
    tech: img("techs/node.webp"),
    techs: ["Node.js", "Express", "Handlebars", "MariaDB"],
    description:
      "Foro de preguntas y respuestas: los usuarios se registran, inician sesión, publican preguntas y las responden. Proyecto en colaboración, con contraseñas cifradas con bcrypt, sesiones, arquitectura por capas (rutas, controladores y servicios) y pruebas de la API.",
  },
  {
    title: "SimpleShopping",
    category: "web",
    featured: false,
    repo: github("SimpleShopping"),
    img: img("default/simpleshopping.webp"),
    imgHover: img("hover/simpleshopping.webp"),
    tech: img("techs/node.webp"),
    techs: ["Node.js", "Express", "Handlebars", "MySQL"],
    description:
      "Tienda en línea con catálogo de productos, carrito por sesión y resumen de compra con IVA. Renderizado en el servidor con Handlebars y datos guardados en MySQL.",
  },
  {
    title: "The Solar System",
    category: "web",
    featured: false,
    repo: github("TheSolarSystem"),
    demo: "https://alonso-space.github.io/TheSolarSystem/",
    img: img("default/solar.webp"),
    imgHover: img("hover/solar.webp"),
    tech: img("techs/react.webp"),
    techs: ["React", "Vite"],
    description:
      "Aplicación interactiva para explorar el sistema solar: representación visual de los planetas e información astronómica básica de cada uno. Hecha con React y Vite, con demo publicada.",
  },
  {
    title: "UFO",
    category: "game",
    featured: false,
    repo: github("UFO"),
    img: img("default/ufo.webp"),
    imgHover: img("hover/ufo.webp"),
    tech: img("techs/godot.webp"),
    techs: ["Godot", "GDScript"],
    description:
      "Bullet hell liviano hecho con Godot: esquiva obstáculos y proyectiles generados al azar y sobrevive el mayor tiempo posible. Funciona en móvil y PC.",
  },
  {
    title: "Astro PHP",
    category: "web",
    featured: false,
    repo: github("AstroPHP"),
    img: img("default/astrophp.webp"),
    imgHover: img("hover/astrophp.webp"),
    tech: img("techs/php.webp"),
    techs: ["PHP", "MySQL"],
    description:
      "Herramienta web en PHP para gestionar una base de datos astronómica, con arquitectura MVC y operaciones CRUD completas. Hecho antes de profundizar en seguridad web, por lo que aún no incluye las protecciones que aplico en mis proyectos recientes.",
  },
  {
    title: "Leukocytemania",
    category: "game",
    featured: false,
    img: img("default/leukocytemania.webp"),
    imgHover: img("hover/leukocytemania.webp"),
    tech: img("techs/godot.webp"),
    techs: ["Godot"],
    description:
      "Juego en el que controlas un glóbulo blanco del sistema inmunitario que se alimenta de bacterias. Hecho con Godot como parte de BioGame, un proyecto de videojuegos educativos sobre biología.",
  },
  {
    title: "Bio Game",
    category: "web",
    featured: false,
    repo: github("BioGame"),
    img: img("default/BioGame.webp"),
    imgHover: img("hover/BioGame.webp"),
    tech: img("techs/html.webp"),
    techs: ["HTML", "JavaScript"],
    description:
      "Catálogo web de videojuegos educativos sobre biología y salud, construido en colaboración por un curso completo de estudiantes con HTML y JavaScript.",
  },
  {
    title: "Flotarix",
    category: "game",
    featured: false,
    status: "in-progress",
    repo: github("Flotarix"),
    img: img("default/flotarix.webp"),
    imgHover: img("hover/flotarix.webp"),
    tech: img("techs/python.webp"),
    techs: ["Python", "Arcade"],
    description:
      "Juego de tablero por turnos hecho con Python y Arcade: construyes y comandas tu flota espacial y decides movimiento y posicionamiento para destruir a la rival. Cada nave tiene su propio estilo, con fortalezas y debilidades. Aún en desarrollo.",
  },
  {
    title: "MicroProjects",
    category: "other",
    featured: false,
    repo: github("MicroProjects"),
    img: img("default/microprojects.webp"),
    imgHover: img("hover/microprojects.webp"),
    techs: ["Varios lenguajes"],
    description:
      "Colección personal de microproyectos en distintos lenguajes: ejercicios y experimentos pequeños para practicar.",
  },
];
