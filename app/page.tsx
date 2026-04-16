import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Clock3, Globe, ShieldCheck, Truck, CheckCheck, ArrowRight } from "lucide-react";
import { highlights, products, reasons } from "@/lib/site-data";
import { ProductCard } from "@/components/product-card";

export default function HomePage() {
  const heroFeatures = [
    { label: "Logistique propre", icon: CheckCircle2 },
    { label: "Livraison 24-48h", icon: Clock3 },
    { label: "Qualite garantie", icon: ShieldCheck }
  ] as const;

  const reasonIcons = [Globe, Truck, ShieldCheck, Clock3, CheckCheck, ArrowRight] as const;

  return (
    <div>
      <section className="bg-kbp-red text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="fade-up inline-flex rounded-full bg-kbp-yellow px-5 py-2 text-lg font-semibold text-kbp-ink">
              Importation & Distribution Premium
            </p>
            <h1 className="fade-up-delay-1 mt-6 font-display text-6xl font-semibold leading-[1.05] sm:text-7xl">
              KBP Distribution
            </h1>
            <p className="fade-up-delay-2 mt-6 max-w-2xl text-2xl text-white/90">
              Votre partenaire de confiance pour l&apos;importation et la distribution de produits alimentaires de qualite en Europe.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="rounded-2xl bg-kbp-yellow px-8 py-4 text-xl font-semibold text-kbp-ink">
                Demander un devis
              </Link>
              <Link
                href="/produits"
                className="rounded-2xl border border-white/35 bg-white/10 px-8 py-4 text-xl font-semibold text-white"
              >
                Decouvrir nos produits
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap items-center gap-8 text-2xl">
              {heroFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <li key={feature.label} className="inline-flex items-center gap-3 text-kbp-yellow">
                    <Icon className="h-8 w-8" aria-hidden="true" />
                    <span className="font-medium text-kbp-yellow">{feature.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="relative h-[28rem] overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl">
            <Image
              src="/images/hero-kbp.png"
              alt="Stock de produits KBP Distribution"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-kbp-panel">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {highlights.map((item) => (
            <article key={item.label} className="rounded-3xl bg-white p-8 text-center shadow-soft">
              <p className="font-display text-6xl font-semibold text-kbp-red">{item.value}</p>
              <p className="mt-3 text-2xl text-kbp-slate">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-6xl font-semibold text-kbp-ink">Notre gamme de produits</h2>
          <p className="mt-4 text-2xl text-kbp-slate">
            Des produits alimentaires premium selectionnes pour repondre aux exigences des professionnels.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/produits" className="inline-flex rounded-2xl bg-kbp-red px-10 py-4 text-xl font-semibold text-white">
            Voir tous les produits
          </Link>
        </div>
      </section>

      <section className="bg-kbp-panel">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-6xl font-semibold text-kbp-ink">Pourquoi choisir KBP Distribution ?</h2>
            <p className="mt-4 text-2xl text-kbp-slate">Un partenaire fiable pour vos besoins en distribution alimentaire</p>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => {
              const Icon = reasonIcons[index] ?? CheckCircle2;
              const isYellow = index % 2 === 1;

              return (
              <article key={reason.title} className="rounded-3xl bg-white p-8 shadow-soft">
                <div
                  className={`mb-6 grid h-16 w-16 place-items-center rounded-2xl ${
                    isYellow ? "bg-kbp-yellow/35" : "bg-kbp-red/12"
                  }`}
                >
                  <Icon className={`h-9 w-9 ${isYellow ? "text-yellow-700" : "text-kbp-red"}`} aria-hidden="true" />
                </div>
                <h3 className="font-display text-4xl font-semibold text-kbp-ink">{reason.title}</h3>
                <p className="mt-3 text-xl text-kbp-slate">{reason.description}</p>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-kbp-red">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-6xl font-semibold text-white">Pret a travailler ensemble ?</h2>
          <p className="mx-auto mt-5 max-w-3xl text-2xl text-white/90">
            Contactez-nous des aujourd&apos;hui pour discuter de vos besoins et recevoir un devis personnalise.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="rounded-2xl bg-kbp-yellow px-8 py-4 text-xl font-semibold text-kbp-ink">
              Demander un devis
            </Link>
            <Link href="/a-propos" className="rounded-2xl border border-white/40 px-8 py-4 text-xl font-semibold text-white">
              En savoir plus
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
