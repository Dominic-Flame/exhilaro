"use client";

type Props = {
  category: string;
  setCategory: (v: string) => void;
  q: string;
  setQ: (v: string) => void;
  maxPrice: number;
  setMaxPrice: (v: number) => void;
};

const cats = ["All", "Tees", "Hoodies", "Sweats", "Caps", "Accessories"];

export default function FilterBar({ category, setCategory, q, setQ, maxPrice, setMaxPrice }: Props) {
  return (
    <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-end">
      <label className="flex-1">
        <span className="block text-sm">Search</span>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="mt-1 w-full border rounded-lg px-3 py-2"
          placeholder="tee, hoodie, cap…"
        />
      </label>

      <label>
        <span className="block text-sm">Category</span>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 border rounded-lg px-3 py-2"
        >
          {cats.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>

      <label className="sm:w-64">
        <span className="block text-sm">Max price: ${maxPrice}</span>
        <input
          type="range"
          min="5"
          max="40"
          step="1"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full"
        />
      </label>
    </div>
  );
}
