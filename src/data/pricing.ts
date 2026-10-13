import { siteConfig } from '../config/site.config';

// ---------------------------------------------------------------------------
// Precios del inicio: TODO lo editable de la sección vive en este archivo.
// - Precios, días de entrega, listas y mensajes de WhatsApp: PRICING_PLANS.
// - Textos de encabezado, franja de ayuda y soporte: constantes de abajo.
// - Número de WhatsApp: fuente única en src/config/site.config.ts.
// ---------------------------------------------------------------------------

// Número de WhatsApp (lee el valor central de site.config.ts)
export const WHATSAPP_NUMBER = siteConfig.whatsappNumber;

export interface PricingFeature {
  text: string;
  bold?: boolean;
}

export interface PricingPlan {
  id: string;
  label: string; // Etiqueta mono del plan: ESENCIAL / PROFESIONAL / PREMIUM
  tagline: string; // Frase "para quién es"
  price: string; // Precio grande: "S/ 299"
  priceNote: string; // Nota bajo el precio
  deliveryDays: number; // Días de entrega (valor de ejemplo, editar aquí)
  features: PricingFeature[];
  cta: string; // Texto del botón
  waMessage: string; // Mensaje prellenado de WhatsApp
  popular?: boolean; // Plan destacado
}

export const PRICING_TITLE = "Tu negocio online desde S/ 299";
export const PRICING_SUBTITLE =
  "Pago único, entrega en días y tu web lista para recibir pedidos por WhatsApp.";

export const PRICING_MOST_POPULAR = "Más elegido";

export const PRICING_HELP_TEXT =
  "¿No sabes cuál elegir? Escríbeme y te recomiendo en 5 minutos.";
export const PRICING_HELP_CTA = "Escribir por WhatsApp";
export const PRICING_HELP_MESSAGE =
  "Hola, no sé qué plan elegir. ¿Me ayudas a decidir?";

export const PRICING_SUPPORT_TEXT =
  "Plan de soporte mensual desde S/ 49: cambios menores, hosting y soporte por WhatsApp.";

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "esencial",
    label: "ESENCIAL",
    tagline: "Para empezar a verte profesional",
    price: "S/ 299",
    priceNote: "pago único · precio referencial",
    deliveryDays: 3,
    features: [
      { text: "Carta digital o landing de 1 página" },
      { text: "Diseño adaptado al celular" },
      { text: "Botón de WhatsApp directo" },
      { text: "Código QR incluido" },
      { text: "Mapa y datos de contacto" },
    ],
    cta: "Quiero mi carta digital",
    waMessage:
      "Hola, me interesa el plan Esencial (S/ 299) para mi negocio. ¿Me das más información?",
  },
  {
    id: "profesional",
    label: "PROFESIONAL",
    tagline: "Para negocios que quieren aparecer en Google",
    price: "S/ 549",
    priceNote: "pago único · precio referencial",
    deliveryDays: 5,
    features: [
      { text: "Todo lo de Esencial, más:", bold: true },
      { text: "Galerías y secciones por categorías" },
      { text: "SEO básico optimizado" },
      { text: "Perfil de Google Business" },
    ],
    cta: "Quiero aparecer en Google",
    waMessage:
      "Hola, me interesa el plan Profesional (S/ 549) para mi negocio. ¿Me das más información?",
    popular: true,
  },
  {
    id: "premium",
    label: "PREMIUM",
    tagline: "Para vender productos por WhatsApp",
    price: "S/ 899",
    priceNote: "pago único · precio referencial",
    deliveryDays: 7,
    features: [
      { text: "Todo lo de Profesional, más:", bold: true },
      { text: "Catálogo o tienda con carrito (~30 productos)" },
      { text: "Versión bilingüe (Español / Inglés)" },
      { text: "Capacitación personalizada por Meet" },
    ],
    cta: "Quiero mi tienda",
    waMessage:
      "Hola, me interesa el plan Premium (S/ 899) para mi negocio. ¿Me das más información?",
  },
];
