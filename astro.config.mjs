import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "src/styles/_app.scss" as *;',
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  integrations: [vue()],
});
