'use client';

import { useState } from 'react';

interface StoriesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function StoriesModal({ isOpen, onClose }: StoriesModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a1a2e] rounded-2xl shadow-2xl max-w-lg w-full border border-[#2d3748]">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#2d3748]">
          <div className="flex items-center gap-3">
            <div className="text-3xl">📰</div>
            <h2 className="text-2xl font-bold text-white">
              What's "Stories"?
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {/* Main Definition */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-[#219EBC] mb-2">
              The Human Side of Hockey
            </h3>
            <p className="text-[#a0aec0] leading-relaxed">
              Stories brings you the heart of hockey - real moments, personal journeys, and the human connections that make this game special. From childhood dreams to championship victories, discover the stories behind the stats with <img src="/gims/gim-00021.webp" alt="The Professor" className="inline-block w-12 h-12 rounded-full mx-1" /> The Historian.
            </p>
          </div>



          {/* Action Buttons */}
          <div className="flex gap-3">
            <button 
              onClick={onClose}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-[#219EBC] to-[#4cc9f0] hover:from-[#219EBC]/90 hover:to-[#4cc9f0]/90 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
            >
              📰 Discover Stories
            </button>
            <button 
              onClick={onClose}
              className="px-4 py-3 bg-[#2d3748] hover:bg-[#4a5568] text-[#a0aec0] font-semibold rounded-lg transition-colors duration-200"
            >
              Got it!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function useStoriesExplainer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return {
    isModalOpen,
    openModal,
    closeModal,
    StoriesModal: () => <StoriesModal isOpen={isModalOpen} onClose={closeModal} />
  };
}
