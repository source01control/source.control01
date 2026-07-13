"use client";

import { SourceUnknownTypewriter } from "./SourceUnknownTypewriter";
import { useWhiteRabbitEnter } from "./WhiteRabbitPageEnter";

/** Header artist line — types in place during transition intro. */
export function WhiteRabbitArtist() {
  const { onTypeComplete } = useWhiteRabbitEnter();
  return <SourceUnknownTypewriter onComplete={onTypeComplete} />;
}
