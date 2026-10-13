export interface DemoItem {
  slug: string;
  category: 'comida' | 'tiendas' | 'servicios';
  status: 'soon' | 'live';
  packageRecommended: 'esencial' | 'profesional' | 'premium';
  thumbnailType: 'restaurant' | 'catalog' | 'landing' | 'store';
  es: {
    name: string;
    shortDesc: string;
    longDesc: string;
    target: string;
    features: string[];
  };
}

export const demosData: DemoItem[] = [
  {
    slug: "restaurante",
    category: "comida",
    status: "soon",
    packageRecommended: "profesional",
    thumbnailType: "restaurant",
    es: {
      name: "Restaurante y Carta Digital",
      shortDesc: "Menú interactivo con fotos, categorías, código QR y pedidos directos por WhatsApp.",
      longDesc: "Diseñado especialmente para restaurantes, pollerías y cevicherías en Cusco que buscan que sus clientes elijan sus platos rápidamente desde el celular escaneando el código QR en mesa.",
      target: "Restaurantes, cafés, bares, pastelerías y picanterías.",
      features: [
        "Carta digital organizada por categorías",
        "Fotos reales de platos y bebidas",
        "Código QR para mesas o delivery",
        "Botón de pedido directo a WhatsApp",
        "Ubicación y horarios de atención"
      ]
    }
  },
  {
    slug: "catalogo",
    category: "tiendas",
    status: "soon",
    packageRecommended: "premium",
    thumbnailType: "catalog",
    es: {
      name: "Catálogo de Tienda (Ropa, Artesanías)",
      shortDesc: "Escaparate digital ordenado con categorías, buscador y botón de consulta por producto.",
      longDesc: "Ideal para emprendimientos que venden ropa, textiles o artesanías en Cusco y necesitan mostrar su stock de manera profesional sin la complejidad de una tienda online pesada.",
      target: "Tiendas de ropa, artesanías, joyería y textiles andinos.",
      features: [
        "Catálogo visual de productos con precios",
        "Filtros y categorías de búsqueda",
        "Botón de consulta rápida por WhatsApp en cada producto",
        "Galería optimizada para alta calidad"
      ]
    }
  },
  {
    slug: "landing-servicios",
    category: "servicios",
    status: "soon",
    packageRecommended: "esencial",
    thumbnailType: "landing",
    es: {
      name: "Landing para Barberías, Gimnasios y Consultorios",
      shortDesc: "Página directa al grano para mostrar servicios, precios y agendar citas por WhatsApp.",
      longDesc: "Una página web limpia y persuasiva que transmite confianza inmediata, explicando claramente lo que haces y facilitando que te contacten al instante.",
      target: "Barberías, gimnasios, dentistas, spas y profesionales independientes.",
      features: [
        "Sección principal de alto impacto",
        "Lista de servicios y tarifas",
        "Botón directo de reservas por WhatsApp",
        "Mapa de ubicación y contacto"
      ]
    }
  },
  {
    slug: "tienda",
    category: "tiendas",
    status: "soon",
    packageRecommended: "premium",
    thumbnailType: "store",
    es: {
      name: "Tienda con Carrito a WhatsApp",
      shortDesc: "Sistema de carrito simple donde el cliente arma su pedido y lo envía listo por WhatsApp.",
      longDesc: "La solución perfecta para negocios que manejan delivery y quieren que el cliente seleccione varios productos antes de enviar el mensaje final de pedido.",
      target: "Emprendimientos con delivery, bodegas, florerías y tiendas especializadas.",
      features: [
        "Catálogo con carrito de compras integrado",
        "Resumen de pedido ordenado para WhatsApp",
        "Gestión de variantes de productos",
        "Diseño 100% móvil"
      ]
    }
  }
];
