export type ExperienceItem = {
  role: string;
  place: string;
  period: string;
  detail: string;
  pending?: boolean;
};

// Para agregar una experiencia real, súmala arriba y quita "pending"
export const experience: ExperienceItem[] = [
  {
    role: "Práctica profesional en desarrollo de software",
    place: "Por definir",
    period: "Próximamente",
    detail:
      "Busco mi primera experiencia en un equipo de desarrollo, donde aportar y aprender de profesionales.",
    pending: true,
  },
];
