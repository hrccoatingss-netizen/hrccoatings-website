import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Popcorn Ceiling Removal & Specialty Painting in San Diego",
  description:
    "Professional popcorn ceiling removal and specialty painting services in San Diego. Modern smooth ceilings, accent walls, faux finishes, and decorative coatings. Free estimates.",
  alternates: { canonical: "/services/specialty-services" },
};

export default function SpecialtyServicesPage() {
  return (
    <ServicePageLayout
      slug="specialty-services"
      heroTitle="Popcorn Removal & Specialty Painting"
      heroSubtitle="Modernize your ceilings and walls with professional popcorn removal, accent walls, faux finishes, and decorative coatings."
      heroImage="/images/popcorn-services.jpg"
      overview={`Popcorn ceilings instantly date a home. Built mostly between the 1960s and 1990s, that bumpy "cottage cheese" texture used to be the standard, but today it's the single biggest visual cue that a home hasn't been updated. Removing it and refinishing the ceiling smooth is one of the highest-ROI cosmetic changes you can make to a property — both visually and at resale.

At HRCCoatings Inc, we specialize in clean, dust-controlled popcorn ceiling removal across San Diego County. We tarp the room, contain the dust, scrape the texture, skim coat the ceiling smooth, and refinish to a paint-ready surface. Most rooms are completed in 2-3 days with minimal disruption to the rest of your home.

We also offer the full range of specialty painting work: accent walls with custom colors and finishes, two-tone rooms, faux finishes, decorative wall painting, and unique coatings for rooms that need to stand out. If you have a custom vision for a room, we have the experience to deliver it.`}
      processSteps={[
        {
          title: "Project Consultation",
          description:
            "We listen to your vision, assess the space, and design a custom approach. For popcorn removal, we test the ceiling for asbestos if the home was built before 1980.",
        },
        {
          title: "Detailed Planning",
          description:
            "Material selection, technique planning, and timeline creation specific to your project. For accent walls or faux finishes, we mock up the look before committing.",
        },
        {
          title: "Surface Preparation",
          description:
            "Specialized prep including dust containment for popcorn removal, plastic sheeting on floors and furniture, and full room masking. We protect your home thoroughly.",
        },
        {
          title: "Custom Application",
          description:
            "Skilled application of specialty finishes, faux techniques, or popcorn scraping with skim coat. Multiple coats and proper drying time for a flawless result.",
        },
        {
          title: "Final Walkthrough",
          description:
            "Detailed inspection and walkthrough with you. We don't leave until the work is finished and you're 100% satisfied with how the room looks.",
        },
      ]}
      benefits={[
        {
          title: "Major ROI",
          description:
            "Popcorn ceiling removal is one of the highest-value cosmetic updates you can make to a home.",
        },
        {
          title: "Dust Controlled",
          description:
            "Full plastic containment, floor protection, and daily cleanup. Your home stays clean.",
        },
        {
          title: "Skim Coat Smooth",
          description:
            "After scraping, we skim coat to a glass-smooth finish that's ready for paint.",
        },
        {
          title: "Custom Vision",
          description:
            "Beyond popcorn — accent walls, faux finishes, and decorative work for unique spaces.",
        },
      ]}
      featuresGrid={[
        {
          title: "Popcorn Ceiling Removal",
          description:
            "Full removal, skim coat smoothing, and paint-ready refinishing. Most rooms in 2-3 days.",
        },
        {
          title: "Accent Walls",
          description:
            "Custom color or finish accent walls. Bold colors, two-tone rooms, statement walls.",
        },
        {
          title: "Faux Finishes",
          description:
            "Venetian plaster, color washing, sponging, rag rolling, and other specialty techniques.",
        },
        {
          title: "Decorative Painting",
          description:
            "Custom designs, stripes, geometric patterns, and decorative wall painting.",
        },
        {
          title: "Texture Application",
          description:
            "Add or modify wall textures — knockdown, orange peel, smooth — to match your vision.",
        },
        {
          title: "Specialty Coatings",
          description:
            "Magnetic paint, chalkboard paint, dry-erase coatings, and other functional finishes.",
        },
      ]}
      faqs={[
        {
          question: "How much does popcorn ceiling removal cost?",
          answer:
            "Costs typically range $1.50-$3.00 per square foot of ceiling. A standard 200 sq ft bedroom ceiling runs $300-$600. A full single-story home averages $2,000-$4,000. We provide detailed quotes during your free estimate.",
        },
        {
          question: "How long does popcorn removal take?",
          answer:
            "Most individual rooms are completed in 2-3 days. A whole-home popcorn removal typically takes 5-10 days depending on size. Drying time between skim coats is the main factor.",
        },
        {
          question: "Will my house be a mess during the project?",
          answer:
            "No. We use full plastic containment, floor protection, and daily cleanup. The dust stays in the work area and we leave the rest of your home livable. We typically work one room at a time.",
        },
        {
          question: "What about asbestos in popcorn ceilings?",
          answer:
            "Popcorn ceilings installed before 1980 may contain asbestos. We test before scraping any pre-1980 ceiling. If asbestos is detected, we coordinate with a licensed abatement contractor before proceeding with the cosmetic work.",
        },
        {
          question: "Can you do an accent wall in any color?",
          answer:
            "Yes. Any color, any sheen, any finish. We can match an existing color in your home or help you select something completely new. Bold colors work especially well as accent walls behind beds, sofas, or entertainment centers.",
        },
        {
          question: "What kind of faux finishes do you offer?",
          answer:
            "Venetian plaster, color washing, sponging, rag rolling, ombré, metallic finishes, and custom techniques. Faux finishes work best on accent walls or in small areas like powder rooms or dining rooms.",
        },
        {
          question: "Do you do magnetic or chalkboard paint?",
          answer:
            "Yes. We install specialty functional coatings including magnetic paint, chalkboard paint, dry-erase paint, and similar finishes for kids' rooms, home offices, and creative spaces.",
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
