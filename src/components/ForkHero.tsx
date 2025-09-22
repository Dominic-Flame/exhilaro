import Link from "next/link";
import Image from "next/image";

// You can swap these URLs with any Unsplash/Pexels links you like.
const HERO_BG =
  "https://images.unsplash.com/photo-1618677603544-51162346e165?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdoaXRlJTIwdHNoaXJ0JTIwcmFja3xlbnwwfHwwfHx8MA%3D%3D";
const RETAIL_IMG =
  "https://images.unsplash.com/photo-1596484552993-aec4311d3381?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const WHOLESALE_IMG =
  "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function ForkHero() {
  return (
    <section className="relative">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={HERO_BG}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Soft white overlay for readability */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
          Modern essentials. Retail & wholesale.
        </h1>
        <p className="mt-2 text-lg text-[color:var(--muted)]">
          Quality basics for stores and individuals.
        </p>

        {/* Two visual cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          <Link
            href="/retail"
            className="group rounded-xl border border-[color:var(--border)] overflow-hidden text-left bg-white
            shadow-sm hover:shadow-md transition"
            aria-label="Go to Retail"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={RETAIL_IMG}
                alt="Retail preview"
                fill
                sizes="(min-width:768px) 45vw, 90vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-6">
              <div className="text-2xl font-medium">Retail</div>
              <div className="mt-1 text-[color:var(--muted)]">
                Shop the collection
              </div>
            </div>
          </Link>

          <Link
            href="/wholesale"
            className="group rounded-xl border border-[color:var(--border)] overflow-hidden text-left bg-white
            shadow-sm hover:shadow-md transition"
            aria-label="Go to Wholesale"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={WHOLESALE_IMG}
                alt="Wholesale preview"
                fill
                sizes="(min-width:768px) 45vw, 90vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-6">
              <div className="text-2xl font-medium">Wholesale</div>
              <div className="mt-1 text-[color:var(--muted)]">
                MOQ &amp; bulk pricing
              </div>
            </div>
          </Link>
        </div>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-600">
          <li>Organic cotton</li>
          <li className="text-[color:var(--accent)]">•</li>
          <li>7-day dispatch</li>
          <li className="text-[color:var(--accent)]">•</li>
          <li>Made in BD</li>
        </ul>
      </div>
    </section>
  );
}
