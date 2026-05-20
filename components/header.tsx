"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/site-data";
import { Logo } from "@/components/logo";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="bg-kbp-red text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-sm sm:px-6 lg:px-8">
          <p className="font-medium">+33 641 139 439 · kaborepoko@yahoo.es</p>
          <p className="hidden font-medium sm:block">France · Belgique · Espagne</p>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Aller a la page d'accueil">
          <Logo variant="color" />
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-[10px] px-4 py-2 text-base font-normal transition ${
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
          className="rounded-[10px] bg-kbp-yellow px-6 py-3 text-base font-normal text-kbp-ink transition hover:brightness-95"
        >
          Demander un devis
        </Link>
      </div>
    </header>
  );
}
