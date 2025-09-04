'use client';

import { StickyNavbar } from '../../components/StickyNavbar';
import { Footer } from '../../components/Footer';

export default function BroadcasterPage() {
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
              <img 
                src="/avatars/broadcaster.webp" 
                alt="The Broadcaster"
                className="w-32 h-32 rounded-full object-cover border-4 border-[#219EBC]/50"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
              The Broadcaster
            </h1>
            <p className="text-xl text-[#a0aec0] max-w-3xl mx-auto leading-relaxed mb-6">
              Your go-to source for hockey history, statistics, and the stories behind the game. 
              Bringing you the facts, figures, and legendary moments that define hockey.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-[#219EBC]/20 text-[#4cc9f0] text-sm rounded-full border border-[#219EBC]/30">History</span>
              <span className="px-4 py-2 bg-[#219EBC]/20 text-[#4cc9f0] text-sm rounded-full border border-[#219EBC]/30">Stats</span>
              <span className="px-4 py-2 bg-[#219EBC]/20 text-[#4cc9f0] text-sm rounded-full border border-[#219EBC]/30">Analysis</span>
            </div>
          </div>

          {/* Featured Content */}
          <div className="grid gap-8 mb-12">
            
            {/* This Day in Hockey */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 border border-[#2d3748]">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">📅</div>
                <h2 className="text-2xl font-bold text-white">This Day in Hockey</h2>
              </div>
              <div className="bg-[#219EBC]/10 rounded-xl p-6 border border-[#219EBC]/20">
                <h3 className="text-xl font-bold text-white mb-3">January 15, 1994</h3>
                <p className="text-[#a0aec0] leading-relaxed mb-4">
                  Wayne Gretzky scored his 1,000th career assist, becoming the first player in NHL history to reach this milestone. 
                  The "Great One" achieved this feat in a game against the Los Angeles Kings, further cementing his legacy as 
                  hockey&apos;s greatest playmaker.
                </p>
                <div className="flex items-center gap-2 text-sm text-[#4cc9f0]">
                  <span>📊</span>
                  <span>1,000 assists milestone</span>
                </div>
              </div>
            </div>

            {/* Stat of the Day */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 border border-[#2d3748]">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">📊</div>
                <h2 className="text-2xl font-bold text-white">Stat of the Day</h2>
              </div>
              <div className="bg-[#219EBC]/10 rounded-xl p-6 border border-[#219EBC]/20">
                <h3 className="text-xl font-bold text-white mb-3">Most Goals in a Single Season</h3>
                <p className="text-[#a0aec0] leading-relaxed mb-4">
                  Wayne Gretzky holds the record with 92 goals in the 1981-82 season. This incredible feat 
                  included 50 goals in just 39 games - the fastest to reach 50 goals in NHL history.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-[#219EBC]/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-[#4cc9f0]">92</div>
                    <div className="text-sm text-[#a0aec0]">Goals</div>
                  </div>
                  <div className="bg-[#219EBC]/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-[#4cc9f0]">39</div>
                    <div className="text-sm text-[#a0aec0]">Games to 50</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Legendary Moment */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 border border-[#2d3748]">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">⭐</div>
                <h2 className="text-2xl font-bold text-white">Legendary Moment</h2>
              </div>
              <div className="bg-[#219EBC]/10 rounded-xl p-6 border border-[#219EBC]/20">
                <h3 className="text-xl font-bold text-white mb-3">The Miracle on Ice</h3>
                <p className="text-[#a0aec0] leading-relaxed mb-4">
                  February 22, 1980 - The U.S. Olympic hockey team, made up of amateur and collegiate players, 
                  defeated the heavily favored Soviet Union team 4-3 in the semifinals. This victory, known as 
                  the "Miracle on Ice," is considered one of the greatest upsets in sports history.
                </p>
                <div className="flex items-center gap-2 text-sm text-[#4cc9f0]">
                  <span>🏆</span>
                  <span>Olympic Semifinal - Lake Placid 1980</span>
                </div>
              </div>
            </div>

          </div>

          {/* Coming Soon Section */}
          <div className="text-center bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 border border-[#2d3748]">
            <div className="text-4xl mb-4">🎙️</div>
            <h2 className="text-2xl font-bold text-white mb-4">More Content Coming Soon</h2>
            <p className="text-[#a0aec0] mb-6">
              The Broadcaster is working on bringing you daily historical highlights, statistical deep-dives, 
              and analysis of current events. Stay tuned for regular updates!
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#219EBC] hover:bg-[#219EBC]/90 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
            >
              ← Back to Meet the Cast
            </a>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
