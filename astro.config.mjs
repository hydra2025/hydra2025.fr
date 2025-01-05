// @ts-check
import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), compress()]
});