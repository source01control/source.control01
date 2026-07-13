"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  clearWhiteRabbitEnterIntent,
  ensureWhiteRabbitVeil,
  fadeOutWhiteRabbitVeil,
  hasWhiteRabbitEnterIntent,
  removeWhiteRabbitVeil,
  WHITE_RABBIT_ENTER_QUERY,
} from "@/lib/white-rabbit-transition";

/** Hold after typing finishes, then reveal the rest of the page. */
const PAGE_REVEAL_AFTER_TYPE_MS = 2500;

type WhiteRabbitEnterContextValue = {
  /** True once artwork/title/etc should be visible */
  pageRevealed: boolean;
  /** Came in via rabbit transition */
  usedTransition: boolean;
  /** Called when in-place Source Unknown typing finishes */
  onTypeComplete?: () => void;
};

const WhiteRabbitEnterContext =
  createContext<WhiteRabbitEnterContextValue>({
    pageRevealed: true,
    usedTransition: false,
  });

export function useWhiteRabbitEnter() {
  return useContext(WhiteRabbitEnterContext);
}

type WhiteRabbitPageEnterProps = {
  children: React.ReactNode;
};

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

type Phase = "boot" | "intro" | "page";

export function WhiteRabbitPageEnter({ children }: WhiteRabbitPageEnterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const fromQuery = searchParams.get(WHITE_RABBIT_ENTER_QUERY) === "1";

  const shouldEnter =
    !prefersReducedMotion() &&
    (fromQuery || hasWhiteRabbitEnterIntent());

  const [phase, setPhase] = useState<Phase>(shouldEnter ? "boot" : "page");
  const [usedTransition] = useState(shouldEnter);
  const revealedRef = useRef(false);
  const bootStartedRef = useRef(false);

  useEffect(() => {
    if (!shouldEnter) {
      removeWhiteRabbitVeil();
      clearWhiteRabbitEnterIntent();
      setPhase("page");
      return;
    }

    if (bootStartedRef.current) return;
    bootStartedRef.current = true;

    ensureWhiteRabbitVeil();
    document.body.style.overflow = "hidden";

    void fadeOutWhiteRabbitVeil(400).then(() => {
      setPhase("intro");
    });

    return () => {
      document.body.style.overflow = "";
    };
  }, [shouldEnter]);

  const onTypeComplete = useCallback(() => {
    if (revealedRef.current) return;
    window.setTimeout(() => {
      if (revealedRef.current) return;
      revealedRef.current = true;
      clearWhiteRabbitEnterIntent();
      document.body.style.overflow = "";
      router.replace(pathname, { scroll: false });
      setPhase("page");
    }, PAGE_REVEAL_AFTER_TYPE_MS);
  }, [pathname, router]);

  const pageRevealed = phase === "page";

  return (
    <WhiteRabbitEnterContext.Provider
      value={{
        pageRevealed,
        usedTransition,
        onTypeComplete: usedTransition && phase === "intro" ? onTypeComplete : undefined,
      }}
    >
      <div
        className={cn(
          "white-rabbit-page-enter",
          phase === "boot" && "white-rabbit-page-enter--boot",
          phase === "intro" && "white-rabbit-page-enter--intro",
          phase === "page" && usedTransition && "white-rabbit-page-enter--revealed",
          phase === "page" && !usedTransition && "white-rabbit-page-enter--ready"
        )}
      >
        {phase === "boot" ? (
          <div className="white-rabbit-page-enter__boot" aria-hidden="true" />
        ) : (
          children
        )}
      </div>
    </WhiteRabbitEnterContext.Provider>
  );
}
