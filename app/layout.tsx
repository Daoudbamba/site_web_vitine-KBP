import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kbpdistribution.com"),
  title: {
    default: "KBP Distribution | Importation & Distribution alimentaire B2B",
    template: "%s | KBP Distribution"
  },
  description:
    "KBP Distribution accompagne grossistes, supermarches et distributeurs alimentaires en France, Belgique et Espagne.",
  openGraph: {
    title: "KBP Distribution",
    description: "Importation et distribution de produits alimentaires premium en Europe.",
    url: "https://www.kbpdistribution.com",
    siteName: "KBP Distribution",
    locale: "fr_FR",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} font-body antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
