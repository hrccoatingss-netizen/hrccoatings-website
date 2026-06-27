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
