import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "HRCCoatings LLC terms of service. Read our terms and conditions for using our services and website.",
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Terms of Service
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Last Updated aside */}
          <aside className="mb-10 rounded-xl border border-gray-100 bg-gray-light px-6 py-4">
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-navy">Last Updated:</span>{" "}
              April 6, 2026
            </p>
          </aside>

          <article className="space-y-10">
            {/* 1 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                1. Acceptance of Terms
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                By accessing our website or using our services, you agree to be
                bound by these Terms of Service. If you do not agree to these
                terms, please do not use our services.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                2. Description of Services
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                HRCCoatings LLC provides professional painting, coating, and
                related services including but not limited to:
              </p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  Interior and exterior painting
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  Epoxy flooring installation
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  Cabinet refinishing
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  Commercial painting
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  Specialty coating services
                </li>
              </ul>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                3. SMS Messaging Terms
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                By providing your phone number and opting in, you consent to
                receive SMS messages from HRCCoatings LLC. Messages may include
                appointment confirmations, project updates, estimates,
                scheduling reminders, and promotional offers related to our
                painting and coating services. Consent is not a condition of
                purchasing any goods or services.
              </p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  You can cancel the SMS service at any time. Simply text
                  &ldquo;STOP&rdquo; to the shortcode. Upon sending
                  &ldquo;STOP,&rdquo; we will confirm your unsubscribe status
                  via SMS. Following this confirmation, you will no longer
                  receive SMS messages from us. To rejoin, sign up as you did
                  initially, and we will resume sending SMS messages to you.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  <span>
                    For privacy-related inquiries, please refer to our{" "}
                    <Link
                      href="/privacy-policy"
                      className="font-medium text-navy underline underline-offset-2"
                    >
                      privacy policy
                    </Link>
                    .
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  As always, message and data rates may apply for messages sent
                  to you from us and to us from you. Message frequency varies.
                  For questions about your text plan or data plan, contact your
                  wireless provider.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  Carriers are not liable for delayed or undelivered messages.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  <span>
                    If you experience issues with the messaging program, reply
                    with the keyword HELP for more assistance, or reach out
                    directly to{" "}
                    <a
                      href="tel:+16192893908"
                      className="font-medium text-navy underline underline-offset-2"
                    >
                      (619) 289-3908
                    </a>
                    .
                  </span>
                </li>
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                4. User Responsibilities
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                You agree to provide accurate information when requesting
                estimates or services, and to communicate any project changes or
                concerns promptly.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                5. Intellectual Property
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                All content on this website, including text, images, logos, and
                design, is the property of HRCCoatings LLC and protected by
                applicable intellectual property laws.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                6. Limitation of Liability
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                HRCCoatings LLC shall not be liable for any indirect, incidental,
                special, or consequential damages arising from the use of our
                website or services.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                7. Disclaimer of Warranties
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Our online services are provided &ldquo;as is&rdquo; without
                warranties of any kind, either express or implied.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                8. Indemnification
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                You agree to indemnify and hold harmless HRCCoatings LLC from any
                claims, damages, or expenses arising from your use of our
                services or violation of these terms.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-xl font-bold text-navy">9. Termination</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                We reserve the right to terminate or suspend access to our
                services at our discretion, without prior notice.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                10. Carrier Liability Disclaimer
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                HRCCoatings LLC is not liable for any delays, failures, or
                errors in SMS message delivery. Wireless carriers are not
                responsible for delayed or undelivered messages. Message
                delivery is subject to your wireless carrier&apos;s network
                coverage and terms of service. We make no guarantees regarding
                the timeliness or delivery of any SMS communications, including
                appointment confirmations, project updates, or promotional
                messages.
              </p>
            </div>

            {/* 11 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                11. Age Restriction
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                You must be at least 18 years of age to use our website,
                request estimates, enter into service agreements, or opt in to
                SMS messaging. By using our services, you represent and warrant
                that you are at least 18 years old. If we learn that we have
                collected information from a person under 18, we will delete
                that information promptly.
              </p>
            </div>

            {/* 12 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                12. Governing Law
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                These terms are governed by the laws of the State of California.
                Any disputes shall be resolved in the courts of San Diego County,
                California.
              </p>
            </div>

            {/* 13 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                13. Severability
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                If any provision of these terms is found to be unenforceable, the
                remaining provisions shall continue in full force and effect.
              </p>
            </div>

            {/* 14 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                14. Contact Information
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                For questions about these Terms of Service:
              </p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  <span>
                    Phone:{" "}
                    <a
                      href="tel:+16192893908"
                      className="font-medium text-navy underline underline-offset-2"
                    >
                      (619) 289-3908
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  Location: San Diego, California
                </li>
              </ul>
            </div>
          </article>

          {/* Back link */}
          <div className="mt-12 border-t border-gray-100 pt-8">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-semibold text-navy transition hover:text-red"
            >
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
