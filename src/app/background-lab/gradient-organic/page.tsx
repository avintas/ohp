'use client';

import Link from 'next/link';
import { useState } from 'react';

const organicVariations = [
  {
    id: 'blob-1',
    name: 'Organic Blob',
    description: 'Natural flowing blob shape',
    style: 'radial-gradient(ellipse at 30% 20%, #667eea 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, #764ba2 0%, transparent 50%)'
  },
  {
    id: 'blob-2',
    name: 'Multi-Layer Blob',
    description: 'Layered organic shapes',
    style: 'radial-gradient(ellipse at 20% 30%, #f093fb 0%, transparent 40%), radial-gradient(ellipse at 80% 70%, #f5576c 0%, transparent 40%), radial-gradient(ellipse at 50% 50%, #4facfe 0%, transparent 60%)'
  },
  {
    id: 'blob-3',
    name: 'Asymmetric Flow',
    description: 'Unbalanced, natural flow',
    style: 'radial-gradient(ellipse at 10% 40%, #667eea 0%, transparent 70%), linear-gradient(45deg, #764ba2 0%, transparent 50%)'
  },
  {
    id: 'blob-4',
    name: 'Color Burst',
    description: 'Multiple color sources',
    style: 'radial-gradient(circle at 25% 25%, #ff9a9e 0%, transparent 50%), radial-gradient(circle at 75% 75%, #fecfef 0%, transparent 50%), radial-gradient(circle at 50% 50%, #fecfef 0%, transparent 50%)'
  },
  {
    id: 'blob-5',
    name: 'Soft Edges',
    description: 'Gentle, diffused edges',
    style: 'radial-gradient(ellipse at 40% 60%, #a8edea 0%, #fed6e3 50%, transparent 70%)'
  },
  {
    id: 'blob-6',
    name: 'Complex Layers',
    description: 'Multiple overlapping shapes',
    style: 'radial-gradient(ellipse at 20% 20%, #667eea 0%, transparent 30%), radial-gradient(ellipse at 60% 40%, #764ba2 0%, transparent 40%), radial-gradient(ellipse at 80% 80%, #f093fb 0%, transparent 50%), linear-gradient(135deg, #f5576c 0%, transparent 30%)'
  }
];

export default function GradientOrganicPage() {
  const [selectedVariation, setSelectedVariation] = useState('blob-1');
  const [showCode, setShowCode] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState('slow');

  const currentVariation = organicVariations.find(v => v.id === selectedVariation);

  const getAnimationClass = () => {
    switch(animationSpeed) {
      case 'slow': return 'animate-pulse';
      case 'medium': return 'animate-bounce';
      case 'fast': return 'animate-ping';
      default: return '';
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
            <h1 className="text-2xl font-bold text-gray-900">Gradient Organic Backgrounds</h1>
            <button
              onClick={() => setShowCode(!showCode)}
              className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
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
              <h2 className="text-xl font-semibold mb-4">Organic Shape Variations</h2>
              <div className="space-y-3">
                {organicVariations.map((variation) => (
                  <button
                    key={variation.id}
                    onClick={() => setSelectedVariation(variation.id)}
                    className={`w-full text-left p-3 rounded-lg border transition-all ${
                      selectedVariation === variation.id
                        ? 'border-pink-500 bg-pink-50 text-pink-900'
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
                  { value: 'none', label: 'No Animation' },
                  { value: 'slow', label: 'Slow Pulse' },
                  { value: 'medium', label: 'Medium Bounce' },
                  { value: 'fast', label: 'Fast Ping' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setAnimationSpeed(option.value)}
                    className={`w-full p-3 rounded-lg border transition-all ${
                      animationSpeed === option.value
                        ? 'border-pink-500 bg-pink-50 text-pink-900'
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
                <div className="text-gray-400 mb-2">CSS:</div>
                <pre>{`.organic-bg {
  background: ${currentVariation.style};
  ${animationSpeed !== 'none' ? `animation: ${animationSpeed === 'slow' ? 'pulse' : animationSpeed === 'medium' ? 'bounce' : 'ping'} 2s infinite;` : ''}
}`}</pre>
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
                  style={{ background: currentVariation?.style }}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-2">Sample Content</div>
                      <div className="text-white/80">Organic gradient background</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Background Preview */}
              <div>
                <h3 className="text-lg font-medium mb-3">Card Background</h3>
                <div 
                  className={`h-48 rounded-lg overflow-hidden relative ${getAnimationClass()}`}
                  style={{ 
                    background: currentVariation?.style.replace('#667eea', '#f093fb').replace('#764ba2', '#f5576c')
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-xl font-bold">Card Title</div>
                      <div className="text-white/80">Organic shape</div>
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
                  Hover over the shapes below to see them respond:
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div 
                    className="h-20 rounded-lg cursor-pointer transition-transform hover:scale-105"
                    style={{ background: 'radial-gradient(ellipse at 30% 20%, #667eea 0%, transparent 50%)' }}
                  ></div>
                  <div 
                    className="h-20 rounded-lg cursor-pointer transition-transform hover:scale-105"
                    style={{ background: 'radial-gradient(ellipse at 70% 80%, #764ba2 0%, transparent 50%)' }}
                  ></div>
                  <div 
                    className="h-20 rounded-lg cursor-pointer transition-transform hover:scale-105"
                    style={{ background: 'radial-gradient(ellipse at 50% 50%, #f093fb 0%, transparent 50%)' }}
                  ></div>
                  <div 
                    className="h-20 rounded-lg cursor-pointer transition-transform hover:scale-105"
                    style={{ background: 'radial-gradient(ellipse at 20% 80%, #f5576c 0%, transparent 50%)' }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Best Practices */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Best Practices</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span><strong>Layer gradients:</strong> Combine multiple radial gradients for depth</span>
                </div>
                <div className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span><strong>Use transparency:</strong> Let shapes blend naturally</span>
                </div>
                <div className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span><strong>Vary positions:</strong> Different ellipse centers create organic feel</span>
                </div>
                <div className="flex items-start">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span><strong>Color harmony:</strong> Use complementary or analogous colors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
