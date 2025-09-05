'use client';

import { NavBar } from '../../components/NavBar';
import { Footer } from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function FanPage() {
  return (
    <div className="min-h-screen bg-[#0f0f23]">
      {/* Sticky Navbar */}
      <NavBar />

      {/* Main Content */}
      <main className="py-20 px-4">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Character Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Image 
                src="/avatars/fan.webp" 
                alt="The Fan"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full object-cover border-4 border-[#EF476F]/50"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
              The Fan
            </h1>
            <p className="text-xl text-[#a0aec0] max-w-3xl mx-auto leading-relaxed mb-6">
              The voice of the hockey community. Sharing the passion, excitement, and 
              personal stories that make hockey more than just a game.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-[#EF476F]/20 text-[#FF6B9D] text-sm rounded-full border border-[#EF476F]/30">Community</span>
              <span className="px-4 py-2 bg-[#EF476F]/20 text-[#FF6B9D] text-sm rounded-full border border-[#EF476F]/30">Stories</span>
              <span className="px-4 py-2 bg-[#EF476F]/20 text-[#FF6B9D] text-sm rounded-full border border-[#EF476F]/30">Passion</span>
            </div>
          </div>

          {/* Featured Content */}
          <div className="grid gap-8 mb-12">
            
            {/* Fan Story */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 border border-[#2d3748]">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">💝</div>
                <h2 className="text-2xl font-bold text-white">Fan Story of the Week</h2>
              </div>
              <div className="bg-[#EF476F]/10 rounded-xl p-6 border border-[#EF476F]/20">
                <h3 className="text-xl font-bold text-white mb-3">My First Hockey Game</h3>
                <p className="text-[#a0aec0] leading-relaxed mb-4">
                  &quot;I was 8 years old when my dad took me to my first NHL game. The energy in the arena was electric, 
                  and when the home team scored the winning goal in overtime, the entire building erupted. That moment 
                  changed everything - I knew hockey would be my passion for life.&quot;
                </p>
                <div className="flex items-center gap-2 text-sm text-[#FF6B9D]">
                  <span>👨‍👧</span>
                  <span>Shared by Sarah M. from Toronto</span>
                </div>
              </div>
            </div>

            {/* Community Highlight */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 border border-[#2d3748]">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">🏒</div>
                <h2 className="text-2xl font-bold text-white">Community Highlight</h2>
              </div>
              <div className="bg-[#EF476F]/10 rounded-xl p-6 border border-[#EF476F]/20">
                <h3 className="text-xl font-bold text-white mb-3">Local Rink Heroes</h3>
                <p className="text-[#a0aec0] leading-relaxed mb-4">
                  Every weekend, parents volunteer their time to maintain the local outdoor rink. 
                  They flood the ice at 6 AM, shovel snow during games, and make sure every kid 
                  has a chance to play. This is what hockey community is all about!
                </p>
                <div className="flex items-center gap-2 text-sm text-[#FF6B9D]">
                  <span>❄️</span>
                  <span>Community Rink - Small Town, Big Heart</span>
                </div>
              </div>
            </div>

            {/* Fan Reaction */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 border border-[#2d3748]">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">⚡</div>
                <h2 className="text-2xl font-bold text-white">Fan Reaction</h2>
              </div>
              <div className="bg-[#EF476F]/10 rounded-xl p-6 border border-[#EF476F]/20">
                <h3 className="text-xl font-bold text-white mb-3">That Overtime Goal!</h3>
                <p className="text-[#a0aec0] leading-relaxed mb-4">
                  &quot;I was watching the game with my buddies, and when that goal went in during the 3rd overtime, 
                  we all jumped up and hugged each other. My neighbor probably heard us celebrating from three blocks away! 
                  That&apos;s the beauty of hockey - it brings people together like nothing else.&quot;
                </p>
                <div className="flex items-center gap-2 text-sm text-[#FF6B9D]">
                  <span>🎉</span>
                  <span>Shared by Mike D. from Boston</span>
                </div>
              </div>
            </div>

          </div>

          {/* Coming Soon Section */}
          <div className="text-center bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 border border-[#2d3748]">
            <div className="text-4xl mb-4">🏒</div>
            <h2 className="text-2xl font-bold text-white mb-4">More Fan Stories Coming Soon</h2>
            <p className="text-[#a0aec0] mb-6">
              The Fan is collecting amazing stories from hockey fans around the world. 
              Share your passion, your memories, and your love for the game!
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#EF476F] hover:bg-[#EF476F]/90 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
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
