'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface PlaylistItem {
  title: string;
  duration: number;
  content: string;
}

interface Channel {
  name: string;
  shortName: string;
  image: string;
  host: {
    name: string;
    title: string;
    avatar: string;
  };
  playlist: PlaylistItem[];
}

interface CastMachineProps {
  content: Array<{
    id: string;
    title: string;
    content: string;
    duration: number;
    category: 'hugs' | 'quiz' | 'pump' | 'stories';
  }>;
}

export function CastMachine({ content }: CastMachineProps) {
  const [currentChannel, setCurrentChannel] = useState('stories');
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [totalProgressTime, setTotalProgressTime] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Channel configurations
  const channels: Record<string, Channel> = {
    hugs: {
      name: "Send a 'H.U.G.'",
      shortName: "Send a H.U.G.",
      image: "💘",
      host: {
        name: "The Heart",
        title: "Share Channel Host",
        avatar: "/pims/a-healer.webp"
      },
      playlist: content.filter(item => item.category === 'hugs').map(item => ({
        title: item.title,
        duration: item.duration,
        content: item.content
      }))
    },
    quiz: {
      name: "Power Brain",
      shortName: "Power Brain",
      image: "🧠",
      host: {
        name: "The Professor",
        title: "Hockey Brain Channel Host",
        avatar: "/pims/a-numbers.webp"
      },
      playlist: content.filter(item => item.category === 'quiz').map(item => ({
        title: item.title,
        duration: item.duration,
        content: item.content
      }))
    },
    pump: {
      name: "Power Up",
      shortName: "Power Up",
      image: "💪",
      host: {
        name: "The Coach",
        title: "Motivate Channel Host",
        avatar: "/pims/a-ironmike.webp"
      },
      playlist: content.filter(item => item.category === 'pump').map(item => ({
        title: item.title,
        duration: item.duration,
        content: item.content
      }))
    },
    stories: {
      name: "Stories",
      shortName: "Stories",
      image: "📄",
      host: {
        name: "The Storyteller",
        title: "Story Channel Host",
        avatar: "/pims/a-strategist.webp"
      },
      playlist: content.filter(item => item.category === 'stories').map(item => ({
        title: item.title,
        duration: item.duration,
        content: item.content
      }))
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const playChannel = (key: string) => {
    setCurrentChannel(key);
    playItem(0, key);
  };

  const playItem = (index: number, channelKey?: string) => {
    const channel = channelKey || currentChannel;
    if (index < 0 || index >= channels[channel].playlist.length) return;

    if (intervalRef.current) clearInterval(intervalRef.current);

    setCurrentItemIndex(index);
    setElapsedTime(0);
    setIsPlaying(true);

    const item = channels[channel].playlist[index];
    setTotalProgressTime(item.duration * 1000);

    intervalRef.current = setInterval(() => {
      setElapsedTime((prev) => {
        const newTime = prev + 100;
        if (newTime >= item.duration * 1000) {
          clearInterval(intervalRef.current!);
          next();
          return 0;
        }
        return newTime;
      });
    }, 100);
  };

  const togglePlayPause = () => {
    if (currentItemIndex === -1 || !channels[currentChannel].playlist.length) {
      playItem(0);
    } else if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const play = () => {
    if (isPlaying || currentItemIndex === -1) return;
    setIsPlaying(true);
    const item = channels[currentChannel].playlist[currentItemIndex];
    if (!item) return;
    
    intervalRef.current = setInterval(() => {
      setElapsedTime((prev) => {
        const newTime = prev + 100;
        if (newTime >= item.duration * 1000) {
          clearInterval(intervalRef.current!);
          next();
          return 0;
        }
        return newTime;
      });
    }, 100);
  };

  const pause = () => {
    if (!isPlaying) return;
    setIsPlaying(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const next = () => {
    pause();
    const nextIndex = (currentItemIndex + 1) % channels[currentChannel].playlist.length;
    playItem(nextIndex);
  };

  const prev = () => {
    pause();
    const prevIndex =
      (currentItemIndex - 1 + channels[currentChannel].playlist.length) % channels[currentChannel].playlist.length;
    playItem(prevIndex);
  };

  const seek = (event: React.MouseEvent<HTMLDivElement>) => {
    if (currentItemIndex === -1 || !channels[currentChannel].playlist[currentItemIndex]) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const seekPercentage = clickX / rect.width;

    const newTime = totalProgressTime * seekPercentage;
    setElapsedTime(newTime);
  };

  const currentItem = currentItemIndex >= 0 && channels[currentChannel].playlist[currentItemIndex] 
    ? channels[currentChannel].playlist[currentItemIndex] 
    : null;
  const progress = totalProgressTime > 0 ? (elapsedTime / totalProgressTime) * 100 : 0;

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-slate-800 text-white rounded-2xl shadow-2xl p-6 border border-slate-700">
        {/* Header */}
        <header className="text-center py-3">
          <h1 className="text-lg font-bold text-white">Only Hockey Cast Machine</h1>
          <p className="text-sm text-slate-400 mt-1">Now on {channels[currentChannel].name.toUpperCase()} • CH{Object.keys(channels).indexOf(currentChannel) + 1}</p>
        </header>

        {/* Live Indicator */}
        <div className="text-center py-2 border-b border-slate-700">
          <div className="flex items-center justify-center space-x-2 mb-1">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-red-400">ON AIR</span>
            <span className="text-sm text-slate-300">with "{channels[currentChannel].host.name}"</span>
          </div>
          <p className="text-xs text-slate-400">{channels[currentChannel].host.title} • {channels[currentChannel].name.toUpperCase()}</p>
        </div>

        {/* Host Profile */}
        <div className="flex items-center space-x-3 bg-slate-700/50 rounded-lg p-3 my-4">
          <Image
            src={channels[currentChannel].host.avatar}
            alt={channels[currentChannel].host.name}
            width={48}
            height={48}
            className="rounded-full border-2 border-slate-500 object-cover"
          />
          <div>
            <h3 className="text-sm font-semibold text-white">{channels[currentChannel].host.name}</h3>
            <p className="text-xs text-slate-400">{channels[currentChannel].host.title}</p>
          </div>
        </div>

        {/* Content Display */}
        <div className="bg-slate-700/30 rounded-lg p-4 mb-4">
          <h2 className="text-base font-bold text-white mb-2">
            {currentItem?.title || "The Great One's Unbreakable Records"}
          </h2>
          <div className="text-sm text-slate-300 leading-relaxed">
            <p>
              {currentItem?.content ||
                "Wayne Gretzky holds 61 NHL records, including most career goals (894), assists (1,963), and points (2,857). His dominance was so complete that he'd still hold the points record with goals alone!"}
            </p>
          </div>
        </div>

        {/* Live Stats */}
        <div className="flex justify-center space-x-6 text-sm mb-4">
          <div className="flex items-center space-x-1">
            <span className="text-purple-400">👥</span>
            <span className="text-slate-300">47 reading</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-red-400">❤️</span>
            <span className="text-slate-300">23 hugs sent</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-slate-700/50 rounded-lg p-3 mb-4">
          <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
            <span>{formatTime(elapsedTime / 1000)}</span>
            <span>{currentItem ? formatTime(currentItem.duration) : "0:45"}</span>
          </div>
          <div className="w-full h-1 bg-slate-600 rounded-full cursor-pointer" onClick={seek}>
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center space-x-4 py-3 mb-4">
          <button onClick={prev} className="p-2 text-slate-400 hover:text-white transition-colors">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M15.445 4.832A1 1 0 0117 5v8a1 1 0 01-1.555.832L10 11.798V14a1 1 0 01-1.555.832l-6-4a1 1 0 010-1.664l6-4A1 1 0 0110 6v2.798l5.445-3.63z" />
            </svg>
          </button>
          <button
            onClick={togglePlayPause}
            className="p-3 text-white rounded-full bg-blue-500 hover:bg-blue-600 transition-colors"
          >
            {isPlaying ? (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 01-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
          <button onClick={next} className="p-2 text-slate-400 hover:text-white transition-colors">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
            </svg>
          </button>
        </div>

        {/* Share Button */}
        <div className="flex justify-center mb-4">
          <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors flex items-center space-x-2">
            <span>📤</span>
            <span>SHARE IT</span>
          </button>
        </div>

        {/* Channel Selector */}
        <section className="bg-slate-700/30 rounded-lg p-4 mb-4">
          <div className="text-center mb-3">
            <h2 className="text-sm font-semibold uppercase text-slate-300 tracking-wide">SELECT CHANNEL:</h2>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {Object.entries(channels).map(([key, channel]) => (
              <button
                key={key}
                onClick={() => playChannel(key)}
                className={`flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-200 ${
                  key === currentChannel
                    ? "bg-blue-600 border-2 border-blue-400"
                    : "bg-slate-600 hover:bg-slate-500 border-2 border-transparent"
                }`}
              >
                <div className="text-2xl mb-1">
                  <span>{channel.image}</span>
                </div>
                <span className="text-xs font-semibold text-center leading-tight text-white">{channel.shortName}</span>
                <span className="text-xs text-slate-400">CH{Object.keys(channels).indexOf(key) + 1}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Up Next */}
        <section className="bg-slate-700/30 rounded-lg p-4">
          <h2 className="text-xs font-semibold uppercase text-slate-400 mb-3 tracking-wide">UP NEXT:</h2>
          <div className="space-y-2">
            {channels[currentChannel].playlist.slice(currentItemIndex + 1, currentItemIndex + 3).map((item, index) => (
              <div
                key={index}
                onClick={() => playItem(currentItemIndex + index + 1)}
                className="flex justify-between items-center py-2 px-2 cursor-pointer rounded transition-colors text-slate-400 hover:text-slate-300"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-xs">{index + 1}.</span>
                  <span className="text-xs truncate">{item.title}</span>
                </div>
                <span className="text-xs">{formatTime(item.duration)}</span>
              </div>
            ))}
            {channels[currentChannel].playlist.length <= currentItemIndex + 1 && (
              <div className="text-xs text-slate-500 italic">End of playlist</div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
