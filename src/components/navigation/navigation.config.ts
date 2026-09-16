const baseURL = import.meta.env.BASE_URL || "/";

export const navigationPaths = [
  { base: `${baseURL}`, href: `#`, label: "common.nav.home" },
  { base: `${baseURL}`, href: `#habilidades`, label: "common.nav.skills" },
  { base: `${baseURL}`, href: `#experiencia`, label: "common.nav.experience" },
  { base: `${baseURL}`, href: `#proyectos`, label: "common.nav.projects" },
  { base: `${baseURL}`, href: `#estudios`, label: "common.nav.education" },
];
