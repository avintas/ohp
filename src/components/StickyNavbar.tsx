'use client';

import Link from 'next/link';

function NavbarContent() {
  return (
    <nav className="w-full bg-[#0a0e1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left - OH Puck Logo */}
          <Link href="/">
            <div className="flex items-center cursor-pointer hover:scale-105 transition-transform duration-200">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4cc9f0] to-[#219EBC] rounded-full flex items-center justify-center border-2 border-white/20 shadow-lg">
                <span className="text-lg font-bold text-[#0a0e1a]">OH</span>
              </div>
            </div>
          </Link>

          {/* Right - Navigation Menu */}
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                href="/powerbrain" 
                className="text-white hover:text-[#4cc9f0] font-medium transition-colors duration-200"
              >
                Hockey Trivia
              </Link>
              <Link 
                href="/motivate" 
                className="text-white hover:text-[#4cc9f0] font-medium transition-colors duration-200"
              >
                Uplift
              </Link>
              <Link 
                href="/experts" 
                className="text-white hover:text-[#4cc9f0] font-medium transition-colors duration-200"
              >
                Cast
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-white hover:text-[#4cc9f0] transition-colors duration-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function StickyNavbar() {
  return <NavbarContent />;
}
