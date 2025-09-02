'use client';

import { StickyNavbar } from '../components/StickyNavbar';
import { DisplayCard } from '../components/DisplayCard';
import { useHugExplainer } from '../components/HugExplainerModal';
import { usePowerBrainExplainer } from '../components/PowerBrainModal';
import { usePumpExplainer } from '../components/PumpModal';
import { useStoriesExplainer } from '../components/StoriesModal';
import { Footer } from '../components/Footer';
import Script from 'next/script';

export default function Home() {
  const { isModalOpen, openModal, closeModal, HugModal } = useHugExplainer();
  const { isModalOpen: isPowerBrainModalOpen, openModal: openPowerBrainModal, closeModal: closePowerBrainModal, PowerBrainModal } = usePowerBrainExplainer();
  const { isModalOpen: isPumpModalOpen, openModal: openPumpModal, closeModal: closePumpModal, PumpModal } = usePumpExplainer();
  const { isModalOpen: isStoriesModalOpen, openModal: openStoriesModal, closeModal: closeStoriesModal, StoriesModal } = useStoriesExplainer();
  const cards = [
    {
      id: 'havefun',
      title: "Ready to Have Some Fun?",
      subtitle: "Press play on your hockey journey - share stories and connect with fans!",
      image: "/gims/gim-00026.webp", // FUN button - arcade game energy!
      delay: 0,
      isFirst: true
    },
    {
      id: 'sendhugs',
      title: "Send Hockey Hugs",
      subtitle: "Share greeting cards and spread joy to fellow fans",
      image: "/gims/gim-00013.webp", // Send Hugs Group image
      delay: 0
    },
    {
      id: 'challenge',
      title: "Hockey Brain Challenge",
      subtitle: "Test your knowledge and climb the leaderboard",
      image: "/gims/gim-00004.webp", // Hockey Brain Group image
      delay: 0
    },
    {
      id: 'motivate',
      title: "Pump Up Your Team!",
      subtitle: "Share fierce motivation and get everyone fired up",
      image: "/gims/gim-00012.webp", // Motivate Group image
      delay: 0
    }
  ];

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
                  <div 
                    onClick={openModal}
                    className="text-center cursor-pointer hover:scale-110 transition-all duration-200" 
                    title="Learn about Hockey Universal Greeting"
                  >
                    <div className="text-5xl mb-2">💝</div>
                    <div className="text-sm font-semibold text-[#a0aec0]">Send a "H.U.G."</div>
                  </div>
                  
                  {/* Brain Challenge */}
                  <div 
                    onClick={openPowerBrainModal}
                    className="text-center cursor-pointer hover:scale-110 transition-all duration-200" 
                    title="Learn about Power Brain challenges"
                  >
                    <div className="text-5xl mb-2">🧠</div>
                    <div className="text-sm font-semibold text-[#a0aec0]">"Power Brain"</div>
                  </div>
                  
                  {/* Get Motivated */}
                  <div 
                    onClick={openPumpModal}
                    className="text-center cursor-pointer hover:scale-110 transition-all duration-200" 
                    title="Learn about Pump Up The Volume"
                  >
                    <div className="text-5xl mb-2">💪</div>
                    <div className="text-sm font-semibold text-[#a0aec0]">"Power Up"</div>
                  </div>
                  
                  {/* Discover Stories */}
                  <div 
                    onClick={openStoriesModal}
                    className="text-center cursor-pointer hover:scale-110 transition-all duration-200" 
                    title="Learn about hockey stories"
                  >
                    <div className="text-5xl mb-2">📰</div>
                    <div className="text-sm font-semibold text-[#a0aec0]">Stories</div>
                  </div>
                  
                </div>
              </div>
              
              {/* H.U.G. Explanation */}
              <div className="mt-8 max-w-2xl mx-auto">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  What&apos;s a H.U.G.?
                </h3>
                <div className="bg-gradient-to-r from-[#EF476F]/10 to-[#EF476F]/5 rounded-xl p-6 border border-[#EF476F]/20">
                  <h4 className="text-lg font-semibold text-[#EF476F] mb-3">
                    Hockey Universal Greeting
                  </h4>
                  <p className="text-[#a0aec0] leading-relaxed">
                    A H.U.G. is how hockey fans connect across the globe. Whether you&apos;re celebrating a great play, showing support after a tough loss, or just saying "hey fellow fan" - a H.U.G. The Heart is your way to reach out to the hockey family.
                  </p>
                </div>
              </div>
              
              {/* Power Brain Explanation */}
              <div className="mt-8 max-w-2xl mx-auto">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  What&apos;s "Power Brain"?
                </h3>
                <div className="bg-gradient-to-r from-[#4361ee]/10 to-[#4361ee]/5 rounded-xl p-6 border border-[#4361ee]/20">
                  <h4 className="text-lg font-semibold text-[#4361ee] mb-3">
                    Hockey Knowledge Challenges
                  </h4>
                  <p className="text-[#a0aec0] leading-relaxed">
                    Power Brain is your hockey IQ training ground. Test your knowledge with The Professor, challenge friends, and discover amazing hockey facts you never knew. From basic rules to legendary trivia - power up your hockey brain!
                  </p>
                </div>
              </div>
              
              {/* Power Up Explanation */}
              <div className="mt-8 max-w-2xl mx-auto">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  What&apos;s "Power Up"?
                </h3>
                <div className="bg-gradient-to-r from-[#FFB703]/10 to-[#FFB703]/5 rounded-xl p-6 border border-[#FFB703]/20">
                  <h4 className="text-lg font-semibold text-[#FFB703] mb-3">
                    Power Up
                  </h4>
                  <p className="text-[#a0aec0] leading-relaxed">
                    Get motivated with Power Up content! Power Up delivers hockey wisdom, inspirational stories, and the mindset boost you need. Whether you&apos;re facing challenges on or off the ice, power up the volume on your hockey spirit and motivation.
                  </p>
                </div>
              </div>
              
              {/* Stories Explanation */}
              <div className="mt-8 max-w-2xl mx-auto">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  What&apos;s "Stories"?
                </h3>
                <div className="bg-gradient-to-r from-[#219EBC]/10 to-[#219EBC]/5 rounded-xl p-6 border border-[#219EBC]/20">
                  <h4 className="text-lg font-semibold text-[#219EBC] mb-3">
                    The Human Side of Hockey
                  </h4>
                  <p className="text-[#a0aec0] leading-relaxed">
                    Stories brings you the heart of hockey - real moments, personal journeys, and the human connections that make this game special. From childhood dreams to championship victories, discover the stories behind the stats with The Professor The Historian.
                  </p>
                </div>
              </div>
          </div>
        </section>

        {/* Cast Player Section - OH-Cast Introduction */}
        <section className="py-8 px-4 md:px-6 2xl:px-8">
          <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                <span className="block bg-gradient-to-r from-[#219EBC] to-[#EF476F] bg-clip-text text-transparent">
                  Check Out Cast Player
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

        {/* Cinematic Card Layout - Smart Responsive: 4-in-row or mobile stack */}
        <div className="flex flex-col items-center 2xl:flex-row 2xl:justify-center gap-6 2xl:gap-8 px-4 md:px-6 2xl:px-8 pb-8 md:pb-12 2xl:pb-16 max-w-7xl mx-auto">
          {/* Auto-switch: if 4×320px cards don't fit → mobile view */}
          {cards.map((card, index) => (
            <DisplayCard
              key={index}
              id={card.id}
              title={card.title}
              subtitle={card.subtitle}
              image={card.image}
              delay={card.delay}
              isFirst={card.isFirst}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* H.U.G. Explainer Modal */}
      <HugModal />
      
      {/* Power Brain Explainer Modal */}
      <PowerBrainModal />
      
      {/* Pump Explainer Modal */}
      <PumpModal />
      
      {/* Stories Explainer Modal */}
      <StoriesModal />
    </div>
  );
}
