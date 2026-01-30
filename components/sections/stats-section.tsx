"use client";

import { useRef, useEffect, useState } from "react";
import { reviewContent } from "@/lib/content";
import { Stat } from "@/types/content";
import { motion, useInView, cubicBezier } from "framer-motion";

const smoothEasing = cubicBezier(0.22, 1, 0.36, 1);

interface StatCardProps {
  stat: Stat;
  index: number;
}

function StatCard({ stat, index }: StatCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = performance.now();

    const animate = () => {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOut * stat.value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    // Delay based on index
    const timeout = setTimeout(() => {
      requestAnimationFrame(animate);
    }, index * 150);

    return () => clearTimeout(timeout);
  }, [isInView, stat.value, index]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center justify-center border-r border-border px-6 py-8 last:border-r-0"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: smoothEasing,
      }}
    >
      <span className="font-serif text-5xl font-normal tracking-tight md:text-6xl">
        {count}
        {stat.suffix && <sup className="text-3xl">{stat.suffix}</sup>}
      </span>
      <span className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {stat.label}
      </span>
    </motion.div>
  );
}

export function StatsSection() {
  const { stats } = reviewContent;

  return (
    <section className="border-y border-border bg-background">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
