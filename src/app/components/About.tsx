import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" ref={ref} className="py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Editorial Image - Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div
              className="relative overflow-hidden"
              style={{
                aspectRatio: '3/4',
                borderRadius: '4px',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1640471617789-39d28cc34aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                alt="Cargo vessel at sunset"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />

              {/* Overlay gradient for depth */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(180deg, rgba(10,30,60,0) 0%, rgba(10,30,60,0.15) 100%)',
                }}
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-white px-8 py-6 shadow-lg"
              style={{
                borderRadius: '4px',
                border: '1px solid rgba(230,195,100,0.3)',
              }}
            >
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '14px',
                  letterSpacing: '0.15em',
                  color: '#755b00',
                }}
              >
                ESTABLISHED
              </div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '36px',
                  fontWeight: 700,
                  color: '#0a1e3c',
                  lineHeight: '1',
                }}
              >
                1998
              </div>
            </motion.div>
          </motion.div>

          {/* Content - Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Eyebrow */}
            <div
              className="mb-5"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '12px',
                letterSpacing: '0.18em',
                color: '#e6c364',
              }}
            >
              OUR HERITAGE
            </div>

            {/* Headline */}
            <h2
              className="mb-8"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '48px',
                fontWeight: 700,
                lineHeight: '1.08',
                letterSpacing: '-0.02em',
                color: '#0a1e3c',
              }}
            >
              From Humble Beginnings<span style={{ color: '#e6c364' }}>.</span>
            </h2>

            {/* Body Copy */}
            <div className="space-y-5 mb-10">
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '16px',
                  lineHeight: '1.8',
                  color: '#6b7280',
                }}
              >
                Founded in 1998 with a single vessel and an unwavering commitment to
                maritime excellence, RunMarine has grown into India's most trusted ship
                management partner.
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '16px',
                  lineHeight: '1.8',
                  color: '#6b7280',
                }}
              >
                What began as a modest operation in Mumbai has evolved into a
                comprehensive maritime enterprise managing diverse fleets across global
                trade routes. Our journey reflects decades of technical mastery, crew
                welfare innovation, and an unyielding pursuit of operational perfection.
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '16px',
                  lineHeight: '1.8',
                  color: '#6b7280',
                }}
              >
                Today, with RPSL licensing and ISO 9001:2015 certification, we stand as
                a beacon of reliability in an industry where precision, safety, and trust
                are not just values—they are the foundation of every voyage.
              </p>
            </div>

            {/* CTA Button */}
            <Link
              to="/about/our-story"
              style={{
                display: 'inline-block',
                background: '#755b00',
                borderRadius: '8px',
                padding: '14px 32px',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                color: 'white',
                transition: 'all 250ms ease',
              }}
              className="hover:scale-105 hover:shadow-[0_0_20px_rgba(230,195,100,0.35)] active:scale-95"
            >
              Discover Our Story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
