import { motion } from 'motion/react';
import { PageHero } from '../../components/PageHero';
import { Users, Target, Heart, Globe, Award, TrendingUp, CheckCircle, Shield } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

const policyPrinciples = [
  {
    icon: Target,
    title: 'Merit-Based Selection',
    description: 'We recruit based on qualifications, competencies, and demonstrated abilities, ensuring the best talent joins our teams.',
  },
  {
    icon: Globe,
    title: 'Equal Opportunity',
    description: 'We provide equal employment opportunities regardless of race, religion, gender, age, or nationality.',
  },
  {
    icon: Heart,
    title: 'Fair Treatment',
    description: 'All candidates are treated with dignity and respect throughout the recruitment process.',
  },
  {
    icon: Shield,
    title: 'Compliance & Ethics',
    description: 'Adherence to international maritime labor standards and local employment regulations.',
  },
];

const recruitmentStages = [
  {
    stage: 'Application Review',
    description: 'Comprehensive evaluation of qualifications, certifications, and experience',
    details: [
      'Document verification',
      'Certificate authentication',
      'Experience validation',
      'Reference checks',
    ],
  },
  {
    stage: 'Assessment & Testing',
    description: 'Rigorous evaluation of technical competencies and professional skills',
    details: [
      'Technical assessments',
      'Competency evaluations',
      'Medical examinations',
      'Safety awareness tests',
    ],
  },
  {
    stage: 'Interviews',
    description: 'In-depth discussions to assess fit and potential',
    details: [
      'Behavioral interviews',
      'Technical interviews',
      'Cultural fit assessment',
      'Career aspiration discussion',
    ],
  },
  {
    stage: 'Onboarding',
    description: 'Comprehensive integration into our maritime family',
    details: [
      'Contract finalization',
      'Company orientation',
      'Pre-joining training',
      'Assignment preparation',
    ],
  },
];

const eligibilityCriteria = [
  {
    category: 'Educational Qualifications',
    items: [
      'Recognized maritime education credentials',
      'STCW certifications as applicable to rank',
      'Specialized training certificates',
      'Continuous professional development records',
    ],
  },
  {
    category: 'Professional Experience',
    items: [
      'Relevant sea service on similar vessel types',
      'Progressive career advancement',
      'Demonstrable technical competence',
      'Strong safety track record',
    ],
  },
  {
    category: 'Medical & Physical Fitness',
    items: [
      'Valid seafarer medical certificate',
      'Physical fitness for maritime duties',
      'No medical restrictions for sea service',
      'Regular health monitoring compliance',
    ],
  },
  {
    category: 'Personal Attributes',
    items: [
      'Strong communication skills',
      'Team collaboration abilities',
      'Adaptability and resilience',
      'Professional conduct and integrity',
    ],
  },
];

export default function RecruitmentPolicy() {
  const [expandedPolicy, setExpandedPolicy] = useState<number | null>(0);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F7F4' }}>
      <PageHero
        title="Recruitment Policy"
        subtitle="Building excellence through fair, transparent, and merit-based recruitment practices"
        imageUrl="https://images.unsplash.com/photo-1737735509004-cfc071da6254"
        imageAlt="Professional maritime recruitment"
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
              Our Commitment to Excellence
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our recruitment policy is founded on the principles of fairness, transparency, and merit-based selection.
              We are committed to attracting, selecting, and retaining the best maritime professionals while ensuring
              equal opportunities for all qualified candidates.
            </p>
          </motion.div>

          {/* Core Principles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {policyPrinciples.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: index % 2 === 0 ? '#0B2545' : '#B8860B' }}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ fontFamily: "'Playfair Display', serif", color: '#1A1A1A' }}
                  >
                    {principle.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {principle.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Recruitment Process */}
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
              Recruitment Process
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {recruitmentStages.map((stage, index) => (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white" style={{ backgroundColor: '#B8860B' }}>
                    {index + 1}
                  </div>
                  <h3
                    className="text-2xl font-bold"
                    style={{ fontFamily: "'Playfair Display', serif", color: '#1A1A1A' }}
                  >
                    {stage.stage}
                  </h3>
                </div>
                <p className="text-gray-700 mb-6">
                  {stage.description}
                </p>
                <div className="space-y-3">
                  {stage.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#0B2545' }} />
                      <span className="text-gray-600">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
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
              Eligibility Criteria
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive requirements ensuring the highest standards of maritime professionalism
            </p>
          </motion.div>

          <div className="space-y-6">
            {eligibilityCriteria.map((criteria, index) => {
              const isExpanded = expandedPolicy === index;

              return (
                <motion.div
                  key={criteria.category}
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
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-12 rounded-full" style={{ backgroundColor: '#B8860B' }} />
                      <h3
                        className="text-2xl font-bold"
                        style={{ fontFamily: "'Playfair Display', serif", color: '#1A1A1A' }}
                      >
                        {criteria.category}
                      </h3>
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
                      <div className="space-y-3 mt-6">
                        {criteria.items.map((item, itemIndex) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                            className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                          >
                            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#B8860B' }} />
                            <span className="text-gray-700">{item}</span>
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

      {/* Our Values */}
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
              What We Offer
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Join a company that values your growth, well-being, and professional development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Career Growth',
                description: 'Clear progression pathways with opportunities for advancement and skill development.',
              },
              {
                icon: Award,
                title: 'Competitive Benefits',
                description: 'Industry-leading compensation packages, insurance coverage, and welfare programs.',
              },
              {
                icon: Users,
                title: 'Supportive Environment',
                description: 'Collaborative culture with mentorship programs and continuous learning opportunities.',
              },
              {
                icon: Globe,
                title: 'Global Opportunities',
                description: 'Work on diverse vessel types across international routes and maritime operations.',
              },
              {
                icon: Shield,
                title: 'Job Security',
                description: 'Stable employment with a reputable company committed to crew welfare and retention.',
              },
              {
                icon: Heart,
                title: 'Work-Life Balance',
                description: 'Fair rotation schedules, leave policies, and support for family well-being.',
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
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
                    {benefit.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {benefit.description}
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
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Start your journey with a company that values excellence, integrity, and professional growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button
                className="px-8 py-4 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#0B2545' }}
              >
                Apply Now
              </button>
            </Link>
            <Link to="/training">
              <button
                className="px-8 py-4 font-semibold rounded-lg border-2 hover:bg-gray-50 transition-all duration-300"
                style={{ borderColor: '#0B2545', color: '#0B2545' }}
              >
                View Training Programs
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
