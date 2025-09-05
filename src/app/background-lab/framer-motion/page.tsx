'use client';

import Link from 'next/link';
import { useState } from 'react';

// Note: In a real implementation, you would install framer-motion
// For this demo, we'll use CSS animations to simulate the effect

const motionVariations = [
  {
    id: 'floating-blobs',
    name: 'Floating Blobs',
    description: 'Gentle floating organic shapes',
    animation: 'float'
  },
  {
    id: 'pulsing-waves',
    name: 'Pulsing Waves',
    description: 'Rhythmic wave-like movements',
    animation: 'pulse-wave'
  },
  {
    id: 'rotating-shapes',
    name: 'Rotating Shapes',
    description: 'Slowly rotating geometric forms',
    animation: 'rotate'
  },
  {
    id: 'morphing-blobs',
    name: 'Morphing Blobs',
    description: 'Shapes that continuously morph',
    animation: 'morph'
  },
  {
    id: 'breathing-gradient',
    name: 'Breathing Gradient',
    description: 'Gradient that expands and contracts',
    animation: 'breathe'
  },
  {
    id: 'dancing-particles',
    name: 'Dancing Particles',
    description: 'Small animated particles',
    animation: 'dance'
  }
];

export default function FramerMotionPage() {
  const [selectedVariation, setSelectedVariation] = useState('floating-blobs');
  const [showCode, setShowCode] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState('normal');

  const currentVariation = motionVariations.find(v => v.id === selectedVariation);

  const getSpeedClass = () => {
    switch(animationSpeed) {
      case 'slow': return 'duration-[4s]';
      case 'normal': return 'duration-[2s]';
      case 'fast': return 'duration-[1s]';
      default: return 'duration-[2s]';
    }
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
            <h1 className="text-2xl font-bold text-gray-900">Framer Motion Backgrounds</h1>
            <button
              onClick={() => setShowCode(!showCode)}
              className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
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
              <h2 className="text-xl font-semibold mb-4">Motion Variations</h2>
              <div className="space-y-3">
                {motionVariations.map((variation) => (
                  <button
                    key={variation.id}
                    onClick={() => setSelectedVariation(variation.id)}
                    className={`w-full text-left p-3 rounded-lg border transition-all ${
                      selectedVariation === variation.id
                        ? 'border-orange-500 bg-orange-50 text-orange-900'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="font-medium">{variation.name}</div>
                    <div className="text-sm text-gray-600">{variation.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Animation Speed Controls */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Animation Speed</h3>
              <div className="space-y-3">
                {[
                  { value: 'slow', label: 'Slow & Gentle' },
                  { value: 'normal', label: 'Normal' },
                  { value: 'fast', label: 'Fast & Energetic' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setAnimationSpeed(option.value)}
                    className={`w-full p-3 rounded-lg border transition-all ${
                      animationSpeed === option.value
                        ? 'border-orange-500 bg-orange-50 text-orange-900'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Installation Note */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">Installation Required</h4>
              <p className="text-sm text-yellow-700">
                To use Framer Motion, install it first:
              </p>
              <code className="block mt-2 p-2 bg-yellow-100 rounded text-xs">
                npm install framer-motion
              </code>
            </div>

            {/* Code Display */}
            {showCode && currentVariation && (
              <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm">
                <div className="text-gray-400 mb-2">React + Framer Motion:</div>
                <pre>{`import { motion } from 'framer-motion';

const AnimatedBackground = () => (
  <motion.div
    className="absolute inset-0"
    style={{
      background: 'radial-gradient(ellipse at 30% 20%, #667eea 0%, transparent 50%)'
    }}
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      borderRadius: ['20%', '50%', '20%']
    }}
    transition={{
      duration: ${animationSpeed === 'slow' ? '4' : animationSpeed === 'fast' ? '1' : '2'},
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);`}</pre>
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
                <div className="h-64 rounded-lg overflow-hidden relative bg-gray-200">
                  {/* Simulated animated background */}
                  <div 
                    className={`absolute inset-0 ${getSpeedClass()} ${
                      currentVariation?.animation === 'float' ? 'animate-bounce' :
                      currentVariation?.animation === 'pulse-wave' ? 'animate-pulse' :
                      currentVariation?.animation === 'rotate' ? 'animate-spin' :
                      currentVariation?.animation === 'morph' ? 'animate-ping' :
                      currentVariation?.animation === 'breathe' ? 'animate-pulse' :
                      'animate-bounce'
                    }`}
                    style={{
                      background: 'radial-gradient(ellipse at 30% 20%, #667eea 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, #764ba2 0%, transparent 50%)'
                    }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white z-10">
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-2">Sample Content</div>
                      <div className="text-white/80">Animated background</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Background Preview */}
              <div>
                <h3 className="text-lg font-medium mb-3">Card Background</h3>
                <div className="relative h-48 rounded-lg overflow-hidden bg-gray-200">
                  <div 
                    className={`absolute inset-0 ${getSpeedClass()} ${
                      currentVariation?.animation === 'float' ? 'animate-bounce' :
                      currentVariation?.animation === 'pulse-wave' ? 'animate-pulse' :
                      currentVariation?.animation === 'rotate' ? 'animate-spin' :
                      currentVariation?.animation === 'morph' ? 'animate-ping' :
                      currentVariation?.animation === 'breathe' ? 'animate-pulse' :
                      'animate-bounce'
                    }`}
                    style={{
                      background: 'radial-gradient(ellipse at 40% 60%, #f093fb 0%, #f5576c 50%, transparent 70%)'
                    }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white z-10">
                    <div className="text-center">
                      <div className="text-xl font-bold">Card Title</div>
                      <div className="text-white/80">Motion background</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Demo */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Interactive Demo</h3>
              <div className="space-y-4">
                <div className="text-sm text-gray-600">
                  Hover to trigger different animations:
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div 
                    className="h-20 rounded-lg cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-12"
                    style={{ background: 'radial-gradient(ellipse at 30% 20%, #667eea 0%, transparent 50%)' }}
                  ></div>
                  <div 
                    className="h-20 rounded-lg cursor-pointer transition-all duration-300 hover:scale-110 hover:-rotate-12"
                    style={{ background: 'radial-gradient(ellipse at 70% 80%, #764ba2 0%, transparent 50%)' }}
                  ></div>
                  <div 
                    className="h-20 rounded-lg cursor-pointer transition-all duration-300 hover:scale-110 hover:skew-x-12"
                    style={{ background: 'radial-gradient(ellipse at 50% 50%, #f093fb 0%, transparent 50%)' }}
                  ></div>
                  <div 
                    className="h-20 rounded-lg cursor-pointer transition-all duration-300 hover:scale-110 hover:-skew-x-12"
                    style={{ background: 'radial-gradient(ellipse at 20% 80%, #f5576c 0%, transparent 50%)' }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Performance Tips */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Performance Tips</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start">
                  <span className="text-orange-500 mr-2">⚡</span>
                  <span><strong>Use transform:</strong> Animate transform properties for better performance</span>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-500 mr-2">⚡</span>
                  <span><strong>Limit animations:</strong> Don't animate too many elements simultaneously</span>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-500 mr-2">⚡</span>
                  <span><strong>Use will-change:</strong> Hint the browser about upcoming animations</span>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-500 mr-2">⚡</span>
                  <span><strong>Consider reduced motion:</strong> Respect user's motion preferences</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
