'use client';

import { StickyNavbar } from '../components/StickyNavbar';
import { Footer } from '../components/Footer';
import Script from 'next/script';

export default function Home() {

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    "name": "ONLYHOCKEY",
    "description": "Join the hockey community! Share the love, challenge friends, get motivated, and elevate your hockey IQ with expert tidbits and battles of wits.",
    "url": "https://onlyhockey.com",
    "logo": "https://onlyhockey.com/gims/gim-00010.webp",
    "sport": "Ice Hockey",
    "foundingDate": "2024",
    "sameAs": [
      "https://twitter.com/onlyhockey",
      "https://facebook.com/onlyhockey",
      "https://instagram.com/onlyhockey"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Hockey Community Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hockey Knowledge Quizzes",
            "description": "Test your hockey IQ with interactive quizzes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hockey Motivation",
            "description": "Get inspired with hockey wisdom and quotes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hockey Community",
            "description": "Connect with 500+ hockey enthusiasts"
          }
        }
      ]
    },
    "location": {
      "@type": "Place",
      "name": "Global Hockey Community"
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      {/* Structured Data for SEO */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <StickyNavbar />
      
      {/* Main Content */}
      <main className="pt-4">
        {/* Hero Section - Main Introduction */}
        <section className="mt-16 py-8 px-4 md:px-6 2xl:px-8">
          <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                <span className="block bg-gradient-to-r from-[#4cc9f0] to-[#FFB703] bg-clip-text text-transparent">
                  There&apos;s Only Hockey!
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-[#a0aec0] mb-8 max-w-3xl mx-auto leading-relaxed">
                Where your love for the game is all you need. Find cool hockey facts, share the good stuff, and hang with fans who get it. Discover what makes hockey community special.
              </p>
          </div>
        </section>

        {/* Hockey Vibe Section - Interactive Emojis */}
        <section className="py-8 px-4 md:px-6 2xl:px-8">
          <div className="max-w-4xl mx-auto text-center">
              {/* Quick Actions */}
              <div className="max-w-2xl mx-auto mb-8">
              <p className="text-lg md:text-xl text-[#718096] font-medium mb-6">
                Ready to pick your hockey vibe?
              </p>
                <div className="flex justify-center items-center gap-8 md:gap-12 mb-8">
                  {/* Send Hockey Hug */}
                  <a href="/sendhugs" className="text-center hover:scale-110 transition-transform duration-200 cursor-pointer">
                    <div className="text-5xl mb-2">💝</div>
                    <div className="text-sm font-semibold text-[#a0aec0] hover:text-white transition-colors duration-200">Send a "H.U.G."</div>
                  </a>
                  
                  {/* Brain Challenge */}
                  <a href="/powerbrain" className="text-center hover:scale-110 transition-transform duration-200 cursor-pointer">
                    <div className="text-5xl mb-2">🧠</div>
                    <div className="text-sm font-semibold text-[#a0aec0] hover:text-white transition-colors duration-200">Power Your Brain</div>
                  </a>
                  
                  {/* Get Motivated */}
                  <a href="/motivate" className="text-center hover:scale-110 transition-transform duration-200 cursor-pointer">
                    <div className="text-5xl mb-2">💪</div>
                    <div className="text-sm font-semibold text-[#a0aec0] hover:text-white transition-colors duration-200">Motivate</div>
                  </a>
                  
                  {/* Discover Stories */}
                  <a href="/stories" className="text-center hover:scale-110 transition-transform duration-200 cursor-pointer">
                    <div className="text-5xl mb-2">📰</div>
                    <div className="text-sm font-semibold text-[#a0aec0] hover:text-white transition-colors duration-200">Human Stories</div>
                  </a>
                </div>
              </div>
              {/* H.U.G. Explanation */}
              <div className="mt-8 mb-8 max-w-2xl mx-auto">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  What&apos;s a H.U.G.?
                </h3>
                <div className="bg-gradient-to-r from-[#EF476F]/10 to-[#EF476F]/5 rounded-xl p-6 border border-[#EF476F]/20">

                  <p className="text-[#a0aec0] leading-relaxed mb-4">
                  Connect with the global hockey family through a H.U.G. Whether you're celebrating a great play, offering support, or just saying hello, it's a way to reach out to fellow fans.
                  </p>
                  <a
                    href="/sendhugs"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#EF476F] hover:bg-[#EF476F]/90 text-white font-semibold text-sm rounded-lg transition-all duration-200 hover:scale-105"
                  >
                    Try Now
                  </a>
                </div>
              </div>
               {/* Power Brain Explanation */}
              <div className="mt-8 mb-8 max-w-2xl mx-auto">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  What&apos;s "Power Brain"?
                </h3>
                <div className="bg-gradient-to-r from-[#4361ee]/10 to-[#4361ee]/5 rounded-xl p-6 border border-[#4361ee]/20">

                  <p className="text-[#a0aec0] leading-relaxed mb-4">
                  Sharpen your hockey IQ with Power Brain. This is your training ground to test your knowledge, challenge friends, and uncover amazing hockey facts you never knew.
                  </p>
                  <a
                    href="/powerbrain"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#4361ee] hover:bg-[#4361ee]/90 text-white font-semibold text-sm rounded-lg transition-all duration-200 hover:scale-105"
                  >
                    Try Now
                  </a>
                </div>
              </div>
              {/* Power Up Explanation */}
              <div className="mt-8 mb-8 max-w-2xl mx-auto">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  What&apos;s "Motivate"?
                </h3>
                <div className="bg-gradient-to-r from-[#FFB703]/10 to-[#FFB703]/5 rounded-xl p-6 border border-[#FFB703]/20">

                  <p className="text-[#a0aec0] leading-relaxed mb-4">
                  Motivate delivers the inspirational stories, wisdom, and mindset boosts you need to face challenges on and off the ice.
                  </p>
                  <a
                    href="/motivate"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFB703] hover:bg-[#FFB703]/90 text-white font-semibold text-sm rounded-lg transition-all duration-200 hover:scale-105"
                  >
                    Try Now
                  </a>
                </div>
              </div>
              {/* Stories Explanation */}
              <div className="mt-8 mb-8 max-w-2xl mx-auto">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  What&apos;s "Stories"?
                </h3>
                <div className="bg-gradient-to-r from-[#219EBC]/10 to-[#219EBC]/5 rounded-xl p-6 border border-[#219EBC]/20">
                  <p className="text-[#a0aec0] leading-relaxed mb-4">
                  Stories captures the heart of hockey: the personal journeys, human connections, and moments that go beyond the stats, from childhood dreams to championship victories.
                  </p>
                  <a
                    href="/stories"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#219EBC] hover:bg-[#219EBC]/90 text-white font-semibold text-sm rounded-lg transition-all duration-200 hover:scale-105"
                  >
                    Try Now
                  </a>
                </div>
              </div>
          </div>
        </section>

        {/* Visual Break/Transition */}
        <div className="py-8 px-4 md:px-6 2xl:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="border-t border-[#2d3748] relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-[#0a0e1a] px-6">
                  <div className="text-2xl">🎭</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Meet the Cast Section - Character Introduction */}
        <section className="py-8 px-4 md:px-6 2xl:px-8">
          <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                <span className="block bg-gradient-to-r from-[#219EBC] to-[#EF476F] bg-clip-text text-transparent">
                  Meet the Cast
                </span>
              </h2>
              <p className="text-lg md:text-xl text-[#a0aec0] mb-8 max-w-3xl mx-auto leading-relaxed">
                Your personal hockey team of experts, storytellers, and enthusiasts. Each bringing their unique perspective and passion to the game we all love.
              </p>

              {/* Character Grid - Avatar Left, Text Right */}
              <div className="space-y-6 max-w-4xl mx-auto mb-8">
                
                {/* The Broadcaster */}
                <a href="/broadcaster" className="block bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-6 border border-[#2d3748] hover:border-[#219EBC]/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="grid grid-cols-4 gap-6 items-center">
                    {/* Avatar - Left Column */}
                    <div className="col-span-1 flex justify-center">
                      <img 
                        src="/avatars/broadcaster.webp" 
                        alt="The Broadcaster"
                        className="w-24 h-24 rounded-full object-cover border-2 border-[#219EBC]/50"
                      />
                    </div>
                    {/* Content - Right Column */}
                    <div className="col-span-3 text-left">
                      <h3 className="text-2xl font-bold text-white mb-3">The Broadcaster</h3>
                      <p className="text-[#a0aec0] mb-4 leading-relaxed">
                        Your go-to source for hockey history, statistics, and the stories behind the game. 
                        Bringing you the facts, figures, and legendary moments that define hockey.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-[#219EBC]/20 text-[#4cc9f0] text-sm rounded-full">History</span>
                        <span className="px-3 py-1 bg-[#219EBC]/20 text-[#4cc9f0] text-sm rounded-full">Stats</span>
                        <span className="px-3 py-1 bg-[#219EBC]/20 text-[#4cc9f0] text-sm rounded-full">Analysis</span>
                      </div>
                    </div>
                  </div>
                </a>

                {/* The Fan */}
                <a href="/fan" className="block bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-6 border border-[#2d3748] hover:border-[#EF476F]/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="grid grid-cols-4 gap-6 items-center">
                    {/* Avatar - Left Column */}
                    <div className="col-span-1 flex justify-center">
                      <img 
                        src="/avatars/fan.webp" 
                        alt="The Fan"
                        className="w-24 h-24 rounded-full object-cover border-2 border-[#EF476F]/50"
                      />
                    </div>
                    {/* Content - Right Column */}
                    <div className="col-span-3 text-left">
                      <h3 className="text-2xl font-bold text-white mb-3">The Fan</h3>
                      <p className="text-[#a0aec0] mb-4 leading-relaxed">
                        The voice of the hockey community. Sharing the passion, excitement, and 
                        personal stories that make hockey more than just a game.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-[#EF476F]/20 text-[#FF6B9D] text-sm rounded-full">Community</span>
                        <span className="px-3 py-1 bg-[#EF476F]/20 text-[#FF6B9D] text-sm rounded-full">Stories</span>
                        <span className="px-3 py-1 bg-[#EF476F]/20 text-[#FF6B9D] text-sm rounded-full">Passion</span>
                      </div>
                    </div>
                  </div>
                </a>

                {/* The Coach */}
                <a href="/coach" className="block bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-6 border border-[#2d3748] hover:border-[#FFB703]/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="grid grid-cols-4 gap-6 items-center">
                    {/* Avatar - Left Column */}
                    <div className="col-span-1 flex justify-center">
                      <img 
                        src="/avatars/coach.webp" 
                        alt="The Coach"
                        className="w-24 h-24 rounded-full object-cover border-2 border-[#FFB703]/50"
                      />
                    </div>
                    {/* Content - Right Column */}
                    <div className="col-span-3 text-left">
                      <h3 className="text-2xl font-bold text-white mb-3">The Coach</h3>
                      <p className="text-[#a0aec0] mb-4 leading-relaxed">
                        The strategic mind behind the game. Providing tactical insights, training wisdom, 
                        and the motivational leadership that drives teams to victory.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-[#FFB703]/20 text-[#FFD60A] text-sm rounded-full">Strategy</span>
                        <span className="px-3 py-1 bg-[#FFB703]/20 text-[#FFD60A] text-sm rounded-full">Training</span>
                        <span className="px-3 py-1 bg-[#FFB703]/20 text-[#FFD60A] text-sm rounded-full">Leadership</span>
                      </div>
                    </div>
                  </div>
                </a>

                {/* The Mind Coach */}
                <a href="/mindcoach" className="block bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-6 border border-[#2d3748] hover:border-[#8B5CF6]/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="grid grid-cols-4 gap-6 items-center">
                    {/* Avatar - Left Column */}
                    <div className="col-span-1 flex justify-center">
                      <img 
                        src="/avatars/mind-coach.webp" 
                        alt="The Mind Coach"
                        className="w-24 h-24 rounded-full object-cover border-2 border-[#8B5CF6]/50"
                      />
                    </div>
                    {/* Content - Right Column */}
                    <div className="col-span-3 text-left">
                      <h3 className="text-2xl font-bold text-white mb-3">The Mind Coach</h3>
                      <p className="text-[#a0aec0] mb-4 leading-relaxed">
                        The mental game specialist. Focusing on mindset, psychology, and the mental 
                        toughness that separates good players from great ones.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-[#8B5CF6]/20 text-[#A855F7] text-sm rounded-full">Mindset</span>
                        <span className="px-3 py-1 bg-[#8B5CF6]/20 text-[#A855F7] text-sm rounded-full">Psychology</span>
                        <span className="px-3 py-1 bg-[#8B5CF6]/20 text-[#A855F7] text-sm rounded-full">Focus</span>
                      </div>
                    </div>
                  </div>
                </a>

              </div>

            {/* Coming Soon CTA */}
            <div className="text-center">
              <p className="text-[#a0aec0] mb-4">Follow your favorite characters for exclusive content</p>
              <a
                href="#"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#4cc9f0] to-[#219EBC] hover:from-[#4cc9f0]/90 hover:to-[#219EBC]/90 text-white font-bold text-lg rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg"
              >
                🎯 Coming Soon
              </a>
            </div>
          </div>
        </section>

        {/* FUN Arcade Button - Standalone */}
        <section className="py-8 px-4 md:px-6 2xl:px-8">
          <div className="max-w-4xl mx-auto text-center">
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Ready to Have Some Fun?
            </h2>
            <h2 className="text-lg text-gray-300 mb-2 max-w-2xl mx-auto font-semibold animate-pulse hover:text-red-400 transition-colors duration-300">
              Do Not Press the FUN Button!
            </h2>
            <div className="text-4xl mb-2">😏</div>
            <div className="relative inline-block">
              <img 
                src="/gims/gim-00026.webp" 
                alt="FUN Arcade Button" 
                className="w-64 h-64 md:w-80 md:h-80 object-contain"
              />
            </div>
          </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
