"use client";

import { cn } from "@/lib/utils";

type SignalLoaderProps = {
  className?: string;
  label?: string;
};

export function SignalLoader({
  className,
  label = "SIGNAL ACQUISITION",
}: SignalLoaderProps) {
  return (
    <div className={cn("signal-loader", className)} role="status" aria-label={label}>
      <div className="signal-loader__bar">
        <div className="signal-loader__fill" />
      </div>
      <p className="signal-loader__label">{label}</p>
    </div>
  );
}
