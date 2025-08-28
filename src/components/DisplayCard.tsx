import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

import { useRouter } from 'next/navigation';

interface DisplayCardProps {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  delay: number;
  isFirst?: boolean;
}

export function DisplayCard({ id, title, subtitle, image, delay, isFirst }: DisplayCardProps) {
  const [isFront, setIsFront] = useState(false);
  const router = useRouter();



  const handleImageClick = () => {
    router.push('/content');
  };

  const handleCardClick = () => {
    setIsFront(!isFront);
  };

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsFront(false);
    }
  };

  return (
    <>
      {/* Backdrop overlay when card is in front */}
      {isFront && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={handleOutsideClick}
        />
      )}
      
            <motion.div 
        className={`
          w-[320px] h-[400px]
          min-w-[320px] max-w-[320px]
          min-h-[400px] max-h-[400px]
          flex-shrink-0 flex-grow-0
          rounded-xl p-6 
          shadow-sm border border-gray-200 
          overflow-hidden relative 
          flex flex-col cursor-pointer 
          transition-all duration-300 
          box-border
          ${isFront ? 'z-50' : 'z-10'}
        `}
        style={{
          backgroundColor: id === 'greetings' ? '#8ecae6' :
                         id === 'heart' ? '#219EBC' :
                         id === 'challenge' ? '#FB8500' :
                         id === 'motivate' ? '#FFB703' :
                         id === 'experts' ? '#ffffff' : 'transparent',
          transform: isFront ? 'scale(1.05)' : 'scale(1)',
          zIndex: isFront ? 50 : 10,
          boxSizing: 'border-box'
        }}
        onClick={handleCardClick}
        whileHover={{ scale: isFront ? 1.05 : 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
                {/* Title Section - Fixed proportions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0 }}
          className="text-center mb-3 flex-shrink-0"
        >
          <h2 className="text-lg lg:text-xl font-extrabold text-[#023047] tracking-tight mb-1 leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs lg:text-sm text-[#023047] leading-relaxed max-w-full mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Image Section - Optimized for fixed dimensions */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0, duration: 0.5 }}
          className="relative w-full mb-3 overflow-hidden rounded-xl flex-shrink-0"
        >
          <div className="h-[260px] w-full relative">
            {id === 'greetings' ? (
              <motion.div 
                onClick={handleImageClick}
                className="cursor-pointer relative w-full h-full"
                animate={{ 
                  y: [0, -8, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                  priority={isFirst}
                  quality={85}
                />
              </motion.div>
            ) : (
              <motion.div 
                onClick={handleImageClick}
                className="cursor-pointer relative w-full h-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                  priority={isFirst}
                  quality={85}
                />
              </motion.div>
            )}
            
          </div>
          

        </motion.div>




      </motion.div>
    </>
  );
}
