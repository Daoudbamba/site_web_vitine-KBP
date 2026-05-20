import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de cookies",
  description: "Politique de cookies de KBP Distribution."
};

export default function PolitiqueCookiesPage() {
  return (
    <section className="kbp-section mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <h1 className="kbp-h2 text-kbp-ink">Politique de cookies</h1>

      <div className="kbp-subtitle mt-8 space-y-5 text-kbp-slate">
        <p>
          Ce site peut utiliser des cookies techniques necessaires au bon fonctionnement et, selon votre choix, des cookies de mesure d&apos;audience.
        </p>
        <p>
          Vous pouvez configurer votre navigateur pour bloquer les cookies. Certaines fonctionnalites peuvent alors etre degradees.
        </p>
        <p>
          Si des outils analytiques sont actives, mettez en place un bandeau de consentement conforme avant tout depot de cookie non essentiel.
        </p>
      </div>
    </section>
  );
}
