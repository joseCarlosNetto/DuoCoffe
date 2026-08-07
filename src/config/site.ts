/**
 * ─────────────────────────────────────────────────────────────
 *  FONTE ÚNICA DE VERDADE DO PROJETO
 * ─────────────────────────────────────────────────────────────
 *  Em 90% dos projetos você só edita ESTE arquivo.
 *  Troque textos, cor da marca, contatos e seções aqui — o site
 *  inteiro se atualiza. É isso que transforma "site" em "esteira".
 *
 *  Fluxo por cliente:
 *    1. Clonar o boilerplate
 *    2. Editar este arquivo (conteúdo + cor + contatos)
 *    3. Trocar logo/imagens em /public e /src/assets
 *    4. Deploy
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  // ── Identidade do negócio ──────────────────────────────────
  name: "Duo Coffee",
  // TODO(cliente): confirmar razão social exata / CNPJ.
  legalName: "Duo Coffee Cafeteria",
  tagline: "Café especial para viver bons momentos.",
  // TODO(cliente): confirmar domínio real antes do deploy.
  url: "https://duocoffeepp.com.br",
  // Cor da marca (o laranja do botão primário). Troque SÓ aqui
  // e o site inteiro se reveste. (injetada como variável CSS no layout)
  brandColor: "#CE4A1E",
  brandColorDark: "#A93A15",
  locale: "pt-BR",

  // ── Contato (vira CTA, rodapé e dados estruturados) ────────
  contact: {
    phone: "+551839081313",
    phoneDisplay: "(18) 3908-1313",
    whatsapp: "5518996564364", // só números, padrão do link wa.me
    whatsappDisplay: "(18) 99656-4364",
    // TODO(cliente): confirmar e-mail comercial monitorado.
    email: "contato@duocoffeepp.com.br",
    address: {
      streetAddress: "Rua José Bongiovani, 445",
      neighborhood: "Vila Liberdade",
      addressLocality: "Presidente Prudente",
      addressRegion: "SP",
      // TODO(cliente): CEP não confirmado ainda.
      postalCode: "",
      addressCountry: "BR",
    },
    // TODO(cliente): coordenadas reais (Google Maps, ≥5 casas decimais).
    // Enquanto nulo, o JSON-LD não emite `geo` (nunca fabricar coordenada).
    geo: {
      latitude: null as number | null,
      longitude: null as number | null,
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Rua+Jos%C3%A9+Bongiovani+445+Vila+Liberdade+Presidente+Prudente",
    // Horário estruturado (usado no JSON-LD como openingHoursSpecification).
    // Domingos e feriados: fechado — simplesmente omitidos do array.
    hours: [
      {
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      { dayOfWeek: ["Saturday"], opens: "09:00", closes: "15:00" },
    ],
    // Strings curtas para exibição na UI (Localização, Rodapé).
    hoursDisplay: {
      weekdays: "Seg a sex: 9h às 19h",
      saturday: "Sábado: 9h às 15h",
      closedNote: "Domingos e feriados: fechado",
    },
  },

  // ── Redes (deixe vazio o que não usar) ─────────────────────
  social: {
    instagram: "https://instagram.com/duocoffeepp",
    facebook: "",
    linkedin: "",
  },

  // ── Dados de negócio usados no JSON-LD (CafeOrCoffeeShop) ──
  business: {
    // TODO(cliente): confirmar convenção de faixa de preço ($/$$/$$$).
    priceRange: "$$",
    foundedYear: 2023,
    cuisine: "Café especial",
  },

  // ── SEO padrão (sobrescrevível por página) ─────────────────
  seo: {
    title: "Duo Coffee — Café Especial e Eventos em Presidente Prudente",
    description:
      "Cafés especiais, métodos como V60, Chemex, Clever, Aeropress e prensa francesa, além de um espaço acolhedor para encontros e eventos na Vila Liberdade, Presidente Prudente/SP.",
    ogImage: "/og-image.jpg", // 1200x630, em /public
  },
} as const;

// ── Navegação (o href aponta pras âncoras das seções) ────────
export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Nossos cafés", href: "#cafes" },
  { label: "Métodos", href: "#metodos" },
  { label: "Eventos", href: "#eventos" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
] as const;
