import { motion } from 'motion/react';
import { useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
    >
      <div className="relative">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="w-96 h-px bg-[#0B2545] mb-12 origin-center"
        />

        <motion.h1
          className="text-center overflow-hidden text-5xl tracking-wide text-[#1A1A1A]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {['R', 'u', 'n', 'M', 'a', 'r', 'i', 'n', 'e'].map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.05, duration: 0.4 }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </motion.div>
  );
}
