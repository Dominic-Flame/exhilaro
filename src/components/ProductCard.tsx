import Image from "next/image";
import StarRating from "./StarRating";
import ColorDots from "./ColorDots";
import type { Product } from "@/types/product";

export default function ProductCard({ p }: { p: Product }) {
  // guard against accidental undefined
  if (!p) return null;

const discounted = typeof p.compareAt === "number" && p.compareAt > p.price;
  return (
    <article className="group rounded-xl border border-[color:var(--border)] bg-white shadow-sm hover:shadow-md overflow-hidden transition">
      {/* image */}
      <div className="relative aspect-[4/3]">
        <Image
          src={p.image}
          alt={p.title}
          fill
          sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 90vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* badges */}
        <div className="absolute left-2 top-2 flex gap-2">
          {p.isNew && <span className="rounded-full bg-black/80 text-white px-2 py-0.5 text-[10px]">NEW</span>}
          {p.inStock === false && <span className="rounded-full bg-gray-200 px-2 py-0.5 text-[10px]">Sold out</span>}
          {discounted && (
            <span className="rounded-full bg-green-600 text-white px-2 py-0.5 text-[10px]">
              -{Math.round(((p.compareAt! - p.price) / p.compareAt!) * 100)}%
            </span>
          )}
        </div>
      </div>

      {/* body */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-medium">{p.title}</h3>
          <StarRating value={p.rating ?? 0} />
        </div>

        <div className="mt-1 flex items-center gap-2">
          <span className="font-medium">${p.price}</span>
          {discounted && <span className="text-xs line-through text-[color:var(--muted)]">${p.compareAt}</span>}
        </div>

        {p.colors?.length ? (
          <div className="mt-1">
            <ColorDots colors={p.colors} />
          </div>
        ) : null}

        <button
          disabled={p.inStock === false}
          className="mt-3 w-full border rounded-lg py-2 hover:shadow disabled:opacity-50"
        >
          {p.inStock === false ? "Notify me" : "View"}
        </button>
      </div>
    </article>
  );
}
