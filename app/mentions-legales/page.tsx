import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions legales",
  description: "Mentions legales du site KBP Distribution."
};

export default function MentionsLegalesPage() {
  return (
    <section className="kbp-section mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <h1 className="kbp-h2 text-kbp-ink">Mentions legales</h1>

      <div className="kbp-subtitle mt-8 space-y-5 text-kbp-slate">
        <p>
          Editeur du site: KBP Distribution
        </p>
        <p>
          Responsable de publication: KBP Distribution
        </p>
        <p>
          Contact: contact@kbpdistribution.com
        </p>
        <p>
          Hebergement: a completer selon votre fournisseur (Vercel, OVH, autre).
        </p>
        <p>
          Propriete intellectuelle: l&apos;ensemble des contenus (textes, images, logos) est protege. Toute reproduction sans autorisation prealable est interdite.
        </p>
      </div>
    </section>
  );
}
