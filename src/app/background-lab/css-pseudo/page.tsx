'use client';

import Link from 'next/link';
import { useState } from 'react';

const pseudoVariations = [
  {
    id: 'layered-waves',
    name: 'Layered Waves',
    description: 'Multiple wave layers using ::before and ::after',
    before: 'radial-gradient(ellipse at 20% 20%, #667eea 0%, transparent 50%)',
    after: 'radial-gradient(ellipse at 80% 80%, #764ba2 0%, transparent 50%)',
    beforeClip: 'polygon(0% 20%, 100% 0%, 100% 80%, 0% 100%)',
    afterClip: 'polygon(0% 0%, 100% 20%, 100% 100%, 0% 80%)'
  },
  {
    id: 'floating-shapes',
    name: 'Floating Shapes',
    description: 'Abstract floating geometric shapes',
    before: 'radial-gradient(circle at 30% 30%, #f093fb 0%, transparent 40%)',
    after: 'radial-gradient(circle at 70% 70%, #f5576c 0%, transparent 40%)',
    beforeClip: 'polygon(0% 0%, 50% 0%, 25% 100%)',
    afterClip: 'polygon(50% 0%, 100% 0%, 75% 100%)'
  },
  {
    id: 'organic-blobs',
    name: 'Organic Blobs',
    description: 'Natural flowing blob shapes',
    before: 'radial-gradient(ellipse at 25% 25%, #4facfe 0%, transparent 60%)',
    after: 'radial-gradient(ellipse at 75% 75%, #00f2fe 0%, transparent 60%)',
    beforeClip: 'polygon(0% 30%, 20% 0%, 40% 25%, 60% 10%, 80% 20%, 100% 0%, 100% 70%, 80% 100%, 60% 90%, 40% 100%, 20% 80%, 0% 90%)',
    afterClip: 'polygon(0% 0%, 20% 20%, 40% 5%, 60% 15%, 80% 0%, 100% 30%, 100% 100%, 80% 80%, 60% 95%, 40% 85%, 20% 100%, 0% 70%)'
  },
  {
    id: 'geometric-layers',
    name: 'Geometric Layers',
    description: 'Clean geometric overlapping shapes',
    before: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
    after: 'linear-gradient(-45deg, #f093fb 0%, #f5576c 100%)',
    beforeClip: 'polygon(0% 0%, 100% 0%, 100% 50%, 0% 100%)',
    afterClip: 'polygon(0% 50%, 100% 0%, 100% 100%, 0% 100%)'
  },
  {
    id: 'flowing-curves',
    name: 'Flowing Curves',
    description: 'Smooth flowing curved transitions',
    before: 'radial-gradient(ellipse at 40% 40%, #a8edea 0%, transparent 50%)',
    after: 'radial-gradient(ellipse at 60% 60%, #fed6e3 0%, transparent 50%)',
    beforeClip: 'polygon(0% 25%, 25% 0%, 50% 15%, 75% 5%, 100% 20%, 100% 80%, 75% 100%, 50% 85%, 25% 95%, 0% 75%)',
    afterClip: 'polygon(0% 20%, 25% 5%, 50% 10%, 75% 0%, 100% 25%, 100% 75%, 75% 95%, 50% 90%, 25% 100%, 0% 80%)'
  },
  {
    id: 'asymmetric-flow',
    name: 'Asymmetric Flow',
    description: 'Unbalanced, dynamic flow patterns',
    before: 'radial-gradient(ellipse at 10% 40%, #667eea 0%, transparent 70%)',
    after: 'radial-gradient(ellipse at 90% 60%, #764ba2 0%, transparent 70%)',
    beforeClip: 'polygon(0% 40%, 30% 0%, 60% 20%, 100% 10%, 100% 60%, 70% 100%, 40% 80%, 0% 90%)',
    afterClip: 'polygon(0% 10%, 30% 20%, 60% 0%, 100% 40%, 100% 90%, 70% 80%, 40% 100%, 0% 60%)'
  }
];

export default function CSSPseudoPage() {
  const [selectedVariation, setSelectedVariation] = useState('layered-waves');
  const [showCode, setShowCode] = useState(false);
  const [opacity, setOpacity] = useState(0.8);

  const currentVariation = pseudoVariations.find(v => v.id === selectedVariation);

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
            <h1 className="text-2xl font-bold text-gray-900">CSS Pseudo-Element Backgrounds</h1>
            <button
              onClick={() => setShowCode(!showCode)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
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
              <h2 className="text-xl font-semibold mb-4">Pseudo-Element Variations</h2>
              <div className="space-y-3">
                {pseudoVariations.map((variation) => (
                  <button
                    key={variation.id}
                    onClick={() => setSelectedVariation(variation.id)}
                    className={`w-full text-left p-3 rounded-lg border transition-all ${
                      selectedVariation === variation.id
                        ? 'border-indigo-500 bg-indigo-50 text-indigo-900'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="font-medium">{variation.name}</div>
                    <div className="text-sm text-gray-600">{variation.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Opacity Controls */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Layer Opacity</h3>
              <div className="space-y-3">
                <input
                  type="range"
                  min="0.1"
                  max="1"
                  step="0.1"
                  value={opacity}
                  onChange={(e) => setOpacity(parseFloat(e.target.value))}
                  className="w-full"
                />
                <div className="text-sm text-gray-600 text-center">
                  Opacity: {Math.round(opacity * 100)}%
                </div>
              </div>
            </div>

            {/* Code Display */}
            {showCode && currentVariation && (
              <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm">
                <div className="text-gray-400 mb-2">CSS:</div>
                <pre>{`.pseudo-bg {
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.pseudo-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${currentVariation.before};
  clip-path: ${currentVariation.beforeClip};
  opacity: ${opacity};
}

.pseudo-bg::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${currentVariation.after};
  clip-path: ${currentVariation.afterClip};
  opacity: ${opacity};
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
                <div className="h-64 rounded-lg overflow-hidden relative bg-gray-200">
                  {/* Base background */}
                  <div 
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
                  ></div>
                  
                  {/* ::before pseudo-element simulation */}
                  <div 
                    className="absolute inset-0"
                    style={{ 
                      background: currentVariation?.before,
                      clipPath: currentVariation?.beforeClip,
                      opacity: opacity
                    }}
                  ></div>
                  
                  {/* ::after pseudo-element simulation */}
                  <div 
                    className="absolute inset-0"
                    style={{ 
                      background: currentVariation?.after,
                      clipPath: currentVariation?.afterClip,
                      opacity: opacity
                    }}
                  ></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center text-white z-10">
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-2">Sample Content</div>
                      <div className="text-white/80">Layered pseudo-elements</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Background Preview */}
              <div>
                <h3 className="text-lg font-medium mb-3">Card Background</h3>
                <div className="relative h-48 rounded-lg overflow-hidden bg-gray-200">
                  {/* Base background */}
                  <div 
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}
                  ></div>
                  
                  {/* ::before pseudo-element simulation */}
                  <div 
                    className="absolute inset-0"
                    style={{ 
                      background: currentVariation?.before.replace('#667eea', '#4facfe').replace('#764ba2', '#00f2fe'),
                      clipPath: currentVariation?.beforeClip,
                      opacity: opacity
                    }}
                  ></div>
                  
                  {/* ::after pseudo-element simulation */}
                  <div 
                    className="absolute inset-0"
                    style={{ 
                      background: currentVariation?.after.replace('#f093fb', '#a8edea').replace('#f5576c', '#fed6e3'),
                      clipPath: currentVariation?.afterClip,
                      opacity: opacity
                    }}
                  ></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center text-white z-10">
                    <div className="text-center">
                      <div className="text-xl font-bold">Card Title</div>
                      <div className="text-white/80">Pseudo-element layers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Layer Breakdown */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Layer Breakdown</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}></div>
                  <span className="text-sm text-gray-600">Base background</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded" style={{ background: currentVariation?.before, opacity: opacity }}></div>
                  <span className="text-sm text-gray-600">::before pseudo-element</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded" style={{ background: currentVariation?.after, opacity: opacity }}></div>
                  <span className="text-sm text-gray-600">::after pseudo-element</span>
                </div>
              </div>
            </div>

            {/* Advantages */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Pseudo-Element Advantages</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start">
                  <span className="text-indigo-500 mr-2">✓</span>
                  <span><strong>No extra HTML:</strong> Pure CSS solution, no additional elements</span>
                </div>
                <div className="flex items-start">
                  <span className="text-indigo-500 mr-2">✓</span>
                  <span><strong>Performance:</strong> Lightweight, no JavaScript required</span>
                </div>
                <div className="flex items-start">
                  <span className="text-indigo-500 mr-2">✓</span>
                  <span><strong>Layering:</strong> Easy to create complex layered effects</span>
                </div>
                <div className="flex items-start">
                  <span className="text-indigo-500 mr-2">✓</span>
                  <span><strong>Maintainable:</strong> All styling contained in CSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
