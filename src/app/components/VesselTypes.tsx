import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Link } from 'react-router';
import Slider from 'react-slick';
import { ArrowRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface VesselCardProps {
  name: string;
  slug: string;
  description: string;
  image: string;
}

function VesselCard({ name, slug, description, image }: VesselCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/fleet/${slug}`}>
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative h-[400px] mx-2 overflow-hidden group cursor-pointer bg-white border border-[#E5E5E5]"
      >
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full"
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          animate={{ opacity: isHovered ? 0.85 : 0.5 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-[#0B2545]/60 to-transparent"
        />

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <motion.h3
            animate={{ y: isHovered ? -10 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-3xl font-bold text-white mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {name}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3 }}
            className="text-white/90 text-sm mb-4"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="inline-flex items-center gap-2 text-white font-semibold"
          >
            View Vessel
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}

export function VesselTypes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const vessels = [
    {
      name: 'Bulk Carrier',
      slug: 'bulk-carrier',
      description: '30,000-200,000 DWT • Unpackaged dry cargo',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      name: 'General Cargo',
      slug: 'general-cargo',
      description: 'Multi-purpose • Onboard cranes (geared)',
      image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      name: 'Panamax',
      slug: 'panamax',
      description: '60,000-80,000 DWT • Panama Canal optimized',
      image: 'https://images.unsplash.com/photo-1769234424931-7d2d05ba72ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      name: 'Kamsarmax',
      slug: 'kamsarmax',
      description: '82,000-87,000 DWT • Enhanced Panamax class',
      image: 'https://images.unsplash.com/photo-1777206078985-4959beeaf00e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      name: 'Capesize',
      slug: 'capesize',
      description: '150,000-400,000 DWT • Large bulk carriers',
      image: 'https://images.unsplash.com/photo-1715198749916-3fab2a14074f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      name: 'Ultramax',
      slug: 'ultramax',
      description: '60,000-65,000 DWT • Modern efficient design',
      image: 'https://images.unsplash.com/photo-1632517306067-b54ab4d1f98d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      name: 'Post-Panamax',
      slug: 'post-panamax',
      description: '90,000-110,000 DWT • Larger capacity vessels',
      image: 'https://images.unsplash.com/photo-1759171249029-ce1bee69979e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      name: 'Aframax',
      slug: 'aframax',
      description: '80,000-120,000 DWT • Crude oil tankers',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      name: 'Suezmax',
      slug: 'suezmax',
      description: '120,000-160,000 DWT • Suez Canal optimized',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      name: 'MR Tanker',
      slug: 'mr-tanker',
      description: '35,000-55,000 DWT • Refined product tankers',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      name: 'Container Vessel',
      slug: 'container-vessel',
      description: '1,500-15,000 TEU • High-speed cargo liners',
      image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      name: 'Mini Bulker',
      slug: 'mini-bulker',
      description: '10,000-40,000 DWT • Flexible small carriers',
      image: 'https://images.unsplash.com/photo-1689252688962-b5c03f6c9144?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    swipeToSlide: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="fleet" ref={ref} className="py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
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
            OUR FLEET
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
            Fleet Specialization<span style={{ color: '#e6c364' }}>.</span>
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
            Expert management across all major vessel categories
          </p>
        </motion.div>

        <div className="relative -mx-2">
          <Slider {...settings}>
            {vessels.map((vessel, index) => (
              <VesselCard key={index} {...vessel} />
            ))}
          </Slider>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/fleet"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
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
            View Full Fleet
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
