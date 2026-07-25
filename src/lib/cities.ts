export interface City {
  slug: string;
  name: string;
  /** Real exterior photo used for the hero. */
  heroImage: string;
  /** Unique 2-3 sentence intro. Mentions the city + a local detail. */
  intro: string;
  /** Local neighborhoods / landmarks we serve. */
  neighborhoods: string[];
  /** One city-specific line used in the FAQ + meta description. */
  localFocus: string;
  /**
   * Search-demand sections mined from Search Console queries.
   * Each renders as an H2 + paragraph on the city page to cover
   * query clusters the page gets impressions for but doesn't answer.
   */
  extraSections?: { heading: string; body: string }[];
}

export const CITIES: City[] = [
  {
    slug: "chula-vista",
    name: "Chula Vista",
    heroImage: "/images/exterior/front-home.jpg",
    intro:
      "From the master-planned neighborhoods of Otay Ranch and EastLake to the established homes near Third Avenue, Chula Vista blends brand-new construction with decades-old properties. Our crews paint interiors and exteriors, repair stucco, and coat garage floors for South Bay homeowners who want results built to last in the local climate.",
    neighborhoods: ["Otay Ranch", "EastLake", "Rancho del Rey", "Bonita", "Terra Nova", "Third Avenue Village"],
    localFocus:
      "South Bay homes take a lot of sun, so we use premium exterior coatings that resist fading and hold up for years.",
    extraSections: [
      {
        heading: "Exterior and house painting in Chula Vista",
        body: "Exterior house painting is our most requested service in Chula Vista. South Bay sun fades cheap paint fast, so we pressure wash, scrape, patch, prime, and finish with premium UV-resistant coatings that keep their color for years. Whether it's a full exterior repaint, a stucco refresh, or interior house painting room by room, every job gets the same careful prep and clean lines. We also paint manufactured and mobile homes across Chula Vista, a service many painters won't take on.",
      },
      {
        heading: "Painters serving Otay Ranch and EastLake",
        body: "A big share of our Chula Vista work happens in Otay Ranch and EastLake. These newer master-planned homes look their best when builder-grade paint is upgraded to premium finishes, and HOA color requirements are matched exactly. We know the approved palettes, we handle the paperwork-friendly color matching, and we leave the job site spotless. If you're in Otay Ranch, EastLake, or Rancho del Rey, you've probably driven past our work.",
      },
      {
        heading: "HOA, commercial, and multi-unit painting in Chula Vista",
        body: "Beyond single-family homes, we handle HOA painting services, multi-unit complexes, and commercial painting across Chula Vista. That includes apartment buildings, offices, and retail spaces, with flexible scheduling so your tenants and customers aren't disrupted. As a licensed, bonded, and insured contractor (CSLB LIC #1158346), we meet the documentation requirements HOAs and property managers expect.",
      },
    ],
  },
  {
    slug: "el-cajon",
    name: "El Cajon",
    heroImage: "/images/exterior/backyard-full.jpg",
    intro:
      "El Cajon's inland valley sees some of the hottest temperatures in the county, which is hard on exterior paint. We help homeowners across Fletcher Hills, Rancho San Diego, and Granite Hills protect their homes with heat-resistant coatings, fresh interior color, and clean stucco repairs.",
    neighborhoods: ["Fletcher Hills", "Rancho San Diego", "Bostonia", "Granite Hills", "Crest"],
    localFocus:
      "Because El Cajon runs hot, we recommend premium UV-resistant exterior paint that won't blister or fade in the inland heat.",
    extraSections: [
      {
        heading: "Painting contractor in Granite Hills",
        body: "Granite Hills is one of our busiest areas in El Cajon. The larger lots and older custom homes here often need more than a quick repaint: think stucco crack repair, wood trim restoration, and full exterior prep before any color goes on. As a licensed painting contractor (CSLB LIC #1158346) working Granite Hills, Rancho San Diego, and Bostonia regularly, we give these homes the patient prep work they deserve, then protect them with heat-resistant premium coatings.",
      },
      {
        heading: "Stucco repair and painting in El Cajon",
        body: "East County heat is brutal on stucco. We repair hairline cracks, patch damaged sections, match your existing texture, and repaint with elastomeric and UV-stable coatings made for inland San Diego. If you're searching for a stucco contractor in Granite Hills or anywhere in El Cajon, we handle both the repair and the finish coat, so you get one crew and one clean result instead of coordinating two trades.",
      },
      {
        heading: "Commercial painting in El Cajon",
        body: "We also serve El Cajon businesses: offices, retail storefronts, warehouses, and multi-unit properties. Commercial jobs get the same premium materials as our residential work, with scheduling built around your business hours so you never have to close. Free walkthroughs and itemized commercial estimates are available throughout the 92019, 92020, and 92021 areas.",
      },
    ],
  },
  {
    slug: "la-mesa",
    name: "La Mesa",
    heroImage: "/images/exterior/backyard-side.jpg",
    intro:
      "Known as the Jewel of the Hills, La Mesa is full of character homes, from craftsman bungalows near the Village to mid-century houses around Mount Helix and Lake Murray. We bring those homes back to life with careful prep, crisp lines, and finishes that respect the original architecture.",
    neighborhoods: ["Mount Helix", "La Mesa Village", "Lake Murray", "Grossmont", "Fletcher Hills"],
    localFocus:
      "Many La Mesa homes are older, so we take extra care with prep, patching, and priming for a smooth, lasting finish.",
  },
  {
    slug: "carlsbad",
    name: "Carlsbad",
    heroImage: "/images/exterior/front-home.jpg",
    intro:
      "Carlsbad's coastal location means constant salt air, which wears on exterior surfaces faster than inland areas. From La Costa and Aviara to Olde Carlsbad, we use marine-grade prep and premium coatings that stand up to the ocean climate and keep your home looking sharp.",
    neighborhoods: ["La Costa", "Aviara", "Bressi Ranch", "Olde Carlsbad", "Calavera Hills"],
    localFocus:
      "Coastal salt air is tough on paint, so we focus on thorough prep and weather-resistant coatings built for the Carlsbad climate.",
  },
  {
    slug: "oceanside",
    name: "Oceanside",
    heroImage: "/images/exterior/backyard-full.jpg",
    intro:
      "Oceanside homes get the full beach-town treatment: sun, salt, and sea breeze year round. Whether you're in Fire Mountain, South Oceanside, or Rancho del Oro, we prep, prime, and coat your home to protect it from the elements and refresh its curb appeal.",
    neighborhoods: ["Fire Mountain", "South Oceanside", "Rancho del Oro", "Arrowood", "Downtown Oceanside"],
    localFocus:
      "Beachside homes need extra protection, so we seal and coat surfaces to defend against salt air and moisture.",
  },
  {
    slug: "encinitas",
    name: "Encinitas",
    heroImage: "/images/exterior/backyard-side.jpg",
    intro:
      "From the beach cottages of Leucadia and Cardiff-by-the-Sea to the modern homes of Olivenhain, Encinitas has a style all its own. We match that with clean, modern finishes and durable exterior coatings that handle the coastal North County weather.",
    neighborhoods: ["Leucadia", "Cardiff-by-the-Sea", "Olivenhain", "New Encinitas", "Village Park"],
    localFocus:
      "Coastal North County homes call for finishes that look modern and stand up to ocean air, which is exactly what we deliver.",
  },
  {
    slug: "la-jolla",
    name: "La Jolla",
    heroImage: "/images/exterior/front-home.jpg",
    intro:
      "La Jolla homes set a high bar, from the estates of Muirlands to the coastal properties of Bird Rock and La Jolla Shores. We deliver the premium, detail-obsessed finishes these homes deserve, with materials and craftsmanship to match the neighborhood.",
    neighborhoods: ["The Village", "Bird Rock", "La Jolla Shores", "Mount Soledad", "Muirlands"],
    localFocus:
      "La Jolla properties demand premium results, so we use top-tier materials and take the time to get every detail right.",
  },
  {
    slug: "santee",
    name: "Santee",
    heroImage: "/images/exterior/backyard-full.jpg",
    intro:
      "Santee is a family-friendly East County community with a mix of established and newer homes around Carlton Hills, Sky Ranch, and Rio Vista. We help local families refresh their interiors and protect their exteriors with reliable, affordable, high-quality work.",
    neighborhoods: ["Carlton Hills", "Sky Ranch", "Rio Vista", "Carlton Oaks", "Mast Park"],
    localFocus:
      "Santee runs warm inland, so we use durable exterior coatings designed to handle East County sun.",
  },
  {
    slug: "escondido",
    name: "Escondido",
    heroImage: "/images/exterior/backyard-side.jpg",
    intro:
      "Escondido's North County valley brings hot, dry summers that test exterior paint. From the historic homes of Old Escondido to the hillside properties of Hidden Meadows, we protect homes with heat-resistant coatings and bring fresh life to interiors.",
    neighborhoods: ["Old Escondido", "Hidden Meadows", "Kit Carson Park", "San Pasqual", "Felicita"],
    localFocus:
      "Inland Escondido gets hot and dry, so UV-resistant exterior paint and careful prep make all the difference here.",
    extraSections: [
      {
        heading: "Painting contractor in Hidden Meadows",
        body: "Hidden Meadows homes sit up in the hills north of Escondido, where sun exposure and temperature swings wear exterior paint faster than in coastal neighborhoods. We work Hidden Meadows regularly as a licensed painting contractor (CSLB LIC #1158346), bringing the right prep, primers, and UV-resistant topcoats for hillside properties. From full exterior repaints to interior refreshes and stucco repair, you get a family crew that shows up on time and treats your property with respect.",
      },
    ],
  },
  {
    slug: "poway",
    name: "Poway",
    heroImage: "/images/exterior/front-home.jpg",
    intro:
      "Known as the City in the Country, Poway is full of larger lots and custom homes in areas like Green Valley, Rancho Arbolitos, and Old Poway. We give these homes the careful, high-quality painting and coating work they deserve, inside and out.",
    neighborhoods: ["Green Valley", "Rancho Arbolitos", "Old Poway", "Bridlewood", "Garden Road"],
    localFocus:
      "Poway's custom and larger homes benefit from our detailed prep and premium finishes that last for years.",
  },
  {
    slug: "national-city",
    name: "National City",
    heroImage: "/images/exterior/backyard-full.jpg",
    intro:
      "National City is one of the South Bay's oldest communities, with classic homes around Old Town and Lincoln Acres. We help local homeowners restore and protect these homes with quality prep, fresh paint, and dependable, honest service.",
    neighborhoods: ["Old Town", "Lincoln Acres", "Granger Hall", "Kimball Park", "El Toyon"],
    localFocus:
      "Many National City homes have great bones, so we focus on prep and repair to make older surfaces look new again.",
  },
  {
    slug: "coronado",
    name: "Coronado",
    heroImage: "/images/exterior/backyard-side.jpg",
    intro:
      "Coronado's island setting means salt air and a mix of historic Village homes and waterfront properties in the Cays and Shores. We protect these homes with marine-ready prep and premium coatings, delivered with the care this community expects.",
    neighborhoods: ["The Village", "Coronado Cays", "Coronado Shores", "Orange Avenue", "Country Club"],
    localFocus:
      "Island salt air is demanding, so we use marine-grade prep and weather-resistant coatings built for Coronado.",
  },
];

export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}
