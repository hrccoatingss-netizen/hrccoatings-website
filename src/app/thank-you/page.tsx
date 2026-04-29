import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You — Your Free Estimate is on the Way",
  description:
    "Your request for a free painting estimate has been received. A member of our team will call you shortly to schedule your in-home appointment.",
  // FB lead-form thank-you pages should NOT be indexed
  robots: { index: false, follow: false },
  alternates: { canonical: "https://hrccoatingsco.com/thank-you" },
};

export default function ThankYouPage() {
  const PHONE_DISPLAY = "(619) 304-1289";
  const PHONE_TEL = "+16193041289";

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-light to-white">
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-12 sm:pt-24 sm:pb-16">
        {/* Confirmation badge */}
        <div className="flex flex-col items-center text-center">
          <div
            aria-hidden="true"
            className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-navy shadow-lg sm:h-24 sm:w-24"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-10 w-10 text-white sm:h-12 sm:w-12"
              stroke="currentColor"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12.5l5 5 9-9" />
            </svg>
          </div>

          <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-red sm:text-sm">
            Submission Confirmed
          </p>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-navy sm:text-5xl sm:leading-tight">
            Your request was received.
          </h1>
          <p className="mx-auto max-w-2xl text-base text-foreground/80 sm:text-lg">
            Thanks for reaching out to <span className="font-semibold text-navy">HRC Coatings</span>.
            One of our team members will call you shortly to schedule your free in-home estimate
            and walk you through the <span className="font-semibold text-red">$500 off your first project</span>.
          </p>
        </div>

        {/* SAVE OUR NUMBER — primary CTA */}
        <div className="mt-12 rounded-2xl border-2 border-navy/10 bg-white p-6 shadow-xl sm:p-8">
          <div className="flex flex-col items-center text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-orange">
              ⚡ Important — Read This
            </p>
            <h2 className="mb-3 text-2xl font-extrabold text-navy sm:text-3xl">
              Save this number to your contacts
            </h2>
            <p className="mb-6 max-w-xl text-base text-foreground/75 sm:text-lg">
              We'll be calling you from the number below. Save it now so you don't miss us — and
              feel free to call <span className="font-semibold">right now</span> if you'd rather skip the wait.
            </p>

            <a
              href={`tel:${PHONE_TEL}`}
              className="group inline-flex items-center gap-3 rounded-xl bg-red px-8 py-5 text-2xl font-extrabold text-white shadow-lg transition hover:scale-[1.02] hover:bg-red/90 active:scale-[0.99] sm:gap-4 sm:px-12 sm:py-6 sm:text-3xl"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-7 w-7 sm:h-8 sm:w-8"
                stroke="currentColor"
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {PHONE_DISPLAY}
            </a>

            <p className="mt-4 text-sm text-foreground/60">
              Tap to call · Open 7 days a week, 7am – 5pm
            </p>
          </div>
        </div>

        {/* What happens next — 3 steps */}
        <div className="mt-12 sm:mt-16">
          <h2 className="mb-2 text-center text-xs font-bold uppercase tracking-[0.22em] text-red sm:mb-3">
            What happens next
          </h2>
          <h3 className="mb-8 text-center text-2xl font-extrabold text-navy sm:mb-10 sm:text-4xl">
            Three simple steps.
          </h3>

          <div className="grid gap-6 sm:grid-cols-3 sm:gap-5">
            {[
              {
                num: "01",
                title: "We'll call you",
                body: "A team member calls you from (619) 304-1289 within one business day. We confirm what you're looking for and lock in a time that works.",
              },
              {
                num: "02",
                title: "Free in-home estimate",
                body: "An owner walks the project with you. No salesperson, no upsell — just a written quote with every line item, materials, and timeline.",
              },
              {
                num: "03",
                title: "$500 off your project",
                body: "If you move forward, your first project comes with $500 off plus our 100% satisfaction guarantee. Premium paints. Family-run. 20+ years.",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="rounded-xl border border-navy/10 bg-white p-6 shadow-sm transition hover:shadow-md sm:p-7"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-base font-extrabold text-white">
                  {step.num}
                </div>
                <h4 className="mb-2 text-lg font-bold text-navy sm:text-xl">{step.title}</h4>
                <p className="text-sm text-foreground/75 sm:text-base">{step.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-12 rounded-2xl bg-navy px-6 py-8 text-white sm:mt-16 sm:px-8 sm:py-10">
          <div className="grid gap-6 text-center sm:grid-cols-3">
            <div>
              <div className="mb-1 flex justify-center gap-1 text-orange" aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77l-5.2 2.74.99-5.79-4.21-4.1 5.82-.85L10 1.5z" />
                  </svg>
                ))}
              </div>
              <div className="text-2xl font-extrabold sm:text-3xl">5.0 Google</div>
              <div className="text-xs uppercase tracking-wider text-white/70">Rating</div>
            </div>
            <div className="border-t border-white/15 pt-6 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
              <div className="text-2xl font-extrabold sm:text-3xl">600+</div>
              <div className="text-xs uppercase tracking-wider text-white/70">Projects Completed</div>
            </div>
            <div className="border-t border-white/15 pt-6 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
              <div className="text-2xl font-extrabold sm:text-3xl">20+ Years</div>
              <div className="text-xs uppercase tracking-wider text-white/70">Family-Run · Faith-Based</div>
            </div>
          </div>
        </div>

        {/* Soft secondary action */}
        <div className="mt-10 text-center sm:mt-14">
          <p className="mb-4 text-sm text-foreground/70 sm:text-base">
            Want to skip the call and book your estimate online?
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-navy bg-white px-6 py-3 text-sm font-bold text-navy transition hover:bg-navy hover:text-white sm:text-base"
          >
            Use the contact form on our site
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Premium paint partners — soft trust signal */}
        <div className="mt-12 border-t border-navy/10 pt-8 text-center sm:mt-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-foreground/60">
            We use only premium paints
          </p>
          <p className="text-sm font-medium text-foreground/80 sm:text-base">
            Benjamin Moore · Sherwin-Williams · Dunn-Edwards
          </p>
        </div>
      </section>
    </main>
  );
}
