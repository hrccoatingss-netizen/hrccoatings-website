import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Choose the Perfect Paint Color for Your Home",
  description:
    "Expert tips on choosing the perfect paint color for your San Diego home. Learn about color psychology, lighting considerations, and professional color consultation.",
  alternates: { canonical: "/blog/paint-color-guide" },
};

const relatedPosts = [
  {
    title: "5 Signs Your Home Needs Repainting",
    href: "/blog/signs-home-needs-repainting",
    date: "Dec 5, 2024",
  },
  {
    title: "Epoxy Flooring vs. Traditional Garage Floors",
    href: "/blog/epoxy-vs-traditional",
    date: "Nov 28, 2024",
  },
];

export default function PaintColorGuidePage() {
  return (
    <>
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
          <span className="text-navy font-medium">Paint Color Guide</span>
        </div>
      </nav>

      {/* Article */}
      <article className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <header className="mb-10">
            <h1 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
              How to Choose the Perfect Paint Color for Your Home
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
              <time dateTime="2024-12-10">December 10, 2024</time>
              <span className="h-1 w-1 rounded-full bg-gray-300" />
              <span>8 min read</span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/blog/paint-color-selection.jpg"
              alt="Choosing the perfect paint color for your home"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          {/* Content */}
          <div className="prose-custom">
            <p className="text-lg leading-relaxed text-gray-600">
              Choosing the right paint color can feel overwhelming with thousands
              of options available. But with a few guiding principles, you can
              confidently select colors that transform your space and reflect
              your personal style. Here&apos;s our expert guide to choosing the
              perfect paint color for your home.
            </p>

            {/* Section 1 */}
            <h2 className="mt-10 text-2xl font-bold text-navy">
              Understanding Color Psychology
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Colors have a powerful impact on mood and atmosphere. Here&apos;s
              how different color families affect your space:
            </p>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                <span>
                  <strong className="text-navy">Blues and Greens:</strong>{" "}
                  Calming and serene, perfect for bedrooms and bathrooms
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                <span>
                  <strong className="text-navy">Warm Neutrals:</strong> Cozy and
                  welcoming, ideal for living rooms and common areas
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                <span>
                  <strong className="text-navy">Yellows and Oranges:</strong>{" "}
                  Energizing and cheerful, great for kitchens and dining areas
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                <span>
                  <strong className="text-navy">Grays and Whites:</strong> Clean
                  and sophisticated, versatile for any room
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                <span>
                  <strong className="text-navy">Deep Tones:</strong> Dramatic and
                  intimate, excellent for accent walls or studies
                </span>
              </li>
            </ul>

            {/* Section 2 */}
            <h2 className="mt-10 text-2xl font-bold text-navy">
              Consider Your Lighting
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Lighting dramatically changes how paint colors appear:
            </p>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange" />
                <span>
                  <strong className="text-navy">North-facing rooms:</strong>{" "}
                  Receive cooler, indirect light. Warm colors can help balance
                  this.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange" />
                <span>
                  <strong className="text-navy">South-facing rooms:</strong> Get
                  warm, direct sunlight. Cool colors work beautifully here.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange" />
                <span>
                  <strong className="text-navy">East-facing rooms:</strong>{" "}
                  Morning light is warm but shifts cooler throughout the day.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange" />
                <span>
                  <strong className="text-navy">West-facing rooms:</strong>{" "}
                  Dramatic evening light can intensify warm tones.
                </span>
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Always test paint samples on your walls and observe them at
              different times of day before committing.
            </p>

            {/* Section 3 */}
            <h2 className="mt-10 text-2xl font-bold text-navy">
              The 60-30-10 Rule
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Professional designers use this classic ratio:
            </p>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-gray-100 bg-gray-light p-5">
                <p className="font-bold text-navy">60% Dominant Color</p>
                <p className="mt-1 text-sm text-gray-600">
                  Your main wall color, setting the overall tone
                </p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-light p-5">
                <p className="font-bold text-navy">30% Secondary Color</p>
                <p className="mt-1 text-sm text-gray-600">
                  Used on trim, accent walls, or large furniture pieces
                </p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-light p-5">
                <p className="font-bold text-navy">10% Accent Color</p>
                <p className="mt-1 text-sm text-gray-600">
                  Pops of color in decor, pillows, or artwork
                </p>
              </div>
            </div>
            <p className="mt-4 text-gray-600 leading-relaxed">
              This ratio creates visual balance and harmony in any room.
            </p>

            {/* Section 4 */}
            <h2 className="mt-10 text-2xl font-bold text-navy">
              Start with What You Have
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Look at the fixed elements in your space&mdash;flooring,
              countertops, cabinetry, and major furniture pieces. Pull colors
              from these existing elements to create a cohesive look. Pay
              attention to whether your fixed elements have warm or cool
              undertones, and choose paint colors that complement them.
            </p>

            {/* Section 5 */}
            <h2 className="mt-10 text-2xl font-bold text-navy">
              Don&apos;t Forget the Exterior
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              For exterior colors, consider your home&apos;s architectural style
              and neighborhood aesthetic. Check HOA guidelines if applicable. San
              Diego&apos;s Mediterranean and Spanish-style homes look stunning in
              warm earth tones, while modern homes can pull off bolder choices.
            </p>

            {/* Section 6 */}
            <h2 className="mt-10 text-2xl font-bold text-navy">
              Our Professional Color Consultation
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              At HRCCoatings, we offer complimentary color consultations with
              every painting project. Our experienced team helps you navigate
              color choices, considering your space&apos;s lighting, existing
              elements, and personal preferences. We work with premium brands
              like Benjamin Moore, Sherwin Williams, and Dunn-Edwards to ensure
              you get the perfect color every time.
            </p>

            {/* CTA Box */}
            <div className="mt-12 rounded-2xl bg-gradient-to-r from-navy to-[#163B8E] p-8 text-center sm:p-10">
              <h3 className="text-2xl font-bold text-white">
                Ready to Transform Your Space?
              </h3>
              <p className="mx-auto mt-3 max-w-lg text-white/90 leading-relaxed">
                Contact HRCCoatings for a free estimate and complimentary color
                consultation. Call{" "}
                <a
                  href="tel:+16192893908"
                  className="font-semibold underline underline-offset-2"
                >
                  (619) 289-3908
                </a>{" "}
                or fill out our contact form.
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
