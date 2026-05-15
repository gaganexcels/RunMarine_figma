import { motion, useInView } from 'motion/react';
import React, { useRef } from 'react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  delay: number;
}

function ServiceCard({ icon, title, description, href, delay }: ServiceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative bg-white p-10 transition-all duration-300"
      style={{
        border: '1px solid rgba(0,0,0,0.06)',
        borderRadius: '4px',
        boxShadow: isHovered ? '0 8px 32px rgba(0,0,0,0.07)' : 'none',
        transform: isHovered ? 'translateY(-4px)' : 'none',
        borderColor: isHovered ? 'rgba(230,195,100,0.5)' : 'rgba(0,0,0,0.06)',
      }}
    >
      {/* Icon - thin line-art */}
      <div className="mb-6 text-[#755b00]">
        {React.cloneElement(icon as React.ReactElement, {
          size: 32,
          strokeWidth: 1,
        })}
      </div>

      {/* Service Name */}
      <h3
        className="text-[#0a1e3c] mb-3"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '18px',
          fontWeight: 600,
          lineHeight: '1.4',
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-[#6b7280] mb-4"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '14px',
          lineHeight: '1.7',
        }}
      >
        {description}
      </p>

      {/* Learn More Link - appears on hover */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 6,
        }}
        transition={{ duration: 0.2 }}
      >
        <Link
          to={href}
          className="inline-flex items-center gap-2 text-[#755b00] font-semibold text-sm"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Learn more
          <ArrowRight size={14} />
        </Link>
      </motion.div>
    </motion.div>
  );
}

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      ),
      title: 'Technical Management',
      description: 'End-to-end technical oversight ensuring compliance, safety, and optimal vessel performance.',
      href: '/services/technical-management',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: 'Crew Management',
      description: 'Global crew recruitment, training, and welfare management with 24/7 support systems.',
      href: '/services/crew-management',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      ),
      title: 'Technical Services',
      description: 'Specialized engineering support, inspections, and maintenance planning for all vessel types.',
      href: '/services/technical-services',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      title: 'Chartering',
      description: 'Strategic vessel chartering solutions connecting owners with profitable opportunities worldwide.',
      href: '/services/chartering',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 11l-2-2M23 11l2 2M23 11h-4"/>
        </svg>
      ),
      title: 'Green Recycling',
      description: 'Environmentally compliant ship recycling services following international green standards.',
      href: '/services/green-recycling',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      title: 'Marine Spares',
      description: 'Reliable procurement and delivery of certified marine spare parts and equipment globally.',
      href: '/services/marine-spares',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      title: 'Payroll & Tax',
      description: 'Comprehensive crew payroll, taxation, and compliance services across multiple jurisdictions.',
      href: '/services/payroll-tax',
    },
  ];

  return (
    <section id="services" ref={ref} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          {/* Eyebrow */}
          <div
            className="mb-4"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '12px',
              letterSpacing: '0.18em',
              color: '#e6c364',
            }}
          >
            OUR CAPABILITIES
          </div>

          {/* Headline */}
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
            Comprehensive Solutions<span style={{ color: '#e6c364' }}>.</span>
          </h2>

          {/* Sub-text */}
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
            Tailored maritime services designed to optimize your vessel operations
            and maximize fleet performance
          </p>
        </motion.div>

        {/* Services Grid - 4 top, 3 bottom centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {services.slice(0, 4).map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 0.08} />
          ))}
        </div>

        {/* Bottom row - 3 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:max-w-5xl lg:mx-auto">
          {services.slice(4, 7).map((service, index) => (
            <ServiceCard key={index + 4} {...service} delay={(index + 4) * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
