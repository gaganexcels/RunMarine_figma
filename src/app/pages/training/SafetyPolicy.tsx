import { motion } from 'motion/react';
import { PageHero } from '../../components/PageHero';
import { Shield, AlertTriangle, UserCheck, Anchor, LifeBuoy, CheckCircle, Target, Award } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

const safetyPillars = [
  {
    icon: Shield,
    title: 'Zero Incident Culture',
    description: 'Our unwavering commitment to preventing all accidents and incidents through proactive safety measures.',
  },
  {
    icon: UserCheck,
    title: 'Crew Competency',
    description: 'Rigorous training and certification programs ensuring every crew member is fully qualified and prepared.',
  },
  {
    icon: AlertTriangle,
    title: 'Risk Management',
    description: 'Systematic identification, assessment, and mitigation of all operational risks and hazards.',
  },
  {
    icon: LifeBuoy,
    title: 'Emergency Preparedness',
    description: 'Comprehensive emergency response protocols and regular drills for all critical scenarios.',
  },
];

const safetyPolicies = [
  {
    title: 'Safety Management System',
    description: 'ISM Code compliant safety management ensuring systematic approach to safe operations',
    items: [
      'Safety and environmental protection policy clearly defined',
      'Company responsibilities and authority established',
      'Designated person ashore (DPA) appointed and empowered',
      'Master\'s responsibility and authority clearly defined',
      'Resources and personnel management procedures',
      'Development of plans for shipboard operations',
      'Emergency preparedness and response protocols',
      'Non-conformity and accident reporting system',
      'Maintenance of vessel and equipment standards',
      'Documentation and company verification procedures',
      'Certification and periodic verification requirements',
      'Continuous improvement and safety culture enhancement',
    ],
  },
  {
    title: 'Operational Safety Standards',
    description: 'Comprehensive safety protocols covering all aspects of vessel operations',
    items: [
      'Navigation and bridge watchkeeping procedures',
      'Cargo handling and stowage safety protocols',
      'Machinery operation and maintenance safety',
      'Mooring and anchoring safety procedures',
      'Working at heights and enclosed spaces protocols',
      'Hot work and electrical safety requirements',
      'Lifting operations and rigging safety',
      'Personal protective equipment (PPE) requirements',
      'Permit to work system implementation',
      'Lock out / tag out procedures',
      'Job safety analysis (JSA) requirements',
      'Safety observation and behavior-based safety programs',
    ],
  },
  {
    title: 'Health & Wellbeing',
    description: 'Comprehensive health and welfare programs for all crew members',
    items: [
      'Regular medical examinations and fitness assessments',
      'Onboard medical facilities and equipment maintenance',
      'Mental health support and counseling services',
      'Fatigue management and rest hour compliance',
      'Nutrition and food safety standards',
      'Hygiene and sanitation protocols',
      'Substance abuse prevention programs',
      'Stress management and resilience training',
      'Occupational health monitoring',
      'Pandemic and communicable disease protocols',
      'Shore leave and recreational facilities',
      'Family support and communication programs',
    ],
  },
  {
    title: 'Training & Competency',
    description: 'Continuous safety training and competency development for all personnel',
    items: [
      'STCW mandatory safety training compliance',
      'Company-specific safety induction programs',
      'Regular emergency drills and exercises',
      'Safety leadership and behavioral training',
      'Specialized equipment operation training',
      'Hazardous materials handling certification',
      'First aid and medical emergency response',
      'Fire prevention and firefighting training',
      'Survival craft and rescue boat operations',
      'Security awareness and anti-piracy training',
      'Competency assessment and revalidation',
      'Safety culture and human element training',
    ],
  },
];

const safetyStats = [
  { value: '0', label: 'Fatalities (Target & Achievement)', icon: Shield },
  { value: '99.9%', label: 'Safety Training Completion', icon: Award },
  { value: '24/7', label: 'Safety Monitoring & Support', icon: Target },
  { value: '100%', label: 'ISM Code Compliance', icon: CheckCircle },
];

export default function SafetyPolicy() {
  const [expandedPolicy, setExpandedPolicy] = useState<number | null>(0);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F7F4' }}>
      <PageHero
        title="Safety Policy"
        subtitle="Committed to the highest standards of safety, protecting lives, assets, and the environment"
        imageUrl="https://images.unsplash.com/photo-1762787804984-51850abbd5d4"
        imageAlt="Maritime safety equipment"
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
              Safety First, Always
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Safety is our paramount concern and forms the foundation of all our operations. We are committed to
              providing a safe working environment for all crew members, protecting our assets, and safeguarding
              the marine environment through comprehensive safety management systems and a strong safety culture.
            </p>
          </motion.div>

          {/* Safety Statistics */}
          <div className="grid md:grid-cols-4 gap-8 mb-24">
            {safetyStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg text-center"
                >
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#0B2545' }}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-2" style={{ color: '#B8860B', fontFamily: "'Playfair Display', serif" }}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-semibold">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Safety Pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyPillars.map((pillar, index) => {
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
        </div>
      </section>

      {/* Detailed Safety Policies */}
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
              Comprehensive Safety Framework
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Detailed policies and procedures ensuring the highest levels of safety across all operations
            </p>
          </motion.div>

          <div className="space-y-6">
            {safetyPolicies.map((policy, index) => {
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

      {/* Safety Commitment */}
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
              Our Safety Commitment
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Leadership commitment to safety excellence at every level of our organization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Management Accountability',
                description: 'Senior leadership actively promotes and participates in safety programs, demonstrating commitment through resources, policies, and personal involvement.',
              },
              {
                title: 'Continuous Improvement',
                description: 'Regular safety audits, inspections, and reviews to identify improvement opportunities and implement corrective actions promptly.',
              },
              {
                title: 'Open Reporting Culture',
                description: 'Encouraging all personnel to report safety concerns, near misses, and hazards without fear of reprisal, fostering transparency.',
              },
              {
                title: 'Regulatory Compliance',
                description: 'Full compliance with international maritime regulations, flag state requirements, and industry best practices at all times.',
              },
              {
                title: 'Safety Innovation',
                description: 'Investing in new technologies, equipment, and procedures that enhance safety performance and risk mitigation capabilities.',
              },
              {
                title: 'Crew Empowerment',
                description: 'Empowering crew members to stop unsafe work, raise safety concerns, and participate actively in safety decision-making.',
              },
            ].map((commitment, index) => (
              <motion.div
                key={commitment.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-3 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {commitment.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {commitment.description}
                </p>
              </motion.div>
            ))}
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
            Safety is Everyone's Responsibility
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Join us in maintaining the highest safety standards in maritime operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button
                className="px-8 py-4 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#0B2545' }}
              >
                Contact Safety Team
              </button>
            </Link>
            <Link to="/training">
              <button
                className="px-8 py-4 font-semibold rounded-lg border-2 hover:bg-gray-50 transition-all duration-300"
                style={{ borderColor: '#0B2545', color: '#0B2545' }}
              >
                View Safety Training
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
