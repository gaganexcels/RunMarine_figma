import { motion, useInView } from 'motion/react';
import React, { useRef, useState } from 'react';
import { Shield, Globe, Clock } from 'lucide-react';

interface FeatureProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function Feature({ number, icon, title, description, delay }: FeatureProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative z-10 text-center p-10 bg-white transition-all duration-300"
      style={{
        border: '1px solid rgba(0,0,0,0.06)',
        borderRadius: '4px',
        boxShadow: isHovered ? '0 8px 32px rgba(0,0,0,0.07)' : 'none',
        transform: isHovered ? 'translateY(-4px)' : 'none',
        borderColor: isHovered ? 'rgba(230,195,100,0.5)' : 'rgba(0,0,0,0.06)',
      }}
    >
      <div className="absolute -z-10 top-6 left-1/2 -translate-x-1/2">
        <span
          className="text-[140px] font-bold"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: 'rgba(230,195,100,0.04)',
          }}
        >
          {number}
        </span>
      </div>

      <div className="relative inline-flex items-center justify-center mb-6 text-[#755b00]">
        {React.cloneElement(icon as React.ReactElement, { size: 40, strokeWidth: 1 })}
      </div>

      <h3
        className="mb-4"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '22px',
          fontWeight: 600,
          color: '#0a1e3c',
        }}
      >
        {title}
      </h3>

      <p
        className="max-w-sm mx-auto"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '15px',
          lineHeight: '1.7',
          color: '#6b7280',
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}

export function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div
            className="mb-4"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '12px',
              letterSpacing: '0.18em',
              color: '#e6c364',
            }}
          >
            OUR ADVANTAGES
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '48px',
              fontWeight: 700,
              lineHeight: '1.08',
              letterSpacing: '-0.02em',
              color: '#0a1e3c',
            }}
          >
            Why Choose RunMarine<span style={{ color: '#e6c364' }}>.</span>
          </h2>
          <p
            className="mt-6 mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px',
              lineHeight: '1.7',
              color: '#6b7280',
              maxWidth: '560px',
            }}
          >
            Three pillars of excellence that set us apart in maritime management
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Feature
            number="01"
            icon={<Shield />}
            title="Licensed & Compliant"
            description="RPSL certified and ISO 9001:2015 compliant, ensuring every operation meets the highest international maritime standards."
            delay={0.2}
          />
          <Feature
            number="02"
            icon={<Globe />}
            title="Global Crew Network"
            description="Access to 10,000+ skilled maritime professionals across 12+ nations, ready to serve at a moment's notice."
            delay={0.4}
          />
          <Feature
            number="03"
            icon={<Clock />}
            title="24/7 Operations"
            description="Round-the-clock technical support and emergency response, because the ocean never sleeps."
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
}
