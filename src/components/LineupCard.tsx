'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { CoachCornerModal } from './CoachCornerModal';

interface LineupCardProps {
  title?: string;
  avatars: string[];
  spacing?: 'small' | 'medium' | 'large' | 'xl';
  layout?: 'centered' | 'split' | 'stacked';
  background?: 'white' | 'gradient' | 'transparent';
  padding?: 'compact' | 'normal' | 'spacious';
}

export function LineupCard({ 
  title = "Here is your expert lineup",
  avatars,
  spacing = "medium",
  layout = "centered",
  background = "white",
  padding = "normal"
}: LineupCardProps) {
  const [selectedAvatar, setSelectedAvatar] = useState<number | null>(null);
  const [coachModalOpen, setCoachModalOpen] = useState(false);
  const [selectedPlayerIndex, setSelectedPlayerIndex] = useState(0);
  const [selectedPlayerName, setSelectedPlayerName] = useState('');

  // Don't render if no avatars
  if (!avatars || avatars.length === 0) {
    return null;
  }

  // Spacing configurations
  const spacingMap = {
    small: "mb-8",
    medium: "mb-16", 
    large: "mb-24",
    xl: "mb-32"
  };

  // Background configurations
  const backgroundMap = {
    white: "bg-white",
    gradient: "bg-gradient-to-br from-blue-50 to-cyan-50",
    transparent: "bg-transparent"
  };

  // Padding configurations
  const paddingMap = {
    compact: "p-4",
    normal: "p-8",
    spacious: "p-12"
  };

  const handleAvatarClick = (index: number) => {
    // Get player name from dummy content
    const playerNames = [
      "The Architect", "The Bull", "The Bulldog", "Eagle Eye", 
      "Iron Mike", "The Strategist", "The Healer", "The Voice", 
      "The Wall", "Gear Guy", "The Digital", "The Captain"
    ];
    
    setSelectedPlayerIndex(index);
    setSelectedPlayerName(playerNames[index] || `Player ${index + 1}`);
    setCoachModalOpen(true);
  };

  const getDummyContent = (index: number) => {
    const dummyContents = [
      "The Architect - Master of strategy and team building. Known for creating winning formations and tactical plays that leave opponents guessing.",
      "The Bull - Power player with incredible strength and determination. Never backs down from a challenge and leads by example on the ice.",
      "The Bulldog - Tenacious defender with an unbreakable spirit. Fights for every puck and protects the team's goal with fierce loyalty.",
      "Eagle Eye - Sharp shooter with incredible accuracy and vision. Can spot opportunities that others miss and delivers when it matters most.",
      "Iron Mike - Veteran leader with years of experience. Brings wisdom, toughness, and an unshakeable work ethic to every game.",
      "The Strategist - Tactical genius who reads the game like a chess master. Always three moves ahead and knows exactly when to strike.",
      "The Healer - Team medic and recovery specialist. Keeps everyone healthy and ready for battle with expert knowledge of sports medicine.",
      "The Voice - Natural leader and motivator. Rallies the team with inspiring speeches and keeps morale high during tough games.",
      "The Wall - Impenetrable goalie with lightning reflexes. Nothing gets past this guardian of the net.",
      "Gear Guy - Equipment expert who ensures everyone has the perfect setup. Knows every stick, skate, and piece of gear inside and out.",
      "The Digital - Tech-savvy analyst who uses data and video to give the team every advantage. Modern hockey meets cutting-edge technology.",
      "The Captain - Respected leader who commands the ice. Combines skill, experience, and leadership to guide the team to victory."
    ];
    return dummyContents[index] || "This player brings unique skills and determination to the lineup. A valuable team member with special abilities.";
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`
        w-full max-w-5xl mx-auto rounded-2xl shadow-lg border border-gray-100
        ${backgroundMap[background]} ${paddingMap[padding]}
      `}
    >
      {/* Title Section */}
      <div className="text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`
            text-3xl sm:text-4xl lg:text-5xl font-bold text-[#023047] 
            ${spacingMap[spacing]}
          `}
        >
          {title}
        </motion.h2>
      </div>

      {/* Avatar Grid Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className={`
          grid gap-8 sm:gap-10 md:gap-12 lg:gap-16
          ${layout === 'centered' ? 'grid-cols-6 justify-items-center' : ''}
          ${layout === 'split' ? 'grid-cols-6' : ''}
          ${layout === 'stacked' ? 'grid-cols-6' : ''}
        `}
      >
        {avatars.map((avatar, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + (index * 0.1) }}
            className="relative group cursor-pointer"
            onClick={() => handleAvatarClick(index)}
          >
            <div className="aspect-square relative overflow-hidden rounded-xl border-2 border-gray-200 hover:border-[#023047] transition-all duration-300 hover:scale-105 hover:shadow-lg w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40">
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
            

          </motion.div>
        ))}
      </motion.div>

      {/* Coach Corner Modal */}
      <CoachCornerModal
        isOpen={coachModalOpen}
        onClose={() => setCoachModalOpen(false)}
        playerName={selectedPlayerName}
        playerIndex={selectedPlayerIndex}
      />
    </motion.div>
  );
}
