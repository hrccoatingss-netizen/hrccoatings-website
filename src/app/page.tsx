import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";

/* ───────────────────────────── data ───────────────────────────── */

const services = [
  {
    name: "Interior Painting",
    image: "/images/interior/interior-services.jpg",
    description:
      "Transform indoor spaces with expert color consultations and flawless application.",
    href: "/services/interior-painting",
    tag: "Most Popular",
  },
  {
    name: "Exterior Painting",
    image: "/images/exterior/exterior-services.jpg",
    description:
      "Curb appeal upgrades that protect your home from the elements with durable coatings.",
    href: "/services/exterior-painting",
  },
  {
    name: "Commercial Painting",
    image: "/images/commercial/commercial-services.jpg",
    description:
      "Professional finishes for offices, warehouses, retail, and tenant improvements.",
    href: "/services/commercial-painting",
  },
  {
    name: "Epoxy Flooring",
    image: "/images/epoxy/epoxy-services.jpg",
    description:
      "Premium epoxy coatings for garages, basements, and commercial spaces.",
    href: "/services/epoxy-flooring",
  },
  {
    name: "Concrete Polishing",
    image: "/images/concrete/polished-services.jpg",
    description:
      "Sleek polished finish. A budget friendly alternative to epoxy for garage floors.",
    href: "/services/concrete-polishing",
  },
  {
    name: "Cabinet Refinishing",
    image: "/images/cabinet-services.jpg",
    description:
      "Breathe new life into your kitchen or bathroom with professional cabinet refinishing.",
    href: "/services/cabinet-refinishing",
  },
  {
    name: "Drywall Repair",
    image: "/images/drywall-services.jpg",
    description:
      "Restore walls to perfect condition with seamless repairs for all drywall issues.",
    href: "/services/drywall-repair",
  },
  {
    name: "Stucco Repair",
    image: "/images/stucco-services.jpg",
    description:
      "Protect and enhance your property's exterior with expert stucco repair and painting.",
    href: "/services/stucco-repair",
  },
  {
    name: "Popcorn Removal",
    image: "/images/popcorn-services.jpg",
    description:
      "Modernize your ceilings with our professional popcorn removal service.",
    href: "/services/specialty-services",
  },
];

const reviews = [
  {
    name: "Jessica Aliano",
    role: "Local Realtor, Carlsbad",
    stars: 5,
    time: "4 months ago",
    text: "I've hired Hector and Junior multiple times and they always deliver top notch results. Most recently, a full beach themed remodel in Carlsbad with two accent walls in navy and light blue stripes that turned out absolutely stunning. As a local realtor, I now refer them to all of my real estate clients.",
    featured: true,
  },
  {
    name: "Sandra",
    role: "Homeowner, San Diego",
    stars: 5,
    time: "2 months ago",
    text: "Our experience was exceptional. We are very satisfied with the outcome of our project. Hector and Jr. delivered outstanding results on our interior painting.",
  },
  {
    name: "Elio Espinosa",
    role: "Homeowner",
    stars: 5,
    time: "3 months ago",
    text: "They painted our home last year and they were professional, efficient, and did an excellent job!",
  },
];

const faqItems = [
  {
    question: "How much does a typical painting project cost?",
    answer:
      "Project costs vary based on size, surface condition, and paint selection. We offer free, detailed estimates for all projects. Contact us today for your personalized quote!",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most residential projects are completed within 2 to 5 days, while commercial projects vary based on scope. We'll provide a clear timeline during your free estimate.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes! All estimates are completely free with no obligation. We'll assess your project and provide a detailed, transparent quote.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, check, credit cards, Venmo, and Zelle for your convenience.",
  },
  {
    question: "Do you work on weekends?",
    answer:
      "Yes, we're available 7 days a week from 7 AM to 5 PM to accommodate your schedule.",
  },
  {
    question: "What's included in your warranty?",
    answer:
      "We stand behind all our work. Please contact us within 14 days of project completion with any concerns, and we'll make it right.",
  },
  {
    question: "Do you do both residential and commercial projects?",
    answer:
      "Absolutely! We serve both homeowners and businesses throughout San Diego County.",
  },
  {
    question: "Can I choose any paint color?",
    answer:
      "Yes! We offer full color consultations and work with all major paint brands to help you find the perfect color for your space.",
  },
  {
    question: "What areas of San Diego County do you serve?",
    answer:
      "We serve all of San Diego County, including Chula Vista, El Cajon, La Mesa, Carlsbad, Oceanside, Encinitas, La Jolla, Poway, Santee, Escondido, Coronado, and the surrounding communities.",
  },
  {
    question: "Do you install epoxy garage floor coatings?",
    answer:
      "Yes. We install premium flake and metallic epoxy floor coatings for garages, patios, and commercial spaces. They are durable, easy to clean, and built to handle daily wear for years.",
  },
  {
    question: "Do you offer stucco repair?",
    answer:
      "Yes. We repair cracks and damage, match your existing texture, and seal the surface so it lasts, for clean and weatherproof results across San Diego County.",
  },
  {
    question: "Do you refinish kitchen cabinets?",
    answer:
      "Absolutely. Cabinet refinishing gives your kitchen a brand-new look for a fraction of the cost of replacement, with smooth sprayed finishes and custom colors available.",
  },
  {
    question: "Can you remove popcorn ceilings?",
    answer:
      "Yes. We remove dated popcorn texture, repair the drywall, and finish ceilings smooth and clean and ready for paint, with dust kept under control from start to finish.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. HRCCoatings Inc is a licensed and insured, family-run painting company with over 20 years of experience serving San Diego County.",
  },
  {
    question: "What paint brands do you use?",
    answer:
      "We use premium paints from Benjamin Moore, Sherwin-Williams, and Dunn-Edwards for lasting, professional-quality results.",
  },
];

const blogPosts = [
  {
    image: "/images/blog/paint-color-selection.jpg",
    title: "How to Choose the Perfect Paint Color",
    date: "Dec 10, 2024",
    category: "Color Theory",
    excerpt:
      "Expert tips on choosing the perfect paint color for your San Diego home.",
    href: "/blog/paint-color-guide",
  },
  {
    image: "/images/blog/home-needs-repainting.jpg",
    title: "5 Signs Your Home Needs Repainting",
    date: "Dec 5, 2024",
    category: "Home Care",
    excerpt:
      "Discover the key signs that indicate your home needs repainting.",
    href: "/blog/signs-home-needs-repainting",
  },
  {
    image: "/images/blog/epoxy-vs-traditional.jpg",
    title: "Epoxy vs Traditional Garage Floors",
    date: "Nov 28, 2024",
    category: "Materials",
    excerpt: "Compare epoxy flooring vs traditional garage floors.",
    href: "/blog/epoxy-vs-traditional",
  },
];

const serviceAreas = [
  "Clairemont", "Carlsbad", "La Jolla", "Chula Vista",
  "Pacific Beach", "Mission Valley", "Point Loma", "North Park",
  "Hillcrest", "Del Mar", "Encinitas", "Oceanside",
];

const process = [
  {
    num: "01",
    title: "Free Estimate",
    description:
      "Tell us about your project. We meet on site, listen to your goals, and send a detailed quote within 24 hours. No pressure, no obligation.",
  },
  {
    num: "02",
    title: "Schedule & Prep",
    description:
      "Pick a date that works. We arrive on time, protect your furniture and floors, and prep every surface to professional spec before a single stroke.",
  },
  {
    num: "03",
    title: "Premium Finish",
    description:
      "Benjamin Moore, Sherwin Williams, and Dunn Edwards paints. Clean, detailed work. We don't leave until you're 100% happy with the result.",
  },
];

/* ──────────────────────── helpers ─────────────────────────── */

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 text-orange"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function SectionLabel({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="inline-flex items-center gap-2.5 mb-6">
      <span className={`h-px w-8 ${light ? "bg-white/40" : "bg-navy/40"}`} />
      <span className={`text-[11px] font-bold uppercase tracking-[0.22em] ${light ? "text-white/70" : "text-navy"}`}>
        {children}
      </span>
    </div>
  );
}

/* ═══════════════════════════ PAGE ══════════════════════════════ */

export default function Home() {
  return (
    <>
      {/* FAQPage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />

      {/* ────────── HERO ────────── */}
      <section className="relative overflow-hidden min-h-screen flex items-center bg-ink">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/exterior/modern-front.jpg"
            alt="Modern San Diego home exterior painted by HRCCoatings Inc"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/70 to-ink/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] w-full px-5 lg:px-10 pt-32 pb-20 lg:pt-36 lg:pb-24">
          <div className="max-w-4xl">
            {/* Trust pill */}
            <div className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 mb-8">
              <Stars count={5} />
              <span className="text-[12px] font-semibold text-white">
                5.0 on Google · 600+ projects · Family run since 2003
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-white font-black tracking-[-0.045em] leading-[0.92] text-6xl sm:text-7xl lg:text-8xl xl:text-[136px]">
              SAN DIEGO&apos;S<br />
              <span className="text-orange">MOST TRUSTED</span><br />
              PAINTERS.
            </h1>

            <p className="mt-8 max-w-xl text-base sm:text-lg text-white/80 leading-relaxed font-medium">
              Father and son. 20 plus years of experience. Premium paints, clean
              job sites, and finishes that last. From single accent walls to full
              commercial buildouts.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange text-white px-8 py-4 text-[14px] font-extrabold tracking-wide uppercase transition-all hover:bg-red active:scale-[0.98]"
              >
                Get Free Estimate
                <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="tel:+16193041289"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 text-[14px] font-bold text-white transition-all hover:bg-white hover:text-ink"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (619) 304-1289
              </a>
            </div>

            {/* $500 off pill */}
            <div className="mt-8 inline-flex items-center gap-3 text-[13px] text-white/70 font-medium">
              <span className="rounded-full bg-orange px-3 py-1 text-white font-extrabold uppercase tracking-wider text-[11px]">
                $500 off
              </span>
              <span>your first project. Limited spots this month.</span>
            </div>

            {/* Stats inline */}
            <div className="mt-16 grid grid-cols-3 gap-6 sm:gap-12 max-w-2xl pt-8 border-t border-white/15">
              {[
                { num: "600+", label: "Projects Done" },
                { num: "20+", label: "Years Working" },
                { num: "5.0★", label: "Google Rating" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="editorial-num text-4xl sm:text-5xl lg:text-6xl font-black text-white">
                    {s.num}
                  </p>
                  <p className="mt-1 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-white/50 font-bold">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ────────── BRAND STRIP ────────── */}
      <section className="bg-ink-soft border-y border-white/10 py-8 overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="flex items-center gap-12 lg:gap-20 flex-wrap justify-center">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/50 font-bold">
              We use premium paints
            </p>
            {[
              { src: "/images/benjamin-moore-logo.png", alt: "Benjamin Moore" },
              { src: "/images/dunn-edwards-logo.png", alt: "Dunn Edwards" },
              { src: "/images/sherwin-williams-logo.png", alt: "Sherwin Williams" },
            ].map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={50}
                className="h-9 w-auto object-contain brightness-0 invert opacity-60 transition hover:opacity-100"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ────────── SERVICES ────────── */}
      <section id="gallery" className="bg-cream py-24 lg:py-32 px-5 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-7">
              <SectionLabel>What we do</SectionLabel>
              <h2 className="font-black tracking-[-0.04em] leading-[0.95] text-5xl sm:text-6xl lg:text-7xl text-ink">
                EVERY SURFACE.<br />
                <span className="text-navy">DONE RIGHT.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-10">
              <p className="text-base text-stone leading-relaxed font-medium">
                From single accent walls to full commercial buildouts, we
                handle every surface that needs paint, coating, or repair.
                Premium materials. Reliable timelines. Honest pricing.
              </p>
            </div>
          </div>

          {/* Featured (first 2 services large) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
            {services.slice(0, 2).map((service, idx) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative overflow-hidden rounded-3xl bg-ink"
              >
                <div className="relative aspect-[16/11]">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-between p-7 lg:p-9">
                  <div className="flex items-start justify-between">
                    <span className="editorial-num text-2xl font-black text-white/70">
                      0{idx + 1}
                    </span>
                    {service.tag && (
                      <span className="rounded-full bg-orange px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">
                        {service.tag}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-black tracking-[-0.03em] text-3xl lg:text-5xl text-white leading-[0.95] uppercase">
                      {service.name}
                    </h3>
                    <p className="mt-3 max-w-md text-sm text-white/70 font-medium">
                      {service.description}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-wider text-white">
                      View Details
                      <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Remaining services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.slice(2).map((service, idx) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative overflow-hidden rounded-2xl bg-ink"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-between p-5">
                  <span className="editorial-num text-base font-black text-white/70 self-start">
                    0{idx + 3}
                  </span>
                  <div>
                    <h3 className="font-black tracking-[-0.02em] text-xl lg:text-2xl text-white uppercase leading-tight">
                      {service.name}
                    </h3>
                    <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-white/80">
                      View Details
                      <svg className="h-2.5 w-2.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── PROCESS ────────── */}
      <section className="bg-navy-deep text-white py-24 lg:py-32 px-5 lg:px-10">
        <div className="relative mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-7">
              <SectionLabel light>How it works</SectionLabel>
              <h2 className="font-black tracking-[-0.04em] leading-[0.95] text-5xl sm:text-6xl lg:text-7xl">
                THREE STEPS.<br />
                <span className="text-orange">ZERO STRESS.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-10">
              <p className="text-base text-white/70 leading-relaxed font-medium">
                No surprises. No upsells. Just clear pricing, on time crews,
                and finishes that hold up for years.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {process.map((step) => (
              <div
                key={step.num}
                className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 lg:p-10"
              >
                <span className="editorial-num text-7xl lg:text-8xl font-black text-orange/40 leading-none block mb-6">
                  {step.num}
                </span>
                <h3 className="font-black tracking-[-0.02em] text-2xl lg:text-3xl uppercase">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm text-white/60 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── ABOUT / TEAM ────────── */}
      <section className="bg-cream py-24 lg:py-32 px-5 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Image */}
            <div className="lg:col-span-7 relative">
              <div className="relative aspect-[5/4] overflow-hidden rounded-3xl">
                <Image
                  src="/images/team-photo.jpg"
                  alt="Hector and Junior Rivera, HRCCoatings Inc team"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-6 lg:bottom-8 lg:-right-8 hidden sm:block">
                <div className="rounded-2xl bg-white shadow-2xl p-6 border border-ink/5 max-w-[260px]">
                  <div className="flex items-center gap-3 mb-2">
                    <Stars count={5} />
                    <span className="text-[12px] font-bold text-ink-soft">5.0</span>
                  </div>
                  <p className="text-sm text-ink-soft leading-snug font-medium">
                    &ldquo;Hardworking father son team. Punctual, tidy, fast. Excellent stucco work too.&rdquo;
                  </p>
                  <p className="mt-3 text-[11px] text-stone uppercase tracking-wider font-bold">
                    Jessica, Realtor
                  </p>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="lg:col-span-5">
              <SectionLabel>The team</SectionLabel>
              <h2 className="font-black tracking-[-0.04em] leading-[0.95] text-5xl sm:text-6xl text-ink uppercase">
                HECTOR &amp;<br />
                <span className="text-navy">JUNIOR RIVERA.</span>
              </h2>
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-stone font-bold">
                Father &amp; Son. Founders.
              </p>
              <div className="mt-6 space-y-4 text-[15px] text-stone leading-relaxed font-medium">
                <p>
                  Twenty plus years of combined expertise. A father son team
                  obsessed with craftsmanship, honest communication, and finishes
                  that hold up.
                </p>
                <p>
                  As a faith based, family run business, every project gets
                  the personal care and attention to detail larger crews
                  simply can&apos;t match.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { num: "20+", label: "Years" },
                  { num: "600+", label: "Projects" },
                  { num: "5.0", label: "Rated" },
                ].map((s) => (
                  <div key={s.label} className="border-l-4 border-orange pl-3">
                    <p className="editorial-num text-3xl font-black text-navy">{s.num}</p>
                    <p className="text-[11px] uppercase tracking-wider text-stone mt-1 font-bold">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────── REVIEWS ────────── */}
      <section id="reviews" className="bg-cream-dark py-24 lg:py-32 px-5 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-7">
              <SectionLabel>What clients say</SectionLabel>
              <h2 className="font-black tracking-[-0.04em] leading-[0.95] text-5xl sm:text-6xl lg:text-7xl text-ink uppercase">
                FIVE STARS.<br />
                <span className="text-navy">EVERY TIME.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-10 flex items-center gap-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Stars count={5} />
                  <span className="text-2xl font-black text-ink">5.0</span>
                </div>
                <p className="text-[12px] text-stone uppercase tracking-wider font-bold">15 Google Reviews</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-5">
            {/* Featured review */}
            <div className="lg:col-span-7 lg:row-span-2 rounded-3xl bg-white border border-ink/5 p-8 lg:p-12 relative">
              <svg className="absolute top-8 right-8 h-16 w-16 text-orange/20" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <Stars count={reviews[0].stars} />
              <p className="mt-6 font-bold text-2xl lg:text-3xl leading-tight text-ink tracking-[-0.01em]">
                &ldquo;{reviews[0].text}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4 pt-6 border-t border-ink/10">
                <div className="h-12 w-12 rounded-full bg-navy text-white flex items-center justify-center font-black text-lg">
                  {reviews[0].name[0]}
                </div>
                <div>
                  <p className="font-bold text-ink">{reviews[0].name}</p>
                  <p className="text-[12px] text-stone font-medium">{reviews[0].role}</p>
                </div>
              </div>
            </div>

            {reviews.slice(1).map((review) => (
              <div
                key={review.name}
                className="lg:col-span-5 rounded-3xl bg-white border border-ink/5 p-7"
              >
                <Stars count={review.stars} />
                <p className="mt-4 text-[15px] text-ink-soft leading-relaxed font-medium">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 pt-5 border-t border-ink/10">
                  <div className="h-10 w-10 rounded-full bg-navy text-white flex items-center justify-center font-black text-sm">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink">{review.name}</p>
                    <p className="text-[11px] text-stone font-medium">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://share.google/aYStfuIFQ71wmgJg0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-navy text-white px-6 py-3 text-[12px] font-extrabold uppercase tracking-wider transition hover:bg-navy-deep"
            >
              Read All 15 Reviews
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ────────── SERVICE AREAS ────────── */}
      <section className="bg-cream py-24 lg:py-32 px-5 lg:px-10">
        <div className="mx-auto max-w-[1100px] text-center">
          <SectionLabel>Service area</SectionLabel>
          <h2 className="font-black tracking-[-0.04em] leading-[0.95] text-5xl sm:text-6xl lg:text-7xl text-ink uppercase">
            ALL OF<br />
            <span className="text-navy">SAN DIEGO COUNTY.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-stone font-medium">
            From beach to backcountry, we cover the whole region with the same
            premium care.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border-2 border-ink/10 bg-white px-5 py-2.5 text-[13px] font-bold text-ink-soft transition hover:border-navy hover:bg-navy hover:text-white cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── FAQ ────────── */}
      <section className="bg-cream-dark py-24 lg:py-32 px-5 lg:px-10">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
              <SectionLabel>Common questions</SectionLabel>
              <h2 className="font-black tracking-[-0.04em] leading-[0.95] text-5xl sm:text-6xl text-ink uppercase">
                GOT<br />
                <span className="text-navy">QUESTIONS?</span>
              </h2>
              <p className="mt-6 text-base text-stone leading-relaxed font-medium">
                Still have questions? Give us a call at{" "}
                <a href="tel:+16193041289" className="text-navy underline underline-offset-4 hover:text-red font-bold">
                  (619) 304-1289
                </a>
                . We&apos;re here 7AM to 5PM daily.
              </p>
            </div>
            <div className="lg:col-span-7">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </div>
      </section>

      {/* ────────── BLOG ────────── */}
      <section className="bg-cream py-24 lg:py-32 px-5 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-12 gap-8 mb-12 items-end">
            <div className="lg:col-span-8">
              <SectionLabel>From the blog</SectionLabel>
              <h2 className="font-black tracking-[-0.04em] leading-[0.95] text-5xl sm:text-6xl lg:text-7xl text-ink uppercase">
                COLOR, CARE,<br />
                <span className="text-navy">CRAFT.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink/5 mb-5">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-navy font-extrabold mb-2">
                  {post.category} · {post.date}
                </p>
                <h3 className="font-black tracking-[-0.02em] text-2xl text-ink leading-tight uppercase group-hover:text-navy transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-stone leading-relaxed font-medium">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-navy">
                  Read Article
                  <svg className="h-2.5 w-2.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── BIG CTA before form ────────── */}
      <section className="bg-navy-deep text-white py-20 lg:py-28 px-5 lg:px-10">
        <div className="relative mx-auto max-w-[1100px] text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-orange px-4 py-1.5 text-white text-[11px] font-extrabold uppercase tracking-wider">
            $500 off · Limited spots
          </p>
          <h2 className="mt-6 font-black tracking-[-0.04em] leading-[0.95] text-5xl sm:text-6xl lg:text-7xl uppercase">
            READY TO MAKE YOUR<br />
            <span className="text-orange">SPACE LOOK NEW?</span>
          </h2>
          <p className="mt-6 mx-auto max-w-xl text-base text-white/70 font-medium">
            Free estimates within 24 hours. No pressure, no obligation. Just
            honest pricing and a crew that shows up on time.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange text-white px-8 py-4 text-[14px] font-extrabold uppercase tracking-wider transition-all hover:bg-red active:scale-[0.98]"
            >
              Get Free Estimate
              <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+16193041289"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 px-8 py-4 text-[14px] font-bold text-white transition-all hover:bg-white hover:text-ink"
            >
              CALL (619) 304-1289
            </a>
          </div>
        </div>
      </section>

      {/* ────────── CONTACT FORM ────────── */}
      <ContactForm />
    </>
  );
}
