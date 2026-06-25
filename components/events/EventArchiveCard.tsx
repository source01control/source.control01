import Image from "next/image";
import Link from "next/link";
import type { Event } from "@/lib/events";
import { eventHref } from "@/lib/events";

type EventArchiveCardProps = {
  event: Event;
};

export function EventArchiveCard({ event }: EventArchiveCardProps) {
  return (
    <article className="release-archive-card release-card group">
      <Link href={eventHref(event.slug)} className="release-archive-tile">
        <div className="release-archive-artwork">
          <Image
            src={event.artwork}
            alt={event.alt}
            fill
            priority
            className="release-archive-img object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="release-archive-meta !gap-3 min-w-0">
          <h2 className="m-0 max-w-full font-[family-name:var(--font-display)] text-[clamp(1.5rem,2.4vw,2rem)] leading-[0.9] tracking-[0.04em] uppercase text-white">
            {event.title}
          </h2>
          <hr className="release-detail-divider !m-0" />
          <p className="m-0 font-[family-name:var(--font-display)] text-[clamp(1.5rem,2.4vw,2rem)] leading-[0.9] tracking-[0.04em] uppercase text-white/55">
            {event.date}
          </p>
        </div>
      </Link>
    </article>
  );
}
