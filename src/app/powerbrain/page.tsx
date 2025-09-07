'use client';

import { motion } from 'framer-motion';
import { Footer } from '../../components/Footer';
import { PowerBrain } from '../../components/PowerBrain';
import { useEffect } from 'react';

export default function PowerBrainPage() {
  // Prevent caching for this page
  useEffect(() => {
    // Safely update meta tags only on client
    const updateMetaTags = async () => {
      const { safeUpdateMeta } = await import('../../utils/shareUtils');
      
      const metaTags = [
        { name: 'Cache-Control', content: 'no-cache, no-store, must-revalidate' },
        { name: 'Pragma', content: 'no-cache' },
        { name: 'Expires', content: '0' }
      ];
      
      metaTags.forEach(tag => {
        safeUpdateMeta(tag.name, tag.content);
      });
    };

    updateMetaTags();
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0f23]">

      {/* Main Content */}
      <main className="py-20 px-4">
        <motion.div
          key="powerbrain-main"
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
