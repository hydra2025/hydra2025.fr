// @ts-check
import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://hydra2025.fr",
  integrations: [
    vue(),
    sitemap(),
    compress({
      Image: false,
    }),
  ],
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
});
