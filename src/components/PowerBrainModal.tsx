'use client';

import { useState } from 'react';

interface PowerBrainModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PowerBrainModal({ isOpen, onClose }: PowerBrainModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a1a2e] rounded-2xl shadow-2xl max-w-lg w-full border border-[#2d3748]">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#2d3748]">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🧠</div>
            <h2 className="text-2xl font-bold text-white">
              What's "Power Brain"?
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
            <h3 className="text-xl font-bold text-[#4361ee] mb-2">
              Hockey Knowledge Challenges
            </h3>
            <p className="text-[#a0aec0] leading-relaxed">
              Power Brain is your hockey IQ training ground. Test your knowledge with The Professor, challenge friends, and discover amazing hockey facts you never knew. From basic rules to legendary trivia - power up your hockey brain!
            </p>
          </div>

          {/* Community Stats */}
          <div className="bg-[#16213e] rounded-xl p-4 mb-6 text-center">
            <div className="text-2xl font-bold text-[#4361ee] mb-1">1,247</div>
            <div className="text-sm text-[#a0aec0]">Brain challenges completed this month</div>
            <div className="text-xs text-[#718096] mt-1">Join the knowledge quest!</div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button 
              onClick={onClose}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-[#4361ee] to-[#7209b7] hover:from-[#4361ee]/90 hover:to-[#7209b7]/90 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
            >
              🧠 Power Up Your Brain
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

export function usePowerBrainExplainer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return {
    isModalOpen,
    openModal,
    closeModal,
    PowerBrainModal: () => <PowerBrainModal isOpen={isModalOpen} onClose={closeModal} />
  };
}
