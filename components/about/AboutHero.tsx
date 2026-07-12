"use client";

import { motion } from "framer-motion";
import { aboutBody } from "@/lib/about";
import { AboutHeroVisual } from "./AboutHeroVisual";

const heroEase = [0.22, 1, 0.36, 1] as const;

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: heroEase },
  },
};

export function AboutHero() {
  return (
    <section
      className="relative border-b border-white/15 bg-black"
      aria-label="About"
    >
      <div className="hero-shell !pb-0">
        <motion.div
          className="hero-brand"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12, delayChildren: 0.1 },
            },
          }}
        >
          <div className="hero-brand-row">
            <div className="hero-brand-copy">
              <motion.h1
                className="hero-title text-white"
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.9, ease: heroEase },
                  },
                }}
              >
                <span className="block">SOURCE</span>
                <span className="block">CONTROL</span>
              </motion.h1>

              <motion.p className="hero-tagline" variants={itemVariants}>
                continuous evolution / Underground Electronic Music / UK
              </motion.p>
            </div>

            <motion.div
              className="hero-brand-visual about-hero-visual"
              variants={itemVariants}
            >
              <AboutHeroVisual />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div
        className="about-body w-full px-4 sm:px-6 lg:px-8 xl:px-10 pt-12 sm:pt-16 lg:pt-20 pb-20 lg:pb-28"
        aria-label="About content"
      >
        <p className="about-body__text">{aboutBody}</p>
      </div>
    </section>
  );
}
