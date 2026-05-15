import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

export function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Video Background with Ken Burns zoom */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1.0 }}
        transition={{ duration: 12, ease: 'easeOut' }}
      >
        <source
          src="https://youtu.be/wQMx7wc4jh8?si=PYZkQyrhcRY4LD5-"
          type="video/mp4"
        />
      </motion.video>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(10,30,60,0.70) 0%, rgba(10,30,60,0.35) 50%, rgba(10,30,60,0.15) 100%)'
        }}
      />

      {/* Hero Content - Left Aligned */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '12px',
              letterSpacing: '0.2em',
              color: '#e6c364',
            }}
            className="mb-6"
          >
            INDIA'S PREMIER SHIP MANAGEMENT FIRM
          </motion.div>

          {/* Headline Line 1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '80px',
              fontWeight: 700,
              lineHeight: '1.08',
              letterSpacing: '-0.02em',
              color: 'white',
            }}
            className="mb-2"
          >
            Masters of the
          </motion.h1>

          {/* Headline Line 2 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '84px',
              fontWeight: 700,
              fontStyle: 'italic',
              lineHeight: '1.08',
              letterSpacing: '-0.02em',
              color: '#e6c364',
            }}
            className="mb-8"
          >
            Global Seas.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '18px',
              lineHeight: '1.7',
              color: 'rgba(255,255,255,0.8)',
              maxWidth: '560px',
            }}
            className="mb-10"
          >
            India's most trusted ship management partner. Delivering uncompromising precision, safety,
            and operational excellence for the world's most sophisticated fleets.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/services"
              style={{
                background: '#755b00',
                borderRadius: '8px',
                padding: '14px 32px',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                transition: 'all 250ms ease',
              }}
              className="inline-block text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(230,195,100,0.35)] active:scale-95"
            >
              Explore Our Services
            </Link>

            <button
              style={{
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.35)',
                backdropFilter: 'blur(12px)',
                borderRadius: '8px',
                padding: '14px 32px',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                transition: 'all 250ms ease',
              }}
              className="text-white hover:bg-[rgba(255,255,255,0.22)] hover:border-[rgba(255,255,255,0.5)] active:scale-95"
            >
              Download Brochure
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '11px',
            letterSpacing: '0.2em',
            color: 'rgba(255,255,255,0.5)',
          }}
        >
          SCROLL TO EXPLORE
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="text-white opacity-50" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
