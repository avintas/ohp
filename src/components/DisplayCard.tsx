import { motion } from 'framer-motion';
import Image from 'next/image';
import { InteractiveCard } from './InteractiveCard';
import { FunButton } from './FunButton';
import { SectionStructuredData } from './SectionMetadata';
import { useRouter } from 'next/navigation';

interface DisplayCardProps {
  title: string;
  subtitle?: string;
  description?: string[] | string;
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
  const router = useRouter();

  const handleButtonClick = () => {
    if (id === 'greetings') {
      router.push('/greetings');
    } else if (id === 'heart') {
      router.push('/heart');
    } else if (id === 'challenge') {
      router.push('/challenge');
    } else if (id === 'motivate') {
      router.push('/motivate');
    } else if (id === 'experts') {
      router.push('/experts');
    } else {
      console.log(`${title} clicked!`);
    }
  };

  return (
    <section id={id} className="min-h-[75vh] flex items-center justify-center pt-8 pb-16 px-4">
      {/* Section-specific structured data for SEO */}
      {id && description && (
        <SectionStructuredData
          section={id as 'greetings' | 'heart' | 'challenge' | 'motivate' | 'experts'}
          title={title}
          description={description}
          image={image}
        />
      )}
      
      <InteractiveCard delay={delay} className="w-full max-w-4xl mx-auto">
        <div className={`bg-white rounded-xl p-6 sm:p-8 lg:p-12 shadow-sm border border-gray-200 overflow-hidden relative`}>

          {/* Title Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.2 }}
            className="text-center mb-4"
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
            className="relative w-full mb-6 overflow-hidden rounded-2xl"
          >
            <div className={`${
              id === 'experts' 
                ? 'aspect-[2/1] w-full' 
                : 'aspect-square sm:aspect-video lg:aspect-[4/3] w-full'
            } relative`}>
              {id === 'greetings' ? (
                <motion.div 
                  onClick={() => router.push('/greetings')}
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
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                  priority={isFirst}
                  quality={85}
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
              className="mb-6"
            >
              <div className="max-w-2xl mx-auto">
                {Array.isArray(description) ? (
                  // Render as bullet points if it's an array
                  <ul className="space-y-3">
                    {description.map((line, index) => (
                      <li key={index} className="text-black text-lg sm:text-xl leading-relaxed text-left flex items-start">
                        <span className="text-blue-600 mr-3 mt-1">•</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  // Render as flowing paragraph if it's a string
                  <p className="text-black text-lg sm:text-xl leading-relaxed text-center">
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
            transition={{ delay: delay + 0.8 }}
            className="text-center"
          >
            <FunButton onClick={handleButtonClick}>
              {buttonText}
            </FunButton>
          </motion.div>


        </div>
      </InteractiveCard>
    </section>
  );
}
