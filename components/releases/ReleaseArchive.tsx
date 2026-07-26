import Image from "next/image";
import Link from "next/link";
import {
  catalogueReleasesExcludingFeatured,
  featuredRelease,
  formatReleaseDate,
  getReleaseBackgroundImage,
  getReleaseExcerpt,
} from "@/lib/releases";

export function ReleaseArchive() {
  const featured = featuredRelease;
  const catalogue = catalogueReleasesExcludingFeatured;

  return (
    <div className="releases-page w-full min-h-screen">
      <header className="releases-page__hero">
        <div className="releases-page__hero-inner">
          <h1 className="releases-page__title">Releases</h1>
          <p className="releases-page__deck">
            Catalogue from Source Control.
          </p>
        </div>
      </header>

      <div className="releases-page__content">
        {featured ? (
          <section className="releases-page__section" aria-label="Featured">
            <h2 className="releases-page__section-label">
              <span aria-hidden="true">/</span> Featured
            </h2>

            <Link
              href={featured.href}
              className="releases-featured group"
            >
              <div className="releases-featured__media">
                <Image
                  src={getReleaseBackgroundImage(featured.catalog, featured.image)}
                  alt={featured.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1023px) 100vw, 55vw"
                  priority
                />
              </div>
              <div className="releases-featured__copy">
                <p className="releases-page__meta">
                  {formatReleaseDate(featured.releaseDate)} · {featured.catalog}
                </p>
                <h3 className="releases-featured__title">{featured.title}</h3>
                <p className="releases-featured__excerpt">
                  {getReleaseExcerpt(featured)}
                </p>
                <p className="releases-featured__byline">{featured.artist}</p>
              </div>
            </Link>
          </section>
        ) : null}

        {catalogue.length > 0 ? (
          <section className="releases-page__section" aria-label="Catalogue">
            <h2 className="releases-page__section-label">
              <span aria-hidden="true">/</span> Catalogue
            </h2>
            <ul className="releases-catalogue">
              {catalogue.map((release) => (
                <li key={release.id}>
                  <Link href={release.href} className="releases-catalogue-item group">
                    <div className="releases-catalogue-item__media">
                      <Image
                        src={getReleaseBackgroundImage(
                          release.catalog,
                          release.image
                        )}
                        alt={release.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 639px) 40vw, 220px"
                      />
                    </div>
                    <div className="releases-catalogue-item__copy">
                      <p className="releases-page__meta">
                        {release.catalog} ·{" "}
                        {formatReleaseDate(release.releaseDate)}
                      </p>
                      <h3 className="releases-catalogue-item__title">
                        {release.title}
                      </h3>
                      <p className="releases-catalogue-item__artist">
                        {release.artist}
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
