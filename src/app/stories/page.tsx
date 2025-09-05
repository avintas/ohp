'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { StickyNavbar } from '../../components/StickyNavbar';
import { Footer } from '../../components/Footer';
import { ClientOnly } from '../../components/ClientOnly';

interface Story {
  id: string;
  title: string;
  category: string;
  emoji: string;
  shareText: string;
  content: string;
  date: string;
}

export default function StoriesPage() {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);

  const [sharedStories, setSharedStories] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Load stories from markdown files
    const loadStories = async () => {
      try {
        // Sample stories based on existing content
        const sampleStories: Story[] = [

          {
            id: '02-canadian-coaches',
            title: 'Canadian Coaches Discover Soviet Secrets',
            category: 'This Week',
            emoji: '🇨🇦',
            shareText: 'July 1974: Canadian coaches traveled to Moscow to unlock Soviet hockey secrets. What they found changed youth hockey forever. #HockeyHistory #OnlyHockey',
            content: 'In July 1974, a group of Canadian hockey coaches from across the country made a pilgrimage to Moscow\'s Red Army sports club, determined to understand why Soviet hockey had become so dominant. What they discovered was revolutionary: 11-year-olds doing the same drills as the national team, scientific player selection starting at age six, and state-sponsored training that integrated education with hockey development. "These kids are doing the same drills that the national team does," observed one stunned Canadian coach. This mission directly influenced the modern youth hockey development programs we see today.',
            date: 'July 1974'
          },
          {
            id: '03-hemingway-birth',
            title: 'The Night Hockey Stopped for Ernest Hemingway\'s Birth',
            category: 'This Week',
            emoji: '📚',
            shareText: 'July 21, 1899: Ernest Hemingway was born - the writer who would make hockey literature legendary. From ice rinks to Nobel Prizes. #HockeyHistory #OnlyHockey',
            content: 'July 21, 1899 marked the birth of Ernest Hemingway in Oak Park, Illinois - though few knew this future Nobel laureate would become one of hockey\'s most passionate literary voices. Hemingway\'s love affair with hockey began during his childhood winters, watching games on frozen ponds near Chicago. His experiences on the ice profoundly influenced his writing philosophy of grace under pressure. Hemingway\'s sparse, powerful prose style mirrors hockey\'s combination of finesse and brutality, making him the sport\'s greatest literary ambassador.',
            date: 'July 21, 1899'
          },
          {
            id: '04-gretzky-philosophy',
            title: 'Wayne Gretzky\'s Philosophy on Pressure',
            category: 'Coach Quote',
            emoji: '🏒',
            shareText: '"I skate to where the puck is going to be, not where it has been." - Wayne Gretzky\'s wisdom applies to life beyond hockey. #GretzkyWisdom #OnlyHockey',
            content: 'Wayne Gretzky\'s most famous quote reveals the mindset that made him hockey\'s greatest player: "I skate to where the puck is going to be, not where it has been." This philosophy extended far beyond the rink into his approach to pressure and expectations. "Pressure is something you feel when you don\'t know what the hell you\'re doing," Gretzky once explained to young players. His ability to anticipate rather than react separated him from every other player in hockey history. Whether breaking Gordie Howe\'s scoring record or transitioning to coaching, The Great One always focused on future possibilities rather than past achievements.',
            date: '1980s'
          },
          {
            id: '05-bowman-formula',
            title: 'Scotty Bowman\'s Championship Formula',
            category: 'Coach Quote',
            emoji: '🏆',
            shareText: '"I found out that if you are going to win games, you had better be ready to adapt." - Scotty Bowman, 9-time Stanley Cup champion coach. #ChampionMindset #OnlyHockey',
            content: 'Scotty Bowman, hockey\'s most successful coach with nine Stanley Cup victories, built his legacy on one fundamental principle: adaptation. "I found out that if you are going to win games, you had better be ready to adapt," Bowman explained during his Hall of Fame career. His ability to adjust his coaching style to different eras and players made him legendary. With the Montreal Canadiens in the 1970s, he managed superstars like Guy Lafleur. Two decades later in Detroit, he brilliantly integrated the Russian Five into North American hockey culture. His willingness to evolve with the game made him the gold standard for hockey leadership.',
            date: '1970s-2000s'
          },
          {
            id: '06-delta-airlines',
            title: 'Delta Airlines: Your Hockey Gear Flies Free (Almost)',
            category: 'Travel',
            emoji: '✈️',
            shareText: 'Flying with hockey gear? Delta counts your bag plus 2 sticks as ONE item with no extra sports fees since 2019! Travel hack unlocked #HockeyTravel #OnlyHockey',
            content: 'Delta Airlines revolutionized hockey travel in 2019 by eliminating the notorious $150 sports equipment surcharge. Now one equipment bag plus two hockey sticks taped together counts as a single checked item under standard baggage fees. The 50-pound weight limit applies but overweight fees only kick in after that threshold. Your gear must fit within 115 linear inches (length + width + height) which accommodates most hockey bags except oversized goalie equipment. This policy change saves hockey families hundreds of dollars annually on tournament travel. The key is proper packing - use a designated hockey bag designed for air travel and tape sticks securely together. Pro tip: weigh your bag at home to avoid overweight surprises at the airport. Delta\'s hockey-friendly policy extends to all North American destinations making it the preferred airline for traveling teams and hockey families.',
            date: '2019'
          },
          {
            id: '07-finland-factory',
            title: 'Finland: Europe\'s Hockey Development Factory',
            category: 'International',
            emoji: '🇫🇮',
            shareText: 'Finland produces more NHL players per capita than any other country except Canada. Population 5.5 million, hockey impact massive! #FinnishHockey #OnlyHockey',
            content: 'Finland\'s hockey development system produces NHL talent at an extraordinary rate relative to its 5.5 million population. With over 200 Finnish-born players in NHL history, Finland ranks second only to Canada in per capita NHL production. The Finnish system emphasizes skill development over physical play, creating players known for hockey intelligence and technical precision. Stars like Teemu Selänne, Jari Kurri, and current players like Aleksander Barkov showcase the Finnish approach to hockey excellence. The country\'s Liiga professional league serves as a crucial development bridge between junior hockey and the NHL. Finnish coaches emphasize positional play and system-based hockey, producing defensemen and goaltenders who excel in structured environments. The success of Finnish players has influenced hockey development worldwide, proving that systematic training and hockey intelligence can overcome size and strength advantages. Finland\'s impact on international hockey far exceeds what its population size would suggest possible.',
            date: 'Current'
          },
          {
            id: '08-hockey-rinks',
            title: 'Hockey Rinks Around the World: Not All Ice is Equal',
            category: 'International',
            emoji: '🏒',
            shareText: 'Did you know? Olympic ice is 15 feet wider than NHL rinks. European hockey literally has more room for creativity! #HockeyFacts #OnlyHockey',
            content: 'Hockey rink dimensions vary significantly worldwide, fundamentally changing how the game is played. NHL rinks measure 200 feet by 85 feet while international rinks are 200 feet by 100 feet - providing 15 additional feet of width that dramatically affects strategy and style. The extra space on European rinks allows for more creative passing plays, cycling, and skill development while NHL rinks emphasize speed and physical battles along the boards. Players transitioning between rink sizes must adapt their positioning and decision-making. Europeans often struggle initially with NHL rink dimensions while North Americans find international rinks overwhelming at first. The size difference explains why European players often appear more skilled in passing and puck handling - they developed in an environment with more time and space. Olympic tournaments showcase these differences as NHL players must adapt to international ice dimensions. The rink size debate continues with some arguing larger rinks would improve NHL scoring and reduce injuries.',
            date: 'Current'
          },
          {
            id: '09-phil-esposito',
            title: 'Phil Esposito: The Goal-Scoring Revolution',
            category: 'Coach Quote',
            emoji: '🏆',
            shareText: '"I go to the net. I stand there and I take abuse and I don\'t move" - Phil Esposito\'s simple philosophy changed hockey scoring forever #EspositoWisdom #OnlyHockey',
            content: 'Phil Esposito revolutionized hockey scoring through his deceptively simple philosophy: "I go to the net. I stand there and I take abuse and I don\'t move." This approach transformed the center position from primarily a playmaker role to a goal-scoring machine. Esposito parked himself in the slot, deflecting shots and collecting rebounds despite constant cross-checks and interference from defensemen. His willingness to absorb punishment in front of the net created scoring opportunities that previous generations of players had ignored. "Most guys don\'t want to pay the price to score goals," Esposito explained. "They want to score from the outside where it\'s safe." His net-front presence contributed to five 100-point seasons and two Stanley Cup championships with Boston. Modern power forwards like Alexander Ovechkin and David Pastrnak still use Esposito\'s template: establish position, absorb contact, and capitalize on chaos around the crease.',
            date: '1970s'
          }
        ];
        setStories(sampleStories);
        setLoading(false);
      } catch (error) {
        console.error('Error loading stories:', error);
        setLoading(false);
      }
    };

    loadStories();
  }, []);

  const handleShare = async (story: Story) => {
    // Import dynamically to avoid hydration issues
    const { safeShare } = await import('../../utils/shareUtils');
    
    const success = await safeShare(
      {
        title: `Hockey Story from OnlyHockey: ${story.title}`,
        text: story.shareText,
      },
      story.shareText
    );

    if (success) {
      setSharedStories(prev => new Set([...prev, story.id]));
    }
  };



  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f0f23] flex items-center justify-center">
        <div className="text-white text-xl">Loading stories...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f23]">
      {/* Sticky Navbar */}
      <StickyNavbar />

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Hockey Stories
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            <span className="text-[#14B8A6] font-semibold">H</span>istory • <span className="text-[#14B8A6] font-semibold">I</span>nspiration • <span className="text-[#14B8A6] font-semibold">L</span>egends
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover the untold stories, legendary moments, and timeless wisdom that shaped hockey. These stories connect us to the game's rich heritage.
          </p>
        </motion.div>
      </section>

      {/* Stories Feed */}
      <section className="pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            {stories.map((story) => (
              <ClientOnly key={story.id} fallback={
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 h-48">
                  <div className="animate-pulse">
                    <div className="h-6 bg-gray-700 rounded mb-4 w-3/4"></div>
                    <div className="h-4 bg-gray-700 rounded mb-2"></div>
                    <div className="h-4 bg-gray-700 rounded mb-2 w-5/6"></div>
                    <div className="h-4 bg-gray-700 rounded w-2/3"></div>
                  </div>
                </div>
              }>
                <motion.div
                key={story.id}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(20, 184, 166, 0.15)"
                }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-[#14B8A6]/30 transition-all duration-300 hover:bg-gray-800/70 cursor-pointer"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#14B8A6] to-[#14B8A6]/70 rounded-full flex items-center justify-center text-2xl">
                    {story.emoji}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-white font-bold text-lg">OnlyHockey</h3>
                    </div>

                  </div>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <h4 className="text-white text-xl font-bold mb-3">
                    {story.title}
                  </h4>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {story.content}
                  </p>
                </div>

                {/* Actions Below Header - All Viewports */}
                <div className="flex items-center justify-start gap-4 mb-4">
                  {/* Share Button */}
                  <motion.button 
                    onClick={() => handleShare(story)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 transition-colors duration-300 group ${
                      sharedStories.has(story.id) 
                        ? 'text-[#14B8A6]' 
                        : 'text-gray-400 hover:text-[#14B8A6]'
                    }`}
                  >
                    <motion.div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        sharedStories.has(story.id) 
                          ? 'bg-[#14B8A6]/20' 
                          : 'group-hover:bg-[#14B8A6]/10'
                      }`}
                      whileTap={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, -15, 15, 0]
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.span 
                        className="text-lg"
                        animate={sharedStories.has(story.id) ? {
                          scale: [1, 1.2, 1],
                          y: [0, -2, 0]
                        } : {}}
                        transition={{ duration: 0.4 }}
                      >
                        📤
                      </motion.span>
                    </motion.div>
                    <span className="text-sm font-medium">Share</span>
                  </motion.button>
                </div>
              </motion.div>
              </ClientOnly>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
