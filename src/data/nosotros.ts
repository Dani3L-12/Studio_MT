export interface TeamMember {
  nombre: string;
  iniciales: string;
  formacion: string;
  rol: string;
  descripcion: string;
  chips: string[];
  /** Ruta web de la foto, relativa a /public (ej. "/images/team/daniel.webp"). */
  foto: string;
}

export const nosotrosHeader = {
  title: "Nosotros",
  subtitle:
    "Dos estudiantes de sistemas que diseñan y construyen webs simples para que tu negocio reciba pedidos por WhatsApp.",
};

export const teamMembers: TeamMember[] = [
  {
    nombre: "Daniel Ciprian",
    iniciales: "DC",
    formacion: "Estudiante de Ingeniería de Sistemas e Informática",
    rol: "Diseño UX/UI y desarrollo visual",
    descripcion:
      "Me encargo de cómo se ve y cómo se siente cada web. Diseño la interfaz, la identidad visual y las animaciones, y cuido que la experiencia sea clara y rápida, sobre todo desde el celular, para que tus clientes lleguen al botón de WhatsApp sin pensar.",
    chips: ["UX/UI", "Diseño visual", "Motion", "Prototipos"],
    foto: "/images/team/daniel.webp",
  },
  {
    nombre: "José Cruz",
    iniciales: "JC",
    formacion: "Bachiller en Ingeniería de Sistemas e Informática",
    rol: "Backend, funcionalidad y seguridad",
    descripcion:
      "Me encargo de lo que no se ve pero hace que todo funcione: la lógica de la web, los pedidos que llegan a tu WhatsApp, el rendimiento y la seguridad. Mi trabajo es que tu web cargue rápido, no falle y esté protegida.",
    chips: ["Backend", "Seguridad", "Rendimiento", "Integraciones"],
    foto: "/images/team/jose.webp",
  },
];

