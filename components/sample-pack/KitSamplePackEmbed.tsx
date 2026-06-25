"use client";

import { useEffect, useRef } from "react";
import {
  SAMPLE_PACK_KIT_SCRIPT_URL,
  SAMPLE_PACK_KIT_UID,
} from "@/lib/sample-pack";

export function KitSamplePackEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scriptId = `kit-sample-pack-${SAMPLE_PACK_KIT_UID}`;
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.async = true;
    script.src = SAMPLE_PACK_KIT_SCRIPT_URL;
    script.setAttribute("data-uid", SAMPLE_PACK_KIT_UID);

    container.appendChild(script);

    return () => {
      script.remove();
      container
        .querySelectorAll("form, iframe, .formkit-form")
        .forEach((node) => node.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="kit-sample-pack-embed"
      data-uid={SAMPLE_PACK_KIT_UID}
    />
  );
}
