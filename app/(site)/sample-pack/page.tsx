import type { Metadata } from "next";
import Image from "next/image";
import { KitSamplePackEmbed } from "@/components/sample-pack/KitSamplePackEmbed";
import { SAMPLE_PACK_ARTWORK } from "@/lib/sample-pack";

export const metadata: Metadata = {
  title: "Sample Pack",
  description:
    "Subscribe to the SOURCE CONTROL mailing list and get instant access to a free sample pack.",
  openGraph: {
    title: "Source Control Sample Pack | SOURCE CONTROL",
    description: "Subscribe to get free samples from SOURCE CONTROL.",
    type: "website",
    images: [{ url: SAMPLE_PACK_ARTWORK, alt: "Source Control Sample Pack artwork" }],
  },
};

export default function SamplePackPage() {
  return (
    <article className="relative w-full overflow-x-hidden bg-black">
      <div className="release-detail-header-offset" aria-hidden="true" />

      <section
        className="release-detail-panel py-12 sm:py-16 lg:py-20"
        aria-label="Sample pack signup"
      >
        <div className="sample-pack-page w-full px-4 sm:px-6 lg:px-4">
          <div className="sample-pack-page__column">
            <div className="release-archive-artwork">
              <Image
                src={SAMPLE_PACK_ARTWORK}
                alt="Source Control Sample Pack Vol. 1 artwork"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            <KitSamplePackEmbed />
          </div>
        </div>
      </section>
    </article>
  );
}
