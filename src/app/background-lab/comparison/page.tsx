'use client';

import Link from 'next/link';
import { useState } from 'react';

const comparisonData = [
  {
    id: 'css-clippath',
    name: 'CSS Clip-Path',
    description: 'Wave patterns using CSS clip-path polygon',
    pros: ['Pure CSS', 'Lightweight', 'Easy to implement', 'Good browser support'],
    cons: ['Limited shape complexity', 'No animation support', 'Fixed shapes only'],
    performance: 'Excellent',
    complexity: 'Low',
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 'svg-waves',
    name: 'SVG Waves',
    description: 'Scalable vector wave backgrounds',
    pros: ['Infinitely scalable', 'Small file sizes', 'Customizable', 'Crisp at any size'],
    cons: ['More complex setup', 'SVG knowledge required', 'Limited animation'],
    performance: 'Excellent',
    complexity: 'Medium',
    color: 'from-green-500 to-teal-600'
  },
  {
    id: 'gradient-organic',
    name: 'Gradient Organic',
    description: 'Radial gradients with organic shapes',
    pros: ['Very flexible', 'Easy to animate', 'Natural look', 'Color variety'],
    cons: ['Can be heavy', 'Complex gradients', 'Performance concerns'],
    performance: 'Good',
    complexity: 'Medium',
    color: 'from-pink-500 to-rose-600'
  },
  {
    id: 'framer-motion',
    name: 'Framer Motion',
    description: 'Animated curved backgrounds',
    pros: ['Smooth animations', 'Rich interactions', 'Professional feel', 'Highly customizable'],
    cons: ['Library dependency', 'Larger bundle size', 'Learning curve', 'Performance impact'],
    performance: 'Good',
    complexity: 'High',
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'css-pseudo',
    name: 'CSS Pseudo',
    description: 'Layered effects with ::before/::after',
    pros: ['No extra HTML', 'Pure CSS', 'Good performance', 'Easy layering'],
    cons: ['Limited to 2 layers', 'Complex debugging', 'Browser quirks', 'Less flexible'],
    performance: 'Excellent',
    complexity: 'Medium',
    color: 'from-indigo-500 to-blue-600'
  }
];

export default function ComparisonPage() {
  const [sortBy, setSortBy] = useState('name');
  const [filterPerformance, setFilterPerformance] = useState('all');

  const sortedData = [...comparisonData].sort((a, b) => {
    switch(sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'performance':
        const perfOrder = { 'Excellent': 0, 'Good': 1, 'Fair': 2, 'Poor': 3 };
        return perfOrder[a.performance as keyof typeof perfOrder] - perfOrder[b.performance as keyof typeof perfOrder];
      case 'complexity':
        const compOrder = { 'Low': 0, 'Medium': 1, 'High': 2 };
        return compOrder[a.complexity as keyof typeof compOrder] - compOrder[b.complexity as keyof typeof compOrder];
      default:
        return 0;
    }
  });

  const filteredData = filterPerformance === 'all' 
    ? sortedData 
    : sortedData.filter(item => item.performance === filterPerformance);

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
            <h1 className="text-2xl font-bold text-gray-900">Background Comparison</h1>
            <div></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Controls */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="name">Name</option>
                <option value="performance">Performance</option>
                <option value="complexity">Complexity</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter by performance:</label>
              <select
                value={filterPerformance}
                onChange={(e) => setFilterPerformance(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All</option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
                <option value="Poor">Poor</option>
              </select>
            </div>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredData.map((method) => (
            <div key={method.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Header */}
              <div className={`h-32 bg-gradient-to-br ${method.color} p-6 text-white relative`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">{method.name}</h3>
                  <p className="text-white/90 text-sm">{method.description}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Performance & Complexity */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">Performance</div>
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      method.performance === 'Excellent' ? 'bg-green-100 text-green-800' :
                      method.performance === 'Good' ? 'bg-blue-100 text-blue-800' :
                      method.performance === 'Fair' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {method.performance}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">Complexity</div>
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      method.complexity === 'Low' ? 'bg-green-100 text-green-800' :
                      method.complexity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {method.complexity}
                    </div>
                  </div>
                </div>

                {/* Pros */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Pros</h4>
                  <ul className="space-y-1">
                    {method.pros.map((pro, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <span className="text-green-500 mr-2 mt-0.5">✓</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Cons</h4>
                  <ul className="space-y-1">
                    {method.cons.map((con, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <span className="text-red-500 mr-2 mt-0.5">✗</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <Link
                  href={`/background-lab/${method.id}`}
                  className={`block w-full text-center py-2 px-4 rounded-lg font-medium transition-colors bg-gradient-to-r ${method.color} text-white hover:opacity-90`}
                >
                  Test This Method
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Decision Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Speed?</h3>
              <p className="text-sm text-gray-600 mb-3">Choose CSS Clip-Path or CSS Pseudo-elements for maximum performance</p>
              <div className="text-xs text-blue-600 font-medium">Best: CSS Clip-Path</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Want Scalability?</h3>
              <p className="text-sm text-gray-600 mb-3">SVG is perfect for responsive designs that need to look crisp at any size</p>
              <div className="text-xs text-green-600 font-medium">Best: SVG Waves</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Animation?</h3>
              <p className="text-sm text-gray-600 mb-3">Framer Motion provides the smoothest and most flexible animations</p>
              <div className="text-xs text-purple-600 font-medium">Best: Framer Motion</div>
            </div>
            <div className="text-center p-6 bg-pink-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Want Simplicity?</h3>
              <p className="text-sm text-gray-600 mb-3">CSS Clip-Path is the easiest to implement and maintain</p>
              <div className="text-xs text-pink-600 font-medium">Best: CSS Clip-Path</div>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Flexibility?</h3>
              <p className="text-sm text-gray-600 mb-3">Gradient Organic shapes offer the most creative freedom</p>
              <div className="text-xs text-yellow-600 font-medium">Best: Gradient Organic</div>
            </div>
            <div className="text-center p-6 bg-indigo-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Want Layering?</h3>
              <p className="text-sm text-gray-600 mb-3">CSS Pseudo-elements create complex layered effects without extra HTML</p>
              <div className="text-xs text-indigo-600 font-medium">Best: CSS Pseudo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
