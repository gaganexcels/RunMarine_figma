import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

interface StatCardProps {
  value: string;
  label: string;
  delay: number;
}

function StatCard({ value, label, delay }: StatCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  const targetNumber = parseInt(value.replace(/\D/g, ''));
  const hasPlus = value.includes('+');

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = targetNumber / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= targetNumber) {
          setCount(targetNumber);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, targetNumber]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex-1 text-center py-8"
    >
      <div
        className="mb-3"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '64px',
          fontWeight: 700,
          color: '#0a1e3c',
        }}
      >
        {count.toLocaleString()}
        {hasPlus && '+'}
      </div>
      <div
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '12px',
          letterSpacing: '0.15em',
          color: '#6b7280',
        }}
      >
        {label}
      </div>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="py-12 bg-white border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 lg:divide-x divide-[#E5E5E5]">
          <StatCard value="75+" label="Combined Years of Experience" delay={0} />
          <StatCard value="10000+" label="Crew Managed" delay={0.1} />
          <StatCard value="12+" label="Countries Served" delay={0.2} />
          <StatCard value="50+" label="Vessels Managed" delay={0.3} />
          <StatCard value="10+" label="Years of Excellence" delay={0.4} />
        </div>
      </div>
    </section>
  );
}
