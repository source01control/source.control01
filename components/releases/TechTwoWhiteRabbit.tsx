"use client";

import { useEffect, useRef, useState } from "react";
import { TechTwoSecretRabbit } from "./TechTwoSecretRabbit";
import { cn } from "@/lib/utils";

const MESSAGE = "follow the white rabbit.";
const DELAY_BEFORE_BLANK_MS = 12_000;
const BLANK_TO_TYPE_MS = 350;
const TYPE_INTERVAL_MS = 95;
const HOLD_AFTER_MESSAGE_MS = 2000;
const RAIN_HOLD_MS = 4000;
const FADE_MS = 400;

/** Bump when intro timing/logic changes so old session flags don’t skip the sequence. */
const INTRO_STARTED_KEY = "sc-tech-two-intro-started-at-v3";
const INTRO_DONE_KEY = "sc-tech-two-intro-done-v3";

type Phase = "waiting" | "blank" | "typing" | "rain" | "revealing" | "done";

type TechTwoWhiteRabbitProps = {
  children: React.ReactNode;
};

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function readIntroDone(): boolean {
  try {
    return sessionStorage.getItem(INTRO_DONE_KEY) === "1";
  } catch {
    return false;
  }
}

function markIntroDone(): void {
  try {
    sessionStorage.setItem(INTRO_DONE_KEY, "1");
  } catch {
    // ignore
  }
}

/** Session clock from first Tech Two visit — survives navigating away. */
function msUntilBlankSequence(): number {
  const now = Date.now();
  try {
    const raw = sessionStorage.getItem(INTRO_STARTED_KEY);
    const startedAt = raw ? Number(raw) : NaN;
    if (Number.isFinite(startedAt) && startedAt > 0) {
      return Math.max(0, DELAY_BEFORE_BLANK_MS - (now - startedAt));
    }
    sessionStorage.setItem(INTRO_STARTED_KEY, String(now));
  } catch {
    // ignore storage failures and fall through
  }
  return DELAY_BEFORE_BLANK_MS;
}

export function TechTwoWhiteRabbit({ children }: TechTwoWhiteRabbitProps) {
  const [phase, setPhase] = useState<Phase>("waiting");
  const [typed, setTyped] = useState("");
  const [cursorOn, setCursorOn] = useState(true);
  const timersRef = useRef<number[]>([]);

  const clearTimers = () => {
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
  };

  const schedule = (fn: () => void, ms: number) => {
    const id = window.setTimeout(fn, ms);
    timersRef.current.push(id);
    return id;
  };

  useEffect(() => {
    if (prefersReducedMotion()) {
      markIntroDone();
      setPhase("done");
      return;
    }

    if (readIntroDone()) {
      setPhase("done");
      return;
    }

    const delayMs = msUntilBlankSequence();

    schedule(() => {
      setPhase("blank");
      schedule(() => {
        setTyped("");
        setPhase("typing");
      }, BLANK_TO_TYPE_MS);
    }, delayMs);

    return clearTimers;
  }, []);

  useEffect(() => {
    if (phase !== "typing" && phase !== "rain") return;

    const blink = window.setInterval(() => {
      setCursorOn((value) => !value);
    }, 480);

    return () => window.clearInterval(blink);
  }, [phase]);

  useEffect(() => {
    if (phase !== "typing") return;

    if (typed.length >= MESSAGE.length) {
      const rainTimer = window.setTimeout(
        () => setPhase("rain"),
        HOLD_AFTER_MESSAGE_MS
      );
      return () => window.clearTimeout(rainTimer);
    }

    const typeTimer = window.setTimeout(() => {
      setTyped(MESSAGE.slice(0, typed.length + 1));
    }, TYPE_INTERVAL_MS);

    return () => window.clearTimeout(typeTimer);
  }, [phase, typed]);

  useEffect(() => {
    if (phase !== "rain") return;

    const revealTimer = window.setTimeout(() => {
      setPhase("revealing");
      window.setTimeout(() => {
        markIntroDone();
        setPhase("done");
      }, FADE_MS);
    }, RAIN_HOLD_MS);

    return () => window.clearTimeout(revealTimer);
  }, [phase]);

  useEffect(() => {
    const lockScroll =
      phase === "blank" ||
      phase === "typing" ||
      phase === "rain" ||
      phase === "revealing";
    if (!lockScroll) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [phase]);

  const showOverlay = phase !== "waiting" && phase !== "done";
  const showMessage = phase === "typing" || phase === "rain";

  return (
    <div className="tech-two-white-rabbit">
      <div
        className={cn(
          "tech-two-white-rabbit__page",
          (phase === "blank" || phase === "typing") &&
            "tech-two-white-rabbit__page--hidden",
          (phase === "blank" || phase === "typing" || phase === "rain") &&
            "tech-two-white-rabbit__page--content-hidden",
          (phase === "revealing" || phase === "done") &&
            "tech-two-white-rabbit__page--content-in"
        )}
      >
        {children}
      </div>

      {showOverlay ? (
        <div
          className={cn(
            "tech-two-white-rabbit__overlay",
            phase === "rain" && "tech-two-white-rabbit__overlay--clear",
            phase === "revealing" && "tech-two-white-rabbit__overlay--out"
          )}
          aria-hidden="true"
        >
          {showMessage ? (
            <p className="tech-two-white-rabbit__message">
              <span>{typed}</span>
              <span
                className={cn(
                  "tech-two-white-rabbit__cursor",
                  !cursorOn && "tech-two-white-rabbit__cursor--off"
                )}
              >
                ▌
              </span>
            </p>
          ) : null}
        </div>
      ) : null}

      <TechTwoSecretRabbit active={phase === "done"} />
    </div>
  );
}
