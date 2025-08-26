'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MotivatePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#023047] text-white py-4 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold hover:text-white/80 transition-colors">
            ONLYHOCKEY
          </Link>
          <Link href="/" className="text-white hover:text-white/80 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-black tracking-tight mb-8">
            Inspiration System
          </h1>
        </motion.div>
      </main>
    </div>
  );
}
