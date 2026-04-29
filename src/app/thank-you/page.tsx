import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You — Your Free Estimate Is on the Way",
  description:
    "Your request for a free painting estimate has been received. A member of our team will call you shortly to schedule your in-home appointment.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://hrccoatingsco.com/thank-you" },
};

export default function ThankYouPage() {
  const PHONE_DISPLAY = "(619) 304-1289";
  const PHONE_TEL = "+16193041289";

  return (
    <main
      className="relative min-h-screen overflow-hidden font-sans"
      style={{
        background: "#f4f1ea",
        color: "#0e0e0e",
      }}
    >
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
      {/* Diagonal brand stripe overlay (very subtle) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, transparent 0 36px, rgba(219,20,60,0.04) 36px 37px)",
        }}
      />

      {/* TOP STRIP — minimal mono labels */}
      <div className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 pt-8 sm:px-12 sm:pt-10">
        <div
          className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#0e0e0e]"
          style={{ fontFamily: 'var(--font-jetbrains-mono), ui-monospace, monospace' }}
        >
          HRCCoatings&nbsp;<span style={{ color: "#DB143C" }}>·</span>&nbsp;San&nbsp;Diego
        </div>
        <div
          className="text-[10px] font-bold uppercase tracking-[0.28em]"
          style={{
            fontFamily: 'var(--font-jetbrains-mono), ui-monospace, monospace',
            color: "#0B2C75",
          }}
        >
          Submission&nbsp;Confirmed
        </div>
      </div>

      {/* HERO */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-20 pb-12 sm:px-12 sm:pt-28 sm:pb-16">
        <div className="flex flex-col items-center text-center">
          {/* Mono kicker with dot */}
          <div
            className="mb-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em]"
            style={{
              fontFamily: 'var(--font-jetbrains-mono), ui-monospace, monospace',
              color: "#DB143C",
            }}
          >
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 rounded-full"
              style={{ background: "#DB143C" }}
            />
            Application Received
          </div>

          {/* HUGE editorial headline */}
          <h1
            className="text-[64px] font-black leading-[0.88] tracking-[-0.04em] sm:text-[120px] md:text-[148px]"
            style={{ color: "#0e0e0e" }}
          >
            Thank{" "}
            <span
              className="italic"
              style={{
                color: "#DB143C",
                fontStyle: "italic",
                fontWeight: 900,
              }}
            >
              you.
            </span>
          </h1>

          {/* Subtitle — narrow column for editorial feel */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#3a3530] sm:mt-8 sm:text-lg">
            Thanks for filling out our form. One of our representatives will
            call you shortly to schedule your free in-home estimate. If
            you&apos;d like to reach us sooner, feel free to call us directly.
          </p>
        </div>
      </section>

      {/* BLACK BUSINESS-CARD PHONE CALLOUT */}
      <section className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pb-16 sm:px-12 sm:pb-20">
        <a
          href={`tel:${PHONE_TEL}`}
          className="group block w-full max-w-md rounded-sm shadow-[0_24px_60px_-30px_rgba(0,0,0,0.5)] transition hover:scale-[1.01] active:scale-[0.99]"
          style={{ background: "#0e0e0e" }}
        >
          <div className="flex flex-col items-center px-8 py-7 sm:px-10 sm:py-8">
            <div
              className="mb-2 text-[10px] font-bold uppercase tracking-[0.32em]"
              style={{
                fontFamily: 'var(--font-jetbrains-mono), ui-monospace, monospace',
                color: "#a8a39a",
              }}
            >
              Call Us Directly
            </div>
            <div
              className="whitespace-nowrap text-2xl font-black tracking-[-0.02em] text-white sm:text-3xl md:text-4xl"
              style={{ letterSpacing: "-0.01em" }}
            >
              +1&nbsp;{PHONE_DISPLAY}
            </div>
          </div>
        </a>
        <p className="mt-5 max-w-md text-center text-sm leading-relaxed text-[#3a3530]">
          <span className="font-semibold text-[#0e0e0e]">
            Save this number to your contacts.
          </span>{" "}
          This is also the number we&apos;ll be calling from, so you don&apos;t
          miss our call.
        </p>
      </section>

      {/* WHAT HAPPENS NEXT — minimal numbered cards */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20 sm:px-12 sm:pb-28">
        <div
          className="mb-10 text-center text-[11px] font-bold uppercase tracking-[0.32em]"
          style={{
            fontFamily: 'var(--font-jetbrains-mono), ui-monospace, monospace',
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
              body: "Your information is in and our team has been notified.",
              active: true,
            },
            {
              num: "02",
              title: "A Rep Will Call You",
              body: `We'll reach out shortly from ${PHONE_DISPLAY}. Save it so you don't miss the call.`,
              active: false,
            },
            {
              num: "03",
              title: "In-Home Estimate",
              body: "We schedule your in-home appointment to walk the project together.",
              active: false,
            },
          ].map((step) => (
            <div
              key={step.num}
              className="flex flex-col p-7 sm:p-8"
              style={{ background: "#f4f1ea" }}
            >
              <div className="mb-5 flex items-start justify-between">
                <div
                  className="text-5xl font-black leading-none tracking-[-0.04em]"
                  style={{ color: "#0e0e0e" }}
                >
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
                  fontFamily: 'var(--font-jetbrains-mono), ui-monospace, monospace',
                  color: "#0B2C75",
                }}
              >
                {step.title}
              </div>
              <p className="text-sm leading-relaxed text-[#3a3530]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER — editorial, minimal */}
      <footer className="relative z-10 mx-auto max-w-6xl border-t border-[#0e0e0e]/15 px-6 pb-10 pt-6 sm:px-12">
        <div className="flex flex-col items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-[0.28em] text-[#3a3530] sm:flex-row sm:gap-0">
          <div
            style={{
              fontFamily: 'var(--font-jetbrains-mono), ui-monospace, monospace',
            }}
          >
            HRCCoatings&nbsp;Inc
          </div>
          <div
            className="flex items-center gap-3"
            style={{
              fontFamily: 'var(--font-jetbrains-mono), ui-monospace, monospace',
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
