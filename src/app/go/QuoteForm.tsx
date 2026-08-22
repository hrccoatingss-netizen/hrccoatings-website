"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { submitEstimateForm } from "@/app/actions/submit-form";

const PHONE_DISPLAY = "(619) 289-3908";
const PHONE_HREF = "tel:+16192893908";
const INSTAGRAM = "https://www.instagram.com/hrccoatings";
const REVIEWS = "https://g.page/r/CbGIhjpPj8pSEBM/review";
const SITE = "https://hrccoatingsco.com";

const SERVICES = [
  "Exterior Painting",
  "Interior Painting",
  "Cabinet Refinishing",
  "Epoxy / Garage Floor",
  "Stucco Repair",
  "More than one of these",
];

const TIMELINES = [
  "As soon as possible",
  "Within 30 days",
  "1 to 2 months",
  "Just getting a price for now",
];

const inputCls =
  "w-full border-2 border-white/15 bg-white/[0.04] px-4 py-[15px] text-[16px] font-medium text-white placeholder-white/30 outline-none transition-colors focus:border-[#FF6933] focus:bg-white/[0.08]";

const labelCls =
  "mb-2 block font-[family-name:var(--font-tech)] text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF6933]";

function LogoBand() {
  return (
    <div className="bg-white px-8 py-5">
      <div className="mx-auto max-w-[220px]">
        <Image
          src="/images/hrc-logo.png"
          alt="HRCCoatings"
          width={440}
          height={220}
          priority
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}

export default function QuoteForm() {
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSending(true);

    const fd = new FormData(e.currentTarget);
    const full = String(fd.get("fullName") || "").trim();
    const [firstName, ...rest] = full.split(/\s+/);

    const res = await submitEstimateForm({
      firstName: firstName || full,
      lastName: rest.join(" "),
      phone: String(fd.get("phone") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      service: String(fd.get("service") || ""),
      timeline: String(fd.get("timeline") || ""),
      message: "Scanned the QR code on the van",
      source: "Van QR",
    });

    setSending(false);
    if (res?.success) setDone(true);
    else setError(res?.error || "Something went wrong. Please call or text us.");
  }

  if (done) {
    return (
      <main className="min-h-screen bg-[#0B0B0C] text-white antialiased">
        <LogoBand />
        <div className="mx-auto w-full max-w-[460px] px-8 pb-20 pt-16 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center bg-[#FF6933]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-black"
              aria-hidden="true"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h1 className="mt-7 font-[family-name:var(--font-display)] text-[40px] uppercase leading-[0.95] tracking-[-0.01em]">
            You&apos;re on
            <br />
            the list.
          </h1>
          <p className="mt-5 text-[16px] leading-relaxed text-white/65">
            Junior will call you shortly from {PHONE_DISPLAY}. Save the number so
            you know it&apos;s us.
          </p>
          <a
            href={PHONE_HREF}
            className="mt-8 flex items-center justify-center border-2 border-white/20 px-6 py-4 font-[family-name:var(--font-tech)] text-[14px] font-bold uppercase tracking-[0.12em] text-white transition-colors active:bg-white/10"
          >
            Call Us Now Instead
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0B0B0C] text-white antialiased">
      <LogoBand />

      {/* orange rule under the logo band */}
      <div className="h-[5px] w-full bg-[#FF6933]" />

      <div className="mx-auto w-full max-w-[460px] px-8 pb-16 pt-10">
        <p className="font-[family-name:var(--font-tech)] text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
          // San Diego County &middot; Est. 2003
        </p>

        <h1 className="mt-4 font-[family-name:var(--font-display)] text-[52px] uppercase leading-[0.88] tracking-[-0.02em]">
          Get your
          <br />
          <span className="text-[#FF6933]">quote.</span>
        </h1>

        <p className="mt-5 text-[15.5px] leading-relaxed text-white/60">
          Tell us what needs painting. We come out, measure it, and leave you a
          real number the same visit.
        </p>

        <form onSubmit={handleSubmit} className="mt-9">
          <div className="mb-5">
            <label htmlFor="fullName" className={labelCls}>
              Your Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              autoComplete="name"
              placeholder="First and last"
              className={inputCls}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="phone" className={labelCls}>
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              inputMode="tel"
              autoComplete="tel"
              placeholder={PHONE_DISPLAY}
              className={inputCls}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="service" className={labelCls}>
              What Needs Painting
            </label>
            <select
              id="service"
              name="service"
              required
              defaultValue=""
              className={`${inputCls} appearance-none`}
            >
              <option value="" disabled>
                Choose one
              </option>
              {SERVICES.map((s) => (
                <option key={s} value={s} className="bg-[#141416]">
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-5">
            <label htmlFor="timeline" className={labelCls}>
              How Soon
            </label>
            <select
              id="timeline"
              name="timeline"
              required
              defaultValue=""
              className={`${inputCls} appearance-none`}
            >
              <option value="" disabled>
                Choose one
              </option>
              {TIMELINES.map((t) => (
                <option key={t} value={t} className="bg-[#141416]">
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-7">
            <label htmlFor="email" className={labelCls}>
              Email <span className="text-white/30">(Optional)</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@email.com"
              className={inputCls}
            />
          </div>

          {error && (
            <p className="mb-4 border-2 border-[#E8121A] bg-[#E8121A]/10 px-4 py-3 text-[14px] text-white">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={sending}
            className="w-full bg-[#FF6933] px-6 py-[20px] font-[family-name:var(--font-display)] text-[19px] uppercase tracking-[0.01em] text-black transition-colors active:bg-[#e55a26] disabled:opacity-60"
          >
            {sending ? "Sending…" : "Get My Free Quote"}
          </button>

          <p className="mt-4 text-center text-[12px] leading-relaxed text-white/30">
            By submitting you agree to be contacted about your project by phone,
            text or email. Message rates may apply.
          </p>
        </form>
      </div>

      {/* ---- trust band ---- */}
      <div className="border-y-2 border-white/10 bg-white/[0.03] px-8 py-6">
        <div className="mx-auto max-w-[460px]">
          <p className="text-center font-[family-name:var(--font-tech)] text-[11px] font-bold uppercase leading-relaxed tracking-[0.16em] text-white/55">
            Licensed &middot; Bonded &middot; Insured
            <br />
            <span className="text-[#FF6933]">CSLB #1158346</span>
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            {[
              ["600+", "Homes Painted"],
              ["23", "Years In Business"],
            ].map(([big, small]) => (
              <div key={small} className="text-center">
                <div className="font-[family-name:var(--font-display)] text-[30px] leading-none text-white">
                  {big}
                </div>
                <div className="mt-2 font-[family-name:var(--font-tech)] text-[9.5px] font-bold uppercase tracking-[0.14em] text-white/45">
                  {small}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-[13.5px] leading-relaxed text-white/45">
            Father and son, painting San Diego County since 2003.
          </p>
        </div>
      </div>

      {/* ---- secondary links ---- */}
      <div className="mx-auto w-full max-w-[460px] px-8 pb-16 pt-8">
        {[
          { href: PHONE_HREF, label: `Call or Text ${PHONE_DISPLAY}` },
          { href: REVIEWS, label: "Read Our Google Reviews", external: true },
          { href: INSTAGRAM, label: "See Our Work on Instagram", external: true },
          { href: SITE, label: "Visit Our Website", external: true },
        ].map((l) => (
          <a
            key={l.label}
            href={l.href}
            {...(l.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="mb-3 flex items-center justify-between border-2 border-white/12 px-5 py-[17px] font-[family-name:var(--font-tech)] text-[12.5px] font-bold uppercase tracking-[0.1em] text-white transition-colors active:bg-white/[0.08]"
          >
            {l.label}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.6}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-[14px] w-[14px] shrink-0 text-[#FF6933]"
              aria-hidden="true"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </a>
        ))}
      </div>
    </main>
  );
}
