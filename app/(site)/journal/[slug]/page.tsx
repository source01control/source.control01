import type { Metadata } from "next";
import Image from "next/image";
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

function formatPublishedDate(iso: string): string {
  const date = new Date(`${iso}T12:00:00`);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default async function JournalArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <article className="field-notes-page field-notes-article w-full min-h-screen">
      <div className="field-notes-article__top">
        <Link href="/journal" className="field-notes-back">
          <span aria-hidden="true">←</span> Field Notes
        </Link>

        <h1 className="field-notes-article__title">{post.title}</h1>
        <p className="field-notes-article__deck">{post.excerpt}</p>
      </div>

      {post.cover ? (
        <div className="field-notes-article__hero">
          <div className="field-notes-article__hero-frame">
            <Image
              src={post.cover.url}
              alt={post.cover.alt}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      ) : null}

      <div className="field-notes-article__main">
        <aside className="field-notes-article__meta" aria-label="Article details">
          <div className="field-notes-article__meta-block">
            <p className="field-notes-article__meta-label">Words</p>
            <p className="field-notes-article__meta-value">Source Control</p>
          </div>
          <div className="field-notes-article__meta-block">
            <p className="field-notes-article__meta-label">Published</p>
            <p className="field-notes-article__meta-value">
              {formatPublishedDate(post.publishedAt)}
            </p>
          </div>
        </aside>

        <div className="field-notes-article__content">
          <div className="field-notes-article__intro">
            {post.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {post.interview && post.interview.length > 0 ? (
            <div className="field-notes-interview">
              {post.interview.map((item, i) => (
                <div key={i} className="field-notes-interview__item">
                  <h2>{item.question}</h2>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
