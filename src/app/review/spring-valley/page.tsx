import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spring Valley Edit Review | HRCCoatings",
  description: "Internal review of the Spring Valley job edit.",
  robots: { index: false, follow: false },
};

const B = "/social/spring-valley/";

type Dest = "TikTok" | "Facebook" | "Google";

interface Clip {
  file: string;
  title: string;
  source: string;
  range: string;
  secs: string;
  cut: string;
  dests: Dest[];
  caption: string;
}

const montages: Clip[] = [
  {
    file: "MONTAGE-epoxy-transformation.mp4",
    title: "Montage: epoxy start to finish",
    source: "6 clips: C2396, C2403, C2399, C2404, C2457, C2409",
    range: "6 cuts stitched",
    secs: "28s",
    cut: "Built from the best 4 to 5 seconds of six different clips, with a text hook on every scene. This is the one clip that tells the whole story.",
    dests: ["TikTok", "Facebook", "Google"],
    caption:
      "Base coat, flake by hand, clear topcoat. A garage floor in Spring Valley, start to finish.",
  },
  {
    file: "MONTAGE-whole-house.mp4",
    title: "Montage: one crew, whole house",
    source: "5 clips: C2411, C2432, C2403, C2415, C2413",
    range: "5 cuts stitched",
    secs: "25s",
    cut: "Exterior, interior, garage floor, then the van. Shows that one crew did all three, which no competitor around you is showing.",
    dests: ["TikTok", "Facebook", "Google"],
    caption:
      "Interior, exterior, and a flake epoxy garage floor. One crew, one schedule, one point of contact.",
  },
];

const epoxy: Clip[] = [
  {
    file: "epoxy-hero-glide.mp4",
    title: "Hero glide across the finished floor",
    source: "C2457 (50s)",
    range: "0.5s to 10.5s",
    secs: "10s",
    cut: "Kept the opening glide where the wall and shelving are in frame. Dropped everything after 10s, it turns into floor texture with no reference point.",
    dests: ["TikTok", "Facebook", "Google"],
    caption: "The finished floor. Flake epoxy, sealed with a clear topcoat.",
  },
  {
    file: "epoxy-squeegee-spread.mp4",
    title: "Squeegee pulling base coat",
    source: "C2403 (26s)",
    range: "1s to 12s",
    secs: "11s",
    cut: "Cleanest wide shot in the folder: full body, red door behind, steady camera. Dropped the first second of camera settle.",
    dests: ["TikTok", "Facebook", "Google"],
    caption: "Base coat goes down with a squeegee, then gets back rolled so the thickness is even.",
  },
  {
    file: "epoxy-flake-broadcast.mp4",
    title: "Flake thrown by hand",
    source: "C2399 (40s)",
    range: "1s to 7.5s",
    secs: "6.5s",
    cut: "Only the throw itself. Seconds 8 to 10 are a blurred pan at the floor, so they are gone.",
    dests: ["TikTok", "Facebook"],
    caption: "This is the part everyone stops to watch. Color flake broadcast by hand across the wet base.",
  },
  {
    file: "epoxy-base-coat-pour.mp4",
    title: "Pouring the base coat",
    source: "C2396 (134s)",
    range: "16s to 24s",
    secs: "8s",
    cut: "Pulled from deep inside a 2 minute clip. The first 15s is setup and walking, the end is the camera facing the floor.",
    dests: ["TikTok", "Facebook"],
    caption: "Epoxy has a working time, so the base coat goes down and gets moved fast.",
  },
  {
    file: "epoxy-back-rolling.mp4",
    title: "Back rolling with the pole",
    source: "C2404 (27s)",
    range: "5s to 13s",
    secs: "8s",
    cut: "Kept the pass where he walks toward camera. The first 4s has a second worker cutting through frame.",
    dests: ["Facebook", "Google"],
    caption: "Back rolling so every square foot gets the same thickness. No thin spots.",
  },
  {
    file: "epoxy-two-man-spread.mp4",
    title: "Two man crew working the floor",
    source: "C2400 (29s)",
    range: "2s to 10s",
    secs: "8s",
    cut: "Both workers in frame and moving. After 10s the camera drifts down to the floor.",
    dests: ["Facebook", "Google"],
    caption: "Two man crew keeping a wet edge across the whole slab.",
  },
  {
    file: "epoxy-finished-pan.mp4",
    title: "Finished floor, slow pan",
    source: "C2409 (21s)",
    range: "5s to 13s",
    secs: "8s",
    cut: "The steady part of the pan with the red door for scale. Trimmed the shaky start and the tail.",
    dests: ["Facebook", "Google"],
    caption: "Same garage, new floor. It cleans with a hose and it will not peel like a store kit.",
  },
  {
    file: "epoxy-garage-daylight.mp4",
    title: "Finished floor in daylight",
    source: "C2416 (23s)",
    range: "3s to 12s",
    secs: "9s",
    cut: "Garage door open, natural light on the flake. Cut the last 10s where the camera swings to bare concrete outside.",
    dests: ["Facebook", "Google"],
    caption: "Daylight on a finished flake floor. This is what your garage looks like when it is done.",
  },
  {
    file: "epoxy-floor-detail.mp4",
    title: "Floor detail pass",
    source: "C2415 (17s)",
    range: "2s to 11s",
    secs: "9s",
    cut: "Tight on the flake texture and the wall base. Trimmed the tilted opening frames.",
    dests: ["TikTok", "Facebook"],
    caption: "Close up on the flake. Chips, sealed under a clear coat, not paint.",
  },
];

const exterior: Clip[] = [
  {
    file: "exterior-garage-doors.mp4",
    title: "Finished front, garage doors",
    source: "C2411 (15s)",
    range: "0s to 12s",
    secs: "12s",
    cut: "Best exterior in the folder, steady the whole way. Dropped the last 3s where the camera drops to the walkway and the shadow of the shooter shows.",
    dests: ["TikTok", "Facebook", "Google"],
    caption: "Exterior repaint in Spring Valley. Cream stucco, black garage doors, fresh trim.",
  },
  {
    file: "exterior-entry-door.mp4",
    title: "Entry door and stairs",
    source: "C2410 (33s)",
    range: "0s to 6s",
    secs: "6s",
    cut: "Seconds 7 to 9 are the camera pointed at dirt and the shooter's shadow, so the clip ends at 6s.",
    dests: ["Facebook", "Google"],
    caption: "Fresh stucco color, black entry door, clean lines on every edge.",
  },
  {
    file: "exterior-deck.mp4",
    title: "Repainted deck and view",
    source: "C2412 (102s)",
    range: "2s to 12s",
    secs: "10s",
    cut: "Pulled the one stretch where the deck and the hillside are both in frame. Most of this 102s clip is the camera facing deck boards.",
    dests: ["Facebook", "Google"],
    caption: "The back deck refinished in a gray that hides wear and takes full afternoon sun.",
  },
  {
    file: "hrc-van-on-site.mp4",
    title: "Van parked at the job",
    source: "C2413 (47s)",
    range: "1s to 12s",
    secs: "11s",
    cut: "Steady side view with the phone number readable. Cut the rest, the camera starts moving and the van leaves frame.",
    dests: ["TikTok", "Facebook", "Google"],
    caption: "If you see this van in your neighborhood, somebody nearby is getting their home painted.",
  },
];

const interior: Clip[] = [
  {
    file: "interior-rolling-walls.mp4",
    title: "Rolling walls",
    source: "C2435 (42s)",
    range: "5s to 13s",
    secs: "8s",
    cut: "The stretch where he is actually rolling and the HRCC shirt is readable.",
    dests: ["Facebook", "Google"],
    caption: "Walls and ceilings rolled after everything got masked and covered.",
  },
  {
    file: "interior-stairwell.mp4",
    title: "Stairwell and ceiling work",
    source: "C2432 (51s)",
    range: "2s to 12s",
    secs: "10s",
    cut: "Ladder work over the stairwell, steady. The last half of the source clip drifts and goes dark.",
    dests: ["Facebook", "Google"],
    caption: "Ceilings and stairwells are where sloppy work shows. Ours get the same prep as the walls.",
  },
  {
    file: "interior-prep-masking.mp4",
    title: "Prep and masking",
    source: "C2434 (54s)",
    range: "14s to 22s",
    secs: "8s",
    cut: "Seconds 4 to 13 of the source are the camera tilted down at plastic on the floor, so I went deeper into the clip to find real work.",
    dests: ["Facebook", "Google"],
    caption: "Plastic down, edges cut in by hand, before a single wall gets rolled.",
  },
];

const rejected = [
  ["C2451", "4 seconds, blurred whip pan. Nothing usable."],
  ["C2450, C2452", "Mostly the videographer setting up shots and talking. Also the only clips with music playing on site."],
  ["C2394, C2395", "Close ups of hands and buckets shot from above. Reads as feet and floor, not as work."],
  ["C2397, C2398, C2401, C2402, C2405, C2406, C2407, C2408, C2414, C2433", "Same actions already covered by a cleaner take. Kept the best version of each move instead of posting five versions of the same thing."],
];

function Badge({ d }: { d: Dest }) {
  const color =
    d === "TikTok" ? "bg-black text-white" : d === "Facebook" ? "bg-[#1877F2] text-white" : "bg-[#34A853] text-white";
  return <span className={`rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider ${color}`}>{d}</span>;
}

function ClipCard({ c }: { c: Clip }) {
  return (
    <div className="rounded-2xl border border-ink/10 bg-white overflow-hidden">
      <video
        src={B + c.file}
        controls
        muted
        playsInline
        preload="none"
        poster=""
        className="w-full bg-ink aspect-[9/16] object-cover"
      />
      <div className="p-4">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {c.dests.map((d) => (
            <Badge key={d} d={d} />
          ))}
        </div>
        <h3 className="font-extrabold text-ink text-[15px] leading-snug">{c.title}</h3>
        <p className="mt-1 text-[12px] text-stone font-mono">
          {c.source} · kept {c.range} · {c.secs}
        </p>
        <p className="mt-3 text-[13px] text-ink-soft leading-relaxed">
          <strong className="text-ink">Why this cut: </strong>
          {c.cut}
        </p>
        <p className="mt-3 rounded-lg bg-cream p-3 text-[12px] text-stone leading-relaxed italic">{c.caption}</p>
      </div>
    </div>
  );
}

function Section({ title, note, clips }: { title: string; note: string; clips: Clip[] }) {
  return (
    <section className="mt-14">
      <h2 className="text-2xl font-black uppercase tracking-tight text-ink">{title}</h2>
      <p className="mt-1 text-[13px] text-stone">{note}</p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {clips.map((c) => (
          <ClipCard key={c.file} c={c} />
        ))}
      </div>
    </section>
  );
}

export default function SpringValleyReviewPage() {
  return (
    <main className="bg-cream min-h-screen px-5 lg:px-10 py-16">
      <div className="mx-auto max-w-[1300px]">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-navy/70">Internal review, not indexed</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-black uppercase tracking-tight text-ink">
          Spring Valley edit
        </h1>
        <p className="mt-4 max-w-2xl text-base text-stone leading-relaxed">
          31 source clips from the b roll folder, watched second by second. 16 cuts and 2 montages came out of it.
          Everything below is muted on purpose: the raw audio has crew chatter, first names, the videographer calling
          out shots, and music playing on site.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-4">
          {[
            ["31", "source clips reviewed"],
            ["18", "clips ready to post"],
            ["26", "photos pulled (already live on the site)"],
            ["13", "source clips rejected"],
          ].map(([n, l]) => (
            <div key={l} className="rounded-2xl bg-white border border-ink/10 p-5">
              <p className="text-3xl font-black text-navy">{n}</p>
              <p className="mt-1 text-[12px] uppercase tracking-wide text-stone font-bold">{l}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border-2 border-navy/20 bg-white p-6">
          <h2 className="text-lg font-black uppercase text-ink">Where each one goes</h2>
          <ul className="mt-3 space-y-2 text-[14px] text-ink-soft leading-relaxed">
            <li>
              <Badge d="Google" /> <strong>Google Business Profile:</strong> scheduled the same way as the last job, one
              post a day. Videos must be 30 seconds or less, which all of these are.
            </li>
            <li>
              <Badge d="Facebook" /> <strong>Facebook:</strong> scheduled through GoHighLevel as reels, spaced out over
              two weeks.
            </li>
            <li>
              <Badge d="TikTok" /> <strong>TikTok:</strong> posted by hand in the TikTok app so a trending sound can be
              added. No scheduler can attach trending audio, and business accounts are limited to the Commercial Music
              Library, which is why the auto-posted ones stay silent.
            </li>
          </ul>
        </div>

        <Section
          title="Montages"
          note="Cut from multiple clips with on-screen hooks. These are the two to lead with."
          clips={montages}
        />
        <Section title="Epoxy garage floor" note="Nine cuts covering the full build and the finished floor." clips={epoxy} />
        <Section title="Exterior" note="Four cuts from the finished exterior and the van." clips={exterior} />
        <Section title="Interior" note="Three cuts of the crew working inside." clips={interior} />

        <section className="mt-16">
          <h2 className="text-2xl font-black uppercase tracking-tight text-ink">What I threw out</h2>
          <div className="mt-6 space-y-3">
            {rejected.map(([clip, why]) => (
              <div key={clip} className="rounded-xl bg-white border border-ink/10 p-4">
                <p className="font-mono text-[12px] font-bold text-navy">{clip}</p>
                <p className="mt-1 text-[14px] text-ink-soft">{why}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl bg-ink text-white p-8">
          <h2 className="text-2xl font-black uppercase tracking-tight">For the next shoot</h2>
          <ul className="mt-4 space-y-2 text-[15px] text-white/80 leading-relaxed">
            <li>Film the before from the exact spot you will film the after. There is no before footage of this house, so there are no before and after clips from this job.</li>
            <li>Hold each shot still for 10 seconds. Most clips here move the whole time, which is why the usable piece of a 50 second clip is often 8 seconds.</li>
            <li>Keep the camera at chest height on the work, not pointed down at the floor.</li>
            <li>Get the homeowner on camera for 20 seconds if they are willing. A testimonial beats every clip on this page.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
