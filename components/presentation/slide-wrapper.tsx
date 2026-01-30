"use client";

import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface SlideWrapperProps {
  children: React.ReactNode;
  slideIndex: number;
  isPresenting: boolean;
  onSlideVisible?: (index: number) => void;
  className?: string;
}

export function SlideWrapper({
  children,
  slideIndex,
  isPresenting,
  onSlideVisible,
  className,
}: SlideWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPresenting || !onSlideVisible || !ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            onSlideVisible(slideIndex);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isPresenting, slideIndex, onSlideVisible]);

  return (
    <div
      ref={ref}
      className={cn(
        isPresenting ? "presentation-slide" : "normal-section",
        className
      )}
    >
      <div className={cn("w-full", isPresenting && "max-h-full overflow-auto")}>
        {children}
      </div>
    </div>
  );
}
