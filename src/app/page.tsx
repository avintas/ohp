'use client';

import { Footer } from '../components/Footer';
import Image from 'next/image';
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
      
      
      {/* Main Content */}
      <main className="pt-4">
        {/* Hero Section - Main Introduction */}
        <section className="mt-12 py-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                <span className="block bg-gradient-to-r from-[#4cc9f0] to-[#FFB703] bg-clip-text text-transparent">
                  There&apos;s Only Hockey!
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-[#a0aec0] mb-4 max-w-3xl mx-auto leading-relaxed">
                Where your love for the game is all you need. Find cool hockey facts, share the good stuff, and hang with fans who get it. Discover what makes hockey community special.
              </p>
          </div>
        </section>

        {/* NEW: Alternating Grid Section - Hydration Safe */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              <span className="block bg-gradient-to-r from-[#4cc9f0] to-[#FFB703] bg-clip-text text-transparent">
                Explore Your Hockey Journey
              </span>
            </h2>
            {/* Alternating Grid Layout */}
            <div className="space-y-16">
              {/* Row 1: Power Brain (Simple layout, no responsive switching) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Left Column - Emoji + Title */}
                <div className="text-center">
                  <div className="text-6xl md:text-7xl mb-4">🧠</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Hockey Trivia Training
                  </h3>
                  <p className="text-lg text-[#4cc9f0] font-semibold">Power Brain</p>
                </div>
                {/* Right Column - Explanation */}
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

              {/* Row 2: Stories (Reversed layout using CSS order) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Explanation Box - Desktop: appears first, Mobile: appears second */}
                <div className="bg-gradient-to-r from-[#219EBC]/10 to-[#219EBC]/5 rounded-xl p-6 border border-[#219EBC]/20 md:order-1">
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
                {/* Emoji + Title - Desktop: appears second, Mobile: appears first */}
                <div className="text-center md:order-1">
                  <div className="text-6xl md:text-7xl mb-4">📚</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Human Stories
                  </h3>
                  <p className="text-lg text-[#219EBC] font-semibold">Hockey Stories</p>
                </div>
              </div>

              {/* Row 3: Send Hugs (Simple layout, no responsive switching) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Left Column - Emoji + Title */}
                <div className="text-center">
                  <div className="text-6xl md:text-7xl mb-4">🤗</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Send Hockey Hugs
                  </h3>
                  <p className="text-lg text-[#EF476F] font-semibold">H.U.G.</p>
                </div>
                {/* Right Column - Explanation */}
                <div className="bg-gradient-to-r from-[#EF476F]/10 to-[#EF476F]/5 rounded-xl p-6 border border-[#EF476F]/20">
                  <p className="text-[#a0aec0] leading-relaxed mb-4">
                    Connect with the global hockey family through a H.U.G. Whether you&apos;re celebrating a great play, offering support, or just saying hello, it&apos;s a way to reach out to fellow fans.
                  </p>
                  <a
                    href="/sendhugs"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#EF476F] hover:bg-[#EF476F]/90 text-white font-semibold text-sm rounded-lg transition-all duration-200 hover:scale-105"
                  >
                    Try Now
                  </a>
                </div>
              </div>

              {/* Row 4: Motivate (Reversed layout using CSS order) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Explanation Box - Desktop: appears first, Mobile: appears second */}
                <div className="bg-gradient-to-r from-[#FFB703]/10 to-[#FFB703]/5 rounded-xl p-6 border border-[#FFB703]/20 md:order-1">
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
                {/* Emoji + Title - Desktop: appears second, Mobile: appears first */}
                <div className="text-center md:order-1">
                  <div className="text-6xl md:text-7xl mb-4">💪</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Pump Up Your Team
                  </h3>
                  <p className="text-lg text-[#FFB703] font-semibold">Motivate</p>
                </div>
              </div>

            </div>
          </div>
        </section>

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
                      <Image 
                        src="/avatars/broadcaster.webp" 
                        alt="The Broadcaster"
                        width={96}
                        height={96}
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
                      <Image 
                        src="/avatars/fan.webp" 
                        alt="The Fan"
                        width={96}
                        height={96}
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
                      <Image 
                        src="/avatars/coach.webp" 
                        alt="The Coach"
                        width={96}
                        height={96}
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
                      <Image 
                        src="/avatars/mind-coach.webp" 
                        alt="The Mind Coach"
                        width={96}
                        height={96}
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
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Ready to Have Some Fun?
            </h2>
            <h2 className="text-lg text-gray-300 mb-2 max-w-2xl mx-auto font-semibold animate-pulse hover:text-red-400 transition-colors duration-300">
              Do Not Press the FUN Button!
            </h2>
            <div className="text-4xl mb-2">😏</div>
            <div className="relative inline-block">
              <Image 
                src="/gims/gim-00026.webp" 
                alt="FUN Arcade Button" 
                width={320}
                height={320}
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
