// src/app/wholesale/page.tsx
"use client";

import Header from "@/components/Header";
import StatCard from "@/components/StatCard";
import Accordion from "@/components/Accordian";
import { useState } from "react";
import Link from "next/link";

type Form = {
  company: string;
  email: string;
  website?: string;
  country?: string;
  monthlyUnits?: string;
  notes?: string;
  agree: boolean;
};

const faqs = [
  { q: "What are the payment terms?",
    a: "50% deposit, 50% before ship. Net terms on approval." },
  { q: "What is the MOQ?",
    a: "Starts at 100 units per style/color (sizes can be mixed)." },
  { q: "Lead times?",
    a: "7–14 days typical. Bulk or custom may be 21–28 days." },
  { q: "Logistics & paperwork?",
    a: "Ex-works, FOB, or DAP/DDP. We prepare invoice, packing list, COO." },
  { q: "Private label?",
    a: "Neck prints, woven labels, barcodes and polybag stickers available." },
];

export default function WholesalePage() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [form, setForm] = useState<Form>({
    company: "", email: "", agree: false,
  });

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.company || !form.email || !form.agree) { setStatus("err"); return; }
    // TODO: Hook to real endpoint (Formspree/Netlify) later.
    console.log("Wholesale lead", form);
    setStatus("ok");
  }

  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-10">
        {/* Hero */}
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            Partner with Exhilaro
          </h1>
          <p className="mt-2 text-lg text-[color:var(--muted)]">
            Sustainable blanks. Reliable delivery. Human support.
          </p>
          <ul className="mt-4 flex flex-wrap justify-center gap-3 text-sm text-slate-600">
            <li>MOQ from 100 units</li>
            <li className="text-[color:var(--accent)]">•</li>
            <li>7–14 day dispatch</li>
            <li className="text-[color:var(--accent)]">•</li>
            <li>AQL 2.5 QC</li>
          </ul>
        </section>

        {/* Trust stats */}
        <section className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard title="100+" sub="MOQ per style/color" />
          <StatCard title="7–14d" sub="Typical dispatch" />
          <StatCard title="AQL 2.5" sub="Quality inspections" />
        </section>

        {/* Downloads */}
        <section className="mt-8 rounded-xl border p-4 bg-white">
          <h2 className="font-semibold">Downloads</h2>
          <div className="mt-3 flex flex-wrap gap-3">
            <Link className="border rounded-lg px-3 py-2 hover:shadow" href="/line-sheet.pdf" target="_blank">Line sheet (PDF)</Link>
            <Link className="border rounded-lg px-3 py-2 hover:shadow" href="/wholesale-terms.pdf" target="_blank">Terms (PDF)</Link>
          </div>
        </section>

        {/* Application form */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Apply for wholesale</h2>
          <p className="mt-1 text-[color:var(--muted)]">Tell us about your store. We’ll respond within 1–2 business days.</p>

          <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            <label className="block">
              <span className="block text-sm">Company *</span>
              <input
                required
                className="mt-1 w-full border rounded-lg px-3 py-2"
                value={form.company}
                onChange={(e)=>setForm({...form, company: e.target.value})}
              />
            </label>
            <label className="block">
              <span className="block text-sm">Email *</span>
              <input
                required type="email"
                className="mt-1 w-full border rounded-lg px-3 py-2"
                value={form.email}
                onChange={(e)=>setForm({...form, email: e.target.value})}
              />
            </label>
            <label className="block">
              <span className="block text-sm">Website</span>
              <input
                className="mt-1 w-full border rounded-lg px-3 py-2"
                value={form.website ?? ""}
                onChange={(e)=>setForm({...form, website: e.target.value})}
              />
            </label>
            <label className="block">
              <span className="block text-sm">Country</span>
              <input
                className="mt-1 w-full border rounded-lg px-3 py-2"
                value={form.country ?? ""}
                onChange={(e)=>setForm({...form, country: e.target.value})}
              />
            </label>
            <label className="block">
              <span className="block text-sm">Expected monthly units</span>
              <input
                className="mt-1 w-full border rounded-lg px-3 py-2"
                value={form.monthlyUnits ?? ""}
                onChange={(e)=>setForm({...form, monthlyUnits: e.target.value})}
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="block text-sm">Notes</span>
              <textarea
                rows={4}
                className="mt-1 w-full border rounded-lg px-3 py-2"
                value={form.notes ?? ""}
                onChange={(e)=>setForm({...form, notes: e.target.value})}
              />
            </label>

            <label className="sm:col-span-2 inline-flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={form.agree}
                onChange={(e)=>setForm({...form, agree: e.target.checked})}
                className="h-4 w-4"
              />
              <span>I agree to be contacted and to the wholesale terms.</span>
            </label>

            <button className="sm:col-span-2 mt-1 inline-flex items-center rounded-xl border px-4 py-2 hover:shadow">
              Submit application
            </button>

            {status === "ok"  && <p className="sm:col-span-2 text-green-600">Thanks! We’ll be in touch shortly.</p>}
            {status === "err" && <p className="sm:col-span-2 text-red-600">Please fill Company, Email and accept the terms.</p>}
          </form>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-3">Wholesale FAQ</h2>
          <Accordion items={faqs} />
        </section>

        {/* Contact strip */}
        <section className="mt-10 rounded-xl border p-4 text-center text-sm text-[color:var(--muted)]">
          Prefer email? <a className="underline" href="mailto:sales@exhilaro.com">sales@exhilaro.com</a>
        </section>
      </main>
    </>
  );
}
