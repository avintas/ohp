'use client';

import { StickyNavbar } from '@/components/StickyNavbar';
import { CastMachine } from '@/components/CastMachine';
import { Footer } from '@/components/Footer';

export default function ContentPage() {
  // Radio Content Data - organized by station categories
  const radioContent = [
    {
      id: 'gretzky-records',
      title: "The Great One's Unbreakable Records",
      content: "Wayne Gretzky holds 61 NHL records, including most career goals (894), assists (1,963), and points (2,857). His dominance was so complete that he'd still hold the points record with goals alone!",
      duration: 45,
      category: 'stories' as const
    },
    {
      id: 'soviet-hockey-secrets',
      title: 'Soviet Hockey Training Secrets',
      content: 'The Soviet Union revolutionized hockey with their systematic approach to skill development, emphasizing creativity, passing, and team play over individual heroics.',
      duration: 50,
      category: 'stories' as const
    },
    {
      id: 'miracle-on-ice',
      title: 'The Miracle on Ice Legacy',
      content: 'The 1980 US Olympic hockey victory over the Soviet Union remains one of the greatest upsets in sports history, inspiring generations of American hockey players.',
      duration: 40,
      category: 'pump' as const
    },
    {
      id: 'hockey-fights-purpose',
      title: 'The Science Behind Hockey Fights',
      content: 'Hockey fights serve multiple purposes: momentum shifts, player protection, and emotional release. Modern analytics show teams often perform better after strategic fights.',
      duration: 35,
      category: 'quiz' as const
    },
    {
      id: 'goalie-evolution',
      title: 'Goaltending Through the Ages',
      content: 'From stand-up styles to butterfly techniques, goaltending has evolved dramatically. Modern goalies are athletes trained in flexibility, reflexes, and mental toughness.',
      duration: 55,
      category: 'stories' as const
    },
    {
      id: 'hockey-superstitions',
      title: 'Hockey\'s Wildest Superstitions',
      content: 'From playoff beards to pre-game rituals, hockey players are among the most superstitious athletes. Some won\'t step on the logo, others have elaborate stick-taping ceremonies.',
      duration: 42,
      category: 'hugs' as const
    },
    {
      id: 'international-ice-sizes',
      title: 'Ice Rinks Around the World',
      content: 'NHL rinks are 200x85 feet, but international ice is 200x100 feet. This difference significantly impacts playing styles and strategies between North American and European hockey.',
      duration: 38,
      category: 'quiz' as const
    },
    {
      id: 'hockey-hall-of-fame',
      title: 'Hockey Hall of Fame Stories',
      content: 'Located in Toronto, the Hockey Hall of Fame houses the most comprehensive collection of hockey artifacts, including every Stanley Cup ring and legendary player memorabilia.',
      duration: 48,
      category: 'stories' as const
    },
    {
      id: 'women-hockey-growth',
      title: 'Women\'s Hockey Rising',
      content: 'Women\'s hockey participation has grown 400% since 1990. The sport showcases incredible skill, speed, and strategy without body checking, emphasizing pure hockey talent.',
      duration: 52,
      category: 'hugs' as const
    },
    {
      id: 'hockey-analytics',
      title: 'Hockey\'s Analytics Revolution',
      content: 'Advanced stats like Corsi, Fenwick, and expected goals have transformed how teams evaluate players and develop strategies, making hockey more scientific than ever.',
      duration: 47,
      category: 'quiz' as const
    },
    {
      id: 'outdoor-hockey-magic',
      title: 'The Magic of Outdoor Hockey',
      content: 'Winter Classics and outdoor games capture hockey\'s pure essence. Playing under open skies connects modern players to the sport\'s pond hockey origins.',
      duration: 44,
      category: 'pump' as const
    },
    {
      id: 'hockey-community-impact',
      title: 'Hockey\'s Community Impact',
      content: 'Hockey builds character, teamwork, and lifelong friendships. Local rinks serve as community centers where families gather and young players learn life lessons.',
      duration: 46,
      category: 'hugs' as const
    }
  ];



  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      <StickyNavbar />
      
      {/* Main Content */}
      <main className="pt-4">
        {/* Hero Section */}
        <section className="mt-16 py-8 px-4 md:px-6 2xl:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
                Cast Player
            </h1>
            <p className="text-lg md:text-xl text-[#a0aec0] mb-8">
              Your personal hockey broadcasting experience • {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
            </p>


          </div>
        </section>

        {/* Cast Machine */}
        <section className="pt-0 pb-2 px-4 md:px-6 2xl:px-8">
          <div className="w-full max-w-md mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-6xl flex justify-center">
            <CastMachine content={radioContent} />
          </div>
        </section>





        {/* Community Pulse */}
        <section className="py-8 px-4 md:px-6 2xl:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Community Pulse</h2>
            
            <div className="bg-[#1a1a2e]/80 backdrop-blur-sm rounded-2xl p-6 border border-[#2d3748] shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#4cc9f0] mb-1">47</div>
                  <div className="text-sm text-[#a0aec0]">Hockey hugs sent today</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#4cc9f0] mb-1">23</div>
                  <div className="text-sm text-[#a0aec0]">Quizzes completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#4cc9f0] mb-1">156</div>
                  <div className="text-sm text-[#a0aec0]">Factoids shared</div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-[#2d3748]">
                <div className="text-center text-sm text-[#a0aec0]">
                  <p className="mb-2">🔥 <strong className="text-white">Sarah</strong> just aced the 90s NHL quiz!</p>
                  <p>💝 <strong className="text-white">Mike</strong> sent a hockey hug to the community</p>
                </div>
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
