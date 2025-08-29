'use client';

import { useState, useEffect } from 'react';

interface RadioContent {
  id: string;
  title: string;
  content: string;
  duration: number; // in seconds
  category: 'hugs' | 'quiz' | 'pump' | 'stories';
}

interface AvatarHost {
  name: string;
  title: string;
  personality: string;
  avatar: string;
  catchphrase: string;
  voiceStyle: string;
}

interface HockeyRadioProps {
  content: RadioContent[];
}

export function HockeyRadio({ content }: HockeyRadioProps) {
  const [currentStation, setCurrentStation] = useState<'hugs' | 'quiz' | 'pump' | 'stories'>('stories');
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [listeners, setListeners] = useState(47);
  const [hugsCount, setHugsCount] = useState(23);

  // Filter content by current station
  const stationContent = content.filter(item => item.category === currentStation);
  const currentContent = stationContent[currentContentIndex] || stationContent[0];

  // Avatar Host configurations - Radio personalities within the station
  const avatarHosts: Record<string, AvatarHost> = {
    hugs: {
      name: 'The Heart',
      title: 'Share/Send Channel Host',
      personality: 'warm, encouraging, community-focused',
      avatar: '/pims/a-healer.webp',
      catchphrase: 'Hey hockey family! Time to spread some love...',
      voiceStyle: 'warm and encouraging'
    },
    quiz: {
      name: 'The Professor',
      title: 'Hockey Brain Channel Host',
      personality: 'analytical, challenging, knowledgeable',
      avatar: '/pims/a-numbers.webp',
      catchphrase: 'Alright brain trust, ready for some hockey knowledge?',
      voiceStyle: 'intellectual and precise'
    },
    pump: {
      name: 'The Coach',
      title: 'Motivate Channel Host',
      personality: 'high-energy, inspirational, tough-love',
      avatar: '/pims/a-ironmike.webp',
      catchphrase: 'Listen up champions! Time to get motivated...',
      voiceStyle: 'intense and motivational'
    },
    stories: {
      name: 'The Storyteller',
      title: 'Story Channel Host',
      personality: 'narrative-focused, dramatic, engaging',
      avatar: '/pims/a-strategist.webp',
      catchphrase: 'Gather \'round folks, have I got a hockey story for you...',
      voiceStyle: 'classic broadcaster style'
    }
  };

  // Channel configurations within OnlyHockey Radio Station
  const channels = {
    hugs: { name: 'SHARE/SEND', channelId: 'CH1', color: '#EF476F', emoji: '💝', host: avatarHosts.hugs },
    quiz: { name: 'HOCKEY BRAIN', channelId: 'CH2', color: '#4361ee', emoji: '🧠', host: avatarHosts.quiz },
    pump: { name: 'MOTIVATE', channelId: 'CH3', color: '#FFB703', emoji: '💪', host: avatarHosts.pump },
    stories: { name: 'STORY', channelId: 'CH4', color: '#219EBC', emoji: '📰', host: avatarHosts.stories }
  };

  // Auto-advance content when playing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && currentContent) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= currentContent.duration) {
            handleNext();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentContent]);

  const handleStationChange = (station: 'hugs' | 'quiz' | 'pump' | 'stories') => {
    setCurrentStation(station);
    setCurrentContentIndex(0);
    setCurrentTime(0);
    setIsPlaying(false);
    // Simulate listener count change when switching channels
    setListeners(Math.floor(Math.random() * 50) + 20);
  };

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  
  const handlePrevious = () => {
    if (currentContentIndex > 0) {
      setCurrentContentIndex(prev => prev - 1);
      setCurrentTime(0);
    }
  };

  const handleNext = () => {
    if (currentContentIndex < stationContent.length - 1) {
      setCurrentContentIndex(prev => prev + 1);
      setCurrentTime(0);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercentage = currentContent ? (currentTime / currentContent.duration) * 100 : 0;

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Radio Console */}
      <div className="bg-gradient-to-b from-[#1a1a2e] to-[#16213e] rounded-2xl p-6 shadow-2xl border border-gray-700">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="text-2xl">📻</div>
            <div>
              <h2 className="text-xl font-bold text-white">OnlyHockey Radio Station</h2>
              <div className="text-xs text-gray-400">
                Now on {channels[currentStation].name} • {channels[currentStation].channelId}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-white">
              <span className="text-sm">🔊</span>
              <div className="w-20 h-1 bg-gray-600 rounded">
                <div className="w-3/4 h-full bg-[#4cc9f0] rounded"></div>
              </div>
            </div>
            <button className="flex items-center gap-2 px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm transition-colors">
              📞 CALL IN
            </button>
          </div>
        </div>

        {/* Live Indicator & Current Host */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className={`w-3 h-3 rounded-full ${isPlaying ? 'bg-red-500 animate-pulse' : 'bg-gray-500'}`}></div>
            <span className="text-red-400 font-bold text-sm">
              {isPlaying ? 'LIVE' : 'ON AIR'}
            </span>
            <span className="text-gray-300 text-sm">with</span>
            <span className="text-white font-bold text-sm">
              "{channels[currentStation].host.name}"
            </span>
          </div>
          <div className="text-xs text-gray-400">
            {channels[currentStation].host.title} • {channels[currentStation].name}
          </div>
        </div>

        {/* Avatar & Content Display */}
        <div className="bg-gray-800/50 rounded-xl p-6 mb-6 min-h-[300px]">
          {currentContent ? (
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Avatar Section */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <img 
                    src={channels[currentStation].host.avatar} 
                    alt={channels[currentStation].host.name}
                    className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 border-white/20 shadow-lg"
                  />
                  {isPlaying && (
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
                <div className="text-center mt-3">
                  <div className="text-white font-bold text-sm">{channels[currentStation].host.name}</div>
                  <div className="text-xs text-gray-400">{channels[currentStation].host.title}</div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 text-center lg:text-left">
                {/* Host Introduction */}
                {!isPlaying && (
                  <div className="mb-4 p-3 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border-l-4 border-blue-400">
                    <div className="text-blue-200 text-sm italic">
                      💬 "{channels[currentStation].host.catchphrase}"
                    </div>
                  </div>
                )}

                <h3 className="text-xl font-bold text-white mb-4">
                  {currentContent.title}
                </h3>
                
                {/* Host Commentary */}
                {isPlaying && (
                  <div className="mb-4 p-3 bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-lg border-l-4 border-green-400">
                    <div className="text-green-200 text-sm">
                      🎙️ <span className="font-semibold">{channels[currentStation].host.name}:</span> "Here's something that'll knock your socks off, hockey fans!"
                    </div>
                  </div>
                )}

                <p className="text-gray-300 leading-relaxed mb-6">
                  {currentContent.content}
                </p>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#4cc9f0] to-[#219EBC] transition-all duration-1000"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(currentContent.duration)}</span>
                  </div>
                </div>

                {/* Live Stats */}
                <div className="flex justify-center lg:justify-start gap-6 text-sm text-gray-400">
                  <span>👥 {listeners} listening</span>
                  <span>💝 {hugsCount} hugs sent</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 flex flex-col items-center justify-center h-full">
              <img 
                src={channels[currentStation].host.avatar} 
                alt={channels[currentStation].host.name}
                className="w-20 h-20 rounded-full border-4 border-gray-600 mb-4 opacity-50"
              />
              <div className="text-4xl mb-4">📻</div>
              <p className="text-lg font-semibold text-white mb-2">{channels[currentStation].host.name} is waiting</p>
              <p className="text-sm">{channels[currentStation].host.catchphrase}</p>
            </div>
          )}
        </div>

        {/* Radio Controls */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <button 
            onClick={handlePrevious}
            disabled={currentContentIndex === 0}
            className="w-12 h-12 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-600 text-white rounded-full flex items-center justify-center transition-colors"
          >
            ⏮️
          </button>
          
          {isPlaying ? (
            <button 
              onClick={handlePause}
              className="w-16 h-16 bg-[#4cc9f0] hover:bg-[#219EBC] text-white rounded-full flex items-center justify-center text-xl transition-colors"
            >
              ⏸️
            </button>
          ) : (
            <button 
              onClick={handlePlay}
              className="w-16 h-16 bg-[#4cc9f0] hover:bg-[#219EBC] text-white rounded-full flex items-center justify-center text-xl transition-colors"
            >
              ▶️
            </button>
          )}
          
          <button 
            onClick={handleNext}
            disabled={currentContentIndex === stationContent.length - 1}
            className="w-12 h-12 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-600 text-white rounded-full flex items-center justify-center transition-colors"
          >
            ⏭️
          </button>
        </div>

        {/* Arcade Action Buttons */}
        {currentContent && (
          <div className="flex justify-center gap-3 mb-6">
            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#EF476F] to-[#FF6B9D] hover:from-[#EF476F]/90 hover:to-[#FF6B9D]/90 text-white rounded-lg transition-all duration-200 hover:scale-105 font-medium">
              🎮 PLAY CHALLENGE
            </button>
            <button 
              onClick={() => setHugsCount(prev => prev + 1)}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FFB703] to-[#FB8500] hover:from-[#FFB703]/90 hover:to-[#FB8500]/90 text-white rounded-lg transition-all duration-200 hover:scale-105 font-medium"
            >
              📤 SHARE IT
            </button>
          </div>
        )}

        {/* Station Tuner */}
        <div className="mb-6">
          <div className="text-center text-white mb-4">
            <span className="text-lg">📻 SELECT CHANNEL:</span>
          </div>
          
          <div className="relative">
            {/* Tuner Line */}
            <div className="h-1 bg-gray-600 rounded-full mb-4 relative">
              <div 
                className="absolute top-0 w-6 h-6 rounded-full border-4 border-white shadow-lg transition-all duration-300"
                style={{ 
                  backgroundColor: channels[currentStation].color,
                  left: `${Object.keys(channels).indexOf(currentStation) * 25 + 10}%`,
                  transform: 'translateX(-50%) translateY(-50%)'
                }}
              ></div>
            </div>

            {/* Channel Buttons */}
            <div className="grid grid-cols-4 gap-2">
              {Object.entries(channels).map(([key, channel]) => (
                <button
                  key={key}
                  onClick={() => handleStationChange(key as any)}
                  className={`p-3 rounded-lg transition-all duration-200 ${
                    currentStation === key
                      ? 'bg-white/20 border-2 scale-105'
                      : 'bg-gray-700/50 border-2 border-transparent hover:bg-gray-600/50'
                  }`}
                  style={{ borderColor: currentStation === key ? channel.color : 'transparent' }}
                >
                  <div className="text-center">
                    <img 
                      src={channel.host.avatar} 
                      alt={channel.host.name}
                      className="w-8 h-8 rounded-full mx-auto mb-1 border border-white/20"
                    />
                    <div className="text-xs text-white font-bold">{channel.name}</div>
                    <div className="text-xs" style={{ color: channel.color }}>{channel.channelId}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Up Next */}
        <div className="bg-gray-800/30 rounded-lg p-4">
          <div className="flex items-center gap-2 text-white mb-3">
            <span className="text-lg">🎵</span>
            <span className="font-bold">UP NEXT:</span>
          </div>
          <div className="space-y-2">
            {stationContent.slice(currentContentIndex + 1, currentContentIndex + 4).map((item, index) => (
              <div key={item.id} className="flex items-center gap-3 text-sm text-gray-400">
                <span className="w-4 text-center">{index + 1}.</span>
                <span className="flex-1">{item.title}</span>
                <span>{formatTime(item.duration)}</span>
              </div>
            ))}
            {stationContent.length <= currentContentIndex + 1 && (
              <div className="text-sm text-gray-500 italic">End of playlist - tune to another station</div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
