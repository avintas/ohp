"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface PlaylistItem {
  title: string
  duration: number
  content: string
}

interface Channel {
  name: string
  image: string
  playlist: PlaylistItem[]
}

const channels: Record<string, Channel> = {
  share: {
    name: "Send a 'H.U.G.'",
    image: "💘",
    playlist: [
      {
        title: "Soviet Hockey Training Secrets",
        duration: 50,
        content:
          "A fascinating deep dive into the secretive training regimes that made Soviet hockey teams unstoppable.",
      },
      {
        title: "Goaltending Through the Ages",
        duration: 55,
        content: "From stand-up netminders to butterfly specialists, a history of the toughest position in hockey.",
      },
    ],
  },
  brain: {
    name: "Power Brain",
    image: "🧠",
    playlist: [
      {
        title: "The Science of the Slapshot",
        duration: 45,
        content: "A physics-based breakdown of what makes the slapshot the most powerful shot in hockey.",
      },
      {
        title: "NHL Rulebook Quizzes",
        duration: 60,
        content: "Test your knowledge of the official NHL rulebook with this rapid-fire quiz.",
      },
    ],
  },
  motivate: {
    name: "Power Up",
    image: "💪",
    playlist: [
      {
        title: "The Great One's Unbreakable Records",
        duration: 45,
        content:
          "Wayne Gretzky holds 61 NHL records, including most career goals (894), assists (1,963), and points (2,857). His dominance was so complete that he'd still hold the points record with goals alone!",
      },
      {
        title: "The Power of the Comeback",
        duration: 50,
        content: "Stories of legendary teams and players who defied the odds and came back from the brink of defeat.",
      },
    ],
  },
  story: {
    name: "Stories",
    image: "📄",
    playlist: [
      {
        title: "The Great One's Unbreakable Records",
        duration: 45,
        content:
          "Wayne Gretzky holds 61 NHL records, including most career goals (894), assists (1,963), and points (2,857). His dominance was so complete that he'd still hold the points record with goals alone!",
      },
      {
        title: "Hockey Hall of Fame Stories",
        duration: 50,
        content: "A look back at the legendary careers and lives of hockey's greatest icons.",
      },
    ],
  },
}

export default function CastMachine() {
  const [currentChannel, setCurrentChannel] = useState("story")
  const [currentItemIndex, setCurrentItemIndex] = useState(-1)
  const [isPlaying, setIsPlaying] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [totalProgressTime, setTotalProgressTime] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
  }

  const playChannel = (key: string) => {
    setCurrentChannel(key)
    playItem(0, key)
  }

  const playItem = (index: number, channelKey?: string) => {
    const channel = channelKey || currentChannel
    if (index < 0 || index >= channels[channel].playlist.length) return

    if (intervalRef.current) clearInterval(intervalRef.current)

    setCurrentItemIndex(index)
    setElapsedTime(0)
    setIsPlaying(true)

    const item = channels[channel].playlist[index]
    setTotalProgressTime(item.duration * 1000)

    intervalRef.current = setInterval(() => {
      setElapsedTime((prev) => {
        const newTime = prev + 100
        if (newTime >= item.duration * 1000) {
          clearInterval(intervalRef.current!)
          next()
          return 0
        }
        return newTime
      })
    }, 100)
  }

  const togglePlayPause = () => {
    if (currentItemIndex === -1) {
      playItem(0)
    } else if (isPlaying) {
      pause()
    } else {
      play()
    }
  }

  const play = () => {
    if (isPlaying || currentItemIndex === -1) return
    setIsPlaying(true)
    const item = channels[currentChannel].playlist[currentItemIndex]
    intervalRef.current = setInterval(() => {
      setElapsedTime((prev) => {
        const newTime = prev + 100
        if (newTime >= item.duration * 1000) {
          clearInterval(intervalRef.current!)
          next()
          return 0
        }
        return newTime
      })
    }, 100)
  }

  const pause = () => {
    if (!isPlaying) return
    setIsPlaying(false)
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  const next = () => {
    pause()
    const nextIndex = (currentItemIndex + 1) % channels[currentChannel].playlist.length
    playItem(nextIndex)
  }

  const prev = () => {
    pause()
    const prevIndex =
      (currentItemIndex - 1 + channels[currentChannel].playlist.length) % channels[currentChannel].playlist.length
    playItem(prevIndex)
  }

  const seek = (event: React.MouseEvent<HTMLDivElement>) => {
    if (currentItemIndex === -1) return
    const rect = event.currentTarget.getBoundingClientRect()
    const clickX = event.clientX - rect.left
    const seekPercentage = clickX / rect.width

    const newTime = totalProgressTime * seekPercentage
    setElapsedTime(newTime)
  }

  const currentItem = currentItemIndex >= 0 ? channels[currentChannel].playlist[currentItemIndex] : null
  const progress = totalProgressTime > 0 ? (elapsedTime / totalProgressTime) * 100 : 0

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-slate-800 text-white rounded-2xl shadow-2xl p-6 w-full max-w-md mx-auto flex flex-col space-y-4 border border-slate-700">
        <header className="text-center py-3">
          <h1 className="text-lg font-bold text-white">Only Hockey Cast Machine</h1>
          <p className="text-sm text-slate-400 mt-1">Now on STORY • CH4</p>
        </header>

        <div className="text-center py-2 border-b border-slate-700">
          <div className="flex items-center justify-center space-x-2 mb-1">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-red-400">ON AIR</span>
            <span className="text-sm text-slate-300">with "The Storyteller"</span>
          </div>
          <p className="text-xs text-slate-400">Story Channel Host • STORY</p>
        </div>

        <main className="flex flex-col space-y-4">
          <div className="flex items-center space-x-3 bg-slate-700/50 rounded-lg p-3">
            <Image
              src="/host-profile.png"
              alt="The Storyteller"
              width={48}
              height={48}
              className="rounded-full border-2 border-slate-500 object-cover"
            />
            <div>
              <h3 className="text-sm font-semibold text-white">The Storyteller</h3>
              <p className="text-xs text-slate-400">Story Channel Host</p>
            </div>
          </div>

          <div className="bg-slate-700/30 rounded-lg p-4">
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

          <div className="flex justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-1">
              <span className="text-purple-400">👥</span>
              <span className="text-slate-300">47 reading</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-red-400">❤️</span>
              <span className="text-slate-300">23 hugs sent</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="bg-slate-700/50 rounded-lg p-3">
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
        </main>

        <div className="flex justify-center items-center space-x-4 py-3">
          <button onClick={next} className="p-2 text-slate-400 hover:text-white transition-colors">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
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
          <button onClick={prev} className="p-2 text-slate-400 hover:text-white transition-colors">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M15.445 4.832A1 1 0 0117 5v8a1 1 0 01-1.555.832L10 11.798V14a1 1 0 01-1.555.832l-6-4a1 1 0 010-1.664l6-4A1 1 0 0110 6v2.798l5.445-3.63z" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center">
          <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors flex items-center space-x-2">
            <span>📤</span>
            <span>SHARE IT</span>
          </button>
        </div>

        <section className="bg-slate-700/30 rounded-lg p-4">
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
                  {typeof channel.image === "string" && channel.image.startsWith("/") ? (
                    <Image
                      src={channel.image || "/placeholder.svg"}
                      alt={channel.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                  ) : (
                    <span>{channel.image}</span>
                  )}
                </div>
                <span className="text-xs font-semibold text-center leading-tight text-white">{channel.name}</span>
                <span className="text-xs text-slate-400">CH{Object.keys(channels).indexOf(key) + 1}</span>
              </button>
            ))}
          </div>
        </section>

        {/* UP NEXT section */}
        <section className="bg-slate-700/30 rounded-lg p-4">
          <h2 className="text-xs font-semibold uppercase text-slate-400 mb-3 tracking-wide">UP NEXT:</h2>
          <div className="space-y-2">
            {channels[currentChannel].playlist.slice(0, 3).map((item, index) => (
              <div
                key={index}
                onClick={() => playItem(index)}
                className={`flex justify-between items-center py-2 px-2 cursor-pointer rounded transition-colors ${
                  index === currentItemIndex ? "text-blue-400 bg-slate-600/50" : "text-slate-400 hover:text-slate-300"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-xs">{index + 1}.</span>
                  <span className="text-xs truncate">{item.title}</span>
                </div>
                <span className="text-xs">{formatTime(item.duration)}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
