import { ImageMetadata } from 'astro';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  idealFor: string[];
  includes: string[];
  demoHref: string;
  image: ImageMetadata;
  imageAlt: string;
  whatsappMessage: string;
}

export const servicesData = [
  {
    id: 'carta-digital',
    number: '01',
    title: 'Carta digital',
    description: 'Tu menú en una web que se abre con un QR. Tus clientes ven platos, fotos y precios, y te hacen el pedido directo por WhatsApp.',
    idealFor: ['Restaurantes', 'Cafeterías', 'Pollerías', 'Panaderías', 'Negocios de comida'],
    includes: [
      'Menú por categorías',
      'Fotos de tus platos',
      'Precios fáciles de actualizar',
      'Botón de pedido por WhatsApp',
      'QR listo para imprimir',
      'Diseño pensado para celular',
      'Mapa, horarios y contacto'
    ],
    demoHref: '/en-vivo/carta-digital',
    image: new URL('../assets/carta.webp', import.meta.url),
    imageAlt: 'Captura de una carta digital en un celular mostrando un menú de restaurante con platos, precios y botón de WhatsApp',
    whatsappMessage: 'Hola, me interesa el servicio de Carta digital para mi negocio. ¿Me das más información?'
  },
  {
    id: 'landing-page',
    number: '02',
    title: 'Landing page',
    description: 'Una página clara y rápida que presenta tu negocio, muestra tus servicios y lleva al cliente a escribirte o reservar.',
    idealFor: ['Barberías', 'Gimnasios', 'Consultorios', 'Academias', 'Servicios profesionales'],
    includes: [
      'Sección principal con tu propuesta',
      'Servicios y precios',
      'Galería de trabajos',
      'Botón de WhatsApp directo',
      'Mapa y horarios',
      'Diseño adaptado al celular'
    ],
    demoHref: '/en-vivo/landing-page',
    image: new URL('../assets/landin.webp', import.meta.url),
    imageAlt: 'Captura de una landing page para una barbería mostrando servicios, precios y botón de WhatsApp',
    whatsappMessage: 'Hola, me interesa el servicio de Landing page para mi negocio. ¿Me das más información?'
  },
  {
    id: 'catalogo-web',
    number: '03',
    title: 'Catálogo web',
    description: 'Muestra tus productos en una web ordenada y recibe consultas al instante, sin que el cliente tenga que preguntar "¿qué tienes?".',
    idealFor: ['Tiendas de ropa', 'Ferreterías', 'Joyerías', 'Accesorios', 'Artesanías'],
    includes: [
      'Catálogo de hasta ~30 productos',
      'Categorías para encontrar rápido',
      'Foto, precio y descripción por producto',
      'Botón "Consultar" por WhatsApp en cada producto',
      'SEO básico',
      'Diseño pensado para celular'
    ],
    demoHref: '/en-vivo/catalogo',
    image: new URL('../assets/catalogo.webp', import.meta.url),
    imageAlt: 'Captura de un catálogo web mostrando productos en categorías con fotos y precios',
    whatsappMessage: 'Hola, me interesa el servicio de Catálogo web para mi negocio. ¿Me das más información?'
  },
  {
    id: 'tienda-whatsapp',
    number: '04',
    title: 'Tienda con WhatsApp',
    description: 'Un carrito simple que termina en un mensaje de pedido armado en tu WhatsApp. Sin comisiones ni pasarelas complicadas.',
    idealFor: ['Delivery', 'Boutiques', 'Tiendas de regalos', 'Emprendimientos que venden por pedido'],
    includes: [
      'Catálogo con carrito',
      'Cantidades y total automático',
      'Pedido listo en tu WhatsApp',
      'Opción de entrega o recojo',
      'Versión en español e inglés',
      'Capacitación por Meet'
    ],
    demoHref: '/en-vivo/tienda-whatsapp',
    image: new URL('../assets/tiendaWP.webp', import.meta.url),
    imageAlt: 'Captura de una tienda con carrito mostrando productos, cantidades y botón de pedido por WhatsApp',
    whatsappMessage: 'Hola, me interesa el servicio de Tienda con WhatsApp para mi negocio. ¿Me das más información?'
  }
];