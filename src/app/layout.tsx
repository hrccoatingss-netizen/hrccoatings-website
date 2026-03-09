import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "HRCCoatings LLC - Professional Painting Services in San Diego | 20+ Years Experience",
    template: "%s | HRCCoatings LLC",
  },
  description:
    "Professional painting, epoxy flooring, and coating services in San Diego County. Family-run, faith-based company with 20+ years experience. Free estimates. $500 off first project!",
  metadataBase: new URL("https://hrccoatingsco.com"),
  openGraph: {
    title: "HRCCoatings LLC - San Diego's Trusted Painting Experts",
    description:
      "Professional painting, epoxy flooring, and coating services in San Diego County. Family-run, faith-based company with 20+ years experience.",
    url: "https://hrccoatingsco.com",
    siteName: "HRCCoatings LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/hero-painting.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HRCCoatings LLC - San Diego's Trusted Painting Experts",
    description:
      "Professional painting, epoxy flooring, and coating services in San Diego County.",
    images: ["/images/hero-painting.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://hrccoatingsco.com" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://hrccoatingsco.com",
              name: "HRCCoatings LLC",
              description:
                "Professional painting, epoxy flooring, and coating services in San Diego County.",
              url: "https://hrccoatingsco.com",
              telephone: "+16192893908",
              email: "hrccoatingss@gmail.com",
              image: "https://hrccoatingsco.com/images/hero-painting.jpg",
              logo: "https://hrccoatingsco.com/images/hrc-logo.png",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "3334 Clairemont Mesa Blvd Ste 101",
                addressLocality: "San Diego",
                addressRegion: "CA",
                postalCode: "92111",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 32.8312,
                longitude: -117.1646,
              },
              openingHours: "Mo-Su 07:00-17:00",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "15",
              },
              areaServed: [
                "San Diego",
                "Clairemont",
                "Carlsbad",
                "La Jolla",
                "Chula Vista",
                "Pacific Beach",
                "Mission Valley",
                "Point Loma",
                "North Park",
                "Hillcrest",
                "Del Mar",
                "Encinitas",
                "Oceanside",
              ],
              sameAs: [
                "https://www.instagram.com/hrccoatings",
                "https://www.tiktok.com/@hrccoatings",
              ],
              paymentAccepted: "Cash, Check, Credit Card, Venmo, Zelle",
              foundingDate: "2003",
              founder: {
                "@type": "Person",
                name: "Hector Rivera",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
