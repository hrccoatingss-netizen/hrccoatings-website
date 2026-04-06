import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "HRCCoatings LLC privacy policy. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Privacy Policy
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
              <h2 className="text-xl font-bold text-navy">1. Introduction</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                HRCCoatings LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;our&rdquo;) is committed to protecting your privacy. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website, use our
                services, or communicate with us.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                2. Information We Collect
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                We may collect:
              </p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  <span>
                    <strong className="text-navy">
                      Personal Information:
                    </strong>{" "}
                    Name, email address, phone number, mailing address
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  <span>
                    <strong className="text-navy">
                      Project Information:
                    </strong>{" "}
                    Details about your painting or coating project needs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  <span>
                    <strong className="text-navy">Communications:</strong>{" "}
                    Records of your interactions with us, including form
                    submissions and SMS messages
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  <span>
                    <strong className="text-navy">Consent Records:</strong> Your
                    opt-in preferences for SMS and marketing communications
                  </span>
                </li>
              </ul>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                3. How We Use Your Information
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                We use your information to:
              </p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  Provide estimates and complete painting/coating projects
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  Communicate with you about your project
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  Send transactional SMS messages (appointment confirmations,
                  project updates)
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  Send marketing communications (with your consent)
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  Improve our services and website
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  Comply with legal obligations
                </li>
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                4. Cookies &amp; Tracking Technologies
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                We use cookies and similar tracking technologies to improve your
                experience on our website and analyze site traffic.
              </p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  <span>
                    <strong className="text-navy">
                      Essential Cookies:
                    </strong>{" "}
                    Required for the website to function properly, such as
                    session management and security features
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  <span>
                    <strong className="text-navy">
                      Analytics Cookies:
                    </strong>{" "}
                    We use Google Analytics to understand how visitors interact
                    with our website, including pages visited, time spent, and
                    referral sources. This data is collected anonymously and
                    helps us improve our services
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  <span>
                    <strong className="text-navy">
                      Third-Party Tools:
                    </strong>{" "}
                    Our website may use third-party services such as Google
                    reCAPTCHA for fraud prevention, which may collect usage data
                    subject to{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-navy underline underline-offset-2"
                    >
                      Google&apos;s Privacy Policy
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  <span>
                    <strong className="text-navy">
                      Managing Cookies:
                    </strong>{" "}
                    You can control or disable cookies through your browser
                    settings. Disabling certain cookies may limit your ability
                    to use some features of our website
                  </span>
                </li>
              </ul>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                5. SMS Messaging Disclosure
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                By opting in to SMS messaging:
              </p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  You consent to receive transactional and/or marketing text
                  messages from HRCCoatings LLC
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  Message frequency varies based on your project status and
                  preferences
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  Message and data rates may apply
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  You can opt out at any time by replying STOP to any message
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  For help, reply HELP or contact us at{" "}
                  <a
                    href="tel:+16192893908"
                    className="font-medium text-navy underline underline-offset-2"
                  >
                    (619) 289-3908
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  We use SMS for business communications including appointment
                  scheduling, project updates, and promotional offers
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  Your phone number will not be shared with third parties for
                  marketing purposes
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  No mobile information will be shared with third
                  parties/affiliates for marketing/promotional purposes.
                  Information sharing to subcontractors in support services,
                  such as customer service is permitted. All other use case
                  categories exclude text messaging originator opt-in data and
                  consent; this information will not be shared with any third
                  parties.
                </li>
              </ul>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                6. Data Security
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                We implement appropriate security measures to protect your
                personal information. However, no method of electronic
                transmission or storage is 100% secure.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                7. Data Retention
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                We retain your information for as long as necessary to fulfill
                the purposes outlined in this policy, or as required by law.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                8. Sharing Your Information
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                We may share your information with:
              </p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  Service providers who assist in our operations
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  Legal authorities when required by law
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  In connection with a business transfer or merger
                </li>
              </ul>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-xl font-bold text-navy">9. Your Rights</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                You have the right to:
              </p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  Access your personal information
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  Correct inaccurate information
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  Request deletion of your information
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  Opt out of SMS messaging at any time
                </li>
              </ul>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                10. Children&apos;s Privacy
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Our services are not intended for individuals under 18 years of
                age.
              </p>
            </div>

            {/* 11 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                11. Changes to This Policy
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. Changes will
                be posted on this page with an updated date.
              </p>
            </div>

            {/* 12 */}
            <div>
              <h2 className="text-xl font-bold text-navy">12. Contact Us</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                If you have questions about this Privacy Policy, contact us:
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
