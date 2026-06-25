"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

type EventPhotoCarouselProps = {
  photos: string[];
  altPrefix: string;
};

export function EventPhotoCarousel({
  photos,
  altPrefix,
}: EventPhotoCarouselProps) {
  const [index, setIndex] = useState(0);
  const total = photos.length;

  const goPrev = useCallback(() => {
    setIndex((current) => (current - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    setIndex((current) => (current + 1) % total);
  }, [total]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goPrev, goNext]);

  if (total === 0) return null;

  const currentPhoto = photos[index];

  return (
    <div className="event-gallery">
      <div className="event-gallery__frame">
        <Image
          key={currentPhoto}
          src={currentPhoto}
          alt={`${altPrefix} photo ${index + 1} of ${total}`}
          fill
          unoptimized
          className="object-cover"
          sizes="(max-width: 1023px) 50vw, 18rem"
          priority={index === 0}
        />
      </div>

      <div className="event-gallery__controls">
        <button
          type="button"
          className="event-gallery__button"
          onClick={goPrev}
          aria-label="Previous photo"
        >
          <ChevronLeft aria-hidden="true" />
        </button>

        <p className="event-gallery__count font-[family-name:var(--font-mono)]">
          {index + 1} / {total}
        </p>

        <button
          type="button"
          className="event-gallery__button"
          onClick={goNext}
          aria-label="Next photo"
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
