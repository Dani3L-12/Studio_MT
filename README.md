# Studio MG — Sitios Web Profesionales en Cusco

Sitio web multipágina (Español / Inglés) desarrollado con **Astro** y **Tailwind CSS**, optimizado para el rendimiento, accesibilidad (WCAG AA), y adaptado para negocios locales (restaurantes, cafés, tiendas y servicios) en Cusco, Perú.

## 🚀 Requisitos Previos

- **Node.js**: Versión 22.12.0 o superior recomendada.git init

## 📦 Instalación y Ejecución local

1. Instalar dependencias:
   ```powershell
   npm install
   ```

2. Iniciar el servidor de desarrollo:
   ```powershell
   npm run dev
   ```
   *(También puedes usar `astro dev --background`)*

3. Generar la compilación para producción:
   ```powershell
   npm run build
   ```

## ⚙️ Configuración y Personalización

- **Datos de Marca y Contacto**: Edita `src/config/site.config.ts` para cambiar el nombre de la marca, número de WhatsApp, correo, redes sociales, URL base (`siteUrl`) y horario de atención.
- **Textos e Idiomas**: Las traducciones de la interfaz viven en `src/i18n/es.ts` (Español) y `src/i18n/en.ts` (Inglés).
- **Datos Estructurados y Catálogos**: 
  - Paquetes de precios: `src/data/packages.ts`
  - Demos y proyectos: `src/data/demos.ts`
  - Preguntas frecuentes: `src/data/faq.ts`
  - Testimonios: `src/data/testimonials.ts` (solo reseñas reales con permiso del cliente).

## 🖼️ Reemplazo de Recursos (Logo, Foto, OG Image)

- **Favicon y Logo**: Reemplaza `/public/favicon.svg` con el isotipo de tu marca.
- **Imagen Open Graph**: Reemplaza `/public/og-image.svg` con una imagen de 1200x630 píxeles para previsualizaciones en redes sociales.
- **Foto de Perfil (Daniel)**: Guarda la imagen en `src/assets/` y actualiza la ruta en `src/config/site.config.ts` (campo `profilePhoto`).

## ☁️ Despliegue en Netlify

El proyecto incluye un archivo `netlify.toml` optimizado con cabeceras de seguridad y caché de activos. El formulario de contacto está integrado con **Netlify Forms** (`data-netlify="true"`).
