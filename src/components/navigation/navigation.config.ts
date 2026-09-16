const baseURL = import.meta.env.BASE_URL || "/";

export const navigationPaths = [
  { base: `${baseURL}`, href: `#`, label: "Inicio" },
  { base: `${baseURL}`, href: `#habilidades`, label: "Habilidades" },
  { base: `${baseURL}`, href: `#experiencia`, label: "Experiencia" },
  { base: `${baseURL}`, href: `#proyectos`, label: "Proyectos" },
  { base: `${baseURL}`, href: `#estudios`, label: "Estudios" },
];
