# LP Boilerplate (Astro)

Base padronizada para landing pages institucionais focadas em
**UX, performance e SEO** (Google + IAs). Pensada como esteira:
clonar → editar config → trocar imagens → deploy.

---

## Stack

- **Astro 5** — HTML estático, ~zero JavaScript no cliente
- **Tailwind 4** — estilização via tokens, tema dirigido por config
- **@astrojs/sitemap** — sitemap automático
- Imagens otimizadas (WebP responsivo) pelo pipeline do Astro
- Dados estruturados (JSON-LD `LocalBusiness`) no `<head>`

Sem banco, sem servidor, sem CMS. Manutenção mínima.

---

## Comandos

```bash
npm install      # instala dependências
npm run dev      # ambiente local (http://localhost:4321)
npm run build    # gera /dist estático
npm run preview  # serve o build localmente
```

---

## A esteira (passo a passo por cliente)

1. **Clonar** este repositório para o projeto do cliente.
2. **`src/config/site.ts`** — nome, cor da marca, contatos, SEO.
   Trocar `brandColor` reveste o site inteiro.
3. **`src/config/content.ts`** — todo o texto das seções (copy).
4. **Imagens** — substituir os arquivos em `src/assets/`
   (`hero.jpg`, `about.jpg`) e em `public/` (`og-image.jpg`,
   `favicon.svg`). Mantenha os mesmos nomes.
5. **Formulário** — em `src/components/sections/Contact.astro`,
   colar o endpoint do Formspree em `FORM_ENDPOINT`.
6. **`npm run build`** e publicar.

> Regra de ouro: 90% dos projetos não exigem tocar em componente
> nenhum. Se você está editando `.astro` toda hora, provavelmente
> dá pra mover aquilo pro config.

---

## Estrutura

```
src/
  config/
    site.ts          ← identidade, contato, cor, SEO  (EDITAR)
    content.ts       ← copy de todas as seções        (EDITAR)
  layouts/
    BaseLayout.astro ← shell HTML, injeta tema, fontes
  components/
    SEO.astro        ← meta tags, OG, JSON-LD
    Header.astro / Footer.astro
    ui/
      Section.astro  ← wrapper padrão (espaçamento + cabeçalho)
      Button.astro   ← botão (primary / secondary / ghost)
      Icon.astro     ← ícones SVG inline (sem lib)
    sections/        ← blocos plugáveis da página
      Hero / Services / About / Testimonials / FAQ / CTA / Contact
  lib/
    images.ts        ← resolve imagens de assets por nome
  assets/            ← imagens otimizáveis (trocar aqui)
  styles/
    global.css       ← tokens de tema + base acessível
public/              ← favicon, og-image, robots.txt
```

### Adicionar/remover seções

Tudo é composto em `src/pages/index.astro`. Para remover uma
seção, apague a linha do componente. Para criar uma nova, copie
um arquivo de `sections/`, use o wrapper `<Section>` e plugue no
index. Conteúdo novo vai pro `content.ts`.

---

## Deploy (escolha um — todos gratuitos)

- **Vercel / Netlify / Cloudflare Pages**: conecte o repositório,
  build command `npm run build`, output `dist`. Deploy a cada push.

Depois aponte o domínio do cliente e ative HTTPS (automático).

---

## Checklist de entrega

- [ ] `site.ts` e `content.ts` revisados, sem texto placeholder
- [ ] `hero.jpg`, `about.jpg`, `og-image.jpg`, `favicon.svg` trocados
- [ ] Endpoint do formulário configurado e testado
- [ ] `site.url` e o Sitemap em `robots.txt` com o domínio real
- [ ] Teste no celular (menu, formulário, botão de WhatsApp)
- [ ] Lighthouse: mirar 95+ em Performance, SEO e Acessibilidade
- [ ] Submeter o sitemap no Google Search Console
