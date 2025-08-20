import { motion } from 'framer-motion';
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
            <div className="aspect-square sm:aspect-video lg:aspect-[4/3] w-full">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>

          {/* Description Section - Now always shows if description exists */}
          {description && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.6 }}
              className="mb-8 text-center"
            >
              <div className="max-w-2xl mx-auto">
                {description.map((line, index) => (
                  <p key={index} className="text-black text-lg sm:text-xl leading-relaxed mb-2">
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

          {/* Scroll indicator for first card */}
          {isFirst && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-black/50 text-sm flex flex-col items-center"
              >
                <span className="mb-2">Scroll down</span>
                <motion.div
                  className="w-1 h-6 bg-black/30 rounded-full"
                  animate={{ scaleY: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          )}
        </div>
      </InteractiveCard>
    </section>
  );
}
