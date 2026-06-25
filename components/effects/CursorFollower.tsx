"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function CursorFollower() {
  const glowRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const ring = ringRef.current;
    if (!glow || !ring) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReduced || isTouch) return;

    let x = 0;
    let y = 0;
    let glowX = 0;
    let glowY = 0;
    let ringX = 0;
    let ringY = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const animate = () => {
      glowX += (x - glowX) * 0.08;
      glowY += (y - glowY) * 0.08;
      ringX += (x - ringX) * 0.15;
      ringY += (y - ringY) * 0.15;

      glow.style.transform = `translate(${glowX}px, ${glowY}px)`;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;

      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      className="cursor-follower pointer-events-none fixed inset-0 z-[200] hidden md:block"
      aria-hidden
    >
      <div ref={glowRef} className="cursor-follower__glow" />
      <div ref={ringRef} className="cursor-follower__ring" />
    </div>
  );
}
