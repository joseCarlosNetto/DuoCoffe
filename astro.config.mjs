// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { site } from "./src/config/site.ts";

// https://astro.build/config
export default defineConfig({
  // 'site' é usado pelo sitemap e por URLs absolutas no SEO.
  // Puxa do config central para você não esquecer de trocar.
  site: site.url,
  // URL canônica sem barra final em toda página — bate com o que
  // SEO.astro já emite em `canonical` (new URL(path, site.url)).
  trailingSlash: "never",
  build: { format: "file" },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
