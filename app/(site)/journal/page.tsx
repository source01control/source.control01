import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { journalPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Field Notes",
  description:
    "SOURCE CONTROL field notes — reports, artist profiles, and underground culture.",
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

export default function JournalPage() {
  const [featured, ...rest] = journalPosts;

  return (
    <div className="field-notes-page w-full min-h-screen">
      <header className="field-notes-hero">
        <div className="field-notes-hero__inner">
          <h1 className="field-notes-hero__title">Field Notes</h1>
        </div>
      </header>

      <div className="field-notes-content">
        {featured ? (
          <section className="field-notes-section" aria-label="Featured">
            <h2 className="field-notes-section__label">
              <span aria-hidden="true">/</span> Featured
            </h2>

            <Link
              href={`/journal/${featured.slug}`}
              className="field-notes-featured group"
            >
              <div className="field-notes-featured__media">
                {featured.cover ? (
                  <Image
                    src={featured.cover.url}
                    alt={featured.cover.alt}
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
                  {formatFeatureDate(featured.publishedAt)}
                </p>
                <h3 className="field-notes-featured__title">{featured.title}</h3>
                <p className="field-notes-featured__excerpt">{featured.excerpt}</p>
                <p className="field-notes-featured__byline">Source Control</p>
              </div>
            </Link>
          </section>
        ) : null}

        {rest.length > 0 ? (
          <section className="field-notes-section" aria-label="Latest">
            <h2 className="field-notes-section__label">
              <span aria-hidden="true">/</span> Latest
            </h2>
            <ul className="field-notes-list">
              {rest.map((post) => (
                <li key={post.id}>
                  <Link
                    href={`/journal/${post.slug}`}
                    className="field-notes-list-item group"
                  >
                    <div className="field-notes-list-item__media">
                      {post.cover ? (
                        <Image
                          src={post.cover.url}
                          alt={post.cover.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 639px) 40vw, 220px"
                        />
                      ) : (
                        <div className="field-notes-featured__placeholder" />
                      )}
                    </div>
                    <div className="field-notes-list-item__copy">
                      <p className="field-notes-meta">
                        {formatFeatureDate(post.publishedAt)}
                      </p>
                      <h3 className="field-notes-list-item__title">
                        {post.title}
                      </h3>
                      <p className="field-notes-list-item__excerpt">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </div>
  );
}
