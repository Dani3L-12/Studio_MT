export interface ProcessStep {
  numero: string;
  titulo: string;
  descripcion: string;
  aCargo: string;
}

export const processData: ProcessStep[] = [
  {
    numero: "01",
    titulo: "Conversamos",
    descripcion:
      "Nos cuentas qué vendes o qué servicio ofreces y qué quieres lograr. Te recomendamos el plan que mejor encaja y te confirmamos el precio final y el plazo por WhatsApp. Con tu aprobación, se paga el 50% inicial y arrancamos.",
    aCargo: "Daniel y José",
  },
  {
    numero: "02",
    titulo: "Reunimos tu material",
    descripcion:
      "Nos envías logo, fotos, textos, productos o servicios con precios, horarios y ubicación. Si algo te falta, te ayudamos a resolverlo. Con eso definimos la estructura y el estilo de tu web.",
    aCargo: "Daniel",
  },
  {
    numero: "03",
    titulo: "Diseñamos y construimos",
    descripcion:
      "Diseñamos la interfaz para celular, programamos el botón de WhatsApp, el QR, el catálogo o el carrito según tu plan, y cuidamos velocidad y seguridad. Te mostramos el avance antes de terminar.",
    aCargo: "Daniel (diseño) y José (funcionamiento y seguridad)",
  },
  {
    numero: "04",
    titulo: "Revisamos y entregamos",
    descripcion:
      "Revisas la web terminada y hacemos los ajustes incluidos en tu plan. Con el 50% restante, te entregamos todo funcionando. Si lo deseas, activas el plan de soporte mensual.",
    aCargo: "Daniel y José",
  },
];
