import Image from "next/image";
import type { Product } from "@/lib/site-data";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-72">
        <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="space-y-3 p-8">
        <p className="text-xl font-medium text-yellow-700">{product.format}</p>
        <h3 className="font-display text-4xl font-semibold text-kbp-ink">{product.name}</h3>
        <p className="text-lg text-kbp-slate">{product.summary}</p>
      </div>
    </article>
  );
}
