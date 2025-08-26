import { motion } from 'framer-motion';
import Link from 'next/link';

export function StickyNavbar() {
  return (
    <motion.nav
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <div className="w-8 h-8 bg-[#023047] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">OH</span>
              </div>
              <span className="text-xl font-bold text-[#023047]">ONLYHOCKEY</span>
            </motion.div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/greetings" className="text-[#023047] hover:text-[#023047]/80 transition-colors duration-200">
              Greetings
            </Link>
            <Link href="/heart" className="text-[#023047] hover:text-[#023047]/80 transition-colors duration-200">
              Heart
            </Link>
            <Link href="/challenge" className="text-[#023047] hover:text-[#023047]/80 transition-colors duration-200">
              Challenge
            </Link>
            <Link href="/motivate" className="text-[#023047] hover:text-[#023047]/80 transition-colors duration-200">
              Motivate
            </Link>
            <Link href="/experts" className="text-[#023047] hover:text-[#023047]/80 transition-colors duration-200">
              Experts
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-[#023047] hover:text-[#023047]/80 transition-colors duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
