import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-[#0B2C75] mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Sorry, the page you&apos;re looking for doesn&apos;t exist. Let us help
        you find what you need.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="bg-[#DB143C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b91133] transition-colors"
        >
          Go Home
        </Link>
        <Link
          href="/#contact"
          className="border-2 border-[#0B2C75] text-[#0B2C75] px-6 py-3 rounded-lg font-semibold hover:bg-[#0B2C75] hover:text-white transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
