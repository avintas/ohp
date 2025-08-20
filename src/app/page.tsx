'use client';

import { StickyNavbar } from '../components/StickyNavbar';
import { DisplayCard } from '../components/DisplayCard';

export default function Home() {
  const cards = [
    {
      id: 'greetings',
      title: "Greetings",
      subtitle: "Subtitle Goes Here",
      description: [
        "Welcome to the Hockey Family!",
        "Where passion meets the ice",
        "Join our community of champions",
        "Every player has a story",
        "Let's make hockey history together",
        "The puck stops here - with you!"
      ],
      image: "/gims/gim-00010.webp", // MascotGroup image
      buttonText: "Say Hello",
      delay: 0,
      isFirst: true
    },
    {
      id: 'heart',
      title: "Heart",
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
      delay: 0.1
    },
    {
      id: 'challenge',
      title: "Challenge",
      subtitle: "Subtitle Goes Here",
      image: "/gims/gim-00004.webp", // ChallengeGroup image
      buttonText: "Start Challenge",
      delay: 0.2
    },
    {
      id: 'share',
      title: "Share",
      subtitle: "Subtitle Goes Here",
      image: "/gims/gim-00008.webp", // ShareGroup image
      buttonText: "Share Now",
      delay: 0.3
    },
    {
      id: 'motivate',
      title: "Motivate",
      subtitle: "Subtitle Goes Here",
      image: "/gims/gim-00012.webp", // MotivateGroup image
      buttonText: "Get Motivated",
      delay: 0.4
    },
    {
      id: 'persona',
      title: "Persona",
      subtitle: "Subtitle Goes Here",
      image: "/pims/hs1.webp", // PersonaGroup image
      buttonText: "Battle Now",
      delay: 0.5
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
