import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About HRCCoatings Inc - San Diego Painting Company Since 2003",
  description:
    "HRCCoatings Inc is a family-owned painting company in San Diego founded in 2003 by Hector Rivera. Father-son team with 20+ years experience, 600+ projects, and a 5.0 Google rating.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0B2C75] py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            About HRCCoatings Inc
          </h1>
          <p className="mt-4 text-lg text-white/80">
            San Diego&apos;s family-owned painting company since 2003
          </p>
        </div>
      </section>

      {/* Main Content */}
      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Team Photo + Intro */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/team-photo.jpg"
              alt="Hector and Junior Rivera - HRCCoatings Inc founders"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#0B2C75]">
              Meet the Team
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              HRCCoatings Inc was founded in 2003 by <strong>Hector Rivera</strong> in San Diego, California. What started as a one-man painting operation has grown into a trusted, full-service painting and coating company serving homes and businesses across San Diego County.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Today, Hector runs the company alongside his son, <strong>Junior Rivera</strong>, who serves as Co-Owner and Operations Manager. Together, this father-son team personally manages every project from estimate to final walkthrough.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              As a faith-based, family-run business, HRCCoatings Inc operates on principles of honesty, quality craftsmanship, and treating every customer&apos;s home or business with the same care they&apos;d give their own.
            </p>
          </div>
        </div>

        {/* Company Facts */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-[#0B2C75]">
            Company Facts
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-gray-50 p-5">
              <p className="text-sm text-gray-500">Founded</p>
              <p className="text-lg font-bold text-[#0B2C75]">2003 in San Diego, CA</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-5">
              <p className="text-sm text-gray-500">Owners</p>
              <p className="text-lg font-bold text-[#0B2C75]">Hector Rivera &amp; Junior Rivera</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-5">
              <p className="text-sm text-gray-500">Projects Completed</p>
              <p className="text-lg font-bold text-[#0B2C75]">600+</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-5">
              <p className="text-sm text-gray-500">Google Rating</p>
              <p className="text-lg font-bold text-[#0B2C75]">5.0 stars (15+ reviews)</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-5">
              <p className="text-sm text-gray-500">Service Area</p>
              <p className="text-lg font-bold text-[#0B2C75]">All of San Diego County</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-5">
              <p className="text-sm text-gray-500">Hours</p>
              <p className="text-lg font-bold text-[#0B2C75]">7 AM - 5 PM, 7 days a week</p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-[#0B2C75]">
            Services Offered
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            HRCCoatings Inc provides a comprehensive range of painting and coating services for both residential and commercial properties in San Diego:
          </p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li><strong>Interior Painting</strong> - Living rooms, bedrooms, kitchens, bathrooms, hallways, trim, ceilings, and accent walls</li>
            <li><strong>Exterior Painting</strong> - Wood siding, stucco, trim, doors, shutters, and weather-resistant coatings</li>
            <li><strong>Commercial Painting</strong> - Offices, retail spaces, warehouses, restaurants, medical facilities, and tenant improvements</li>
            <li><strong>Epoxy Flooring</strong> - Garage floors, basements, and commercial spaces with flake and metallic finish options</li>
            <li><strong>Concrete Polishing</strong> - Budget-friendly polished concrete for garages and industrial spaces</li>
            <li><strong>Cabinet Refinishing</strong> - Kitchen and bathroom cabinet painting and refinishing</li>
            <li><strong>Drywall Repair</strong> - Patching, crack repair, and smooth wall finishing</li>
            <li><strong>Stucco Repair</strong> - Crack filling, texture matching, and protective coating application</li>
            <li><strong>Wallpaper Installation</strong> - All wallpaper types including paste, peel-and-stick, vinyl, and grasscloth</li>
            <li><strong>Popcorn Ceiling Removal</strong> - Scraping, smoothing, and ceiling refinishing</li>
          </ul>
        </section>

        {/* Paint Brands */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-[#0B2C75]">
            Paint Brands We Use
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            HRCCoatings Inc exclusively uses premium paint brands to ensure lasting results:
          </p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li><strong>Benjamin Moore</strong> - Known for superior coverage and color accuracy</li>
            <li><strong>Sherwin Williams</strong> - Industry-leading durability and finish quality</li>
            <li><strong>Dunn-Edwards</strong> - California-made paints formulated for the local climate</li>
          </ul>
        </section>

        {/* Service Areas */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-[#0B2C75]">
            Areas We Serve in San Diego
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            HRCCoatings Inc serves all neighborhoods and communities in San Diego County, including Clairemont, Carlsbad, La Jolla, Chula Vista, Pacific Beach, Mission Valley, Point Loma, North Park, Hillcrest, Del Mar, Encinitas, Oceanside, and surrounding areas.
          </p>
        </section>

        {/* Contact */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-[#0B2C75]">
            Contact HRCCoatings Inc
          </h2>
          <div className="mt-4 space-y-2 text-gray-700">
            <p><strong>Phone:</strong> <a href="tel:+16193041289" className="text-[#DB143C] hover:underline">(619) 304-1289</a></p>
            <p><strong>Email:</strong> <a href="mailto:hrccoatingss@gmail.com" className="text-[#DB143C] hover:underline">hrccoatingss@gmail.com</a></p>
            <p><strong>Address:</strong> 3334 Clairemont Mesa Blvd Ste 101, San Diego, CA 92111</p>
            <p><strong>Hours:</strong> 7 AM - 5 PM, Monday through Sunday</p>
            <p><strong>Payment:</strong> Cash, Check, Credit Card, Venmo, Zelle</p>
          </div>
          <div className="mt-8">
            <Link
              href="/#contact"
              className="inline-flex items-center rounded-lg bg-[#DB143C] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#B8102F]"
            >
              Request a Free Estimate
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
