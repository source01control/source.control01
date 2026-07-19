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
    bio: "For Mono Code, music begins long before the first drum pattern or bassline takes shape. It starts with a place, a memory, a film scene or a sound encountered while travelling. Fragments that gradually evolve into immersive worlds built for both sound systems and solitary listening.\n\nEmerging from the UK's deep bass music scene, Mono Code creates spacious, cinematic electronic music where dubstep, garage, techno and drum & bass coexist without feeling constrained by genre. Built around meticulous sound design and countless hours spent resampling his own material, his productions favour atmosphere, tension and movement over immediacy, allowing every element to breathe while remaining carefully considered. Rather than following established formulas, his work is driven by a desire to build stories through sound.\n\nAlthough production began in 2021 while studying Electronic Music Production at dBs Plymouth, music had already shaped much of his life. Introduced to electronic music through The Prodigy's Breathe as a child, he later spent years DJing jungle and drum & bass while helping to run underground events before eventually turning his attention towards production. Working under the alias Deft Design, before adopting the name Mono Code in 2025, his sound has continued to evolve through collaboration, experimentation and an increasingly disciplined approach to composition and sound design.\n\nTravel has become equally influential in that evolution. Years spent backpacking and living abroad, combined with a lifelong fascination with cinema, have shaped both his creative outlook and his understanding of how music reflects people, places and culture. Alongside influences ranging from Radiohead, Noisia and Burial to psychedelic rock, film scores and contemporary bass music, these experiences continue to encourage a constant search for new perspectives rather than familiar formulas.\n\nThat curiosity extends throughout his creative process.\n\nRather than relying on commercial sample libraries, Mono Code has developed a workflow centred around creating his own archive of sounds, dedicating separate sessions purely to sound design before reshaping those recordings into new compositions. More recently, field recordings captured from everyday environments have become another source of inspiration, further blurring the line between the natural world and electronic music. Simplicity remains central to his philosophy, but never at the expense of originality.\n\nHis productions have found homes on labels including Source Control, Inner Circle, Semblance, Cimmerian, Foto Sounds, WiddFam, Draconian Audio and Aspire Higher, earning support from artists such as Noisia, J:Kenzo and Deep Tempo, alongside radio plays on BBC Radio 1, Rinse FM, SWU FM and Subtle FM. Performances across the UK, Europe, Canada and New Zealand have steadily established Mono Code as one of a new generation of producers exploring the spaces between contemporary bass music and forward thinking club music.\n\nCollaboration remains central to his approach. Working alongside artists including Unkey, Armenez, Kay Elkay and Somebodyyyy has continually challenged his production techniques while reinforcing the belief that different creative perspectives often lead to the most rewarding results. That collaborative spirit now sits at the heart of his ongoing partnership with Unkey, where projects such as the Tech series continue to explore ideas of refinement, reconstruction and continual evolution.\n\nWith new releases, international performances and an expanding catalogue on the horizon, Mono Code remains focused on the process of discovery. Whether experienced through the physicality of a sound system or the intimacy of headphones, his music is intended to immerse the listener, revealing new details with every return.\n\nLess concerned with genre than with atmosphere, detail and emotional connection, Mono Code continues to develop a body of work that rewards repeated listening. Music built not simply to be heard, but to be experienced.",
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
    title: "Building Worlds Through Sound",
    excerpt: "A conversation with Mono Code",
    category: "CULTURE",
    publishedAt: "2026-04-12",
    readTime: "8 MIN",
    body: [
      "Mono Code approaches electronic music less as a collection of genres and more as a process of world-building. His productions are shaped by travel, cinema, original sound design and a constant curiosity for discovering new perspectives through sound.",
      "In this conversation, he reflects on the creative process behind his music, discussing atmosphere, collaboration, field recordings and the pursuit of originality, while offering an insight into the philosophy that continues to shape his evolving body of work.",
    ],
    interview: [
      {
        question:
          "Your music often feels cinematic without relying on obvious melodies. When you're starting a track, are you imagining a place, a scene or simply chasing a feeling?",
        answer:
          'Usually it\'s a feeling. Sometimes that feeling grows into a place or a scene as the track develops, but I rarely sit down thinking, "I\'m going to write music about this." It\'s more about trying to capture a mood that I can\'t really describe with words. Sometimes a scene from a film I love, or an emotion from war or politics, will create a desire to make something, but often a particular sound, melody or rhythm will spark and I\'ll build the rest of the track around that.',
      },
      {
        question:
          'You describe your music as "building stories through sound." What does storytelling mean when there are no lyrics?',
        answer:
          "Storytelling doesn't need words. Every sound has a character and every change in energy says something. A track can create tension, release, uncertainty or comfort without ever explaining itself. I like leaving room for the listener to project their own experiences onto my music rather than telling them exactly how they're supposed to feel while listening.",
      },
      {
        question:
          "Many producers build tracks around drops or memorable hooks. Your music seems more interested in atmosphere and gradual movement. Has that always been your approach?",
        answer:
          "I always loved drum and bass tracks that evolve throughout when I DJed, so that had a huge impact on my production. I will NEVER copy and paste the first and second drops.",
      },
      {
        question:
          "Space plays a huge role in your productions. Sometimes what isn't happening feels just as important as what is. How do you know when to stop adding elements?",
        answer:
          "Usually when adding something makes the track weaker and more muddled rather than stronger and cohesive. I try to make every sound earn its place. If an element isn't contributing to the feeling or the movement, it probably doesn't belong there. Sometimes restraint creates far more impact than another layer ever could, but I know this is something I need to improve on!",
      },
      {
        question:
          "You spend a lot of time creating and resampling your own sounds rather than relying on sample packs. How much does that process shape the identity of your music?",
        answer:
          'It\'s probably one of the biggest parts of it now. Designing my own sounds means they evolve alongside the track instead of feeling like something borrowed. It takes longer, but it helps the music feel more personal and gives me a palette that\'s genuinely my own. Of course sound selection plays a huge part in having your "own sound", but resampling previous tracks is essential IMO.',
      },
      {
        question:
          "You've spoken about films and travel influencing your work. Have there been particular places or experiences that have found their way directly into your productions?",
        answer:
          "Definitely. Travelling has changed the way I hear sound. Even if I'm not always incorporating recordings and sounds from where I am, your experiences always have a huge impact on creativity, I reckon. On my last trip to Thailand and Vietnam I started using more field recordings, as I finally invested in a decent Zoom H1 mic before I left.",
      },
      {
        question:
          "Your tracks often feel meticulously constructed, yet never clinical. How do you balance technical precision with emotion?",
        answer:
          "I try not to let perfection become the goal. Emotion always comes first.",
      },
      {
        question:
          "Collaboration has become a big part of your journey. What have projects like the Tech series with Unkey taught you about your own creative process?",
        answer:
          "Collaboration forces you to let go of your ego a little. Seeing how someone else approaches the same idea often opens avenues you wouldn't have found when producing alone.",
      },
      {
        question:
          "Do you ever begin a track knowing exactly where it's going, or do you prefer discovering it as you build?",
        answer:
          "Almost never. I usually start with one sound or one idea that feels exciting and follow it. Some of my favourite tracks have ended up somewhere completely different from where I thought they were heading.",
      },
      {
        question:
          "When you finish a piece of music, what tells you it's complete?",
        answer:
          "When I stop thinking about what it needs and start enjoying listening to it. There comes a point where any further changes aren't making it better.",
      },
      {
        question:
          "Your productions sit somewhere between dubstep, garage, techno and drum & bass without feeling tied to any of them. Do genres still have value to you, or are they simply reference points?",
        answer:
          "Genres are useful because they help people discover music, but I don't think about them when I'm writing. They're reference points rather than destinations. I often start dubstep tracks that turn into garage tracks, and drum and bass tracks that I think sound better as dubstep tracks.",
      },
      {
        question:
          "What role does a sound system play in your writing? Do you compose differently knowing how the music will be experienced in a club?",
        answer:
          "A sound system is always in the back of my mind. I want the low end to feel physical, but I also want the music to work on headphones. If a track only makes sense in one environment, I feel like it's missing something.",
      },
      {
        question:
          "You recently started incorporating field recordings into your workflow. What attracts you to everyday sounds?",
        answer:
          "They're unique. Everyone has access to the same synths and sample packs, but nobody hears the world in exactly the same way. Field recordings add little imperfections and textures that make a piece of music feel lived in rather than manufactured. Jon Hopkins did an interview where he explains that he always uses iPhone recordings in his music, so this was a huge influence for me to invest in a proper mic!",
      },
      {
        question:
          "If someone spent ten minutes listening to your catalogue, what would you hope they understood about you as an artist?",
        answer:
          "That I'm trying to build experiences rather than just tracks. I hope they hear someone who's more interested in atmosphere, detail and emotion than chasing trends or sticking to one genre.",
      },
      {
        question:
          "Your music rewards repeated listening. Is that something you consciously aim for, or does it naturally happen through your production process?",
        answer:
          "I think this comes back to my love for drum and bass tracks that constantly evolve and grow throughout. Those were always the tracks I relistened to personally, because you're not just listening to the same buildup and drop twice.",
      },
      {
        question:
          "What's something people often overlook when listening to your music?",
        answer:
          "Hard to say, because I don't have all the feedback from people who listen to my music, but I do sometimes worry that people miss the second drops in my tracks because people's attention spans are so awful now. Some of my favourite Noisia, Mefjus etc. drum and bass songs are exactly that because of the second drop, and I always try to achieve the same.",
      },
      {
        question:
          "Has there been a moment where a collaboration completely changed the way you think about making music?",
        answer:
          "Honestly, just the fact that Unkey wanted to collaborate in the first place was a huge moment for me. His production and the release he had with Foto Sounds felt so far above my level, so when he said we should make an EP, that was a huge confidence boost. Whenever anyone says they want to create together I feel very honoured, because I know how much energy and commitment it takes to build a track or EP.",
      },
      {
        question:
          "Technology evolves constantly, but your music often feels timeless. How do you balance innovation without simply chasing new tools or trends?",
        answer:
          "I love new technology, but only if it helps me express an idea better. I don't want people to remember a track because it used the latest Serum. I'd rather they remember how it made them feel.",
      },
      {
        question:
          "If your music were the soundtrack to a film, what would the audience be watching?",
        answer:
          "A slow-burning journey through unfamiliar places. A film that's less about action and more about atmosphere, curiosity and discovery. Starring Tom Hardy or Chris Hemsworth.",
      },
      {
        question:
          "Finally... When people leave one of your sets or finish listening to one of your records, what do you hope stays with them?",
        answer:
          "If someone comes back to a track months later and hears something they missed the first time, that's probably the biggest compliment I could receive.",
      },
    ],
  },
];

export const navLinks = [
  { href: "/about", label: "ABOUT" },
  { href: "/artists", label: "ARTISTS" },
  { href: "/releases", label: "RELEASES" },
  { href: "/events", label: "EVENTS" },
  { href: "/journal", label: "FIELD NOTES" },
  { href: "/store", label: "STORE" },
  { href: "/contact", label: "CONTACT" },
] as const;

export const heroImage = "/images/website-fx/hero-tower.webp";
export const mixAtmosphereImage = "/images/mix-tunnel.svg";
