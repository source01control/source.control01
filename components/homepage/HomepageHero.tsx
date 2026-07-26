"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { featuredRelease } from "@/lib/homepage";
import { journalPosts } from "@/lib/data";
import {
  formatReleaseDate,
  getReleaseBackgroundImage,
  getReleaseExcerpt,
} from "@/lib/releases";
import {
  SAMPLE_PACK_ARTWORK,
  SAMPLE_PACK_COPY,
  samplePackHref,
} from "@/lib/sample-pack";
import { GlitchOverlay } from "@/components/GlitchOverlay";

const heroEase = [0.22, 1, 0.36, 1] as const;

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: heroEase },
  },
};

function formatFeatureDate(iso: string): string {
  const date = new Date(`${iso}T12:00:00`);
  return date
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .toUpperCase();
}

const featuredNote =
  journalPosts.find((post) => post.slug === "warehouse-culture") ??
  journalPosts[0];

export function HomepageHero() {
  const featured = featuredRelease;

  return (
    <>
      <section className="home-hero" aria-label="Hero">
        <div className="home-hero__media" aria-hidden="true">
          <motion.div
            className="home-hero__image"
            initial={{ scale: 1.06, opacity: 0.85 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: heroEase }}
          >
            <Image
              src="/images/website-fx/hero-tower.webp"
              alt=""
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
          <div className="home-hero__veil" />
        </div>

        <GlitchOverlay className="glitch-overlay--hero" />

        <div className="home-hero__inner">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.14, delayChildren: 0.15 },
              },
            }}
          >
            <motion.h1
              className="home-hero__title"
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.9, ease: heroEase },
                },
              }}
            >
              <span className="block">SOURCE</span>
              <span className="block">CONTROL</span>
            </motion.h1>

            <motion.p className="home-hero__tagline" variants={itemVariants}>
              continuous evolution / Underground Electronic Music / UK
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="home-page__content">
        {featuredNote ? (
          <section className="home-page__section" aria-label="Featured">
            <h2 className="home-page__section-label">
              <span aria-hidden="true">/</span> Featured
            </h2>

            <Link
              href={`/journal/${featuredNote.slug}`}
              className="field-notes-featured group"
            >
              <div className="field-notes-featured__media">
                {featuredNote.cover ? (
                  <Image
                    src={featuredNote.cover.url}
                    alt={featuredNote.cover.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1023px) 100vw, 55vw"
                    priority
                  />
                ) : (
                  <div className="field-notes-featured__placeholder" />
                )}
              </div>
              <div className="field-notes-featured__copy">
                <p className="field-notes-meta">
                  {formatFeatureDate(featuredNote.publishedAt)}
                </p>
                <h3 className="field-notes-featured__title">
                  {featuredNote.title}
                </h3>
                <p className="field-notes-featured__excerpt">
                  {featuredNote.excerpt}
                </p>
                <p className="field-notes-featured__byline">Source Control</p>
              </div>
            </Link>
          </section>
        ) : null}

        {featured ? (
          <section className="home-page__section" aria-label="Latest">
            <h2 className="home-page__section-label">
              <span aria-hidden="true">/</span> Latest
            </h2>

            <Link href={featured.href} className="releases-catalogue-item group">
              <div className="releases-catalogue-item__media">
                <Image
                  src={getReleaseBackgroundImage(featured.catalog, featured.image)}
                  alt={featured.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 639px) 40vw, 220px"
                />
              </div>
              <div className="releases-catalogue-item__copy">
                <p className="releases-page__meta">
                  {formatReleaseDate(featured.releaseDate)} · {featured.catalog}
                </p>
                <h3 className="releases-catalogue-item__title">
                  {featured.title}
                </h3>
                <p className="releases-catalogue-item__excerpt">
                  {getReleaseExcerpt(featured)}
                </p>
                <p className="releases-catalogue-item__artist">
                  {featured.artist}
                </p>
              </div>
            </Link>
          </section>
        ) : null}

        <section className="home-page__section" aria-label="Sample pack">
          <h2 className="home-page__section-label">
            <span aria-hidden="true">/</span> Free
          </h2>

          <Link href={samplePackHref} className="releases-catalogue-item group">
            <div className="releases-catalogue-item__media">
              <Image
                src={SAMPLE_PACK_ARTWORK}
                alt="Source Control Sample Pack Vol. 1 artwork"
                fill
                className="object-cover object-center"
                sizes="(max-width: 639px) 40vw, 220px"
              />
            </div>
            <div className="releases-catalogue-item__copy">
              <p className="releases-page__meta">Sample Pack Vol. 1</p>
              <h3 className="releases-catalogue-item__title">
                Unlock the free Source Control sample pack
              </h3>
              <p className="releases-catalogue-item__excerpt">
                {SAMPLE_PACK_COPY}
              </p>
            </div>
          </Link>
        </section>
      </div>
    </>
  );
}
