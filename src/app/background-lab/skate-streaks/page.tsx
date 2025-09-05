'use client';

import Link from 'next/link';
import { useState } from 'react';

const skateVariations = [
  {
    id: 'single-cut',
    name: 'Single Skate Cut',
    description: 'One clean streak fanning out from the edge',
    path: 'M0,100 Q200,50 400,100 Q600,150 800,100 Q1000,50 1200,100 L1200,200 Q1000,150 800,200 Q600,250 400,200 Q200,150 0,200 Z',
    gradient: 'linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.1) 100%)'
  },
  {
    id: 'power-stop',
    name: 'Power Stop',
    description: 'Dramatic spray pattern from a hard stop',
    path: 'M0,100 Q100,50 200,100 Q300,150 400,100 Q500,50 600,100 Q700,150 800,100 Q900,50 1000,100 Q1100,150 1200,100 L1200,200 Q1100,250 1000,200 Q900,150 800,200 Q700,250 600,200 Q500,150 400,200 Q300,250 200,200 Q100,150 0,200 Z',
    gradient: 'linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 20%, rgba(255,255,255,0.3) 60%, rgba(255,255,255,0.05) 100%)'
  },
  {
    id: 'crossover-pattern',
    name: 'Crossover Pattern',
    description: 'Curved lines from crossover skating',
    path: 'M0,80 Q200,60 400,80 Q600,100 800,80 Q1000,60 1200,80 L1200,120 Q1000,100 800,120 Q600,140 400,120 Q200,100 0,120 Z M0,180 Q200,160 400,180 Q600,200 800,180 Q1000,160 1200,180 L1200,220 Q1000,200 800,220 Q600,240 400,220 Q200,200 0,220 Z',
    gradient: 'linear-gradient(90deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.1) 100%)'
  },
  {
    id: 'speed-lines',
    name: 'Speed Lines',
    description: 'Fast, dynamic streaks showing motion',
    path: 'M0,90 L300,70 L600,90 L900,70 L1200,90 L1200,110 L900,90 L600,110 L300,90 L0,110 Z M0,190 L200,170 L400,190 L600,170 L800,190 L1000,170 L1200,190 L1200,210 L1000,190 L800,210 L600,190 L400,210 L200,190 L0,210 Z',
    gradient: 'linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 70%, rgba(255,255,255,0.05) 100%)'
  },
  {
    id: 'ice-scratches',
    name: 'Ice Scratches',
    description: 'Subtle, worn-in ice patterns',
    path: 'M0,100 Q150,90 300,100 Q450,110 600,100 Q750,90 900,100 Q1050,110 1200,100 L1200,200 Q1050,190 900,200 Q750,210 600,200 Q450,190 300,200 Q150,210 0,200 Z',
    gradient: 'linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.03) 100%)'
  },
  {
    id: 'deep-cut',
    name: 'Deep Cut',
    description: 'More pronounced, dramatic skate mark',
    path: 'M0,80 Q150,30 300,80 Q450,130 600,80 Q750,30 900,80 Q1050,130 1200,80 L1200,220 Q1050,170 900,220 Q750,270 600,220 Q450,170 300,220 Q150,270 0,220 Z',
    gradient: 'linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 30%, rgba(255,255,255,0.2) 70%, rgba(255,255,255,0.05) 100%)'
  },
  {
    id: 'curved-cut',
    name: 'Curved Cut',
    description: 'Smooth, flowing curved streak',
    path: 'M0,100 Q300,40 600,100 Q900,160 1200,100 L1200,200 Q900,140 600,200 Q300,160 0,200 Z',
    gradient: 'linear-gradient(90deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.3) 60%, rgba(255,255,255,0.1) 100%)'
  },
  {
    id: 'sharp-cut',
    name: 'Sharp Cut',
    description: 'Angular, aggressive skate mark',
    path: 'M0,100 L200,60 L400,100 L600,80 L800,100 L1000,70 L1200,100 L1200,200 L1000,170 L800,200 L600,180 L400,200 L200,160 L0,200 Z',
    gradient: 'linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0.1) 80%, rgba(255,255,255,0.02) 100%)'
  },
  {
    id: 'wide-cut',
    name: 'Wide Cut',
    description: 'Broad, sweeping skate mark',
    path: 'M0,90 Q150,50 300,90 Q450,130 600,90 Q750,50 900,90 Q1050,130 1200,90 L1200,210 Q1050,170 900,210 Q750,250 600,210 Q450,170 300,210 Q150,250 0,210 Z',
    gradient: 'linear-gradient(90deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0.1) 80%, rgba(255,255,255,0.02) 100%)'
  },
  {
    id: 'shallow-cut',
    name: 'Shallow Cut',
    description: 'Subtle, light skate mark',
    path: 'M0,120 Q250,100 500,120 Q750,140 1000,120 Q1150,100 1200,120 L1200,180 Q1150,160 1000,180 Q750,160 500,180 Q250,160 0,180 Z',
    gradient: 'linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.05) 100%)'
  }
];

export default function SkateStreaksPage() {
  const [selectedVariation, setSelectedVariation] = useState('single-cut');
  const [showCode, setShowCode] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState('slow');
  const [streakColor, setStreakColor] = useState('white');
  const [backgroundType, setBackgroundType] = useState('ice');

  const currentVariation = skateVariations.find(v => v.id === selectedVariation);

  const getAnimationClass = () => {
    switch(animationSpeed) {
      case 'slow': return 'animate-pulse';
      case 'medium': return 'animate-bounce';
      case 'fast': return 'animate-ping';
      default: return '';
    }
  };

  const getBackgroundStyle = () => {
    switch(backgroundType) {
      case 'ice':
        return 'linear-gradient(135deg, #e0f2fe 0%, #b3e5fc 50%, #81d4fa 100%)';
      case 'dark-ice':
        return 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #3b82f6 100%)';
      case 'arena':
        return 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)';
      default:
        return 'linear-gradient(135deg, #e0f2fe 0%, #b3e5fc 50%, #81d4fa 100%)';
    }
  };

  const getStreakGradient = () => {
    const baseColor = streakColor === 'white' ? '255,255,255' : 
                     streakColor === 'blue' ? '59,130,246' :
                     streakColor === 'silver' ? '203,213,225' : '255,255,255';
    
    return `linear-gradient(90deg, rgba(${baseColor},0.8) 0%, rgba(${baseColor},0.4) 50%, rgba(${baseColor},0.1) 100%)`;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/background-lab"
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Lab
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Skate Streak Backgrounds</h1>
            <button
              onClick={() => setShowCode(!showCode)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {showCode ? 'Hide' : 'Show'} Code
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls Panel */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Skate Streak Variations</h2>
              <div className="space-y-3">
                {skateVariations.map((variation) => (
                  <button
                    key={variation.id}
                    onClick={() => setSelectedVariation(variation.id)}
                    className={`w-full text-left p-3 rounded-lg border transition-all ${
                      selectedVariation === variation.id
                        ? 'border-blue-500 bg-blue-50 text-blue-900'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="font-medium">{variation.name}</div>
                    <div className="text-sm text-gray-600">{variation.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Animation Controls */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Animation Speed</h3>
              <div className="space-y-3">
                {[
                  { value: 'none', label: 'Static' },
                  { value: 'slow', label: 'Slow Glow' },
                  { value: 'medium', label: 'Medium Pulse' },
                  { value: 'fast', label: 'Fast Flicker' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setAnimationSpeed(option.value)}
                    className={`w-full p-3 rounded-lg border transition-all ${
                      animationSpeed === option.value
                        ? 'border-blue-500 bg-blue-50 text-blue-900'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Controls */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Streak Color</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'white', label: 'White', color: 'bg-white' },
                  { value: 'blue', label: 'Blue', color: 'bg-blue-500' },
                  { value: 'silver', label: 'Silver', color: 'bg-gray-400' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setStreakColor(option.value)}
                    className={`p-3 rounded-lg border transition-all ${
                      streakColor === option.value
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full mx-auto mb-1 ${option.color}`}></div>
                    <div className="text-xs">{option.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Background Controls */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Ice Background</h3>
              <div className="space-y-3">
                {[
                  { value: 'ice', label: 'Light Ice' },
                  { value: 'dark-ice', label: 'Dark Ice' },
                  { value: 'arena', label: 'Arena Ice' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setBackgroundType(option.value)}
                    className={`w-full p-3 rounded-lg border transition-all ${
                      backgroundType === option.value
                        ? 'border-blue-500 bg-blue-50 text-blue-900'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Code Display */}
            {showCode && currentVariation && (
              <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm">
                <div className="text-gray-400 mb-2">SVG Code:</div>
                <pre>{`<svg viewBox="0 0 1200 300" className="w-full h-auto">
  <defs>
    <linearGradient id="streakGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="${streakColor}" stopOpacity="0.8" />
      <stop offset="50%" stopColor="${streakColor}" stopOpacity="0.4" />
      <stop offset="100%" stopColor="${streakColor}" stopOpacity="0.1" />
    </linearGradient>
  </defs>
  <path fill="url(#streakGrad)" d="${currentVariation.path}"></path>
</svg>`}</pre>
              </div>
            )}
          </div>

          {/* Preview Area */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
              
              {/* Full Page Background Preview */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Full Page Background</h3>
                <div 
                  className={`h-64 rounded-lg overflow-hidden relative ${getAnimationClass()}`}
                  style={{ background: getBackgroundStyle() }}
                >
                  <svg 
                    viewBox="0 0 1200 300" 
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="streakGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={streakColor} stopOpacity="0.8" />
                        <stop offset="50%" stopColor={streakColor} stopOpacity="0.4" />
                        <stop offset="100%" stopColor={streakColor} stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#streakGrad1)" d={currentVariation?.path}></path>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-white z-10">
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-2">Skate Streak</div>
                      <div className="text-white/80">Clean athletic energy</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Background Preview */}
              <div>
                <h3 className="text-lg font-medium mb-3">Card Background</h3>
                <div 
                  className={`h-48 rounded-lg overflow-hidden relative ${getAnimationClass()}`}
                  style={{ background: getBackgroundStyle() }}
                >
                  <svg 
                    viewBox="0 0 1200 300" 
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="streakGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={streakColor} stopOpacity="0.6" />
                        <stop offset="50%" stopColor={streakColor} stopOpacity="0.3" />
                        <stop offset="100%" stopColor={streakColor} stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#streakGrad2)" d={currentVariation?.path}></path>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-white z-10">
                    <div className="text-center">
                      <div className="text-xl font-bold">Card Title</div>
                      <div className="text-white/80">Skate mark effect</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Usage Examples */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Perfect For</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start">
                  <span className="text-blue-500 mr-2">🏒</span>
                  <span><strong>Hockey hero sections:</strong> Power Stop for dramatic impact</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-2">⚡</span>
                  <span><strong>Speed content:</strong> Speed Lines for motion and energy</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-2">🎯</span>
                  <span><strong>Call-to-actions:</strong> Single Cut for directional focus</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-2">🔄</span>
                  <span><strong>Navigation:</strong> Crossover Pattern for flow</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-2">❄️</span>
                  <span><strong>Subtle backgrounds:</strong> Ice Scratches for texture</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-2">📱</span>
                  <span><strong>Mobile responsive:</strong> All patterns scale perfectly</span>
                </div>
              </div>
            </div>

            {/* Technical Notes */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Technical Notes</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• SVG path creates smooth, scalable curves</div>
                <div>• Gradient opacity creates realistic fade effect</div>
                <div>• Works with any background color</div>
                <div>• Easy to customize streak direction and intensity</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
