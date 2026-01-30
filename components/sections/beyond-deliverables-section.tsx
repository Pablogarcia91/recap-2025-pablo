"use client";

import { useRef } from "react";
import { reviewContent } from "@/lib/content";
import { motion, useInView, cubicBezier } from "framer-motion";

const smoothEasing = cubicBezier(0.22, 1, 0.36, 1);

interface BeyondDeliverablesSectionProps {
  isPresenting: boolean;
}

export function BeyondDeliverablesSection({
  isPresenting,
}: BeyondDeliverablesSectionProps) {
  const { extraValue } = reviewContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-muted/30 px-6 py-12">
      <div ref={ref} className="mx-auto max-w-3xl">
        {/* Section header */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: smoothEasing }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {extraValue.label}
          </p>
          <h2 className="mt-1 font-serif text-2xl font-normal italic md:text-3xl">
            {extraValue.title}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">{extraValue.subtitle}</p>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="mb-6 h-px bg-border"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: smoothEasing }}
          style={{ originX: 0 }}
        />

        {/* Items */}
        <div className="space-y-6">
          {extraValue.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.15,
                ease: smoothEasing,
              }}
              className={`flex gap-6 pb-6 ${index !== extraValue.items.length - 1 ? "border-b border-border" : ""}`}
            >
              {/* Number */}
              <motion.span
                className="font-serif text-4xl font-light text-muted-foreground/40 md:text-5xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + index * 0.15,
                  ease: smoothEasing,
                }}
              >
                {item.number}
              </motion.span>

              {/* Content */}
              <div className="flex-1 pt-1">
                <h3 className="font-serif text-lg font-semibold italic md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
