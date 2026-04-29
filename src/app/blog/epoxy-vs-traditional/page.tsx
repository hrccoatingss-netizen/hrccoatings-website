import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata: Metadata = {
  title: "Epoxy Flooring vs. Traditional Garage Floors",
  description:
    "Compare epoxy flooring vs traditional garage floors. Learn about costs, durability, maintenance, and which option is best for your San Diego garage.",
  alternates: { canonical: "/blog/epoxy-vs-traditional" },
};

const relatedPosts = [
  {
    title: "How to Choose the Perfect Paint Color for Your Home",
    href: "/blog/paint-color-guide",
    date: "Dec 10, 2024",
  },
  {
    title: "5 Signs Your Home Needs Repainting",
    href: "/blog/signs-home-needs-repainting",
    date: "Dec 5, 2024",
  },
];

export default function EpoxyVsTraditionalPage() {
  return (
    <>
      <ArticleSchema
        slug="epoxy-vs-traditional"
        title="Epoxy Flooring vs. Traditional Garage Floors"
        description="Compare epoxy flooring vs traditional garage floors. Learn about costs, durability, maintenance, and which option is best for your San Diego garage."
        image="/images/blog/epoxy-vs-traditional.jpg"
        datePublished="2024-11-28"
        category="Materials"
      />

      {/* Breadcrumb */}
      <nav className="bg-gray-light px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="transition hover:text-navy">
            Home
          </Link>
          <span>/</span>
          <Link href="/#blog" className="transition hover:text-navy">
            Blog
          </Link>
          <span>/</span>
          <span className="text-navy font-medium">
            Epoxy vs. Traditional Floors
          </span>
        </div>
      </nav>

      {/* Article */}
      <article className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <header className="mb-10">
            <h1 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Epoxy Flooring vs. Traditional Garage Floors
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
              <time dateTime="2024-11-28">November 28, 2024</time>
              <span className="h-1 w-1 rounded-full bg-gray-300" />
              <span>7 min read</span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/blog/epoxy-vs-traditional.jpg"
              alt="Epoxy flooring compared to traditional garage floors"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          {/* Content */}
          <div className="prose-custom">
            <p className="text-lg leading-relaxed text-gray-600">
              If you&apos;re tired of your dull, stained garage floor, you&apos;re
              not alone. More San Diego homeowners are discovering the
              transformative power of epoxy flooring. But is it worth the
              investment compared to leaving your concrete bare? Let&apos;s break
              down the comparison.
            </p>

            {/* Section 1 */}
            <h2 className="mt-10 text-2xl font-bold text-navy">
              Understanding Your Options
            </h2>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {/* Traditional */}
              <div className="rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-400">
                  Traditional Concrete
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    Porous surface absorbs oil, chemicals, and stains
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    Prone to cracking and deterioration over time
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    Difficult to clean and maintain
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    Dusts constantly, leaving residue on everything
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    Plain, industrial appearance
                  </li>
                </ul>
              </div>

              {/* Epoxy */}
              <div className="rounded-2xl border-2 border-navy bg-navy/5 p-6">
                <h3 className="text-lg font-bold text-navy">
                  Epoxy Floor Coatings
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Non-porous surface resists stains, oil, and chemicals
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Extremely durable&mdash;can last 15-20+ years
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Easy to clean&mdash;just sweep and mop
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Eliminates concrete dust
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Beautiful, professional appearance
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <h2 className="mt-10 text-2xl font-bold text-navy">
              Epoxy Flooring Options
            </h2>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-gray-light p-6 sm:p-8">
                <h3 className="text-lg font-bold text-navy">Epoxy Flake</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  Decorative flakes broadcast into the epoxy create a textured,
                  slip-resistant surface. Best for high-traffic garages,
                  workshops, and commercial spaces.
                </p>
              </div>
              <div className="rounded-2xl bg-gray-light p-6 sm:p-8">
                <h3 className="text-lg font-bold text-navy">Epoxy Metallic</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  Metallic pigments create stunning, one-of-a-kind swirled
                  patterns. Best for showroom garages, man caves, and spaces
                  where aesthetics matter most.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <h2 className="mt-10 text-2xl font-bold text-navy">
              Cost Comparison
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Here&apos;s how they stack up:
            </p>
            <div className="mt-6 space-y-4">
              {[
                {
                  label: "Initial Cost",
                  concrete: "Nothing upfront",
                  epoxy: "Moderate investment",
                },
                {
                  label: "Lifespan",
                  concrete: "5-10 years before significant deterioration",
                  epoxy: "15-20+ years",
                },
                {
                  label: "Maintenance",
                  concrete: "High maintenance",
                  epoxy: "Minimal upkeep",
                },
                {
                  label: "Stain Resistance",
                  concrete: "Poor resistance",
                  epoxy: "Excellent protection",
                },
                {
                  label: "Home Value",
                  concrete: "Adds no value",
                  epoxy: "Increases appeal and value",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-gray-100 p-5"
                >
                  <p className="font-bold text-navy">{item.label}</p>
                  <div className="mt-2 grid gap-2 sm:grid-cols-2">
                    <div className="flex items-start gap-2 text-sm text-gray-500">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-gray-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <span>
                        <strong>Bare Concrete:</strong> {item.concrete}
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-gray-600">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>
                        <strong className="text-navy">Epoxy:</strong>{" "}
                        {item.epoxy}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Section 4 */}
            <h2 className="mt-10 text-2xl font-bold text-navy">
              DIY vs. Professional Installation
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              DIY epoxy kits from hardware stores may seem like a bargain, but
              there&apos;s a significant difference from professional-grade
              systems. DIY kits typically use thinner coatings that may peel,
              yellow, or fail within a few years. Professional installation
              includes proper surface preparation (the most critical step),
              high-grade materials rated for long-term performance, and warranty
              coverage for your peace of mind.
            </p>

            {/* Section 5 */}
            <h2 className="mt-10 text-2xl font-bold text-navy">The Verdict</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              If you use your garage regularly, plan to stay in your home for
              several years, or simply want to protect and beautify your space,
              professional epoxy flooring is an excellent investment. The
              combination of durability, easy maintenance, and stunning
              aesthetics makes it the clear winner over bare concrete.
            </p>

            {/* CTA Box */}
            <div className="mt-12 rounded-2xl bg-gradient-to-r from-navy to-[#163B8E] p-8 text-center sm:p-10">
              <h3 className="text-2xl font-bold text-white">
                Transform Your Garage Today
              </h3>
              <p className="mx-auto mt-3 max-w-lg text-white/90 leading-relaxed">
                Ready to upgrade from boring concrete to a stunning, durable
                epoxy floor? Contact HRCCoatings Inc for a free estimate. First-time
                customers save $500! Call{" "}
                <a
                  href="tel:+16193041289"
                  className="font-semibold underline underline-offset-2"
                >
                  (619) 304-1289
                </a>
              </p>
              <Link
                href="/#contact"
                className="mt-6 inline-flex items-center rounded-lg bg-red px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-[#B8102F] active:scale-[0.98]"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-gray-light py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-bold text-navy">Related Articles</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {relatedPosts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group rounded-xl bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="text-xs text-gray-400">{post.date}</p>
                <h3 className="mt-2 font-bold text-navy transition group-hover:text-red">
                  {post.title}
                </h3>
                <span className="mt-3 inline-flex items-center text-sm font-semibold text-red">
                  Read More
                  <svg
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
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
