// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: netlify(),
  vite: {
    envDir: '.',
    define: {
      // Remove PUBLIC_ prefix from environment variable names
      'process.env.SPOTIFY_CLIENT_ID': JSON.stringify(process.env.SPOTIFY_CLIENT_ID),
      'process.env.SPOTIFY_CLIENT_SECRET': JSON.stringify(process.env.SPOTIFY_CLIENT_SECRET),
      'process.env.SPOTIFY_REFRESH_TOKEN': JSON.stringify(process.env.SPOTIFY_REFRESH_TOKEN),
      'process.env.NOTION_API_KEY': JSON.stringify(process.env.NOTION_API_KEY),
      'process.env.NOTION_DATABASE_ID': JSON.stringify(process.env.NOTION_DATABASE_ID)
    }
  },
});
