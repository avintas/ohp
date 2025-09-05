'use client';

import Link from 'next/link';
import { useState } from 'react';

const svgVariations = [
  {
    id: 'wave-simple',
    name: 'Simple Wave',
    path: 'M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
    description: 'Clean, simple wave pattern'
  },
  {
    id: 'wave-complex',
    name: 'Complex Wave',
    path: 'M0,64L80,85.3C160,107,320,149,480,165.3C640,181,800,171,960,149.3C1120,128,1280,96,1440,96L1440,320L1280,320C1120,320,960,320,800,320C640,320,480,320,320,320C160,320,0,320,0,320Z',
    description: 'More detailed wave with multiple curves'
  },
  {
    id: 'wave-organic',
    name: 'Organic Wave',
    path: 'M0,128L60,138.7C120,149,240,171,360,186.7C480,203,600,213,720,202.7C840,192,960,160,1080,144C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z',
    description: 'Natural, flowing organic shape'
  },
  {
    id: 'wave-mountain',
    name: 'Mountain Wave',
    path: 'M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,186.7C960,213,1056,235,1152,213.3C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
    description: 'Mountain-like silhouette pattern'
  },
  {
    id: 'wave-double',
    name: 'Double Wave',
    path: 'M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z',
    description: 'Layered wave effect'
  },
  {
    id: 'wave-spiral',
    name: 'Spiral Wave',
    path: 'M0,128L40,138.7C80,149,160,171,240,186.7C320,203,400,213,480,202.7C560,192,640,160,720,144C800,128,880,128,920,128L960,128L960,320L920,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z',
    description: 'Spiral-like flowing pattern'
  }
];

export default function SVGWavesPage() {
  const [selectedVariation, setSelectedVariation] = useState('wave-simple');
  const [showCode, setShowCode] = useState(false);
  const [gradientType, setGradientType] = useState('linear');

  const currentVariation = svgVariations.find(v => v.id === selectedVariation);

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
            <h1 className="text-2xl font-bold text-gray-900">SVG Wave Backgrounds</h1>
            <button
              onClick={() => setShowCode(!showCode)}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
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
              <h2 className="text-xl font-semibold mb-4">SVG Wave Patterns</h2>
              <div className="space-y-3">
                {svgVariations.map((variation) => (
                  <button
                    key={variation.id}
                    onClick={() => setSelectedVariation(variation.id)}
                    className={`w-full text-left p-3 rounded-lg border transition-all ${
                      selectedVariation === variation.id
                        ? 'border-green-500 bg-green-50 text-green-900'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="font-medium">{variation.name}</div>
                    <div className="text-sm text-gray-600">{variation.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Gradient Controls */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Gradient Type</h3>
              <div className="space-y-3">
                <button
                  onClick={() => setGradientType('linear')}
                  className={`w-full p-3 rounded-lg border transition-all ${
                    gradientType === 'linear'
                      ? 'border-green-500 bg-green-50 text-green-900'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  Linear Gradient
                </button>
                <button
                  onClick={() => setGradientType('radial')}
                  className={`w-full p-3 rounded-lg border transition-all ${
                    gradientType === 'radial'
                      ? 'border-green-500 bg-green-50 text-green-900'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  Radial Gradient
                </button>
              </div>
            </div>

            {/* Code Display */}
            {showCode && currentVariation && (
              <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm">
                <div className="text-gray-400 mb-2">SVG Code:</div>
                <pre>{`<svg viewBox="0 0 1440 320" className="w-full h-auto">
  <defs>
    <${gradientType}Gradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#667eea" />
      <stop offset="100%" stopColor="#764ba2" />
    </${gradientType}Gradient>
  </defs>
  <path fill="url(#grad1)" d="${currentVariation.path}"></path>
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
                <div className="h-64 rounded-lg overflow-hidden relative bg-gray-200">
                  <svg 
                    viewBox="0 0 1440 320" 
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      {gradientType === 'linear' ? (
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#667eea" />
                          <stop offset="100%" stopColor="#764ba2" />
                        </linearGradient>
                      ) : (
                        <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#667eea" />
                          <stop offset="100%" stopColor="#764ba2" />
                        </radialGradient>
                      )}
                    </defs>
                    <path fill="url(#grad1)" d={currentVariation?.path}></path>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-2">Sample Content</div>
                      <div className="text-white/80">Scalable vector background</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Background Preview */}
              <div>
                <h3 className="text-lg font-medium mb-3">Card Background</h3>
                <div className="relative h-48 rounded-lg overflow-hidden bg-gray-200">
                  <svg 
                    viewBox="0 0 1440 320" 
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f093fb" />
                        <stop offset="100%" stopColor="#f5576c" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#grad2)" d={currentVariation?.path}></path>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-xl font-bold">Card Title</div>
                      <div className="text-white/80">SVG background</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advantages */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">SVG Advantages</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Scalable:</strong> Perfect at any size without quality loss</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Lightweight:</strong> Small file sizes, fast loading</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Customizable:</strong> Easy to modify colors and shapes</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Responsive:</strong> Adapts perfectly to container sizes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
