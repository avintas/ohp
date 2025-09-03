'use client';

import { motion } from 'framer-motion';
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
            {/* Transition to Actions */}
            <div className="mb-8">
              <p className="text-lg md:text-xl text-[#718096] font-medium">
                Ready to pick your hockey vibe?
              </p>
            </div>
              {/* Quick Actions */}
              <div className="max-w-2xl mx-auto mb-12">
                <div className="flex justify-center items-center gap-8 md:gap-12">
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
              <div className="mt-8 max-w-2xl mx-auto">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  What&apos;s a H.U.G.?
                </h3>
                <div className="bg-gradient-to-r from-[#EF476F]/10 to-[#EF476F]/5 rounded-xl p-6 border border-[#EF476F]/20">

                  <p className="text-[#a0aec0] leading-relaxed mb-4">
                    A H.U.G. is how hockey fans connect across the globe. Whether you&apos;re celebrating a great play, showing support after a tough loss, or just saying "hey fellow fan" - a H.U.G. The Heart is your way to reach out to the hockey family.
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
              <div className="mt-8 max-w-2xl mx-auto">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  What&apos;s "Power Brain"?
                </h3>
                <div className="bg-gradient-to-r from-[#4361ee]/10 to-[#4361ee]/5 rounded-xl p-6 border border-[#4361ee]/20">

                  <p className="text-[#a0aec0] leading-relaxed mb-4">
                    Power Brain is your hockey IQ training ground. Test your knowledge with The Professor, challenge friends, and discover amazing hockey facts you never knew. From basic rules to legendary trivia - power up your hockey brain!
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
              <div className="mt-8 max-w-2xl mx-auto">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  What&apos;s "Motivate"?
                </h3>
                <div className="bg-gradient-to-r from-[#FFB703]/10 to-[#FFB703]/5 rounded-xl p-6 border border-[#FFB703]/20">

                  <p className="text-[#a0aec0] leading-relaxed mb-4">
                    Get motivated with Power Up content! Power Up delivers hockey wisdom, inspirational stories, and the mindset boost you need. Whether you&apos;re facing challenges on or off the ice, power up the volume on your hockey spirit and motivation.
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
              <div className="mt-8 max-w-2xl mx-auto">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  What&apos;s "Stories"?
                </h3>
                <div className="bg-gradient-to-r from-[#219EBC]/10 to-[#219EBC]/5 rounded-xl p-6 border border-[#219EBC]/20">
                  <p className="text-[#a0aec0] leading-relaxed mb-4">
                    Stories brings you the heart of hockey - real moments, personal journeys, and the human connections that make this game special. From childhood dreams to championship victories, discover the stories behind the stats with The Professor The Historian.
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

        {/* Cast Player Section - OH-Cast Introduction */}
        <section className="py-8 px-4 md:px-6 2xl:px-8">
          <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                <span className="block bg-gradient-to-r from-[#219EBC] to-[#EF476F] bg-clip-text text-transparent">
                  Meet the Cast
                </span>
              </h2>
              <p className="text-lg md:text-xl text-[#a0aec0] mb-6 max-w-3xl mx-auto leading-relaxed">
                Meet The Cast: Professor, The Coach, The Heart, and The Storyteller - your personal hockey broadcasting team who deliver the good stuff daily.
              </p>

              {/* OH-Cast Preview/Screenshot Area */}
              <div className="mb-8 max-w-2xl mx-auto">
                {/* Finger pointing down */}
                <div className="text-center mb-4">
                  <div className="text-5xl text-[#a0aec0]">👇</div>
                </div>
                <div className="bg-gradient-to-b from-[#1a1a2e] to-[#16213e] rounded-2xl p-6 shadow-2xl border border-[#2d3748]">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="text-2xl">📻</div>
                    <span className="text-lg font-bold text-white">OH-Cast Player</span>
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <img 
                        src="/pims/a-strategist.webp" 
                        alt="The Storyteller"
                        className="w-12 h-12 rounded-full border-2 border-white/20"
                      />
                      <div>
                        <div className="text-white font-bold text-sm">The Storyteller</div>
                        <div className="text-xs text-gray-400">Story Channel Host</div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm italic">
                      "Gather &apos;round folks, here&apos;s a Gretzky story that&apos;ll blow your mind..."
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-[#EF476F]/20 rounded p-2 text-center">
                      <div className="text-sm">💝</div>
                      <div className="text-xs text-white">SHARE</div>
                    </div>
                    <div className="bg-[#4361ee]/20 rounded p-2 text-center">
                      <div className="text-sm">🧠</div>
                      <div className="text-xs text-white">BRAIN</div>
                    </div>
                    <div className="bg-[#FFB703]/20 rounded p-2 text-center">
                      <div className="text-sm">💪</div>
                      <div className="text-xs text-white">MOTIVATE</div>
                    </div>
                    <div className="bg-[#219EBC]/30 rounded p-2 text-center border-2 border-[#219EBC]">
                      <div className="text-sm">📰</div>
                      <div className="text-xs text-white">STORY</div>
                    </div>
                  </div>
                </div>
              </div>

            {/* CTA Button */}
            <div className="text-center">
              <a
                href="/content"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#4cc9f0] to-[#219EBC] hover:from-[#4cc9f0]/90 hover:to-[#219EBC]/90 text-white font-bold text-lg rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg"
              >
                🎙️ Tune In Now
              </a>
            </div>
          </div>
        </section>

        {/* FUN Arcade Button - Standalone */}
        <div className="flex flex-col items-center justify-center gap-6 px-4 md:px-6 2xl:px-8 pb-8 md:pb-12 2xl:pb-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Have Some Fun?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Press play on your hockey journey - share stories and connect with fans!
            </p>
            <div className="relative inline-block">
              <img 
                src="/gims/gim-00026.webp" 
                alt="FUN Arcade Button" 
                className="w-64 h-64 md:w-80 md:h-80 object-contain hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              />
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
