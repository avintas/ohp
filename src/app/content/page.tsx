'use client';

import { StickyNavbar } from '@/components/StickyNavbar';
import { useState } from 'react';

export default function ContentPage() {
  const [currentFactoid, setCurrentFactoid] = useState({
    text: "Wayne Gretzky holds 61 NHL records - more than any other player in history!",
    category: "Legends"
  });

  const shareFactoid = (platform: string) => {
    const text = `🏒 Hockey Fact: ${currentFactoid.text} There&apos;s Only Hockey! ⚡`;
    const url = window.location.href;
    
    switch(platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'email':
        const subject = "Amazing Hockey Fact!";
        const body = `${text}\n\nCheck out more: ${url}`;
        window.open(`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
        break;
      case 'copy':
        navigator.clipboard.writeText(`${text} ${url}`);
        break;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <StickyNavbar />
      
      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 px-4 md:px-6 2xl:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#023047] mb-4">
              <span className="bg-gradient-to-r from-[#219EBC] to-[#FB8500] bg-clip-text text-transparent">
                OnlyHockey Shareables
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#023047]/70 mb-8">
              Your daily dose of hockey awesome • {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </section>

        {/* Today's Featured Shareable */}
        <section className="py-8 px-4 md:px-6 2xl:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-[#8ecae6] to-[#219EBC] rounded-2xl p-8 shadow-lg border border-gray-200/50">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 text-sm font-semibold text-[#023047] mb-4">
                  🏒 Today&apos;s Featured Factoid
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  {currentFactoid.text}
                </h2>
                <div className="inline-block bg-white/20 rounded-full px-3 py-1 text-sm text-white/90">
                  #{currentFactoid.category}
                </div>
              </div>
              
              {/* Share Buttons */}
              <div className="flex justify-center gap-3 mb-6">
                <button 
                  onClick={() => shareFactoid('twitter')}
                  className="w-10 h-10 bg-black/80 hover:bg-black text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  title="Share on X/Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </button>
                
                <button 
                  onClick={() => shareFactoid('facebook')}
                  className="w-10 h-10 bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  title="Share on Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                
                <button 
                  onClick={() => shareFactoid('email')}
                  className="w-10 h-10 bg-[#EA4335] hover:bg-[#D93025] text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  title="Share via Email"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </button>
                
                <button 
                  onClick={() => shareFactoid('copy')}
                  className="w-10 h-10 bg-[#6B7280] hover:bg-[#4B5563] text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  title="Copy to Clipboard"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                  </svg>
                </button>
              </div>
              
              <div className="text-center">
                <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 hover:scale-105">
                  Get Another Factoid
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-8 px-4 md:px-6 2xl:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-[#023047] text-center mb-8">Quick Actions</h2>
            
            <div className="flex justify-center items-center gap-8 md:gap-12">
              {/* Send Hockey Hug */}
              <div className="text-center cursor-pointer hover:scale-110 transition-all duration-200" title="Send hockey hug to fellow fans">
                <div className="text-5xl mb-2">💝</div>
                <div className="text-sm font-semibold text-[#023047]">Hug</div>
              </div>
              
              {/* Brain Challenge */}
              <div className="text-center cursor-pointer hover:scale-110 transition-all duration-200" title="Test your hockey knowledge">
                <div className="text-5xl mb-2">🧠</div>
                <div className="text-sm font-semibold text-[#023047]">Quiz</div>
              </div>
              
              {/* Get Pumped */}
              <div className="text-center cursor-pointer hover:scale-110 transition-all duration-200" title="Get motivational boost">
                <div className="text-5xl mb-2">💪</div>
                <div className="text-sm font-semibold text-[#023047]">Pump</div>
              </div>
              
              {/* Discover Stories */}
              <div className="text-center cursor-pointer hover:scale-110 transition-all duration-200" title="Discover hockey stories">
                <div className="text-5xl mb-2">📰</div>
                <div className="text-sm font-semibold text-[#023047]">Story</div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Pulse */}
        <section className="py-8 px-4 md:px-6 2xl:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#023047] text-center mb-8">Community Pulse</h2>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#023047] mb-1">47</div>
                  <div className="text-sm text-[#023047]/60">Hockey hugs sent today</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#023047] mb-1">23</div>
                  <div className="text-sm text-[#023047]/60">Quizzes completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#023047] mb-1">156</div>
                  <div className="text-sm text-[#023047]/60">Factoids shared</div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200/50">
                <div className="text-center text-sm text-[#023047]/70">
                  <p className="mb-2">🔥 <strong>Sarah</strong> just aced the 90s NHL quiz!</p>
                  <p>💝 <strong>Mike</strong> sent a hockey hug to the community</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
