/** CMS-ready content types — wire to Sanity, Contentful, or Payload later */

export type CMSImage = {
  url: string;
  alt: string;
  width?: number;
  height?: number;
};

export type CMSArtist = {
  id: string;
  name: string;
  slug: string;
  role: string;
  bio: string;
  origin: string;
  catalog: string;
  image?: CMSImage;
  audioPreviewUrl?: string;
};

export type CMSRelease = {
  id: string;
  title: string;
  slug: string;
  catalog: string;
  artist: string;
  year: string;
  format: string;
  description: string;
  featured?: boolean;
  artwork?: CMSImage;
  audioPreviewUrl?: string;
};

export type CMSEvent = {
  id: string;
  slug: string;
  day: string;
  month: string;
  year: string;
  title: string;
  venue: string;
  city: string;
  status: "TICKETS" | "SOLD OUT" | "FREE ENTRY";
  poster?: CMSImage;
};

export type CMSJournalPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  cover?: CMSImage;
  body: string[];
};

export type CMSLabel = {
  name: string;
  tagline: string;
  genres: string;
  location: string;
  email: string;
  established: string;
};

export type CMSMix = {
  id: string;
  catalog: string;
  title: string;
  artist: string;
  duration: string;
  date: string;
};
