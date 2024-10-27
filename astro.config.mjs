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
      'process.env.SPOTIFY_CLIENT_ID': JSON.stringify(process.env.PUBLIC_SPOTIFY_CLIENT_ID),
      'process.env.SPOTIFY_CLIENT_SECRET': JSON.stringify(process.env.PUBLIC_SPOTIFY_CLIENT_SECRET),
      'process.env.SPOTIFY_REFRESH_TOKEN': JSON.stringify(process.env.PUBLIC_SPOTIFY_REFRESH_TOKEN),
    }
  },
});
