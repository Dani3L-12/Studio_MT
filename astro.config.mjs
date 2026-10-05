// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { siteConfig } from './src/config/site.config';

// https://astro.build/config
export default defineConfig({
  site: siteConfig.siteUrl,
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    sitemap({
      filter: (page) => 
        !page.includes('/gracias') && 
        !page.includes('/thanks') && 
        !page.includes('/en-vivo/') && 
        !page.includes('/live/') && 
        !page.includes('/404')
    })
  ]
});
