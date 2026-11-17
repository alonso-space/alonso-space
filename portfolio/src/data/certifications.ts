export type Certification = {
  title: string;
  issuer: string;
  year?: string;
  link?: string;
};

// Vacío por ahora: la sección muestra un aviso hasta que agregues el primero
export const certifications: Certification[] = [];
