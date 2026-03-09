import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Commercial Painting Services in San Diego",
  description:
    "Professional commercial painting for San Diego businesses. Offices, retail, warehouses, tenant improvements. Flexible scheduling, minimal disruption.",
};

export default function CommercialPaintingPage() {
  return (
    <ServicePageLayout
      heroTitle="Commercial Painting"
      heroSubtitle="Professional Commercial Painting for San Diego Businesses"
      heroImage="/images/commercial/building-front.jpg"
      overview={`Your commercial space represents your brand, and its appearance matters to customers, clients, and employees. HRCCoatings delivers professional commercial painting services that minimize business disruption while maximizing results.

We serve offices, retail spaces, warehouses, restaurants, medical facilities, and commercial properties throughout San Diego County. Our experience includes tenant improvements, complete building repaints, and ongoing maintenance programs.

We understand the unique demands of commercial projects—tight timelines, after-hours scheduling, and minimal disruption to operations. Our team works efficiently and professionally to deliver quality results on schedule and within budget.`}
      processSteps={[
        {
          title: "Site Assessment & Planning",
          description:
            "Evaluate scope, schedule around business operations",
        },
        {
          title: "Preparation & Protection",
          description:
            "Protect equipment, inventory, and high-traffic areas",
        },
        {
          title: "Efficient Application",
          description:
            "Fast, professional painting with minimal disruption",
        },
        {
          title: "Final Walkthrough",
          description: "Ensure quality and address any concerns",
        },
      ]}
      benefits={[
        {
          title: "Flexible Scheduling",
          description:
            "Nights, weekends, and after-hours available to minimize business disruption",
        },
        {
          title: "Commercial Experience",
          description:
            "Extensive experience with offices, retail, warehouses, and tenant improvements",
        },
        {
          title: "Minimal Disruption",
          description:
            "Efficient crews and careful planning keep your business running smoothly",
        },
        {
          title: "Competitive Rates",
          description:
            "Professional results at competitive commercial pricing",
        },
      ]}
      gallerySections={[
        {
          images: [
            { src: "/images/commercial/building-front.jpg", alt: "Commercial building front" },
            { src: "/images/commercial/building-angle.jpg", alt: "Commercial building angle view" },
            { src: "/images/commercial/building-side.jpg", alt: "Commercial building side" },
            { src: "/images/commercial/building-progress.jpg", alt: "Commercial painting in progress" },
            { src: "/images/commercial/building-prep.jpg", alt: "Commercial painting preparation" },
            { src: "/images/commercial/roof-coating.jpg", alt: "Commercial roof coating" },
          ],
        },
      ]}
      beforeAfter={[
        {
          label: "Parking Lot Bollard Restoration",
          before: "/images/commercial/before-after/bollards-before-1.jpg",
          after: "/images/commercial/before-after/bollards-after-1.jpg",
        },
        {
          label: "Bollard Restoration #2",
          before: "/images/commercial/before-after/bollards-before-2.jpg",
          after: "/images/commercial/before-after/bollards-after-2.jpg",
        },
        {
          label: "Hospital Rooftop HVAC",
          before: "/images/commercial/before-after/hvac-before.jpg",
          after: "/images/commercial/before-after/hvac-after.jpg",
        },
      ]}
      faqs={[
        {
          question: "Do you work after hours or weekends?",
          answer:
            "Yes! We understand business operations can't stop for painting. We're happy to work evenings, weekends, or any schedule that minimizes disruption.",
        },
        {
          question: "How long do commercial projects typically take?",
          answer:
            "Timeline depends on size and scope. Small offices may take 2-3 days, while larger facilities could take 1-2 weeks.",
        },
        {
          question: "Can you work around our business hours?",
          answer:
            "Absolutely. We'll create a schedule that works for your operations.",
        },
        {
          question: "Do you provide ongoing maintenance programs?",
          answer:
            "Yes, we offer maintenance painting programs for commercial clients.",
        },
        {
          question: "What types of commercial properties do you serve?",
          answer:
            "We serve all types: offices, retail spaces, warehouses, restaurants, medical facilities, schools, tenant improvements, HOA properties, and more.",
        },
      ]}
      relatedServices={[
        {
          title: "Exterior Painting",
          href: "/services/exterior-painting",
          image: "/images/exterior/exterior-services.jpg",
        },
        {
          title: "Epoxy Flooring",
          href: "/services/epoxy-flooring",
          image: "/images/epoxy/epoxy-services.jpg",
        },
        {
          title: "Drywall Repair",
          href: "/services/drywall-repair",
          image: "/images/drywall-services.jpg",
        },
      ]}
    />
  );
}
