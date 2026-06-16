import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Wallpaper Installation Services in San Diego",
  description:
    "Professional wallpaper installation and removal in San Diego. All types, perfect pattern matching, expert results. Free estimates.",
};

export default function WallpaperPage() {
  return (
    <ServicePageLayout
      slug="wallpaper"
      heroTitle="Wallpaper Installation"
      heroSubtitle="Transform Your Space with Professional Wallpaper"
      heroImage="/images/interior/living-room-1.jpg"
      overview={`Add personality, texture, and style to any room with professional wallpaper installation. From modern geometric patterns to classic designs, wallpaper offers endless possibilities to transform your space.

Our experienced team handles every aspect of wallpaper installation – from wall preparation and pattern matching to precise application and finishing. We work with all types of wallpaper to deliver flawless results that last.`}
      processSteps={[
        {
          title: "Consultation & Measurement",
          description:
            "Assess walls, take measurements, and help select wallpaper",
        },
        {
          title: "Surface Preparation",
          description:
            "Clean, repair, and prime walls for optimal adhesion",
        },
        {
          title: "Pattern Matching",
          description:
            "Carefully align patterns for seamless appearance",
        },
        {
          title: "Professional Installation",
          description:
            "Expert hanging with precise cuts and smooth finish",
        },
        {
          title: "Final Inspection",
          description:
            "Quality check and cleanup for perfect results",
        },
      ]}
      benefits={[
        {
          title: "Design Expertise",
          description:
            "Help selecting wallpaper styles, patterns, and textures that match your vision",
        },
        {
          title: "Proper Preparation",
          description:
            "Meticulous wall prep ensures long-lasting, bubble-free results",
        },
        {
          title: "Pattern Perfection",
          description:
            "Expert pattern matching for seamless, professional appearance",
        },
        {
          title: "Quality Installation",
          description:
            "Years of experience installing all wallpaper types and styles",
        },
      ]}
      featuresGrid={[
        {
          title: "All Wallpaper Types",
          description:
            "Traditional paste, peel-and-stick, vinyl, fabric, grasscloth, and specialty wallpapers",
        },
        {
          title: "Perfect Pattern Matching",
          description:
            "Seamless alignment for professional, cohesive appearance",
        },
        {
          title: "Wall Preparation",
          description:
            "Proper surface prep for smooth, long-lasting installation",
        },
        {
          title: "Removal Services",
          description:
            "Expert removal of old wallpaper and wall repair",
        },
        {
          title: "Design Consultation",
          description:
            "Help selecting the perfect wallpaper for your space",
        },
        {
          title: "Residential & Commercial",
          description:
            "Homes, offices, retail spaces, and hospitality projects",
        },
      ]}
      faqs={[
        {
          question: "What types of wallpaper can you install?",
          answer:
            "We install all types including traditional paste, peel-and-stick, vinyl, fabric-backed, grasscloth, and specialty textured wallpapers.",
        },
        {
          question: "Can you remove old wallpaper?",
          answer:
            "Yes! We offer complete wallpaper removal services including wall repair.",
        },
        {
          question: "How long does wallpaper installation take?",
          answer:
            "Most rooms take 1-2 days depending on size and complexity.",
        },
        {
          question: "Do you help with wallpaper selection?",
          answer:
            "Absolutely! We can help you choose wallpaper that fits your style, room function, and budget.",
        },
        {
          question: "How do I maintain wallpaper after installation?",
          answer:
            "Most modern wallpapers are washable and durable. Gentle dusting and occasional spot cleaning keeps it fresh.",
        },
        {
          question:
            "Can wallpaper be installed in bathrooms or kitchens?",
          answer:
            "Yes, with the right materials! We recommend vinyl or vinyl-coated wallpapers for high-moisture areas.",
        },
      ]}
      relatedServices={[
        {
          title: "Interior Painting",
          href: "/services/interior-painting",
          image: "/images/interior/interior-services.jpg",
        },
        {
          title: "Drywall Repair",
          href: "/services/drywall-repair",
          image: "/images/drywall-services.jpg",
        },
        {
          title: "Cabinet Refinishing",
          href: "/services/cabinet-refinishing",
          image: "/images/cabinet-services.jpg",
        },
      ]}
    />
  );
}
