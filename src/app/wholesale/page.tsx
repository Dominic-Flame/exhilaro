"use client"; // ← required: we use useState + form events on the client

import Header from "@/components/Header";
import { useState } from "react"; // ← make sure this import exists

type Form = {
  company: string;
  website: string;
  monthlyUnits: string;
  country: string;
  email: string;
};

export default function WholesalePage() {
  const [form, setForm] = useState<Form>({
    company: "",
    website: "",
    monthlyUnits: "",
    country: "",
    email: "",
  });
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.company || !form.email) {
      setStatus("err");
      return;
    }
    console.log("Wholesale application:", form);
    setStatus("ok");
  }

  return (
    <>
      <Header />
      <main className="mx-auto max-w-2xl px-4 py-10">
        <h1 className="text-3xl font-semibold">Wholesale</h1>
        <p className="mt-2 text-[color:var(--muted)]">
          Tell us a bit about your store. We respond within 1–2 business days.
        </p>

        <form onSubmit={submit} className="mt-6 space-y-4">
          <label className="block">
            <span className="block text-sm">Company *</span>
            <input
              required
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="mt-1 w-full border rounded-lg px-3 py-2"
            />
          </label>

          <label className="block">
            <span className="block text-sm">Website</span>
            <input
              value={form.website}
              onChange={(e) => setForm({ ...form, website: e.target.value })}
              className="mt-1 w-full border rounded-lg px-3 py-2"
            />
          </label>

          <label className="block">
            <span className="block text-sm">Expected monthly units</span>
            <input
              value={form.monthlyUnits}
              onChange={(e) => setForm({ ...form, monthlyUnits: e.target.value })}
              className="mt-1 w-full border rounded-lg px-3 py-2"
            />
          </label>

          <label className="block">
            <span className="block text-sm">Country</span>
            <input
              value={form.country}
              onChange={(e) => setForm({ ...form, country: e.target.value })}
              className="mt-1 w-full border rounded-lg px-3 py-2"
            />
          </label>

          <label className="block">
            <span className="block text-sm">Email *</span>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1 w-full border rounded-lg px-3 py-2"
            />
          </label>

          <button className="mt-2 inline-flex items-center rounded-xl border px-4 py-2 hover:shadow">
            Submit
          </button>

          {status === "ok" && (
            <p className="text-green-600">Thanks! We’ll review and get back to you.</p>
          )}
          {status === "err" && (
            <p className="text-red-600">Company and email are required.</p>
          )}
        </form>
      </main>
    </>
  );
}
