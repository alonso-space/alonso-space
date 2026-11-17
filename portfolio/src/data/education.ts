export type EducationItem = {
  title: string;
  detail: string;
  period?: string;
};

export const mainStudy: EducationItem = {
  title: "Enseñanza Media Técnico-Profesional en Programación",
  period: "2025–2026",
  detail:
    "Programación orientada a objetos, diseño y administración de bases de datos relacionales, desarrollo de aplicaciones web, sistemas operativos y soporte informático.",
};

// Mismo contenido que el currículum: son pasantías (y un taller), no cursos
export const internships: EducationItem[] = [
  {
    title: "SOTELEC",
    detail:
      "Pasantía interna de soporte técnico y apoyo al área informática del liceo.",
  },
  {
    title: "Virginio Gómez",
    detail: "Pasantía en fundamentos de Python.",
  },
  {
    title: "INACAP",
    detail: "Pasantía en bases de datos SQL.",
  },
  {
    title: "Santo Tomás",
    detail: "Pasantía en desarrollo con React.",
  },
  {
    title: "Taller JEC de Robótica",
    detail: "Taller de circuitos con Arduino y ESP32.",
  },
];
