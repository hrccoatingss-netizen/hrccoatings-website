import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Thank You — Your Free Estimate Is on the Way",
  description:
    "Your request for a free painting estimate has been received. Junior will call you shortly to schedule your in-home appointment.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://hrccoatingsco.com/thank-you" },
};

const PHONE_DISPLAY = "(619) 289-3908";
const PHONE_TEL = "+16192893908";

const reviews = [
  {
    name: "Jessica Aliano",
    role: "Local Realtor, Carlsbad",
    text: "I've hired Hector and Junior multiple times and they always deliver top notch results. As a local realtor, I now refer them to all of my real estate clients.",
  },
  {
    name: "Christopher Melendez",
    role: "Homeowner, San Diego",
    text: "The HRC team did a great job refinishing our kitchen cabinets, epoxying the exterior floor, and completing a full exterior paint job. Professional work and quality results. Highly recommend!",
  },
  {
    name: "Chris Kerbow",
    role: "Repeat Customer",
    text: "Top tier service. I trust JR with everything. Nothing less than excellence from these guys!",
  },
];

export default function ThankYouPage() {
  return (
    <main
      className="relative min-h-screen overflow-hidden font-sans"
      style={{ background: "#f4f1ea", color: "#0e0e0e" }}
    >
      {/* Meta Pixel: fire Lead event on this thank-you page */}
      <Script id="meta-pixel-lead" strategy="afterInteractive">
        {`
          if (typeof fbq === 'function') {
            fbq('track', 'Lead', { content_name: 'Free Estimate Request' });
          }
        `}
      </Script>
      <Script id="gtag-lead" strategy="afterInteractive">
        {`
          if (typeof gtag === 'function') {
            gtag('event', 'generate_lead', {
              event_category: 'engagement',
              event_label: 'Free Estimate Form Submission',
              value: 1
            });
          }
        `}
      </Script>

      {/* Subtle blueprint grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(11,44,117,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,44,117,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* TOP STRIP */}
      <div className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 pt-8 sm:px-12 sm:pt-10">
        <div
          className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#0e0e0e]"
          style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace" }}
        >
          HRCCoatings Inc&nbsp;<span style={{ color: "#DB143C" }}>·</span>&nbsp;San&nbsp;Diego
        </div>
        <div
          className="text-[10px] font-bold uppercase tracking-[0.28em]"
          style={{
            fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
            color: "#0B2C75",
          }}
        >
          Submission&nbsp;Confirmed
        </div>
      </div>

      {/* HERO */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-10 sm:px-12 sm:pt-24 sm:pb-12">
        <div className="flex flex-col items-center text-center">
          <div
            className="mb-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em]"
            style={{
              fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
              color: "#DB143C",
            }}
          >
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 rounded-full"
              style={{ background: "#DB143C" }}
            />
            You&apos;re All Set
          </div>

          <h1
            className="text-[56px] font-black leading-[0.88] tracking-[-0.04em] sm:text-[110px] md:text-[136px]"
            style={{ color: "#0e0e0e" }}
          >
            Thank{" "}
            <span className="italic" style={{ color: "#DB143C", fontWeight: 900 }}>
              you.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#3a3530] sm:mt-8 sm:text-lg">
            Your estimate request is in.{" "}
            <span className="font-semibold text-[#0e0e0e]">
              Junior will personally call you in the next few minutes
            </span>{" "}
            from the number below — save it so you know it&apos;s us.
          </p>
        </div>
      </section>

      {/* BLACK BUSINESS-CARD PHONE CALLOUT */}
      <section className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pb-14 sm:px-12 sm:pb-16">
        <a
          href={`tel:${PHONE_TEL}`}
          className="group block w-full max-w-md rounded-sm shadow-[0_24px_60px_-30px_rgba(0,0,0,0.5)] transition hover:scale-[1.01] active:scale-[0.99]"
          style={{ background: "#0e0e0e" }}
        >
          <div className="flex flex-col items-center px-8 py-7 sm:px-10 sm:py-8">
            <div
              className="mb-2 text-[10px] font-bold uppercase tracking-[0.32em]"
              style={{
                fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
                color: "#a8a39a",
              }}
            >
              Junior Is Calling You From
            </div>
            <div className="whitespace-nowrap text-2xl font-black tracking-[-0.02em] text-white sm:text-3xl md:text-4xl">
              +1&nbsp;{PHONE_DISPLAY}
            </div>
          </div>
        </a>
        <p className="mt-5 max-w-md text-center text-sm leading-relaxed text-[#3a3530]">
          <span className="font-semibold" style={{ color: "#DB143C" }}>
            Save this number to your contacts right now.
          </span>{" "}
          It&apos;s Junior&apos;s direct line — no call centers, no runaround.
        </p>
      </section>

      {/* FEATURED VIDEO — EXTERIOR TRANSFORMATION */}
      <section className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pb-16 sm:px-12 sm:pb-20">
        <div
          className="mb-6 text-center text-[11px] font-bold uppercase tracking-[0.32em]"
          style={{
            fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
            color: "#3a3530",
          }}
        >
          Watch A Full Home Transformation
        </div>
        <div className="w-full max-w-md overflow-hidden rounded-sm border border-[#0e0e0e]/12 bg-white shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)]">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/reel/DMjJ5bnS8jc/"
            data-instgrm-version="14"
            style={{ margin: 0, width: "100%", minHeight: 560 }}
          >
            <a
              href="https://www.instagram.com/reel/DMjJ5bnS8jc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch our full home transformation on Instagram
            </a>
          </blockquote>
        </div>
        <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
        <p className="mt-4 max-w-md text-center text-sm leading-relaxed text-[#3a3530]">
          From faded to flawless — this is what your home could look like. Junior
          will walk your project with you on the call.
        </p>
      </section>

      {/* FATHER & SON — WHO'S CALLING YOU */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-16 sm:px-12 sm:pb-20">
        <div className="grid items-center gap-8 border border-[#0e0e0e]/12 bg-white/60 p-7 sm:grid-cols-2 sm:p-10">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
            <Image
              src="/images/team-photo.jpg"
              alt="Hector and Junior Rivera, the father and son team behind HRCCoatings"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
          <div>
            <div
              className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em]"
              style={{
                fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
                color: "#0B2C75",
              }}
            >
              Who&apos;s Calling You
            </div>
            <h2 className="text-3xl font-black tracking-[-0.02em] sm:text-4xl">
              A father &amp; son team,
              <br />
              not a call center.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#3a3530]">
              HRCCoatings is Hector and Junior Rivera — a family-owned San Diego
              painting company with 20+ years of craft behind every wall, cabinet,
              and exterior we touch. When you pick up, you&apos;re talking to the
              owner. When we paint, the owner is on your job.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 border border-[#0e0e0e]/15 bg-[#f4f1ea] px-4 py-3">
              <span
                aria-hidden="true"
                className="inline-block h-2.5 w-2.5 rounded-full"
                style={{ background: "#DB143C" }}
              />
              <span
                className="text-[11px] font-bold uppercase tracking-[0.22em]"
                style={{
                  fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
                }}
              >
                Licensed · Bonded · Insured — CSLB&nbsp;#1158346
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF — REAL BEFORE / AFTER */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-16 sm:px-12 sm:pb-20">
        <div
          className="mb-8 text-center text-[11px] font-bold uppercase tracking-[0.32em]"
          style={{
            fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
            color: "#3a3530",
          }}
        >
          Real Jobs · Real San Diego Homes
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              before: "/images/interior/before-after/cabinets-before.jpg",
              after: "/images/interior/before-after/cabinets-after.jpg",
              label: "Kitchen Cabinet Refinish",
            },
            {
              before: "/images/interior/before-after/fireplace-before.jpg",
              after: "/images/interior/before-after/fireplace-after.jpg",
              label: "Fireplace Transformation",
            },
            {
              before: "/images/interior/before-after/railing-before.jpg",
              after: "/images/interior/before-after/railing-after.jpg",
              label: "Railing Refinish",
            },
          ].map((pair) => (
            <div key={pair.label} className="border border-[#0e0e0e]/12 bg-white/60 p-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <Image
                    src={pair.before}
                    alt={`${pair.label} — before`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                  <span className="absolute left-2 top-2 bg-[#0e0e0e] px-2 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white">
                    Before
                  </span>
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <Image
                    src={pair.after}
                    alt={`${pair.label} — after`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                  <span
                    className="absolute left-2 top-2 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white"
                    style={{ background: "#DB143C" }}
                  >
                    After
                  </span>
                </div>
              </div>
              <p
                className="mt-3 text-center text-[10px] font-bold uppercase tracking-[0.24em] text-[#3a3530]"
                style={{
                  fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
                }}
              >
                {pair.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-16 sm:px-12 sm:pb-20">
        <div
          className="mb-8 text-center text-[11px] font-bold uppercase tracking-[0.32em]"
          style={{
            fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
            color: "#3a3530",
          }}
        >
          ★★★★★ · 19 Five-Star Google Reviews
        </div>
        <div className="grid gap-px overflow-hidden border border-[#0e0e0e]/12 bg-[#0e0e0e]/12 sm:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="flex flex-col p-7" style={{ background: "#f4f1ea" }}>
              <div className="mb-3 text-sm" style={{ color: "#DB143C" }}>
                ★★★★★
              </div>
              <p className="flex-1 text-sm leading-relaxed text-[#3a3530]">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="mt-4">
                <p className="text-sm font-bold text-[#0e0e0e]">{r.name}</p>
                <p className="text-[11px] font-medium text-[#3a3530]">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20 sm:px-12 sm:pb-28">
        <div
          className="mb-10 text-center text-[11px] font-bold uppercase tracking-[0.32em]"
          style={{
            fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
            color: "#3a3530",
          }}
        >
          What Happens Next
        </div>

        <div className="grid gap-px overflow-hidden border border-[#0e0e0e]/12 bg-[#0e0e0e]/12 sm:grid-cols-3">
          {[
            {
              num: "01",
              title: "Form Received",
              body: "Your information is in and Junior has been notified.",
              active: true,
            },
            {
              num: "02",
              title: "Junior Calls You",
              body: `Expect his call shortly from ${PHONE_DISPLAY}. Save it so you don't miss him.`,
              active: false,
            },
            {
              num: "03",
              title: "In-Home Estimate",
              body: "We walk the project together and you get an exact number — free, no pressure.",
              active: false,
            },
          ].map((step) => (
            <div key={step.num} className="flex flex-col p-7 sm:p-8" style={{ background: "#f4f1ea" }}>
              <div className="mb-5 flex items-start justify-between">
                <div className="text-5xl font-black leading-none tracking-[-0.04em]" style={{ color: "#0e0e0e" }}>
                  {step.num}
                </div>
                <div
                  aria-hidden="true"
                  className="mt-2 flex h-5 w-5 items-center justify-center rounded-full border-2"
                  style={{
                    borderColor: "#DB143C",
                    background: step.active ? "#DB143C" : "transparent",
                  }}
                >
                  {step.active && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth={3.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-2.5 w-2.5"
                    >
                      <path d="M5 12.5l5 5 9-9" />
                    </svg>
                  )}
                </div>
              </div>
              <div
                className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em]"
                style={{
                  fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
                  color: "#0B2C75",
                }}
              >
                {step.title}
              </div>
              <p className="text-sm leading-relaxed text-[#3a3530]">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEE MORE — WEBSITE CTA */}
      <section className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pb-20 sm:px-12 sm:pb-24">
        <div
          className="mb-4 text-[11px] font-bold uppercase tracking-[0.32em]"
          style={{
            fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
            color: "#3a3530",
          }}
        >
          While You Wait For Junior&apos;s Call
        </div>
        <a
          href="https://hrccoatingsco.com"
          className="inline-flex items-center gap-3 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:opacity-90"
          style={{ background: "#0B2C75" }}
        >
          Explore Our Work · hrccoatingsco.com
          <span aria-hidden="true" style={{ color: "#DB143C" }}>
            →
          </span>
        </a>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 mx-auto max-w-6xl border-t border-[#0e0e0e]/15 px-6 pb-10 pt-6 sm:px-12">
        <div className="flex flex-col items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-[0.28em] text-[#3a3530] sm:flex-row sm:gap-0">
          <div style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace" }}>
            HRCCoatings Inc · CSLB #1158346
          </div>
          <div
            className="flex items-center gap-3"
            style={{
              fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
              color: "#0e0e0e",
            }}
          >
            <span style={{ color: "#DB143C" }}>●</span>
            <a href={`tel:${PHONE_TEL}`} className="hover:underline">
              +1&nbsp;{PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
