import { motion } from 'motion/react';
import React from 'react';
import { Award, Shield, Globe, CheckCircle } from 'lucide-react';
import { PageHero } from '../../components/PageHero';

export function Certifications() {
  const certifications = [
    {
      icon: <Award />,
      title: 'RPSL Certification',
      issuer: 'Directorate General of Shipping, India',
      year: '2003',
      description: 'Recognized Placing and Supplying License for crew recruitment and placement services, ensuring compliance with Indian maritime regulations.',
    },
    {
      icon: <Shield />,
      title: 'ISO 9001:2015',
      issuer: 'International Organization for Standardization',
      year: '2012',
      description: 'Quality Management System certification demonstrating our commitment to consistent service delivery and continuous improvement.',
    },
    {
      icon: <Globe />,
      title: 'ISM Code Compliance',
      issuer: 'International Maritime Organization',
      year: '2005',
      description: 'International Safety Management Code certification for safe ship operations and pollution prevention protocols.',
    },
    {
      icon: <Shield />,
      title: 'ISPS Code Compliance',
      issuer: 'International Maritime Organization',
      year: '2006',
      description: 'International Ship and Port Facility Security Code certification ensuring maritime security compliance.',
    },
  ];

  const standards = [
    'MLC 2006 Compliance',
    'STCW Convention Adherence',
    'Environmental Management ISO 14001',
    'Occupational Health & Safety ISO 45001',
    'Hong Kong Convention (Green Recycling)',
    'EU Ship Recycling Regulation',
  ];

  return (
    <>
      <PageHero
        title="Certifications & Compliance"
        subtitle="Certified Excellence in Maritime Management"
        imageUrl="https://images.unsplash.com/photo-1774167835679-53f8d4ea8bd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
        imageAlt="Large maritime vessel"
        height="medium"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-5xl font-bold text-[#1A1A1A] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Industry <span className="text-[#B8860B]">Certifications</span>
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Our certifications demonstrate our unwavering commitment to international standards and regulatory excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#F8F7F4] p-8 border-l-4 border-[#0B2545] hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0B2545]">
                    {React.cloneElement(cert.icon as React.ReactElement, { size: 28, className: 'text-white' })}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3
                        className="text-2xl font-bold text-[#1A1A1A]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {cert.title}
                      </h3>
                      <span className="px-3 py-1 bg-[#B8860B] text-white text-sm font-semibold">
                        {cert.year}
                      </span>
                    </div>
                    <p className="text-[#0B2545] font-semibold mb-3">{cert.issuer}</p>
                    <p className="text-[#6B7280] leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Compliance <span className="text-[#B8860B]">Standards</span>
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              We adhere to the highest international maritime standards and regulations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {standards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white p-6 flex items-center gap-4 hover:shadow-md transition-shadow"
              >
                <CheckCircle size={24} className="text-[#0B2545] flex-shrink-0" strokeWidth={2} />
                <span className="text-[#1A1A1A] font-semibold">{standard}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0B2545] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-5xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Committed to Excellence
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Our certifications are more than credentials—they represent our dedication to safety, quality, and environmental responsibility. Every certification we hold reflects our promise to deliver maritime services that meet and exceed international standards.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
