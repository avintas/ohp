'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { StickyNavbar } from '../../components/StickyNavbar';
import { Footer } from '../../components/Footer';

interface Hug {
  id: string;
  title: string;
  category: string;
  emoji: string;
  shareText: string;
  content: string;
}

export default function SendHugsPage() {
  const [hugs, setHugs] = useState<Hug[]>([]);
  const [loading, setLoading] = useState(true);
  const [likedHugs, setLikedHugs] = useState<Set<string>>(new Set());
  const [sharedHugs, setSharedHugs] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Load hugs from markdown files
    const loadHugs = async () => {
      try {
        // All 21 hugs - short, funny, heartfelt
        const allHugs: Hug[] = [
          {
            id: '01-heart-connection',
            title: 'Heart Connection',
            category: 'Heart',
            emoji: '❤️',
            shareText: 'Every hockey fan knows that feeling when you connect with someone across the rink, across the world. That\'s the spirit of our game. #HockeyFamily #OnlyHockey',
            content: 'Hey fellow hockey fan! Whether you\'re in the nosebleeds or on your couch, you\'re part of something bigger. That goal celebration? That\'s the sound of 20,000 people sharing the same joy. 🏒'
          },
          {
            id: '02-understanding-loss',
            title: 'Understanding Loss',
            category: 'Understanding',
            emoji: '🤝',
            shareText: 'Tough loss? We\'ve all been there. Hockey teaches us that every setback is just setting up the next comeback. #HockeyResilience #OnlyHockey',
            content: 'Tough loss? We\'ve all been there. But here\'s what hockey teaches us: every great team has had their share of setbacks. Tomorrow\'s a new game, new ice, new chances. Keep your head up! 🏒'
          },
          {
            id: '03-goodwill-celebration',
            title: 'Goodwill Celebration',
            category: 'Goodwill',
            emoji: '🎉',
            shareText: 'Celebrating not just the goals, but the spirit of the game. Every player, every fan, every moment matters. #HockeyJoy #OnlyHockey',
            content: 'What a moment! That goal, that save, that pure hockey joy - let\'s celebrate together! Your excitement reminds us why we love this game. Keep spreading that positive energy! 🏒✨'
          },
          {
            id: '04-morning-skate',
            title: 'Morning Skate',
            category: 'Heart',
            emoji: '🌅',
            shareText: 'Early morning skates hit different. That crisp air, fresh ice, and the sound of blades cutting through silence. Pure hockey magic. #MorningSkate #OnlyHockey',
            content: 'Early morning skates hit different. That crisp air, fresh ice, and the sound of blades cutting through silence. Pure hockey magic. See you on the ice! 🌅🏒'
          },
          {
            id: '05-playoff-beard',
            title: 'Playoff Beard',
            category: 'Understanding',
            emoji: '🧔',
            shareText: 'Playoff beard growing strong? That\'s dedication! Every scraggly hair represents hope, determination, and maybe a little superstition. #PlayoffBeard #OnlyHockey',
            content: 'Playoff beard growing strong? That\'s dedication! Every scraggly hair represents hope, determination, and maybe a little superstition. Keep it growing! 🧔🏒'
          },
          {
            id: '06-first-goal',
            title: 'First Goal',
            category: 'Goodwill',
            emoji: '🥅',
            shareText: 'That first goal feeling never gets old. Whether you\'re 6 or 60, that moment when the puck hits the back of the net is pure magic. #FirstGoal #OnlyHockey',
            content: 'That first goal feeling never gets old. Whether you\'re 6 or 60, that moment when the puck hits the back of the net is pure magic. Here\'s to many more! 🥅✨'
          },
          {
            id: '07-arena-food',
            title: 'Arena Food',
            category: 'Heart',
            emoji: '🌭',
            shareText: 'Overpriced arena food tastes better when your team\'s winning. That $12 hot dog? Worth every penny when you\'re celebrating with 20,000 friends. #ArenaFood #OnlyHockey',
            content: 'Overpriced arena food tastes better when your team\'s winning. That $12 hot dog? Worth every penny when you\'re celebrating with 20,000 friends. Bon appétit! 🌭🏒'
          },
          {
            id: '08-penalty-box',
            title: 'Penalty Box',
            category: 'Understanding',
            emoji: '🚫',
            shareText: 'Sitting in the penalty box gives you time to think. Sometimes the best plays come after a little timeout. Use it wisely! #PenaltyBox #OnlyHockey',
            content: 'Sitting in the penalty box gives you time to think. Sometimes the best plays come after a little timeout. Use it wisely! 🚫🏒'
          },
          {
            id: '09-hockey-parent',
            title: 'Hockey Parent',
            category: 'Goodwill',
            emoji: '👨‍👩‍👧‍👦',
            shareText: 'To all the hockey parents: early mornings, late nights, and endless driving. Your dedication doesn\'t go unnoticed. You\'re the real MVPs! #HockeyParents #OnlyHockey',
            content: 'To all the hockey parents: early mornings, late nights, and endless driving. Your dedication doesn\'t go unnoticed. You\'re the real MVPs! 👨‍👩‍👧‍👦🏒'
          },
          {
            id: '10-ice-maintenance',
            title: 'Ice Maintenance',
            category: 'Heart',
            emoji: '🧊',
            shareText: 'Shoutout to the Zamboni drivers! That perfect sheet of ice doesn\'t happen by accident. You\'re the unsung heroes of every game. #Zamboni #OnlyHockey',
            content: 'Shoutout to the Zamboni drivers! That perfect sheet of ice doesn\'t happen by accident. You\'re the unsung heroes of every game. 🧊🏒'
          },
          {
            id: '11-overtime',
            title: 'Overtime',
            category: 'Understanding',
            emoji: '⏰',
            shareText: 'Overtime hockey: where legends are born and hearts are broken. Sudden death creates instant heroes and eternal memories. #OvertimeHockey #OnlyHockey',
            content: 'Overtime hockey: where legends are born and hearts are broken. Sudden death creates instant heroes and eternal memories. Buckle up! ⏰🏒'
          },
          {
            id: '12-hockey-socks',
            title: 'Hockey Socks',
            category: 'Goodwill',
            emoji: '🧦',
            shareText: 'There\'s something special about pulling on those hockey socks. They\'re not just fabric - they\'re armor, tradition, and a little bit of magic. #HockeySocks #OnlyHockey',
            content: 'There\'s something special about pulling on those hockey socks. They\'re not just fabric - they\'re armor, tradition, and a little bit of magic. 🧦🏒'
          },
          {
            id: '13-road-trip',
            title: 'Road Trip',
            category: 'Heart',
            emoji: '🚌',
            shareText: 'Road trips with the team: cramped buses, questionable gas station food, and memories that last a lifetime. The journey is just as important as the destination. #HockeyRoadTrip #OnlyHockey',
            content: 'Road trips with the team: cramped buses, questionable gas station food, and memories that last a lifetime. The journey is just as important as the destination. 🚌🏒'
          },
          {
            id: '14-hockey-hair',
            title: 'Hockey Hair',
            category: 'Understanding',
            emoji: '💇‍♂️',
            shareText: 'Hockey hair: messy, sweaty, and absolutely perfect. It\'s not a style choice, it\'s a lifestyle. Embrace the flow! #HockeyHair #OnlyHockey',
            content: 'Hockey hair: messy, sweaty, and absolutely perfect. It\'s not a style choice, it\'s a lifestyle. Embrace the flow! 💇‍♂️🏒'
          },
          {
            id: '15-stick-tap',
            title: 'Stick Tap',
            category: 'Goodwill',
            emoji: '🏒',
            shareText: 'The stick tap: hockey\'s way of saying "good job" without words. Sometimes the simplest gestures mean the most. #StickTap #OnlyHockey',
            content: 'The stick tap: hockey\'s way of saying "good job" without words. Sometimes the simplest gestures mean the most. 🏒👏'
          },
          {
            id: '16-hockey-mom',
            title: 'Hockey Mom',
            category: 'Heart',
            emoji: '👩‍👧‍👦',
            shareText: 'Hockey moms: the real MVPs. From 5 AM practices to late-night games, your dedication never waver. Thank you! #HockeyMom #OnlyHockey',
            content: 'Hockey moms: the real MVPs. From 5 AM practices to late-night games, your dedication never waver. Thank you! 👩‍👧‍👦🏒'
          },
          {
            id: '17-ice-cold',
            title: 'Ice Cold',
            category: 'Understanding',
            emoji: '❄️',
            shareText: 'That first step onto the ice: cold, crisp, and absolutely perfect. There\'s nothing quite like it. Welcome to your happy place. #IceCold #OnlyHockey',
            content: 'That first step onto the ice: cold, crisp, and absolutely perfect. There\'s nothing quite like it. Welcome to your happy place. ❄️🏒'
          },
          {
            id: '18-hockey-dad',
            title: 'Hockey Dad',
            category: 'Goodwill',
            emoji: '👨‍👧‍👦',
            shareText: 'Hockey dads: teaching us that it\'s not about winning or losing, it\'s about character, respect, and loving the game. Your lessons last forever. #HockeyDad #OnlyHockey',
            content: 'Hockey dads: teaching us that it\'s not about winning or losing, it\'s about character, respect, and loving the game. Your lessons last forever. 👨‍👧‍👦🏒'
          },
          {
            id: '19-playoff-intensity',
            title: 'Playoff Intensity',
            category: 'Heart',
            emoji: '🔥',
            shareText: 'Playoff hockey: where every shift matters, every save counts, and every goal feels like destiny. This is what we live for. #PlayoffHockey #OnlyHockey',
            content: 'Playoff hockey: where every shift matters, every save counts, and every goal feels like destiny. This is what we live for. 🔥🏒'
          },
          {
            id: '20-hockey-family',
            title: 'Hockey Family',
            category: 'Understanding',
            emoji: '👨‍👩‍👧‍👦',
            shareText: 'Hockey isn\'t just a sport, it\'s a family. From teammates to opponents, we\'re all connected by our love for the game. #HockeyFamily #OnlyHockey',
            content: 'Hockey isn\'t just a sport, it\'s a family. From teammates to opponents, we\'re all connected by our love for the game. Welcome to the community! 👨‍👩‍👧‍👦🏒'
          },
          {
            id: '21-stanley-cup',
            title: 'Stanley Cup',
            category: 'Goodwill',
            emoji: '🏆',
            shareText: 'The Stanley Cup: more than a trophy, it\'s a dream, a goal, and a symbol of everything that makes hockey great. Keep chasing it! #StanleyCup #OnlyHockey',
            content: 'The Stanley Cup: more than a trophy, it\'s a dream, a goal, and a symbol of everything that makes hockey great. Keep chasing it! 🏆🏒'
          }
        ];
        setHugs(allHugs);
        setLoading(false);
      } catch (error) {
        console.error('Error loading hugs:', error);
        setLoading(false);
      }
    };

    loadHugs();
  }, []);

  const handleShare = async (hug: Hug) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `H.U.G. from OnlyHockey: ${hug.title}`,
          text: hug.shareText,
          url: window.location.href
        });
        setSharedHugs(prev => new Set([...prev, hug.id]));
      } catch (error) {
        console.log('Share cancelled');
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(hug.shareText);
        setSharedHugs(prev => new Set([...prev, hug.id]));
        alert('Hug copied to clipboard!');
      } catch (error) {
        console.error('Failed to copy to clipboard:', error);
      }
    }
  };

  const handleLike = (hugId: string) => {
    setLikedHugs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(hugId)) {
        newSet.delete(hugId);
      } else {
        newSet.add(hugId);
      }
      return newSet;
    });
  };

  const handleSendHug = (hug: Hug) => {
    // This would be the "retweet" functionality - sending the hug to someone
    handleShare(hug);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f0f23] flex items-center justify-center">
        <div className="text-white text-xl">Loading hugs...</div>
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
            Send a H.U.G.
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            <span className="text-[#EF476F] font-semibold">H</span>ockey • <span className="text-[#EF476F] font-semibold">U</span>niversal  • <span className="text-[#EF476F] font-semibold">G</span>reeting
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Connect with hockey fans across the globe. Whether you're celebrating a great play, showing support after a tough loss, or just saying "hey fellow fan" - send a H.U.G.
          </p>
          
          {/* Custom Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-xs mx-auto mb-8"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#EF476F]/20">
              <img 
                src="/gims/gim-00013.webp" 
                alt="Hockey H.U.G." 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* H.U.G.s Feed */}
      <section className="pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-4">
            {hugs.map((hug, index) => (
              <motion.div
                key={hug.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-[#EF476F]/30 transition-all duration-300 hover:bg-gray-800/70"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#EF476F] to-[#EF476F]/70 rounded-full flex items-center justify-center text-2xl">
                    {hug.emoji}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-white font-bold text-lg">OnlyHockey</h3>
                      <span className="text-gray-400 text-sm">@onlyhockey</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">2h</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-[#EF476F] font-medium bg-[#EF476F]/10 px-2 py-1 rounded-full">
                        {hug.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <p className="text-white text-lg leading-relaxed">
                    {hug.content}
                  </p>
                </div>

                {/* Engagement Bar */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                  <div className="flex items-center gap-6">
                    {/* Like Button */}
                    <button 
                      onClick={() => handleLike(hug.id)}
                      className={`flex items-center gap-2 transition-colors duration-200 group ${
                        likedHugs.has(hug.id) 
                          ? 'text-[#EF476F]' 
                          : 'text-gray-400 hover:text-[#EF476F]'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                        likedHugs.has(hug.id) 
                          ? 'bg-[#EF476F]/20' 
                          : 'group-hover:bg-[#EF476F]/10'
                      }`}>
                        <span className="text-lg">💝</span>
                      </div>
                      <span className="text-sm font-medium">Like</span>
                    </button>

                    {/* Share Button */}
                    <button 
                      onClick={() => handleShare(hug)}
                      className={`flex items-center gap-2 transition-colors duration-200 group ${
                        sharedHugs.has(hug.id) 
                          ? 'text-[#EF476F]' 
                          : 'text-gray-400 hover:text-[#EF476F]'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                        sharedHugs.has(hug.id) 
                          ? 'bg-[#EF476F]/20' 
                          : 'group-hover:bg-[#EF476F]/10'
                      }`}>
                        <span className="text-lg">📤</span>
                      </div>
                      <span className="text-sm font-medium">Share</span>
                    </button>

                    {/* Send H.U.G. Button */}
                    <button 
                      onClick={() => handleSendHug(hug)}
                      className="flex items-center gap-2 text-gray-400 hover:text-[#EF476F] transition-colors duration-200 group"
                    >
                      <div className="w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-[#EF476F]/10 transition-colors duration-200">
                        <span className="text-lg">🔄</span>
                      </div>
                      <span className="text-sm font-medium">Send H.U.G.</span>
                    </button>
                  </div>

                  {/* More Options */}
                  <button className="text-gray-400 hover:text-white transition-colors duration-200">
                    <span className="text-lg">⋯</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
