'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export function StickyNavbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when at top (first 100px) or when scrolling up
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-lg rounded-full shadow-lg border border-gray-200/50 transition-all duration-300 ease-in-out ${
        isVisible 
          ? 'top-4 opacity-100 translate-y-0' 
          : '-top-16 opacity-0 -translate-y-4'
      }`}
    >
      <div className="px-6 py-3">
        {/* Centered Logo/Brand */}
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform duration-200">
            <div className="w-6 h-6 bg-[#023047] rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <span className="text-lg font-bold text-[#023047]">ONLYHOCKEY</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}
