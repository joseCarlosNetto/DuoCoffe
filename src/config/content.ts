/**
 * ─────────────────────────────────────────────────────────────
 *  CONTEÚDO DAS SEÇÕES
 * ─────────────────────────────────────────────────────────────
 *  O texto que aparece na página. Separado de site.ts pra manter
 *  cada arquivo focado: site.ts = identidade/contato, este = copy.
 *
 *  Links de WhatsApp/mapa NÃO ficam aqui — são montados nos
 *  componentes a partir de site.contact (fonte única de verdade).
 * ─────────────────────────────────────────────────────────────
 */

export const hero = {
  eyebrow: "Café especial • Presidente Prudente",
  title: "Café especial para viver bons momentos.",
  lede: "Grãos brasileiros selecionados, métodos que revelam novas nuances e um espaço feito para encontros no coração da Vila Liberdade.",
  ctas: [
    { label: "Conheça nossos cafés", href: "#cafes", variant: "primary" },
    { label: "Como chegar", href: "#contato", variant: "secondary" },
    { label: "Reserve seu evento", href: "#eventos", variant: "ghost" },
  ],
  scrollCue: "Role para descobrir",
  images: {
    main: { src: "hero-main", alt: "Barista da Duo Coffee preparando um café no balcão" },
    detail: { src: "hero-detail", alt: "Café servido em xícara branca com copo d'água da Duo Coffee ao lado" },
  },
};

export interface Credential {
  icon: string;
  label: string;
  caption: string;
}
export const credentials: Credential[] = [
  { icon: "calendar", label: "Desde 2023", caption: "Uma cafeteria da Vila Liberdade" },
  {
    icon: "bean",
    label: "Grãos brasileiros selecionados",
    caption: "Sul de Minas, Mogiana e Espírito Santo",
  },
  {
    icon: "filter",
    label: "Métodos de extração especiais",
    caption: "Espresso, V60, Chemex, Clever, Aeropress e prensa",
  },
  {
    icon: "cup",
    label: "Preparado com cuidado, na hora",
    caption: "Cada pedido extraído no momento",
  },
];

export const coffeeStory = {
  eyebrow: "O café é o protagonista",
  title: "Cada xícara começa muito antes do primeiro gole.",
  paragraphs: [
    "Na Duo Coffee, origem, moagem e método trabalham juntos para revelar o melhor de cada grão. Selecionamos cafés de regiões brasileiras como Sul de Minas, Mogiana e Espírito Santo e preparamos cada pedido para que aroma, doçura, corpo e equilíbrio apareçam na xícara.",
  ],
  quote:
    "Você não precisa ser especialista. Nossa equipe ajuda a encontrar um café que combine com o seu paladar.",
  cta: { label: "Descubra nossos cafés", href: "#metodos" },
  images: {
    main: {
      src: "coffee-story-main",
      alt: "Grãos de café e flores secas em vidro iluminados pela janela da Duo Coffee",
    },
    detail: {
      src: "coffee-story-detail",
      alt: "Affogato com sorvete e calda ao lado de um bule de espresso, na bandeja da Duo Coffee",
    },
  },
};

export type MethodAttrLabel = "Intensidade" | "Corpo" | "Limpeza";
export interface MethodAttribute {
  label: MethodAttrLabel;
  strength: 1 | 2 | 3;
  value: string;
}
export interface MethodCard {
  slug: string;
  name: string;
  description: string;
  attributes: MethodAttribute[];
  image?: { src: string; alt: string };
  featured?: boolean;
  tag?: string;
}
export const methods = {
  eyebrow: "Métodos",
  title: "Uma origem. Diferentes formas de sentir o café.",
  lede: "Cada método destaca características diferentes do grão. Escolha pela intensidade, pelo corpo ou pela delicadeza — ou peça uma recomendação.",
  items: [
    {
      slug: "chemex",
      name: "Chemex",
      featured: true,
      tag: "Destaque da casa",
      image: {
        src: "methods-chemex",
        alt: "Coador Chemex e V60 no balcão de preparo da Duo Coffee",
      },
      description:
        "Delicado, equilibrado e cristalino. A silhueta de vidro e a extração lenta entregam uma xícara limpa e floral.",
      attributes: [
        { label: "Intensidade", strength: 1, value: "Suave" },
        { label: "Corpo", strength: 1, value: "Leve" },
        { label: "Limpeza", strength: 3, value: "Alta" },
      ],
    },
    {
      slug: "espresso",
      name: "Espresso",
      description: "Intenso, aromático e concentrado.",
      attributes: [
        { label: "Intensidade", strength: 3, value: "Alta" },
        { label: "Corpo", strength: 3, value: "Encorpado" },
        { label: "Limpeza", strength: 2, value: "Média" },
      ],
    },
    {
      slug: "v60",
      name: "V60",
      description: "Limpo, vivo e preciso.",
      attributes: [
        { label: "Intensidade", strength: 2, value: "Média" },
        { label: "Corpo", strength: 1, value: "Leve" },
        { label: "Limpeza", strength: 3, value: "Alta" },
      ],
    },
    {
      slug: "aeropress",
      name: "Aeropress",
      description: "Versátil, encorpado e surpreendente.",
      attributes: [
        { label: "Intensidade", strength: 2, value: "Média" },
        { label: "Corpo", strength: 3, value: "Encorpado" },
        { label: "Limpeza", strength: 2, value: "Média" },
      ],
    },
    {
      slug: "prensa-francesa",
      name: "Prensa Francesa",
      description: "Rica, intensa e com textura marcante.",
      attributes: [
        { label: "Intensidade", strength: 3, value: "Alta" },
        { label: "Corpo", strength: 3, value: "Encorpado" },
        { label: "Limpeza", strength: 1, value: "Baixa" },
      ],
    },
    {
      slug: "clever",
      name: "Clever",
      description: "Equilibrado, prático e consistente.",
      attributes: [
        { label: "Intensidade", strength: 2, value: "Média" },
        { label: "Corpo", strength: 2, value: "Médio" },
        { label: "Limpeza", strength: 2, value: "Média" },
      ],
    },
  ] as MethodCard[],
  quiz: {
    prompt: "Qual método combina com você?",
    triggerLabel: "Receber uma recomendação",
    question: "Como você gosta do seu café?",
    options: [
      { id: "intenso", label: "Intenso e marcante" },
      { id: "equilibrado", label: "Equilibrado no dia a dia" },
      { id: "pratico", label: "Prático e consistente" },
      { id: "delicado", label: "Delicado e aromático" },
    ],
    results: {
      intenso:
        "Prensa Francesa ou Espresso — corpo marcante e sabor concentrado para quem gosta de intensidade.",
      equilibrado:
        "Aeropress — versátil e encorpado, agrada quase todo mundo no dia a dia.",
      pratico:
        "Clever — equilibrado e consistente, une imersão e filtragem para uma xícara redonda e sem complicação.",
      delicado:
        "Chemex ou V60 — xícara limpa, floral e cristalina, perfeita para sentir cada nuance.",
    } as Record<string, string>,
  },
};

export interface GalleryTile {
  image: { src: string; alt: string };
  caption?: string;
  colSpan: 4 | 5 | 7;
  rowSpan: 1 | 2 | 3;
}
export const experience = {
  eyebrow: "Experiência Duo",
  title: "Um espaço para desacelerar, conversar e descobrir novos cafés.",
  lede: "Entre uma pausa rápida e uma conversa sem pressa, cada canto da Duo foi pensado para receber você com conforto, personalidade e café de verdade.",
  gallery: [
    {
      image: { src: "experience-1", alt: "Área externa da Duo Coffee com o letreiro em estrela e plantas" },
      caption: "Área externa",
      colSpan: 7,
      rowSpan: 3,
    },
    {
      image: { src: "experience-2", alt: "Área interna com sofás e mesas junto à janela" },
      caption: "Encontros e Reuniões",
      colSpan: 5,
      rowSpan: 2,
    },
    {
      image: { src: "experience-3", alt: "Ambiente interno com lousa artesanal e sofá" },
      colSpan: 5,
      rowSpan: 1,
    },
    {
      image: { src: "experience-4", alt: "Integrante da equipe da Duo Coffee preparando um café no balcão" },
      colSpan: 4,
      rowSpan: 2,
    },
    {
      image: { src: "experience-5", alt: "Mesa montada para um encontro, com luzes e decoração" },
      colSpan: 4,
      rowSpan: 2,
    },
    {
      image: { src: "experience-6", alt: "Mezanino interno com mesas e vista para o salão" },
      colSpan: 4,
      rowSpan: 2,
    },
  ] as GalleryTile[],
  tags: ["Área interna", "Área externa", "Wi-Fi", "Encontros e reuniões"],
};

export const events = {
  eyebrow: "Eventos na Duo",
  title: "Seu evento em um espaço criado para bons encontros.",
  lede: "Reuniões, confraternizações, workshops, apresentações e celebrações ganham uma atmosfera diferente quando acontecem em um ambiente acolhedor, com café especial e atendimento próximo.",
  benefits: [
    "Ambiente interno e área externa",
    "Configurações flexíveis",
    "Cafés e acompanhamentos para o seu evento",
    "Atendimento próximo e personalizado",
  ],
  note: "Consulte a capacidade e as configurações disponíveis para a sua data.",
  images: {
    main: { src: "events-main", alt: "Mesa longa montada para um evento na Duo Coffee, com luzes" },
    overlay: { src: "events-overlay", alt: "Casa cheia durante um evento com música na Duo Coffee" },
  },
  form: {
    // TODO(cliente): substituir pelo endpoint real do Formspree deste projeto.
    action: "https://formspree.io/f/SEU_ID",
    intro: {
      title: "Vamos planejar juntos?",
      body: "Conte um pouco sobre o seu evento e retornamos com as configurações e a disponibilidade para a sua data. Sem compromisso.",
    },
    whatsappLabel: "Falar no WhatsApp",
    whatsappMessage: "Olá! Gostaria de saber mais sobre eventos na Duo Coffee.",
    fields: {
      nome: { label: "Nome", required: true },
      whatsapp: {
        label: "WhatsApp",
        required: true,
        placeholder: "(18) 99999-0000",
      },
      tipo: {
        label: "Tipo de evento",
        required: true,
        options: [
          "Reunião ou workshop",
          "Confraternização",
          "Apresentação",
          "Celebração",
          "Outro",
        ],
      },
      data: { label: "Data aproximada", required: false },
      pessoas: {
        label: "Número estimado de pessoas",
        required: false,
        placeholder: "Ex.: 20",
      },
      mensagem: {
        label: "Mensagem",
        required: false,
        placeholder: "Conte um pouco sobre a sua ideia",
      },
    },
    consent: {
      label: "Concordo com a",
      linkLabel: "Política de Privacidade",
      href: "/politica-de-privacidade",
    },
    submitLabel: "Solicitar informações",
    requiredNote: "Os campos marcados com * são obrigatórios.",
    successTitle: "Recebemos o seu pedido ☕",
    successBody:
      "Obrigado! Em breve nossa equipe entra em contato pelo WhatsApp informado para conversar sobre o seu evento. Enquanto isso, fique à vontade para nos chamar diretamente.",
  },
};

export const menu = {
  eyebrow: "Para acompanhar",
  title: "Sabores feitos para acompanhar cada xícara.",
  lede: "Doces, salgados e receitas preparadas na hora completam a experiência sem tirar o café do centro da mesa.",
  featured: {
    tag: "Diferencial da casa",
    title: "Sabores sazonais",
    body: "Receitas e combinações que mudam com cada época do ano — criações que surpreendem quem volta sempre e acompanham perfeitamente o café da estação.",
    note: "Consulte os sabores da temporada. Cardápio sujeito a alterações.",
    image: { src: "menu-seasonal", alt: "Caldo quente de inverno servido com acompanhamentos" },
  },
  items: [
    {
      title: "Doces artesanais",
      description: "Bolos, cookies, donuts e sobremesas para equilibrar cada gole.",
      image: { src: "menu-doces", alt: "Bolinho vulcão com calda de chocolate, sobremesa da casa" },
    },
    {
      title: "Salgados e brunch",
      description: "Croissants, pães de queijo, frittatas e opções para uma pausa mais completa.",
      image: { src: "menu-salgados", alt: "Tapioca de frango servida no prato sobre a mesa" },
    },
  ],
  footnote: "Cardápio sujeito a alterações. Consulte disponibilidade.",
  cta: { label: "Ver cardápio", href: "#contato" },
};

export const socialProof = {
  eyebrow: "Feita com a cidade",
  title: "Uma cafeteria feita com a cidade.",
  award: {
    label:
      "Eleita a melhor cafeteria de Presidente Prudente em votação promovida pela página Prudente Hoje.",
    source: "Prudente Hoje",
    date: "2025-12",
  },
  teamImage: { src: "social-proof-team", alt: "Equipe da Duo Coffee reunida em frente ao letreiro da casa" },
  // TODO(cliente): verificar autenticidade destes depoimentos antes do lançamento
  // (nunca fabricar — ver CLAUDE.md). Substituir por depoimentos reais confirmados.
  testimonials: [
    {
      quote: "O atendimento, o ambiente e o cuidado com o café fazem a gente querer voltar.",
      author: "Cliente da Duo",
      role: "Presidente Prudente",
    },
    {
      quote: "Um lugar bonito, acolhedor e com cafés que realmente surpreendem.",
      author: "Cliente da Duo",
      role: "Vila Liberdade",
    },
  ],
};

export const location = {
  eyebrow: "Visite a Duo",
  title: "Visite a Duo Coffee",
  mapLabel:
    "Mapa do Google indicando a localização da Duo Coffee na Rua José Bongiovani, Vila Liberdade",
  directionsLabel: "Abrir rota",
  whatsappLabel: "Falar no WhatsApp",
};

// FAQ real só entra aqui quando o cliente fornecer perguntas verdadeiras.
// Vazio por padrão — FAQ.astro não renderiza (nem gera schema FAQPage) enquanto isso.
export interface FaqItem {
  question: string;
  answer: string;
}
export const faq: FaqItem[] = [];

export const footer = {
  brandOneLiner: "Café especial, encontros memoráveis e sabores preparados para acompanhar.",
  ctaTitle: "Planeje seu evento na Duo",
  ctaButtonLabel: "Quero realizar meu evento",
  ctaHref: "#eventos",
  // TODO: página real de política de privacidade (LGPD) — ver /politica-de-privacidade.
  privacyLabel: "Política de privacidade",
  privacyHref: "/politica-de-privacidade",
};
