import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About HRCCoatings Inc - San Diego Painting Company Since 2003",
  description:
    "HRCCoatings Inc is a family-owned painting company in San Diego founded in 2003 by Hector Rivera. Father-son team with 20+ years experience, 600+ projects, and a 5.0 Google rating.",
};

const stats = [
  { num: "22+", label: "Years in business" },
  { num: "600+", label: "Projects completed" },
  { num: "5.0", label: "Google rating" },
  { num: "100%", label: "Family-owned" },
];

const services = [
  { name: "Interior Painting", note: "Living rooms, bedrooms, kitchens, bathrooms, hallways, trim, ceilings, accent walls", href: "/services/interior-painting" },
  { name: "Exterior Painting", note: "Wood siding, stucco, trim, doors, shutters, weather-resistant coatings", href: "/services/exterior-painting" },
  { name: "Commercial Painting", note: "Offices, retail spaces, warehouses, restaurants, medical, tenant improvements", href: "/services/commercial-painting" },
  { name: "Epoxy Flooring", note: "Garage floors, basements, commercial spaces with flake and metallic options", href: "/services/epoxy-flooring" },
  { name: "Concrete Polishing", note: "Budget-friendly polished concrete for garages and industrial spaces", href: "/services/concrete-polishing" },
  { name: "Cabinet Refinishing", note: "Kitchen and bathroom cabinet painting with factory-quality spray finishes", href: "/services/cabinet-refinishing" },
  { name: "Drywall Repair", note: "Patching, crack repair, water damage, and smooth wall finishing", href: "/services/drywall-repair" },
  { name: "Stucco Repair", note: "Crack repair, texture matching, and protective elastomeric coatings", href: "/services/stucco-repair" },
  { name: "Wallpaper", note: "Installation and removal — paste, peel-and-stick, vinyl, grasscloth", href: "/services/wallpaper" },
  { name: "Popcorn Ceiling Removal", note: "Scraping, skim coating, and modern smooth ceiling refinishing", href: "/services/specialty-services" },
];

const areas = [
  "Clairemont", "Carlsbad", "La Jolla", "Chula Vista",
  "Pacific Beach", "Mission Valley", "Point Loma", "North Park",
  "Hillcrest", "Del Mar", "Encinitas", "Oceanside",
];

export default function AboutPage() {
  return (
    <>
      {/* ───── HERO ───── */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-end bg-ink">
        <div className="absolute inset-0">
          <Image
            src="/images/team-photo.jpg"
            alt="Hector and Junior Rivera - HRCCoatings Inc founders"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/65 to-ink/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] w-full px-5 lg:px-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] font-bold text-white/60">
              <Link href="/" className="transition-colors hover:text-orange">Home</Link>
              <span>·</span>
              <span className="text-orange">About</span>
            </div>
            <h1 className="text-white font-black tracking-[-0.045em] leading-[0.92] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl uppercase">
              Father<br />
              <span className="text-orange">&amp; son.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed">
              San Diego&apos;s family-owned painting company since 2003. Two decades of craftsmanship, hundreds of homes, one promise.
            </p>
          </div>
        </div>
      </section>

      {/* ───── STATS STRIP ───── */}
      <section className="bg-cream-dark py-12 lg:py-16 px-5 lg:px-10 border-b border-ink/5">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-black text-5xl sm:text-6xl tracking-[-0.04em] text-ink leading-none">
                  {s.num}
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.18em] font-bold text-stone">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── STORY ───── */}
      <section className="bg-cream py-24 lg:py-32 px-5 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="inline-flex items-center gap-2.5 mb-6">
                <span className="h-px w-8 bg-navy/30" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-navy/70">
                  Our story
                </span>
              </div>
              <h2 className="font-black tracking-[-0.04em] leading-[0.95] text-4xl sm:text-5xl lg:text-6xl text-ink uppercase">
                Built on<br />
                <span className="text-navy">trust.</span>
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-base sm:text-lg leading-relaxed text-stone">
              <p>
                HRCCoatings Inc was founded in 2003 by <strong className="text-ink">Hector Rivera</strong> in San Diego, California. What started as a one-man painting operation has grown into a trusted, full-service painting and coating company serving homes and businesses across San Diego County.
              </p>
              <p>
                Today, Hector runs the company alongside his son, <strong className="text-ink">Junior Rivera</strong>, who serves as Co-Owner and Operations Manager. Together, this father-son team personally manages every project from estimate to final walkthrough.
              </p>
              <p>
                As a faith-based, family-run business, HRCCoatings Inc operates on principles of honesty, quality craftsmanship, and treating every customer&apos;s home or business with the same care they&apos;d give their own. No subcontractors, no middlemen — the people you meet on the estimate are the same people doing the work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── SERVICES ───── */}
      <section className="bg-ink py-24 lg:py-32 px-5 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-16 lg:mb-20 max-w-3xl">
            <div className="inline-flex items-center gap-2.5 mb-6">
              <span className="h-px w-8 bg-orange" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-orange">
                Everything we do
              </span>
            </div>
            <h2 className="font-black tracking-[-0.04em] leading-[0.95] text-5xl sm:text-6xl lg:text-7xl text-white uppercase">
              Ten<br />
              <span className="text-orange">specialties.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {services.map((s, i) => (
              <Link
                key={s.name}
                href={s.href}
                className="group flex items-baseline gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all hover:bg-white/[0.06] hover:border-orange/30"
              >
                <span className="text-orange font-black text-2xl tracking-tight shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3 className="text-white font-black text-lg lg:text-xl tracking-tight uppercase mb-1.5 transition-colors group-hover:text-orange">
                    {s.name}
                  </h3>
                  <p className="text-white/55 leading-relaxed text-[14px]">
                    {s.note}
                  </p>
                </div>
                <svg className="h-4 w-4 text-orange transition-transform group-hover:translate-x-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───── PAINT BRANDS ───── */}
      <section className="bg-cream py-24 lg:py-32 px-5 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2.5 mb-6">
                <span className="h-px w-8 bg-navy/30" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-navy/70">
                  Premium materials
                </span>
              </div>
              <h2 className="font-black tracking-[-0.04em] leading-[0.95] text-5xl sm:text-6xl text-ink uppercase">
                Only<br />
                <span className="text-navy">the best.</span>
              </h2>
              <p className="mt-6 text-base text-stone leading-relaxed max-w-md">
                We never cut corners on materials. Every project uses premium paint from one of three trusted brands — chosen based on the surface, the application, and your goals.
              </p>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
              {[
                { name: "Benjamin Moore", note: "Superior coverage and color accuracy" },
                { name: "Sherwin Williams", note: "Industry-leading durability" },
                { name: "Dunn-Edwards", note: "California-made for local climate" },
              ].map((b) => (
                <div key={b.name} className="rounded-3xl bg-white p-7 border border-ink/5">
                  <h3 className="text-ink font-black text-base tracking-tight uppercase mb-2">
                    {b.name}
                  </h3>
                  <p className="text-stone text-[13px] leading-relaxed">{b.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── SERVICE AREAS ───── */}
      <section className="bg-cream-dark py-24 lg:py-32 px-5 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-2.5 mb-6">
              <span className="h-px w-8 bg-navy/30" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-navy/70">
                Coverage area
              </span>
            </div>
            <h2 className="font-black tracking-[-0.04em] leading-[0.95] text-5xl sm:text-6xl text-ink uppercase">
              All of<br />
              <span className="text-navy">San Diego.</span>
            </h2>
            <p className="mt-6 text-base text-stone leading-relaxed max-w-xl">
              We serve all neighborhoods and communities throughout San Diego County including but not limited to:
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {areas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center rounded-full bg-white border border-ink/10 px-5 py-2 text-[13px] font-semibold text-ink"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CONTACT CTA ───── */}
      <section className="bg-ink py-24 lg:py-32 px-5 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 mb-6">
                <span className="h-px w-8 bg-orange" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-orange">
                  Get in touch
                </span>
              </div>
              <h2 className="font-black tracking-[-0.04em] leading-[0.95] text-5xl sm:text-6xl lg:text-7xl text-white uppercase">
                Let&apos;s talk<br />
                <span className="text-orange">about your project.</span>
              </h2>
            </div>

            <div className="lg:col-span-5 space-y-4 text-white/70 text-[15px]">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-white/40 mb-1">Phone</p>
                <a href="tel:+16193041289" className="text-2xl font-black text-white hover:text-orange transition">
                  (619) 304-1289
                </a>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-white/40 mb-1">Email</p>
                <a href="mailto:hrccoatingss@gmail.com" className="font-medium text-white hover:text-orange transition">
                  hrccoatingss@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-white/40 mb-1">Address</p>
                <p>3334 Clairemont Mesa Blvd Ste 101<br />San Diego, CA 92111</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-white/40 mb-1">Hours</p>
                <p>7 AM - 6 PM, 7 days a week</p>
              </div>

              <Link
                href="/#contact"
                className="group mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-orange text-white px-8 py-4 text-[13px] font-extrabold uppercase tracking-wider transition-all hover:bg-red"
              >
                Request a Free Estimate
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
