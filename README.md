# Duo Coffee — site institucional

Site oficial da **Duo Coffee**, cafeteria especializada em café especial e
eventos na Vila Liberdade, Presidente Prudente/SP
([duocoffeepp.com.br](https://duocoffeepp.com.br)).

> **Projeto comercial.** Este repositório é o produto de um serviço de
> desenvolvimento web contratado pela Duo Coffee junto à **JCN**. Todo o
> conteúdo (textos, fotos, identidade visual, dados de contato) pertence
> à Duo Coffee; o código é parte do serviço entregue. Não é um projeto
> open source nem um template disponível para uso de terceiros.

Este README documenta as decisões técnicas por trás do site — pensado
para performance de ponta, SEO/GEO competitivo e um código-base fácil
de manter no longo prazo, sem depender de CMS, backend ou build
complexo.

---

## Por que este site é rápido

Nenhuma otimização aqui é genérica — cada uma resolve um problema real
de performance:

| Técnica | Onde | Resultado |
|---|---|---|
| **Static-first, zero framework client-side** | Astro 5, `output: "static"` | HTML puro no primeiro byte. Sem hidratação, sem bundle de React/Vue para baixar. |
| **JS só onde há interação de verdade** | `<script>` inline por componente (menu mobile, quiz de métodos, formulário de eventos, scroll-spy) | Nada de framework para animar um menu hambúrguer. Cada script é vanilla, pequeno e isolado no próprio componente. |
| **Reveal-on-scroll sem biblioteca** | `IntersectionObserver` nativo em `BaseLayout.astro` | Substitui bibliotecas como AOS (~15KB) por ~15 linhas de JS que desligam a observação assim que o elemento já foi revelado — zero custo depois disso. |
| **Scroll suave via CSS puro** | `scroll-behavior: smooth` | Sem JS de scroll, sem *jank* — o navegador anima nativamente, com aceleração de hardware. |
| **Pipeline de imagem do Astro afinado a mão** | `astro:assets` + `sharp`, `widths`/`quality`/`densities` calculados por seção | Cada imagem é servida no tamanho real necessário para o layout (não maior), em WebP, com variantes de densidade (1x/2x/3x) só onde a peça é pequena o bastante para precisar (ex.: logo no header). Nada de "uma imagem gigante para tudo". |
| **Fontes self-hosted** | `@fontsource/fraunces` + `@fontsource/manrope` | Sem round-trip para o Google Fonts CDN — a fonte já está no mesmo domínio, sem *render-blocking* externo. |
| **CSS orientado a tokens** | Tailwind 4 (`@theme` em `global.css`) | Uma paleta de design tokens, zero CSS-in-JS, zero runtime de estilo. |

---

## Arquitetura: config dirige o site, não o contrário

A regra de ouro deste projeto: **conteúdo e identidade vivem em dois
arquivos de config; componentes nunca têm texto ou dado de negócio
hardcoded.**

```
src/config/site.ts      → identidade, contato, cor da marca, horários, SEO base, JSON-LD
src/config/content.ts   → todo o copy do site, seção por seção
```

Isso significa que qualquer alteração de negócio (novo horário, novo
número de WhatsApp, nova cor de marca) é uma edição de dado, não uma
mudança de código — reduz drasticamente o risco de regressão visual
ou de quebrar acessibilidade/SEO ao ajustar conteúdo.

### Estrutura completa

```
src/
  config/
    site.ts             identidade, contato, geo/JSON-LD, navegação
    content.ts           copy de cada seção (hero, métodos, eventos, cardápio...)
  layouts/
    BaseLayout.astro      shell HTML, injeta tema, SEO, reveal-on-scroll, scroll-spy
  components/
    SEO.astro              meta tags, Open Graph, Twitter Card, JSON-LD (CafeOrCoffeeShop + FAQPage)
    Header.astro / Footer.astro
    ui/
      Section.astro         wrapper padrão de seção (espaçamento, cabeçalho, reveal)
      Button.astro           variantes primary/secondary/ghost/whatsapp
      Icon.astro              ícones SVG inline, sem dependência externa
      StrengthDots.astro      indicador visual de intensidade (métodos de preparo)
    sections/                 um componente por seção da home
      Hero, CredentialStrip, CoffeeStory, Methods, Experience,
      Events, Menu, SocialProof, Location, FAQ
  lib/
    images.ts              resolve imagens de src/assets pelo nome, sem import manual
  assets/                   fotografia real (otimizada pelo pipeline do Astro)
  styles/
    global.css              design tokens (@theme) + estilos base acessíveis
  pages/
    index.astro              composição da home
    politica-de-privacidade.astro
public/                      favicon, imagem de compartilhamento (OG), robots.txt
```

### Seções são plugáveis

`index.astro` é só uma lista de componentes. Adicionar, remover ou
reordenar uma seção da home é reordenar uma linha — o layout, o SEO e
a acessibilidade da página não são afetados.

---

## SEO técnico e GEO (motores de busca de IA)

- **Dados estruturados**: JSON-LD `CafeOrCoffeeShop` com endereço,
  horários (`openingHoursSpecification`), telefone e — condicionalmente
  — geolocalização e `FAQPage`, gerados a partir do mesmo `site.ts`
  usado na UI (nunca duplicado, nunca dessincronizado).
- **`robots.txt` deliberadamente diferenciado**: bloqueia bots de
  *treinamento* de IA (GPTBot, Google-Extended, CCBot) e libera
  explicitamente os bots de *resposta/recuperação* (PerplexityBot,
  ClaudeBot, OAI-SearchBot) — o site é indexável por IAs que citam
  fontes, não usado como material de treinamento sem consentimento.
- **Sitemap automático** via `@astrojs/sitemap`, gerado a cada build.
- Título, meta description e canonical por página, Open Graph e
  Twitter Card completos.

---

## Acessibilidade

- Skip-link para o conteúdo principal.
- `:focus-visible` com contorno visível em toda a UI (nunca removido).
- `prefers-reduced-motion` respeitado tanto nas transições de CSS
  quanto no `scroll-behavior` e no reveal-on-scroll via JS.
- HTML semântico, hierarquia de headings única por página, `alt`
  descritivo em cada imagem.

---

## Conteúdo real, não placeholder

Todas as fotografias vieram do acervo real do Instagram da Duo Coffee
— cada imagem foi conferida individualmente contra a legenda original
do post antes de entrar no site, para garantir que o que aparece em
cada seção realmente representa o que a seção descreve (evitando o
problema comum de bancos de imagem genéricos ou fotos fora de
contexto). Nenhum dado é inventado para "encorpar" a página: prêmio e
credenciais citados vêm de posts reais da própria Duo Coffee, e os
dois depoimentos atuais estão marcados em `content.ts` como pendentes
de confirmação com o cliente antes do lançamento — nunca publicados
como definitivos sem essa checagem.

---

## Stack

- **[Astro 5](https://astro.build)** — build estático, sem runtime de framework no cliente
- **[Tailwind CSS 4](https://tailwindcss.com)** — tokens de design via `@theme`, sem config `.js` separada
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** — sitemap.xml automático
- **[@fontsource](https://fontsource.org/)** (Fraunces + Manrope) — fontes self-hosted
- **[Formspree](https://formspree.io)** — recebimento do formulário de eventos, sem backend próprio

Sem banco de dados, sem CMS, sem servidor de aplicação. O site inteiro
é um conjunto de arquivos estáticos — hospedagem simples, superfície
de ataque mínima, custo de manutenção próximo de zero.

---

## Comandos

```bash
npm install      # instala dependências
npm run dev      # ambiente local (http://localhost:4321)
npm run build    # gera build estático em /dist
npm run preview  # serve o build de produção localmente
```

---

## Deploy

Build estático (`npm run build` → `/dist`), compatível com qualquer
host de arquivos estáticos com HTTPS automático (Vercel, Netlify,
Cloudflare Pages). Deploy contínuo a cada push para a branch principal.
