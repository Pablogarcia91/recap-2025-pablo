"use client";

import { useRef } from "react";
import { reviewContent } from "@/lib/content";
import { Quarter } from "@/types/content";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  cubicBezier,
} from "framer-motion";

const smoothEasing = cubicBezier(0.22, 1, 0.36, 1);

interface TimelineItemProps {
  quarter: Quarter;
  isLeft: boolean;
  index: number;
}

function TimelineItem({ quarter, isLeft, index }: TimelineItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const delay = index * 0.2;

  const contentVariants = {
    hidden: {
      opacity: 0,
      x: isLeft ? -60 : 60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: smoothEasing,
      },
    },
  };

  const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay + 0.1,
        ease: smoothEasing,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: isLeft ? -20 : 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay + 0.2 + i * 0.1,
        ease: smoothEasing,
      },
    }),
  };

  return (
    <div ref={ref} className="relative flex items-start">
      {/* Content - Left side */}
      {isLeft && (
        <>
          <motion.div
            className="w-1/2 pr-8 text-right"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={contentVariants}
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {quarter.label}
            </p>
            <h3 className="mt-1 font-serif text-xl font-semibold md:text-2xl">
              {quarter.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {quarter.items.map((item, itemIndex) => (
                <motion.li
                  key={item.id}
                  custom={itemIndex}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={listItemVariants}
                  className="flex items-center justify-end gap-2 text-sm text-muted-foreground"
                >
                  <span>{item.text}</span>
                  <span className="h-px w-4 bg-border" />
                </motion.li>
              ))}
            </ul>
          </motion.div>
          {/* Center dot */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              className="h-3 w-3 rounded-sm bg-foreground"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={dotVariants}
            />
          </div>
          <div className="w-1/2" />
        </>
      )}

      {/* Content - Right side */}
      {!isLeft && (
        <>
          <div className="w-1/2" />
          {/* Center dot */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              className="h-3 w-3 rounded-sm bg-foreground"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={dotVariants}
            />
          </div>
          <motion.div
            className="w-1/2 pl-8 text-left"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={contentVariants}
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {quarter.label}
            </p>
            <h3 className="mt-1 font-serif text-xl font-semibold md:text-2xl">
              {quarter.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {quarter.items.map((item, itemIndex) => (
                <motion.li
                  key={item.id}
                  custom={itemIndex}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={listItemVariants}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span className="h-px w-4 bg-border" />
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </>
      )}
    </div>
  );
}

interface TimelineSectionProps {
  isPresenting: boolean;
}

export function TimelineSection({ isPresenting }: TimelineSectionProps) {
  const { timeline } = reviewContent;
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  // Scroll progress for the purple line
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.3"],
  });

  // Transform scroll progress to line height (0% to 100%)
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: smoothEasing }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {timeline.label}
          </p>
          <h2 className="mt-2 font-serif text-3xl font-normal md:text-4xl">
            {timeline.title}
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Background line (gray) - always visible */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border" />

          {/* Progress line (purple) - animated with scroll */}
          <motion.div
            className="absolute left-1/2 top-0 w-0.5 -translate-x-1/2 bg-primary origin-top"
            style={{ height: lineHeight }}
          />

          {/* Timeline items */}
          <div className="relative space-y-10">
            {timeline.quarters.map((quarter, index) => (
              <TimelineItem
                key={quarter.id}
                quarter={quarter}
                isLeft={index % 2 === 0}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
