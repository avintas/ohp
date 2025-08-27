'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OnlyHockeyGalleryProps {
  selectedAvatars?: string[];
}

export function OnlyHockeyGallery({ selectedAvatars }: OnlyHockeyGalleryProps) {
  const [selectedAvatar, setSelectedAvatar] = useState<number | null>(null);

  // Don't show anything if no avatars are selected
  if (!selectedAvatars || selectedAvatars.length === 0) {
    return null;
  }

  const avatars = selectedAvatars;

  const handleAvatarClick = (index: number) => {
    setSelectedAvatar(selectedAvatar === index ? null : index);
  };

  const getDummyContent = (index: number) => {
    const dummyContents = [
      "The Architect - Master of strategy and team building. Known for creating winning formations and tactical plays that leave opponents guessing.",
      "The Bull - Power player with incredible strength and determination. Never backs down from a challenge and leads by example on the ice.",
      "The Bulldog - Tenacious defender with an unbreakable spirit. Fights for every puck and protects the team&apos;s goal with fierce loyalty.",
      "Eagle Eye - Sharp shooter with incredible accuracy and vision. Can spot opportunities that others miss and delivers when it matters most.",
      "Iron Mike - Veteran leader with years of experience. Brings wisdom, toughness, and an unshakeable work ethic to every game.",
      "The Strategist - Tactical genius who reads the game like a chess master. Always three moves ahead and knows exactly when to strike."
    ];
    return dummyContents[index] || "This player brings unique skills and determination to the lineup. A valuable team member with special abilities.";
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#023047] text-center mb-8">
        Your Lineup
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onClick={() => handleAvatarClick(index)}
          >
            <div className="aspect-square relative overflow-hidden rounded-xl border-2 border-gray-200 hover:border-[#023047] transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Image
                src={avatar}
                alt={`Hockey Player ${index + 1}`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              
              {/* Player number overlay */}
              <div className="absolute top-2 left-2 bg-[#023047] text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center">
                {index + 1}
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#023047]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-lg">#{index + 1}</span>
              </div>
            </div>
            
            {/* Sticky Note Dropdown */}
            {selectedAvatar === index && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50 w-80 max-w-sm">
                <div className="bg-yellow-100 border-2 border-yellow-300 rounded-lg shadow-lg p-4 relative">
                  {/* Sticky note corner fold */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-200 transform rotate-45 border-r border-b border-yellow-300"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="font-bold text-[#023047] text-lg mb-2">Player #{index + 1}</h3>
                    <p className="text-[#023047] text-sm leading-relaxed">
                      {getDummyContent(index)}
                    </p>
                  </div>
                  
                  {/* Close button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedAvatar(null);
                    }}
                    className="absolute top-2 right-2 text-[#023047] hover:text-red-500 transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
