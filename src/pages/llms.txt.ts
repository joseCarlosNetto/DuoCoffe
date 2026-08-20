import type { APIRoute } from "astro";
import { site } from "../config/site";
import { methods } from "../config/content";

/**
 * Cartão de identidade factual para assistentes de IA — não é fator de
 * ranking, baixo esforço (CLAUDE.md). Nunca duplica o site em Markdown,
 * só cita fatos que já existem em site.ts/content.ts.
 */
export const GET: APIRoute = () => {
  const a = site.contact.address;
  const h = site.contact.hoursDisplay;
  const methodNames = methods.items.map((m) => m.name).join(", ");

  const body = `# ${site.name}

> ${site.seo.description}

## Sobre
- Cafeteria de café especial em ${a.addressLocality}/${a.addressRegion}, no bairro ${a.neighborhood}.
- Em operação desde ${site.business.foundedYear}.
- Métodos de extração: ${methodNames}.

## Onde e quando
- Endereço: ${a.streetAddress}, ${a.neighborhood}, ${a.addressLocality}/${a.addressRegion}
- ${h.weekdays}
- ${h.saturday}
- ${h.closedNote}
- Telefone: ${site.contact.phoneDisplay}
- WhatsApp: ${site.contact.whatsappDisplay}

## Links
- [Site](${site.url})
- [Cardápio](${site.url}/#cardapio)
- [Eventos](${site.url}/#eventos)
- [Como chegar](${site.url}/#contato)
- [Política de Privacidade](${site.url}/politica-de-privacidade)
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
