"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/data";
import { useHeaderScroll } from "@/lib/use-header-scroll";
import { SiteLogo } from "@/components/SiteLogo";
import { cn } from "@/lib/utils";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useHeaderScroll();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "site-header-bar fixed top-0 left-0 right-0 z-[150] transition-all duration-500",
          scrolled && !menuOpen && "site-header-bar--transparent"
        )}
      >
        <motion.div className="flex w-full items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10 h-20 sm:h-24">
          <SiteLogo onClick={() => setMenuOpen(false)} />

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
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
                  "block h-px w-10 sm:w-12 bg-white/60 transition-all duration-300",
                  menuOpen && "opacity-0 scale-x-0"
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
        </motion.div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[140] bg-black flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-black to-[#0d1117] opacity-90" />

            <div className="relative flex-1 flex flex-col justify-center home-shell w-full px-5 sm:px-8 lg:px-10">
              <ul className="space-y-2 sm:space-y-4">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: 0.05 + i * 0.06, duration: 0.5 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="group block font-[family-name:var(--font-display)] text-[clamp(3rem,12vw,8rem)] leading-[0.85] tracking-[0.04em] text-white/70 hover:text-white transition-colors duration-300"
                    >
                      <span className="inline-block group-hover:translate-x-2 transition-transform duration-300">
                        {link.label}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
