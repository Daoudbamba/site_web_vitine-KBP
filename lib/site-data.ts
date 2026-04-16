export type Product = {
  slug: string;
  name: string;
  format: string;
  summary: string;
  image: string;
};

export const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "A propos" },
  { href: "/produits", label: "Produits" },
  { href: "/logistique", label: "Logistique" },
  { href: "/contact", label: "Contact" }
] as const;

export const products: Product[] = [
  {
    slug: "arachides-fraiches",
    name: "Arachides fraiches",
    format: "5kg, 10kg",
    summary: "Qualite premium, fraicheur garantie.",
    image: "/images/hero-kbp.png"
  },
  {
    slug: "arachides-grillees",
    name: "Arachides grillees",
    format: "300g",
    summary: "Parfaitement torrefiees pour les points de vente.",
    image: "/images/product-grid-2.png"
  },
  {
    slug: "arachides-caramelisees",
    name: "Arachides caramelisees",
    format: "Format professionnel",
    summary: "Saveur unique et authentique.",
    image: "/images/hero-kbp.png"
  },
  {
    slug: "gingembre-caramelise",
    name: "Gingembre caramelise",
    format: "Conditionnement B2B",
    summary: "Gout intense et naturel.",
    image: "/images/product-grid-2.png"
  },
  {
    slug: "arachides-sucrees",
    name: "Arachides sucrees",
    format: "Format professionnel",
    summary: "Equilibre parfait entre douceur et texture.",
    image: "/images/hero-kbp.png"
  },
  {
    slug: "petit-cola",
    name: "Petit cola",
    format: "15kg",
    summary: "Produit premium africain pour distribution specialisee.",
    image: "/images/product-grid-2.png"
  }
];

export const highlights = [
  { value: "3", label: "Pays couverts" },
  { value: "24h", label: "Livraison rapide" },
  { value: "100%", label: "Qualite garantie" },
  { value: "B2B", label: "Expertise" }
] as const;

export const reasons = [
  {
    title: "Couverture europeenne",
    description:
      "Nous operons en France, Belgique et Espagne avec une expertise locale et une logistique optimisee."
  },
  {
    title: "Logistique integree",
    description:
      "Notre propre infrastructure logistique garantit des livraisons rapides et fiables sous 24-48h."
  },
  {
    title: "Qualite garantie",
    description:
      "Selection rigoureuse des produits et controle qualite a chaque etape de la chaine d'approvisionnement."
  },
  {
    title: "Disponibilite constante",
    description:
      "Stocks anticipes et flux maitrises pour assurer une continuite d'approvisionnement B2B."
  },
  {
    title: "Service personnalise",
    description:
      "Accompagnement commercial dedie avec devis rapides et conseils adaptes a votre reseau."
  },
  {
    title: "Tarifs competitifs",
    description:
      "Relation directe importateur-distributeur pour maintenir une offre performante et durable."
  }
] as const;
