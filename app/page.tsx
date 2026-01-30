"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { TeamContributionsSection } from "@/components/sections/team-contributions-section";
import { TeamSlide } from "@/components/sections/team-slide";
import { BeyondDeliverablesSection } from "@/components/sections/beyond-deliverables-section";
import { FooterSection } from "@/components/sections/footer-section";
import { SlideWrapper } from "@/components/presentation/slide-wrapper";
import { PresentationControls } from "@/components/presentation/presentation-controls";
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Presentation } from "lucide-react";
import { reviewContent } from "@/lib/content";

// Calculate total slides dynamically based on content
// Hero+Stats, Timeline, Teams (one per team), ExtraValue, Footer
const TOTAL_SLIDES = 2 + reviewContent.teamContributions.length + 2;

export default function Home() {
  const [isPresenting, setIsPresenting] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToSlide = useCallback((index: number) => {
    if (containerRef.current) {
      const slideHeight = window.innerHeight;
      containerRef.current.scrollTo({
        top: index * slideHeight,
        behavior: "smooth",
      });
    }
    setCurrentSlide(index);
  }, []);

  const handleNextSlide = useCallback(() => {
    if (currentSlide < TOTAL_SLIDES - 1) {
      scrollToSlide(currentSlide + 1);
    }
  }, [currentSlide, scrollToSlide]);

  const handlePreviousSlide = useCallback(() => {
    if (currentSlide > 0) {
      scrollToSlide(currentSlide - 1);
    }
  }, [currentSlide, scrollToSlide]);

  const handleTogglePresentation = useCallback(() => {
    setIsPresenting((prev) => {
      if (!prev) {
        // Entering presentation mode
        document.body.classList.add("presentation-mode");
        setCurrentSlide(0);
        setTimeout(() => scrollToSlide(0), 100);
      } else {
        // Exiting presentation mode
        document.body.classList.remove("presentation-mode");
      }
      return !prev;
    });
  }, [scrollToSlide]);

  const handleExitPresentation = useCallback(() => {
    setIsPresenting(false);
    document.body.classList.remove("presentation-mode");
  }, []);

  const handleSlideVisible = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Use keyboard navigation
  useKeyboardNavigation({
    isPresenting,
    currentSlide,
    totalSlides: TOTAL_SLIDES,
    onNextSlide: handleNextSlide,
    onPreviousSlide: handlePreviousSlide,
    onExit: handleExitPresentation,
    onGoToSlide: scrollToSlide,
  });

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.classList.remove("presentation-mode");
    };
  }, []);

  // Fixed controls that don't move
  const FixedControls = (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-2">
      <ThemeToggle />
      <Button
        variant={isPresenting ? "default" : "outline"}
        size="sm"
        onClick={handleTogglePresentation}
        className="gap-2"
      >
        <Presentation className="h-4 w-4" />
        {isPresenting ? "Exit" : "Present"}
      </Button>
    </div>
  );

  // Normal scrolling mode (not presentation)
  if (!isPresenting) {
    return (
      <div className="normal-container">
        {FixedControls}
        {/* Hero + Stats */}
        <HeroSection />
        <StatsSection />

        {/* Timeline */}
        <TimelineSection isPresenting={false} />

        {/* Team Contributions */}
        <TeamContributionsSection />

        {/* Beyond Deliverables */}
        <BeyondDeliverablesSection isPresenting={false} />

        {/* Footer */}
        <FooterSection />
      </div>
    );
  }

  // Presentation mode - track slide index
  let slideIndex = 0;

  return (
    <div
      ref={containerRef}
      className="presentation-container"
    >
      {FixedControls}

      {/* Slide 1: Hero + Stats */}
      <SlideWrapper
        slideIndex={slideIndex++}
        isPresenting={isPresenting}
        onSlideVisible={handleSlideVisible}
      >
        <div className="flex flex-col h-full w-full">
          <div className="flex-1 flex items-center justify-center">
            <HeroSection showScrollIndicator={false} />
          </div>
          <StatsSection />
        </div>
      </SlideWrapper>

      {/* Slide 2: Timeline */}
      <SlideWrapper
        slideIndex={slideIndex++}
        isPresenting={isPresenting}
        onSlideVisible={handleSlideVisible}
      >
        <div className="h-full w-full overflow-y-auto">
          <TimelineSection isPresenting={isPresenting} />
        </div>
      </SlideWrapper>

      {/* Slides for each team */}
      {reviewContent.teamContributions.map((team) => (
        <SlideWrapper
          key={team.id}
          slideIndex={slideIndex++}
          isPresenting={isPresenting}
          onSlideVisible={handleSlideVisible}
        >
          <TeamSlide team={team} />
        </SlideWrapper>
      ))}

      {/* Extra Value Slide */}
      <SlideWrapper
        slideIndex={slideIndex++}
        isPresenting={isPresenting}
        onSlideVisible={handleSlideVisible}
      >
        <div className="h-full w-full overflow-y-auto">
          <BeyondDeliverablesSection isPresenting={isPresenting} />
        </div>
      </SlideWrapper>

      {/* Footer Slide */}
      <SlideWrapper
        slideIndex={slideIndex++}
        isPresenting={isPresenting}
        onSlideVisible={handleSlideVisible}
      >
        <FooterSection />
      </SlideWrapper>

      {/* Presentation Controls */}
      <PresentationControls
        currentSlide={currentSlide}
        totalSlides={TOTAL_SLIDES}
        onNext={handleNextSlide}
        onPrevious={handlePreviousSlide}
        onExit={handleExitPresentation}
      />
    </div>
  );
}
