import type { Metadata } from "next";
import { label } from "@/lib/data";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact SOURCE CONTROL — bookings, demos, and press enquiries.",
};

export default function ContactPage() {
  return (
    <div className="home-shell w-full">
      <PageHeader
        title="CONTACT"
        subtitle="Open channel for bookings, demo submissions, press, and distribution."
      />

      <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-white/20">
        <div className="p-5 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/20">
          <p className="section-label mb-10">CHANNELS</p>

          <div className="space-y-12">
            <div>
              <p className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.3em] text-white/30">
                GENERAL / BOOKINGS
              </p>
              <a
                href={`mailto:${label.email}`}
                className="block mt-3 font-[family-name:var(--font-display)] text-3xl sm:text-4xl tracking-[0.04em] hover:opacity-80 transition-opacity"
              >
                {label.email}
              </a>
            </div>

            <div>
              <p className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.3em] text-white/30">
                DEMO SUBMISSIONS
              </p>
              <a
                href="mailto:demos@sourcecontrol.audio"
                className="block mt-3 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.08em] text-white/55 hover:text-white transition-colors"
              >
                demos@sourcecontrol.audio
              </a>
              <p className="mt-2 font-[family-name:var(--font-mono)] text-[8px] tracking-[0.15em] text-white/25">
                WAV / AIFF ONLY — MAX 3 TRACKS
              </p>
            </div>

            <div>
              <p className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.3em] text-white/30">
                LOCATION
              </p>
              <p className="mt-3 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.12em] text-white/45">
                {label.location}
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-8 lg:p-10">
          <p className="section-label mb-10">MESSAGE</p>

          <form className="space-y-5" action="#" method="post">
            <div>
              <label
                htmlFor="name"
                className="block font-[family-name:var(--font-mono)] text-[9px] tracking-[0.3em] text-white/30 mb-2"
              >
                NAME
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full bg-[#0a0a0a] border border-white/20 px-4 py-3 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.08em] outline-none focus:border-white/50 transition-colors placeholder:text-white/20"
                placeholder="YOUR NAME"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-[family-name:var(--font-mono)] text-[9px] tracking-[0.3em] text-white/30 mb-2"
              >
                EMAIL
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-[#0a0a0a] border border-white/20 px-4 py-3 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.08em] outline-none focus:border-white/50 transition-colors placeholder:text-white/20"
                placeholder="you@domain.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block font-[family-name:var(--font-mono)] text-[9px] tracking-[0.3em] text-white/30 mb-2"
              >
                SUBJECT
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full bg-[#0a0a0a] border border-white/20 px-4 py-3 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.08em] outline-none focus:border-white/50"
              >
                <option value="general">GENERAL ENQUIRIES</option>
                <option value="event-bookings">EVENT BOOKINGS</option>
                <option value="demo">DEMO SUBMISSION</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-[family-name:var(--font-mono)] text-[9px] tracking-[0.3em] text-white/30 mb-2"
              >
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full bg-[#0a0a0a] border border-white/20 px-4 py-3 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.08em] outline-none focus:border-white/50 resize-y min-h-[120px] placeholder:text-white/20"
                placeholder="YOUR MESSAGE..."
              />
            </div>

            <button type="submit" className="corner-bracket mt-2">
              TRANSMIT
              <span aria-hidden>→</span>
            </button>
          </form>

          <p className="mt-8 font-[family-name:var(--font-mono)] text-[8px] tracking-[0.12em] text-white/20">
            FORM IS UI-ONLY. CONNECT YOUR BACKEND OR FORM SERVICE TO ENABLE
            SUBMISSIONS.
          </p>
        </div>
      </section>
    </div>
  );
}
