// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://dreameffort.com',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },
  adapter: vercel()
});