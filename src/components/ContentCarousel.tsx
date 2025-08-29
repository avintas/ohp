'use client';

import { useState } from 'react';

interface CarouselCard {
  id: string;
  title: string;
  content: string;
  image?: string;
  category: string;
}

interface ContentCarouselProps {
  cards: CarouselCard[];
}

export function ContentCarousel({ cards }: ContentCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState<CarouselCard | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Ensure we have up to 32 cards, pad with empty cards if needed
  const paddedCards = [...cards];
  while (paddedCards.length < 32) {
    paddedCards.push({
      id: `empty-${paddedCards.length}`,
      title: 'Coming Soon',
      content: 'More hockey content coming your way!',
      category: 'Placeholder'
    });
  }

  const visibleCards = paddedCards.slice(currentIndex, currentIndex + 4);
  const canGoLeft = currentIndex > 0;
  const canGoRight = currentIndex < paddedCards.length - 4;

  const handlePrevious = () => {
    if (canGoLeft) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (canGoRight) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handleCardClick = (card: CarouselCard) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="w-full max-w-[90vw] lg:max-w-[92vw] xl:max-w-[94vw] 2xl:max-w-[96vw] mx-auto px-4 2xl:px-8">
      {/* Carousel Container */}
             <div className="relative border-2 border-dashed border-[#4cc9f0]/30 rounded-2xl p-6 bg-white">
        {/* Left Arrow */}
        <button
          onClick={handlePrevious}
          disabled={!canGoLeft}
                     className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
             canGoLeft 
               ? 'bg-[#7209b7] text-white hover:bg-[#4361ee] hover:scale-110 shadow-lg' 
               : 'bg-gray-200 text-gray-400 cursor-not-allowed'
           }`}
          aria-label="Previous cards"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={!canGoRight}
                     className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
             canGoRight 
               ? 'bg-[#7209b7] text-white hover:bg-[#4361ee] hover:scale-110 shadow-lg' 
               : 'bg-gray-200 text-gray-400 cursor-not-allowed'
           }`}
          aria-label="Next cards"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Cards Container */}
        <div className="mx-16 lg:mx-20 xl:mx-24 2xl:mx-32 overflow-hidden">
          <div className="flex gap-4">
            {visibleCards.map((card) => (
              <div
                key={`${card.id}-${currentIndex}`}
                className="relative transition-all duration-300 ease-in-out"
                style={{
                  width: '280px',
                  height: '400px',
                  flexShrink: 0
                }}
              >
                                 <div
                   onClick={() => handleCardClick(card)}
                   className="w-full h-full bg-[#023047] rounded-2xl shadow-lg border border-gray-200/50 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105"
                 >
                  <div className="h-full p-6">
                                         <h3 className="text-lg font-bold text-[#FFB703] mb-3 line-clamp-2">
                       {card.title}
                     </h3>

                     <p className="text-[#FFB703]/80 leading-relaxed text-sm line-clamp-4">
                       {card.content}
                     </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: Math.ceil(paddedCards.length / 4) }, (_, i) => (
            <button
              key={i}
              onClick={() => {
                const newIndex = Math.min(i * 4, paddedCards.length - 4);
                setCurrentIndex(newIndex);
              }}
                             className={`w-3 h-3 rounded-full transition-all duration-200 ${
                 Math.floor(currentIndex / 4) === i
                   ? 'bg-[#f72585] scale-125'
                   : 'bg-gray-300 hover:bg-[#4361ee]/50'
               }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>

        {/* Navigation Info */}
                 <div className="text-center mt-4 text-sm text-[#7209b7]/60">
           Showing cards {currentIndex + 1}-{Math.min(currentIndex + 4, paddedCards.length)} of {paddedCards.length}
         </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedCard && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
                             <h2 className="text-2xl font-bold text-[#023047]">
                 {selectedCard.title}
               </h2>
              <button
                onClick={closeModal}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
                             <p className="text-[#023047]/80 leading-relaxed">
                 {selectedCard.content}
               </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
