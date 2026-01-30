"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface PresentationControlsProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrevious: () => void;
  onExit: () => void;
}

export function PresentationControls({
  currentSlide,
  totalSlides,
  onNext,
  onPrevious,
  onExit,
}: PresentationControlsProps) {
  return (
    <div className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-background/95 px-2 py-1 shadow-lg backdrop-blur-sm">
      {/* Previous button */}
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8"
        onClick={onPrevious}
        disabled={currentSlide === 0}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>

      {/* Slide indicator */}
      <div className="flex items-center gap-1 px-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`h-1.5 w-1.5 rounded-full transition-all ${
              index === currentSlide
                ? "w-4 bg-primary"
                : "bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <span className="min-w-[3rem] text-center font-mono text-xs text-muted-foreground">
        {currentSlide + 1} / {totalSlides}
      </span>

      {/* Next button */}
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8"
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>

      {/* Separator */}
      <div className="h-4 w-px bg-border" />

      {/* Exit button */}
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8"
        onClick={onExit}
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Exit presentation</span>
      </Button>
    </div>
  );
}
