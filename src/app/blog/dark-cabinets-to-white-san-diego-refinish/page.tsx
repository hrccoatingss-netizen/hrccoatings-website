import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArticleSchema from "@/components/ArticleSchema";
import BlogPostShell from "@/components/BlogPostShell";
import ProjectVideo from "@/components/ProjectVideo";

const TITLE = "Dark Espresso Cabinets to White: A San Diego Cabinet Refinish, Start to Finish";
const DESCRIPTION =
  "A real San Diego cabinet refinish from our crew: kitchen, bathroom vanity, laundry room and a bedroom built-in taken from dark espresso to white and blue gray, with photos and video of every step.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog/dark-cabinets-to-white-san-diego-refinish" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/images/projects/kitchen-white-cabinets.jpg" }],
  },
};

const relatedPosts = [
  {
    title: "How Much Does It Cost to Paint a House in San Diego?",
    href: "/blog/san-diego-painting-cost-guide",
    date: "Jul 22, 2026",
    category: "Pricing",
  },
  {
    title: "How to Choose the Perfect Paint Color for Your Home",
    href: "/blog/paint-color-guide",
    date: "Dec 10, 2024",
    category: "Color Theory",
  },
];

function Pair({ label, before, after }: { label: string; before: string; after: string }) {
  return (
    <figure className="not-prose my-8">
      <div className="grid grid-cols-2 gap-3">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink/5">
          <Image src={before} alt={`${label} before refinishing`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 400px" />
          <span className="absolute bottom-3 left-3 rounded-full bg-ink/85 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">
            Before
          </span>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink/5">
          <Image src={after} alt={`${label} after refinishing`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 400px" />
          <span className="absolute bottom-3 left-3 rounded-full bg-orange px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">
            After
          </span>
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-stone">{label}</figcaption>
    </figure>
  );
}

function Photo({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="not-prose my-8">
      <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-2xl bg-ink/5">
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 448px" />
      </div>
      <figcaption className="mt-3 text-center text-sm text-stone">{caption}</figcaption>
    </figure>
  );
}

function Clip({ src, poster, title }: { src: string; poster: string; title: string }) {
  return (
    <div className="not-prose my-10 flex justify-center">
      <div className="relative aspect-[9/16] w-full max-w-[320px] overflow-hidden rounded-3xl bg-ink">
        <ProjectVideo src={src} poster={poster} title={title} />
      </div>
    </div>
  );
}

export default function DarkCabinetsToWhitePage() {
  return (
    <>
      <ArticleSchema
        slug="dark-cabinets-to-white-san-diego-refinish"
        title={TITLE}
        description={DESCRIPTION}
        image="/images/projects/kitchen-white-cabinets.jpg"
        datePublished="2026-09-21"
        category="Project Spotlight"
      />

      <BlogPostShell
        title="Dark Espresso Cabinets to White: A San Diego Refinish, Start to Finish"
        category="Project Spotlight"
        date="Sep 21, 2026"
        dateISO="2026-09-21"
        readTime="4 min read"
        heroImage="/images/projects/kitchen-white-cabinets.jpg"
        heroImageAlt="Kitchen upper cabinets refinished from dark espresso to white by HRCCoatings"
        intro="No stock photos in this one. This is a real cabinet refinish our crew just finished in a San Diego home: a full kitchen, a bathroom vanity, a laundry room and a bedroom built-in, all taken from dark espresso to a bright new finish without replacing a single cabinet box."
        relatedPosts={relatedPosts}
      >
        <h2>Where this home started</h2>
        <p>
          Every cabinet in the house was the same dark espresso stain: the kitchen
          uppers and lowers, the bathroom vanity, the laundry room and a large
          bedroom built-in. The cabinet boxes themselves were solid. They just
          made every room feel darker and older than it needed to.
        </p>
        <p>
          When the boxes are in good shape, replacing them is usually the most
          expensive way to get a new look. Refinishing keeps the layout, skips the
          demolition, and means you are not living without a kitchen for weeks. If
          you want a sense of the numbers, our{" "}
          <Link href="/blog/san-diego-painting-cost-guide">San Diego cost guide</Link>{" "}
          breaks down typical cabinet refinishing prices.
        </p>

        <Clip
          src="/videos/cabinet-before-after-reveal.mp4"
          poster="/videos/cabinet-before-after-reveal-poster.jpg"
          title="Before and after reveal of this cabinet refinish"
        />

        <h2>Step 1: Seal off the house</h2>
        <p>
          Before any sanding or spraying, we put up zip walls and plastic and
          covered the floors. Cabinet refinishing creates dust and overspray, and
          none of it should end up in the rest of your home. This is the step that
          separates a clean job from a mess you are still wiping up a month later.
        </p>
        <Photo
          src="/images/projects/prep-zipwall-containment.jpg"
          alt="Zip wall and plastic containment set up before cabinet work"
          caption="Zip walls and plastic go up first."
        />

        <h2>Step 2: Doors come off and go in a spray tent</h2>
        <p>
          Every door was removed and taken to a sealed spray tent we set up for the
          job. Each one was sanded, primed and sprayed hanging on a rack, so every
          edge and face gets even coverage. Spraying is how you get a smooth,
          factory style finish with no brush marks or roller texture.
        </p>
        <Clip
          src="/videos/cabinet-process-spraying-dark-door-to-white.mp4"
          poster="/videos/cabinet-process-spraying-dark-door-to-white-poster.jpg"
          title="A dark cabinet door being sprayed white on the rack"
        />

        <h2>Step 3: Prime and spray the boxes in place</h2>
        <p>
          The cabinet boxes stay where they are. Everything around them, from
          counters to appliances to walls, gets masked off, then the boxes are
          primed and sprayed right in place. Primer is what lets the new finish
          grip a slick stained surface instead of peeling later.
        </p>
        <Photo
          src="/images/projects/prep-masked-primed-uppers.jpg"
          alt="Kitchen upper cabinets masked and primed white before finish coats"
          caption="Uppers masked and primed, ready for finish coats."
        />

        <h2>Step 4: Dry, then rehang</h2>
        <p>
          Freshly sprayed doors dry on the rack before they go back up. Rushing this
          step is how finishes get dented and fingerprinted. Once they were ready,
          every door and drawer front was rehung and adjusted.
        </p>
        <Photo
          src="/images/projects/cabinet-doors-drying-rack.jpg"
          alt="Cabinet doors drying on a rack after spraying"
          caption="Every door from the kitchen, sprayed and drying."
        />

        <h2>The result, room by room</h2>
        <p>
          The kitchen went bright white. The bathroom vanity and laundry room went a
          soft blue gray, and the bedroom built-in got a light finish to match the
          rest of the home. Same cabinets, completely different rooms.
        </p>
        <Pair label="Kitchen lower cabinets" before="/images/projects/kitchen-cabinets-before.jpg" after="/images/projects/kitchen-cabinets-after.jpg" />
        <Pair label="Bathroom vanity" before="/images/projects/bathroom-vanity-before.jpg" after="/images/projects/bathroom-vanity-after.jpg" />
        <Pair label="Laundry room cabinets" before="/images/projects/laundry-cabinets-before.jpg" after="/images/projects/laundry-cabinets-after.jpg" />
        <Pair label="Bedroom built-in" before="/images/projects/bedroom-cabinet-before.jpg" after="/images/projects/bedroom-cabinet-after.jpg" />

        <h2>Thinking about your cabinets?</h2>
        <p>
          If your cabinet boxes are solid and you just hate the color, refinishing is
          almost always the smarter move. We are a father and son team, licensed,
          bonded and insured (CSLB #1158346), and we give free, itemized estimates
          across San Diego County. Learn more about our{" "}
          <Link href="/services/cabinet-refinishing">cabinet refinishing</Link> or{" "}
          <Link href="/#contact">request your free estimate</Link>.
        </p>
      </BlogPostShell>
    </>
  );
}
