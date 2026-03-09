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
      "Transform your indoor spaces with expert color consultations and flawless application.",
    href: "/services/interior-painting",
  },
  {
    name: "Exterior Painting",
    image: "/images/exterior/exterior-services.jpg",
    description:
      "Enhance your home's curb appeal and protect it from the elements with durable coatings.",
    href: "/services/exterior-painting",
  },
  {
    name: "Commercial Painting",
    image: "/images/commercial/commercial-services.jpg",
    description:
      "Professional painting for offices, warehouses, retail spaces, and tenant improvements.",
    href: "/services/commercial-painting",
  },
  {
    name: "Epoxy Flooring",
    image: "/images/epoxy/epoxy-services.jpg",
    description:
      "Transform your floors with premium epoxy coatings. Ideal for garages, basements, and commercial spaces.",
    href: "/services/epoxy-flooring",
  },
  {
    name: "Concrete Polishing",
    image: "/images/concrete/polished-services.jpg",
    description:
      "A budget-friendly alternative to epoxy with a sleek, polished finish for garage floors.",
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
      "Say goodbye to outdated popcorn ceilings with our professional removal service.",
    href: "/services/specialty-services",
  },
];

const reviews = [
  {
    name: "Sandra Sandra",
    stars: 5,
    time: "2 months ago",
    text: "Our experience with Hrccoatings was exceptional! We are very satisfied with the outcome of our project. Hector and Jr. delivered outstanding results on our interior painting.",
  },
  {
    name: "Elio Espinosa",
    stars: 5,
    time: "3 months ago",
    text: "They painted our home last year and they were professional, efficient, and did an excellent job!",
  },
  {
    name: "Jessica Aliano, Local Realtor",
    stars: 5,
    time: "4 months ago",
    text: "I've hired Hector and Junior multiple times, and they always deliver top-notch results. Most recently, they completed a full beach-themed remodel for me in Carlsbad\u2014including two accent walls with navy and light blue stripes that turned out absolutely stunning. Their work is clean, detailed, and professional every time. This hardworking father-son team is punctual, tidy, and fast. Their pricing is very reasonable, and they go above and beyond to make sure the job is done right. In addition to painting, they also do epoxy floors (perfect for garages) with several great finish options, popcorn removal, and their stucco work is excellent too. As a local realtor, I now refer Hector and Junior to all of my real estate clients. If you want high-quality work at a fair price, call Hector and Junior \u2014 you'll be glad you did!",
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
      "Most residential projects are completed within 2-5 days, while commercial projects vary based on scope. We'll provide a clear timeline during your free estimate.",
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
];

const blogPosts = [
  {
    image: "/images/blog/paint-color-selection.jpg",
    title: "How to Choose the Perfect Paint Color",
    date: "Dec 10, 2024",
    excerpt:
      "Expert tips on choosing the perfect paint color for your San Diego home.",
    href: "/blog/paint-color-guide",
  },
  {
    image: "/images/blog/home-needs-repainting.jpg",
    title: "5 Signs Your Home Needs Repainting",
    date: "Dec 5, 2024",
    excerpt:
      "Discover the key signs that indicate your home needs repainting.",
    href: "/blog/signs-home-needs-repainting",
  },
  {
    image: "/images/blog/epoxy-vs-traditional.jpg",
    title: "Epoxy Flooring vs. Traditional Garage Floors",
    date: "Nov 28, 2024",
    excerpt: "Compare epoxy flooring vs traditional garage floors.",
    href: "/blog/epoxy-vs-traditional",
  },
];

const serviceAreas = [
  "Clairemont",
  "Carlsbad",
  "La Jolla",
  "Chula Vista",
  "Pacific Beach",
  "Mission Valley",
  "Point Loma",
  "North Park",
  "Hillcrest",
  "Del Mar",
  "Encinitas",
  "Oceanside",
];

/* ──────────────────────── star helper ─────────────────────────── */

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="h-5 w-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* ═══════════════════════════ PAGE ══════════════════════════════ */

export default function Home() {
  return (
    <>
      {/* ────────── 1. HERO ────────── */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/hero-painting.jpg"
          alt="Professional painting by HRCCoatings LLC"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Navy overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B2C75]/80 via-[#0B2C75]/70 to-[#0B2C75]/90" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 py-32 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Transform Your Space with San Diego&apos;s Trusted Painting Experts
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
            Family-run, faith-based painting company serving San Diego County
            for over 20 years
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex items-center rounded-lg bg-red px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-[#B8102F] active:scale-[0.98]"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:+16192893908"
              className="inline-flex items-center rounded-lg border-2 border-white px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10 active:scale-[0.98]"
            >
              <svg
                className="mr-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call (619) 289-3908
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {[
              { label: "5.0 Google Rating", icon: "star" },
              { label: "15+ Reviews", icon: "chat" },
              { label: "Free Estimates", icon: "check" },
              { label: "$500 Off First Project", icon: "tag" },
            ].map((badge) => (
              <div
                key={badge.label}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm ${
                  badge.icon === "tag"
                    ? "bg-orange/20 text-orange"
                    : "bg-white/10 text-white"
                }`}
              >
                {badge.icon === "star" && (
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                )}
                {badge.icon === "chat" && (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                )}
                {badge.icon === "check" && (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {badge.icon === "tag" && (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                )}
                {badge.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── 2. STATISTICS ────────── */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            { number: "600+", label: "Projects Completed" },
            { number: "20+", label: "Years in Business" },
            { number: "5.0", label: "Star Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-5xl font-extrabold text-navy sm:text-6xl">
                {stat.number}
              </p>
              <p className="mt-2 text-lg font-medium text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ────────── 3. OFFER BANNER ────────── */}
      <section className="bg-gradient-to-r from-red to-orange py-14 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            $500 Off Your First Project
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/90">
            New customers receive $500 off their first painting or coating
            project. Contact us today for your free estimate!
          </p>
          <Link
            href="#contact"
            className="mt-8 inline-flex items-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-red shadow-lg transition hover:bg-gray-50 active:scale-[0.98]"
          >
            Claim Your Discount
          </Link>
        </div>
      </section>

      {/* ────────── 4. TEAM SECTION ────────── */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/team-photo.jpg"
              alt="Hector and Junior Rivera - HRCCoatings team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Meet the Team
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                <span className="font-semibold text-navy">
                  Hector Rivera
                </span>{" "}
                &mdash; Founder &amp; Owner
              </p>
              <p>
                <span className="font-semibold text-navy">
                  Junior Rivera
                </span>{" "}
                &mdash; Co-Owner &amp; Operations Manager
              </p>
              <p>
                With over 20 years of combined expertise, Hector and Junior
                are a father-son team dedicated to delivering top-quality
                painting and coating services across San Diego County. Their
                commitment to craftsmanship, honest communication, and
                customer satisfaction has built a reputation that homeowners
                and businesses trust.
              </p>
              <p>
                As a faith-based, family-run business, every project is
                treated with personal care and attention to detail that
                larger companies simply can&apos;t match.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────── 5. SERVICES ────────── */}
      <section id="gallery" className="bg-gray-light py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-lg text-gray-600">
              Professional painting and coating solutions for every need
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="text-xl font-bold text-white">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/80">
                      {service.description}
                    </p>
                    <span className="mt-3 inline-flex items-center text-sm font-semibold text-orange transition-colors group-hover:text-white">
                      Learn More
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
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── 6. TRUSTED BRANDS ────────── */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Trusted by the Best Brands
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-10 sm:gap-16">
            {[
              {
                src: "/images/benjamin-moore-logo.png",
                alt: "Benjamin Moore",
              },
              {
                src: "/images/dunn-edwards-logo.png",
                alt: "Dunn-Edwards",
              },
              {
                src: "/images/sherwin-williams-logo.png",
                alt: "Sherwin-Williams",
              },
            ].map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={60}
                className="h-12 w-auto object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-14"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ────────── 7. WHY CHOOSE US ────────── */}
      <section className="bg-gray-light py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* 20+ Years */}
            <div className="rounded-2xl bg-white p-8 text-center shadow-sm transition hover:shadow-md">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy/10">
                <svg className="h-7 w-7 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy">
                20+ Years Experience
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Over two decades of professional painting and coating expertise
              </p>
            </div>

            {/* Family-Run */}
            <div className="rounded-2xl bg-white p-8 text-center shadow-sm transition hover:shadow-md">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy/10">
                <svg className="h-7 w-7 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy">
                Family-Run Business
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Father-son team committed to quality and personal service
              </p>
            </div>

            {/* Premium Materials */}
            <div className="rounded-2xl bg-white p-8 text-center shadow-sm transition hover:shadow-md">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy/10">
                <svg className="h-7 w-7 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy">
                Premium Materials
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                We use only top-quality paints from Benjamin Moore, Sherwin
                Williams, and Dunn-Edwards
              </p>
            </div>

            {/* 100% Satisfaction */}
            <div className="rounded-2xl bg-white p-8 text-center shadow-sm transition hover:shadow-md">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy/10">
                <svg className="h-7 w-7 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy">
                100% Satisfaction
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                We stand behind every project with our quality guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────── 8. REVIEWS ────────── */}
      <section id="reviews" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              5.0 rating with 15 Google Reviews
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition hover:shadow-md"
              >
                <Stars count={review.stars} />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-6 border-t border-gray-100 pt-4">
                  <p className="text-sm font-semibold text-navy">
                    {review.name}
                  </p>
                  <p className="text-xs text-gray-400">{review.time}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://share.google/aYStfuIFQ71wmgJg0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border-2 border-navy px-6 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
            >
              Write a Google Review
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ────────── 9. ABOUT ────────── */}
      <section className="bg-gray-light py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <Image
              src="/images/hrc-logo.png"
              alt="HRCCoatings LLC logo"
              width={320}
              height={100}
              className="h-auto w-64 sm:w-80"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              About HRCCoatings LLC
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                HRCCoatings LLC is a faith-based, family-run painting company
                trusted by homeowners and businesses across San Diego. Built
                on over 20 years of experience, we combine quality
                craftsmanship with honest, reliable service.
              </p>
              <p>
                Whether it&apos;s a residential refresh or a commercial
                transformation, we treat every project with the care and
                attention it deserves.
              </p>
            </div>

            {/* Mini stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { number: "20+", label: "Years Experience" },
                { number: "500+", label: "Projects Completed" },
                { number: "100%", label: "Satisfaction" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-white p-4 text-center shadow-sm"
                >
                  <p className="text-2xl font-extrabold text-navy">
                    {stat.number}
                  </p>
                  <p className="mt-1 text-xs font-medium text-gray-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ────────── 10. SERVICE AREAS ────────── */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Proudly Serving San Diego County
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-gray-600">
            Professional painting services throughout San Diego and
            surrounding communities
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-navy/20 bg-navy/5 px-5 py-2.5 text-sm font-medium text-navy transition hover:bg-navy hover:text-white"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── 11. FAQ ────────── */}
      <section className="bg-gray-light py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* ────────── 12. BLOG PREVIEW ────────── */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              From Our Blog
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium text-gray-400">
                    {post.date}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-navy group-hover:text-red transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-red">
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── 13. CONTACT FORM ────────── */}
      <ContactForm />
    </>
  );
}
