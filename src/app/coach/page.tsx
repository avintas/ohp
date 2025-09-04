'use client';

import { StickyNavbar } from '../../components/StickyNavbar';
import { Footer } from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function CoachPage() {
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
                src="/avatars/coach.webp" 
                alt="The Coach"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full object-cover border-4 border-[#FFB703]/50"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
              The Coach
            </h1>
            <p className="text-xl text-[#a0aec0] max-w-3xl mx-auto leading-relaxed mb-6">
              The strategic mind behind the game. Providing tactical insights, training wisdom, 
              and the motivational leadership that drives teams to victory.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-[#FFB703]/20 text-[#FFD60A] text-sm rounded-full border border-[#FFB703]/30">Strategy</span>
              <span className="px-4 py-2 bg-[#FFB703]/20 text-[#FFD60A] text-sm rounded-full border border-[#FFB703]/30">Training</span>
              <span className="px-4 py-2 bg-[#FFB703]/20 text-[#FFD60A] text-sm rounded-full border border-[#FFB703]/30">Leadership</span>
            </div>
          </div>

          {/* Featured Content */}
          <div className="grid gap-8 mb-12">
            
            {/* Strategy Tip */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 border border-[#2d3748]">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">🎯</div>
                <h2 className="text-2xl font-bold text-white">Strategy Tip of the Week</h2>
              </div>
              <div className="bg-[#FFB703]/10 rounded-xl p-6 border border-[#FFB703]/20">
                <h3 className="text-xl font-bold text-white mb-3">The Power Play Setup</h3>
                <p className="text-[#a0aec0] leading-relaxed mb-4">
                  A successful power play isn&apos;t just about having the extra man - it&apos;s about creating 
                  chaos in the defensive zone. Move the puck quickly, force the penalty killers to make decisions, 
                  and always have a plan B when the primary option is taken away.
                </p>
                <div className="flex items-center gap-2 text-sm text-[#FFD60A]">
                  <span>⚡</span>
                  <span>Key: Quick puck movement creates opportunities</span>
                </div>
              </div>
            </div>

            {/* Training Focus */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 border border-[#2d3748]">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">💪</div>
                <h2 className="text-2xl font-bold text-white">Training Focus</h2>
              </div>
              <div className="bg-[#FFB703]/10 rounded-xl p-6 border border-[#FFB703]/20">
                <h3 className="text-xl font-bold text-white mb-3">Building Mental Toughness</h3>
                <p className="text-[#a0aec0] leading-relaxed mb-4">
                  Physical skills get you to the rink, but mental toughness wins games. Practice visualization, 
                  develop routines, and learn to embrace pressure. The best players perform their best when 
                  the stakes are highest.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-[#FFB703]/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-[#FFD60A]">Visualization</div>
                    <div className="text-sm text-[#a0aec0]">See success</div>
                  </div>
                  <div className="bg-[#FFB703]/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-[#FFD60A]">Routines</div>
                    <div className="text-sm text-[#a0aec0]">Stay consistent</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership Wisdom */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 border border-[#2d3748]">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">🏆</div>
                <h2 className="text-2xl font-bold text-white">Leadership Wisdom</h2>
              </div>
              <div className="bg-[#FFB703]/10 rounded-xl p-6 border border-[#FFB703]/20">
                <h3 className="text-xl font-bold text-white mb-3">Leading by Example</h3>
                <p className="text-[#a0aec0] leading-relaxed mb-4">
                  &quot;A true leader doesn&apos;t just tell players what to do - they show them. Be the first on the ice, 
                  the last to leave, and never ask your team to do something you wouldn&apos;t do yourself. 
                  Respect is earned through actions, not words.&quot;
                </p>
                <div className="flex items-center gap-2 text-sm text-[#FFD60A]">
                  <span>👨‍💼</span>
                  <span>Coach&apos;s Corner - Leadership Principles</span>
                </div>
              </div>
            </div>

          </div>

          {/* Coming Soon Section */}
          <div className="text-center bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 border border-[#2d3748]">
            <div className="text-4xl mb-4">🏆</div>
            <h2 className="text-2xl font-bold text-white mb-4">More Coaching Content Coming Soon</h2>
            <p className="text-[#a0aec0] mb-6">
              The Coach is developing comprehensive training guides, strategy breakdowns, and leadership insights. 
              Get ready for the ultimate hockey coaching resource!
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFB703] hover:bg-[#FFB703]/90 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
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
