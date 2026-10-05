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
  en: {
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
    },
    en: {
      name: "Restaurant & Digital Menu",
      shortDesc: "Interactive menu with photos, categories, QR code, and direct WhatsApp orders.",
      longDesc: "Especially designed for restaurants and food spots in Cusco looking for clients to easily pick dishes from their phones by scanning table QR codes.",
      target: "Restaurants, cafes, bars, bakeries, and eateries.",
      features: [
        "Digital menu organized by categories",
        "Real photos of dishes and drinks",
        "QR code for tables or delivery",
        "Direct WhatsApp ordering button",
        "Location and opening hours"
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
    },
    en: {
      name: "Store Catalog (Clothing, Crafts)",
      shortDesc: "Neat digital storefront with categories, search, and product inquiry buttons.",
      longDesc: "Ideal for businesses selling apparel, crafts, or textiles in Cusco needing to showcase stock professionally without heavy online store bloat.",
      target: "Clothing stores, crafts, jewelry, and textile shops.",
      features: [
        "Visual product catalog with prices",
        "Search filters and categories",
        "Quick WhatsApp inquiry button on each product",
        "High-quality optimized gallery"
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
    },
    en: {
      name: "Landing for Barbers, Gyms & Clinics",
      shortDesc: "Straightforward page to display services, prices, and book appointments via WhatsApp.",
      longDesc: "A clean, persuasive web page building immediate trust, clearly explaining your services and making it easy to contact you instantly.",
      target: "Barbershops, gyms, dentists, spas, and independent professionals.",
      features: [
        "High-impact hero section",
        "Service list and pricing",
        "Direct WhatsApp booking button",
        "Map location and contact details"
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
    },
    en: {
      name: "Store with WhatsApp Cart",
      shortDesc: "Simple shopping cart system where clients build their order and send it ready via WhatsApp.",
      longDesc: "The perfect solution for delivery businesses wanting clients to select multiple items before sending the final order message.",
      target: "Delivery ventures, local markets, flower shops, and specialty stores.",
      features: [
        "Catalog with integrated shopping cart",
        "Structured order summary for WhatsApp",
        "Product variant management",
        "100% mobile-first design"
      ]
    }
  }
];
