import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [preact()],
  adapter: node({
    mode: "middleware",
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
