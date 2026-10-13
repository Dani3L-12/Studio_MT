// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { siteConfig } from './src/config/site.config';

// https://astro.build/config
export default defineConfig({
  site: siteConfig.siteUrl,
  // Subruta de GitHub Pages (dani3l-12.github.io/Studio_MT).
  // Solo se aplica en producción (build); en local (dev) el sitio
  // corre en la raíz para no ver el 404 de Astro. Como los enlaces
  // usan import.meta.env.BASE_URL, funcionan en ambos casos.
  // Astro prefija automáticamente los assets con este base.
  base: process.env.NODE_ENV === 'production' ? '/Studio_MT' : '/',
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    sitemap({
      filter: (page) => 
        !page.includes('/gracias') && 
        !page.includes('/en-vivo/') && 
        !page.includes('/404')
    })
  ]
});
