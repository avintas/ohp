'use client';

import { StickyNavbar } from '../../components/StickyNavbar';
import { Footer } from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function MindCoachPage() {
  return (
    <div className="min-h-screen bg-[#0f0f23]">
      {/* Sticky Navbar */}
      <StickyNavbar />

      {/* Main Content */}
      <main className="py-20 px-4">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Character Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Image 
                src="/avatars/mind-coach.webp" 
                alt="The Mind Coach"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full object-cover border-4 border-[#8B5CF6]/50"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
              The Mind Coach
            </h1>
            <p className="text-xl text-[#a0aec0] max-w-3xl mx-auto leading-relaxed mb-6">
              The mental game specialist. Focusing on mindset, psychology, and the mental 
              toughness that separates good players from great ones.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-[#8B5CF6]/20 text-[#A855F7] text-sm rounded-full border border-[#8B5CF6]/30">Mindset</span>
              <span className="px-4 py-2 bg-[#8B5CF6]/20 text-[#A855F7] text-sm rounded-full border border-[#8B5CF6]/30">Psychology</span>
              <span className="px-4 py-2 bg-[#8B5CF6]/20 text-[#A855F7] text-sm rounded-full border border-[#8B5CF6]/30">Focus</span>
            </div>
          </div>

          {/* Featured Content */}
          <div className="grid gap-8 mb-12">
            
            {/* Mindset Monday */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 border border-[#2d3748]">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">🧠</div>
                <h2 className="text-2xl font-bold text-white">Mindset Monday</h2>
              </div>
              <div className="bg-[#8B5CF6]/10 rounded-xl p-6 border border-[#8B5CF6]/20">
                <h3 className="text-xl font-bold text-white mb-3">The Champion&apos;s Mindset</h3>
                <p className="text-[#a0aec0] leading-relaxed mb-4">
                  Champions don&apos;t just think differently - they train their minds like they train their bodies. 
                  Every thought is a choice. Choose confidence over doubt, focus over distraction, 
                  and growth over comfort. Your mind is your most powerful tool.
                </p>
                <div className="flex items-center gap-2 text-sm text-[#A855F7]">
                  <span>💭</span>
                  <span>Remember: Mindset is a skill you can develop</span>
                </div>
              </div>
            </div>

            {/* Focus Technique */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 border border-[#2d3748]">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">🎯</div>
                <h2 className="text-2xl font-bold text-white">Focus Technique</h2>
              </div>
              <div className="bg-[#8B5CF6]/10 rounded-xl p-6 border border-[#8B5CF6]/20">
                <h3 className="text-xl font-bold text-white mb-3">The 5-Second Rule</h3>
                <p className="text-[#a0aec0] leading-relaxed mb-4">
                  When pressure mounts and your mind starts racing, use the 5-second rule: 
                  Take 5 deep breaths, focus on one specific task, and block out everything else. 
                  This technique helps you stay present and perform under pressure.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-[#8B5CF6]/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-[#A855F7]">5</div>
                    <div className="text-sm text-[#a0aec0]">Breaths</div>
                  </div>
                  <div className="bg-[#8B5CF6]/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-[#A855F7]">1</div>
                    <div className="text-sm text-[#a0aec0]">Focus</div>
                  </div>
                  <div className="bg-[#8B5CF6]/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-[#A855F7]">∞</div>
                    <div className="text-sm text-[#a0aec0]">Results</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Psychology Insight */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 border border-[#2d3748]">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">🔬</div>
                <h2 className="text-2xl font-bold text-white">Psychology Insight</h2>
              </div>
              <div className="bg-[#8B5CF6]/10 rounded-xl p-6 border border-[#8B5CF6]/20">
                <h3 className="text-xl font-bold text-white mb-3">The Flow State</h3>
                <p className="text-[#a0aec0] leading-relaxed mb-4">
                  Flow state is that magical zone where everything clicks - your skills, your instincts, 
                  and your confidence align perfectly. It&apos;s not luck; it&apos;s a mental state you can cultivate 
                  through preparation, visualization, and staying present in the moment.
                </p>
                <div className="flex items-center gap-2 text-sm text-[#A855F7]">
                  <span>⚡</span>
                  <span>Flow = Preparation + Presence + Confidence</span>
                </div>
              </div>
            </div>

          </div>

          {/* Coming Soon Section */}
          <div className="text-center bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 border border-[#2d3748]">
            <div className="text-4xl mb-4">🧠</div>
            <h2 className="text-2xl font-bold text-white mb-4">More Mental Game Content Coming Soon</h2>
            <p className="text-[#a0aec0] mb-6">
              The Mind Coach is developing comprehensive mental training programs, visualization exercises, 
              and psychology insights to help you unlock your full potential.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B5CF6] hover:bg-[#8B5CF6]/90 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
            >
              ← Back to Meet the Cast
            </Link>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
