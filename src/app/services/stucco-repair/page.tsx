import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Stucco Repair Services in San Diego",
  description:
    "Expert stucco repair in San Diego. Crack repair, hole patching, texture matching, and protective elastomeric coatings. Specialized for coastal climate. Free estimates.",
  alternates: { canonical: "/services/stucco-repair" },
};

export default function StuccoRepairPage() {
  return (
    <ServicePageLayout
      slug="stucco-repair"
      heroTitle="Stucco Repair"
      heroSubtitle="Crack repair, hole patching, and texture matching that disappears into the wall. Built for San Diego's coastal climate."
      heroImage="/images/stucco-services.jpg"
      overview={`Stucco is one of the most common exterior finishes in San Diego County, and it's also one of the most prone to cracking and damage over time. Salt air, sun exposure, settling, and moisture intrusion all take a toll on stucco. Left untreated, small cracks turn into big problems — water gets behind the wall, the underlying lath rusts, and the repair cost goes up exponentially.

At HRCCoatings Inc, we've been repairing stucco across San Diego for over 20 years. We know the climate, we know the common failure points, and we know how to match every texture finish in the region — from smooth and sand to lace, knockdown, and traditional Spanish patterns.

Every project starts with diagnosing the cause. Then we rebuild the wall properly: scratch coat, brown coat, finish coat, and a protective elastomeric sealer where appropriate. The result is a repair that's structurally sound, visually invisible, and built to hold up against San Diego's coastal conditions.`}
      processSteps={[
        {
          title: "Inspection & Diagnosis",
          description:
            "We identify the type and extent of damage, determine the underlying cause, and check for moisture intrusion or substrate issues that need to be addressed first.",
        },
        {
          title: "Surface Prep",
          description:
            "We clean the area, remove loose stucco, and stabilize the substrate. For larger repairs, we expose and inspect the lath underneath to make sure it's sound before rebuilding.",
        },
        {
          title: "Base Coat Application",
          description:
            "We apply a fresh scratch coat and brown coat to rebuild the wall's structural integrity. Each coat is properly cured before the next one goes on.",
        },
        {
          title: "Texture Matching",
          description:
            "Skilled texture matching to blend the repair invisibly with the existing wall. Smooth, sand, lace, knockdown, Spanish — we match what's already on your home.",
        },
        {
          title: "Final Coat & Sealing",
          description:
            "Finish coat application, optional color matching, and protective elastomeric sealer for long-lasting weather resistance against sun, rain, and coastal salt air.",
        },
      ]}
      benefits={[
        {
          title: "Coastal-Ready",
          description:
            "Specialized in San Diego's salt air and humidity. Materials chosen to resist coastal degradation.",
        },
        {
          title: "Texture Matching",
          description:
            "We match every common San Diego stucco texture — smooth, sand, lace, knockdown, Spanish.",
        },
        {
          title: "Protective Coatings",
          description:
            "Optional elastomeric sealers add waterproofing and flex to prevent future cracking.",
        },
        {
          title: "Root Cause Fix",
          description:
            "We don't just patch the surface — we diagnose and address what caused the damage.",
        },
      ]}
      featuresGrid={[
        {
          title: "Crack Repair",
          description:
            "Hairline cracks, settling cracks, structural cracks. We repair the cause and the visible damage.",
        },
        {
          title: "Hole Patching",
          description:
            "Impact damage, removed fixtures, vent replacements — patched and texture matched.",
        },
        {
          title: "Texture Matching",
          description:
            "Smooth, sand, lace, knockdown, Spanish, dash. We match every common San Diego texture.",
        },
        {
          title: "Water Damage",
          description:
            "Moisture intrusion repair including substrate inspection, lath replacement, and waterproofing.",
        },
        {
          title: "Elastomeric Coatings",
          description:
            "Flexible waterproof coatings that bridge hairline cracks and protect against future damage.",
        },
        {
          title: "Color Matching",
          description:
            "Integral color stucco or painted finishes — we match your home's existing color exactly.",
        },
      ]}
      gallerySections={[
        {
          images: [
            { src: "/images/stucco-services.jpg", alt: "HRCCoatings patching and matching stucco on an exterior wall" },
            { src: "/images/stucco/textured-wall.jpg", alt: "Close-up of matched stucco texture" },
            { src: "/images/stucco/repair-detail.jpg", alt: "Repaired stucco section blended into the wall" },
            { src: "/images/stucco/coastal-home.jpg", alt: "Finished stucco home exterior in San Diego" },
          ],
        },
      ]}
      faqs={[
        {
          question: "How much does stucco repair cost?",
          answer:
            "Small crack repairs start around $300-$600. Mid-size repairs (hole patching, larger crack systems) typically range $600-$1,500. Larger repairs and full re-coats are quoted after on-site inspection.",
        },
        {
          question: "How long does stucco repair take?",
          answer:
            "Small crack and patch repairs are completed in 1-2 days. Larger repairs requiring scratch and brown coats take 3-7 days due to proper cure time between coats. We'll give you a clear timeline at the estimate.",
        },
        {
          question: "Can you match the texture of my existing stucco?",
          answer:
            "Yes. We match all common San Diego textures including smooth, sand, lace, knockdown, and traditional Spanish. Texture matching is one of the things we do best.",
        },
        {
          question: "Why does stucco crack in San Diego?",
          answer:
            "Most San Diego stucco cracks come from a combination of foundation settling, daily thermal expansion (sun heating then cooling), and moisture cycles. Coastal homes also deal with salt air degradation. We address both the visible damage and the underlying cause.",
        },
        {
          question: "Should I get an elastomeric coating?",
          answer:
            "Elastomeric coatings are a great long-term investment for homes with frequent hairline cracks or significant sun and salt exposure. They flex with the wall and provide waterproofing. We'll recommend whether it makes sense for your specific home.",
        },
        {
          question: "Can you repair stucco around windows and doors?",
          answer:
            "Yes. Window and door perimeters are common failure points because of caulk failure and water intrusion. We repair the stucco and re-caulk the joints to prevent the problem from coming back.",
        },
        {
          question: "Do you paint stucco after repair?",
          answer:
            "Yes. We can repaint the repaired area to match your home's existing color, or repaint the entire surface for a fully refreshed look. Many customers combine stucco repair with a full exterior repaint.",
        },
      ]}
      relatedServices={[
        {
          title: "Exterior Painting",
          href: "/services/exterior-painting",
          image: "/images/exterior/exterior-services.jpg",
        },
        {
          title: "Drywall Repair",
          href: "/services/drywall-repair",
          image: "/images/drywall/joint-compound.jpg",
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
