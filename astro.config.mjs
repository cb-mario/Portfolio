// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages: https://cb-mario.github.io/Porfolio/
export default defineConfig({
  site: 'https://cb-mario.github.io',
  base: '/Porfolio',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
