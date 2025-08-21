'use client';

import { StickyNavbar } from '../components/StickyNavbar';
import { DisplayCard } from '../components/DisplayCard';
import Script from 'next/script';

export default function Home() {
  const cards = [
    {
      id: 'greetings',
      title: "Welcome to the Hockey Family!",
      subtitle: "Where passion meets the ice",
      description: [
        "📰 Share hockey news & stories",
        "🏆 Discover legendary moments", 
        "📚 Learn skills & strategies",
        "🎯 Enjoy fun tidbits & facts",
        "🧠 Challenge yourself & friends",
        "💪 Get motivated by pros",
        "🤝 Connect with hockey fans"
      ],
      image: "/gims/gim-00010.webp", // MascotGroup image
      buttonText: "See What's Inside",
      delay: 0,
      isFirst: true
    },
    {
      id: 'heart',
      title: "Heart & Share",
      subtitle: "Join the Team & Contribute Your Love",
      description: [
        "🏆 Join 500+ hockey enthusiasts",
        "💝 Share love through greeting cards & messages",
        "💪 Motivate fellow players with encouragement",
        "📚 Create helpful content for fellow fans",
        "🤝 Support your hockey family with kindness",
        "💖 Help grow the greatest sport with heart"
      ],
      image: "/gims/gim-00013.webp", // HeartGroup image
      buttonText: "Get in the Game",
      delay: 0.1
    },
    {
      id: 'challenge',
      title: "Test Your Hockey IQ",
      subtitle: "Learn & Challenge Yourself",
      description: [
        "🧠 Take hockey knowledge quizzes",
        "📚 Learn from expert content & insights",
        "🎯 Challenge yourself with different topics",
        "🏆 Track your progress & achievements",
        "📱 Share results with friends & family",
        "🤝 Compete with fellow hockey fans"
      ],
      image: "/gims/gim-00004.webp", // ChallengeGroup image
      buttonText: "Start Challenge",
      delay: 0.2
    },
    {
      id: 'motivate',
      title: "Hockey Wisdom & Motivation",
      subtitle: "Shareable Motivational Tidbits",
      description: [
        "💨 'Skate Like Wind' & other inspiring messages",
        "💪 Access legendary hockey wisdom & quotes",
        "📚 Read motivational stories from hockey greats",
        "🎯 Find the perfect message for any situation",
        "🤝 Share motivation with your hockey family",
        "💖 Keep the hockey love alive & strong"
      ],
      image: "/gims/gim-00012.webp", // MotivateGroup image
      buttonText: "Get Wisdom",
      delay: 0.3
    },
    {
      id: 'experts',
      title: "Meet the Experts",
      subtitle: "No Awkward Dinners, Just Hockey Talk",
      description: [
        "👨‍🏫 Get insights from hockey coaches & players",
        "🎙️ Discover tips from broadcasters",
        "🔬 & scientists, therapists, nutritionists, gearheads",
        "👩‍👧‍👦 Learn from passionate fans & hockey moms",
        "🎯 Each expert has unique knowledge & insights",
        "🤝 Share their wisdom with your hockey family",
        "💖 Spread the love of hockey through expert content"
      ],
      image: "/gims/gim-00024.webp", // Experts image
      buttonText: "Meet the Experts",
      delay: 0.4
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
        {cards.map((card, index) => (
          <DisplayCard
            key={index}
            id={card.id}
            title={card.title}
            subtitle={card.subtitle}
            description={card.description}
            image={card.image}
            buttonText={card.buttonText}
            delay={card.delay}
            isFirst={card.isFirst}
          />
        ))}
      </main>
    </div>
  );
}
