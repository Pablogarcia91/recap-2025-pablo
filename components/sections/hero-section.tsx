"use client";

import { useRef } from "react";
import { reviewContent } from "@/lib/content";
import { motion, useInView, cubicBezier } from "framer-motion";

const smoothEasing = cubicBezier(0.22, 1, 0.36, 1);

interface HeroSectionProps {
  showScrollIndicator?: boolean;
}

export function HeroSection({ showScrollIndicator = true }: HeroSectionProps) {
  const { hero } = reviewContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center px-6 py-16"
    >
      {/* Main content */}
      <div className="mx-auto max-w-4xl text-center">
        {/* Title with decorative lines */}
        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: smoothEasing }}
        >
          <motion.div
            className="hidden h-px flex-1 bg-border sm:block"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: smoothEasing }}
            style={{ originX: 1 }}
          />
          <h1 className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            {hero.title}
          </h1>
          <motion.div
            className="hidden h-px flex-1 bg-border sm:block"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: smoothEasing }}
            style={{ originX: 0 }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-foreground/80 md:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: smoothEasing }}
        >
          {hero.subtitle}
        </motion.p>

        {/* Period at bottom */}
        <motion.p
          className="mt-16 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: smoothEasing }}
        >
          {hero.period}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      {showScrollIndicator && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: smoothEasing }}
        >
          <motion.div
            className="h-8 w-5 rounded-full border-2 border-muted-foreground/30"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="mx-auto mt-2 h-2 w-1 rounded-full bg-muted-foreground/50" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
