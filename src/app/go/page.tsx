import type { Metadata } from "next";
import QuoteForm from "./QuoteForm";

export const metadata: Metadata = {
  title: "Get Your Free Estimate | HRCCoatings",
  description:
    "Tell us what you need painted and we'll come out, measure, and leave you a real number. HRCCoatings, San Diego County. CSLB #1158346.",
  alternates: { canonical: "/go" },
  robots: { index: false, follow: false },
};

export default function GoPage() {
  return <QuoteForm />;
}
