"use client";
import { useState } from "react";

export default function Accordion({
  items,
}: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y rounded-xl border bg-white">
      {items.map((it, i) => (
        <details
          key={i}
          open={open === i}
          onClick={(e) => { e.preventDefault(); setOpen(open === i ? null : i); }}
        >
          <summary
            className="flex cursor-pointer items-center justify-between px-4 py-3 hover:bg-slate-50"
            aria-expanded={open === i}
          >
            <span className="font-medium">{it.q}</span>
            <span className="text-xl leading-none">{open === i ? "–" : "+"}</span>
          </summary>
          <div className="px-4 pb-4 text-[color:var(--muted)]">{it.a}</div>
        </details>
      ))}
    </div>
  );
}