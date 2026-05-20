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
      <section className="kbp-hero">
        <div className="kbp-hero-inner mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="kbp-h1">A propos de KBP Distribution</h1>
          <p className="kbp-body mt-6 max-w-4xl text-white/90">
            Specialiste de l&apos;importation et de la distribution de produits alimentaires premium en Europe
          </p>
        </div>
      </section>

      <section className="bg-white kbp-section">
        <div className="mx-auto grid max-w-7xl gap-0 overflow-hidden rounded-[2rem] shadow-soft px-0 sm:px-0 lg:grid-cols-2 lg:items-stretch">
          {/* Côté texte — fond blanc */}
          <div className="p-10 sm:p-14 lg:p-16">
            <p className="inline-flex rounded-full bg-kbp-red/12 px-6 py-2 text-2xl font-medium text-kbp-red">Notre histoire</p>
            <h2 className="kbp-h2 mt-8 text-kbp-ink">
              Une expertise au service de la qualite
            </h2>
            <div className="kbp-body mt-8 space-y-6 text-kbp-slate">
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

          {/* Côté logo — fond rouge */}
          <div className="kbp-hero flex items-center justify-center p-10 sm:p-14 lg:p-16">
            <div className="relative">
              <div className="absolute -left-3 -top-3 h-32 w-32 rounded-3xl bg-white/10" aria-hidden="true" />
              <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-3xl bg-kbp-yellow/30" aria-hidden="true" />
              <div className="relative flex h-[22rem] w-[22rem] items-center justify-center overflow-hidden rounded-[2rem] bg-white shadow-soft sm:h-[28rem] sm:w-[28rem]">
                <Image
                  src="/images/logo-kbp.png"
                  alt="KBP Distribution"
                  width={480}
                  height={480}
                  className="w-4/5 max-w-sm object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-kbp-panel pb-14 md:pb-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-3xl bg-white p-10 shadow-soft">
            <div className="mb-8 grid h-24 w-24 place-items-center rounded-3xl bg-kbp-red/12">
              <Target className="h-12 w-12 text-kbp-red" aria-hidden="true" />
            </div>
            <h2 className="kbp-h2 text-kbp-ink">Notre mission</h2>
            <p className="kbp-body mt-5 text-kbp-slate">
              Devenir le partenaire de reference pour la distribution de produits alimentaires premium en Europe, en
              offrant un service de qualite irreprochable et des solutions logistiques adaptees aux besoins de chaque
              client professionnel.
            </p>
          </article>

          <article className="rounded-3xl bg-white p-10 shadow-soft">
            <div className="mb-8 grid h-24 w-24 place-items-center rounded-3xl bg-kbp-yellow/35">
              <Eye className="h-12 w-12 text-kbp-yellowDeep" aria-hidden="true" />
            </div>
            <h2 className="kbp-h2 text-kbp-ink">Notre vision</h2>
            <p className="kbp-body mt-5 text-kbp-slate">
              Etendre notre presence en Europe tout en maintenant notre engagement envers la qualite et le service
              client. Nous aspirons a etre reconnus comme le distributeur le plus fiable et le plus innovant du
              marche.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-kbp-panel kbp-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="kbp-h2 text-kbp-ink">Nos valeurs</h2>
            <p className="kbp-subtitle mt-4 text-kbp-slate">Les principes qui guident notre action au quotidien</p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => {
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

      <section className="bg-kbp-panel kbp-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="kbp-h2 text-kbp-ink">Notre couverture europeenne</h2>
            <p className="kbp-subtitle mt-4 text-kbp-slate">Nous operons dans trois pays strategiques d&apos;Europe</p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {coverage.map((item) => (
              <article key={item.code} className="rounded-3xl bg-white p-10 text-center shadow-soft">
                <div className={`mx-auto grid h-28 w-28 place-items-center rounded-full text-5xl font-semibold text-white ${item.badgeClass}`}>
                  {item.code}
                </div>
                <h3 className="kbp-h3 mt-6 text-kbp-ink">{item.country}</h3>
                <p className="kbp-subtitle mt-4 text-kbp-slate">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-kbp-panel kbp-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="kbp-h2 text-kbp-ink">Certifications et conformite</h2>
            <p className="kbp-subtitle mt-4 text-kbp-slate">Nous respectons les normes les plus strictes</p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-3xl bg-white p-10 text-center shadow-soft">
                  <div
                    className={`kbp-icon-box mx-auto mb-6 rounded-full ${
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
          <h2 className="kbp-h2 text-white">
            Rejoignez nos clients <span className="font-bold">satisfaits</span>
          </h2>
          <p className="kbp-body mx-auto mt-6 max-w-4xl text-white/90">
            Decouvrez comment KBP Distribution peut devenir votre partenaire de confiance
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="kbp-btn-primary"
            >
              Nous contacter
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
