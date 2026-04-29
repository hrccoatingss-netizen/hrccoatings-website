interface ArticleSchemaProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  category?: string;
}

/**
 * BlogPosting + BreadcrumbList structured data for blog posts.
 */
export default function ArticleSchema({
  slug,
  title,
  description,
  image,
  datePublished,
  dateModified,
  category,
}: ArticleSchemaProps) {
  const canonicalUrl = `https://hrccoatingsco.com/blog/${slug}`;
  const heroImage = image.startsWith("http")
    ? image
    : `https://hrccoatingsco.com${image}`;

  const article = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    headline: title,
    description,
    image: heroImage,
    datePublished,
    dateModified: dateModified || datePublished,
    articleSection: category || "Painting",
    inLanguage: "en-US",
    author: {
      "@type": "Organization",
      name: "HRCCoatings Inc",
      url: "https://hrccoatingsco.com",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://hrccoatingsco.com#business",
      name: "HRCCoatings Inc",
      url: "https://hrccoatingsco.com",
      logo: {
        "@type": "ImageObject",
        url: "https://hrccoatingsco.com/images/hrc-logo.png",
        width: 200,
        height: 200,
      },
    },
  };

  const breadcrumb = {
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
        name: "Blog",
        item: "https://hrccoatingsco.com/#blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
