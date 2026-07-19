import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { journalPosts } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function JournalArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <article className="home-shell w-full min-h-screen bg-[#111111]">
      <header className="border-b border-white/20 pt-24 sm:pt-28 lg:pt-32">
        <div className="px-5 sm:px-8 lg:px-10 py-12 sm:py-16 lg:py-20 max-w-4xl">
          <Link
            href="/journal"
            className="link-arrow mb-8 inline-flex"
          >
            FIELD NOTES
          </Link>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="font-[family-name:var(--font-mono)] text-[8px] tracking-[0.3em] border border-white/15 px-2 py-0.5 text-white/40">
              {post.category}
            </span>
            <span className="font-[family-name:var(--font-mono)] text-[8px] tracking-[0.2em] text-white/25">
              {post.publishedAt.replace(/-/g, ".")} · {post.readTime}
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.88] tracking-[0.03em]">
            {post.title}
          </h1>
          <p className="mt-8 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.06em] leading-relaxed text-white/45">
            {post.excerpt}
          </p>
        </div>
      </header>

      <div className="px-5 sm:px-8 lg:px-10 py-12 sm:py-16 lg:py-20 max-w-3xl border-b border-white/20">
        <div className="space-y-8">
          {post.body.map((paragraph, i) => (
            <p
              key={i}
              className="font-[family-name:var(--font-mono)] text-[16px] sm:text-[17px] tracking-[0.03em] leading-[1.9] text-white/55"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {post.interview && post.interview.length > 0 ? (
          <div className="mt-14 sm:mt-16 space-y-12 sm:space-y-14">
            {post.interview.map((item, i) => (
              <div key={i} className="space-y-4">
                <h2 className="font-[family-name:var(--font-mono)] text-[17px] sm:text-[18px] tracking-[0.04em] leading-relaxed text-white/80">
                  {item.question}
                </h2>
                <p className="font-[family-name:var(--font-mono)] text-[16px] sm:text-[17px] tracking-[0.03em] leading-[1.9] text-white/55">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
