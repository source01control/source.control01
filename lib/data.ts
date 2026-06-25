import type {
  CMSArtist,
  CMSEvent,
  CMSJournalPost,
  CMSLabel,
} from "./cms/types";

export type Artist = CMSArtist;
export type Event = CMSEvent;
export type JournalPost = CMSJournalPost;

export type Mix = {
  id: string;
  catalog: string;
  title: string;
  artist: string;
  duration: string;
  date: string;
};

export type MerchItem = {
  id: string;
  name: string;
  category: string;
  price: string;
  edition?: string;
  image: string;
};

export const label: CMSLabel = {
  name: "SOURCE CONTROL",
  tagline: "TRANSMISSIONS FROM THE UNDERGROUND",
  genres: "DUBSTEP · GARAGE · TECHNO · BASS",
  location: "LONDON // MANCHESTER // BERLIN",
  email: "bookings@sourcecontrol.audio",
  established: "2024",
};

export const artists: Artist[] = [
  {
    id: "unkey",
    name: "UNKEY",
    slug: "unkey",
    role: "HARDWARE RHYTHMIST",
    bio: "Unkey is another producer who effortlessly explores the darker side of bass-driven dance music, seemingly drawing inspiration from stripped-back Grime instrumentals and two-step rhythms.\n\nThe Midlands based talent has released on such labels as Artikal Music, Dungeon Beats, Uprise Audio, and more. His sound is a high-octane amalgamation of the many strains of UK bass-centric music, often with a melodic and rhythmic flair that typifies his tracks. Unkey is also founder of the Source Control label and an accomplished DJ/producer bagging up airtime on staple stations such as BBC Radio 1, 6 Music, 1 Xtra, Rinse fm and SWU.fm. There's no doubt we will be hearing much more from him in the years to come.",
    origin: "SOUTH LONDON",
    catalog: "SC_001",
    image: { url: "/images/artists/unkey summer.jpg", alt: "Unkey" },
  },
  {
    id: "mono-code",
    name: "MONO CODE",
    slug: "mono-code",
    role: "BINARY COMPOSER",
    bio: "Starting his production career under the alias Deft Design, McEndoo rebranded as Mono Code to pursue a more focused underground sound. His work is deeply tied to the foundational dubstep scene, favoring a high-tech, futuristic, and sub-heavy aesthetic. His discography spans various cutting-edge electronic subgenres while keeping the raw \"sub low\" and rugged rhythm sections of UK club culture at the core.",
    origin: "MANCHESTER",
    catalog: "SC_002",
    image: { url: "/images/artists/mono code dj.jpg", alt: "Mono Code" },
  },
  {
    id: "0079",
    name: "0079",
    slug: "0079",
    role: "SYSTEM ARCHITECT",
    bio: "0079's production is known for intricate sound design, deep, trudging sub-bass weight, and atmospheric tension. His sound eschews bloated commercial formulas in favor of sparse, mechanical and heavy 140BPM dubstep/techno influenced rhythms tailored for proper sound systems.",
    origin: "EAST LONDON",
    catalog: "SC_003",
    image: { url: "/images/artists/0079_SEPT_2023.jpeg.webp", alt: "0079" },
  },
];

export const mixes: Mix[] = [
  {
    id: "mix-1",
    catalog: "SC MIX 001",
    title: "Warehouse Transmission",
    artist: "UNKEY",
    duration: "52:18",
    date: "2026",
  },
  {
    id: "mix-2",
    catalog: "SC MIX 002",
    title: "Null Frequency",
    artist: "MONO CODE",
    duration: "48:06",
    date: "2026",
  },
  {
    id: "mix-3",
    catalog: "SC MIX 003",
    title: "Sector Broadcast",
    artist: "0079",
    duration: "61:42",
    date: "2025",
  },
];

export const merchandise: MerchItem[] = [
  {
    id: "merch-1",
    name: "Logo Tee",
    category: "Apparel",
    price: "£45",
    edition: "Limited 100",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "merch-2",
    name: "Archive Hoodie",
    category: "Apparel",
    price: "£85",
    edition: "Limited 50",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "merch-3",
    name: "SC 001 Vinyl",
    category: "Physical",
    price: "£22",
    image:
      "https://images.unsplash.com/photo-1603048588665-79163a3091f8?w=900&q=80&auto=format&fit=crop",
  },
];

export const events: Event[] = [
  {
    id: "evt-1",
    slug: "printworks",
    day: "14",
    month: "JUN",
    year: "2026",
    title: "SOURCE CONTROL X PRINTWORKS",
    venue: "PRINTWORKS",
    city: "LONDON",
    status: "TICKETS",
  },
  {
    id: "evt-2",
    slug: "white-hotel",
    day: "28",
    month: "JUN",
    year: "2026",
    title: "SOURCE CONTROL X WHITE HOTEL",
    venue: "THE WHITE HOTEL",
    city: "MANCHESTER",
    status: "TICKETS",
  },
  {
    id: "evt-3",
    slug: "coors-sessions",
    day: "12",
    month: "JUL",
    year: "2026",
    title: "SOURCE CONTROL SESSIONS",
    venue: "COORS",
    city: "LONDON",
    status: "FREE ENTRY",
  },
];

export const spotifyTracks = [
  { artist: "UNKEY", title: "GRID FAILURE", duration: "4:28" },
  { artist: "MONO CODE", title: "NULL SIGNAL", duration: "3:54" },
  { artist: "0079", title: "SECTOR 79", duration: "5:12" },
  { artist: "UNKEY", title: "CONCRETE PULSE", duration: "4:06" },
];

export const latestMix = mixes[0];

export const journalPosts: JournalPost[] = [
  {
    id: "j-1",
    slug: "warehouse-culture",
    title: "WAREHOUSE CULTURE IN THE POST-INDUSTRIAL GRID",
    excerpt:
      "How UK sound-system lineage survives inside abandoned infrastructure — and why the room is still the instrument.",
    category: "CULTURE",
    publishedAt: "2026-04-12",
    readTime: "8 MIN",
    body: [
      "The warehouse is not a venue. It is a condition. Concrete, reverb, and the slow decay of fluorescent light define a sonic architecture that no festival stage can replicate.",
      "SOURCE CONTROL operates inside this lineage — not as nostalgia, but as infrastructure.",
    ],
  },
  {
    id: "j-2",
    slug: "mono-code-profile",
    title: "MONO CODE: FIRMWARE FOR THE DANCEFLOOR",
    excerpt:
      "Inside the Manchester producer's stripped-back approach to rhythm and cold-wave synthesis.",
    category: "ARTIST",
    publishedAt: "2026-03-28",
    readTime: "6 MIN",
    body: [
      "Mono Code does not build tracks. They deploy updates — incremental, precise, designed to overwrite whatever the previous DJ left running.",
    ],
  },
  {
    id: "j-3",
    slug: "sub-bass-mutations",
    title: "SUB-BASS MUTATIONS: UK DUBSTEP AFTER THE COLLAPSE",
    excerpt:
      "A field report on bass music's evolution from Croydon to the brutalist periphery.",
    category: "SIGNAL",
    publishedAt: "2026-02-14",
    readTime: "10 MIN",
    body: [
      "Sub-bass was always architecture. What changed is the city around it — denser, colder, more hostile to anything that cannot survive at low frequency.",
    ],
  },
];

export const navLinks = [
  { href: "/#about", label: "ABOUT" },
  { href: "/artists", label: "ARTISTS" },
  { href: "/releases", label: "RELEASES" },
  { href: "/events", label: "EVENTS" },
  { href: "/contact", label: "CONTACT" },
] as const;

export const heroImage = "/images/hero-building.svg";
export const mixAtmosphereImage = "/images/mix-tunnel.svg";
