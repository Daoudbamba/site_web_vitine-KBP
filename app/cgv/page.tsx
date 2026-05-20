import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CGV",
  description: "Conditions generales de vente de KBP Distribution."
};

export default function CgvPage() {
  return (
    <section className="kbp-section mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <h1 className="kbp-h2 text-kbp-ink">Conditions generales de vente (CGV)</h1>

      <div className="kbp-subtitle mt-8 space-y-5 text-kbp-slate">
        <p>
          Cette page est un emplacement de publication des CGV B2B. Ajoutez ici votre version contractuelle validee juridiquement.
        </p>
        <p>
          Les CGV doivent notamment preciser: conditions tarifaires, modalites de paiement, livraison, transfert des risques, retours, responsabilite, droit applicable et juridiction competente.
        </p>
      </div>
    </section>
  );
}
