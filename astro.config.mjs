import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://staticpulsesites.com',
  integrations: [sitemap()],
});