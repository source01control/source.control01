"use client";

import { useEffect, useRef, useState } from "react";
import { getTrackPreviewUrl, type Release } from "@/lib/releases";
import type { DigitalDownloadFormat, StoreDownloadOption } from "@/lib/store";
import { getTrackPriceLabel } from "@/lib/store";
import { StoreFormatTabs } from "./StoreFormatTabs";
import { StoreMatrixWaveform, type MatrixRainVariant } from "./StoreMatrixWaveform";
import { cn } from "@/lib/utils";

type StoreTrackDownloadProps = {
  release: Release;
  downloadFormats: StoreDownloadOption[];
  selectedFormat: DigitalDownloadFormat;
  onFormatChange: (format: DigitalDownloadFormat) => void;
};

function trackCartKey(trackNumber: string, format: DigitalDownloadFormat): string {
  return `${trackNumber}-${format}`;
}

const matrixWaveformVariants: Partial<Record<string, MatrixRainVariant>> = {
  "sc-005": "matrix",
  "sc-001": "mono",
};

export function StoreTrackDownload({
  release,
  downloadFormats,
  selectedFormat,
  onFormatChange,
}: StoreTrackDownloadProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);
  const [previewError, setPreviewError] = useState<string | null>(null);
  const [cartTracks, setCartTracks] = useState<Set<string>>(new Set());
  const [releaseInCart, setReleaseInCart] = useState(false);
  const [activePreviewSrc, setActivePreviewSrc] = useState<string | null>(null);
  const matrixRainVariant = matrixWaveformVariants[release.id];
  const showMatrixWaveform = Boolean(matrixRainVariant);

  const selectedReleaseOption = downloadFormats.find(
    (option) => option.format === selectedFormat
  );
  const formatLabel = selectedFormat.toUpperCase();

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      setPlayingTrack(null);
      setActivePreviewSrc(null);
    };
    const handleError = () => {
      setPlayingTrack(null);
      setActivePreviewSrc(null);
      setPreviewError("Preview clip not available yet.");
    };

    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);
    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
    };
  }, []);

  const togglePreview = async (trackNumber: string, trackTitle: string, previewUrl?: string) => {
    const audio = audioRef.current;
    if (!audio) return;

    setPreviewError(null);

    if (playingTrack === trackNumber) {
      audio.pause();
      setPlayingTrack(null);
      setActivePreviewSrc(null);
      return;
    }

    const src = getTrackPreviewUrl(release.id, trackTitle, previewUrl);
    audio.pause();
    audio.src = src;

    try {
      await audio.play();
      setActivePreviewSrc(src);
      setPlayingTrack(trackNumber);
    } catch {
      setPlayingTrack(null);
      setActivePreviewSrc(null);
      setPreviewError("Preview clip not available yet.");
    }
  };

  const toggleTrackCart = (trackNumber: string) => {
    const key = trackCartKey(trackNumber, selectedFormat);
    setCartTracks((current) => {
      const next = new Set(current);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return (
    <section
      className={cn(
        "store-track-download",
        showMatrixWaveform && "store-track-download--matrix"
      )}
      aria-label="Download tracks"
    >
      <audio ref={audioRef} preload="none" className="sr-only" />

      <div className="store-track-download__header">
        <h2 className="store-track-download__title font-[family-name:var(--font-display)] uppercase text-white">
          Download {release.tracklist.length} Tracks
        </h2>
        <StoreFormatTabs
          options={downloadFormats}
          selected={selectedFormat}
          onSelect={onFormatChange}
        />
      </div>

      {previewError ? (
        <p className="store-track-download__notice font-[family-name:var(--font-mono)]">
          {previewError}
        </p>
      ) : null}

      <ol className="store-track-download__list">
        {release.tracklist.map((track, index) => {
          const cartKey = trackCartKey(track.number, selectedFormat);
          const inCart = cartTracks.has(cartKey);
          const isPlaying = playingTrack === track.number;

          return (
            <li
              key={track.number}
              className={cn(
                "store-track-download__row",
                showMatrixWaveform && isPlaying && "store-track-download__row--matrix"
              )}
            >
              <button
                type="button"
                className={cn(
                  "store-track-download__play font-[family-name:var(--font-mono)]",
                  isPlaying && "store-track-download__play--active"
                )}
                onClick={() =>
                  void togglePreview(track.number, track.title, track.previewUrl)
                }
                aria-label={
                  isPlaying ? `Pause ${track.title}` : `Preview ${track.title}`
                }
              >
                {isPlaying ? "❚❚" : "▶"}
              </button>

              <div className="store-track-download__meta">
                <p className="store-track-download__track font-[family-name:var(--font-mono)]">
                  <span>{index + 1}.</span> {track.title}
                  <span className="store-track-download__artist">
                    {" "}
                    — {release.artist}
                  </span>
                </p>
                {track.duration ? (
                  <p className="store-track-download__duration font-[family-name:var(--font-mono)]">
                    {track.duration}
                  </p>
                ) : null}
              </div>

              {showMatrixWaveform && isPlaying && activePreviewSrc ? (
                <StoreMatrixWaveform
                  audioRef={audioRef}
                  previewSrc={activePreviewSrc}
                  rainVariant={matrixRainVariant}
                />
              ) : null}

              <button
                type="button"
                className={cn(
                  "store-track-download__buy font-[family-name:var(--font-mono)]",
                  inCart && "store-track-download__buy--in-cart"
                )}
                onClick={() => toggleTrackCart(track.number)}
              >
                {inCart
                  ? "IN CART"
                  : `${formatLabel} TRACK ${getTrackPriceLabel(selectedFormat)}`}
              </button>
            </li>
          );
        })}
      </ol>

      <div className="store-track-download__footer">
        <p className="store-track-download__release-label font-[family-name:var(--font-mono)] uppercase">
          {formatLabel} release
        </p>
        <p className="store-track-download__release-price font-[family-name:var(--font-mono)]">
          {selectedReleaseOption?.priceLabel}
        </p>
        <button
          type="button"
          className={cn(
            "store-track-download__basket font-[family-name:var(--font-mono)]",
            releaseInCart && "store-track-download__basket--in-cart"
          )}
          onClick={() => setReleaseInCart((value) => !value)}
        >
          {releaseInCart ? "IN BASKET" : "ADD TO BASKET"}
        </button>
      </div>
    </section>
  );
}
