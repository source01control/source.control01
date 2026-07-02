import { ExternalLink } from "@/components/ExternalLink";
import type { ArtistNetwork } from "@/lib/artist-networks";

type ArtistNetworkColumnProps = {
  network: ArtistNetwork;
};

function platformLogoClassName(link: ArtistNetwork["links"][number]) {
  if (link.facebook) {
    return "release-detail-platform-link__logo release-detail-platform-link__logo--facebook";
  }
  if (link.invert) {
    return "release-detail-platform-link__logo release-detail-platform-link__logo--invert";
  }
  return "release-detail-platform-link__logo";
}

function NetworkPlatformRow({
  link,
}: {
  link: ArtistNetwork["links"][number];
}) {
  const content = (
    <>
      <span className="release-detail-platform-link__icon">
        <img src={link.icon} alt="" className={platformLogoClassName(link)} />
      </span>
      <span className="release-detail-platform-link__label">{link.label}</span>
    </>
  );

  if (link.href) {
    return (
      <ExternalLink
        href={link.href}
        className="release-detail-platform-link"
        aria-label={link.label}
      >
        {content}
      </ExternalLink>
    );
  }

  return (
    <div className="release-detail-platform-link" aria-label={link.label}>
      {content}
    </div>
  );
}

export function ArtistNetworkColumn({ network }: ArtistNetworkColumnProps) {
  return (
    <>
      <h2 className="release-detail-actions-title">{network.title}</h2>
      {network.links.length > 0 ? (
        <div className="release-detail--compact-platforms">
          <div className="release-detail-platform-links">
            {network.links.map((link) => (
              <NetworkPlatformRow key={link.label} link={link} />
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
