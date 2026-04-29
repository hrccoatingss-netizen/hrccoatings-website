import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata: Metadata = {
  title: "5 Signs Your Home Needs Repainting",
  description:
    "Discover the 5 key signs that indicate your San Diego home needs repainting. Protect your investment with timely professional painting.",
  alternates: { canonical: "/blog/signs-home-needs-repainting" },
};

const relatedPosts = [
  {
    title: "How to Choose the Perfect Paint Color for Your Home",
    href: "/blog/paint-color-guide",
    date: "Dec 10, 2024",
  },
  {
    title: "Epoxy Flooring vs. Traditional Garage Floors",
    href: "/blog/epoxy-vs-traditional",
    date: "Nov 28, 2024",
  },
];

export default function SignsHomeNeedsRepaintingPage() {
  return (
    <>
      <ArticleSchema
        slug="signs-home-needs-repainting"
        title="5 Signs Your Home Needs Repainting"
        description="Discover the 5 key signs that indicate your San Diego home needs repainting. Protect your investment with timely professional painting."
        image="/images/blog/home-needs-repainting.jpg"
        datePublished="2024-12-05"
        category="Home Care"
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
            Signs Home Needs Repainting
          </span>
        </div>
      </nav>

      {/* Article */}
      <article className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <header className="mb-10">
            <h1 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
              5 Signs Your Home Needs Repainting
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
              <time dateTime="2024-12-05">December 5, 2024</time>
              <span className="h-1 w-1 rounded-full bg-gray-300" />
              <span>6 min read</span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/blog/home-needs-repainting.jpg"
              alt="Signs your San Diego home needs repainting"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          {/* Content */}
          <div className="prose-custom">
            <p className="text-lg leading-relaxed text-gray-600">
              Your home&apos;s paint does more than look good&mdash;it protects
              your biggest investment from the elements. Knowing when it&apos;s
              time to repaint can save you from costly repairs down the road.
              Here are the five key signs that your San Diego home needs a fresh
              coat of paint.
            </p>

            {/* Sign 1 */}
            <div className="mt-10 rounded-2xl border-l-4 border-red bg-gray-light p-6 sm:p-8">
              <h2 className="text-xl font-bold text-navy sm:text-2xl">
                1. Peeling, Cracking, or Flaking Paint
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                This is the most obvious sign that your paint has failed. When
                paint peels, cracks, or flakes, it exposes the underlying surface
                to moisture, UV rays, and temperature fluctuations. In San
                Diego&apos;s coastal climate, this can quickly lead to wood rot,
                stucco damage, or mold growth if left unaddressed.
              </p>
            </div>

            {/* Sign 2 */}
            <div className="mt-6 rounded-2xl border-l-4 border-orange bg-gray-light p-6 sm:p-8">
              <h2 className="text-xl font-bold text-navy sm:text-2xl">
                2. Fading and Discoloration
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                San Diego&apos;s abundant sunshine is wonderful for outdoor
                living, but UV rays are harsh on paint. If your once-vibrant
                colors are looking washed out or unevenly faded, it&apos;s more
                than an aesthetic issue&mdash;the paint&apos;s protective
                properties are also compromised.
              </p>
            </div>

            {/* Sign 3 */}
            <div className="mt-6 rounded-2xl border-l-4 border-navy bg-gray-light p-6 sm:p-8">
              <h2 className="text-xl font-bold text-navy sm:text-2xl">
                3. Chalking
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Run your hand across your exterior walls. If you notice a white,
                powdery residue on your fingers, that&apos;s
                chalking&mdash;a sign that the paint&apos;s binders are breaking
                down. While some chalking is normal over time, excessive chalking
                means the paint has reached the end of its useful lifespan.
              </p>
            </div>

            {/* Sign 4 */}
            <div className="mt-6 rounded-2xl border-l-4 border-red bg-gray-light p-6 sm:p-8">
              <h2 className="text-xl font-bold text-navy sm:text-2xl">
                4. Stains and Water Damage
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Look for these warning signs:
              </p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red" />
                  <span>
                    <strong className="text-navy">Dark streaks or stains:</strong>{" "}
                    Often indicate mold or mildew growth
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red" />
                  <span>
                    <strong className="text-navy">
                      Bubbling or blistering:
                    </strong>{" "}
                    Usually caused by moisture trapped beneath the paint
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red" />
                  <span>
                    <strong className="text-navy">
                      Water rings or marks:
                    </strong>{" "}
                    Signs of leaks that need addressing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red" />
                  <span>
                    <strong className="text-navy">Rust stains:</strong> Indicate
                    corroding nails or metal components
                  </span>
                </li>
              </ul>
              <p className="mt-3 text-gray-600 leading-relaxed">
                These issues often require more than just a new coat of
                paint&mdash;the underlying cause must be addressed first.
              </p>
            </div>

            {/* Sign 5 */}
            <div className="mt-6 rounded-2xl border-l-4 border-orange bg-gray-light p-6 sm:p-8">
              <h2 className="text-xl font-bold text-navy sm:text-2xl">
                5. It&apos;s Been 5-10 Years
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Even if your paint still looks decent, age matters. Here are
                general guidelines:
              </p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange" />
                  <span>
                    <strong className="text-navy">Exterior paint:</strong> 5-7
                    years (less in coastal areas)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange" />
                  <span>
                    <strong className="text-navy">Interior paint:</strong> 5-10
                    years depending on room use
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange" />
                  <span>
                    <strong className="text-navy">High-traffic areas:</strong>{" "}
                    May need repainting every 3-5 years
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange" />
                  <span>
                    <strong className="text-navy">Trim and doors:</strong> Often
                    need more frequent touch-ups
                  </span>
                </li>
              </ul>
            </div>

            {/* Cost of Waiting */}
            <h2 className="mt-10 text-2xl font-bold text-navy">
              The Cost of Waiting Too Long
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Delaying repainting doesn&apos;t just affect
              appearance&mdash;it can lead to expensive structural repairs.
              Moisture damage, wood rot, and mold remediation cost far more than
              a timely repaint. Regular maintenance painting is an investment
              that protects your property value.
            </p>

            {/* CTA Box */}
            <div className="mt-12 rounded-2xl bg-gradient-to-r from-red to-orange p-8 text-center sm:p-10">
              <h3 className="text-2xl font-bold text-white">
                Schedule Your Free Inspection
              </h3>
              <p className="mx-auto mt-3 max-w-lg text-white/90 leading-relaxed">
                Don&apos;t wait until small problems become big expenses. Get a
                professional assessment of your home&apos;s paint condition
                today&mdash;plus get $500 off as a first-time customer! Call{" "}
                <a
                  href="tel:+16193041289"
                  className="font-semibold underline underline-offset-2"
                >
                  (619) 304-1289
                </a>
              </p>
              <Link
                href="/#contact"
                className="mt-6 inline-flex items-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-red shadow-lg transition hover:bg-gray-50 active:scale-[0.98]"
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
