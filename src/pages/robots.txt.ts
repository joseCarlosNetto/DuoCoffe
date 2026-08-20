import type { APIRoute } from "astro";
import { site } from "../config/site";

/**
 * Gerado a partir de site.url em vez de estático em public/ — assim o
 * Sitemap nunca desincroniza silenciosamente se o domínio mudar.
 * Todos os crawlers liberados, incluindo os de IA (decisão do cliente).
 */
export const GET: APIRoute = ({ site: astroSite }) => {
  const base = astroSite ?? new URL(site.url);
  const body = `User-agent: *
Allow: /

Sitemap: ${new URL("sitemap-index.xml", base).href}
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
