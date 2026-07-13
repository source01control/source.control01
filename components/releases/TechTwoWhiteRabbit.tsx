"use client";

import { useEffect, useState } from "react";
import { TechTwoSecretRabbit } from "./TechTwoSecretRabbit";
import { cn } from "@/lib/utils";

const MESSAGE = "follow the white rabbit.";
const DELAY_BEFORE_BLANK_MS = 3000;
const TYPE_INTERVAL_MS = 95;
const RAIN_HOLD_MS = 2400;
const FADE_MS = 1400;

type Phase = "waiting" | "blank" | "typing" | "rain" | "revealing" | "done";

type TechTwoWhiteRabbitProps = {
  children: React.ReactNode;
};

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function TechTwoWhiteRabbit({ children }: TechTwoWhiteRabbitProps) {
  const [phase, setPhase] = useState<Phase>("waiting");
  const [typed, setTyped] = useState("");
  const [cursorOn, setCursorOn] = useState(true);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setPhase("done");
      return;
    }

    const waitTimer = window.setTimeout(() => {
      setPhase("blank");
      window.setTimeout(() => setPhase("typing"), 350);
    }, DELAY_BEFORE_BLANK_MS);

    return () => window.clearTimeout(waitTimer);
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
      const rainTimer = window.setTimeout(() => setPhase("rain"), 450);
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
      window.setTimeout(() => setPhase("done"), FADE_MS);
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
