"use client";

import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import FilterBar from "@/components/FilterBar";
import { products } from "@/data/products";
import { useMemo, useState } from "react";

export default function RetailPage() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(40);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesQ = `${p.title} ${p.category}`.toLowerCase().includes(q.toLowerCase());
      const matchesCat = category === "All" || p.category === category;
      const matchesPrice = p.price <= maxPrice;
      return matchesQ && matchesCat && matchesPrice;
    });
  }, [q, category, maxPrice]);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-semibold">Retail</h1>
        <p className="mt-2 text-[color:var(--muted)]">Browse our bestsellers.</p>

        <FilterBar
          category={category}
          setCategory={setCategory}
          q={q}
          setQ={setQ}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />

        {filtered.length ? (
          <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filtered.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </section>
        ) : (
          <div className="mt-10 rounded-xl border p-8 text-center text-[color:var(--muted)]">
            No products match your filters.
          </div>
        )}
      </main>
    </>
  );
}
