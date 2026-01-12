const baseURL = import.meta.env.BASE_URL || "/";

export const navigationPaths = [
  { href: `${baseURL}#`, label: "Inicio" },
  { href: `${baseURL}#habilidades`, label: "Habilidades" },
  { href: `${baseURL}#experiencia`, label: "Experiencia" },
  { href: `${baseURL}#proyectos`, label: "Proyectos" },
  { href: `${baseURL}#estudios`, label: "Estudios" },
];
