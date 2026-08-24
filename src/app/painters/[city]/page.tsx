import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CITIES, getCity } from "@/lib/cities";
import FAQAccordion from "@/components/FAQAccordion";
import ContactForm from "@/components/ContactForm";

const SERVICES = [
  { name: "Interior Painting", href: "/services/interior-painting", image: "/images/interior/kitchen-2.jpg" },
  { name: "Exterior Painting", href: "/services/exterior-painting", image: "/images/exterior/exterior-services.jpg" },
  { name: "Cabinet Refinishing", href: "/services/cabinet-refinishing", image: "/images/cabinet-services.jpg" },
  { name: "Epoxy Flooring", href: "/services/epoxy-flooring", image: "/images/epoxy/epoxy-services.jpg" },
  { name: "Stucco Repair", href: "/services/stucco-repair", image: "/images/stucco-services.jpg" },
  { name: "Drywall Repair", href: "/services/drywall-repair", image: "/images/drywall-services.jpg" },
  { name: "Commercial Painting", href: "/services/commercial-painting", image: "/images/commercial/commercial-services.jpg" },
  { name: "Concrete Polishing", href: "/services/concrete-polishing", image: "/images/concrete/polished-services.jpg" },
];

const BENEFITS = [
  { title: "20+ Years Local", description: "Family-run since 2003, with hundreds of San Diego County homes painted." },
  { title: "Licensed & Insured", description: "Fully licensed (CSLB LIC #1158346), bonded, and insured for your peace of mind." },
  { title: "Premium Materials", description: "Benjamin Moore, Sherwin Williams, and Dunn-Edwards for lasting results." },
  { title: "5.0 Star Rated", description: "Clean, on-time, respectful crews that treat your home like their own." },
];

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const c = getCity(city);
  if (!c) return {};
  return {
    title: `Painters in ${c.name}, CA`,
    description: `Professional house painting, stucco, and coating services in ${c.name}, CA. ${c.localFocus} Family-run, 20+ years, 5-star rated. Free estimates.`,
    alternates: { canonical: `https://hrccoatingsco.com/painters/${c.slug}` },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const c = getCity(city);
  if (!c) notFound();

  const faqs = [
    {
      question: `Do you offer free estimates in ${c.name}?`,
      answer: `Yes. We provide free, no-obligation estimates anywhere in ${c.name} and the surrounding San Diego County area. Call (619) 289-3908 or request a quote online and we'll get back to you within 24 hours.`,
    },
    {
      question: `How much does it cost to paint a house in ${c.name}?`,
      answer: `Pricing depends on the size of the home, the surfaces involved, and the level of prep needed. Every ${c.name} project gets a detailed, itemized estimate up front, so there are no surprises. ${c.localFocus}`,
    },
    {
      question: `How long will my ${c.name} painting project take?`,
      answer: `Most interior rooms take 1-2 days, and a full exterior repaint typically takes 3-5 days depending on the home. We'll give you a clear timeline during your free estimate and keep the job on schedule.`,
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes. HRCCoatings Inc is fully licensed with the California State License Board (CSLB LIC #1158346), bonded, and insured. You're protected on every project.",
    },
    {
      question: `What painting services do you offer in ${c.name}?`,
      answer: `We handle interior and exterior painting, cabinet refinishing, epoxy garage and floor coatings, stucco repair, drywall repair, concrete polishing, and commercial painting throughout ${c.name}.`,
    },
  ];

  const others = CITIES.filter((x) => x.slug !== c.slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "House Painting",
    provider: {
      "@type": "LocalBusiness",
      name: "HRCCoatings Inc",
      telephone: "+16192893908",
      url: "https://hrccoatingsco.com",
      image: "https://hrccoatingsco.com/images/exterior/front-home.jpg",
      aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "20" },
    },
    areaServed: { "@type": "City", name: `${c.name}, CA` },
    url: `https://hrccoatingsco.com/painters/${c.slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://hrccoatingsco.com" },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://hrccoatingsco.com/painters" },
      { "@type": "ListItem", position: 3, name: c.name, item: `https://hrccoatingsco.com/painters/${c.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-end bg-ink">
        <div className="absolute inset-0">
          <Image src={c.heroImage} alt={`House painters in ${c.name}, CA`} fill priority className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/70 to-ink/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1400px] w-full px-5 lg:px-10 pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="mb-6 flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] font-bold text-white/60">
            <Link href="/" className="transition-colors hover:text-orange">Home</Link>
            <span>·</span>
            <Link href="/painters" className="transition-colors hover:text-orange">Service Areas</Link>
            <span>·</span>
            <span className="text-orange">{c.name}</span>
          </div>
          <h1 className="text-white font-black tracking-[-0.04em] leading-[0.92] text-4xl sm:text-5xl lg:text-7xl uppercase max-w-4xl">
            House Painters in<br />
            <span className="text-orange">{c.name}, CA</span>
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-white/80 leading-relaxed">
            Trusted interior, exterior, and coating services for {c.name} homeowners. Family-run, 20+ years, and 5-star rated across San Diego County.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange text-white px-7 py-4 text-[12px] font-extrabold uppercase tracking-wider transition-all hover:bg-red">
              Get Free Estimate
              <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a href="tel:+16192893908" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-[14px] font-medium text-white transition-all hover:bg-white/5">
              (619) 289-3908
            </a>
          </div>
        </div>
      </section>

      {/* INTRO + NEIGHBORHOODS */}
      <section className="bg-cream py-20 lg:py-28 px-5 lg:px-10">
        <div className="mx-auto max-w-[1100px] grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 mb-6">
              <span className="h-px w-8 bg-navy/30" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-navy/70">Serving {c.name}</span>
            </div>
            <h2 className="font-black tracking-[-0.04em] leading-[0.95] text-3xl sm:text-5xl text-ink uppercase mb-6">
              Your local <span className="text-navy">{c.name} painters.</span>
            </h2>
            <p className="text-lg text-stone leading-relaxed">{c.intro}</p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white border border-ink/8 p-8 shadow-sm">
              <p className="text-[12px] uppercase tracking-[0.18em] text-stone font-semibold mb-5">Neighborhoods we serve</p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                {c.neighborhoods.map((n) => (
                  <li key={n} className="flex items-start gap-2 text-[14px] text-ink">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange shrink-0" />
                    {n}
                  </li>
                ))}
              </ul>
              <a href="tel:+16192893908" className="mt-7 block text-center rounded-full bg-navy text-white px-6 py-3.5 text-[13px] font-extrabold uppercase tracking-wider transition-all hover:bg-red">
                Call (619) 289-3908
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH-DEMAND SECTIONS (mined from Search Console) */}
      {c.extraSections && c.extraSections.length > 0 && (
        <section className="bg-cream pb-20 lg:pb-28 px-5 lg:px-10">
          <div className="mx-auto max-w-[1100px] space-y-14">
            {c.extraSections.map((s) => (
              <div key={s.heading} className="max-w-3xl">
                <h2 className="font-black tracking-[-0.03em] leading-tight text-2xl sm:text-3xl text-ink uppercase mb-4">
                  {s.heading}
                </h2>
                <p className="text-lg text-stone leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PAINT BRANDS */}
      <section className="bg-cream py-16 lg:py-20 px-5 lg:px-10 border-t border-ink/5">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="font-black tracking-[-0.03em] leading-tight text-2xl sm:text-3xl text-ink uppercase mb-4 max-w-3xl">
            The paint brands we use in {c.name}
          </h2>
          <p className="text-lg text-stone leading-relaxed max-w-3xl">
            Every {c.name} project is finished with premium paint from Benjamin Moore,
            Sherwin-Williams, or Dunn-Edwards. We help you choose the right product line
            and sheen for your surfaces and climate, and we can color-match any existing
            paint. Quality materials cost a little more up front and last years longer,
            which is why we never quote builder-grade paint.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-cream-dark py-20 lg:py-28 px-5 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-2.5 mb-6">
              <span className="h-px w-8 bg-navy/30" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-navy/70">What we do</span>
            </div>
            <h2 className="font-black tracking-[-0.04em] leading-[0.95] text-4xl sm:text-5xl text-ink uppercase">
              Painting services in<br /><span className="text-navy">{c.name}.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s) => (
              <Link key={s.href} href={s.href} className="group relative overflow-hidden rounded-3xl bg-ink aspect-[4/5]">
                <Image src={s.image} alt={`${s.name} in ${c.name}`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:768px) 100vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="font-black tracking-tight text-lg text-white uppercase">{s.name}</h3>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-[12px] font-extrabold uppercase tracking-wider text-orange">
                    Learn more
                    <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-ink text-white py-20 lg:py-28 px-5 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="font-black tracking-[-0.04em] leading-[0.95] text-4xl sm:text-5xl uppercase mb-14 max-w-2xl">
            Why {c.name} homeowners<br /><span className="text-orange">choose us.</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((b) => (
              <div key={b.title}>
                <div className="h-px w-10 bg-orange mb-5" />
                <h3 className="font-black tracking-tight text-xl uppercase mb-3">{b.title}</h3>
                <p className="text-white/65 leading-relaxed text-[15px]">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-20 lg:py-28 px-5 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2.5 mb-6">
              <span className="h-px w-8 bg-navy/30" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-navy/70">FAQ</span>
              <span className="h-px w-8 bg-navy/30" />
            </div>
            <h2 className="font-black tracking-[-0.04em] leading-[0.95] text-4xl sm:text-5xl text-ink uppercase">
              {c.name} painting questions.
            </h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CONTACT */}
      <ContactForm />

      {/* NEARBY SERVICE AREAS */}
      <section className="bg-cream-dark py-16 lg:py-20 px-5 lg:px-10 border-t border-ink/5">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-[11px] uppercase tracking-[0.22em] text-navy/70 font-semibold mb-6">We also serve</p>
          <div className="flex flex-wrap gap-2.5">
            {others.map((o) => (
              <Link key={o.slug} href={`/painters/${o.slug}`} className="rounded-full border border-ink/12 bg-white px-4 py-2 text-[13px] font-semibold text-ink transition-all hover:border-navy hover:text-navy">
                Painters in {o.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
