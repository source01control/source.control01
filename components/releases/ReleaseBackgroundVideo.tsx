"use client";

import { useEffect } from "react";

import { cn } from "@/lib/utils";

type ReleaseBackgroundVideoProps = {
  src: string;
  monochrome?: boolean;
};

export function ReleaseBackgroundVideo({
  src,
  monochrome = false,
}: ReleaseBackgroundVideoProps) {
  useEffect(() => {
    document.body.classList.add("release-page-with-video");

    return () => {
      document.body.classList.remove("release-page-with-video");
    };
  }, []);

  return (
    <div className="release-detail-bg-video" aria-hidden="true">
      <video
        src={encodeURI(src)}
        autoPlay
        loop
        muted
        playsInline
        className={cn(
          "release-detail-bg-video__media",
          monochrome && "release-detail-bg-video__media--monochrome"
        )}
      />
    </div>
  );
}
