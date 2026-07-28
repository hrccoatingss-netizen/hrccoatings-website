import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Thank You — Watch How We Transform Cabinets",
  description:
    "Your cabinet refinishing estimate request has been received. Junior will call you shortly — watch our full refinishing process while you wait.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://hrccoatingsco.com/thank-you/cabinets" },
};

const PHONE_DISPLAY = "(619) 289-3908";
const PHONE_TEL = "+16192893908";
const IG_REEL = "https://www.instagram.com/reel/DbEFQZ9Pkr6/";

export default function CabinetThankYouPage() {
  return (
    <main
      className="relative min-h-screen overflow-hidden font-sans"
      style={{ background: "#f4f1ea", color: "#0e0e0e" }}
    >
      <Script id="meta-pixel-lead" strategy="afterInteractive">
        {`
          if (typeof fbq === 'function') {
            fbq('track', 'Lead', { content_name: 'Cabinet Estimate Request' });
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
          className="text-[10px] font-bold uppercase tracking-[0.28em]"
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
      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-14 pb-8 sm:px-12 sm:pt-20 sm:pb-10">
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

          <h1 className="text-[44px] font-black leading-[0.92] tracking-[-0.04em] sm:text-[84px]">
            Your cabinets are about
            <br />
            to look{" "}
            <span className="italic" style={{ color: "#DB143C", fontWeight: 900 }}>
              brand new.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#3a3530] sm:text-lg">
            Your estimate request is in.{" "}
            <span className="font-semibold text-[#0e0e0e]">
              Junior will personally call you in the next few minutes
            </span>{" "}
            from <span className="font-semibold">{PHONE_DISPLAY}</span> — save the
            number. While you wait, watch exactly how we do it:
          </p>
        </div>
      </section>

      {/* THE PROCESS VIDEO */}
      <section className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pb-12 sm:px-12 sm:pb-16">
        <div className="w-full max-w-md overflow-hidden rounded-sm border border-[#0e0e0e]/12 bg-white shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)]">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={IG_REEL}
            data-instgrm-version="14"
            style={{ margin: 0, width: "100%", minHeight: 560 }}
          >
            <a href={IG_REEL} target="_blank" rel="noopener noreferrer">
              Watch our 14-step cabinet refinishing process on Instagram
            </a>
          </blockquote>
        </div>
        <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
        <a
          href={IG_REEL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-[11px] font-bold uppercase tracking-[0.24em] underline underline-offset-4"
          style={{
            fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
            color: "#0B2C75",
          }}
        >
          Watch our full 14-step process on Instagram →
        </a>
      </section>

      {/* PHONE CALLOUT */}
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
            Save this number to your contacts.
          </span>{" "}
          It&apos;s Junior&apos;s direct line — father &amp; son team, licensed,
          bonded &amp; insured. CSLB&nbsp;#1158346.
        </p>
      </section>

      {/* PROOF — CABINET BEFORE / AFTER */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 pb-20 sm:px-12 sm:pb-28">
        <div
          className="mb-8 text-center text-[11px] font-bold uppercase tracking-[0.32em]"
          style={{
            fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
            color: "#3a3530",
          }}
        >
          A Recent Cabinet Transformation
        </div>
        <div className="border border-[#0e0e0e]/12 bg-white/60 p-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <Image
                src="/images/interior/before-after/cabinets-before.jpg"
                alt="Kitchen cabinets before refinishing"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
              <span className="absolute left-2 top-2 bg-[#0e0e0e] px-2 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white">
                Before
              </span>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <Image
                src="/images/interior/before-after/cabinets-after.jpg"
                alt="Kitchen cabinets after professional refinishing by HRCCoatings"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
              <span
                className="absolute left-2 top-2 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white"
                style={{ background: "#DB143C" }}
              >
                After
              </span>
            </div>
          </div>
          <p className="mt-4 text-center text-sm leading-relaxed text-[#3a3530]">
            Sprayed factory-style finish. Doors and drawers labeled, removed, and
            refinished piece by piece — then reinstalled and aligned. This is the
            process you just watched, on a real San Diego kitchen.
          </p>
        </div>
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
