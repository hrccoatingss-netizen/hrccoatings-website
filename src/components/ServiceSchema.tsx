interface ServiceSchemaProps {
  slug: string;
  name: string;
  description: string;
  image?: string;
  steps?: { title: string; description: string }[];
  faqs?: { question: string; answer: string }[];
}

/**
 * Reusable JSON-LD schema block for any service page.
 * Emits Service + BreadcrumbList + (optional) HowTo + (optional) FAQPage.
 */
export default function ServiceSchema({
  slug,
  name,
  description,
  image,
  steps,
  faqs,
}: ServiceSchemaProps) {
  const canonicalUrl = `https://hrccoatingsco.com/services/${slug}`;
  const heroImage = image
    ? `https://hrccoatingsco.com${image}`
    : "https://hrccoatingsco.com/images/hero-painting.jpg";

  const schemas: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${canonicalUrl}#service`,
      url: canonicalUrl,
      name: `${name} in San Diego`,
      serviceType: name,
      description,
      image: heroImage,
      provider: {
        "@type": "LocalBusiness",
        "@id": "https://hrccoatingsco.com#business",
        name: "HRCCoatings Inc",
        url: "https://hrccoatingsco.com",
        telephone: "+16192893908",
        email: "hrccoatingss@gmail.com",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "8334 Clairemont Mesa Blvd Ste 101",
          addressLocality: "San Diego",
          addressRegion: "CA",
          postalCode: "92111",
          addressCountry: "US",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "19",
        },
      },
      areaServed: [
        {
          "@type": "City",
          name: "San Diego",
          containedInPlace: { "@type": "State", name: "California" },
        },
        { "@type": "City", name: "Carlsbad" },
        { "@type": "City", name: "La Jolla" },
        { "@type": "City", name: "Chula Vista" },
        { "@type": "City", name: "Encinitas" },
        { "@type": "City", name: "Oceanside" },
      ],
      offers: {
        "@type": "Offer",
        name: "Free Estimate",
        description:
          "Free in-home estimate with no obligation. $500 off first project for new customers.",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        validFrom: "2026-01-01",
        url: `${canonicalUrl}#contact`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://hrccoatingsco.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://hrccoatingsco.com/#services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: name,
          item: canonicalUrl,
        },
      ],
    },
  ];

  if (steps && steps.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: `Our ${name} Process`,
      description: `The step-by-step process HRCCoatings Inc follows for every ${name.toLowerCase()} project in San Diego.`,
      image: heroImage,
      totalTime: "P3D",
      estimatedCost: {
        "@type": "MonetaryAmount",
        currency: "USD",
        value: "0",
      },
      step: steps.map((step, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: step.title,
        text: step.description,
        url: `${canonicalUrl}#step-${i + 1}`,
      })),
    });
  }

  if (faqs && faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
