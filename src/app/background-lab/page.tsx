'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const backgroundTypes = [
  {
    id: 'css-clippath',
    name: 'CSS Clip-Path',
    description: 'Wave patterns using CSS clip-path polygon',
    color: 'from-blue-500 to-purple-600',
    icon: '🌊'
  },
  {
    id: 'svg-waves',
    name: 'SVG Waves',
    description: 'Scalable vector wave backgrounds',
    color: 'from-green-500 to-teal-600',
    icon: '📐'
  },
  {
    id: 'skate-streaks',
    name: 'Skate Streaks',
    description: 'Athletic skate marks fanning across ice',
    color: 'from-cyan-500 to-blue-600',
    icon: '🏒'
  },
  {
    id: 'gradient-organic',
    name: 'Gradient Organic',
    description: 'Radial gradients with organic shapes',
    color: 'from-pink-500 to-rose-600',
    icon: '🎨'
  },
  {
    id: 'framer-motion',
    name: 'Framer Motion',
    description: 'Animated curved backgrounds',
    color: 'from-orange-500 to-red-600',
    icon: '✨'
  },
  {
    id: 'css-pseudo',
    name: 'CSS Pseudo',
    description: 'Layered effects with ::before/::after',
    color: 'from-indigo-500 to-blue-600',
    icon: '🎭'
  },
  {
    id: 'comparison',
    name: 'Comparison View',
    description: 'Side-by-side comparison of all types',
    color: 'from-gray-500 to-slate-600',
    icon: '⚖️'
  }
];

export default function BackgroundLab() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Ensure hydration consistency
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until mounted to prevent hydration issues
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            🎨 Background Testing Lab
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore different techniques for creating curvaceous backgrounds in React.
            Click any card to test that background type.
          </p>
        </div>

        {/* Navigation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {backgroundTypes.map((type) => (
            <Link
              key={type.id}
              href={`/background-lab/${type.id}`}
              className="group block"
              onMouseEnter={() => setHoveredCard(type.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`
                relative overflow-hidden rounded-2xl p-8 h-64
                bg-gradient-to-br ${type.color}
                transform transition-all duration-300 ease-out
                ${hoveredCard === type.id 
                  ? 'scale-105 shadow-2xl' 
                  : 'hover:scale-102 shadow-lg'
                }
                border border-white/20
              `}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 left-0 w-full h-full bg-white/10 rounded-full transform -translate-y-1/2 -translate-x-1/2 scale-150"></div>
                  <div className="absolute bottom-0 right-0 w-full h-full bg-white/10 rounded-full transform translate-y-1/2 translate-x-1/2 scale-150"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-4xl mb-3">{type.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {type.name}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {type.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center text-white/80 text-sm font-medium">
                    <span>Test Now</span>
                    <svg 
                      className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`
                  absolute inset-0 bg-white/10 
                  transform transition-all duration-300
                  ${hoveredCard === type.id 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-95'
                  }
                `}></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Info */}
        <div className="text-center mt-12 text-gray-400">
          <p className="text-sm">
            Each background type includes multiple variations and interactive controls
          </p>
        </div>
      </div>
    </div>
  );
}
