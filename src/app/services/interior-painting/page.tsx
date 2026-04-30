import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Interior Painting Services in San Diego",
  description:
    "Professional interior painting services in San Diego. Expert color consultations, premium paints, and flawless results. Free estimates available.",
};

export default function InteriorPaintingPage() {
  return (
    <ServicePageLayout
      slug="interior-painting"
      heroTitle="Interior Painting"
      heroSubtitle="Transform Your Home with Expert Interior Painting"
      heroImage="/images/interior/kitchen-2.jpg"
      overview={`Your home's interior is your personal sanctuary, and the colors you choose set the tone for every room. At HRCCoatings Inc, we specialize in professional interior painting that brings your vision to life with flawless results.

Whether you're refreshing a single room or repainting your entire home, our experienced team works meticulously to deliver smooth, even coverage and crisp, clean lines. We use premium paints from Benjamin Moore, Sherwin Williams, and Dunn-Edwards to ensure lasting beauty and durability.

From color consultations to final walkthroughs, we handle every detail with care. We protect your furniture and flooring, maintain a clean workspace, and complete projects on schedule. Our interior painting services cover living rooms, bedrooms, kitchens, bathrooms, hallways, ceilings, trim, and more.`}
      processSteps={[
        {
          title: "Consultation & Color Selection",
          description:
            "We discuss your vision, assess your space, and help you choose the perfect colors",
        },
        {
          title: "Surface Preparation",
          description:
            "Thorough cleaning, patching, sanding, and priming for a flawless finish",
        },
        {
          title: "Professional Application",
          description:
            "Expert painting with premium materials and proven techniques",
        },
        {
          title: "Final Inspection",
          description:
            "Complete walkthrough to ensure every detail meets our quality standards",
        },
      ]}
      benefits={[
        {
          title: "20+ Years Experience",
          description:
            "Over 20 years of interior painting expertise with hundreds of satisfied customers",
        },
        {
          title: "Premium Materials",
          description:
            "We use only premium paint brands like Benjamin Moore, Sherwin Williams, and Dunn-Edwards",
        },
        {
          title: "Meticulous Detail",
          description:
            "Attention to every detail ensures crisp lines, smooth coverage, and flawless results",
        },
        {
          title: "Clean & Respectful",
          description:
            "We protect your furniture, maintain a clean workspace, and complete projects on schedule",
        },
      ]}
      gallerySections={[
        {
          images: [
            { src: "/images/interior/living-room-1.jpg", alt: "Interior living room painting" },
            { src: "/images/interior/kitchen-1.jpg", alt: "Kitchen painting project" },
            { src: "/images/interior/kitchen-2.jpg", alt: "Modern kitchen repaint" },
            { src: "/images/interior/bedroom-1.jpg", alt: "Bedroom painting" },
            { src: "/images/interior/bedroom-2.jpg", alt: "Bedroom accent wall" },
            { src: "/images/interior/bathroom-1.jpg", alt: "Bathroom painting" },
            { src: "/images/interior/entryway-1.jpg", alt: "Entryway painting" },
          ],
        },
      ]}
      beforeAfter={[
        {
          label: "Stair Railing Refinish",
          before: "/images/interior/before-after/railing-before.jpg",
          after: "/images/interior/before-after/railing-after.jpg",
        },
        {
          label: "Fireplace Accent Wall",
          before: "/images/interior/before-after/fireplace-before.jpg",
          after: "/images/interior/before-after/fireplace-after.jpg",
        },
        {
          label: "Built-In Cabinet Refinish",
          before: "/images/interior/before-after/cabinets-before.jpg",
          after: "/images/interior/before-after/cabinets-after.jpg",
        },
      ]}
      faqs={[
        {
          question: "How long does interior painting take?",
          answer:
            "Most rooms take 1-2 days to complete. A typical 3-bedroom home can be finished in 3-5 days depending on scope and detail work. We'll provide a clear timeline during your free estimate.",
        },
        {
          question: "Do I need to move my furniture?",
          answer:
            "We'll help you! We can move lighter furniture and protect larger pieces. We recommend removing valuable or fragile items before we start, but we'll handle the heavy lifting and complete protection.",
        },
        {
          question:
            "What type of paint do you recommend for kitchens and bathrooms?",
          answer:
            "For high-moisture areas like kitchens and bathrooms, we recommend semi-gloss or satin finishes with mildew-resistant properties. These finishes are durable, easy to clean, and hold up well in humid environments.",
        },
        {
          question: "Can you match existing colors?",
          answer:
            "Absolutely! We can match any existing color using paint matching technology. We can also help you select complementary colors if you want to refresh or update your palette.",
        },
        {
          question: "Do you offer color consultation services?",
          answer:
            "Yes! We provide professional color consultations to help you choose the perfect colors for your space. We'll consider lighting, existing furnishings, and your personal style to create a cohesive look.",
        },
      ]}
      relatedServices={[
        {
          title: "Cabinet Refinishing",
          href: "/services/cabinet-refinishing",
          image: "/images/cabinet/kitchen-white-shaker.jpg",
        },
        {
          title: "Drywall Repair",
          href: "/services/drywall-repair",
          image: "/images/drywall/joint-compound.jpg",
        },
        {
          title: "Exterior Painting",
          href: "/services/exterior-painting",
          image: "/images/exterior/exterior-services.jpg",
        },
      ]}
    />
  );
}
