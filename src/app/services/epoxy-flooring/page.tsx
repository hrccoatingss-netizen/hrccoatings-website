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
      heroImage="/images/projects/spring-valley/sv-epoxy-garage-wide.jpg"
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
      videos={[
        {
          src: "/videos/epoxy-hero-glide.mp4",
          poster: "/videos/epoxy-hero-glide-poster.jpg",
          title: "The finished floor",
          caption: "A flake epoxy garage floor we just finished in Spring Valley, shot low across the surface so you can see the texture and the sheen.",
        },
        {
          src: "/videos/epoxy-flake-broadcast.mp4",
          poster: "/videos/epoxy-flake-broadcast-poster.jpg",
          title: "Flake goes on by hand",
          caption: "Color flake is broadcast by hand across the wet base coat, edge to edge, until the slab is fully covered.",
        },
      ]}
      gallerySections={[
        {
          label: "Epoxy Flake Systems",
          images: [
            { src: "/images/projects/spring-valley/sv-epoxy-garage-wide.jpg", alt: "Finished blue gray flake epoxy garage floor in Spring Valley" },
            { src: "/images/projects/spring-valley/sv-epoxy-garage-door-open.jpg", alt: "Flake epoxy garage floor with the garage door open" },
            { src: "/images/projects/spring-valley/sv-epoxy-floor-closeup.jpg", alt: "Close up of the flake epoxy floor texture" },
            { src: "/images/projects/spring-valley/sv-epoxy-floor-sheen.jpg", alt: "Clear coat sheen across a finished epoxy floor" },
            { src: "/images/projects/spring-valley/sv-epoxy-garage-from-driveway.jpg", alt: "Finished epoxy garage floor seen from the driveway" },
            { src: "/images/projects/spring-valley/sv-epoxy-before-bare-concrete.jpg", alt: "Bare concrete and grinder before the epoxy floor went down" },
          ],
        },
        {
          label: "How The Floor Goes Down",
          images: [
            { src: "/images/projects/spring-valley/sv-epoxy-squeegee.jpg", alt: "Base coat spread with a squeegee before flake" },
            { src: "/images/projects/spring-valley/sv-epoxy-flake-broadcast.jpg", alt: "Broadcasting color flake by hand across the wet base coat" },
            { src: "/images/projects/spring-valley/sv-epoxy-roller-pole.jpg", alt: "Back rolling the coating with a pole roller" },
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
