import Image from "next/image";
import type { Product } from "@/lib/site-data";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-72 items-center justify-center bg-kbp-panel p-4">
        <Image src={product.image} alt={product.name} width={280} height={280} className="h-full w-auto object-contain" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="space-y-3 p-8">
        <p className="text-base font-medium text-kbp-yellowDeep md:text-lg">{product.format}</p>
        <h3 className="kbp-h3 text-kbp-ink">{product.name}</h3>
        <p className="text-base text-kbp-slate md:text-lg">{product.summary}</p>
      </div>
    </article>
  );
}
