"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const MESSAGE = "Source Unknown.";
const TYPE_INTERVAL_MS = 95;
const START_DELAY_MS = 600;

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function SourceUnknownTypewriter() {
  const [typed, setTyped] = useState("");
  const [cursorOn, setCursorOn] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setTyped(MESSAGE);
      setReady(true);
      return;
    }

    const start = window.setTimeout(() => setReady(true), START_DELAY_MS);
    return () => window.clearTimeout(start);
  }, []);

  useEffect(() => {
    if (!ready) return;

    const blink = window.setInterval(() => {
      setCursorOn((value) => !value);
    }, 480);

    return () => window.clearInterval(blink);
  }, [ready]);

  useEffect(() => {
    if (!ready || typed.length >= MESSAGE.length) return;

    const typeTimer = window.setTimeout(() => {
      setTyped(MESSAGE.slice(0, typed.length + 1));
    }, TYPE_INTERVAL_MS);

    return () => window.clearTimeout(typeTimer);
  }, [ready, typed]);

  return (
    <p className="release-detail-artist source-unknown-typewriter" aria-label={MESSAGE}>
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
