"use client";

import { MobileNav } from "@/components/mobile-nav";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  // Hero images for carousel
  const heroImages = [
    {
      src: "/supercheer.webp",
      alt: "Supercheer - OnlyHockey!"
    },
    {
      src: "/superschool.webp", 
      alt: "Superschool - OnlyHockey!"
    },
    {
      src: "/superyou.webp",
      alt: "Superyou - OnlyHockey!"
    }
  ];

  // Select 12 random persona avatars for the grid
  const personaAvatars = [
    "/personas-im/a-architect.webp",
    "/personas-im/a-bull.webp",
    "/personas-im/a-edges.webp",
    "/personas-im/a-strategist.webp",
    "/personas-im/a-ironmike.webp",
    "/personas-im/a-voice.webp",
    "/personas-im/a-eagleeye.webp",
    "/personas-im/a-numbers.webp",
    "/personas-im/a-gearguy.webp",
    "/personas-im/a-silky.webp",
    "/personas-im/a-healer.webp",
    "/personas-im/a-recovery.webp"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const minSwipeDistance = 50; // Minimum distance for a swipe to be considered intentional

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length, isTransitioning]);

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImageIndex((prevIndex) => 
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToImage = (index: number) => {
    if (isTransitioning || index === currentImageIndex) return;
    setIsTransitioning(true);
    setCurrentImageIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Touch event handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }

    // Reset touch values
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Mobile-first container - 50% width on desktop, full width on mobile */}
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        {/* Hero Carousel Section */}
        <div className="px-4 pt-8 pb-6 relative">
          {/* Carousel Container */}
          <div 
            ref={carouselRef}
            className="relative overflow-hidden rounded-lg shadow-2xl touch-pan-y ring-1 ring-slate-200/50 dark:ring-slate-700/50"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Images */}
            <div className="relative">
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-500 ease-in-out ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto select-none pointer-events-none"
                    draggable={false}
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-all duration-200 z-10 shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-all duration-200 z-10 shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Dots Indicator - Below the carousel */}
          <div className="flex justify-center mt-4 space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentImageIndex 
                    ? 'bg-slate-600 dark:bg-slate-400 scale-110' 
                    : 'bg-slate-400 dark:bg-slate-600 hover:bg-slate-500 dark:hover:bg-slate-500'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Personas Grid - Bottom Section */}
        <div className="px-4 pb-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-slate-900 dark:text-white">
            Meet Our Hockey Personas
          </h2>
          
          {/* 4x3 Grid of Persona Avatars */}
          <div className="grid grid-cols-3 gap-4">
            {personaAvatars.map((avatar, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg bg-slate-200 dark:bg-slate-700">
                  <img
                    src={avatar}
                    alt={`Hockey Persona ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll indicator arrows */}
          <div className="flex justify-center mt-8 space-x-2">
            <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
            <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
            <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
