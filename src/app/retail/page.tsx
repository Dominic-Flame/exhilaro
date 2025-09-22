import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

// This page maps the product list into a grid of cards.
// Tailwind grid:
// - 1 column on mobile
// - 2 columns on small screens (sm:)
// - 4 columns on large screens (lg:)
export default function RetailPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-semibold">Retail</h1>
        <p className="mt-2 text-[color:var(--muted)]">
          Browse our bestsellers.
        </p>

        <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </section>
      </main>
    </>
  );
}
