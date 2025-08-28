'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface InfoCardProps {
  title?: string;
  subtitle?: string;
  content?: string;
  image?: string;
  background?: 'white' | 'gradient' | 'blue' | 'transparent';
  padding?: 'compact' | 'normal' | 'spacious';
  textAlign?: 'left' | 'center' | 'right';
}

export function InfoCard({ 
  title = "Additional Information",
  subtitle,
  content = "This is a flexible card component that can display various types of content.",
  image,
  background = "white",
  padding = "normal",
  textAlign = "center"
}: InfoCardProps) {

  // Background configurations
  const backgroundMap = {
    white: "bg-white",
    gradient: "bg-gradient-to-br from-blue-50 to-cyan-50",
    blue: "bg-blue-100",
    transparent: "bg-transparent"
  };

  // Padding configurations
  const paddingMap = {
    compact: "p-4",
    normal: "p-8",
    spacious: "p-12"
  };

  // Text alignment
  const alignmentMap = {
    left: "text-left",
    center: "text-center", 
    right: "text-right"
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`
        w-full max-w-5xl mx-auto rounded-2xl shadow-lg border border-gray-100
        ${backgroundMap[background]} ${paddingMap[padding]}
      `}
    >
      <div className={`${alignmentMap[textAlign]}`}>
        
        {/* Title Section */}
        {title && (
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#023047] mb-4"
          >
            {title}
          </motion.h2>
        )}

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-gray-600 mb-6"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Image Section - Optimized for full-height avatars */}
        {image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="relative w-48 h-64 mx-auto mb-6 rounded-xl overflow-hidden"
          >
            <Image
              src={image}
              alt={title || "Info card image"}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 200px, 250px"
            />
          </motion.div>
        )}

        {/* Content Section */}
        {content && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-700 leading-relaxed"
          >
            <p className="text-base sm:text-lg">
              {content}
            </p>
          </motion.div>
        )}

      </div>
    </motion.div>
  );
}
