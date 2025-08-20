'use client';

import { StickyNavbar } from '../components/StickyNavbar';
import { DisplayCard } from '../components/DisplayCard';

export default function Home() {
  const cards = [
    {
      id: 'home',
      title: "Title Goes Here",
      subtitle: "Subtitle Goes Here",
      description: [
        "SHARE the HOCKEY LOVE",
        "500+ expert tidbits",
        "Elevate your hockey IQ", 
        "Penalty Box Philosophy",
        "Get smarter in just minutes",
        "Battles of Wits"
      ],
      image: "/gims/gim-00006.webp", // HeartGroup image
      buttonText: "Share the Love",
      delay: 0,
      isFirst: true
    },
    {
      id: 'greetings',
      title: "Title Goes Here",
      subtitle: "Subtitle Goes Here",
      image: "/gims/gim-00005.webp", // MascotGroup image
      buttonText: "Say Hello",
      delay: 0.2
    },
    {
      id: 'challenge',
      title: "Title Goes Here",
      subtitle: "Subtitle Goes Here",
      image: "/gims/gim-00004.webp", // ChallengeGroup image
      buttonText: "Start Challenge",
      delay: 0.4
    },
    {
      id: 'share',
      title: "Title Goes Here",
      subtitle: "Subtitle Goes Here",
      image: "/gims/gim-share.webp", // ShareGroup image
      buttonText: "Share Now",
      delay: 0.6
    },
    {
      id: 'motivate',
      title: "Title Goes Here",
      subtitle: "Subtitle Goes Here",
      image: "/gims/gim-motivate.webp", // MotivateGroup image
      buttonText: "Get Motivated",
      delay: 0.8
    },
    {
      id: 'persona',
      title: "Title Goes Here",
      subtitle: "Subtitle Goes Here",
      image: "/pims/hs1.webp", // PersonaGroup image
      buttonText: "Battle Now",
      delay: 1.0
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <StickyNavbar />
      
      {/* Main Content */}
      <main className="pt-16">
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
