// src/components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-[color:var(--border)]">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* BRAND: compact logo + wordmark */}
        <Link href="/" className="flex items-center gap-2">
          {/* TIP: put your logo at /public/exhilaro.png or exhilaro.svg */}
          <div className="h-10 w-10 relative overflow-hidden rounded">
            <Image
              src="/exhilaro.png"   // or /exhilaro.svg
              alt="Exhilaro"
              fill
              sizes="32px"
              className="object-contain"
              priority
            />
          </div>
          <span className="font-semibold tracking-tight">Exhilaro</span>
        </Link>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg border text-base"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* NAV */}
        <nav
          id="site-nav"
          className={
            open
              ? "fixed left-4 right-4 top-16 z-50 bg-white border rounded-xl p-3 shadow-xl flex flex-col gap-2 md:static md:flex md:flex-row md:items-center md:gap-4"
              : "hidden md:flex md:flex-row md:items-center md:gap-4"
          }
          onClick={() => setOpen(false)}
        >
          <Link className="opacity-80 hover:opacity-100 transition" href="/about" aria-disabled>
            About
          </Link>
          <Link className="opacity-80 hover:opacity-100 transition" href="/lookbook" aria-disabled>
            Lookbook
          </Link>
          <Link className="opacity-80 hover:opacity-100 transition" href="/contact" aria-disabled>
            Contact
          </Link>

          {/* WHOLESALE BUTTON — consistent height & padding */}
          <Link
            href="/wholesale"
            className="inline-flex h-9 items-center rounded-lg bg-[color:var(--accent)] px-4 text-sm font-medium text-white hover:bg-[color:var(--accent-hover)] transition"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
