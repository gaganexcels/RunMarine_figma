import { motion, useInView } from 'motion/react';
import React, { useRef } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Award, Users, Globe, Shield } from 'lucide-react';
import { PageHero } from '../../components/PageHero';

export function AboutOverview() {
  const storyRef = useRef(null);
  const isStoryInView = useInView(storyRef, { once: true });

  const highlights = [
    {
      icon: <Award />,
      title: 'Industry Leadership',
      description: 'Over 25 years of excellence in maritime management and vessel operations',
    },
    {
      icon: <Users />,
      title: 'Global Workforce',
      description: '10,000+ skilled professionals across 12+ nations ready to serve',
    },
    {
      icon: <Globe />,
      title: 'Worldwide Presence',
      description: 'Strategic offices in major maritime hubs across the globe',
    },
    {
      icon: <Shield />,
      title: 'Certified Excellence',
      description: 'RPSL certified and ISO 9001:2015 compliant operations',
    },
  ];

  const sections = [
    {
      title: 'Our Story',
      description: 'Discover the journey that made us a trusted name in maritime management',
      link: '/about/our-story',
    },
    {
      title: 'Mission & Vision',
      description: 'Our commitment to excellence and innovation in maritime services',
      link: '/about/mission-vision',
    },
    {
      title: 'Leadership Team',
      description: 'Meet the experienced professionals guiding our global operations',
      link: '/about/leadership',
    },
    {
      title: 'Certifications',
      description: 'Our industry certifications and compliance standards',
      link: '/about/certifications',
    },
  ];

  return (
    <>
      <PageHero
        title="About RunMarine"
        subtitle="Navigating Excellence in Maritime Management Since 1998"
        imageUrl="https://images.unsplash.com/photo-1645865406062-872af9faa81a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
        imageAlt="Cargo ship at sea"
        height="large"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              ref={storyRef}
              initial={{ opacity: 0, x: -30 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="text-5xl font-bold text-[#1A1A1A] mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                A Legacy of <span className="text-[#B8860B]">Maritime Excellence</span>
              </h2>
              <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
                For over two decades, RunMarine has been at the forefront of maritime management, providing comprehensive solutions that keep the world's vessels operating at peak performance.
              </p>
              <p className="text-lg text-[#6B7280] mb-8 leading-relaxed">
                Our commitment to safety, compliance, and operational excellence has made us the preferred partner for ship owners and operators worldwide.
              </p>
              <Link
                to="/about/our-story"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#0B2545] text-white hover:bg-[#13505B] transition-colors font-semibold"
              >
                Read Our Story
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px]"
            >
              <img
                src="https://images.unsplash.com/photo-1776661616822-ba34fe4e5638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Ship crew operations"
                className="w-full h-full object-cover shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-5xl font-bold text-[#1A1A1A] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Why Choose <span className="text-[#B8860B]">RunMarine</span>
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Unmatched expertise and dedication across every aspect of maritime management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-white border border-[#E5E5E5] hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border-2 border-[#0B2545] text-[#0B2545]">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 32, strokeWidth: 1.5 })}
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{item.title}</h3>
                <p className="text-[#6B7280] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
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
              Explore More
            </h2>
            <p className="text-lg text-[#6B7280]">
              Learn more about who we are and what drives us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <Link
                key={index}
                to={section.link}
                className="group relative overflow-hidden bg-[#F8F7F4] p-8 hover:shadow-lg transition-all"
              >
                <h3
                  className="text-3xl font-bold text-[#1A1A1A] mb-4 group-hover:text-[#0B2545] transition-colors"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {section.title}
                </h3>
                <p className="text-[#6B7280] mb-6">{section.description}</p>
                <div className="inline-flex items-center gap-2 text-[#0B2545] font-semibold">
                  Learn More
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
