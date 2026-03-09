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
/*  Inline SVG icons for the 4 benefit cards (generic paint-themed)    */
/* ------------------------------------------------------------------ */

const benefitIcons = [
  /* Icon 1 - Star / award */
  <svg key="b1" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>,
  /* Icon 2 - Paint bucket / swatch */
  <svg key="b2" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072" />
  </svg>,
  /* Icon 3 - Check badge */
  <svg key="b3" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
  </svg>,
  /* Icon 4 - Shield / clock */
  <svg key="b4" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>,
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ServicePageLayout({
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
  return (
    <>
      {/* Service + FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${heroTitle} in San Diego`,
            description: overview.split("\n\n")[0],
            provider: {
              "@type": "LocalBusiness",
              name: "HRCCoatings LLC",
              url: "https://hrccoatingsco.com",
              telephone: "+16192893908",
            },
            areaServed: {
              "@type": "City",
              name: "San Diego",
              containedInPlace: { "@type": "State", name: "California" },
            },
            offers: {
              "@type": "Offer",
              description: "Free estimates with no obligation",
              price: "0",
              priceCurrency: "USD",
            },
          }),
        }}
      />
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

      {/* ====== 1. HERO ====== */}
      <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden sm:min-h-[500px]">
        <Image
          src={heroImage}
          alt={heroTitle}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-24 text-center text-white sm:py-32">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange">
            HRCCoatings LLC
          </p>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            {heroTitle}
          </h1>
          <p className="mt-4 text-lg text-gray-200 sm:text-xl">
            {heroSubtitle}
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="#contact"
              className="rounded-lg bg-red px-8 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-[#B8102F]"
            >
              Get a Free Estimate
            </Link>
            <a
              href="tel:+16192893908"
              className="rounded-lg border border-white/30 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Call (619) 289-3908
            </a>
          </div>
        </div>
      </section>

      {/* ====== 2. OVERVIEW ====== */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="mb-6 text-center text-3xl font-bold text-navy sm:text-4xl">
            About Our {heroTitle} Services
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-700 sm:text-lg">
            {overview.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 3. PROCESS STEPS ====== */}
      <section className="bg-gray-light py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-navy sm:text-4xl">
            Our Process
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:gap-10">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="flex gap-5 rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-lg font-bold text-white">
                  {i + 1}
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-navy">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 4. BENEFITS ====== */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-navy sm:text-4xl">
            Why Choose HRCCoatings
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="group rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-navy/10 text-navy transition group-hover:bg-navy group-hover:text-white">
                  {benefitIcons[i % benefitIcons.length]}
                </div>
                <h3 className="mb-2 text-lg font-bold text-navy">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 5a. FEATURES GRID (alternative to gallery) ====== */}
      {featuresGrid && featuresGrid.length > 0 && (
        <section className="bg-gray-light py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-bold text-navy sm:text-4xl">
              Our Services
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuresGrid.map((feature, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-navy/10 text-navy">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-navy">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ====== 5b. GALLERY ====== */}
      {gallerySections && gallerySections.length > 0 && (
        <section className="bg-gray-light py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-bold text-navy sm:text-4xl">
              Our Work
            </h2>
            {gallerySections.map((section, si) => (
              <div key={si} className={si > 0 ? "mt-12" : ""}>
                {section.label && (
                  <h3 className="mb-6 text-center text-xl font-semibold text-navy">
                    {section.label}
                  </h3>
                )}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {section.images.map((img, ii) => (
                    <div
                      key={ii}
                      className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-sm"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
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

      {/* ====== 5c. BEFORE / AFTER ====== */}
      {beforeAfter && beforeAfter.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-bold text-navy sm:text-4xl">
              Before &amp; After
            </h2>
            <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
              {beforeAfter.map((pair, i) => (
                <div key={i}>
                  <h3 className="mb-4 text-center text-lg font-semibold text-navy">
                    {pair.label}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-sm">
                      <Image
                        src={pair.before}
                        alt={`${pair.label} - Before`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 50vw, 25vw"
                      />
                      <span className="absolute bottom-2 left-2 rounded bg-navy/80 px-2 py-0.5 text-xs font-semibold text-white">
                        Before
                      </span>
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-sm">
                      <Image
                        src={pair.after}
                        alt={`${pair.label} - After`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 50vw, 25vw"
                      />
                      <span className="absolute bottom-2 left-2 rounded bg-orange/90 px-2 py-0.5 text-xs font-semibold text-white">
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

      {/* ====== 6. FAQs ====== */}
      <section className="bg-gray-light py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-navy sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* ====== 7. RELATED SERVICES ====== */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-navy sm:text-4xl">
            Related Services
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="group overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex items-center justify-between p-5">
                  <h3 className="text-lg font-bold text-navy">{service.title}</h3>
                  <svg
                    className="h-5 w-5 text-navy transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 8. CONTACT FORM ====== */}
      <ContactForm />
    </>
  );
}
