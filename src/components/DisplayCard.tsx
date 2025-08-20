import { motion } from 'framer-motion';
import Image from 'next/image';
import { InteractiveCard } from './InteractiveCard';
import { FunButton } from './FunButton';

interface DisplayCardProps {
  title: string;
  subtitle?: string;
  description?: string[];
  image: string;
  buttonText?: string;
  bgColor?: string;
  delay?: number;
  isFirst?: boolean;
  id?: string;
}

export function DisplayCard({ 
  title, 
  subtitle, 
  description, 
  image, 
  buttonText = "Join Now",
  bgColor = "bg-neutral-100",
  delay = 0,
  isFirst = false,
  id
}: DisplayCardProps) {
  return (
    <section id={id} className="min-h-screen flex items-center justify-center py-16 px-4">
      <InteractiveCard delay={delay} className="w-full max-w-4xl mx-auto">
        <div className={`${bgColor} rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl overflow-hidden relative`}>
          {/* Title Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.2 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl sm:text-2xl text-black leading-relaxed max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.4, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="relative w-full mb-8 overflow-hidden rounded-2xl"
          >
            <div className="aspect-square sm:aspect-video lg:aspect-[4/3] w-full relative">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                priority={isFirst}
                quality={85}
              />
              {/* Heartbeat animation for Heart Card */}
              {id === 'heart' && (
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-red-500/20 rounded-2xl pointer-events-none"
                />
              )}
            </div>
            
            {/* Dynamic message counter for Heart Card */}
            {id === 'heart' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: delay + 0.6 }}
                className="text-center mt-4"
              >
                                 <div className="bg-red-50 border border-red-200 rounded-lg px-6 py-3 inline-block">
                   <p className="text-sm text-red-700 font-medium mb-1">
                     Messages Shared Today
                   </p>
                   <p className="text-2xl font-bold text-red-600">
                     2,847
                   </p>
                 </div>
              </motion.div>
            )}
          </motion.div>

          {/* Description Section - Now always shows if description exists */}
          {description && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.6 }}
              className="mb-8"
            >
              <div className="max-w-2xl mx-auto">
                {description.map((line, index) => (
                  <p key={index} className="text-black text-lg sm:text-xl leading-relaxed mb-2 text-left">
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          )}

          {/* Button Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.8 }}
            className="text-center"
          >
            <FunButton onClick={() => console.log(`${title} clicked!`)}>
              {buttonText}
            </FunButton>
          </motion.div>


        </div>
      </InteractiveCard>
    </section>
  );
}
