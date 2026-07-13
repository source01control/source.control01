"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { WHITE_RABBIT_HREF } from "@/lib/secret-release";
import { cn } from "@/lib/utils";

const RABBIT_SRC = "/images/releases/white-rabbit-cutout.png";

const SPOTS = [
  { top: "88%", left: "8%" }, // bottom left (start)
  { top: "12%", left: "8%" }, // top left
  { top: "12%", left: "92%" }, // top right
  { top: "88%", left: "92%" }, // bottom right
] as const;

type TechTwoSecretRabbitProps = {
  active: boolean;
};

export function TechTwoSecretRabbit({ active }: TechTwoSecretRabbitProps) {
  const [spotIndex, setSpotIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [flashing, setFlashing] = useState(false);

  useEffect(() => {
    if (!active) return;

    let cancelled = false;
    const timers: number[] = [];
    let hop = 0;

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timers.push(window.setTimeout(resolve, ms));
      });

    const runHop = async (index: number) => {
      if (cancelled) return;
      setSpotIndex(index);
      setVisible(true);
      setFlashing(true);
      await wait(180);
      if (cancelled) return;
      setFlashing(false);
      await wait(900);
      if (cancelled) return;
      setFlashing(true);
      await wait(220);
      if (cancelled) return;
      setFlashing(false);
      await wait(700);
      if (cancelled) return;
      setVisible(false);
      await wait(4000);
    };

    void (async () => {
      await wait(700);
      while (!cancelled) {
        await runHop(hop % SPOTS.length);
        hop += 1;
      }
    })();

    return () => {
      cancelled = true;
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, [active]);

  if (!active) return null;

  const spot = SPOTS[spotIndex] ?? SPOTS[0];

  return (
    <Link
      href={WHITE_RABBIT_HREF}
      className={cn(
        "tech-two-secret-rabbit",
        visible && "tech-two-secret-rabbit--visible",
        flashing && "tech-two-secret-rabbit--flash"
      )}
      style={{ top: spot.top, left: spot.left }}
      aria-label="White rabbit"
    >
      {/* White strokes on transparent PNG */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={RABBIT_SRC}
        alt=""
        width={120}
        height={146}
        className="tech-two-secret-rabbit__image"
      />
    </Link>
  );
}
