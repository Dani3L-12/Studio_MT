export interface Tecnologia {
  nombre: string;
  /** Nombre del archivo en /public/images/tech (ej. "html.svg"). */
  archivo: string;
  /** Color del brillo detrás del logo (hex, ej. "#F16529"). */
  glow: string;
}

export const tecnologias: Tecnologia[] = [
  { nombre: "HTML", archivo: "html.svg", glow: "#F16529" },
  { nombre: "CSS", archivo: "css.svg", glow: "#33A9DC" },
  { nombre: "JavaScript", archivo: "javascript.svg", glow: "#F0DB4F" },
  { nombre: "Python", archivo: "python.svg", glow: "#FFD43B" },
  { nombre: "Tailwind CSS", archivo: "tailwind.svg", glow: "#38BDF8" },
  { nombre: "Node.js", archivo: "nodejs.svg", glow: "#6ABF4B" },
  { nombre: "PHP", archivo: "php.svg", glow: "#AEB2D5" },
  { nombre: "MySQL", archivo: "mysql.svg", glow: "#00758F" },
  { nombre: "Astro", archivo: "astro.svg", glow: "#FF5D01" },
  { nombre: "Git", archivo: "git.svg", glow: "#F34F29" },
  { nombre: "GitHub", archivo: "github.svg", glow: "#FFFFFF" },
  { nombre: "Figma", archivo: "figma.svg", glow: "#0ACF83" },
];
