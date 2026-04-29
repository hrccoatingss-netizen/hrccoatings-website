"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const services = [
  { name: "Interior Painting", href: "/services/interior-painting" },
  { name: "Exterior Painting", href: "/services/exterior-painting" },
  { name: "Commercial Painting", href: "/services/commercial-painting" },
  { name: "Epoxy Flooring", href: "/services/epoxy-flooring" },
  { name: "Cabinet Refinishing", href: "/services/cabinet-refinishing" },
];

const company = [
  { name: "About", href: "/about" },
  { name: "Reviews", href: "/#reviews" },
  { name: "Service Areas", href: "/#gallery" },
  { name: "Free Estimate", href: "/#contact" },
];

const HIDE_FOOTER_ROUTES = ["/thank-you"];

export default function Footer() {
  const pathname = usePathname();
  if (HIDE_FOOTER_ROUTES.some((p) => pathname === p || pathname.startsWith(p + "/"))) {
    return null;
  }

  return (
    <footer className="bg-ink-soft text-white">
      {/* Editorial top section */}
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10 pt-24 pb-16">
        {/* Big tagline */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20 pb-16 border-b border-white/10">
          <div className="lg:col-span-8">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/50 font-semibold mb-6">
              Get in touch
            </p>
            <h2 className="font-black tracking-[-0.04em] leading-[0.95] text-5xl sm:text-6xl lg:text-7xl text-white uppercase">
              LET&apos;S MAKE IT<br />
              <span className="text-orange">LOOK NEW.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end gap-3">
            <Link
              href="/#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange text-white px-7 py-4 text-[12px] font-extrabold uppercase tracking-wider transition-all hover:bg-red"
            >
              Start Your Project
              <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+16193041289"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-[14px] font-medium text-white transition-all hover:bg-white/5"
            >
              (619) 304-1289
            </a>
          </div>
        </div>

        {/* Columns */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-5">
              <div className="h-11 w-11 rounded-xl bg-white p-1.5 shadow-sm">
                <Image
                  src="/images/hrc-logo.png"
                  alt="HRCCoatings Inc"
                  width={56}
                  height={56}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="text-[15px] font-black tracking-tight leading-none uppercase">HRCCoatings</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/50 mt-1 font-bold">
                  San Diego · Est. 2003
                </p>
              </div>
            </Link>
            <p className="text-[14px] text-white/60 leading-relaxed max-w-xs">
              Faith-based, family-run painting company serving San Diego County for over 20 years.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.instagram.com/hrccoatings"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all hover:bg-orange hover:border-orange"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@hrccoatings"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all hover:bg-orange hover:border-orange"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.2 8.2 0 005.58 2.17V11.7a4.85 4.85 0 01-3.77-1.93V6.69h3.77z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2 lg:col-start-6">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/50 font-semibold mb-5">
              Services
            </p>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/80 transition-colors hover:text-orange"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/50 font-semibold mb-5">
              Company
            </p>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/80 transition-colors hover:text-orange"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/50 font-semibold mb-5">
              Contact
            </p>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+16193041289"
                  className="text-2xl font-black tracking-tight text-white transition-colors hover:text-orange"
                >
                  (619) 304-1289
                </a>
              </li>
              <li>
                <a
                  href="mailto:hrccoatingss@gmail.com"
                  className="text-[13px] text-white/80 transition-colors hover:text-orange"
                >
                  hrccoatingss@gmail.com
                </a>
              </li>
              <li className="text-[13px] text-white/60 leading-relaxed">
                3334 Clairemont Mesa Blvd<br />
                Ste 101, San Diego, CA 92111
              </li>
              <li className="text-[13px] text-white/60">
                <span className="text-white/40">Hours: </span>
                7AM – 5PM Daily
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-3 px-5 py-6 text-center text-[12px] text-white/50 sm:flex-row sm:justify-between sm:text-left lg:px-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <span>&copy; 2024 HRCCoatings Inc</span>
            <div className="flex gap-4">
              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="transition-colors hover:text-white"
              >
                Terms of Service
              </Link>
            </div>
          </div>
          <span className="text-white/40">Cash · Check · Credit Card · Venmo · Zelle</span>
        </div>
      </div>
    </footer>
  );
}
