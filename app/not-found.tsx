import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <p className="text-xl font-semibold uppercase tracking-widest text-kbp-red">Erreur 404</p>
      <h1 className="mt-4 font-display text-6xl font-semibold text-kbp-ink">Page introuvable</h1>
      <p className="mt-4 text-xl text-kbp-slate">La page demandee n&apos;existe pas ou a ete deplacee.</p>
      <Link href="/" className="mt-8 inline-flex rounded-2xl bg-kbp-red px-6 py-3 text-lg font-semibold text-white">
        Retour a l&apos;accueil
      </Link>
    </section>
  );
}
