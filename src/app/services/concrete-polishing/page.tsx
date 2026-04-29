import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Concrete Polishing Services in San Diego",
  description:
    "Budget-friendly concrete polishing in San Diego. Sleek, modern finish for garages and commercial spaces. Free estimates.",
};

export default function ConcretePolishingPage() {
  return (
    <ServicePageLayout
      slug="concrete-polishing"
      heroTitle="Concrete Polishing"
      heroSubtitle="Budget-Friendly Concrete Polishing Solutions"
      heroImage="/images/concrete/polished-hero.jpg"
      overview={`Concrete polishing offers a sleek, modern alternative to epoxy coatings at a more budget-friendly price point. Perfect for garage floors, workshops, and industrial spaces, polished concrete delivers a smooth, professional finish with low maintenance requirements.

The polishing process transforms rough, dull concrete into a clean, attractive surface with a subtle sheen. Unlike coatings that sit on top of concrete, polished concrete becomes part of the surface itself—meaning no peeling, chipping, or delamination over time.

At HRCCoatings Inc, we use professional grinding and polishing equipment to achieve consistent, high-quality results. The process removes surface imperfections, smooths rough areas, and creates a durable finish that stands up to heavy use. It's an excellent option for customers seeking an industrial-modern aesthetic without the higher cost of epoxy systems.`}
      processSteps={[
        {
          title: "Surface Assessment",
          description:
            "Evaluate concrete condition and discuss finish level desired",
        },
        {
          title: "Grinding & Leveling",
          description:
            "Remove surface imperfections and level uneven areas",
        },
        {
          title: "Progressive Polishing",
          description:
            "Multiple passes with increasingly fine grits",
        },
        {
          title: "Sealing (Optional)",
          description:
            "Apply penetrating sealer for added protection and sheen",
        },
        {
          title: "Final Buffing",
          description:
            "Achieve desired level of shine and smoothness",
        },
      ]}
      benefits={[
        {
          title: "Budget-Friendly",
          description:
            "More affordable alternative to epoxy with great results",
        },
        {
          title: "Modern Aesthetic",
          description:
            "Clean, industrial look perfect for contemporary spaces",
        },
        {
          title: "Professional Equipment",
          description:
            "Industrial-grade grinding and polishing machines",
        },
        {
          title: "Low Maintenance",
          description:
            "No peeling, chipping, or delamination over time",
        },
      ]}
      gallerySections={[
        {
          images: [
            { src: "/images/concrete/polished-1.jpg", alt: "Polished concrete floor" },
            { src: "/images/concrete/polished-hero.jpg", alt: "Polished concrete showcase" },
            { src: "/images/concrete/polished-3.jpg", alt: "Polished concrete finish" },
          ],
        },
      ]}
      faqs={[
        {
          question: "How is polished concrete different from epoxy?",
          answer:
            "Polished concrete grinds and smooths the existing surface. Epoxy is a coating applied on top. Polished concrete is more budget-friendly and never peels or chips.",
        },
        {
          question: "How long does concrete polishing take?",
          answer:
            "Most garage floors can be polished in 1-2 days.",
        },
        {
          question: "Is polished concrete slippery?",
          answer:
            "Lower sheen levels provide good traction. Higher gloss can be slightly more slippery when wet.",
        },
        {
          question: "Can you polish old, stained concrete?",
          answer:
            "Yes! Old stains and imperfections can often be ground away or minimized.",
        },
        {
          question: "Does polished concrete need to be sealed?",
          answer:
            "Sealing is optional but recommended for added protection.",
        },
        {
          question: "What level of shine can I expect?",
          answer:
            "We can achieve various levels from low-satin to high-gloss.",
        },
      ]}
      relatedServices={[
        {
          title: "Epoxy Flooring",
          href: "/services/epoxy-flooring",
          image: "/images/epoxy/epoxy-services.jpg",
        },
        {
          title: "Commercial Painting",
          href: "/services/commercial-painting",
          image: "/images/commercial/commercial-services.jpg",
        },
        {
          title: "Interior Painting",
          href: "/services/interior-painting",
          image: "/images/interior/interior-services.jpg",
        },
      ]}
    />
  );
}
