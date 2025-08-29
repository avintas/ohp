'use client';

import { useState } from 'react';
import Image from 'next/image';

interface BulletinCardData {
  id: string;
  type: 'text' | 'image' | 'video';
  title?: string;
  content: string;
  expert?: {
    name: string;
    avatar: string;
    title: string;
  };
  category?: string;
  shareCount?: number;
  image?: string;
  videoThumbnail?: string;
}

interface BulletinBoardProps {
  cards: BulletinCardData[];
}

export function BulletinBoard({ cards }: BulletinBoardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const goToCard = (index: number) => {
    setCurrentIndex(index);
  };

  const shareContent = (platform: string, card: BulletinCardData) => {
    const shareText = card.expert 
      ? `🏒 ${card.content} - ${card.expert.name} | There's Only Hockey! ⚡`
      : `🏒 ${card.content} | There's Only Hockey! ⚡`;
    const url = window.location.href;
    
    switch(platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'email':
        const subject = "Amazing Hockey Content!";
        const body = `${shareText}\n\nCheck it out: ${url}`;
        window.open(`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
        break;
      case 'copy':
        navigator.clipboard.writeText(`${shareText} ${url}`);
        break;
    }
  };

  if (!cards.length) return null;

  const currentCard = cards[currentIndex];

  return (
    <section className="py-8 px-4 md:px-6 2xl:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-[#023047] mb-2">
            🏒 OnlyHockey Bulletin Board
          </h2>
          <p className="text-sm text-[#023047]/60">
            What&apos;s pinned today • {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Main Card Display */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prevCard}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
            aria-label="Previous card"
          >
            <svg className="w-5 h-5 text-[#023047]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={nextCard}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
            aria-label="Next card"
          >
            <svg className="w-5 h-5 text-[#023047]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Card Content */}
          <div className="bg-gradient-to-br from-[#8ecae6] to-[#219EBC] rounded-2xl shadow-lg border border-gray-200/50 min-h-[400px] flex items-center justify-center">
            {currentIndex === 0 ? (
              // First slide - Gretzky quote
              <div className="text-center px-8">
                <div className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  "Wayne Gretzky holds 61 NHL records - more than any other player in history!"
                </div>
                <div className="text-sm text-white/90">
                  - The Historian
                </div>
              </div>
            ) : currentIndex === 1 ? (
              // Second slide - Meet the Experts
              <div className="text-center px-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Meet the Experts
                </h2>
                <div className="relative w-64 h-64 mx-auto rounded-xl overflow-hidden">
                  <Image
                    src="/gims/gim-00023.webp"
                    alt="Meet the Experts"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ) : (
              // Other slides - just numbers
              <div className="text-8xl md:text-9xl font-bold text-white/80">
                {currentIndex + 1}
              </div>
            )}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToCard(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-[#023047] scale-125' 
                  : 'bg-[#023047]/30 hover:bg-[#023047]/50'
              }`}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
