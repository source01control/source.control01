"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { homepageNav } from "@/lib/homepage";
import { useHeaderScroll } from "@/lib/use-header-scroll";
import { SiteLogo } from "@/components/SiteLogo";
import { cn } from "@/lib/utils";

export function HomepageHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useHeaderScroll();

  return (
    <>
      <header
        className={cn(
          "site-header-bar absolute inset-x-0 top-0 z-[150] transition-all duration-500",
          scrolled && !menuOpen && "site-header-bar--transparent"
        )}
      >
        <div className="flex w-full items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10 h-20 sm:h-24">
          <SiteLogo />

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="group flex items-center gap-3 sm:gap-4 py-2"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className="font-[family-name:var(--font-mono)] text-[13px] sm:text-[15px] tracking-[0.32em] uppercase text-white/80 transition-colors duration-300 group-hover:text-white">
              MENU
            </span>
            <span className="flex flex-col gap-2 sm:gap-2.5" aria-hidden="true">
              <span
                className={cn(
                  "block h-px w-10 sm:w-12 bg-white transition-all duration-300 origin-center",
                  menuOpen && "translate-y-[10px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-px w-10 sm:w-12 bg-white/50 transition-all duration-300",
                  menuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-px w-10 sm:w-12 bg-white transition-all duration-300 origin-center",
                  menuOpen && "-translate-y-[10px] -rotate-45"
                )}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-black"
          >
            <nav
              className="flex flex-col justify-center h-full px-8 gap-6"
              aria-label="Primary"
            >
              {homepageNav.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl tracking-[0.06em] uppercase text-white/80 hover:text-white transition-colors"
                  >
                    {item.label.toUpperCase()}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
