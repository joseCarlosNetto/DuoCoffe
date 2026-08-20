# CLAUDE.md — Constituição do projeto (todos os agentes herdam)

Este é o boilerplate de landing pages institucionais em **Astro 5 +
Tailwind 4**, arquitetura dirigida por config, static-first e
otimizada para SEO/GEO. Este arquivo é a **constituição compartilhada**:
vale para a sessão principal e para todos os subagents em
`.claude/agents/`. As regras abaixo são inegociáveis para todos.

O time tem dois especialistas (ver `.claude/agents/`):

- **engenheiro-seo-geo** — estrutura, HTML, lógica dos componentes,
  SEO técnico e GEO. Analisa o protótipo do designer e constrói.
- **redator** — conteúdo e copy. Só toca em texto, nunca em código.

---

## 1. O alicerce é intocável (vale para TODOS os agentes)

Nenhum agente altera, remove ou substitui estes itens sem um pedido
direto e inequívoco do usuário — e, mesmo aí, alerta sobre o impacto
antes de agir:

- **Arquitetura dirigida por config.** `src/config/site.ts` e
  `src/config/content.ts` são a fonte única de verdade. Conteúdo e
  dados do negócio vivem aqui, nunca chumbados em componentes.
- **Tooling e build.** `package.json`, `astro.config.mjs`,
  `tsconfig.json` e o mecanismo de tokens do Tailwind v4 (bloco
  `@theme` em `global.css`). Valores de token podem mudar; o mecanismo
  não. Nada de trocar o stack, adicionar SPA, CMS ou banco.
- **Static-first / zero-JS.** O conteúdo é renderizado em HTML no
  build. Nunca mover conteúdo para client-side, nunca adicionar
  React/Vue/libs pesadas, nunca esconder texto atrás de JS. É o que
  sustenta performance e leitura por crawlers de IA.
- **Garantias de SEO em `SEO.astro`.** Sempre existem `<title>`,
  meta description, canonical, Open Graph, Twitter card e JSON-LD.
  Pode-se enriquecer o schema; nunca remover essas tags.
- **Piso de acessibilidade.** `:focus-visible`,
  `prefers-reduced-motion`, HTML semântico, `alt`, `label`, hierarquia
  de headings. Toda mudança preserva ou melhora — nunca regride.
- **Helpers estruturais.** `src/lib/images.ts`, o sistema de UI
  (`Section`, `Button`, `Icon`) e a integração de sitemap. Reestilizar
  é livre; apagar o sistema, não.

Se uma tarefa exigir mexer no alicerce: **pare, explique o risco e
peça confirmação explícita** antes de qualquer linha.

---

## 2. Ritual obrigatório de trabalho (vale para TODOS)

1. **Analisar** o material de entrada com rigor (protótipo, briefing,
   conteúdo atual).
2. **Resumir por escrito** tudo que interpretou e tudo que pretende
   fazer, de forma analítica (cada agente tem seu formato de resumo).
3. **Justificar** cada mudança: por que ela serve à marca, à
   conversão, ao SEO/GEO ou à acessibilidade — não só *o que*, mas
   *por quê*.
4. **Aguardar permissão** explícita. Não editar arquivo nenhum antes
   de um "pode fazer" claro. Aprovação parcial → executa só o aprovado.
5. **Implementar** e validar (`npm run build` quando aplicável).
6. **Resumo de fechamento**: o que mudou, em quais arquivos, e os
   próximos passos.

---

## 3. Critérios de conteúdo (SEO + GEO + copy) — compartilhados

Estes critérios valem tanto para o **engenheiro** (estrutura e SEO
técnico) quanto para o **redator** (prosa). São o padrão único de
qualidade de conteúdo do projeto.

### SEO
- Title único por página: termo principal + localidade + marca (~60
  chars). Meta description persuasiva (~150–160 chars) com CTA.
- Um único `<h1>`; H2/H3 em hierarquia lógica.
- SEO local: NAP (nome, endereço, telefone) idêntico em todo o site e
  coerente com o Google Business Profile.
- `alt` descritivo; texto de link descritivo (nunca "clique aqui").
- Frescor: `lastmod` do sitemap e datas reais.

### GEO / AEO (motores generativos — estado de 2026)
- A IA precisa ler: `robots.txt` não bloqueia GPTBot, ClaudeBot,
  PerplexityBot, Google-Extended. Conteúdo server-side (já é).
- Estrutura em torno de **perguntas reais** do público; FAQ casando
  com prompts reais.
- **Passagens autossuficientes e citáveis**: cada parágrafo responde
  uma pergunta com um fato verificável; "resposta rápida" no topo das
  seções-chave.
- **Densidade factual**: estatísticas, datas, credenciais e nomes
  próprios (técnicas de maior efeito comprovado: adicionar estatística,
  citar fonte, incluir quote).
- **E-E-A-T**: experiência, expertise, autoridade, confiança —
  credenciais, registro profissional, tempo de atuação, avaliações
  reais.
- **Schema stacking** quando fizer sentido: `LocalBusiness` +
  `FAQPage` + `Service` + `BreadcrumbList` (+ `Review`/`aggregateRating`
  só se reais).
- `llms.txt`: opcional e de baixo esforço; **não é fator de ranking**
  (adoção e uso pelos crawlers ainda baixos). Nunca duplicar páginas
  em Markdown.

### Copy
- Falar da **dor e do resultado** do cliente do cliente, não da lista
  de serviços. ❌ "Clareamento dental" → ✅ "Recupere a cor natural do
  sorriso".
- Voz ativa, específico melhor que esperto, CTA literal ("Agendar
  avaliação", não "Enviar").
- Tom alinhado à marca.

### Linha ética inegociável
**Nenhum agente inventa** dados, estatísticas, depoimentos, notas ou
credenciais — nem para ganhar visibilidade em IA. Tudo é real e
verificado com o cliente. Faltou fato? Peça; não fabrique.

---

## 4. Mapa do projeto (quem pode tocar em quê)

```
src/config/site.ts       → identidade, contato, cor, SEO base
                           (engenheiro: tudo · redator: só textos de SEO)
src/config/content.ts    → copy de todas as seções
                           (redator: domínio total · engenheiro: evita)
src/components/SEO.astro  → meta, OG, JSON-LD   (engenheiro enriquece)
src/components/sections/  → blocos da página     (engenheiro, com permissão)
src/components/ui/        → Section, Button, Icon (engenheiro reestiliza)
src/layouts/BaseLayout    → shell, tema, fontes            (ALICERCE)
src/lib/images.ts         → resolução de imagens           (ALICERCE)
src/styles/global.css     → tokens + base   (valores ok; mecanismo não)
public/                   → favicon, og-image, robots.txt
```

---

## 5. Comando de validação

Toda alteração de código deve passar limpo em `npm run build` antes do
resumo de fechamento. Imagens em `src/assets/`; nunca quebrar o
pipeline de otimização.

---

## Agent skills

### Issue tracker

Issues rastreados no GitHub Issues do repo `joseCarlosNetto/Site`, via CLI `gh`. See `docs/agents/issue-tracker.md`.

### Domain docs

Single-context: `CONTEXT.md` + `docs/adr/` na raiz do repo. See `docs/agents/domain.md`.
