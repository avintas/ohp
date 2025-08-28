'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface CoachCornerModalProps {
  isOpen: boolean;
  onClose: () => void;
  playerName: string;
  playerIndex: number;
}

export function CoachCornerModal({ isOpen, onClose, playerName, playerIndex }: CoachCornerModalProps) {
  const [currentCoach, setCurrentCoach] = useState(0);

  // Full-height coach figures
  const coachFigures = [
    '/pims/x1.png',
    '/pims/x2.png', 
    '/pims/x3.png',
    '/pims/x4.png',
    '/pims/x5.png',
    '/pims/x6.png',
    '/pims/x7.png',
    '/pims/x8.png',
    '/pims/x9.png',
    '/pims/x10.png',
    '/pims/x11.png'
  ];

  // Coaching wisdom and quotes
  const coachingWisdom = [
    {
      coach: "Coach Maria",
      quote: "Preparation meets opportunity",
      wisdom: "Focus on progress, not perfection",
      message: "Welcome to Coach's Corner, where Coach Maria shares her strategic insights and motivational guidance to help you excel both on and off the ice."
    },
    {
      coach: "Coach Thunder",
      quote: "Champions are made in practice",
      wisdom: "Every mistake is a lesson learned",
      message: "Intensity and dedication separate good players from great ones. Push through the tough moments - that's where champions are forged."
    },
    {
      coach: "Coach Wisdom",
      quote: "The team that works together, wins together",
      wisdom: "Trust your teammates, trust the process",
      message: "Hockey is the ultimate team sport. Individual talent shines brightest when it elevates the entire team's performance."
    },
    {
      coach: "Coach Steel",
      quote: "Discipline creates freedom on the ice",
      wisdom: "Master the fundamentals first",
      message: "Before you can be creative, you must be disciplined. Master your basics and the advanced moves will follow naturally."
    },
    {
      coach: "Coach Heart",
      quote: "Play with passion, lead with purpose",
      wisdom: "Your attitude determines your altitude",
      message: "The fire in your heart is what separates you from everyone else. Let that passion fuel every shift, every play."
    },
    {
      coach: "Coach Vision",
      quote: "See the play before it happens",
      wisdom: "Anticipation beats speed every time",
      message: "Great players don't just react - they anticipate. Train your mind to see two moves ahead of everyone else."
    }
  ];

  // Select coach based on player index, with some randomness
  useEffect(() => {
    if (isOpen) {
      const coachIndex = (playerIndex + Math.floor(Math.random() * 3)) % coachingWisdom.length;
      setCurrentCoach(coachIndex);
    }
  }, [isOpen, playerIndex]);

  const currentWisdom = coachingWisdom[currentCoach];
  const currentFigure = coachFigures[currentCoach % coachFigures.length];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 xl:inset-24 z-50 flex items-center justify-center"
          >
            <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full h-full max-h-[700px] overflow-hidden relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <span className="text-gray-600 text-lg">×</span>
              </button>

              {/* Content */}
              <div className="h-full flex flex-col items-center justify-center p-6 text-center">
                
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-4"
                >
                  <h1 className="text-2xl font-bold text-gray-800 mb-1">Coach's Corner</h1>
                  <p className="text-sm text-gray-600">Wisdom from {currentWisdom.coach}</p>
                </motion.div>

                {/* Main Quote */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-6"
                >
                  <p className="text-lg italic text-gray-700 font-medium">
                    "{currentWisdom.quote}"
                  </p>
                </motion.div>

                {/* Coach Figure */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="relative w-48 h-64 mb-6 flex-shrink-0"
                >
                  <Image
                    src={currentFigure}
                    alt={currentWisdom.coach}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 200px, 250px"
                  />
                </motion.div>

                {/* Secondary Quote */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-4"
                >
                  <p className="text-base italic text-gray-600">
                    "{currentWisdom.wisdom}"
                  </p>
                  <p className="text-sm text-gray-500 mt-1">- {currentWisdom.coach}</p>
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-xs text-gray-500 leading-relaxed px-2"
                >
                  <p>{currentWisdom.message}</p>
                </motion.div>

                {/* Player Context */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="mt-4 pt-4 border-t border-gray-200 w-full"
                >
                  <p className="text-xs text-gray-400">
                    Coaching wisdom for {playerName}
                  </p>
                </motion.div>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
