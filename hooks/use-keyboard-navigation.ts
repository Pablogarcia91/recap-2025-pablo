"use client";

import { useEffect, useCallback } from "react";

interface UseKeyboardNavigationProps {
  isPresenting: boolean;
  currentSlide: number;
  totalSlides: number;
  onNextSlide: () => void;
  onPreviousSlide: () => void;
  onExit: () => void;
  onGoToSlide: (index: number) => void;
}

export function useKeyboardNavigation({
  isPresenting,
  currentSlide,
  totalSlides,
  onNextSlide,
  onPreviousSlide,
  onExit,
  onGoToSlide,
}: UseKeyboardNavigationProps) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isPresenting) return;

      switch (event.key) {
        case "ArrowRight":
        case "ArrowDown":
        case " ":
        case "PageDown":
          event.preventDefault();
          if (currentSlide < totalSlides - 1) {
            onNextSlide();
          }
          break;
        case "ArrowLeft":
        case "ArrowUp":
        case "PageUp":
          event.preventDefault();
          if (currentSlide > 0) {
            onPreviousSlide();
          }
          break;
        case "Escape":
          event.preventDefault();
          onExit();
          break;
        case "Home":
          event.preventDefault();
          onGoToSlide(0);
          break;
        case "End":
          event.preventDefault();
          onGoToSlide(totalSlides - 1);
          break;
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
          event.preventDefault();
          const slideIndex = parseInt(event.key) - 1;
          if (slideIndex < totalSlides) {
            onGoToSlide(slideIndex);
          }
          break;
      }
    },
    [
      isPresenting,
      currentSlide,
      totalSlides,
      onNextSlide,
      onPreviousSlide,
      onExit,
      onGoToSlide,
    ]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);
}
