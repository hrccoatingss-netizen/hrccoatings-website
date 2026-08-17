import type { Metadata } from "next";
import { Archivo_Black, JetBrains_Mono } from "next/font/google";
import QuoteForm from "./QuoteForm";

const display = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const mono = JetBrains_Mono({
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-tech",
});

export const metadata: Metadata = {
  title: "Get Your Quote | HRCCoatings",
  description:
    "Tell us what you need painted. We come out, measure it, and leave you a real number the same visit. HRCCoatings, San Diego County. CSLB #1158346.",
  alternates: { canonical: "/go" },
  robots: { index: false, follow: false },
};

export default function GoPage() {
  return (
    <div className={`${display.variable} ${mono.variable}`}>
      <QuoteForm />
    </div>
  );
}
