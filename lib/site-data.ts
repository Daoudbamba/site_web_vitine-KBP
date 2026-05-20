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
    format: "5 kg, 10 kg",
    summary: "Arachides fraiches de qualite premium, recoltees en Cote d'Ivoire, au Benin et au Togo.",
    image: "/images/arachides-fraiches.jpg"
  },
  {
    slug: "arachides-salees-grillees-bouteille",
    name: "Arachides salees grillees — Bouteille",
    format: "400 g, 600 g",
    summary: "Grillees et salees selon la methode traditionnelle. En bouteille pratique, ideal pour la vente au detail. Origine : Togo, Cote d'Ivoire, Benin.",
    image: "/images/arachides-salees-bouteille.jpg"
  },
  {
    slug: "arachides-salees-grillees-togo",
    name: "Arachides salees grillees — Togo",
    format: "300 g, 600 g",
    summary: "Variete du Togo aux saveurs intenses, grillees a sec et legerement salees. Parfaite pour les epiceries et revendeurs.",
    image: "/images/arachides-salees-orange.jpg"
  },
  {
    slug: "arachides-caramelisees",
    name: "Arachides caramelisees en boules",
    format: "300 g",
    summary: "Arachides enrobees de caramel selon une recette traditionnelle togolaise. Sucrees, croustillantes, irresistibles.",
    image: "/images/arachides-caramelisees.jpg"
  },
  {
    slug: "nougat-africain",
    name: "Nougat africain",
    format: "Format professionnel",
    summary: "Nougat artisanal aux saveurs authentiques d'Afrique de l'Ouest. Produit de specialite ideal pour epiceries fines et distribution selective.",
    image: "/images/nougat.jpg"
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
