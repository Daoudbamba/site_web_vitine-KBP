import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez KBP Distribution pour demander un devis B2B."
};

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div>
        <h1 className="font-display text-6xl font-semibold text-kbp-ink">Demander un devis</h1>
        <p className="mt-5 max-w-xl text-2xl text-kbp-slate">
          Parlons de vos besoins en distribution alimentaire: produits, volumes, frequence et zones de livraison.
        </p>
        <div className="mt-8 rounded-3xl bg-kbp-red p-8 text-white">
          <h2 className="font-display text-3xl font-semibold">Informations directes</h2>
          <ul className="mt-5 space-y-2 text-lg text-white/90">
            <li>Email: contact@kbpdistribution.com</li>
            <li>Telephone: +33 (0)X XX XX XX XX</li>
            <li>Disponibilite: Lun - Ven, 9h - 18h</li>
            <li>Zones: France, Belgique, Espagne</li>
          </ul>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
