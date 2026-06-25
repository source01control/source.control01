import { EventArchiveCard } from "@/components/events/EventArchiveCard";
import { events } from "@/lib/events";

export function EventsPage() {
  return (
    <section
      className="releases-grid w-full px-4 sm:px-6 lg:px-4 pt-20 sm:pt-24 pb-16"
      aria-label="Events"
    >
      {events.map((event) => (
        <EventArchiveCard key={event.id} event={event} />
      ))}
    </section>
  );
}
