import { ExternalLink } from "@/components/ExternalLink";
import type { ArtistNetwork, ArtistNetworkLink } from "@/lib/artist-networks";
import { cn } from "@/lib/utils";

type ArtistNetworkColumnProps = {
  network: ArtistNetwork;
};

const SOCIAL_LABELS = new Set(["Instagram", "Facebook"]);

function platformLogoClassName(link: ArtistNetworkLink): string {
  return cn(
    "releases-article__platform-logo",
    link.invert && "releases-article__platform-logo--invert",
    link.facebook && "releases-article__platform-logo--facebook"
  );
}

function NetworkPlatformRow({ link }: { link: ArtistNetworkLink }) {
  const content = (
    <>
      <span className="releases-article__platform-icon">
        <img src={link.icon} alt="" className={platformLogoClassName(link)} />
      </span>
      <span className="releases-article__platform-text">{link.label}</span>
    </>
  );

  if (link.href) {
    return (
      <ExternalLink
        href={link.href}
        className="releases-article__platform-link"
        aria-label={link.label}
      >
        {content}
      </ExternalLink>
    );
  }

  return (
    <div className="releases-article__platform-link" aria-label={link.label}>
      {content}
    </div>
  );
}

function PlatformGroup({
  label,
  links,
}: {
  label: string;
  links: ArtistNetworkLink[];
}) {
  if (links.length === 0) return null;

  return (
    <div className="releases-article__platform-group">
      <p className="releases-article__platform-label">{label}</p>
      <div className="releases-article__platform-links">
        {links.map((link) => (
          <NetworkPlatformRow key={link.label} link={link} />
        ))}
      </div>
    </div>
  );
}

export function ArtistNetworkColumn({ network }: ArtistNetworkColumnProps) {
  const socialLinks = network.links.filter((link) =>
    SOCIAL_LABELS.has(link.label)
  );
  const listenLinks = network.links.filter(
    (link) => !SOCIAL_LABELS.has(link.label)
  );

  if (network.links.length === 0) return null;

  return (
    <section
      className="releases-article__listen releases-article__listen--link-list artist-network-links px-4 sm:px-6 lg:px-8 xl:px-10"
      aria-label={network.title}
    >
      <div className="releases-article__platforms">
        <PlatformGroup label="Social" links={socialLinks} />
        <PlatformGroup label="Listen" links={listenLinks} />
      </div>
    </section>
  );
}
