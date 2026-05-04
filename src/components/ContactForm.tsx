"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { submitEstimateForm } from "@/app/actions/submit-form";

const SERVICE_OPTIONS = [
  "Epoxy Flake",
  "Epoxy Metallic",
  "Interior Painting",
  "Exterior Painting",
  "Drywall Repair",
  "Stucco Repair",
  "Cabinet Refinishing",
  "Wallpaper",
  "Concrete Polishing",
  "Commercial Painting",
  "Popcorn Removal",
  "Other",
] as const;

export default function ContactForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
    consentTransactional: false,
    consentMarketing: false,
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const result = await submitEstimateForm({
      firstName: form.firstName,
      lastName: form.lastName,
      phone: form.phone,
      email: form.email,
      service: form.service,
      message: form.message,
    });

    if (result.success) {
      // Redirect to /thank-you for proper conversion tracking + better UX.
      // Meta Pixel, Google Ads, and GA4 conversion events all fire on URL change.
      router.push("/thank-you");
    } else {
      setStatus("error");
      setErrorMsg(result.error || "Something went wrong. Please try again.");
    }
  }

  const inputBase =
    "w-full rounded-2xl border border-ink/10 bg-cream px-5 py-4 text-[15px] text-ink placeholder:text-stone-light outline-none transition focus:border-navy focus:ring-4 focus:ring-navy/10";

  return (
    <section id="contact" className="bg-cream-dark py-24 lg:py-32 px-5 lg:px-10">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left: Heading */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2.5 mb-6">
              <span className="h-px w-8 bg-navy/30" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-navy/70">
                Free estimate
              </span>
            </div>
            <h2 className="font-black tracking-[-0.04em] leading-[0.95] text-5xl sm:text-6xl text-ink uppercase">
              TELL US ABOUT<br />
              <span className="text-navy">YOUR PROJECT.</span>
            </h2>
            <p className="mt-6 text-base text-stone leading-relaxed">
              Fill out the form and we&apos;ll get back to you within 24 hours
              with a detailed estimate. No pressure, no obligation.
            </p>

            {/* Highlights */}
            <div className="mt-10 space-y-5">
              {[
                { title: "24-hour response", desc: "We reply within one business day." },
                { title: "On-site assessment", desc: "Free in-person quote, accurate to the dollar." },
                { title: "$500 off first project", desc: "Limited spots available this month." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange shrink-0" />
                  <div>
                    <p className="text-[14px] font-semibold text-ink">{item.title}</p>
                    <p className="text-[13px] text-stone mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-ink/10">
              <p className="text-[12px] uppercase tracking-[0.18em] text-stone font-semibold mb-2">
                Or call us directly
              </p>
              <a
                href="tel:+16193041289"
                className="text-3xl font-black tracking-tight text-navy hover:text-red transition"
              >
                (619) 304-1289
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            {status === "success" ? (
              <div className="rounded-3xl border border-navy/10 bg-cream p-10 lg:p-14 text-center">
                <div className="mx-auto h-14 w-14 rounded-full bg-navy/5 flex items-center justify-center mb-5">
                  <svg className="h-7 w-7 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black tracking-[-0.02em] text-ink uppercase">
                  THANK YOU.
                </h3>
                <p className="mt-3 text-stone max-w-sm mx-auto">
                  Your estimate request has been submitted. We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-[13px] font-medium text-navy underline underline-offset-4 hover:text-red"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-ink/8 bg-white p-6 sm:p-10 shadow-sm"
              >
                {status === "error" && (
                  <div className="mb-6 rounded-2xl bg-red/5 border border-red/20 p-4 text-[13px] text-red">
                    {errorMsg}
                  </div>
                )}

                {/* Name row */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-2 block text-[12px] font-semibold uppercase tracking-wider text-ink-soft"
                    >
                      First Name <span className="text-red">*</span>
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-2 block text-[12px] font-semibold uppercase tracking-wider text-ink-soft"
                    >
                      Last Name <span className="text-red">*</span>
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className={inputBase}
                    />
                  </div>
                </div>

                {/* Phone / Email */}
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-[12px] font-semibold uppercase tracking-wider text-ink-soft"
                    >
                      Phone <span className="text-red">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(619) 555-1234"
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-[12px] font-semibold uppercase tracking-wider text-ink-soft"
                    >
                      Email <span className="text-red">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={inputBase}
                    />
                  </div>
                </div>

                {/* Service */}
                <div className="mt-5">
                  <label
                    htmlFor="service"
                    className="mb-2 block text-[12px] font-semibold uppercase tracking-wider text-ink-soft"
                  >
                    Service Needed <span className="text-red">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className={`${inputBase} appearance-none bg-cream`}
                  >
                    <option value="" disabled>
                      Select a service…
                    </option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[12px] font-semibold uppercase tracking-wider text-ink-soft"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us a bit about your project…"
                    className={`${inputBase} resize-y`}
                  />
                </div>

                {/* SMS Consent */}
                <div className="mt-7 space-y-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consentTransactional"
                      checked={form.consentTransactional}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 shrink-0 rounded border-ink/30 accent-navy"
                    />
                    <span className="text-[12px] leading-relaxed text-stone">
                      By checking this box, I consent to receive transactional
                      messages related to my account, orders, or services I have
                      requested to HRCCoatings Inc. These messages may include
                      appointment reminders, order confirmations, and account
                      notifications. Message frequency may vary. Message &amp; Data
                      rates may apply. Reply HELP for help or STOP to opt-out.
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consentMarketing"
                      checked={form.consentMarketing}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 shrink-0 rounded border-ink/30 accent-navy"
                    />
                    <span className="text-[12px] leading-relaxed text-stone">
                      By checking this box, I consent to receive marketing and
                      promotional messages, including special offers, discounts, new
                      product updates from HRCCoatings Inc. Message frequency may vary.
                      Message &amp; Data rates may apply. Reply HELP for help or
                      STOP to opt-out.
                    </span>
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-8 group inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange px-7 py-4 text-[13px] font-extrabold uppercase tracking-wider text-white transition-all hover:bg-red active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Submitting..." : (
                    <>
                      Request Free Estimate
                      <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="mt-5 text-center text-[11px] text-stone-light">
                  <Link href="/privacy-policy" className="underline underline-offset-4 hover:text-navy">
                    Privacy Policy
                  </Link>
                  {" · "}
                  <Link href="/terms-of-service" className="underline underline-offset-4 hover:text-navy">
                    Terms of Service
                  </Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
