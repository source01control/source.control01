"use client";

import { useEffect, useRef, useState } from "react";
import {
  ensureWhiteRabbitVeil,
  markWhiteRabbitEnterFade,
  WHITE_RABBIT_FADE_MS,
} from "@/lib/white-rabbit-transition";

export const WHITE_RABBIT_TRANSITION_SRC =
  "/videos/releases/white-rabbit-transition.mp4";

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

    let fadeTimer: number | undefined;
    let fadeStarted = false;

    const finish = () => {
      if (finishedRef.current) return;
      finishedRef.current = true;
      markWhiteRabbitEnterFade();
      ensureWhiteRabbitVeil();
      onCompleteRef.current();
    };

    const beginFadeOut = () => {
      if (fadeStarted || finishedRef.current) return;
      fadeStarted = true;
      ensureWhiteRabbitVeil();
      setFading(true);
      fadeTimer = window.setTimeout(finish, WHITE_RABBIT_FADE_MS);
    };

    const onTimeUpdate = () => {
      if (!Number.isFinite(video.duration) || video.duration <= 0) return;
      const remaining = video.duration - video.currentTime;
      if (remaining <= WHITE_RABBIT_FADE_MS / 1000) {
        beginFadeOut();
      }
    };

    const onEnded = () => beginFadeOut();
    const onError = () => finish();

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("ended", onEnded);
    video.addEventListener("error", onError);
    video.currentTime = 0;
    video.muted = false;

    const attempt = video.play();
    if (attempt) {
      void attempt.catch(() => {
        video.muted = true;
        void video.play().catch(() => finish());
      });
    }

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("error", onError);
      if (fadeTimer) window.clearTimeout(fadeTimer);
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
