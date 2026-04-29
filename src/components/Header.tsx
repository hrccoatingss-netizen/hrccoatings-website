"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const services = [
  { name: "Interior Painting", href: "/services/interior-painting" },
  { name: "Exterior Painting", href: "/services/exterior-painting" },
  { name: "Commercial Painting", href: "/services/commercial-painting" },
  { name: "Epoxy Flooring", href: "/services/epoxy-flooring" },
  { name: "Concrete Polishing", href: "/services/concrete-polishing" },
  { name: "Cabinet Refinishing", href: "/services/cabinet-refinishing" },
  { name: "Drywall Repair", href: "/services/drywall-repair" },
  { name: "Stucco Repair", href: "/services/stucco-repair" },
  { name: "Specialty Services", href: "/services/specialty-services" },
  { name: "Wallpaper", href: "/services/wallpaper" },
];

const navLinks = [
  { name: "Work", href: "/#gallery" },
  { name: "Services", href: "#", hasDropdown: true },
  { name: "Reviews", href: "/#reviews" },
  { name: "About", href: "/about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const HIDE_NAV_ROUTES = ["/thank-you"];
  if (HIDE_NAV_ROUTES.some((p) => pathname === p || pathname.startsWith(p + "/"))) {
    return null;
  }

  // Detect if homepage (so header can be transparent over hero)
  const isHomepage = pathname === "/";
  const transparentMode = isHomepage && !scrolled && !mobileOpen;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (pathname === "/") {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  // Color tokens that flip with transparency mode
  const textColor = transparentMode ? "text-white" : "text-ink-soft";
  const textColorMuted = transparentMode ? "text-white/80" : "text-stone";
  const hoverBg = transparentMode ? "hover:bg-white/10" : "hover:bg-ink/5";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparentMode
          ? "bg-transparent"
          : "bg-cream/85 backdrop-blur-xl border-b border-ink/5"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 flex items-center gap-2.5">
          <div className={`relative h-9 w-9 rounded-lg overflow-hidden transition-all ${transparentMode ? "bg-white/10 backdrop-blur" : "bg-white shadow-sm"}`}>
            <Image
              src="/images/hrc-logo.png"
              alt="HRCCoatings Inc"
              width={48}
              height={48}
              className="h-full w-full object-contain p-1"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <p className={`text-[15px] font-black tracking-tight ${textColor} leading-none uppercase`}>
              HRCCoatings
            </p>
            <p className={`text-[10px] uppercase tracking-[0.18em] ${textColorMuted} mt-1 font-bold`}>
              San Diego · Est. 2003
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.name} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  onMouseEnter={() => setServicesOpen(true)}
                  className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-[12px] font-bold tracking-wide uppercase transition-colors ${textColor} ${hoverBg}`}
                >
                  Services
                  <svg
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {servicesOpen && (
                  <div
                    className="absolute left-0 top-full mt-2 w-72 rounded-2xl border border-ink/8 bg-cream/95 backdrop-blur-xl p-2 shadow-2xl"
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setServicesOpen(false)}
                        className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-[13px] transition-colors hover:bg-navy/5 hover:text-navy ${
                          pathname === service.href
                            ? "font-semibold text-navy bg-navy/5"
                            : "text-ink-soft"
                        }`}
                      >
                        <span>{service.name}</span>
                        <svg className="h-3 w-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className={`rounded-full px-4 py-2 text-[12px] font-bold tracking-wide uppercase transition-colors ${textColor} ${hoverBg}`}
              >
                {link.name}
              </Link>
            )
          )}
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+16193041289"
            className={`flex items-center gap-2 text-[13px] font-medium transition-colors ${textColorMuted} hover:${transparentMode ? "text-white" : "text-navy"}`}
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (619) 304-1289
          </a>
          <Link
            href="/#contact"
            onClick={(e) => handleAnchorClick(e, "/#contact")}
            className={`group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[12px] font-extrabold uppercase tracking-wider transition-all ${
              transparentMode
                ? "bg-orange text-white hover:bg-red"
                : "bg-orange text-white hover:bg-red"
            }`}
          >
            Get Free Estimate
            <svg className="h-3 w-3 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`relative z-50 rounded-full p-2.5 transition-colors lg:hidden ${textColor} ${hoverBg}`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <div className="flex h-5 w-5 flex-col items-center justify-center gap-1">
            <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${mobileOpen ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${mobileOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Slide-out Menu */}
      <div
        className={`fixed right-0 top-0 z-40 flex h-full w-80 max-w-[85vw] flex-col bg-cream shadow-2xl transition-transform duration-500 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex-1 overflow-y-auto px-6 pb-6 pt-24">
          <div className="space-y-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.name}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-ink-soft transition-colors hover:bg-ink/5"
                  >
                    Services
                    <svg
                      className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileServicesOpen && (
                    <div className="ml-4 space-y-0.5 border-l-2 border-ink/10 pl-4">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileServicesOpen(false);
                          }}
                          className={`block rounded-xl px-3 py-2.5 text-sm transition-colors hover:bg-ink/5 ${
                            pathname === service.href
                              ? "font-semibold text-navy"
                              : "text-stone"
                          }`}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="block rounded-xl px-4 py-3.5 text-base font-medium text-ink-soft transition-colors hover:bg-ink/5"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          <div className="mt-8 border-t border-ink/10 pt-6">
            <a
              href="tel:+16193041289"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-semibold text-navy transition-colors hover:bg-ink/5"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (619) 304-1289
            </a>
          </div>

          <div className="mt-4 px-4">
            <Link
              href="/#contact"
              onClick={(e) => handleAnchorClick(e, "/#contact")}
              className="block w-full rounded-full bg-navy py-4 text-center text-base font-semibold text-white shadow-sm transition-all hover:bg-navy-deep"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
