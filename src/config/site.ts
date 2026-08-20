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
  legalName: "Cafeteria Duo Coffee Ltda",
  cnpj: "67.970.032/0001-90",
  tagline: "Café especial para viver bons momentos.",
  url: "https://duocoffee.com.br",
  // Cor da marca (o laranja do botão primário). Troque SÓ aqui
  // e o site inteiro se reveste. (injetada como variável CSS no layout)
  brandColor: "#CE4A1E",
  brandColorDark: "#A93A15",
  // Cor da barra do navegador em mobile (meta theme-color). Usa o creme
  // de fundo, não o laranja — a marca já aparece na UI, a barra do
  // sistema não precisa gritar.
  themeColor: "#F4EFE6",
  locale: "pt-BR",

  // ── Contato (vira CTA, rodapé e dados estruturados) ────────
  contact: {
    phone: "+551839081313",
    phoneDisplay: "(18) 3908-1313",
    whatsapp: "5518996564364", // só números, padrão do link wa.me
    whatsappDisplay: "(18) 99656-4364",
    email: "marcelonabas@gmail.com",
    address: {
      streetAddress: "Rua José Bongiovani, 445",
      neighborhood: "Vila Liberdade",
      addressLocality: "Presidente Prudente",
      addressRegion: "SP",
      postalCode: "19050-680",
      addressCountry: "BR",
    },
    geo: {
      latitude: -22.134674726950525 as number | null,
      longitude: -51.39988406821203 as number | null,
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
    priceRange: "R$20-R$40",
    foundedYear: 2023,
    cuisine: "Café especial",
  },

  // ── SEO padrão (sobrescrevível por página) ─────────────────
  seo: {
    title: "Duo Coffee — Café Especial e Eventos em Presidente Prudente",
    description:
      "Cafés especiais e métodos como V60, Chemex e Aeropress em um espaço acolhedor para encontros e eventos na Vila Liberdade, Presidente Prudente/SP.",
    ogImage: "/og-image.jpg", // 1200x630, em /public
  },
} as const;

// ── Navegação (o href aponta pras âncoras das seções) ────────
export const nav = [
  { label: "Nossos cafés", href: "#cafes" },
  { label: "Métodos", href: "#metodos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Eventos", href: "#eventos" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Como chegar", href: "#contato" },
  { label: "Dúvidas", href: "#duvidas" },
] as const;
