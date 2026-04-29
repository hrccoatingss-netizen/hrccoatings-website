import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata: Metadata = {
  title: "Cabinet Refinishing Services in San Diego",
  description:
    "Professional cabinet refinishing in San Diego. Transform your kitchen and bathroom cabinets. Free estimates.",
  alternates: { canonical: "/services/cabinet-refinishing" },
};

export default function CabinetRefinishingPage() {
  return (
    <>
      <ServiceSchema
        slug="cabinet-refinishing"
        name="Cabinet Refinishing"
        description="Professional cabinet refinishing services in San Diego. Transform your kitchen and bathroom cabinets with premium finishes, custom colors, and lasting durability."
        image="/images/cabinet-services.jpg"
        steps={[
          { title: "Inspection & Color Selection", description: "We assess your existing cabinets and help you choose the perfect color and finish." },
          { title: "Disassembly & Cleaning", description: "We remove all hardware and thoroughly clean every surface to ensure proper adhesion." },
          { title: "Sanding & Priming", description: "Light sanding and a high-quality bonding primer for a smooth, durable foundation." },
          { title: "Finish Application", description: "Multiple coats of premium paint or stain applied with a sprayer for a factory-quality finish." },
          { title: "Reassembly & Walkthrough", description: "We reinstall hardware and walk through the project with you to ensure perfection." },
        ]}
      />
      {/* Hero */}
      <section className="relative flex items-center justify-center overflow-hidden bg-navy py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy/80" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Cabinet Refinishing
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/90">
            Transform Kitchens &amp; Bathrooms with Cabinet Refinishing
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/cabinet-services.jpg"
              alt="Professional cabinet refinishing in San Diego"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Give Your Cabinets a Brand-New Look
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Breathe new life into your kitchen or bathroom with professional
              cabinet refinishing. Our expert team delivers custom colors and
              finishes that look like new installations, saving you thousands
              compared to full cabinet replacement. Contact us today for your
              free estimate.
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
