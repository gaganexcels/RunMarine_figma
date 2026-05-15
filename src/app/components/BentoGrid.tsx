import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface GridItem {
  imageUrl: string;
  alt: string;
  size: 'small' | 'medium' | 'large';
}

export function BentoGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const gridItems: GridItem[] = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      alt: 'Ship captain navigating',
      size: 'large',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1640471617789-39d28cc34aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      alt: 'Cargo vessel at port',
      size: 'medium',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1589182337358-2cb63099350c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      alt: 'Maritime operations',
      size: 'medium',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1611348524140-53c9a25263d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      alt: 'Container ship at sea',
      size: 'small',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1645865406062-872af9faa81a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      alt: 'Bulk carrier loading',
      size: 'small',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1776661616822-ba34fe4e5638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      alt: 'Crew operations deck',
      size: 'large',
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
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
            OUR OPERATIONS
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
            Maritime Excellence in Action<span style={{ color: '#e6c364' }}>.</span>
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[200px]">
          {/* Large item 1 - spans 2 rows, 6 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-12 md:col-span-6 md:row-span-2 relative overflow-hidden group"
            style={{ borderRadius: '4px' }}
          >
            <img
              src={gridItems[0].imageUrl}
              alt={gridItems[0].alt}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, rgba(10,30,60,0) 0%, rgba(10,30,60,0.2) 100%)',
              }}
            />
          </motion.div>

          {/* Medium item 1 - spans 1 row, 6 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-6 md:col-span-3 row-span-1 relative overflow-hidden group"
            style={{ borderRadius: '4px' }}
          >
            <img
              src={gridItems[1].imageUrl}
              alt={gridItems[1].alt}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, rgba(10,30,60,0) 0%, rgba(10,30,60,0.2) 100%)',
              }}
            />
          </motion.div>

          {/* Medium item 2 - spans 1 row, 6 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="col-span-6 md:col-span-3 row-span-1 relative overflow-hidden group"
            style={{ borderRadius: '4px' }}
          >
            <img
              src={gridItems[2].imageUrl}
              alt={gridItems[2].alt}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, rgba(10,30,60,0) 0%, rgba(10,30,60,0.2) 100%)',
              }}
            />
          </motion.div>

          {/* Small item 1 - spans 1 row, 3 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-6 md:col-span-3 row-span-1 relative overflow-hidden group"
            style={{ borderRadius: '4px' }}
          >
            <img
              src={gridItems[3].imageUrl}
              alt={gridItems[3].alt}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, rgba(10,30,60,0) 0%, rgba(10,30,60,0.2) 100%)',
              }}
            />
          </motion.div>

          {/* Small item 2 - spans 1 row, 3 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="col-span-6 md:col-span-3 row-span-1 relative overflow-hidden group"
            style={{ borderRadius: '4px' }}
          >
            <img
              src={gridItems[4].imageUrl}
              alt={gridItems[4].alt}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, rgba(10,30,60,0) 0%, rgba(10,30,60,0.2) 100%)',
              }}
            />
          </motion.div>

          {/* Large item 2 - spans 2 rows, 6 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="col-span-12 md:col-span-6 md:row-span-2 relative overflow-hidden group"
            style={{ borderRadius: '4px' }}
          >
            <img
              src={gridItems[5].imageUrl}
              alt={gridItems[5].alt}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, rgba(10,30,60,0) 0%, rgba(10,30,60,0.2) 100%)',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
