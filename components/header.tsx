"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/site-data";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="bg-kbp-red text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-sm sm:px-6 lg:px-8">
          <p className="font-medium">+33 (0)X XX XX XX XX · contact@kbpdistribution.com</p>
          <p className="hidden font-medium sm:block">France · Belgique · Espagne</p>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Aller a la page d'accueil">
          <span className="grid h-14 w-14 place-items-center rounded-xl bg-kbp-red text-3xl font-semibold text-white">K</span>
          <span>
            <span className="block font-display text-3xl font-bold text-kbp-ink">KBP Distribution</span>
            <span className="block text-sm text-kbp-slate">Import & Distribution</span>
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-5 py-3 text-lg font-medium transition ${
                  isActive ? "bg-kbp-red text-white" : "text-kbp-ink hover:bg-kbp-panel"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="rounded-2xl bg-kbp-yellow px-5 py-3 text-base font-semibold text-kbp-ink transition hover:brightness-95"
        >
          Demander un devis
        </Link>
      </div>
    </header>
  );
}
