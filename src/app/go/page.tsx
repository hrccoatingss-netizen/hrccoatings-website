import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HRCCoatings — San Diego Painting",
  description:
    "Get a free estimate, call or text us, see our work, or read our reviews. HRCCoatings, family-run painting in San Diego County. CSLB #1158346.",
  alternates: { canonical: "/go" },
};

const PHONE_DISPLAY = "(619) 289-3908";
const PHONE_HREF = "tel:+16192893908";
const INSTAGRAM = "https://www.instagram.com/hrccoatings";
const REVIEWS = "https://g.page/r/CbGIhjpPj8pSEBM/review";

type Item = {
  href: string;
  label: string;
  sub: string;
  icon: React.ReactNode;
  primary?: boolean;
  external?: boolean;
};

const Icon = ({ d }: { d: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.9}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 shrink-0"
    aria-hidden="true"
  >
    <path d={d} />
  </svg>
);

const items: Item[] = [
  {
    href: "/#contact",
    label: "Get a Free Estimate",
    sub: "Tell us about your project",
    primary: true,
    icon: <Icon d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />,
  },
  {
    href: PHONE_HREF,
    label: `Call or Text ${PHONE_DISPLAY}`,
    sub: "Talk to Junior directly",
    icon: (
      <Icon d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
    ),
  },
  {
    href: REVIEWS,
    label: "Read Our Reviews",
    sub: "See what neighbors say on Google",
    external: true,
    icon: <Icon d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />,
  },
  {
    href: INSTAGRAM,
    label: "See Our Work",
    sub: "Before and afters on Instagram",
    external: true,
    icon: (
      <Icon d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6a4 4 0 100 8 4 4 0 000-8zm5.5-1.5h.01" />
    ),
  },
  {
    href: "/services",
    label: "What We Do",
    sub: "Interior, exterior, cabinets and more",
    icon: <Icon d="M4 20h16M6 16l6-12 6 12M9 12h6" />,
  },
];

export default function GoPage() {
  return (
    <main className="min-h-screen bg-[#0B2C75] px-5 py-12">
      <div className="mx-auto w-full max-w-md">
        <header className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#FF6933]">
            San Diego County
          </p>
          <h1 className="mt-3 text-4xl font-black uppercase leading-none tracking-tight text-white">
            HRCCoatings
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/80">
            Father and son. Over 600 homes painted across San Diego since 2003.
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/55">
            Licensed · Bonded · Insured · CSLB #1158346
          </p>
        </header>

        <nav className="mt-10 flex flex-col gap-3.5" aria-label="Quick links">
          {items.map((item) => {
            const base =
              "group flex items-center gap-4 rounded-xl px-5 py-4 transition-colors duration-150";
            const look = item.primary
              ? `${base} bg-[#DB143C] text-white hover:bg-[#c11133]`
              : `${base} bg-white/95 text-[#0B2C75] hover:bg-white`;

            const inner = (
              <>
                <span className={item.primary ? "text-white" : "text-[#DB143C]"}>
                  {item.icon}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[17px] font-bold leading-snug">
                    {item.label}
                  </span>
                  <span
                    className={`block text-[13.5px] leading-snug ${
                      item.primary ? "text-white/85" : "text-[#0B2C75]/65"
                    }`}
                  >
                    {item.sub}
                  </span>
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 shrink-0 opacity-45 transition-transform duration-150 group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </>
            );

            if (item.external || item.href.startsWith("tel:")) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={look}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {inner}
                </a>
              );
            }

            return (
              <Link key={item.label} href={item.href} className={look}>
                {inner}
              </Link>
            );
          })}
        </nav>

        <p className="mt-10 text-center text-[13px] leading-relaxed text-white/55">
          hrccoatingsco.com
        </p>
      </div>
    </main>
  );
}
