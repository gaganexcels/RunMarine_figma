import { motion } from 'motion/react';
import { PageHero } from '../../components/PageHero';
import { Leaf, Droplet, Wind, Recycle, Globe, Shield, Target, TrendingUp, CheckCircle, Anchor } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

const environmentalPillars = [
  {
    icon: Droplet,
    title: 'Marine Protection',
    description: 'Preventing pollution and protecting ocean ecosystems through strict operational controls.',
  },
  {
    icon: Wind,
    title: 'Emission Reduction',
    description: 'Minimizing air emissions and greenhouse gases through efficient operations and clean technology.',
  },
  {
    icon: Recycle,
    title: 'Waste Management',
    description: 'Comprehensive waste reduction, segregation, and responsible disposal practices.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Operations',
    description: 'Integrating environmental considerations into all aspects of our maritime activities.',
  },
];

const environmentalPolicies = [
  {
    title: 'Pollution Prevention',
    description: 'Comprehensive measures to prevent marine pollution from vessel operations',
    items: [
      'MARPOL Annex I - Prevention of pollution by oil',
      'MARPOL Annex II - Control of pollution by noxious liquid substances',
      'MARPOL Annex III - Prevention of pollution by harmful substances in packaged form',
      'MARPOL Annex IV - Prevention of pollution by sewage from ships',
      'MARPOL Annex V - Prevention of pollution by garbage from ships',
      'MARPOL Annex VI - Prevention of air pollution from ships',
      'Oil spill prevention and response procedures',
      'Chemical spill containment protocols',
      'Ballast water management compliance',
      'Anti-fouling system regulations compliance',
      'Bilge water management procedures',
      'Regular pollution prevention equipment maintenance',
    ],
  },
  {
    title: 'Energy Efficiency & Emissions',
    description: 'Strategies to reduce energy consumption and minimize environmental impact',
    items: [
      'Energy Efficiency Design Index (EEDI) compliance',
      'Ship Energy Efficiency Management Plan (SEEMP) implementation',
      'Carbon Intensity Indicator (CII) optimization',
      'Fuel efficiency monitoring and optimization',
      'Speed optimization and voyage planning',
      'Hull and propeller maintenance for efficiency',
      'Use of low-sulfur fuels and cleaner alternatives',
      'Shore power utilization in port',
      'IMO 2020 sulfur cap compliance',
      'Greenhouse gas emission reduction targets',
      'Alternative fuel evaluation and adoption',
      'Energy-saving technologies implementation',
    ],
  },
  {
    title: 'Waste Management',
    description: 'Systematic approach to waste reduction, segregation, and disposal',
    items: [
      'Waste management plans for all vessel types',
      'Waste segregation at source procedures',
      'Recyclable materials separation and storage',
      'Hazardous waste identification and handling',
      'Garbage disposal records maintenance',
      'Plastic waste elimination initiatives',
      'Food waste composting and reduction',
      'E-waste proper disposal procedures',
      'Chemical waste management protocols',
      'Port reception facilities utilization',
      'Waste minimization awareness programs',
      'Regular waste management audits',
    ],
  },
  {
    title: 'Biodiversity & Ecosystem Protection',
    description: 'Protecting marine life and sensitive ecosystems',
    items: [
      'Ballast water treatment system operation',
      'Invasive species prevention measures',
      'Marine mammal awareness and avoidance',
      'Sensitive area navigation protocols',
      'Anchoring restrictions compliance',
      'Underwater noise pollution reduction',
      'Coral reef protection procedures',
      'Marine protected areas respect',
      'Wildlife observation reporting',
      'Biofouling management strategies',
      'Ecosystem impact assessments',
      'Environmental incident reporting',
    ],
  },
  {
    title: 'Environmental Compliance & Monitoring',
    description: 'Ensuring adherence to environmental regulations and continuous improvement',
    items: [
      'Regular environmental audits and inspections',
      'Emission monitoring and reporting',
      'Environmental performance indicators tracking',
      'Regulatory compliance verification',
      'Environmental management system certification',
      'Third-party environmental audits',
      'Non-conformity investigation and correction',
      'Environmental risk assessments',
      'Continuous improvement programs',
      'Environmental training and awareness',
      'Stakeholder engagement and transparency',
      'Environmental incident investigation',
    ],
  },
];

const sustainabilityGoals = [
  {
    icon: Target,
    goal: '50% Emission Reduction',
    description: 'By 2030 compared to 2008 baseline',
    progress: 32,
  },
  {
    icon: Recycle,
    goal: '90% Waste Recycling',
    description: 'Across all vessel operations',
    progress: 76,
  },
  {
    icon: Droplet,
    goal: 'Zero Oil Spills',
    description: 'Maintained since company inception',
    progress: 100,
  },
  {
    icon: Leaf,
    goal: 'Green Fleet',
    description: '100% EEDI-compliant vessels',
    progress: 88,
  },
];

export default function EnvironmentPolicy() {
  const [expandedPolicy, setExpandedPolicy] = useState<number | null>(0);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F7F4' }}>
      <PageHero
        title="Environmental Policy"
        subtitle="Committed to sustainable maritime operations and protecting our oceans for future generations"
        imageUrl="https://images.unsplash.com/photo-1594267238613-80da343fc886"
        imageAlt="Ocean environment sustainability"
        height="medium"
      />

      {/* Introduction */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: '#0B2545' }}
            >
              Protecting Our Blue Planet
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Environmental stewardship is at the core of our operations. We are committed to minimizing our
              environmental footprint, preventing pollution, and implementing sustainable practices across our
              fleet. Our comprehensive environmental policy ensures we operate responsibly while contributing
              to the preservation of marine ecosystems.
            </p>
          </motion.div>

          {/* Environmental Pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {environmentalPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-lg mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: index % 2 === 0 ? '#0B2545' : '#B8860B' }}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-3 text-center"
                    style={{ fontFamily: "'Playfair Display', serif", color: '#1A1A1A' }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center text-sm">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Sustainability Goals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-12 text-center"
              style={{ fontFamily: "'Playfair Display', serif", color: '#0B2545' }}
            >
              Our Sustainability Goals
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainabilityGoals.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.goal}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg"
                >
                  <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#B8860B' }}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-2 text-center"
                    style={{ fontFamily: "'Playfair Display', serif", color: '#1A1A1A' }}
                  >
                    {item.goal}
                  </h3>
                  <p className="text-gray-600 text-center mb-6 text-sm">
                    {item.description}
                  </p>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block" style={{ color: '#0B2545' }}>
                          Progress
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block" style={{ color: '#B8860B' }}>
                          {item.progress}%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
                        style={{ backgroundColor: '#B8860B' }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Environmental Policies */}
      <section className="py-24 px-6" style={{ backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: '#0B2545' }}
            >
              Environmental Protection Framework
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive policies ensuring environmental responsibility across all maritime operations
            </p>
          </motion.div>

          <div className="space-y-6">
            {environmentalPolicies.map((policy, index) => {
              const isExpanded = expandedPolicy === index;

              return (
                <motion.div
                  key={policy.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
                >
                  <button
                    onClick={() => setExpandedPolicy(isExpanded ? null : index)}
                    className="w-full p-8 flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-2 h-16 rounded-full" style={{ backgroundColor: '#B8860B' }} />
                      <div className="text-left">
                        <h3
                          className="text-2xl font-bold mb-2"
                          style={{ fontFamily: "'Playfair Display', serif", color: '#1A1A1A' }}
                        >
                          {policy.title}
                        </h3>
                        <p className="text-gray-600">
                          {policy.description}
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-6 h-6" style={{ color: '#0B2545' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? 'auto' : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 border-t border-gray-100">
                      <div className="grid md:grid-cols-2 gap-4 mt-6">
                        {policy.items.map((item, itemIndex) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: itemIndex * 0.03 }}
                            className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                          >
                            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#0B2545' }} />
                            <span className="text-gray-700 text-sm">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-24 px-6" style={{ backgroundColor: '#0B2545' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Environmental Commitment
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Leading the maritime industry toward a sustainable future through innovation and responsible practices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: 'Global Responsibility',
                description: 'Recognizing our role as stewards of the marine environment and taking proactive measures to minimize our impact on ocean ecosystems.',
              },
              {
                icon: TrendingUp,
                title: 'Continuous Improvement',
                description: 'Regular environmental performance reviews, setting ambitious targets, and implementing innovative solutions to reduce our footprint.',
              },
              {
                icon: Anchor,
                title: 'Industry Leadership',
                description: 'Setting benchmarks for environmental excellence and actively participating in maritime sustainability initiatives.',
              },
              {
                icon: Shield,
                title: 'Regulatory Excellence',
                description: 'Exceeding compliance requirements and proactively adopting emerging environmental standards and best practices.',
              },
              {
                icon: Leaf,
                title: 'Green Technology',
                description: 'Investing in eco-friendly technologies, alternative fuels, and energy-efficient systems to reduce emissions and environmental impact.',
              },
              {
                icon: Target,
                title: 'Transparent Reporting',
                description: 'Publishing environmental performance data and maintaining open communication with stakeholders about our progress.',
              },
            ].map((commitment, index) => {
              const Icon = commitment.icon;
              return (
                <motion.div
                  key={commitment.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
                >
                  <div className="w-14 h-14 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: '#B8860B' }}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {commitment.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {commitment.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6" style={{ backgroundColor: '#F8F7F4' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', serif", color: '#0B2545' }}
          >
            Together for a Sustainable Future
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Join us in our commitment to protecting the marine environment and building a sustainable maritime industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button
                className="px-8 py-4 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#0B2545' }}
              >
                Learn More
              </button>
            </Link>
            <Link to="/about">
              <button
                className="px-8 py-4 font-semibold rounded-lg border-2 hover:bg-gray-50 transition-all duration-300"
                style={{ borderColor: '#0B2545', color: '#0B2545' }}
              >
                Our Sustainability Report
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
