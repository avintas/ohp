'use client';

import { motion } from 'framer-motion';
import { StickyNavbar } from '../../components/StickyNavbar';
import { Footer } from '../../components/Footer';
import { PowerBrain } from '../../components/PowerBrain';

export default function PowerBrainPage() {
  return (
    <div className="min-h-screen bg-[#0f0f23]">
      {/* Sticky Navbar */}
      <StickyNavbar />

      {/* Main Content */}
      <main className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6">
              🧠 Power Brain
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Your hockey IQ training ground. Test your knowledge, challenge friends, and discover amazing hockey facts you never knew. From basic rules to legendary trivia - power up your hockey brain!
            </p>
            
            {/* Custom Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-xs mx-auto mb-8"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#4361ee]/20">
                <img 
                  src="/gims/gim-00009.webp" 
                  alt="Hockey Power Brain" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>

          {/* Power Brain Component */}
          <PowerBrain />
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
