'use client';

import Link from 'next/link';
import { useState } from 'react';

const clipPathVariations = [
  {
    id: 'wave-1',
    name: 'Gentle Wave',
    clipPath: 'polygon(0% 20%, 100% 0%, 100% 80%, 0% 100%)',
    description: 'Soft, flowing wave pattern'
  },
  {
    id: 'wave-2', 
    name: 'Sharp Wave',
    clipPath: 'polygon(0% 15%, 25% 0%, 50% 20%, 75% 5%, 100% 15%, 100% 85%, 75% 100%, 50% 80%, 25% 95%, 0% 85%)',
    description: 'More dramatic wave with peaks and valleys'
  },
  {
    id: 'wave-3',
    name: 'Organic Curve',
    clipPath: 'polygon(0% 30%, 20% 0%, 40% 25%, 60% 10%, 80% 20%, 100% 0%, 100% 70%, 80% 100%, 60% 90%, 40% 100%, 20% 80%, 0% 90%)',
    description: 'Natural, organic flowing shape'
  },
  {
    id: 'wave-4',
    name: 'Diagonal Cut',
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 70%, 0% 100%)',
    description: 'Clean diagonal transition'
  },
  {
    id: 'wave-5',
    name: 'S-Curve',
    clipPath: 'polygon(0% 25%, 25% 0%, 50% 15%, 75% 5%, 100% 20%, 100% 80%, 75% 100%, 50% 85%, 25% 95%, 0% 75%)',
    description: 'Elegant S-shaped curve'
  },
  {
    id: 'wave-6',
    name: 'Mountain Range',
    clipPath: 'polygon(0% 40%, 10% 20%, 20% 35%, 30% 15%, 40% 30%, 50% 10%, 60% 25%, 70% 5%, 80% 20%, 90% 15%, 100% 30%, 100% 100%, 0% 100%)',
    description: 'Mountain-like silhouette'
  }
];

export default function CSSClipPathPage() {
  const [selectedVariation, setSelectedVariation] = useState('wave-1');
  const [showCode, setShowCode] = useState(false);

  const currentVariation = clipPathVariations.find(v => v.id === selectedVariation);

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
            <h1 className="text-2xl font-bold text-gray-900">CSS Clip-Path Backgrounds</h1>
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
              <h2 className="text-xl font-semibold mb-4">Wave Variations</h2>
              <div className="space-y-3">
                {clipPathVariations.map((variation) => (
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

            {/* Code Display */}
            {showCode && currentVariation && (
              <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm">
                <div className="text-gray-400 mb-2">CSS:</div>
                <pre>{`.curved-bg {
  clip-path: ${currentVariation.clipPath};
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
                  className="h-64 rounded-lg overflow-hidden relative"
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    clipPath: currentVariation?.clipPath
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-2">Sample Content</div>
                      <div className="text-white/80">This is how your content would look</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Background Preview */}
              <div>
                <h3 className="text-lg font-medium mb-3">Card Background</h3>
                <div className="relative">
                  <div 
                    className="h-48 rounded-lg overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                      clipPath: currentVariation?.clipPath
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      <div className="text-center">
                        <div className="text-xl font-bold">Card Title</div>
                        <div className="text-white/80">Card content here</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Usage Examples */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Usage Examples</h3>
              <div className="space-y-4 text-sm text-gray-600">
                <div>
                  <strong>Hero sections:</strong> Create dynamic, eye-catching headers
                </div>
                <div>
                  <strong>Content dividers:</strong> Separate sections with flowing transitions
                </div>
                <div>
                  <strong>Card designs:</strong> Add visual interest to components
                </div>
                <div>
                  <strong>Mobile responsive:</strong> Works great on all screen sizes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
