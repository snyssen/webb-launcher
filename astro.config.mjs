import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind(), preact()],
  adapter: node()
});