import { motion } from 'framer-motion';

export function StickyNavbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">OH</span>
            </div>
            <span className="text-xl font-bold text-gray-900">ONLYHOCKEY</span>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#heart" className="text-gray-700 hover:text-red-500 transition-colors duration-200">
              Heart
            </a>
            <a href="#challenge" className="text-gray-700 hover:text-red-500 transition-colors duration-200">
              Challenge
            </a>
            <a href="#share" className="text-gray-700 hover:text-red-500 transition-colors duration-200">
              Share
            </a>
            <a href="#motivate" className="text-gray-700 hover:text-red-500 transition-colors duration-200">
              Motivate
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-red-500 transition-colors duration-200">
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
