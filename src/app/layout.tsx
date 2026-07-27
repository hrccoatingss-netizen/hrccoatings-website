import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "HRCCoatings Inc - Professional Painting Services in San Diego | 20+ Years Experience",
    template: "%s | HRCCoatings Inc",
  },
  description:
    "Professional painting, epoxy flooring, and coating services in San Diego County. Family-run, faith-based company with 20+ years experience. Free estimates. $500 off first project!",
  metadataBase: new URL("https://hrccoatingsco.com"),
  openGraph: {
    title: "HRCCoatings Inc - San Diego's Trusted Painting Experts",
    description:
      "Professional painting, epoxy flooring, and coating services in San Diego County. Family-run, faith-based company with 20+ years experience.",
    url: "https://hrccoatingsco.com",
    siteName: "HRCCoatings Inc",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/hero-painting.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HRCCoatings Inc - San Diego's Trusted Painting Experts",
    description:
      "Professional painting, epoxy flooring, and coating services in San Diego County.",
    images: ["/images/hero-painting.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://hrccoatingsco.com" },
  icons: {
    icon: "/icon.png?v=3",
    apple: "/apple-icon.png?v=3",
  },
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
              name: "HRCCoatings Inc",
              description:
                "Professional painting, epoxy flooring, and coating services in San Diego County. Licensed (CSLB LIC #1158346), bonded, and insured.",
              url: "https://hrccoatingsco.com",
              telephone: "+16193041289",
              email: "hrccoatingss@gmail.com",
              image: "https://hrccoatingsco.com/images/hero-painting.jpg",
              logo: "https://hrccoatingsco.com/images/hrc-logo.png",
              priceRange: "$$",
              hasCredential: {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "license",
                name: "CSLB C-33 Painting Contractor License",
                identifier: "1158346",
                recognizedBy: {
                  "@type": "GovernmentOrganization",
                  name: "California Contractors State License Board (CSLB)",
                },
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "8334 Clairemont Mesa Blvd Ste 101",
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
              openingHours: "Mo-Su 07:00-18:00",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "19",
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
              review: [
                {
                  "@type": "Review",
                  reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
                  author: { "@type": "Person", name: "Sandra Sandra" },
                  reviewBody:
                    "Our experience with Hrccoatings was exceptional! We are very satisfied with the outcome of our project. Hector and Jr. delivered outstanding results on our interior painting.",
                },
                {
                  "@type": "Review",
                  reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
                  author: { "@type": "Person", name: "Elio Espinosa" },
                  reviewBody:
                    "They painted our home last year and they were professional, efficient, and did an excellent job!",
                },
                {
                  "@type": "Review",
                  reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
                  author: { "@type": "Person", name: "Jessica Aliano" },
                  reviewBody:
                    "I've hired Hector and Junior multiple times, and they always deliver top-notch results. Their work is clean, detailed, and professional every time. This hardworking father-son team is punctual, tidy, and fast.",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased bg-cream`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2Q1EKNERW2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2Q1EKNERW2');
          `}
        </Script>

        {/* Meta Pixel (Facebook + Instagram ads) */}
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <>
            <Script id="meta-pixel" strategy="afterInteractive">
              {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
                fbq('track', 'PageView');
              `}
            </Script>
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                alt=""
                src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_META_PIXEL_ID}&ev=PageView&noscript=1`}
              />
            </noscript>
          </>
        )}

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
