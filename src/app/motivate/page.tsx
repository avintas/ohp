'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Footer } from '../../components/Footer';
import { ClientOnly } from '../../components/ClientOnly';

interface Motivation {
  id: string;
  title: string;
  category: string;
  emoji: string;
  shareText: string;
  content: string;
}

export default function MotivatePage() {
  const [motivations, setMotivations] = useState<Motivation[]>([]);
  const [loading, setLoading] = useState(true);

  const [sharedMotivations, setSharedMotivations] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Load motivational messages
    const loadMotivations = async () => {
      try {
        // 21 motivational messages
        const allMotivations: Motivation[] = [
          {
            id: '01-be-a-wall',
            title: 'Be a Wall Tonight',
            category: 'Defense',
            emoji: '🧱',
            shareText: 'Be a wall tonight! Stand tall, block shots, and let nothing get past you. Defense wins championships! #HockeyMotivation #OnlyHockey',
            content: 'Be a wall tonight! Stand tall, block shots, and let nothing get past you. Defense wins championships!'
          },
          {
            id: '02-skate-like-wind',
            title: 'Skate Like the Wind',
            category: 'Speed',
            emoji: '💨',
            shareText: 'Skate like the wind! Speed kills, and you\'re the fastest thing on ice tonight. Leave them in your dust! #HockeyMotivation #OnlyHockey',
            content: 'Skate like the wind! Speed kills, and you\'re the fastest thing on ice tonight. Leave them in your dust!'
          },
          {
            id: '03-eat-my-ice-chips',
            title: 'Eat My Ice Chips',
            category: 'Attitude',
            emoji: '❄️',
            shareText: 'Eat my ice chips! You\'re here to dominate, not to be dominated. Show them who owns this ice! #HockeyMotivation #OnlyHockey',
            content: 'Eat my ice chips! You\'re here to dominate, not to be dominated. Show them who owns this ice!'
          },
          {
            id: '04-net-minder',
            title: 'Net Minder',
            category: 'Goalie',
            emoji: '🥅',
            shareText: 'You\'re the last line of defense. Every save matters, every moment counts. Be the wall they can\'t break! #HockeyMotivation #OnlyHockey',
            content: 'You\'re the last line of defense. Every save matters, every moment counts. Be the wall they can\'t break!'
          },
          {
            id: '05-power-play',
            title: 'Power Play Time',
            category: 'Offense',
            emoji: '⚡',
            shareText: 'Power play time! This is your moment to shine. Make every second count and light the lamp! #HockeyMotivation #OnlyHockey',
            content: 'Power play time! This is your moment to shine. Make every second count and light the lamp!'
          },
          {
            id: '06-face-off',
            title: 'Face Off Ready',
            category: 'Competition',
            emoji: '🏒',
            shareText: 'Face off ready! Win the draw, control the play, and set the tone. Every faceoff is a battle! #HockeyMotivation #OnlyHockey',
            content: 'Face off ready! Win the draw, control the play, and set the tone. Every faceoff is a battle!'
          },
          {
            id: '07-breakaway',
            title: 'Breakaway Beauty',
            category: 'Offense',
            emoji: '🎯',
            shareText: 'Breakaway beauty! You\'ve got the speed, you\'ve got the skill. Now finish it with style! #HockeyMotivation #OnlyHockey',
            content: 'Breakaway beauty! You\'ve got the speed, you\'ve got the skill. Now finish it with style!'
          },
          {
            id: '08-penalty-kill',
            title: 'Penalty Kill Warrior',
            category: 'Defense',
            emoji: '🛡️',
            shareText: 'Penalty kill warrior! Short-handed but never short on heart. Kill this penalty and turn defense into offense! #HockeyMotivation #OnlyHockey',
            content: 'Penalty kill warrior! Short-handed but never short on heart. Kill this penalty and turn defense into offense!'
          },
          {
            id: '09-ice-warrior',
            title: 'Ice Warrior',
            category: 'Attitude',
            emoji: '⚔️',
            shareText: 'Ice warrior! Battle-tested, ice-ready, and hungry for victory. This is your arena, this is your time! #HockeyMotivation #OnlyHockey',
            content: 'Ice warrior! Battle-tested, ice-ready, and hungry for victory. This is your arena, this is your time!'
          },
          {
            id: '10-sniper-mode',
            title: 'Sniper Mode',
            category: 'Offense',
            emoji: '🎯',
            shareText: 'Sniper mode activated! Pick your spot, take your shot, and watch it find the back of the net! #HockeyMotivation #OnlyHockey',
            content: 'Sniper mode activated! Pick your spot, take your shot, and watch it find the back of the net!'
          },
          {
            id: '11-ice-cold',
            title: 'Ice Cold Focus',
            category: 'Mental',
            emoji: '🧊',
            shareText: 'Ice cold focus! Stay calm under pressure, make smart decisions, and execute with precision! #HockeyMotivation #OnlyHockey',
            content: 'Ice cold focus! Stay calm under pressure, make smart decisions, and execute with precision!'
          },
          {
            id: '12-hockey-hair',
            title: 'Hockey Hair Power',
            category: 'Style',
            emoji: '💇‍♂️',
            shareText: 'Hockey hair power! Let it flow, let it show, and let your style intimidate the competition! #HockeyMotivation #OnlyHockey',
            content: 'Hockey hair power! Let it flow, let it show, and let your style intimidate the competition!'
          },
          {
            id: '13-stick-tap',
            title: 'Stick Tap Respect',
            category: 'Sportsmanship',
            emoji: '🏒',
            shareText: 'Stick tap respect! Acknowledge great plays, honor your opponents, and play with class! #HockeyMotivation #OnlyHockey',
            content: 'Stick tap respect! Acknowledge great plays, honor your opponents, and play with class!'
          },
          {
            id: '14-ice-time',
            title: 'Ice Time Earned',
            category: 'Work Ethic',
            emoji: '⏰',
            shareText: 'Ice time earned! Every shift is a privilege, every moment is an opportunity. Make it count! #HockeyMotivation #OnlyHockey',
            content: 'Ice time earned! Every shift is a privilege, every moment is an opportunity. Make it count!'
          },
          {
            id: '15-championship-mindset',
            title: 'Championship Mindset',
            category: 'Mental',
            emoji: '🏆',
            shareText: 'Championship mindset! Think like a winner, play like a champion, and never settle for less! #HockeyMotivation #OnlyHockey',
            content: 'Championship mindset! Think like a winner, play like a champion, and never settle for less!'
          },
          {
            id: '16-ice-breaker',
            title: 'Ice Breaker',
            category: 'Leadership',
            emoji: '🔨',
            shareText: 'Ice breaker! Be the one who sets the tone, breaks the tension, and leads by example! #HockeyMotivation #OnlyHockey',
            content: 'Ice breaker! Be the one who sets the tone, breaks the tension, and leads by example!'
          },
          {
            id: '17-net-front',
            title: 'Net Front Presence',
            category: 'Offense',
            emoji: '🥅',
            shareText: 'Net front presence! Park yourself in the slot, take the abuse, and cash in on the chaos! #HockeyMotivation #OnlyHockey',
            content: 'Net front presence! Park yourself in the slot, take the abuse, and cash in on the chaos!'
          },
          {
            id: '18-ice-dancer',
            title: 'Ice Dancer',
            category: 'Skill',
            emoji: '💃',
            shareText: 'Ice dancer! Move with grace, skate with style, and make the impossible look effortless! #HockeyMotivation #OnlyHockey',
            content: 'Ice dancer! Move with grace, skate with style, and make the impossible look effortless!'
          },
          {
            id: '19-hockey-heart',
            title: 'Hockey Heart',
            category: 'Passion',
            emoji: '❤️',
            shareText: 'Hockey heart! Play with passion, compete with heart, and leave everything on the ice! #HockeyMotivation #OnlyHockey',
            content: 'Hockey heart! Play with passion, compete with heart, and leave everything on the ice!'
          },
          {
            id: '20-ice-legend',
            title: 'Ice Legend',
            category: 'Legacy',
            emoji: '👑',
            shareText: 'Ice legend! Write your story, create your legacy, and become the player they\'ll remember! #HockeyMotivation #OnlyHockey',
            content: 'Ice legend! Write your story, create your legacy, and become the player they\'ll remember!'
          },
          {
            id: '21-stanley-cup-dream',
            title: 'Stanley Cup Dream',
            category: 'Dreams',
            emoji: '🏆',
            shareText: 'Stanley Cup dream! Every shift brings you closer to the ultimate goal. Dream big, work hard, achieve greatness! #HockeyMotivation #OnlyHockey',
            content: 'Stanley Cup dream! Every shift brings you closer to the ultimate goal. Dream big, work hard, achieve greatness!'
          }
        ];
        setMotivations(allMotivations);
        setLoading(false);
      } catch (error) {
        console.error('Error loading motivations:', error);
        setLoading(false);
      }
    };

    loadMotivations();
  }, []);

  const handleShare = async (motivation: Motivation) => {
    // Import dynamically to avoid hydration issues
    const { safeShare } = await import('../../utils/shareUtils');
    
    const success = await safeShare(
      {
        title: `Hockey Motivation from OnlyHockey: ${motivation.title}`,
        text: motivation.shareText,
      },
      motivation.shareText
    );

    if (success) {
      setSharedMotivations(prev => new Set([...prev, motivation.id]));
    }
  };





  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f0f23] flex items-center justify-center">
        <div className="text-white text-xl">Loading motivations...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f23]">

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Motivate
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            <span className="text-[#F59E0B] font-semibold">M</span>indset • <span className="text-[#F59E0B] font-semibold">O</span>vercome • <span className="text-[#F59E0B] font-semibold">T</span>riumph
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Get fired up with hockey motivation that hits different. From pre-game pump-ups to championship mindset, these messages will fuel your fire on and off the ice.
          </p>
          

        </motion.div>
      </section>

      {/* Motivations Feed */}
      <section className="pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-4">
            {motivations.map((motivation) => (
              <ClientOnly key={motivation.id} fallback={
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 h-48">
                  <div className="animate-pulse">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
                      <div className="h-4 bg-gray-700 rounded w-24"></div>
                    </div>
                    <div className="h-4 bg-gray-700 rounded mb-2"></div>
                    <div className="h-4 bg-gray-700 rounded mb-2 w-5/6"></div>
                    <div className="h-4 bg-gray-700 rounded w-2/3"></div>
                  </div>
                </div>
              }>
                <motion.div
                key={motivation.id}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(245, 158, 11, 0.15)"
                }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-[#F59E0B]/30 transition-all duration-300 hover:bg-gray-800/70 cursor-pointer"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F59E0B] to-[#F59E0B]/70 rounded-full flex items-center justify-center text-2xl">
                    {motivation.emoji}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-white font-bold text-lg">OnlyHockey</h3>
                    </div>
                  </div>
                </div>

                {/* Actions Below Header - All Viewports */}
                <div className="flex items-center justify-start gap-4 mb-4">
                  {/* Share Button */}
                  <motion.button 
                    onClick={() => handleShare(motivation)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 transition-colors duration-300 group ${
                      sharedMotivations.has(motivation.id) 
                        ? 'text-[#F59E0B]' 
                        : 'text-gray-400 hover:text-[#F59E0B]'
                    }`}
                  >
                    <motion.div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        sharedMotivations.has(motivation.id) 
                          ? 'bg-[#F59E0B]/20' 
                          : 'group-hover:bg-[#F59E0B]/10'
                      }`}
                      whileTap={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, -15, 15, 0]
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.span 
                        className="text-lg"
                        animate={sharedMotivations.has(motivation.id) ? {
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

                {/* Content */}
                <div className="mb-4">
                  <h4 className="text-white text-xl font-bold mb-3">
                    {motivation.title}
                  </h4>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {motivation.content}
                  </p>
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
