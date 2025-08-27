import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FunButton } from './FunButton';
import { useRouter } from 'next/navigation';

interface DisplayCardProps {
  id: string;
  title: string;
  subtitle?: string;
  description: string | string[];
  image: string;
  buttonText: string;
  delay: number;
  isFirst?: boolean;
}

export function DisplayCard({ id, title, subtitle, description, image, buttonText, delay, isFirst }: DisplayCardProps) {
  const [isFront, setIsFront] = useState(false);
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/content');
  };

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
                 className={`w-full md:w-80 lg:w-96 rounded-xl p-4 sm:p-5 lg:p-6 shadow-sm border border-gray-200 overflow-hidden relative h-[60vh] flex flex-col cursor-pointer transition-all duration-300 ${
          isFront ? 'z-50' : 'z-10'
        }`}
        style={{
          backgroundColor: id === 'greetings' ? '#8ecae6' :
                         id === 'heart' ? '#219EBC' :
                         id === 'challenge' ? '#FB8500' :
                         id === 'motivate' ? '#FFB703' :
                         id === 'experts' ? '#ffffff' : 'transparent',
          transform: isFront ? 'scale(1.05)' : 'scale(1)',
          zIndex: isFront ? 50 : 10
        }}
        onClick={handleCardClick}
        whileHover={{ scale: isFront ? 1.05 : 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0 }}
          className="text-center mb-3"
        >
          <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-[#023047] tracking-tight mb-2">
            {title}
          </h2>
          {subtitle && (
                         <p className="text-xs sm:text-sm lg:text-base text-[#023047] leading-relaxed max-w-full mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0, duration: 0.5 }}
          className="relative w-full mb-4 overflow-hidden rounded-xl flex-shrink-0"
        >
          <div className="aspect-square w-full relative">
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
          
          {/* Dynamic message counter for Heart Card */}
          {id === 'heart' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="text-center mt-3"
            >
              <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-2 inline-block">
                <p className="text-xs text-red-700 font-medium mb-1">
                  Messages Shared Today
                </p>
                <p className="text-lg font-bold text-red-600">
                  2,847
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Description Section */}
        {description && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="mb-4 flex-grow"
          >
            <div className="max-w-full mx-auto">
              {Array.isArray(description) ? (
                <ul className="space-y-2">
                  {description.map((line, index) => (
                    <li key={index} className="text-[#023047] text-xs sm:text-sm leading-relaxed text-left flex items-start">
                      <span className="text-blue-600 mr-2 mt-1 text-xs">•</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-[#023047] text-xs sm:text-sm leading-relaxed text-center">
                  {description}
                </p>
              )}
            </div>
          </motion.div>
        )}

        {/* Button Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0 }}
          className="text-center mt-auto"
        >
          <FunButton onClick={handleButtonClick}>
            {buttonText}
          </FunButton>
        </motion.div>
      </motion.div>
    </>
  );
}
