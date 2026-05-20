import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.kbpdistribution.com";

  return [
    "",
    "/a-propos",
    "/produits",
    "/logistique",
    "/contact",
    "/mentions-legales",
    "/politique-confidentialite",
    "/politique-cookies",
    "/cgv"
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8
  }));
}
