import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Cabinet Refinishing Services in San Diego",
  description:
    "Professional cabinet refinishing in San Diego. Transform your kitchen and bathroom cabinets with custom colors, factory-quality finishes, and a fraction of the cost of replacement. Free estimates.",
  alternates: { canonical: "/services/cabinet-refinishing" },
};

export default function CabinetRefinishingPage() {
  return (
    <ServicePageLayout
      slug="cabinet-refinishing"
      heroTitle="Cabinet Refinishing"
      heroSubtitle="Brand-new kitchens and bathrooms without the cost of replacement. Custom colors, factory-quality spray finishes, and lasting durability."
      heroImage="/images/cabinet-services.jpg"
      overview={`Replacing kitchen or bathroom cabinets is one of the most expensive renovations a homeowner can take on, and most of the time it isn't necessary. If your cabinet boxes are still solid, refinishing gives you a brand-new look at a fraction of the cost.

At HRCCoatings Inc, we specialize in professional cabinet refinishing that holds up to daily use. We remove every door and drawer, deep clean every surface to get rid of years of grease, lightly sand for adhesion, prime with a high-bond bonding primer, then spray multiple coats of premium cabinet paint or stain for that smooth, factory-quality finish you can't get with a brush.

The result is a kitchen or bathroom that looks completely renovated without tearing anything out. Custom color matching, modern white shaker, deep navy, two-tone islands, dark walnut stain — whatever look you're going for, we deliver it. Most projects are finished in 4-7 days with minimal disruption to your home.`}
      processSteps={[
        {
          title: "Inspection & Color Selection",
          description:
            "We assess your existing cabinets, identify any repairs needed, and help you pick the perfect color, sheen, and finish for your space.",
        },
        {
          title: "Disassembly & Cleaning",
          description:
            "We remove every door, drawer, and piece of hardware. Then we deep clean each surface to strip grease, oils, and grime so the new finish bonds correctly.",
        },
        {
          title: "Sanding & Priming",
          description:
            "We lightly scuff sand and apply a premium bonding primer specifically formulated for cabinets — the foundation that keeps the finish looking new for years.",
        },
        {
          title: "Spray Finish Application",
          description:
            "Multiple coats of premium cabinet paint or stain applied with an HVLP sprayer for a glass-smooth finish you can't achieve with brushes or rollers.",
        },
        {
          title: "Reassembly & Walkthrough",
          description:
            "We reinstall every door, drawer, and piece of hardware, then walk through the project with you to make sure every detail meets your expectations.",
        },
      ]}
      benefits={[
        {
          title: "Save Up To 70%",
          description:
            "Refinishing costs a fraction of full cabinet replacement with comparable visual results.",
        },
        {
          title: "Factory-Quality Finish",
          description:
            "Sprayed application produces a smooth, durable surface — no brush marks, no roller texture.",
        },
        {
          title: "Custom Colors",
          description:
            "Any color, any sheen. Matte, satin, semi-gloss. Solid colors, two-tone islands, or stains.",
        },
        {
          title: "Minimal Disruption",
          description:
            "Most kitchens are finished in 4-7 days. Your home stays clean and livable throughout.",
        },
      ]}
      featuresGrid={[
        {
          title: "Kitchen Cabinets",
          description:
            "Full kitchens, islands, pantries, and built-ins. Modern shaker, classic raised panel, slab fronts.",
        },
        {
          title: "Bathroom Vanities",
          description:
            "Master baths, guest baths, powder rooms. Refresh dated vanities with custom colors that match your tile.",
        },
        {
          title: "Built-Ins & Bookcases",
          description:
            "Living room built-ins, office bookshelves, entertainment centers. Same factory-quality finish.",
        },
        {
          title: "Color Matching",
          description:
            "We match any existing color or help you select something brand new from any major paint brand.",
        },
        {
          title: "Hardware Updates",
          description:
            "Replace dated handles and pulls during the refinish for a complete transformation in one project.",
        },
        {
          title: "Stain Refinishing",
          description:
            "Beyond paint — we offer professional stain refinishing for cabinets, vanities, and built-ins.",
        },
      ]}
      beforeAfter={[
        {
          label: "Built-In Cabinet Refinish",
          before: "/images/interior/before-after/cabinets-before.jpg",
          after: "/images/interior/before-after/cabinets-after.jpg",
        },
      ]}
      faqs={[
        {
          question: "How much does cabinet refinishing cost compared to replacement?",
          answer:
            "Cabinet refinishing typically costs 30-50% of full cabinet replacement. A full kitchen refinish averages $2,500-$5,000 vs $10,000-$25,000+ for replacement. We provide a detailed quote during your free estimate.",
        },
        {
          question: "How long does cabinet refinishing take?",
          answer:
            "Most kitchens are completed in 4-7 days from start to finish. Larger or more detailed projects may take longer. We'll give you a clear timeline during your estimate.",
        },
        {
          question: "Will my kitchen be unusable during the project?",
          answer:
            "We work to minimize disruption. The cabinet boxes stay in place while doors and drawers are removed for off-site spraying. You can typically still use your kitchen during most of the project.",
        },
        {
          question: "How long will the new finish last?",
          answer:
            "With proper preparation and premium materials, refinished cabinets typically last 8-15 years before needing another refresh. Our process uses bonding primer and durable cabinet-grade paint engineered for daily wear.",
        },
        {
          question: "Can you match my existing cabinet color?",
          answer:
            "Yes. We can match any existing color or help you choose something completely new. We work with all major paint brands including Benjamin Moore, Sherwin Williams, and Dunn-Edwards.",
        },
        {
          question: "Do you replace cabinet hardware?",
          answer:
            "We can install new hardware as part of the project. Updating the handles and pulls during a refinish is one of the easiest ways to modernize your kitchen for very little extra cost.",
        },
        {
          question: "Can you refinish cabinets that are stained, not painted?",
          answer:
            "Yes. We offer professional stain refinishing in addition to paint, including options to go darker, lighter, or to switch from stain to paint entirely.",
        },
      ]}
      relatedServices={[
        {
          title: "Interior Painting",
          href: "/services/interior-painting",
          image: "/images/interior/kitchen-2.jpg",
        },
        {
          title: "Drywall Repair",
          href: "/services/drywall-repair",
          image: "/images/drywall-services.jpg",
        },
        {
          title: "Wallpaper",
          href: "/services/wallpaper",
          image: "/images/interior/bedroom-2.jpg",
        },
      ]}
    />
  );
}
