import Link from "next/link";
import { navLinks, products } from "@/lib/site-data";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="bg-kbp-night text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="mb-6 inline-block rounded-2xl bg-white px-4 py-2">
            <Logo variant="color" />
          </div>
          <p className="max-w-xs text-slate-300">
            Importation et distribution de produits alimentaires premium en Europe avec logistique integree.
          </p>
        </div>

        <div>
          <h2 className="mb-5 font-display text-2xl font-medium">Navigation</h2>
          <ul className="space-y-3 text-slate-300">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 font-display text-2xl font-medium">Nos produits</h2>
          <ul className="space-y-3 text-slate-300">
            {products.map((item) => (
              <li key={item.slug}>{item.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 font-display text-2xl font-medium">Contact</h2>
          <ul className="space-y-3 text-slate-300">
            <li>+33 641 139 439</li>
            <li>kaborepoko@yahoo.es</li> 
            <li>Lun - Ven : 9h - 18h</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-7 text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 KBP Distribution. Tous droits reserves.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/mentions-legales" className="hover:text-white">
              Mentions legales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-white">
              Politique de confidentialite
            </Link>
            <Link href="/politique-cookies" className="hover:text-white">
              Politique de cookies
            </Link>
            <Link href="/cgv" className="hover:text-white">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
