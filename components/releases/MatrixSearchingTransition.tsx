"use client";

import { useEffect, useRef, useState } from "react";
import {
  ensureWhiteRabbitVeil,
  markWhiteRabbitEnterFade,
} from "@/lib/white-rabbit-transition";

export const WHITE_RABBIT_TRANSITION_SRC =
  "/videos/releases/white-rabbit-transition.mp4";

/** Brief black hold after the clip ends, before route change. */
const POST_END_HOLD_MS = 280;

type MatrixSearchingTransitionProps = {
  active: boolean;
  onComplete: () => void;
};

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function MatrixSearchingTransition({
  active,
  onComplete,
}: MatrixSearchingTransitionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;
  const finishedRef = useRef(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (!active) {
      finishedRef.current = false;
      setFading(false);
      const video = videoRef.current;
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
      return;
    }

    if (prefersReducedMotion()) {
      markWhiteRabbitEnterFade();
      onCompleteRef.current();
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const video = videoRef.current;
    if (!video) {
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }

    let endTimer: number | undefined;
    let safetyTimer: number | undefined;
    let closing = false;

    const finish = () => {
      if (finishedRef.current) return;
      finishedRef.current = true;
      markWhiteRabbitEnterFade();
      ensureWhiteRabbitVeil();
      onCompleteRef.current();
    };

    const closeAfterPlayback = () => {
      if (closing || finishedRef.current) return;
      closing = true;
      ensureWhiteRabbitVeil();
      setFading(true);
      endTimer = window.setTimeout(finish, POST_END_HOLD_MS);
    };

    const onEnded = () => closeAfterPlayback();
    const onError = () => finish();

    const armSafetyFromDuration = () => {
      if (safetyTimer) window.clearTimeout(safetyTimer);
      if (!Number.isFinite(video.duration) || video.duration <= 0) return;
      // Fallback if `ended` never fires on some mobile browsers
      safetyTimer = window.setTimeout(
        () => closeAfterPlayback(),
        Math.ceil(video.duration * 1000) + 250
      );
    };

    const onLoadedMetadata = () => armSafetyFromDuration();

    video.addEventListener("ended", onEnded);
    video.addEventListener("error", onError);
    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.currentTime = 0;
    video.muted = false;

    if (video.readyState >= 1) armSafetyFromDuration();

    const attempt = video.play();
    if (attempt) {
      void attempt.catch(() => {
        video.muted = true;
        void video.play().catch(() => finish());
      });
    }

    return () => {
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("error", onError);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      if (endTimer) window.clearTimeout(endTimer);
      if (safetyTimer) window.clearTimeout(safetyTimer);
      video.pause();
      document.body.style.overflow = previousOverflow;
    };
  }, [active]);

  return (
    <div
      className={
        active
          ? fading
            ? "matrix-search-transition matrix-search-transition--fading"
            : "matrix-search-transition"
          : "matrix-search-transition matrix-search-transition--preload"
      }
      role="presentation"
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        className="matrix-search-transition__video"
        src={WHITE_RABBIT_TRANSITION_SRC}
        playsInline
        preload="auto"
      />
    </div>
  );
}
