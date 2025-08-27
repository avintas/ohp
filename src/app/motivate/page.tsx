'use client';

import { motion } from 'framer-motion';
import { StickyNavbar } from '../../components/StickyNavbar';
import Image from 'next/image';

export default function MotivatePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navbar */}
      <StickyNavbar />

      {/* Main Content */}
      <main className="pt-20 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
        
        {/* Panel1: Instructional/Guide Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 md:p-8 border border-blue-200 shadow-sm">
            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-900 text-center mb-6"
            >
              Life lessons from the greatest game on earth
            </motion.h1>

            {/* Inspirational Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center mb-8"
            >
              <p className="text-lg md:text-xl text-blue-800 leading-relaxed max-w-4xl mx-auto">
                Hockey teaches what matters most: resilience when you&apos;re down, teamwork when it counts, and the courage to get back up after every hit. From Wayne Gretzky&apos;s vision to Phil Esposito&apos;s grit, from penalty box patience to overtime pressure – the rink holds wisdom that works everywhere.
              </p>
            </motion.div>

            {/* Instructions Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-white rounded-xl p-6 border border-blue-200"
            >
              <h2 className="text-xl md:text-2xl font-bold text-blue-900 text-center mb-4">
                How to Navigate Your Daily Motivation
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <span className="text-blue-600 text-xl">←→</span>
                  </div>
                  <p className="text-sm text-blue-700 font-medium">Swipe left/right to browse cards</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <span className="text-blue-600 text-xl">👆</span>
                  </div>
                  <p className="text-sm text-blue-700 font-medium">Tap for full content</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <span className="text-blue-600 text-xl">📤</span>
                  </div>
                  <p className="text-sm text-blue-700 font-medium">Share to social media</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Panel2: Motivational Content Interaction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-8"
        >
          <div className="relative bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl p-6 md:p-8 border border-orange-200 shadow-sm overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/gims/gim-00028.webp"
                alt="Hockey motivation background"
                fill
                className="object-cover opacity-20"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
            
            {/* Content with relative positioning to appear above background */}
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-orange-900 text-center mb-4">
                Your Daily Lineup of 19 Motivational Cards
              </h2>
              <p className="text-center text-orange-800 mb-6">
                Hockey&apos;s most powerful insights from coaches, legends, and the game itself
              </p>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 border border-orange-200 text-center">
                <p className="text-orange-600 text-lg">
                  🏒 Motivational Content Gallery Coming Soon 🏒
                </p>
                <p className="text-orange-500 text-sm mt-2">
                  This is where the 19 motivational cards will be displayed
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Panel3: Other Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 md:p-8 border border-green-200 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-green-900 text-center mb-4">
              Additional Content Area
            </h2>
            <div className="bg-white rounded-xl p-8 border border-green-200 text-center">
              <p className="text-green-600 text-lg">
                🎯 Panel3 Content Coming Soon 🎯
              </p>
              <p className="text-green-500 text-sm mt-2">
                This panel is reserved for future content
              </p>
            </div>
          </div>
        </motion.div>

      </main>
    </div>
  );
}
