import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { PageHero } from '../../components/PageHero';

export function OurStory() {
  const timelineRef = useRef(null);
  const isTimelineInView = useInView(timelineRef, { once: true });

  const milestones = [
    {
      year: '1998',
      title: 'Foundation',
      description: 'RunMarine was established with a vision to revolutionize maritime management services in the Indian Ocean region.',
    },
    {
      year: '2003',
      title: 'RPSL Certification',
      description: 'Achieved RPSL certification from DG Shipping, marking our commitment to regulatory excellence and crew welfare.',
    },
    {
      year: '2008',
      title: 'Global Expansion',
      description: 'Opened offices in Singapore and Dubai, extending our reach to serve clients across Asia and the Middle East.',
    },
    {
      year: '2012',
      title: 'ISO 9001:2015',
      description: 'Received ISO 9001:2015 certification, demonstrating our dedication to quality management systems.',
    },
    {
      year: '2015',
      title: 'Fleet Milestone',
      description: 'Crossed 100 vessels under management, establishing ourselves as a major player in ship management.',
    },
    {
      year: '2018',
      title: 'Green Initiative',
      description: 'Launched our Green Recycling division, pioneering environmentally responsible ship recycling practices.',
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Implemented advanced fleet management technology and 24/7 remote monitoring systems.',
    },
    {
      year: '2024',
      title: 'Industry Leadership',
      description: 'Managing 150+ vessels with a global crew network of 10,000+ maritime professionals.',
    },
  ];

  return (
    <>
      <PageHero
        title="Our Story"
        subtitle="A Journey of Innovation, Excellence, and Maritime Leadership"
        imageUrl="https://images.unsplash.com/photo-1769234424931-7d2d05ba72ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
        imageAlt="Cargo ship sailing on ocean"
        height="medium"
      />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-5xl font-bold text-[#1A1A1A] mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              From Humble Beginnings to <span className="text-[#B8860B]">Global Excellence</span>
            </h2>
            <div className="prose prose-lg max-w-none text-[#6B7280] space-y-6">
              <p>
                In 1998, RunMarine was founded by a group of maritime veterans who saw an opportunity to transform ship management in the Indian Ocean region. What started as a small crew management office in Mumbai has grown into a comprehensive maritime services provider with a global footprint.
              </p>
              <p>
                Our founders believed that exceptional maritime management required more than just technical expertise—it demanded a deep understanding of regulatory compliance, crew welfare, environmental responsibility, and operational efficiency. This holistic philosophy became the foundation of our company culture.
              </p>
              <p>
                Over the past two and a half decades, we've weathered industry challenges, adapted to technological changes, and consistently exceeded our clients' expectations. Our growth has been driven not by aggressive expansion, but by building lasting relationships based on trust, transparency, and results.
              </p>
              <p>
                Today, RunMarine stands as a testament to the power of principled leadership and unwavering commitment to excellence. We manage over 150 vessels, employ 10,000+ maritime professionals worldwide, and operate across every major shipping route on the planet.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section ref={timelineRef} className="py-24 bg-[#F8F7F4]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-[#1A1A1A] text-center mb-16"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our <span className="text-[#B8860B]">Journey</span>
          </motion.h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-[#0B2545]/20" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isTimelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-24 pb-16 last:pb-0"
              >
                <div className="absolute left-0 w-16 h-16 bg-[#0B2545] flex items-center justify-center">
                  <span
                    className="text-white text-sm font-bold"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {milestone.year}
                  </span>
                </div>

                <div className="bg-white p-8 shadow-sm border border-[#E5E5E5]">
                  <h3
                    className="text-2xl font-bold text-[#1A1A1A] mb-3"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {milestone.title}
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
