import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, BadgeCheck, Eye, Globe, Handshake, ScanSearch, Target, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "A propos",
  description: "Presentation de KBP Distribution, mission, vision, valeurs, couverture europeenne et conformite."
};

export default function AboutPage() {
  const values = [
    {
      title: "Qualite",
      description: "Selection rigoureuse et controle constant de nos produits",
      icon: Award,
      yellow: false
    },
    {
      title: "Service client",
      description: "Accompagnement personnalise et reactivite a toute epreuve",
      icon: Handshake,
      yellow: true
    },
    {
      title: "Fiabilite",
      description: "Engagement tenu et ponctualite dans nos livraisons",
      icon: Globe,
      yellow: false
    },
    {
      title: "Innovation",
      description: "Amelioration continue de nos processus et services",
      icon: TrendingUp,
      yellow: true
    }
  ] as const;

  const coverage = [
    {
      code: "FR",
      country: "France",
      description: "Couverture nationale avec des delais de livraison optimises",
      badgeClass: "bg-gradient-to-br from-blue-500 via-violet-400 to-red-500"
    },
    {
      code: "BE",
      country: "Belgique",
      description: "Service complet dans toutes les regions belges",
      badgeClass: "bg-gradient-to-br from-black via-yellow-500 to-orange-500"
    },
    {
      code: "ES",
      country: "Espagne",
      description: "Distribution efficace sur l&apos;ensemble du territoire espagnol",
      badgeClass: "bg-gradient-to-br from-orange-500 via-amber-400 to-orange-500"
    }
  ] as const;

  const certifications = [
    {
      title: "Normes CE",
      description: "Conformite europeenne",
      icon: Award,
      yellow: false
    },
    {
      title: "Tracabilite",
      description: "Suivi complet des produits",
      icon: ScanSearch,
      yellow: true
    },
    {
      title: "Qualite alimentaire",
      description: "Standards internationaux",
      icon: BadgeCheck,
      yellow: false
    }
  ] as const;

  return (
    <div>
      <section className="bg-kbp-red text-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <h1 className="font-display text-6xl font-semibold leading-tight sm:text-7xl">A propos de KBP Distribution</h1>
          <p className="mt-6 max-w-4xl text-2xl text-white/90 sm:text-3xl">
            Specialiste de l&apos;importation et de la distribution de produits alimentaires premium en Europe
          </p>
        </div>
      </section>

      <section className="bg-kbp-panel py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:px-8">
          <div>
            <p className="inline-flex rounded-full bg-kbp-red/12 px-6 py-2 text-2xl font-medium text-kbp-red">Notre histoire</p>
            <h2 className="mt-8 font-display text-6xl font-semibold leading-[1.08] text-kbp-ink sm:text-7xl">
              Une expertise au service de la qualite
            </h2>
            <div className="mt-8 space-y-6 text-xl leading-relaxed text-kbp-slate sm:text-[2rem] sm:leading-relaxed lg:text-4xl lg:leading-relaxed">
              <p>
                  KBP Distribution est une entreprise specialisee dans l&apos;importation et la distribution de produits
                alimentaires de qualite en Europe.
              </p>
              <p>
                Forte d&apos;une expertise reconnue dans le secteur, nous nous engageons a offrir a nos clients
                professionnels des produits authentiques et premium.
              </p>
              <p>
                Notre mission est de faciliter l&apos;acces aux meilleurs produits alimentaires pour les grossistes,
                supermarches et distributeurs en France, Belgique et Espagne.
              </p>
              <p>
                Grace a notre infrastructure logistique propre, nous garantissons une disponibilite constante et des
                livraisons rapides.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-3 -top-3 h-40 w-40 rounded-3xl bg-kbp-red/20" aria-hidden="true" />
            <div className="absolute -bottom-4 -right-4 h-40 w-40 rounded-3xl bg-kbp-yellow/55" aria-hidden="true" />
            <div className="relative h-[28rem] overflow-hidden rounded-[2rem] shadow-soft sm:h-[34rem]">
              <Image
                src="/images/hero-kbp.png"
                alt="Produits KBP Distribution"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-kbp-panel pb-16 sm:pb-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-3xl bg-white p-10 shadow-soft">
            <div className="mb-8 grid h-24 w-24 place-items-center rounded-3xl bg-kbp-red/12">
              <Target className="h-12 w-12 text-kbp-red" aria-hidden="true" />
            </div>
            <h2 className="font-display text-5xl font-semibold text-kbp-ink">Notre mission</h2>
            <p className="mt-5 text-2xl leading-relaxed text-kbp-slate sm:text-3xl lg:text-4xl">
              Devenir le partenaire de reference pour la distribution de produits alimentaires premium en Europe, en
              offrant un service de qualite irreprochable et des solutions logistiques adaptees aux besoins de chaque
              client professionnel.
            </p>
          </article>

          <article className="rounded-3xl bg-white p-10 shadow-soft">
            <div className="mb-8 grid h-24 w-24 place-items-center rounded-3xl bg-kbp-yellow/35">
              <Eye className="h-12 w-12 text-yellow-700" aria-hidden="true" />
            </div>
            <h2 className="font-display text-5xl font-semibold text-kbp-ink">Notre vision</h2>
            <p className="mt-5 text-2xl leading-relaxed text-kbp-slate sm:text-3xl lg:text-4xl">
              Etendre notre presence en Europe tout en maintenant notre engagement envers la qualite et le service
              client. Nous aspirons a etre reconnus comme le distributeur le plus fiable et le plus innovant du
              marche.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-kbp-panel py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-6xl font-semibold text-kbp-ink sm:text-7xl">Nos valeurs</h2>
            <p className="mt-4 text-2xl text-kbp-slate sm:text-3xl">Les principes qui guident notre action au quotidien</p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => {
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

      <section className="bg-kbp-panel py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="font-display text-6xl font-semibold text-kbp-ink sm:text-7xl">Notre couverture europeenne</h2>
            <p className="mt-4 text-2xl text-kbp-slate sm:text-3xl">Nous operons dans trois pays strategiques d&apos;Europe</p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {coverage.map((item) => (
              <article key={item.code} className="rounded-3xl bg-white p-10 text-center shadow-soft">
                <div className={`mx-auto grid h-28 w-28 place-items-center rounded-full text-5xl font-semibold text-white ${item.badgeClass}`}>
                  {item.code}
                </div>
                <h3 className="mt-6 font-display text-5xl font-semibold text-kbp-ink">{item.country}</h3>
                <p className="mt-4 text-2xl text-kbp-slate sm:text-3xl">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-kbp-panel py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-6xl font-semibold text-kbp-ink sm:text-7xl">Certifications et conformite</h2>
            <p className="mt-4 text-2xl text-kbp-slate sm:text-3xl">Nous respectons les normes les plus strictes</p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-3xl bg-white p-10 text-center shadow-soft">
                  <div
                    className={`mx-auto mb-6 grid h-24 w-24 place-items-center rounded-full ${
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
          <h2 className="font-display text-6xl font-semibold sm:text-7xl">
            Rejoignez nos clients <span className="font-bold">satisfaits</span>
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-2xl text-white/90 sm:text-3xl">
            Decouvrez comment KBP Distribution peut devenir votre partenaire de confiance
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-2xl bg-kbp-yellow px-9 py-4 text-2xl font-semibold text-kbp-ink transition hover:brightness-95"
            >
              Nous contacter
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
