"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const SOURCE_UNKNOWN_MESSAGE = "Source Unknown.";
const TYPE_INTERVAL_MS = 95;
const START_DELAY_MS = 500;

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

type SourceUnknownTypewriterProps = {
  /** Show finished text immediately (no typing). */
  instant?: boolean;
  className?: string;
  onComplete?: () => void;
};

export function SourceUnknownTypewriter({
  instant = false,
  className,
  onComplete,
}: SourceUnknownTypewriterProps) {
  const [typed, setTyped] = useState(instant ? SOURCE_UNKNOWN_MESSAGE : "");
  const [cursorOn, setCursorOn] = useState(true);
  const [ready, setReady] = useState(instant);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;
  const completedRef = useRef(false);

  const done = typed.length >= SOURCE_UNKNOWN_MESSAGE.length;

  useEffect(() => {
    completedRef.current = false;

    if (instant || prefersReducedMotion()) {
      setTyped(SOURCE_UNKNOWN_MESSAGE);
      setReady(true);
      return;
    }

    setTyped("");
    setReady(false);
    const start = window.setTimeout(() => setReady(true), START_DELAY_MS);
    return () => window.clearTimeout(start);
  }, [instant]);

  useEffect(() => {
    if (!ready) return;

    const blink = window.setInterval(() => {
      setCursorOn((value) => !value);
    }, 480);

    return () => window.clearInterval(blink);
  }, [ready]);

  useEffect(() => {
    if (instant || !ready || done) return;

    const typeTimer = window.setTimeout(() => {
      setTyped(SOURCE_UNKNOWN_MESSAGE.slice(0, typed.length + 1));
    }, TYPE_INTERVAL_MS);

    return () => window.clearTimeout(typeTimer);
  }, [instant, ready, typed, done]);

  useEffect(() => {
    if (!done || !ready || completedRef.current) return;
    completedRef.current = true;
    onCompleteRef.current?.();
  }, [done, ready]);

  return (
    <p
      className={cn(
        "release-detail-artist source-unknown-typewriter",
        className
      )}
      aria-label={SOURCE_UNKNOWN_MESSAGE}
    >
      <span>{typed}</span>
      <span
        className={cn(
          "source-unknown-typewriter__cursor",
          !cursorOn && "source-unknown-typewriter__cursor--off"
        )}
        aria-hidden="true"
      >
        ▌
      </span>
    </p>
  );
}
