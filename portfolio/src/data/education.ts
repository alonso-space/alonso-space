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

export const complementaryStudies: EducationItem[] = [
  {
    title: "INACAP",
    detail: "Actividad formativa en bases de datos SQL.",
  },
  {
    title: "Santo Tomás",
    detail: "Actividad formativa en React.",
  },
  {
    title: "Taller de Robótica",
    detail: "Construcción de circuitos y trabajo con Arduino y ESP32.",
  },
];
