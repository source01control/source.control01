import type { Metadata } from "next";
import Link from "next/link";
import { journalPosts } from "@/lib/data";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "SOURCE CONTROL signal log — field reports, artist profiles, and underground culture.",
};

export default function JournalPage() {
  return (
    <div className="home-shell w-full">
      <PageHeader
        title="SIGNAL LOG"
        subtitle="Brutalist editorial publication. Field reports from the underground grid."
        label="JOURNAL"
      />

      <section className="border-b border-white/20">
        {journalPosts.map((post, i) => (
          <article
            key={post.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 px-5 sm:px-8 lg:px-10 py-10 sm:py-14 border-t border-white/20 first:border-t-0 hover:bg-white/[0.02] transition-colors group"
          >
            <div className="lg:col-span-1">
              <p className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.35em] text-white/25">
                {String(i + 1).padStart(2, "0")}
              </p>
            </div>
            <div className="lg:col-span-2">
              <span className="inline-block font-[family-name:var(--font-mono)] text-[8px] tracking-[0.3em] border border-white/15 px-2 py-0.5 text-white/40">
                {post.category}
              </span>
              <p className="mt-4 font-[family-name:var(--font-mono)] text-[8px] tracking-[0.15em] text-white/25">
                {post.publishedAt.replace(/-/g, ".")}
              </p>
              <p className="font-[family-name:var(--font-mono)] text-[8px] tracking-[0.15em] text-white/20">
                {post.readTime}
              </p>
            </div>
            <div className="lg:col-span-9">
              <Link href={`/journal/${post.slug}`}>
                <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl tracking-[0.04em] leading-[0.9] group-hover:translate-x-0.5 transition-transform duration-200">
                  {post.title}
                </h2>
                <p className="mt-4 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.04em] leading-relaxed text-white/45 max-w-2xl">
                  {post.excerpt}
                </p>
                <p className="mt-6 link-arrow">READ ENTRY</p>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
