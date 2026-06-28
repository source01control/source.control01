"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { featuredRelease } from "@/lib/homepage";
import { ReleaseArchiveCard } from "@/components/releases/ReleaseArchiveCard";
import { SampleVaultCard } from "./SampleVaultCard";

const heroEase = [0.22, 1, 0.36, 1] as const;

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: heroEase },
  },
};

export function HomepageHero() {
  return (
    <section
      id="about"
      className="relative border-b border-white/15 bg-black"
      aria-label="Hero"
    >
      <div className="hero-shell !pb-0">
        <motion.div
          className="hero-brand"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
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

            <motion.div className="hero-brand-visual" variants={itemVariants}>
              <Image
                src="/images/website-fx/hero-tower.webp"
                alt="Transmission tower at dusk"
                width={1024}
                height={768}
                priority
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <section
        id="releases"
        className="releases-grid w-full px-4 sm:px-6 lg:px-4 pt-12 sm:pt-16 lg:pt-20 pb-[60px]"
        aria-label="Latest Release"
      >
        <ReleaseArchiveCard release={featuredRelease} index={0} latest />
        <SampleVaultCard />
      </section>
    </section>
  );
}
