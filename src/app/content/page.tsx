'use client';

import { StickyNavbar } from '@/components/StickyNavbar';
import { BulletinBoard } from '@/components/BulletinBoard';
import { useState } from 'react';

export default function ContentPage() {
  // Bulletin Board Cards Data
  const bulletinCards = [
    {
      id: 'daily-factoid',
      type: 'text' as const,
      title: "Today's Featured Factoid",
      content: "Wayne Gretzky holds 61 NHL records - more than any other player in history!",
      expert: {
        name: "The Historian",
        avatar: "/pims/a-strategist.webp",
        title: "Hockey History Expert"
      },
      category: "Legends",
      shareCount: 47
    },
    {
      id: 'expert-spotlight',
      type: 'text' as const,
      title: "Expert Spotlight",
      content: "Meet Travel Director - your guide to the best hockey arenas and road trips worldwide!",
      expert: {
        name: "Travel Director",
        avatar: "/pims/a-architect.webp", 
        title: "Hockey Travel Expert"
      },
      category: "Experts"
    },
    {
      id: 'community-milestone',
      type: 'text' as const,
      title: "Community Milestone",
      content: "Amazing! Our hockey family has shared over 1,000 factoids this month. Keep the hockey love flowing!",
      category: "Community",
      shareCount: 23
    },
    {
      id: 'feature-highlight',
      type: 'text' as const,
      title: "Feature Highlight",
      content: "New Hockey Brain Challenges are here! Test your knowledge against our toughest quizzes yet.",
      expert: {
        name: "Numbers Guy",
        avatar: "/pims/a-numbers.webp",
        title: "Statistics Expert"
      },
      category: "Features"
    },
    {
      id: 'special-content',
      type: 'text' as const,
      title: "Special Content",
      content: "Winter Classic approaching! Share your predictions and favorite outdoor game memories.",
      category: "Events",
      shareCount: 156
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
              <span className="bg-gradient-to-r from-[#219EBC] to-[#FB8500] bg-clip-text text-transparent">
                OnlyHockey Shareables
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#023047]/70 mb-8">
              Your daily dose of hockey awesome • {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </section>

        {/* Bulletin Board */}
        <BulletinBoard cards={bulletinCards} />

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
