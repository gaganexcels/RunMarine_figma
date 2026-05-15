import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, Ship } from 'lucide-react';

export function Newsletter() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image (simulating video) */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1768295981613-49cddce5886f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Ships at sea"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(10,30,60,0.85) 0%, rgba(10,30,60,0.65) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            background: 'rgba(230,195,100,0.15)',
            border: '1px solid rgba(230,195,100,0.4)',
            borderRadius: '4px',
            marginBottom: '32px',
          }}
        >
          <Ship size={20} className="text-[#e6c364]" />
          <span
            style={{
              color: '#e6c364',
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '13px',
              letterSpacing: '0.15em',
            }}
          >
            Excellence Since 1998
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '72px',
            fontWeight: 700,
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            color: 'white',
            marginBottom: '24px',
          }}
          className="text-5xl md:text-7xl"
        >
          Your Fleet Deserves <br />
          <span style={{ color: '#e6c364' }}>the Best.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto"
        >
          Partner with a team that treats every vessel like their own. Experience the difference that comes from over two decades of maritime excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              background: '#e6c364',
              borderRadius: '8px',
              padding: '16px 36px',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '15px',
              fontWeight: 600,
              letterSpacing: '0.05em',
              color: '#0a1e3c',
              transition: 'all 250ms ease',
            }}
            className="hover:scale-105 hover:shadow-[0_0_24px_rgba(230,195,100,0.5)] active:scale-95"
          >
            Start a Conversation
            <ArrowRight size={20} />
          </Link>
          <Link
            to="/services"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              background: 'rgba(255,255,255,0.12)',
              border: '2px solid rgba(255,255,255,0.4)',
              backdropFilter: 'blur(12px)',
              borderRadius: '8px',
              padding: '16px 36px',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '15px',
              fontWeight: 600,
              letterSpacing: '0.05em',
              color: 'white',
              transition: 'all 250ms ease',
            }}
            className="hover:bg-[rgba(255,255,255,0.22)] hover:border-[rgba(255,255,255,0.6)] active:scale-95"
          >
            Explore Our Services
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-white">
            <div className="text-4xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              150+
            </div>
            <div className="text-white/80 text-sm uppercase tracking-wider">Vessels Managed</div>
          </div>
          <div className="text-white">
            <div className="text-4xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              10,000+
            </div>
            <div className="text-white/80 text-sm uppercase tracking-wider">Maritime Professionals</div>
          </div>
          <div className="text-white">
            <div className="text-4xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              24/7
            </div>
            <div className="text-white/80 text-sm uppercase tracking-wider">Technical Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
