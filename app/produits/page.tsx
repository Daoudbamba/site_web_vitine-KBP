import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Box, CheckCheck, Package } from "lucide-react";
import { products } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Produits",
  description: "Catalogue premium KBP Distribution avec formats professionnels pour clients B2B."
};

const productDetails: Record<string, { category: string; features: string[] }> = {
  "arachides-fraiches": {
    category: "Arachides fraiches",
    features: [
      "Recoltees en Cote d'Ivoire, Benin et Togo",
      "Qualite premium garantie lot par lot",
      "Conditionnement B2B 5 kg et 10 kg",
      "Tracabilite complete de l'origine"
    ]
  },
  "arachides-salees-grillees-bouteille": {
    category: "Arachides transformees",
    features: [
      "Grillees et salees selon methode traditionnelle",
      "Bouteille pratique pour la vente au detail",
      "Formats 400 g et 600 g disponibles",
      "Origine : Togo, Cote d'Ivoire, Benin"
    ]
  },
  "arachides-salees-grillees-togo": {
    category: "Arachides transformees",
    features: [
      "Variete du Togo aux saveurs intenses",
      "Grillees a sec, legerement salees",
      "Formats 300 g et 600 g",
      "Ideal epiceries et revendeurs"
    ]
  },
  "arachides-caramelisees": {
    category: "Arachides sucrees",
    features: [
      "Recette traditionnelle togolaise",
      "Enrobage caramel croustillant",
      "Format 300 g pret a la vente",
      "Sans colorants ni conservateurs artificiels"
    ]
  },
  "nougat-africain": {
    category: "Specialites africaines",
    features: [
      "Fabrication artisanale traditionnelle",
      "Saveurs authentiques d'Afrique de l'Ouest",
      "Ideal epiceries fines et revendeurs selectifs",
      "Conditionnement professionnel disponible"
    ]
  }
};

export default function ProductsPage() {

  const guarantees = [
    {
      title: "Qualite controlee",
      description: "Chaque lot est teste et verifie avant distribution",
      icon: CheckCheck,
      yellow: false
    },
    {
      title: "Stock permanent",
      description: "Disponibilite garantie tout au long de l'annee",
      icon: Box,
      yellow: true
    },
    {
      title: "Tarifs degressifs",
      description: "Plus vous commandez, plus vous economisez",
      icon: CheckCheck,
      yellow: false
    },
    {
      title: "Livraison rapide",
      description: "Recevez vos commandes sous 24-48h",
      icon: Package,
      yellow: true
    }
  ] as const;

  return (
    <div>
      <section className="kbp-hero">
        <div className="kbp-hero-inner mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="kbp-h1">Notre gamme de produits</h1>
          <p className="kbp-body mt-6 max-w-5xl text-white/90">
            Decouvrez notre selection de produits alimentaires premium, soigneusement choisis pour repondre aux
            exigences des professionnels
          </p>
        </div>
      </section>

      <section className="bg-kbp-panel kbp-section">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
          {products.map((item, index) => {
            const detail = productDetails[item.slug];
            const reverse = index % 2 === 1;
            return (
              <article key={item.slug} className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
                <div className={`grid lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="flex min-h-[28rem] items-center justify-center bg-kbp-panel p-6 sm:min-h-[36rem]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={400}
                      height={560}
                      className="h-full max-h-[32rem] w-auto object-contain drop-shadow-md"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {detail && (
                      <p className="absolute left-5 top-5 rounded-full bg-white px-5 py-2 text-lg text-kbp-red md:text-xl">{detail.category}</p>
                    )}
                  </div>

                  <div className="p-8 sm:p-10 lg:p-12">
                    <h2 className="kbp-h2 text-kbp-ink">{item.name}</h2>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {item.format.split(", ").map((format) => (
                        <span key={format} className="rounded-full bg-kbp-yellow/35 px-5 py-2 text-lg text-kbp-yellowDeep md:text-xl">
                          {format}
                        </span>
                      ))}
                    </div>

                    <p className="kbp-body mt-8 text-kbp-slate">{item.summary}</p>

                    {detail && (
                      <ul className="kbp-body mt-8 space-y-4 text-kbp-slate">
                        {detail.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-4">
                            <CheckCheck className="h-8 w-8 shrink-0 text-kbp-red" aria-hidden="true" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <Link href="/contact" className="kbp-btn-danger mt-9">
                      Demander un devis
                      <ArrowRight className="h-7 w-7" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-kbp-panel kbp-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="kbp-h2 text-kbp-ink">Pourquoi choisir nos produits ?</h2>
            <p className="kbp-subtitle mt-4 text-kbp-slate">Des garanties qui font la difference</p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {guarantees.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="text-center">
                  <div
                    className={`kbp-icon-box mx-auto mb-6 ${
                      item.yellow ? "bg-kbp-yellow/35" : "bg-kbp-red/12"
                    }`}
                  >
                    <Icon className={`kbp-icon ${item.yellow ? "text-kbp-yellowDeep" : "text-kbp-red"}`} aria-hidden="true" />
                  </div>
                  <h3 className="kbp-h3 text-kbp-ink">{item.title}</h3>
                  <p className="kbp-subtitle mt-4 text-kbp-slate">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="kbp-hero kbp-section">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="kbp-h2 text-white">Interesse par nos produits ?</h2>
          <p className="kbp-body mx-auto mt-6 max-w-4xl text-white/90">
            Contactez-nous pour recevoir notre catalogue complet avec les tarifs professionnels
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="kbp-btn-primary"
            >
              Demander un devis
              <ArrowRight className="h-7 w-7" aria-hidden="true" />
            </Link>
            <Link
              href="/logistique"
              className="kbp-btn-secondary"
            >
              Notre logistique
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
