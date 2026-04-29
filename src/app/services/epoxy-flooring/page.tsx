import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Epoxy Flooring Services in San Diego",
  description:
    "Professional epoxy floor coatings in San Diego. Flake and metallic finishes for garages, basements, and commercial spaces. Free estimates.",
};

export default function EpoxyFlooringPage() {
  return (
    <ServicePageLayout
      slug="epoxy-flooring"
      heroTitle="Epoxy Flooring"
      heroSubtitle="Transform Floors with Durable Epoxy Coatings"
      heroImage="/images/epoxy/application-hero.jpg"
      overview={`Epoxy flooring combines unmatched durability with stunning aesthetics, making it the premium choice for garages, basements, workshops, and commercial spaces. At HRCCoatings Inc, we specialize in professional epoxy floor installations that protect surfaces and elevate spaces.

Our high-quality epoxy coatings create a seamless, attractive finish that resists stains, impacts, chemicals, and moisture. Available in multiple colors and finishes—including solid colors, metallic effects, and decorative flake systems—epoxy flooring transforms ordinary concrete into a showroom-worthy surface.

The installation process is critical to long-term performance. We meticulously prepare concrete surfaces, repair cracks and damage, and apply multiple coats using professional-grade materials. The result is a durable, easy-to-clean floor that looks amazing and lasts for years.`}
      processSteps={[
        {
          title: "Surface Preparation",
          description:
            "Grind, clean, and repair concrete for optimal adhesion",
        },
        {
          title: "Crack & Damage Repair",
          description: "Fill cracks and level uneven areas",
        },
        {
          title: "Primer Application",
          description: "Seal concrete and ensure proper bonding",
        },
        {
          title: "Epoxy Coating",
          description:
            "Apply base coat, decorative elements, and clear topcoat",
        },
        {
          title: "Curing & Inspection",
          description:
            "Allow proper cure time and perform quality check",
        },
      ]}
      benefits={[
        {
          title: "Professional-Grade Systems",
          description:
            "Industrial-quality epoxy systems built to last",
        },
        {
          title: "Surface Preparation",
          description:
            "Meticulous prep work ensures long-lasting adhesion and durability",
        },
        {
          title: "Multiple Finish Options",
          description:
            "Solid colors, metallic effects, and decorative flake systems available",
        },
        {
          title: "Garage Specialists",
          description:
            "Extensive experience transforming garage floors throughout San Diego",
        },
      ]}
      gallerySections={[
        {
          label: "Epoxy Flake Systems",
          images: [
            { src: "/images/epoxy/garage-full.jpg", alt: "Epoxy flake garage floor - full view" },
            { src: "/images/epoxy/garage-angle.jpg", alt: "Epoxy flake garage floor - angle" },
            { src: "/images/epoxy/floor-closeup.jpg", alt: "Epoxy flake floor closeup" },
          ],
        },
        {
          label: "Epoxy Metallic Systems",
          images: [
            { src: "/images/epoxy/metallic-1.jpg", alt: "Metallic epoxy floor 1" },
            { src: "/images/epoxy/metallic-2.jpg", alt: "Metallic epoxy floor 2" },
            { src: "/images/epoxy/metallic-3.jpg", alt: "Metallic epoxy floor 3" },
          ],
        },
      ]}
      faqs={[
        {
          question: "How long does epoxy flooring installation take?",
          answer:
            "Most garage floors take 2-3 days: Day 1 for surface prep and repairs, Day 2 for epoxy application, and then 24-48 hours of cure time.",
        },
        {
          question: "How long before I can park on it?",
          answer:
            "Light foot traffic is safe after 24-48 hours. For vehicle traffic, we recommend waiting 5-7 days for full cure.",
        },
        {
          question: "What colors and finishes are available?",
          answer:
            "We offer solid colors, metallic effects, decorative flake systems, and custom color combinations.",
        },
        {
          question: "Is epoxy flooring slippery when wet?",
          answer:
            "Quality epoxy with proper topcoats is not excessively slippery. We can add anti-slip additives.",
        },
        {
          question: "How long does epoxy flooring last?",
          answer:
            "With proper installation and care, garage epoxy floors typically last 10-20 years.",
        },
        {
          question: "Can you apply epoxy over existing coatings?",
          answer:
            "It depends. We assess existing coatings during inspection.",
        },
      ]}
      relatedServices={[
        {
          title: "Concrete Polishing",
          href: "/services/concrete-polishing",
          image: "/images/concrete/polished-services.jpg",
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
