import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Exterior Painting Services in San Diego",
  description:
    "Professional exterior painting in San Diego. Weather-resistant coatings, stucco expertise, and curb appeal enhancement. Free estimates.",
};

export default function ExteriorPaintingPage() {
  return (
    <ServicePageLayout
      slug="exterior-painting"
      heroTitle="Exterior Painting"
      heroSubtitle="Enhance Curb Appeal with Professional Exterior Painting"
      heroImage="/images/exterior/front-home.jpg"
      overview={`Your home's exterior is its first impression and its primary defense against San Diego's sun, coastal air, and weather. Professional exterior painting not only enhances curb appeal but protects your investment for years to come.

At HRCCoatings Inc, we specialize in comprehensive exterior painting services for all surface types including wood siding, stucco, trim, doors, shutters, and more. We use weather-resistant, premium exterior coatings designed to withstand Southern California's unique climate.

Our process begins with thorough surface preparation—the key to long-lasting results. We pressure wash, scrape, sand, repair damaged areas, and apply quality primers before the final coats. The result? A beautiful, durable finish that protects and enhances your home's exterior.`}
      processSteps={[
        {
          title: "Surface Assessment",
          description:
            "Inspect all exterior surfaces and identify repairs needed",
        },
        {
          title: "Pressure Washing & Prep",
          description:
            "Remove dirt, mildew, and loose paint; repair damaged areas",
        },
        {
          title: "Priming & Coating",
          description:
            "Apply weather-resistant primers and premium exterior paint",
        },
        {
          title: "Quality Assurance",
          description: "Final inspection and cleanup",
        },
      ]}
      benefits={[
        {
          title: "Coastal Climate Specialist",
          description:
            "Specialized in San Diego's unique coastal climate and weather conditions",
        },
        {
          title: "Weather-Resistant",
          description:
            "Premium coatings designed to withstand sun, salt air, and moisture",
        },
        {
          title: "Surface Preparation",
          description:
            "Comprehensive prep work ensures long-lasting adhesion and durability",
        },
        {
          title: "Stucco Expertise",
          description:
            "Expert stucco repair and painting included in every project",
        },
      ]}
      gallerySections={[
        {
          images: [
            { src: "/images/exterior/front-home.jpg", alt: "Exterior home painting - front" },
            { src: "/images/exterior/backyard-side.jpg", alt: "Exterior painting - backyard side" },
            { src: "/images/exterior/backyard-full.jpg", alt: "Exterior painting - backyard full view" },
            { src: "/images/exterior/modern-backyard.jpg", alt: "Modern home exterior - backyard" },
            { src: "/images/exterior/modern-front.jpg", alt: "Modern home exterior - front" },
          ],
        },
      ]}
      faqs={[
        {
          question: "How often should I repaint my home's exterior?",
          answer:
            "In San Diego's climate, most homes need repainting every 7-10 years. However, coastal homes exposed to salt air may need more frequent painting every 5-7 years.",
        },
        {
          question: "What's the best time of year for exterior painting?",
          answer:
            "San Diego's mild weather makes year-round painting possible, but spring and fall offer ideal conditions.",
        },
        {
          question: "How long does exterior paint last in San Diego?",
          answer:
            "With proper surface preparation and premium paints, exterior coatings typically last 7-10 years in San Diego.",
        },
        {
          question: "Do you handle stucco repairs before painting?",
          answer:
            "Yes! Stucco repair is included in our exterior painting services.",
        },
        {
          question: "Can you match my current exterior color?",
          answer:
            "Absolutely. We can match any existing color or help you select a fresh new look.",
        },
      ]}
      relatedServices={[
        {
          title: "Stucco Repair",
          href: "/services/stucco-repair",
          image: "/images/stucco/spanish-home.jpg",
        },
        {
          title: "Interior Painting",
          href: "/services/interior-painting",
          image: "/images/interior/interior-services.jpg",
        },
        {
          title: "Commercial Painting",
          href: "/services/commercial-painting",
          image: "/images/commercial/commercial-services.jpg",
        },
      ]}
    />
  );
}
