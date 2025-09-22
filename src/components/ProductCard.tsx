import Image from "next/image";       // Next's optimized <img>
import type { Product } from "@/types/product";

// We accept one product via the "p" prop.
// Tip: using a short prop name keeps markup compact in maps.
export default function ProductCard({ p }: { p: Product }) {
  return (
    // A rounded card with a border. "overflow-hidden" clips the image corners.
    <article className="border border-[color:var(--border)] rounded-xl overflow-hidden">
      {/* Image area: aspect-[4/3] keeps a stable ratio while loading.
         "relative" is required because <Image fill> uses absolute positioning. */}
      <div className="aspect-[4/3] relative">
        <Image
          src={p.image}
          alt={p.title}
          fill                          // fills the parent box
          sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 90vw"
          className="object-cover"      // cover = crop to fill nicely
          priority={false}              // true for above-the-fold images only
        />
      </div>

      {/* Text block */}
      <div className="p-4">
        <h3 className="font-medium">{p.title}</h3>
        <p className="text-[color:var(--muted)] mt-1">${p.price}</p>

        {/* Optional colors */}
        {p.colors?.length ? (
          <p className="mt-1 text-sm text-[color:var(--muted)]">
            {p.colors.join(" • ")}
          </p>
        ) : null}

        {/* Button is non-functional for now (frontend only) */}
        <button className="mt-3 w-full border rounded-lg py-2 hover:shadow">
          View
        </button>
      </div>
    </article>
  );
}
