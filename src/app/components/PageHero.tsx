import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  imageAlt?: string;
  height?: 'small' | 'medium' | 'large';
  overlay?: boolean;
}

export function PageHero({
  title,
  subtitle,
  imageUrl,
  imageAlt = '',
  height = 'medium',
  overlay = true,
}: PageHeroProps) {
  const heightClasses = {
    small: 'h-[40vh]',
    medium: 'h-[60vh]',
    large: 'h-[80vh]',
  };

  return (
    <section className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}>
      <div className="absolute inset-0">
        <ImageWithFallback
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        {overlay && <div className="absolute inset-0 bg-black/50" />}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
