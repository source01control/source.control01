import type { Metadata } from "next";
import { EventsPage } from "@/components/events/EventsPage";

export const metadata: Metadata = {
  title: "Events",
  description: "SOURCE CONTROL live dates, label nights, and upcoming events.",
};

export default function EventsRoute() {
  return (
    <div className="w-full">
      <EventsPage />
    </div>
  );
}
