import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata: Metadata = {
  title: "Specialty Painting Services in San Diego",
  description:
    "Custom painting solutions for unique projects in San Diego. Popcorn removal, specialty coatings, and more. Free estimates.",
  alternates: { canonical: "/services/specialty-services" },
};

export default function SpecialtyServicesPage() {
  return (
    <>
      <ServiceSchema
        slug="specialty-services"
        name="Specialty Painting Services"
        description="Custom painting solutions for unique projects in San Diego. Popcorn ceiling removal, accent walls, faux finishes, decorative painting, and specialty coatings."
        image="/images/popcorn-services.jpg"
        steps={[
          { title: "Project Consultation", description: "We listen to your vision and assess the space to design a custom approach." },
          { title: "Detailed Planning", description: "Material selection, technique planning, and timeline creation specific to your project." },
          { title: "Surface Preparation", description: "Specialized prep including dust containment for popcorn removal or texture stripping." },
          { title: "Custom Application", description: "Skilled application of specialty finishes, faux techniques, or decorative effects." },
          { title: "Final Walkthrough", description: "Detailed inspection and walkthrough to ensure every aspect meets your expectations." },
        ]}
      />
      {/* Hero */}
      <section className="relative flex items-center justify-center overflow-hidden bg-navy py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy/80" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Specialty Services
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/90">
            Custom Painting Solutions for Unique Projects
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/popcorn-services.jpg"
              alt="Specialty painting services in San Diego"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Beyond Standard Painting
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              From popcorn ceiling removal to specialty coatings and unique
              finishes, HRCCoatings Inc handles the projects that go beyond standard
              painting. Our team has the experience and expertise to tackle any
              custom project. Contact us to discuss your specialty needs.
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
