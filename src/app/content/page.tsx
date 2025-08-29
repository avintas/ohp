'use client';

import { StickyNavbar } from '@/components/StickyNavbar';
import { ContentCarousel } from '@/components/ContentCarousel';

export default function ContentPage() {
  // Carousel Cards Data - 12 cards for the main content carousel
  const carouselCards = [
    {
      id: 'gretzky-records',
      title: "The Great One's Unbreakable Records",
      content: "Wayne Gretzky holds 61 NHL records, including most career goals (894), assists (1,963), and points (2,857). His dominance was so complete that he'd still hold the points record with goals alone!",
      category: 'Legends'
    },
    {
      id: 'soviet-hockey-secrets',
      title: 'Soviet Hockey Training Secrets',
      content: 'The Soviet Union revolutionized hockey with their systematic approach to skill development, emphasizing creativity, passing, and team play over individual heroics.',
      category: 'Legends'
    },
    {
      id: 'miracle-on-ice',
      title: 'The Miracle on Ice Legacy',
      content: 'The 1980 US Olympic hockey victory over the Soviet Union remains one of the greatest upsets in sports history, inspiring generations of American hockey players.',
      category: 'Legends'
    },
    {
      id: 'hockey-fights-purpose',
      title: 'The Science Behind Hockey Fights',
      content: 'Hockey fights serve multiple purposes: momentum shifts, player protection, and emotional release. Modern analytics show teams often perform better after strategic fights.',
      category: 'Features'
    },
    {
      id: 'goalie-evolution',
      title: 'Goaltending Through the Ages',
      content: 'From stand-up styles to butterfly techniques, goaltending has evolved dramatically. Modern goalies are athletes trained in flexibility, reflexes, and mental toughness.',
      category: 'Features'
    },
    {
      id: 'hockey-superstitions',
      title: 'Hockey\'s Wildest Superstitions',
      content: 'From playoff beards to pre-game rituals, hockey players are among the most superstitious athletes. Some won\'t step on the logo, others have elaborate stick-taping ceremonies.',
      category: 'Community'
    },
    {
      id: 'international-ice-sizes',
      title: 'Ice Rinks Around the World',
      content: 'NHL rinks are 200x85 feet, but international ice is 200x100 feet. This difference significantly impacts playing styles and strategies between North American and European hockey.',
      category: 'Features'
    },
    {
      id: 'hockey-hall-of-fame',
      title: 'Hockey Hall of Fame Stories',
      content: 'Located in Toronto, the Hockey Hall of Fame houses the most comprehensive collection of hockey artifacts, including every Stanley Cup ring and legendary player memorabilia.',
      category: 'Legends'
    },
    {
      id: 'women-hockey-growth',
      title: 'Women\'s Hockey Rising',
      content: 'Women\'s hockey participation has grown 400% since 1990. The sport showcases incredible skill, speed, and strategy without body checking, emphasizing pure hockey talent.',
      category: 'Community'
    },
    {
      id: 'hockey-analytics',
      title: 'Hockey\'s Analytics Revolution',
      content: 'Advanced stats like Corsi, Fenwick, and expected goals have transformed how teams evaluate players and develop strategies, making hockey more scientific than ever.',
      category: 'Features'
    },
    {
      id: 'outdoor-hockey-magic',
      title: 'The Magic of Outdoor Hockey',
      content: 'Winter Classics and outdoor games capture hockey\'s pure essence. Playing under open skies connects modern players to the sport\'s pond hockey origins.',
      category: 'Events'
    },
    {
      id: 'hockey-community-impact',
      title: 'Hockey\'s Community Impact',
      content: 'Hockey builds character, teamwork, and lifelong friendships. Local rinks serve as community centers where families gather and young players learn life lessons.',
      category: 'Community'
    }
  ];



  return (
    <div className="min-h-screen bg-white">
      <StickyNavbar />
      
      {/* Main Content */}
      <main className="pt-4">
        {/* Hero Section */}
        <section className="py-12 px-4 md:px-6 2xl:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#023047] mb-4">
                OnlyHockey Shareables
            </h1>
            <p className="text-lg md:text-xl text-[#023047]/70 mb-8">
              Your daily dose of hockey awesome • {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </section>

        {/* Content Carousel */}
        <section className="py-4 px-4 md:px-6 2xl:px-8">
          <div className="max-w-7xl mx-auto">
            <ContentCarousel cards={carouselCards} />
          </div>
        </section>



        {/* Quick Actions */}
        <section className="py-8 px-4 md:px-6 2xl:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-[#023047] text-center mb-8">Quick Actions</h2>
            
            <div className="flex justify-center items-center gap-8 md:gap-12">
              {/* Send Hockey Hug */}
              <div className="text-center cursor-pointer hover:scale-110 transition-all duration-200" title="Send hockey hug to fellow fans">
                <div className="text-5xl mb-2">💝</div>
                <div className="text-sm font-semibold text-[#023047]">Hug</div>
              </div>
              
              {/* Brain Challenge */}
              <div className="text-center cursor-pointer hover:scale-110 transition-all duration-200" title="Test your hockey knowledge">
                <div className="text-5xl mb-2">🧠</div>
                <div className="text-sm font-semibold text-[#023047]">Quiz</div>
              </div>
              
              {/* Get Pumped */}
              <div className="text-center cursor-pointer hover:scale-110 transition-all duration-200" title="Get motivational boost">
                <div className="text-5xl mb-2">💪</div>
                <div className="text-sm font-semibold text-[#023047]">Pump</div>
              </div>
              
              {/* Discover Stories */}
              <div className="text-center cursor-pointer hover:scale-110 transition-all duration-200" title="Discover hockey stories">
                <div className="text-5xl mb-2">📰</div>
                <div className="text-sm font-semibold text-[#023047]">Story</div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Pulse */}
        <section className="py-8 px-4 md:px-6 2xl:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#023047] text-center mb-8">Community Pulse</h2>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#023047] mb-1">47</div>
                  <div className="text-sm text-[#023047]/60">Hockey hugs sent today</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#023047] mb-1">23</div>
                  <div className="text-sm text-[#023047]/60">Quizzes completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#023047] mb-1">156</div>
                  <div className="text-sm text-[#023047]/60">Factoids shared</div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200/50">
                <div className="text-center text-sm text-[#023047]/70">
                  <p className="mb-2">🔥 <strong>Sarah</strong> just aced the 90s NHL quiz!</p>
                  <p>💝 <strong>Mike</strong> sent a hockey hug to the community</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
