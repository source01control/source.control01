# SOURCE CONTROL

Premium underground transmission website for **SOURCE CONTROL** — UK dubstep, techno, garage, and experimental bass music.

## Stack

- **Next.js 15** (App Router)
- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** + **GSAP** (cinematic hero reveal)
- **Lenis** (smooth scrolling)
- **shadcn/ui** patterns (`Button`, Radix Slot)
- Google Fonts: **Bebas Neue** (display), **IBM Plex Mono** (UI/body)

## Pages

| Route | Description |
| ----- | ----------- |
| `/` | Cinematic hero, artists, releases, events, journal preview, newsletter |
| `/artists` | Roster — Unkey, Mono Code, 0079 |
| `/releases` | Classified catalogue index |
| `/journal` | Brutalist editorial signal log |
| `/journal/[slug]` | Article pages (SSG) |
| `/contact` | Channels + transmission form |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx          # Fonts, Providers, Header/Footer
  page.tsx            # Homepage sections
  globals.css         # Grain, CRT, hero, motion utilities
  artists/ releases/ contact/ journal/
components/
  effects/            # NoiseOverlay, CRTOverlay, GlitchText, CursorFollower
  home/               # Hero, FeaturedArtists, ReleaseSpotifyRow, EventsMixRow
  layout/             # SmoothScroll (Lenis)
  Header.tsx          # Fullscreen overlay navigation
  Footer.tsx
lib/
  data.ts             # CMS-ready content (artists, releases, events, journal)
  cms/types.ts        # Types for future headless CMS
public/images/        # Hero, artists, mix atmosphere SVGs
```

## Customisation

- Edit roster, catalogue, events, and journal in `lib/data.ts`
- Replace `public/images/hero-building.svg` with your own atmospheric visual
- Wire contact/newsletter forms to your backend or form service
- Set `NEXT_PUBLIC_SITE_URL` for sitemap/robots production URLs

## Build

```bash
npm run build
npm start
```
