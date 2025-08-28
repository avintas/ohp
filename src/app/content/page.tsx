'use client';

import { StickyNavbar } from '@/components/StickyNavbar';
import { LineupCard } from '@/components/LineupCard';
import { InfoCard } from '@/components/InfoCard';
import { useState } from 'react';

export default function ContentPage() {
  const [randomNumber, setRandomNumber] = useState<number | null>(null);
  const [shuffledAvatars, setShuffledAvatars] = useState<string[]>([]);
  const [coachAvatar, setCoachAvatar] = useState<string>('');

  // All available avatars from pims directory
  const allAvatars = [
    '/pims/a-architect.webp',
    '/pims/a-bull.webp', 
    '/pims/a-bulldog.webp',
    '/pims/a-cap.webp',
    '/pims/a-digital.webp',
    '/pims/a-eagleeye.webp',
    '/pims/a-edges.webp',
    '/pims/a-gearguy.webp',
    '/pims/a-healer.webp',
    '/pims/a-icebreaker.webp',
    '/pims/a-ironmike.webp',
    '/pims/a-mindcoach.webp',
    '/pims/a-notfound.webp',
    '/pims/a-numbers.webp',
    '/pims/a-ppwizard.webp',
    '/pims/a-recovery.webp',
    '/pims/a-silky.webp',
    '/pims/a-strategist.webp',
    '/pims/a-vk.webp',
    '/pims/a-voice.webp',
    '/pims/a-wall.webp',
    '/pims/hs1.webp',
    '/pims/hs10.webp',
    '/pims/hs12.webp',
    '/pims/hs13.webp',
    '/pims/hs14.webp',
    '/pims/hs15.webp',
    '/pims/hs16.webp',
    '/pims/hs20.webp',
    '/pims/hs24.webp',
    '/pims/hs28.webp',
    '/pims/hs34.webp',
    '/pims/hs35.webp',
    '/pims/hs36.webp',
    '/pims/hs5.webp',
    '/pims/hs9.webp'
  ];

  const shuffleArray = (array: string[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 19) + 1;
    setRandomNumber(number);
    
    // Shuffle avatars and pick first 6
    const shuffled = shuffleArray(allAvatars);
    setShuffledAvatars(shuffled.slice(0, 6));
    
    // Select a random coach avatar
    const coachNumber = Math.floor(Math.random() * 11) + 1;
    setCoachAvatar(`/pims/x${coachNumber}.png`);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#8ecae6' }}>
      <StickyNavbar />
      
      {/* Main Content */}
      <div className="pt-24 flex flex-col items-center justify-start px-4">
        {/* Main Title */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-[#023047] text-center mb-12">
          Build Your Lineup!
        </h1>
        
        {/* Random Button */}
        <button
          onClick={generateRandomNumber}
          className="bg-[#023047] hover:bg-[#023047]/90 text-white text-4xl sm:text-5xl lg:text-6xl font-bold py-6 px-12 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-8"
        >
          Go
        </button>
        

        


        {/* Lineup Card */}
        {shuffledAvatars.length > 0 && (
          <>
            <LineupCard 
              avatars={shuffledAvatars}
              spacing="large"
              background="gradient"
              padding="spacious"
            />
            
            {/* Info Card underneath */}
            <div className="mt-8">
              <InfoCard 
                title="Meet Your Coach"
                subtitle="Expert guidance for your team"
                content="Your dedicated coach is here to help maximize your team's potential. With years of experience and proven strategies, they'll guide your lineup to victory."
                image={coachAvatar}
                background="gradient"
                padding="spacious"
              />
            </div>
          </>
        )}
        

      </div>
    </div>
  );
}
