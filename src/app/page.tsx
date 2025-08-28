'use client';

import { StickyNavbar } from '../components/StickyNavbar';
import { DisplayCard } from '../components/DisplayCard';
import Script from 'next/script';

export default function Home() {
  const cards = [
    {
      id: 'greetings',
      title: "Welcome to OnlyHockey!",
      subtitle: "Where your love for the game is all you need. Dive in to share stories, relive epic moments, and connect with fellow fans!",

      image: "/gims/gim-00026.webp", // Updated image for better standout design

      delay: 0,
      isFirst: true
    },
    {
      id: 'heart',
      title: "Heart & Share",
      subtitle: "Join the Team & Contribute Your Love",

      image: "/gims/gim-00013.webp", // HeartGroup image

      delay: 0.1
    },
    {
      id: 'challenge',
      title: "Test Your Hockey IQ",
      subtitle: "Learn, challenge yourself and your friends",

      image: "/gims/gim-00004.webp", // ChallengeGroup image

      delay: 0.2
    },
    {
      id: 'motivate',
      title: "Motivate others",
      subtitle: "Share motivational tidbits and messages with your friends and family",

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
      <main className="pt-0">
        {/* Hero Section - Sets the Stage */}
        <section className="mt-20 py-16 px-4 md:px-6 2xl:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Hero Content */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#023047] mb-6 leading-tight">
                Welcome to the
                <span className="block bg-gradient-to-r from-[#219EBC] to-[#FB8500] bg-clip-text text-transparent">
                  Hockey Family
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-[#023047]/70 mb-8 max-w-3xl mx-auto leading-relaxed">
                Where your love for the game is all you need. Start by sharing hockey factoids, 
                connect with fellow fans, and discover what makes this community special.
              </p>
            </div>

            {/* Community Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-4 border border-gray-200/50 shadow-sm">
                <div className="text-2xl font-bold text-[#023047]">2,847+</div>
                <div className="text-sm text-[#023047]/60">Hockey Fans</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-4 border border-gray-200/50 shadow-sm">
                <div className="text-2xl font-bold text-[#023047]">15,000+</div>
                <div className="text-sm text-[#023047]/60">Factoids Shared</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-4 border border-gray-200/50 shadow-sm">
                <div className="text-2xl font-bold text-[#023047]">Level 1</div>
                <div className="text-sm text-[#023047]/60">Community Stage</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-lg text-[#023047]/60">
              👇 Choose your starting point below
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
