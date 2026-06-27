import type { Metadata } from "next";
import Link from "next/link";
import { CITIES } from "@/lib/cities";

export const metadata: Metadata = {
  title: "Painting Service Areas Across San Diego County",
  description:
    "HRCCoatings Inc serves homeowners across San Diego County with interior, exterior, and coating services. Find professional painters in your city.",
  alternates: { canonical: "https://hrccoatingsco.com/painters" },
};

export default function PaintersHubPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-ink text-white pt-36 pb-20 lg:pt-44 lg:pb-28 px-5 lg:px-10 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-orange/20 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-[1400px]">
          <div className="mb-6 flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] font-bold text-white/60">
            <Link href="/" className="transition-colors hover:text-orange">Home</Link>
            <span>·</span>
            <span className="text-orange">Service Areas</span>
          </div>
          <h1 className="font-black tracking-[-0.04em] leading-[0.92] text-4xl sm:text-6xl lg:text-7xl uppercase max-w-4xl">
            Painters across<br /><span className="text-orange">San Diego County.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-white/80 leading-relaxed">
            For over 20 years, HRCCoatings Inc has painted and coated homes from the coast to the inland valleys. Find your city below, or call us for a free estimate anywhere in the county.
          </p>
          <a href="tel:+16193041289" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-orange text-white px-7 py-4 text-[12px] font-extrabold uppercase tracking-wider transition-all hover:bg-red">
            Call (619) 304-1289
          </a>
        </div>
      </section>

      {/* CITY GRID */}
      <section className="bg-cream py-20 lg:py-28 px-5 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CITIES.map((c) => (
              <Link key={c.slug} href={`/painters/${c.slug}`} className="group rounded-3xl bg-white p-7 lg:p-8 border border-ink/5 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-navy/20">
                <h2 className="font-black tracking-tight text-2xl text-ink uppercase mb-3 group-hover:text-navy transition-colors">
                  {c.name}
                </h2>
                <p className="text-[14px] text-stone leading-relaxed line-clamp-3">{c.intro}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-extrabold uppercase tracking-wider text-navy">
                  Painters in {c.name}
                  <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
