"use client";

import { useState, type FormEvent } from "react";
import { submitEstimateForm } from "@/app/actions/submit-form";

const PHONE_DISPLAY = "(619) 289-3908";
const PHONE_HREF = "tel:+16192893908";

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

const field =
  "w-full rounded-lg border border-white/15 bg-white/[0.06] px-4 py-[15px] text-[16px] text-white placeholder-white/35 outline-none transition-colors focus:border-[#FF6933] focus:bg-white/[0.09]";

const label =
  "mb-2 block text-[11px] font-bold uppercase tracking-[0.15em] text-white/50";

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
    });

    setSending(false);
    if (res?.success) setDone(true);
    else setError(res?.error || "Something went wrong. Please call or text us.");
  }

  if (done) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#070C18] px-7 text-center text-white antialiased">
        <div className="w-full max-w-[420px]">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#DB143C]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.6}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-white"
              aria-hidden="true"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h1 className="mt-7 text-[30px] font-extrabold leading-tight tracking-[-0.025em]">
            Got it.
          </h1>
          <p className="mt-4 text-[16px] leading-relaxed text-white/70">
            Junior will call you shortly from {PHONE_DISPLAY}. Save the number so
            you know it&apos;s us.
          </p>
          <a
            href={PHONE_HREF}
            className="mt-8 flex items-center justify-center rounded-lg bg-white/[0.07] px-6 py-4 text-[16px] font-semibold text-white ring-1 ring-white/15 transition-colors active:bg-white/[0.12]"
          >
            Call Us Now Instead
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#070C18] text-white antialiased">
      <div className="mx-auto w-full max-w-[460px] px-7 pb-16 pt-11">
        <p className="text-[10.5px] font-bold uppercase tracking-[0.3em] text-[#FF6933]">
          HRCCoatings &middot; San Diego
        </p>

        <h1 className="mt-4 text-[36px] font-extrabold leading-[1.03] tracking-[-0.03em]">
          Get your free
          <br />
          estimate.
        </h1>

        <p className="mt-4 text-[15.5px] leading-relaxed text-white/60">
          Tell us what you need painted. We come out, measure it, and leave you a
          real number the same visit.
        </p>

        <form onSubmit={handleSubmit} className="mt-9">
          <div className="mb-5">
            <label htmlFor="fullName" className={label}>
              Your name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              autoComplete="name"
              placeholder="First and last"
              className={field}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="phone" className={label}>
              Phone number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              inputMode="tel"
              autoComplete="tel"
              placeholder={PHONE_DISPLAY}
              className={field}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="service" className={label}>
              What needs painting
            </label>
            <select
              id="service"
              name="service"
              required
              defaultValue=""
              className={`${field} appearance-none`}
            >
              <option value="" disabled>
                Choose one
              </option>
              {SERVICES.map((s) => (
                <option key={s} value={s} className="bg-[#0E1526]">
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-5">
            <label htmlFor="timeline" className={label}>
              How soon
            </label>
            <select
              id="timeline"
              name="timeline"
              required
              defaultValue=""
              className={`${field} appearance-none`}
            >
              <option value="" disabled>
                Choose one
              </option>
              {TIMELINES.map((t) => (
                <option key={t} value={t} className="bg-[#0E1526]">
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-7">
            <label htmlFor="email" className={label}>
              Email <span className="normal-case tracking-normal">(optional)</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@email.com"
              className={field}
            />
          </div>

          {error && (
            <p className="mb-4 rounded-lg border border-[#DB143C]/50 bg-[#DB143C]/10 px-4 py-3 text-[14px] text-white">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={sending}
            className="w-full rounded-lg bg-[#DB143C] px-6 py-[19px] text-[17px] font-bold tracking-[-0.01em] text-white shadow-[0_10px_30px_-10px_rgba(219,20,60,0.7)] transition-colors active:bg-[#bd1134] disabled:opacity-60"
          >
            {sending ? "Sending…" : "Get My Free Estimate"}
          </button>

          <p className="mt-4 text-center text-[12px] leading-relaxed text-white/35">
            By submitting you agree to be contacted about your project by phone,
            text or email. Message rates may apply.
          </p>
        </form>

        <div className="mt-9 border-t border-white/10 pt-7">
          <a
            href={PHONE_HREF}
            className="flex items-center justify-center gap-3 rounded-lg border border-white/15 bg-white/[0.05] px-6 py-[17px] text-[16px] font-semibold text-white transition-colors active:bg-white/[0.1]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-[19px] w-[19px] text-[#FF6933]"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            Or call {PHONE_DISPLAY}
          </a>

          <p className="mt-7 text-center text-[11.5px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-white/30">
            Father &amp; son &middot; 600+ homes since 2003
            <br />
            Licensed &middot; Bonded &middot; Insured &middot; CSLB #1158346
          </p>
        </div>
      </div>
    </main>
  );
}
