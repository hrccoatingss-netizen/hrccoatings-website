import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Exterior Painting in Chula Vista, CA",
  description:
    "Exterior house painting in Chula Vista from a licensed, bonded contractor (CSLB #1158346). Full prep, premium UV-resistant paint, HOA color matching. Free estimates.",
  alternates: { canonical: "/services/exterior-painting-chula-vista" },
};

const faqs = [
  {
    question: "How much does exterior painting cost in Chula Vista?",
    answer:
      "Most Chula Vista exteriors run $3 to $6.50 per paintable square foot. A typical single-story home lands around $4,500 to $7,000 and larger two-story homes range higher depending on prep, stucco condition, and access. Every project gets a free, itemized estimate so you know exactly what's included.",
  },
  {
    question: "How long does an exterior paint job take?",
    answer:
      "Most Chula Vista homes take 2 to 4 days: pressure washing and prep first, then patching and priming, then finish coats. Weather in the South Bay is painter-friendly most of the year, so scheduling is usually quick.",
  },
  {
    question: "Can you match my HOA's approved colors?",
    answer:
      "Yes. We work in Otay Ranch, EastLake, and Rancho del Rey regularly and can match approved HOA palettes exactly, handle the color paperwork, and use products that meet community requirements.",
  },
  {
    question: "What paint do you use for Chula Vista exteriors?",
    answer:
      "Premium exterior lines from Benjamin Moore, Sherwin-Williams, and Dunn-Edwards, chosen for UV resistance. South Bay sun fades budget paint fast, so we only quote products that hold their color for years.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. HRCCoatings Inc is a licensed California painting contractor (CSLB #1158346), bonded and insured. You can verify our license anytime on the CSLB website.",
  },
];

export default function ExteriorPaintingChulaVistaPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Exterior House Painting",
    provider: {
      "@type": "LocalBusiness",
      name: "HRCCoatings Inc",
      telephone: "+16192893908",
      url: "https://hrccoatingsco.com",
      image: "https://hrccoatingsco.com/images/exterior/front-home.jpg",
      aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "20" },
    },
    areaServed: { "@type": "City", name: "Chula Vista, CA" },
    url: "https://hrccoatingsco.com/services/exterior-painting-chula-vista",
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-end bg-ink">
        <div className="absolute inset-0">
          <Image
            src="/images/exterior/front-home.jpg"
            alt="Exterior house painting in Chula Vista, CA"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/70 to-ink/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1400px] w-full px-5 lg:px-10 pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="mb-6 flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] font-bold text-white/60">
            <Link href="/" className="transition-colors hover:text-orange">Home</Link>
            <span>·</span>
            <Link href="/painters/chula-vista" className="transition-colors hover:text-orange">Chula Vista</Link>
            <span>·</span>
            <span className="text-orange">Exterior Painting</span>
          </div>
          <h1 className="text-white font-black tracking-[-0.04em] leading-[0.92] text-4xl sm:text-5xl lg:text-7xl uppercase max-w-4xl">
            Exterior Painting in<br />
            <span className="text-orange">Chula Vista, CA</span>
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-white/80 leading-relaxed">
            Full prep, premium UV-resistant paint, and clean lines from a licensed,
            bonded South Bay contractor. CSLB #1158346.
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

      {/* BODY */}
      <section className="bg-cream py-20 lg:py-28 px-5 lg:px-10">
        <div className="mx-auto max-w-[1100px] space-y-14">
          <div className="max-w-3xl">
            <h2 className="font-black tracking-[-0.03em] leading-tight text-2xl sm:text-3xl text-ink uppercase mb-4">
              Built for South Bay sun and salt air
            </h2>
            <p className="text-lg text-stone leading-relaxed">
              Chula Vista exteriors take a beating: strong sun most of the year,
              marine air rolling in from the bay, and stucco that opens hairline
              cracks as homes settle. Our exterior process is built around that
              reality. We pressure wash, scrape, and patch first, repair stucco
              and match texture where it&apos;s needed, prime bare spots, and
              finish with premium UV-resistant paint from Benjamin Moore,
              Sherwin-Williams, or Dunn-Edwards. The result holds its color for
              years instead of chalking out in two summers.
            </p>
          </div>
          <div className="max-w-3xl">
            <h2 className="font-black tracking-[-0.03em] leading-tight text-2xl sm:text-3xl text-ink uppercase mb-4">
              Otay Ranch, EastLake, and every HOA in between
            </h2>
            <p className="text-lg text-stone leading-relaxed">
              We paint across all of Chula Vista: Otay Ranch, EastLake, Rancho
              del Rey, Bonita, Terra Nova, and the established streets around
              Third Avenue. For HOA communities we match approved palettes
              exactly and handle the color documentation, so your project passes
              review the first time. Mobile and manufactured homes are welcome
              too, a service many painters skip.
            </p>
          </div>
          <div className="max-w-3xl">
            <h2 className="font-black tracking-[-0.03em] leading-tight text-2xl sm:text-3xl text-ink uppercase mb-4">
              What it costs
            </h2>
            <p className="text-lg text-stone leading-relaxed">
              Most Chula Vista exteriors land between $4,500 and $14,000
              depending on size, stories, and prep. For the full breakdown of
              what drives painting prices in San Diego County, read our{" "}
              <Link href="/blog/san-diego-painting-cost-guide" className="text-navy underline underline-offset-4">
                San Diego painting cost guide
              </Link>
              , or skip the math and get a free itemized estimate for your exact
              home. We also handle{" "}
              <Link href="/services/exterior-painting" className="text-navy underline underline-offset-4">
                exterior painting across San Diego County
              </Link>{" "}
              and everything else on our{" "}
              <Link href="/painters/chula-vista" className="text-navy underline underline-offset-4">
                Chula Vista services page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream-dark py-20 lg:py-28 px-5 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="font-black tracking-[-0.04em] leading-[0.95] text-4xl sm:text-5xl text-ink uppercase">
              Chula Vista exterior painting questions.
            </h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CONTACT */}
      <ContactForm />
    </>
  );
}
