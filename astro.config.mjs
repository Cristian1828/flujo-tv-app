// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://app.flujooficial.com',
  vite: {
    plugins: [/** @type {any} */ (tailwindcss())]
  }
});
