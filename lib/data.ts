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
    bio: "For Unkey, music has never been about following trends or recreating what has already been done. It has always been about evolution.\n\nEmerging from the UK's underground bass music scene, Unkey has spent years carving out a sound that exists somewhere between dark, cinematic dubstep, UK garage, techno and broken rhythms. While rooted in 140, his productions have never been confined by genre. Instead, they draw influence from wherever inspiration strikes, whether that's the tension of a film score, the hypnotic pulse of techno, the swing of UK garage or the haunting melodies of Middle Eastern music.\n\nThe result is a catalogue of music built less around formulas and more around atmosphere. Sinister vocal samples, vast soundscapes, heavy low end and carefully crafted tension have become defining characteristics of his productions, creating tracks that feel equally at home on powerful sound systems and in the headphones of late night listeners.\n\n\"The best underground music should make you feel slightly uncomfortable. If it raises a few eyebrows, I've probably done something right.\"\n\nAlthough music had always been part of his life, Unkey arrived at production later than many of his peers. Early experiments were driven more by curiosity than ambition, and progress was anything but immediate. Like many producers, the first few years were filled with frustration, self doubt and countless unfinished ideas. But persistence eventually revealed something far more valuable than technical ability, a distinctive voice.\n\nHis earliest work explored the darker edges of 130 BPM garage and broken beat, heavily inspired by the influential output of Keysound Recordings and the pioneering work of Dusk & Blackdown. Their support, alongside regular airplay on their radio shows, provided an early confidence boost and helped shape his understanding of underground music as a space for experimentation rather than conformity.\n\nAround the same time, Bristol became a second home. Nights at legendary events like Subloaded opened the door to dubstep's deeper, more atmospheric side, while friendships within the city's thriving scene helped accelerate his journey. One figure in particular, Koast of Durkle Disco, recognised Unkey's potential early on, offering opportunities through club nights and radio appearances that would prove instrumental in establishing him as an artist.\n\nThose experiences naturally led towards dubstep, although not in its most conventional form. Rather than embracing the aggressive, wobble driven formulas dominating the genre at the time, Unkey gravitated towards producers like Kahn, Neek and J:Kenzo, artists whose music prioritised mood, restraint and sound design over spectacle.\n\nThat philosophy continues to define his work today.\n\n\"I've never been interested in recreating what already exists. If I'm making music that sounds like everyone else's, I've probably lost interest already.\"\n\nAcross the years, releases on respected underground labels including Wheel & Deal, Artikal Music, Uprise Audio, Dungeon Beats and Durkle Disco have steadily established Unkey as one of the UK's distinctive voices within modern bass music. His productions have received support across BBC Radio 1, BBC Radio 1Xtra, BBC Radio 6 Music, Rinse FM, SWU FM, Subtle FM and numerous independent stations worldwide, alongside regular support from influential DJs including N Type, Spyro and J:Kenzo.\n\nCollaborations with artists such as Illaman, Slowie and Mono Code have further expanded his creative output, while multiple Number One releases on Juno Download stand as reminders of an era that helped define underground electronic music for an entire generation.\n\nBetween 2020 and 2025, Unkey also co ran Foto Sounds alongside Khanum, helping build a respected platform through carefully curated releases and events. When that chapter came to a natural conclusion, it wasn't an ending, it became the catalyst for something new.\n\nIn 2025, Source Control was born.\n\nMore than simply a record label, Source Control represents the philosophy that has guided Unkey's career from the very beginning: Continuous Evolution.\n\nIts name reflects both complete creative independence and a subtle nod to the world of technology and programming. Visually inspired by brutalism, cyberpunk and dystopian aesthetics, the label began life firmly rooted in dubstep but was never intended to stay there. Instead, Source Control exists as a constantly evolving platform where genres blur, tempos shift and experimentation is encouraged rather than restrained.\n\n\"Music should evolve in the same way technology evolves. Every release should push the system forward rather than repeat the last version.\"\n\nThat philosophy is reflected throughout the label's growing roster, which includes artists such as Mono Code, 0079 and Seattle based No Recall, all chosen not because they fit into a particular genre, but because they share a desire to explore where underground music can go next.\n\nAmong those relationships, Mono Code has become one of the closest collaborators. Together, the pair continue to develop the ongoing Tech series, a project built around the idea of continual transformation. Rather than producing traditional remixes, each release revisits previous material as a new evolutionary step, familiar ideas reconstructed into entirely different forms while retaining a shared identity.\n\nThe same mindset increasingly defines Unkey's own productions. While 140 remains the heartbeat of much of his work, recent material pushes confidently towards techno, drum & bass and hybrid club music without abandoning the dark atmospheres that first established his sound. The latest collaborative release, Source Shift, marked another significant step in that journey, signalling not a departure from dubstep, but an expansion beyond its traditional boundaries.\n\nToday, Unkey continues to refine a sound that refuses to stand still.\n\nWhether through future collaborations, international artists joining the Source Control roster or the label's ambitions to develop events of its own, the destination remains deliberately undefined. What matters is the movement itself.\n\nBecause for Unkey, evolution has never been a phase.\n\nIt's the entire point.",
    origin: "SOUTH LONDON",
    catalog: "SC_001",
    image: { url: "/images/artists/unkey summer.webp", alt: "Unkey" },
  },
  {
    id: "mono-code",
    name: "MONO CODE",
    slug: "mono-code",
    role: "BINARY COMPOSER",
    bio: "Starting his production career under the alias Deft Design, McEndoo rebranded as Mono Code to pursue a more focused underground sound. His work is deeply tied to the foundational dubstep scene, favoring a high-tech, futuristic, and sub-heavy aesthetic. His discography spans various cutting-edge electronic subgenres while keeping the raw \"sub low\" and rugged rhythm sections of UK club culture at the core.",
    origin: "MANCHESTER",
    catalog: "SC_002",
    image: { url: "/images/artists/mono code dj.webp", alt: "Mono Code" },
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
  {
    id: "no-recall",
    name: "noRecall",
    slug: "no-recall",
    role: "PACIFIC SIGNAL",
    bio: "For Seattle based producer No Recall, music is less about composition than transformation. Sounds are rarely left untouched; they are repeatedly recorded, resampled, reshaped and dismantled until they become something entirely their own. The studio becomes a workshop where distortion, texture and imperfection are embraced rather than corrected, reflecting a creative process driven by curiosity as much as control.\n\nGrowing up surrounded by the sounds of '80s club music, '90s industrial and early rave culture, electronic music was always present, but production arrived later. Early experiments in Ableton gradually evolved into a deeper fascination with sound itself, eventually leading to the co founding of Ommaya Records, a platform built around exploration, experimentation and the belief that music should never be constrained by expectation.\n\nThat philosophy continues to define No Recall's work today.\n\nRather than searching for familiarity, inspiration comes from discovering music that feels genuinely new. Influences range from the spacious minimalism of Burial and the immersive worlds of Deep Medi to the hypnotic precision of DVS1 and Daniel Avery, alongside contemporary underground labels emerging from France that continue to challenge established ideas of bass music. Outside the studio, inspiration often arrives in front of a sound system, where the physical experience of low frequencies becomes a reminder of why the music exists in the first place.\n\n\"I need things to remain noisy and generally fucked up.\"\n\nHis productions move freely between dark, grungy bass music, experimental club sounds and abstract electronics, resisting easy categorisation in favour of continual discovery. Rather than refining a single formula, every new project becomes an opportunity to test different ideas, dismantle old habits and uncover unfamiliar territory.\n\n\"I want people to react, 'What the fuck am I listening to?', whether that's good or bad.\"\n\nFor No Recall, success is measured less by achievements than by the relationships built through music itself. Every release becomes a conversation with a new label, a new city and a new community, strengthening the underground network that continues to inspire his own development as an artist. As those connections expand, so too does the music, each collaboration, each influence and each new encounter becoming part of an ongoing cycle of exploration.\n\nWith a constant stream of new material in progress and an ambition to create at least one new piece of music every week, No Recall remains committed to the process rather than the destination.\n\nBecause the most exciting discoveries are usually the ones you weren't looking for.",
    origin: "SEATTLE",
    catalog: "SC_004",
    image: {
      url: "/images/artists/no-recall.webp",
      alt: "noRecall",
    },
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
  { href: "/about", label: "ABOUT" },
  { href: "/artists", label: "ARTISTS" },
  { href: "/releases", label: "RELEASES" },
  { href: "/events", label: "EVENTS" },
  { href: "/store", label: "STORE" },
  { href: "/contact", label: "CONTACT" },
] as const;

export const heroImage = "/images/website-fx/hero-tower.webp";
export const mixAtmosphereImage = "/images/mix-tunnel.svg";
