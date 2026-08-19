import Image from "next/image";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import ContactForm from "@/components/ContactForm";

/* ------------------------------------------------------------------ */
/*  Type definitions                                                   */
/* ------------------------------------------------------------------ */

interface ProcessStep {
  title: string;
  description: string;
}

interface Benefit {
  title: string;
  description: string;
}

interface GalleryImage {
  src: string;
  alt: string;
}

interface GallerySection {
  label?: string;
  images: GalleryImage[];
}

interface BeforeAfterPair {
  label: string;
  before: string;
  after: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface RelatedService {
  title: string;
  href: string;
  image: string;
}

/** Optional "features grid" used instead of gallery on some pages. */
interface FeatureCard {
  title: string;
  description: string;
}

export interface ServicePageProps {
  /* URL slug for breadcrumbs and canonical, e.g. "interior-painting" */
  slug: string;

  /* Hero */
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;

  /* Overview */
  overview: string;

  /* Process */
  processSteps: ProcessStep[];

  /* Benefits */
  benefits: Benefit[];

  /* Gallery (standard image grid) */
  gallerySections?: GallerySection[];

  /* Before / After pairs (optional) */
  beforeAfter?: BeforeAfterPair[];

  /* Features grid (alternative to gallery, e.g. Wallpaper page) */
  featuresGrid?: FeatureCard[];

  /* FAQs */
  faqs: FAQItem[];

  /* Related Services */
  relatedServices: RelatedService[];
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ServicePageLayout({
  slug,
  heroTitle,
  heroSubtitle,
  heroImage,
  overview,
  processSteps,
  benefits,
  gallerySections,
  beforeAfter,
  featuresGrid,
  faqs,
  relatedServices,
}: ServicePageProps) {
  const canonicalUrl = `https://hrccoatingsco.com/services/${slug}`;

  return (
    <>
      {/* ─────────────────── STRUCTURED DATA ─────────────────── */}

      {/* Service schema with full Offer details */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${canonicalUrl}#service`,
            url: canonicalUrl,
            name: `${heroTitle} in San Diego`,
            serviceType: heroTitle,
            description: overview.split("\n\n")[0],
            image: `https://hrccoatingsco.com${heroImage}`,
            provider: {
              "@type": "LocalBusiness",
              "@id": "https://hrccoatingsco.com#business",
              name: "HRCCoatings Inc",
              url: "https://hrccoatingsco.com",
              telephone: "+16192893908",
              email: "hrccoatingss@gmail.com",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "8334 Clairemont Mesa Blvd Ste 101",
                addressLocality: "San Diego",
                addressRegion: "CA",
                postalCode: "92111",
                addressCountry: "US",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "19",
              },
            },
            areaServed: [
              {
                "@type": "City",
                name: "San Diego",
                containedInPlace: { "@type": "State", name: "California" },
              },
              { "@type": "City", name: "Carlsbad" },
              { "@type": "City", name: "La Jolla" },
              { "@type": "City", name: "Chula Vista" },
              { "@type": "City", name: "Encinitas" },
              { "@type": "City", name: "Oceanside" },
            ],
            offers: {
              "@type": "Offer",
              name: "Free Estimate",
              description:
                "Free in-home estimate with no obligation. $500 off first project for new customers.",
              price: "0",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              validFrom: "2026-01-01",
              url: `${canonicalUrl}#contact`,
            },
          }),
        }}
      />

      {/* FAQ Page schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((item) => ({
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

      {/* HowTo schema for the process */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: `Our ${heroTitle} Process`,
            description: `The step-by-step process HRCCoatings Inc follows for every ${heroTitle.toLowerCase()} project in San Diego.`,
            image: `https://hrccoatingsco.com${heroImage}`,
            totalTime: "P3D",
            estimatedCost: {
              "@type": "MonetaryAmount",
              currency: "USD",
              value: "0",
            },
            supply: [
              { "@type": "HowToSupply", name: "Premium paints (Benjamin Moore, Sherwin Williams, Dunn-Edwards)" },
              { "@type": "HowToSupply", name: "Drop cloths and surface protection" },
              { "@type": "HowToSupply", name: "Primers, fillers, and prep materials" },
            ],
            tool: [
              { "@type": "HowToTool", name: "Professional brushes and rollers" },
              { "@type": "HowToTool", name: "HVLP sprayers" },
              { "@type": "HowToTool", name: "Sanders and prep equipment" },
            ],
            step: processSteps.map((step, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              name: step.title,
              text: step.description,
              url: `${canonicalUrl}#step-${i + 1}`,
            })),
          }),
        }}
      />

      {/* Breadcrumb schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://hrccoatingsco.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: "https://hrccoatingsco.com/#services",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: heroTitle,
                item: canonicalUrl,
              },
            ],
          }),
        }}
      />

      {/* ─────────────────── 1. EDITORIAL HERO ─────────────────── */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-end bg-ink">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={heroTitle}
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
            {/* Breadcrumb visual */}
            <div className="mb-6 flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] font-bold text-white/60">
              <Link href="/" className="transition-colors hover:text-orange">
                Home
              </Link>
              <span>·</span>
              <span>Services</span>
              <span>·</span>
              <span className="text-orange">{heroTitle}</span>
            </div>

            <h1 className="text-white font-black tracking-[-0.045em] leading-[0.92] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl uppercase">
              {heroTitle}
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed">
              {heroSubtitle}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange text-white px-8 py-4 text-[13px] font-extrabold uppercase tracking-wider transition-all hover:bg-red"
              >
                Get Free Estimate
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="tel:+16192893908"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 text-[14px] font-medium text-white transition-all hover:bg-white/5"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                (619) 289-3908
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── 2. EDITORIAL OVERVIEW ─────────────────── */}
      <section className="bg-cream py-24 lg:py-32 px-5 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="inline-flex items-center gap-2.5 mb-6">
                <span className="h-px w-8 bg-navy/30" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-navy/70">
                  About this service
                </span>
              </div>
              <h2 className="font-black tracking-[-0.04em] leading-[0.95] text-4xl sm:text-5xl lg:text-6xl text-ink uppercase">
                Done<br />
                <span className="text-navy">right.</span>
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-base sm:text-lg leading-relaxed text-stone">
              {overview.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── 3. PROCESS STEPS ─────────────────── */}
      <section className="bg-ink py-24 lg:py-32 px-5 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2.5 mb-6">
              <span className="h-px w-8 bg-orange" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-orange">
                Our process
              </span>
            </div>
            <h2 className="font-black tracking-[-0.04em] leading-[0.95] text-5xl sm:text-6xl lg:text-7xl text-white uppercase max-w-3xl">
              How we<br />
              <span className="text-orange">work.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {processSteps.map((step, i) => (
              <div
                key={i}
                id={`step-${i + 1}`}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 lg:p-10 transition-all hover:bg-white/[0.06]"
              >
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-orange font-black text-5xl lg:text-6xl tracking-tight">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-white font-black text-xl lg:text-2xl tracking-tight uppercase">
                    {step.title}
                  </h3>
                </div>
                <p className="text-white/60 leading-relaxed text-[15px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── 4. BENEFITS ─────────────────── */}
      <section className="bg-cream py-24 lg:py-32 px-5 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-16 lg:mb-20 max-w-3xl">
            <div className="inline-flex items-center gap-2.5 mb-6">
              <span className="h-px w-8 bg-navy/30" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-navy/70">
                Why us
              </span>
            </div>
            <h2 className="font-black tracking-[-0.04em] leading-[0.95] text-5xl sm:text-6xl lg:text-7xl text-ink uppercase">
              Why choose<br />
              <span className="text-navy">HRCCoatings.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="rounded-3xl bg-white p-7 lg:p-8 border border-ink/5 hover:border-navy/20 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-orange font-black text-3xl lg:text-4xl tracking-tight mb-5">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-ink font-black text-lg tracking-tight uppercase mb-3">
                  {benefit.title}
                </h3>
                <p className="text-stone text-[14px] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── 5a. FEATURES GRID (alternative) ─────────────────── */}
      {featuresGrid && featuresGrid.length > 0 && (
        <section className="bg-cream-dark py-24 lg:py-32 px-5 lg:px-10">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-16 max-w-3xl">
              <div className="inline-flex items-center gap-2.5 mb-6">
                <span className="h-px w-8 bg-navy/30" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-navy/70">
                  What&apos;s included
                </span>
              </div>
              <h2 className="font-black tracking-[-0.04em] leading-[0.95] text-5xl sm:text-6xl text-ink uppercase">
                Every detail<br />
                <span className="text-navy">covered.</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuresGrid.map((feature, i) => (
                <div
                  key={i}
                  className="rounded-3xl bg-white p-7 border border-ink/5 hover:border-navy/20 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-navy/5 text-navy">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-ink font-black text-lg tracking-tight uppercase mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-stone text-[14px] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─────────────────── 5b. GALLERY ─────────────────── */}
      {gallerySections && gallerySections.length > 0 && (
        <section className="bg-cream-dark py-24 lg:py-32 px-5 lg:px-10">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-16 max-w-3xl">
              <div className="inline-flex items-center gap-2.5 mb-6">
                <span className="h-px w-8 bg-navy/30" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-navy/70">
                  Recent work
                </span>
              </div>
              <h2 className="font-black tracking-[-0.04em] leading-[0.95] text-5xl sm:text-6xl text-ink uppercase">
                The work<br />
                <span className="text-navy">speaks.</span>
              </h2>
            </div>

            {gallerySections.map((section, si) => (
              <div key={si} className={si > 0 ? "mt-16" : ""}>
                {section.label && (
                  <h3 className="mb-8 text-[12px] uppercase tracking-[0.22em] font-bold text-navy">
                    {section.label}
                  </h3>
                )}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                  {section.images.map((img, ii) => (
                    <div
                      key={ii}
                      className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink/5"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ─────────────────── 5c. BEFORE / AFTER ─────────────────── */}
      {beforeAfter && beforeAfter.length > 0 && (
        <section className="bg-cream py-24 lg:py-32 px-5 lg:px-10">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-16 max-w-3xl">
              <div className="inline-flex items-center gap-2.5 mb-6">
                <span className="h-px w-8 bg-navy/30" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-navy/70">
                  Transformations
                </span>
              </div>
              <h2 className="font-black tracking-[-0.04em] leading-[0.95] text-5xl sm:text-6xl text-ink uppercase">
                Before<br />
                <span className="text-navy">&amp; after.</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {beforeAfter.map((pair, i) => (
                <div key={i}>
                  <h3 className="mb-4 text-[13px] uppercase tracking-[0.18em] font-bold text-ink">
                    {pair.label}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink/5">
                      <Image
                        src={pair.before}
                        alt={`${pair.label} - Before`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 50vw, 25vw"
                      />
                      <span className="absolute bottom-3 left-3 rounded-full bg-ink/85 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">
                        Before
                      </span>
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink/5">
                      <Image
                        src={pair.after}
                        alt={`${pair.label} - After`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 50vw, 25vw"
                      />
                      <span className="absolute bottom-3 left-3 rounded-full bg-orange px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">
                        After
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─────────────────── 6. FAQs ─────────────────── */}
      <section className="bg-cream py-24 lg:py-32 px-5 lg:px-10">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2.5 mb-6">
                <span className="h-px w-8 bg-navy/30" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-navy/70">
                  FAQ
                </span>
              </div>
              <h2 className="font-black tracking-[-0.04em] leading-[0.95] text-5xl sm:text-6xl text-ink uppercase">
                Common<br />
                <span className="text-navy">questions.</span>
              </h2>
              <p className="mt-6 text-base text-stone leading-relaxed max-w-sm">
                Don&apos;t see your question? Call us or send a message. We&apos;ll get back to you within 24 hours.
              </p>
            </div>
            <div className="lg:col-span-7">
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── 7. RELATED SERVICES ─────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32 px-5 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-16 max-w-3xl">
            <div className="inline-flex items-center gap-2.5 mb-6">
              <span className="h-px w-8 bg-navy/30" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-navy/70">
                More services
              </span>
            </div>
            <h2 className="font-black tracking-[-0.04em] leading-[0.95] text-5xl sm:text-6xl text-ink uppercase">
              Need<br />
              <span className="text-navy">something else?</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {relatedServices.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="group relative overflow-hidden rounded-3xl bg-ink aspect-[4/5]"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7">
                  <h3 className="text-white font-black text-2xl lg:text-3xl tracking-tight uppercase mb-2">
                    {service.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-orange">
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

      {/* ─────────────────── 8. CONTACT FORM ─────────────────── */}
      <ContactForm />
    </>
  );
}
