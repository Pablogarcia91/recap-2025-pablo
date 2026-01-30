"use client";

import { useRef } from "react";
import { reviewContent } from "@/lib/content";
import { motion, useInView, cubicBezier } from "framer-motion";

const smoothEasing = cubicBezier(0.22, 1, 0.36, 1);

export function FooterSection() {
  const { footer } = reviewContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center px-6 py-12">
      <div ref={ref} className="mx-auto max-w-2xl text-center">
        {/* Top decorative line */}
        <motion.div
          className="mx-auto mb-8 h-px w-full max-w-sm bg-border"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, ease: smoothEasing }}
        />

        {/* Thank you message */}
        <motion.h2
          className="font-serif text-2xl font-normal md:text-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: smoothEasing }}
        >
          {footer.thankYouMessage}
        </motion.h2>

        {/* Bottom decorative line */}
        <motion.div
          className="mx-auto mt-8 h-px w-full max-w-sm bg-border"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.5, ease: smoothEasing }}
        />

        {/* Credit */}
        <motion.p
          className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8, ease: smoothEasing }}
        >
          {footer.credit}
        </motion.p>
      </div>
    </section>
  );
}
