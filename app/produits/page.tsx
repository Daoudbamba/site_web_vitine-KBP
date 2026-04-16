import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Box, CheckCheck, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Produits",
  description: "Catalogue premium KBP Distribution avec formats professionnels pour clients B2B."
};

export default function ProductsPage() {
  const categories = [
    { label: "Arachides", count: 2, yellow: false },
    { label: "Arachides sucrees", count: 2, yellow: true },
    { label: "Specialites", count: 1, yellow: false },
    { label: "Produits africains", count: 1, yellow: true }
  ] as const;

  const productSections = [
    {
      name: "Arachides fraiches",
      category: "Arachides",
      formats: ["5kg", "10kg"],
      description:
        "Arachides fraiches de qualite premium, parfaites pour la revente en magasin ou la transformation. Conditionnement professionnel adapte aux besoins des grossistes et distributeurs.",
      features: [
        "Qualite superieure garantie",
        "Fraicheur optimale",
        "Tracabilite complete",
        "Conditionnement adapte au B2B"
      ],
      image: "/images/hero-kbp.png"
    },
    {
      name: "Arachides grillees",
      category: "Arachides",
      formats: ["300g"],
      description:
        "Arachides parfaitement grillees, pretes a la consommation. Format 300g ideal pour la vente au detail en supermarche. Gout authentique et texture croustillante.",
      features: [
        "Torrefaction artisanale",
        "Sans additifs artificiels",
        "Packaging attractif",
        "Longue conservation"
      ],
      image: "/images/product-grid-2.png"
    }
  ] as const;

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
      <section className="bg-kbp-red text-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <h1 className="font-display text-6xl font-semibold leading-tight sm:text-7xl">Notre gamme de produits</h1>
          <p className="mt-6 max-w-5xl text-2xl text-white/90 sm:text-3xl">
            Decouvrez notre selection de produits alimentaires premium, soigneusement choisis pour repondre aux
            exigences des professionnels
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-kbp-panel py-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-4 sm:px-6 lg:px-8">
          {categories.map((item) => (
            <div
              key={item.label}
              className={`inline-flex items-center gap-3 rounded-full px-8 py-3 text-2xl ${
                item.yellow ? "bg-kbp-yellow/35 text-yellow-700" : "bg-kbp-red/12 text-kbp-red"
              }`}
            >
              <Package className="h-6 w-6" aria-hidden="true" />
              <span>
                {item.label} <span className="opacity-70">({item.count})</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-kbp-panel py-14 sm:py-16">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
          {productSections.map((item, index) => {
            const reverse = index % 2 === 1;
            return (
              <article key={item.name} className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
                <div className={`grid lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="relative min-h-[22rem] sm:min-h-[28rem]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <p className="absolute left-5 top-5 rounded-full bg-white px-6 py-2 text-2xl text-kbp-red">{item.category}</p>
                  </div>

                  <div className="p-8 sm:p-10 lg:p-12">
                    <h2 className="font-display text-6xl font-semibold text-kbp-ink">{item.name}</h2>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {item.formats.map((format) => (
                        <span key={format} className="rounded-full bg-kbp-yellow/35 px-5 py-2 text-2xl text-yellow-700">
                          {format}
                        </span>
                      ))}
                    </div>

                    <p className="mt-8 text-2xl leading-relaxed text-kbp-slate sm:text-3xl">{item.description}</p>

                    <ul className="mt-8 space-y-4 text-2xl text-kbp-slate sm:text-3xl">
                      {item.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-4">
                          <CheckCheck className="h-8 w-8 text-kbp-red" aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="mt-9 inline-flex items-center gap-3 rounded-2xl bg-kbp-red px-8 py-4 text-2xl font-semibold text-white transition hover:bg-kbp-redDark"
                    >
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

      <section className="bg-kbp-panel py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-6xl font-semibold text-kbp-ink sm:text-7xl">Pourquoi choisir nos produits ?</h2>
            <p className="mt-4 text-2xl text-kbp-slate sm:text-3xl">Des garanties qui font la difference</p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {guarantees.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="text-center">
                  <div
                    className={`mx-auto mb-6 grid h-24 w-24 place-items-center rounded-3xl ${
                      item.yellow ? "bg-kbp-yellow/35" : "bg-kbp-red/12"
                    }`}
                  >
                    <Icon className={`h-12 w-12 ${item.yellow ? "text-yellow-700" : "text-kbp-red"}`} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-5xl font-semibold text-kbp-ink">{item.title}</h3>
                  <p className="mt-4 text-2xl text-kbp-slate sm:text-3xl">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-kbp-red py-20 text-white sm:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-6xl font-semibold sm:text-7xl">Interesse par nos produits ?</h2>
          <p className="mx-auto mt-6 max-w-4xl text-2xl text-white/90 sm:text-3xl">
            Contactez-nous pour recevoir notre catalogue complet avec les tarifs professionnels
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-2xl bg-kbp-yellow px-9 py-4 text-2xl font-semibold text-kbp-ink transition hover:brightness-95"
            >
              Demander un devis
              <ArrowRight className="h-7 w-7" aria-hidden="true" />
            </Link>
            <Link
              href="/logistique"
              className="inline-flex items-center rounded-2xl border border-white/40 bg-white/10 px-9 py-4 text-2xl font-semibold text-white"
            >
              Notre logistique
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
