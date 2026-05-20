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
      <section className="kbp-hero">
        <div className="kbp-hero-inner mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="fade-up inline-flex rounded-full bg-kbp-yellow px-5 py-2 text-lg font-semibold text-kbp-ink">
              Importation & Distribution Premium
            </p>
            <h1 className="kbp-h1 fade-up-delay-1 mt-6">
              KBP Distribution
            </h1>
            <p className="kbp-body fade-up-delay-2 mt-6 max-w-2xl text-white/90">
              Votre partenaire de confiance pour l&apos;importation et la distribution de produits alimentaires de qualite en Europe.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="kbp-btn-primary">
                Demander un devis
              </Link>
              <Link href="/produits" className="kbp-btn-secondary">
                Decouvrir nos produits
              </Link>
            </div>
            <ul className="mt-8 flex flex-nowrap items-center gap-3 text-sm sm:gap-4 sm:text-base md:gap-5 md:text-lg">
              {heroFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <li key={feature.label} className="inline-flex items-center gap-2 text-white sm:gap-3">
                    <Icon className="h-5 w-5 text-kbp-yellow sm:h-6 sm:w-6 md:h-7 md:w-7" aria-hidden="true" />
                    <span className="font-medium text-white">{feature.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/logo-kbp.png"
              alt="KBP Distribution — L'arachide fraîche, nos produits, votre confiance"
              width={520}
              height={520}
              priority
              className="w-full max-w-[420px] drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-kbp-panel">
        <div className="kbp-section-tight mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {highlights.map((item) => (
            <article key={item.label} className="rounded-3xl bg-white p-8 text-center shadow-soft">
              <p className="font-display text-6xl font-semibold text-kbp-red">{item.value}</p>
              <p className="mt-3 text-2xl text-kbp-slate">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="kbp-section mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="kbp-h2 text-kbp-ink">Notre gamme de produits</h2>
          <p className="kbp-subtitle mt-4 text-kbp-slate">
            Des produits alimentaires premium selectionnes pour repondre aux exigences des professionnels.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/produits" className="kbp-btn-danger">
            Voir tous les produits
          </Link>
        </div>
      </section>

      <section className="bg-kbp-panel">
        <div className="kbp-section mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="kbp-h2 text-kbp-ink">Pourquoi choisir KBP Distribution ?</h2>
            <p className="kbp-subtitle mt-4 text-kbp-slate">Un partenaire fiable pour vos besoins en distribution alimentaire</p>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => {
              const Icon = reasonIcons[index] ?? CheckCircle2;
              const isYellow = index % 2 === 1;

              return (
              <article key={reason.title} className="rounded-3xl bg-white p-8 shadow-soft">
                <div
                  className={`kbp-icon-box mb-6 ${
                    isYellow ? "bg-kbp-yellow/35" : "bg-kbp-red/12"
                  }`}
                >
                  <Icon className={`kbp-icon ${isYellow ? "text-kbp-yellowDeep" : "text-kbp-red"}`} aria-hidden="true" />
                </div>
                <h3 className="kbp-h3 text-kbp-ink">{reason.title}</h3>
                <p className="kbp-subtitle mt-3 text-kbp-slate">{reason.description}</p>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="kbp-hero">
        <div className="kbp-section mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="kbp-h2 text-white">Pret a travailler ensemble ?</h2>
          <p className="kbp-body mx-auto mt-5 max-w-3xl text-white/90">
            Contactez-nous des aujourd&apos;hui pour discuter de vos besoins et recevoir un devis personnalise.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="kbp-btn-primary">
              Demander un devis
            </Link>
            <Link href="/a-propos" className="kbp-btn-secondary">
              En savoir plus
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
