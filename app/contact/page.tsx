import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez KBP Distribution pour demander un devis B2B."
};

export default function ContactPage() {
  return (
    <section className="kbp-section mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div>
        <h1 className="kbp-h2 text-kbp-ink">Demander un devis</h1>
        <p className="kbp-body mt-5 max-w-xl text-kbp-slate">
          Parlons de vos besoins en distribution alimentaire: produits, volumes, frequence et zones de livraison.
        </p>
        <div className="mt-8 rounded-3xl bg-kbp-red p-8 text-white">
          <h2 className="kbp-h3 text-white">Informations directes</h2>
          <ul className="mt-5 space-y-2 text-base text-white/90 md:text-lg">
            <li>Email: kaborepoko@yahoo.es</li>
            <li>Telephone: +33 641 139 439</li>
            <li>Disponibilite: Lun - Lun, 9h - 18h</li>
            <li>Zones: France, Belgique, Espagne</li>
          </ul>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
