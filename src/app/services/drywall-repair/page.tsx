import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Drywall Repair Services in San Diego",
  description:
    "Expert drywall repair in San Diego. Hole patching, crack repair, water damage restoration, and seamless texture matching. Free estimates from a licensed pro.",
  alternates: { canonical: "/services/drywall-repair" },
};

export default function DrywallRepairPage() {
  return (
    <ServicePageLayout
      slug="drywall-repair"
      heroTitle="Drywall Repair"
      heroSubtitle="Holes, cracks, water damage, settling. We fix it cleanly and match the texture so you can't tell anything ever happened."
      heroImage="/images/drywall/joint-compound.jpg"
      overview={`Drywall problems are inevitable in any home. Door knobs punch holes. Settling cracks the corners. A leaky pipe ruins a ceiling. Whatever the damage, we fix it cleanly and match the surrounding texture so the repair disappears into the wall.

At HRCCoatings Inc, we've been doing drywall repair across San Diego County for over 20 years. From small nail holes to full ceiling replacements after water damage, we handle every size of repair with the same attention to detail. Most homeowners try to do this work themselves and end up calling us anyway because the patch is visible after painting — texture matching is what separates an amateur fix from a professional one.

Every project includes proper drying time between coats of joint compound, multiple sanding passes for a glass-smooth finish, and texture matching that blends seamlessly with your existing wall. By the time we're done, the area is paint-ready and indistinguishable from the original drywall.`}
      processSteps={[
        {
          title: "Damage Assessment",
          description:
            "We inspect the damaged area, identify the underlying cause (settling, water, impact), and confirm there are no hidden issues before patching.",
        },
        {
          title: "Cut & Patch",
          description:
            "Clean removal of damaged drywall and precise patching with new material cut to size. We use proper anchoring techniques so the patch holds for the long term.",
        },
        {
          title: "Tape & Mud",
          description:
            "Multiple coats of joint compound applied with proper drying time between layers. Each coat is feathered out wider than the last for an invisible blend.",
        },
        {
          title: "Sand & Texture Match",
          description:
            "Smooth sanding to a glass-flat finish, then careful texture matching. Smooth, knockdown, orange peel, popcorn — we match what's already on your wall.",
        },
        {
          title: "Prime & Paint Ready",
          description:
            "Final priming so the repaired area is sealed and ready for paint. We can also paint the patched section to match the rest of your wall.",
        },
      ]}
      benefits={[
        {
          title: "Invisible Repairs",
          description:
            "Our texture matching means you can't see where the repair was once it's painted.",
        },
        {
          title: "Any Size Project",
          description:
            "Single nail hole, full ceiling replacement, water damage — we handle every scale.",
        },
        {
          title: "Fast Turnaround",
          description:
            "Most small repairs are completed same-day. Larger projects take 2-4 days.",
        },
        {
          title: "Proper Prep",
          description:
            "We don't rush drying time. Each coat cures fully before the next layer goes on.",
        },
      ]}
      featuresGrid={[
        {
          title: "Hole Patching",
          description:
            "Door knob holes, accidental impacts, anchor holes — patched and matched seamlessly.",
        },
        {
          title: "Crack Repair",
          description:
            "Settling cracks, ceiling cracks, corner cracks. We address the cause and the visible damage.",
        },
        {
          title: "Water Damage Restoration",
          description:
            "Removal of water-damaged drywall, mold inspection, full replacement, and texture matching.",
        },
        {
          title: "Ceiling Repair",
          description:
            "Sagging ceilings, water spots, popcorn ceiling damage. Full ceiling restoration available.",
        },
        {
          title: "Texture Matching",
          description:
            "Smooth, knockdown, orange peel, skip trowel, popcorn — we match what's on your wall.",
        },
        {
          title: "Paint-Ready Finish",
          description:
            "Every repair is primed and finished to a paintable surface. Optional paint matching available.",
        },
      ]}
      gallerySections={[
        {
          images: [
            { src: "/images/drywall/joint-compound.jpg", alt: "Professional drywall taping and joint compound application" },
            { src: "/images/drywall/wall-smooth-finish.jpg", alt: "Freshly repaired smooth interior wall" },
            { src: "/images/drywall/ceiling-repair.jpg", alt: "Smooth interior ceiling repair" },
            { src: "/images/drywall/wall-corner.jpg", alt: "Perfectly finished interior wall corner" },
          ],
        },
      ]}
      faqs={[
        {
          question: "How much does drywall repair cost?",
          answer:
            "Small repairs (nail holes, minor cracks) start around $150-$300. Mid-size repairs (door knob holes, water damage spots) typically range $300-$700. Larger repairs and full ceiling work are quoted after on-site inspection.",
        },
        {
          question: "How long does drywall repair take?",
          answer:
            "Small repairs are typically completed same-day. Mid-size repairs take 2-3 days due to drying time between joint compound coats. Larger repairs (ceiling replacements, water damage) can take 3-5 days.",
        },
        {
          question: "Can you match the texture on my walls?",
          answer:
            "Yes. We match all common San Diego textures including smooth, knockdown, orange peel, skip trowel, and popcorn. Texture matching is what separates a professional repair from a DIY one.",
        },
        {
          question: "Do you handle water damage?",
          answer:
            "Yes. We remove water-damaged drywall, inspect for mold, replace the damaged sections, and texture match for a seamless finish. We can coordinate with plumbers if the water source still needs to be fixed.",
        },
        {
          question: "Will the repair be visible after painting?",
          answer:
            "Not when done correctly. Proper feathering of joint compound, smooth sanding, and accurate texture matching make the repair invisible once paint is applied.",
        },
        {
          question: "Do you also paint the repaired area?",
          answer:
            "Yes. We can paint the patched section to match the surrounding wall, or paint the entire wall for a perfect blend if the existing paint has aged.",
        },
        {
          question: "What about popcorn ceilings?",
          answer:
            "We can match existing popcorn texture for repairs, or we offer full popcorn ceiling removal as a separate service if you'd like to modernize the look.",
        },
      ]}
      relatedServices={[
        {
          title: "Interior Painting",
          href: "/services/interior-painting",
          image: "/images/interior/kitchen-2.jpg",
        },
        {
          title: "Stucco Repair",
          href: "/services/stucco-repair",
          image: "/images/stucco-services.jpg",
        },
        {
          title: "Popcorn Removal",
          href: "/services/specialty-services",
          image: "/images/popcorn-services.jpg",
        },
      ]}
    />
  );
}
