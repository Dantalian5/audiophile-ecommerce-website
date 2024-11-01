import { defineConfig } from "astro/config";

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

import pageInsight from "astro-page-insight";

// https://astro.build/config
export default defineConfig({
  integrations: [sentry(), spotlightjs(), pageInsight()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
});