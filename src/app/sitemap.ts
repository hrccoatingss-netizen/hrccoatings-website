import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hrccoatingsco.com";

  const services = [
    "interior-painting",
    "exterior-painting",
    "commercial-painting",
    "epoxy-flooring",
    "concrete-polishing",
    "cabinet-refinishing",
    "drywall-repair",
    "stucco-repair",
    "specialty-services",
    "wallpaper",
  ];

  const blogs = [
    "paint-color-guide",
    "signs-home-needs-repainting",
    "epoxy-vs-traditional",
  ];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...services.map((service) => ({
      url: `${baseUrl}/services/${service}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...blogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date("2026-01-26"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date("2026-01-26"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
