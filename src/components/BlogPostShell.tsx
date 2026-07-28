import Image from "next/image";
import Link from "next/link";

interface RelatedPost {
  title: string;
  href: string;
  date: string;
  category?: string;
}

interface BlogPostShellProps {
  title: string;
  category: string;
  date: string;
  dateISO: string;
  readTime: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string;
  relatedPosts: RelatedPost[];
  children: React.ReactNode;
}

/**
 * Modern editorial wrapper for all blog posts.
 * Each post imports this and renders article body as children.
 */
export default function BlogPostShell({
  title,
  category,
  date,
  dateISO,
  readTime,
  heroImage,
  heroImageAlt,
  intro,
  relatedPosts,
  children,
}: BlogPostShellProps) {
  return (
    <>
      {/* ───── HERO ───── */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-end bg-ink">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={heroImageAlt}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/65 to-ink/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1100px] w-full px-5 lg:px-10 pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="mb-6 flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] font-bold text-white/60">
            <Link href="/" className="transition-colors hover:text-orange">Home</Link>
            <span>·</span>
            <Link href="/#blog" className="transition-colors hover:text-orange">Blog</Link>
            <span>·</span>
            <span className="text-orange">{category}</span>
          </div>

          <h1 className="text-white font-black tracking-[-0.04em] leading-[0.95] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl uppercase max-w-4xl">
            {title}
          </h1>

          <div className="mt-8 flex items-center gap-4 text-[12px] uppercase tracking-[0.18em] font-bold text-white/70">
            <time dateTime={dateISO}>{date}</time>
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span>{readTime}</span>
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span className="text-orange">{category}</span>
          </div>
        </div>
      </section>

      {/* ───── ARTICLE BODY ───── */}
      <article className="bg-cream py-20 lg:py-28 px-5 lg:px-10">
        <div className="mx-auto max-w-[760px]">
          {/* Lead paragraph */}
          <p className="text-xl sm:text-2xl leading-relaxed text-ink/80 font-medium mb-12 pb-8 border-b border-ink/10">
            {intro}
          </p>

          {/* Article content (children) */}
          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-stone [&_h2]:font-black [&_h2]:tracking-[-0.02em] [&_h2]:text-3xl [&_h2]:sm:text-4xl [&_h2]:text-ink [&_h2]:uppercase [&_h2]:mt-12 [&_h2]:mb-5 [&_h3]:font-black [&_h3]:tracking-tight [&_h3]:text-xl [&_h3]:text-ink [&_h3]:uppercase [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-stone [&_strong]:text-ink [&_strong]:font-semibold [&_ul]:space-y-3 [&_ol]:space-y-3 [&_a]:text-navy [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-navy/30 [&_a:hover]:decoration-navy">
            {children}
          </div>

          {/* CTA box */}
          <div className="mt-16 rounded-3xl bg-ink p-8 sm:p-12 text-white relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-orange/20 blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="inline-flex items-center gap-2.5 mb-4">
                <span className="h-px w-8 bg-orange" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-orange">
                  Free estimate
                </span>
              </div>
              <h3 className="font-black tracking-[-0.04em] leading-[0.95] text-3xl sm:text-4xl uppercase max-w-md">
                Ready to start<br />
                <span className="text-orange">your project?</span>
              </h3>
              <p className="mt-5 max-w-lg text-white/70 leading-relaxed">
                HRCCoatings Inc has been serving San Diego County for 20+ years. Free estimates, premium materials, and a team that treats your home like their own.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange text-white px-7 py-4 text-[12px] font-extrabold uppercase tracking-wider transition-all hover:bg-red"
                >
                  Get Free Estimate
                  <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="tel:+16192893908"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-[14px] font-medium text-white transition-all hover:bg-white/5"
                >
                  (619) 289-3908
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* ───── RELATED POSTS ───── */}
      <section className="bg-cream-dark py-20 lg:py-28 px-5 lg:px-10">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-2.5 mb-6">
              <span className="h-px w-8 bg-navy/30" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-navy/70">
                Keep reading
              </span>
            </div>
            <h2 className="font-black tracking-[-0.04em] leading-[0.95] text-4xl sm:text-5xl text-ink uppercase">
              Related<br />
              <span className="text-navy">articles.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {relatedPosts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group rounded-3xl bg-white p-7 lg:p-8 border border-ink/5 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-navy/20"
              >
                {post.category && (
                  <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-orange mb-3">
                    {post.category}
                  </p>
                )}
                <h3 className="font-black tracking-tight text-xl lg:text-2xl text-ink uppercase mb-3 group-hover:text-navy transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between mt-5">
                  <time className="text-[12px] uppercase tracking-[0.18em] font-bold text-stone">
                    {post.date}
                  </time>
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-extrabold uppercase tracking-wider text-navy">
                    Read
                    <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
