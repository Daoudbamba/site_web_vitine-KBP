import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialite",
  description: "Politique de confidentialite de KBP Distribution."
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="kbp-section mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <h1 className="kbp-h2 text-kbp-ink">Politique de confidentialite</h1>

      <div className="kbp-subtitle mt-8 space-y-5 text-kbp-slate">
        <p>
          Nous collectons uniquement les donnees necessaires au traitement de vos demandes de devis: entreprise, email, telephone et message.
        </p>
        <p>
          Finalite: repondre a votre demande commerciale et assurer le suivi de la relation client.
        </p>
        <p>
          Base legale: interet legitime et/ou mesures precontractuelles a votre demande.
        </p>
        <p>
          Duree de conservation: a definir selon votre politique interne (ex: 12 a 36 mois apres dernier contact).
        </p>
        <p>
          Destinataires: equipe commerciale KBP Distribution et sous-traitants techniques strictement necessaires (hebergement, messagerie).
        </p>
        <p>
          Vos droits: acces, rectification, effacement, limitation, opposition, portabilite. Pour exercer vos droits: contact@kbpdistribution.com.
        </p>
      </div>
    </section>
  );
}
