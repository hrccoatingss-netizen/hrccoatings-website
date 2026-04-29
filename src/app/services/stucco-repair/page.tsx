import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata: Metadata = {
  title: "Stucco Repair Services in San Diego",
  description:
    "Professional stucco repair in San Diego. Crack repair, texture matching, and protective coatings. Free estimates.",
  alternates: { canonical: "/services/stucco-repair" },
};

export default function StuccoRepairPage() {
  return (
    <>
      <ServiceSchema
        slug="stucco-repair"
        name="Stucco Repair"
        description="Expert stucco repair services in San Diego. Crack repair, texture matching, hole patching, and protective coatings for residential and commercial properties."
        image="/images/stucco-services.jpg"
        steps={[
          { title: "Inspection & Diagnosis", description: "We identify the type and extent of damage and determine the root cause." },
          { title: "Surface Prep", description: "We clean and prepare the area, removing loose stucco and stabilizing the substrate." },
          { title: "Base Coat Application", description: "We apply a fresh scratch and brown coat to rebuild the wall's structural integrity." },
          { title: "Texture Matching", description: "Skilled texture matching to blend the repair invisibly with the existing surface." },
          { title: "Final Coat & Sealing", description: "Finish coat and protective sealer for long-lasting weather resistance." },
        ]}
      />
      {/* Hero */}
      <section className="relative flex items-center justify-center overflow-hidden bg-navy py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy/80" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Stucco Repair
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/90">
            Protect Your Home with Professional Stucco Repair
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/stucco-services.jpg"
              alt="Professional stucco repair in San Diego"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Expert Stucco Repair &amp; Protection
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Protect and enhance your property&apos;s exterior with expert
              stucco repair. We match original textures, repair cracks and
              damage, and apply premium coatings for lasting protection against
              San Diego&apos;s coastal climate. Contact us for a free estimate.
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
