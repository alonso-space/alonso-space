export type ContactLink = {
  label: string;
  icon: string;
  // Si queda vacío, el botón aparece apagado: rellénalo cuando lo tengas
  href: string;
};

export const contactLinks: ContactLink[] = [
  { label: "GitHub", icon: "🐙", href: "https://github.com/alonso-space" },
  {
    label: "LinkedIn",
    icon: "💼",
    href: "https://www.linkedin.com/in/alonso-aravena-447672446",
  },
];
