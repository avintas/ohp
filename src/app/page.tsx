'use client';

import { StickyNavbar } from '../components/StickyNavbar';
import { DisplayCard } from '../components/DisplayCard';

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
      title: "Motivate",
      subtitle: "Subtitle Goes Here",
      image: "/gims/gim-00012.webp", // MotivateGroup image
      buttonText: "Get Motivated",
      delay: 0.3
    },
    {
      id: 'persona',
      title: "Persona",
      subtitle: "Subtitle Goes Here",
      image: "/pims/hs1.webp", // PersonaGroup image
      buttonText: "Battle Now",
      delay: 0.4
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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
