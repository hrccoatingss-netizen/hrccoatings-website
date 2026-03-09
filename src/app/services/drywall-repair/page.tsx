import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Drywall Repair Services in San Diego",
  description:
    "Expert drywall repair in San Diego. Seamless patches, crack repair, and smooth finishes. Free estimates.",
  alternates: { canonical: "/services/drywall-repair" },
};

export default function DrywallRepairPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center overflow-hidden bg-navy py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy/80" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Drywall Repair
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/90">
            Expert Drywall Repair for Flawless Walls
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/drywall-services.jpg"
              alt="Expert drywall repair in San Diego"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Restore Your Walls to Perfection
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Restore your walls to perfect condition with our seamless drywall
              repair services. From small nail holes to significant damage, our
              experienced team handles all drywall issues efficiently and
              effectively, leaving your walls smooth and ready for paint. Contact
              us for a free estimate.
            </p>
            <div className="mt-8">
              <Link
                href="/#contact"
                className="inline-flex items-center rounded-lg bg-red px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-[#B8102F] active:scale-[0.98]"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <ContactForm />
    </>
  );
}
