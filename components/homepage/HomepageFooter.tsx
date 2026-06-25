import Link from "next/link";

export function HomepageFooter() {
  return (
    <footer className="relative z-[110] border-t border-white/15 bg-black">
      <div className="flex flex-col gap-4 px-5 sm:px-8 lg:px-12 py-5 sm:py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-[family-name:var(--font-mono)] text-[9px] sm:text-[10px] tracking-[0.22em] uppercase text-white/60 sm:text-left text-center">
          EST 2025
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 sm:justify-end">
          <Link
            href="/contact"
            className="font-[family-name:var(--font-mono)] text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-white/60 hover:text-white transition-colors"
          >
            CONTACT
          </Link>
          <a
            href="https://www.instagram.com/source01control?igsh=YjZybmp6ZXY5c3U2"
            target="_blank"
            rel="noopener noreferrer"
            className="homepage-footer-social-link group"
            aria-label="Instagram"
          >
            <img
              src="/images/instagram-icon.png"
              alt=""
              className="homepage-footer-social-icon homepage-footer-social-icon--invert homepage-footer-social-icon--instagram"
            />
          </a>
          <a
            href="https://soundcloud.com/source-control-461967150"
            target="_blank"
            rel="noopener noreferrer"
            className="homepage-footer-social-link group"
            aria-label="Soundcloud"
          >
            <img
              src="/images/soundcloud-icon.png"
              alt=""
              className="homepage-footer-social-icon homepage-footer-social-icon--invert homepage-footer-social-icon--soundcloud"
            />
          </a>
          <a
            href="https://source01control.bandcamp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="homepage-footer-social-link group"
            aria-label="Bandcamp"
          >
            <img
              src="/images/bandcamp-icon.svg"
              alt=""
              className="homepage-footer-social-icon homepage-footer-social-icon--bandcamp"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
