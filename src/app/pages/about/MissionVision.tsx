import { motion, useInView } from 'motion/react';
import React, { useRef } from 'react';
import { Target, Eye, Heart } from 'lucide-react';
import { PageHero } from '../../components/PageHero';

export function MissionVision() {
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const isMissionInView = useInView(missionRef, { once: true });
  const isVisionInView = useInView(visionRef, { once: true });

  const values = [
    {
      icon: <Heart />,
      title: 'Safety First',
      description: 'The safety of our crew, vessels, and the environment is our top priority in every decision we make.',
    },
    {
      icon: <Target />,
      title: 'Operational Excellence',
      description: 'We strive for perfection in every aspect of maritime management, from technical operations to crew welfare.',
    },
    {
      icon: <Eye />,
      title: 'Transparency',
      description: 'We build trust through honest communication, clear reporting, and accountability at every level.',
    },
  ];

  return (
    <>
      <PageHero
        title="Mission & Vision"
        subtitle="Guiding Principles That Drive Our Excellence"
        imageUrl="https://images.unsplash.com/photo-1715198749916-3fab2a14074f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
        imageAlt="Cargo ship on the ocean"
        height="medium"
      />

      <section ref={missionRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#0B2545]">
                  <Target size={32} className="text-white" />
                </div>
                <h2
                  className="text-5xl font-bold text-[#1A1A1A]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Our Mission
                </h2>
              </div>
              <div className="space-y-6 text-lg text-[#6B7280] leading-relaxed">
                <p>
                  To provide world-class maritime management services that ensure the safety, efficiency, and compliance of every vessel under our care while fostering the professional growth and well-being of our global maritime workforce.
                </p>
                <p>
                  We are committed to delivering comprehensive solutions that address every aspect of ship management—from technical operations and crew management to regulatory compliance and environmental stewardship.
                </p>
                <p>
                  Through innovation, expertise, and unwavering dedication, we empower ship owners to focus on their business while we handle the complexities of maritime operations with precision and care.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px]"
            >
              <img
                src="https://images.unsplash.com/photo-1767873306288-adb22b6dff85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Ship crew member handling rope"
                className="w-full h-full object-cover shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={visionRef} className="py-24 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] order-2 lg:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1777206078985-4959beeaf00e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Container vessel on ocean"
                className="w-full h-full object-cover shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#B8860B]">
                  <Eye size={32} className="text-white" />
                </div>
                <h2
                  className="text-5xl font-bold text-[#1A1A1A]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Our Vision
                </h2>
              </div>
              <div className="space-y-6 text-lg text-[#6B7280] leading-relaxed">
                <p>
                  To be the global benchmark for maritime management excellence, recognized for our innovation, integrity, and unwavering commitment to safety and sustainability.
                </p>
                <p>
                  We envision a future where RunMarine leads the industry in technological advancement, environmental responsibility, and crew welfare—setting new standards that others aspire to achieve.
                </p>
                <p>
                  By 2030, we aim to manage 300+ vessels, operate across all major maritime regions, and be the employer of choice for maritime professionals worldwide, known for our culture of excellence and opportunity.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-5xl font-bold text-[#1A1A1A] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Core <span className="text-[#B8860B]">Values</span>
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              The principles that guide every decision we make and every action we take
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#F8F7F4] p-8 text-center hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border-2 border-[#0B2545]">
                  {React.cloneElement(value.icon as React.ReactElement, { size: 32, strokeWidth: 1.5, className: 'text-[#0B2545]' })}
                </div>
                <h3
                  className="text-2xl font-bold text-[#1A1A1A] mb-4"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {value.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
