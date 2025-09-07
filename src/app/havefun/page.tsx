'use client';

import { motion } from 'framer-motion';
import { Footer } from '../../components/Footer';

export default function HaveFunPage() {
  return (
    <div className="min-h-screen bg-[#0f0f23]">

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-8">
            Have Fun System
          </h1>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
