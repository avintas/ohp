'use client';

import { StickyNavbar } from '../components/StickyNavbar';
import { DisplayCard } from '../components/DisplayCard';
import Script from 'next/script';

export default function Home() {
  const cards = [
    {
      id: 'greetings',
      title: "Ready to Have Some Fun?",
      subtitle: "Press play on your hockey journey - share stories and connect with fans!",

      image: "/gims/gim-00026.webp", // FUN button - arcade game energy!

      delay: 0,
      isFirst: true
    },
    {
      id: 'heart',
      title: "Send Hockey Hugs",
      subtitle: "Share greeting cards and spread joy to fellow fans",

      image: "/gims/gim-00013.webp", // HeartGroup image

      delay: 0.1
    },
    {
      id: 'challenge',
      title: "Hockey Brain Challenge",
      subtitle: "Test your knowledge and climb the leaderboard",

      image: "/gims/gim-00004.webp", // ChallengeGroup image

      delay: 0.2
    },
    {
      id: 'motivate',
      title: "Pump Up Your Team!",
      subtitle: "Share fierce motivation and get everyone fired up",

      image: "/gims/gim-00012.webp", // MotivateGroup image

      delay: 0.3
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
    <div className="min-h-screen bg-white">
      {/* Structured Data for SEO */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <StickyNavbar />
      
      {/* Main Content */}
      <main className="pt-4">
        {/* Hero Section - Sets the Stage */}
        <section className="mt-20 py-16 px-4 md:px-6 2xl:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Hero Content */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#023047] mb-6 leading-tight">
                <span className="block bg-gradient-to-r from-[#219EBC] to-[#FB8500] bg-clip-text text-transparent">
                  There&apos;s Only Hockey!
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-[#023047]/70 mb-8 max-w-3xl mx-auto leading-relaxed">
                Where your love for the game is all you need. Start by sharing hockey factoids, 
                connect with fellow fans, and discover what makes this community special.
              </p>
            </div>

            {/* Community Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-4 border border-gray-200/50 shadow-sm">
                <div className="text-2xl font-bold text-[#023047]">84</div>
                <div className="text-sm text-[#023047]/60">Hockey Federations (IIHF) Worldwide</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-4 border border-gray-200/50 shadow-sm">
                <div className="text-2xl font-bold text-[#023047]">1.8M+</div>
                <div className="text-sm text-[#023047]/60">Registered Players in North America</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-4 border border-gray-200/50 shadow-sm">
                <div className="text-2xl font-bold text-[#023047]">2,500+</div>
                <div className="text-sm text-[#023047]/60">NCAA Division 1 Players</div>
              </div>
            </div>

            {/* Share These Stats */}
            <div className="mb-8 text-center">
              {/* Row of small sharing icons */}
              <div className="flex justify-center gap-4 mb-3">
                {/* Twitter/X */}
                <button 
                  onClick={() => {
                    const text = "🏒 Did you know? 84 Hockey Federations worldwide, 1.8M+ registered players in North America! There's Only Hockey! ⚡";
                    const url = window.location.href;
                    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
                  }}
                  className="w-8 h-8 bg-black/80 hover:bg-black text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  title="Share on X/Twitter"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </button>

                {/* Facebook */}
                <button 
                  onClick={() => {
                    const url = window.location.href;
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
                  }}
                  className="w-8 h-8 bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  title="Share on Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>

                {/* Email */}
                <button 
                  onClick={() => {
                    const subject = "Check out these Hockey Stats!";
                    const body = "🏒 Did you know? 84 Hockey Federations worldwide, 1.8M+ registered players in North America! There's Only Hockey! ⚡\n\nCheck it out: " + window.location.href;
                    window.open(`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
                  }}
                  className="w-8 h-8 bg-[#EA4335] hover:bg-[#D93025] text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  title="Share via Email"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </button>

                {/* Copy Link */}
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    // Could add a toast notification here
                  }}
                  className="w-8 h-8 bg-[#6B7280] hover:bg-[#4B5563] text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  title="Copy Link"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                  </svg>
                </button>
              </div>

              {/* Finger pointing up to the icons */}
              <div className="text-2xl text-[#023047]/60">
                👆
              </div>
              <div className="text-sm text-[#023047]/60 -mt-1">
                Share These Stats
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="text-sm text-[#023047]/60 mb-1">
                Choose your starting point below
              </div>
              <div className="text-2xl text-[#023047]/60">
                👇
              </div>
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

        {/* Below Cards Section - Easily Replaceable */}
        <section className="py-16 px-4 md:px-6 2xl:px-8 max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-[#023047] mb-4">
              The Journey Continues...
            </h2>
            <p className="text-lg text-[#023047]/70 mb-12 max-w-2xl mx-auto">
              Share factoids, connect with fellow fans, and unlock new ways to celebrate hockey.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Coming Soon Card 1 */}
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-[#023047] mb-2">Expert Challenges</h3>
                <p className="text-sm text-[#023047]/60">Advanced hockey knowledge awaits</p>
                <div className="mt-4 text-xs text-[#023047]/50">Coming Soon</div>
              </div>

              {/* Coming Soon Card 2 */}
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-bold text-[#023047] mb-2">Team Builder</h3>
                <p className="text-sm text-[#023047]/60">Create your dream lineup</p>
                <div className="mt-4 text-xs text-[#023047]/50">Community Goal: 5,000</div>
              </div>

              {/* Coming Soon Card 3 */}
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-[#023047] mb-2">Achievement Hub</h3>
                <p className="text-sm text-[#023047]/60">Track your hockey journey</p>
                <div className="mt-4 text-xs text-[#023047]/50">Unlock: Share 10 factoids</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
