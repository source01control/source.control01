"use client";

import { SmoothScroll } from "@/components/layout/SmoothScroll";

export function Providers({ children }: { children: React.ReactNode }) {
  return <SmoothScroll>{children}</SmoothScroll>;
}
