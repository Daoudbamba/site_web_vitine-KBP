import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Box,
  CheckCheck,
  CircleGauge,
  Clock3,
  Globe,
  MapPin,
  Package,
  Shield,
  Truck
} from "lucide-react";

export const metadata: Metadata = {
  title: "Logistique",
  description: "Services logistiques professionnels KBP Distribution en France, Belgique et Espagne."
};

export default function LogisticsPage() {
  const zones = [
    {
      flag: "FR",
      country: "France",
      delay: "24-48h",
      title: "100% du territoire",
      description: "Livraison express dans toute la France metropolitaine"
    },
    {
      flag: "BE",
      country: "Belgique",
      delay: "24-48h",
      title: "Toutes regions",
      description: "Service complet en Flandre, Wallonie et Bruxelles"
    },
    {
      flag: "ES",
      country: "Espagne",
      delay: "48-72h",
      title: "Principales villes",
      description: "Couverture optimisee des zones metropolitaines"
    }
  ] as const;

  const process = [
    {
      step: "1",
      title: "Commande",
      description: "Passez votre commande par telephone, email ou via notre formulaire de contact",
      icon: Package
    },
    {
      step: "2",
      title: "Preparation",
      description: "Votre commande est preparee dans nos entrepots avec un controle qualite rigoureux",
      icon: CheckCheck
    },
    {
      step: "3",
      title: "Expedition",
      description: "Prise en charge par notre flotte logistique propre pour une livraison garantie",
      icon: Truck
    },
    {
      step: "4",
      title: "Livraison",
      description: "Reception de votre commande dans les delais annonces avec suivi en temps reel",
      icon: MapPin
    }
  ] as const;

  const advantages = [
    {
      title: "Flotte propre",
      description: "Notre infrastructure logistique nous permet de controler l'ensemble de la chaine de livraison",
      icon: Truck,
      yellow: false
    },
    {
      title: "Entrepots strategiques",
      description: "Positionnement optimal de nos centres de distribution pour des livraisons rapides",
      icon: Box,
      yellow: true
    },
    {
      title: "Suivi en temps reel",
      description: "Tracking de vos commandes et notifications a chaque etape de la livraison",
      icon: MapPin,
      yellow: false
    },
    {
      title: "Conditionnement adapte",
      description: "Emballages professionnels garantissant l'integrite de vos produits",
      icon: Shield,
      yellow: true
    },
    {
      title: "Horaires flexibles",
      description: "Creneaux de livraison adaptes aux contraintes de votre activite",
      icon: Clock3,
      yellow: false
    },
    {
      title: "Service fiable",
      description: "Taux de ponctualite de 98% et gestion proactive des imprevus",
      icon: CircleGauge,
      yellow: true
    }
  ] as const;

  const faq = [
    {
      question: "Quels sont les frais de livraison ?",
      answer:
        "Les frais de livraison varient en fonction de la destination et du volume commande. Nous offrons la livraison gratuite a partir d'un certain montant de commande. Contactez-nous pour connaitre les conditions applicables a votre situation."
    },
    {
      question: "Comment suivre ma commande ?",
      answer:
        "Des l'expedition de votre commande, vous recevez un numero de suivi par email. Vous pouvez nous contacter a tout moment pour connaitre l'etat d'avancement de votre livraison."
    },
    {
      question: "Puis-je choisir mon creneau de livraison ?",
      answer:
        "Oui, nous proposons des creneaux de livraison flexibles adaptes a vos contraintes. Indiquez-nous vos preferences lors de la commande et nous ferons notre maximum pour les respecter."
    },
    {
      question: "Que se passe-t-il en cas de probleme pendant la livraison ?",
      answer:
        "En cas de retard ou de probleme, notre service client vous contacte immediatement pour vous informer et trouver une solution. Nous prenons en charge toute anomalie liee au transport."
    }
  ] as const;

  return (
    <div>
      <section className="bg-kbp-red text-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <h1 className="font-display text-6xl font-semibold leading-tight sm:text-7xl">Logistique professionnelle</h1>
          <p className="mt-6 max-w-5xl text-2xl text-white/90 sm:text-3xl">
            Une infrastructure complete et optimisee pour des livraisons rapides et fiables dans toute l&apos;Europe
          </p>
        </div>
      </section>

      <section className="bg-kbp-panel py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-6xl font-semibold text-kbp-ink sm:text-7xl">Zones de livraison</h2>
            <p className="mt-4 text-2xl text-kbp-slate sm:text-3xl">Une couverture etendue pour servir vos clients en Europe</p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {zones.map((zone) => (
              <article key={zone.country} className="rounded-3xl border border-slate-300 bg-white p-10 text-center shadow-soft">
                <div className="mx-auto inline-flex rounded-xl bg-slate-100 px-4 py-2 text-4xl font-semibold text-kbp-ink">{zone.flag}</div>
                <h3 className="mt-6 font-display text-5xl font-semibold text-kbp-ink">{zone.country}</h3>
                <p className="mt-2 inline-flex items-center gap-2 text-2xl text-kbp-red sm:text-3xl">
                  <Clock3 className="h-7 w-7" aria-hidden="true" />
                  {zone.delay}
                </p>
                <p className="mt-5 text-3xl font-medium text-kbp-ink">{zone.title}</p>
                <p className="mt-4 text-2xl text-kbp-slate sm:text-3xl">{zone.description}</p>
              </article>
            ))}
          </div>

          <article className="mx-auto mt-10 max-w-6xl border-l-8 border-kbp-yellow bg-yellow-50 p-8 sm:p-10">
            <p className="inline-flex items-center gap-3 font-display text-4xl font-semibold text-kbp-ink">
              <Globe className="h-8 w-8 text-yellow-700" aria-hidden="true" />
              Autres destinations
            </p>
            <p className="mt-3 text-2xl leading-relaxed text-kbp-slate sm:text-3xl">
              Vous etes situe en dehors de ces zones ? Contactez-nous pour etudier les possibilites de livraison vers
              votre localisation.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-kbp-panel py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="font-display text-6xl font-semibold text-kbp-ink sm:text-7xl">Notre processus de livraison</h2>
            <p className="mt-4 text-2xl text-kbp-slate sm:text-3xl">De la commande a la livraison, un processus optimise en 4 etapes</p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item, index) => {
              const Icon = item.icon;
              const showConnector = index < process.length - 1;

              return (
                <article key={item.step} className="relative rounded-3xl bg-white p-8 shadow-soft sm:p-10">
                  <div className="mb-8 inline-grid h-24 w-24 place-items-center rounded-3xl bg-kbp-red text-5xl font-semibold text-white">
                    {item.step}
                  </div>
                  {showConnector ? (
                    <span
                      className="absolute right-[-22px] top-20 hidden h-[2px] w-10 bg-kbp-red/20 xl:block"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="mb-6 grid h-20 w-20 place-items-center rounded-3xl bg-kbp-red/12">
                    <Icon className="h-10 w-10 text-kbp-red" aria-hidden="true" />
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
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:px-8">
          <div>
            <h2 className="font-display text-6xl font-semibold leading-[1.08] text-kbp-ink sm:text-7xl">
              Une infrastructure logistique complete
            </h2>
            <div className="mt-8 space-y-6 text-2xl leading-relaxed text-kbp-slate sm:text-3xl">
              <p>
                KBP Distribution dispose de sa propre infrastructure logistique, nous permettant de garantir des delais
                de livraison fiables et competitifs.
              </p>
              <p>
                  Notre flotte de vehicules et nos entrepots strategiquement positionnes nous permettent d&apos;assurer un
                  service de qualite a travers la France, la Belgique et l&apos;Espagne.
              </p>
              <p>
                Nous investissons continuellement dans nos infrastructures pour ameliorer notre efficacite et reduire
                nos delais de livraison.
              </p>
            </div>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-3 rounded-2xl bg-kbp-red px-8 py-4 text-2xl font-semibold text-white transition hover:bg-kbp-redDark"
            >
              Demander un devis
              <ArrowRight className="h-7 w-7" aria-hidden="true" />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -left-3 -top-3 h-40 w-40 rounded-3xl bg-kbp-red/20" aria-hidden="true" />
            <div className="absolute -bottom-4 -right-4 h-40 w-40 rounded-3xl bg-kbp-yellow/55" aria-hidden="true" />
            <div className="relative h-[28rem] overflow-hidden rounded-[2rem] shadow-soft sm:h-[34rem]">
              <Image
                src="/images/hero-kbp.png"
                alt="Infrastructure logistique KBP Distribution"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-kbp-panel py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="font-display text-6xl font-semibold text-kbp-ink sm:text-7xl">Les avantages de notre logistique</h2>
            <p className="mt-4 text-2xl text-kbp-slate sm:text-3xl">Ce qui fait la difference avec KBP Distribution</p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-3xl bg-white p-8 shadow-soft sm:p-10">
                  <div
                    className={`mb-6 grid h-20 w-20 place-items-center rounded-3xl ${
                      item.yellow ? "bg-kbp-yellow/35" : "bg-kbp-red/12"
                    }`}
                  >
                    <Icon className={`h-10 w-10 ${item.yellow ? "text-yellow-700" : "text-kbp-red"}`} aria-hidden="true" />
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
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-6xl font-semibold text-kbp-ink sm:text-7xl">Questions frequentes sur la livraison</h2>

          <div className="mt-12 space-y-6">
            {faq.map((item) => (
              <article key={item.question} className="rounded-3xl bg-slate-100 p-8 sm:p-10">
                <h3 className="font-display text-4xl font-semibold text-kbp-ink">{item.question}</h3>
                <p className="mt-4 text-2xl leading-relaxed text-kbp-slate sm:text-3xl">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-kbp-red py-20 text-white sm:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-display text-6xl font-semibold sm:text-7xl">Besoin d&apos;informations sur nos services logistiques ?</h2>
          <p className="mx-auto mt-6 max-w-4xl text-2xl text-white/90 sm:text-3xl">
            Notre equipe est a votre disposition pour repondre a toutes vos questions
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
              href="/produits"
              className="inline-flex items-center rounded-2xl border border-white/40 bg-white/10 px-9 py-4 text-2xl font-semibold text-white"
            >
              Voir nos produits
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
