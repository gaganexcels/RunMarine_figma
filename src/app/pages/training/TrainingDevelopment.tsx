import { motion } from 'motion/react';
import { PageHero } from '../../components/PageHero';
import { GraduationCap, Award, TrendingUp, BookOpen, Users, Target, CheckCircle, Star } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

const trainingCategories = [
  {
    icon: GraduationCap,
    title: 'Basic Training Courses',
    courses: [
      'Basic Safety Training (BST)',
      'Proficiency in Survival Craft and Rescue Boats (PSCRB)',
      'Advanced Fire Fighting (AFF)',
      'Medical First Aid / Medical Care',
      'Ship Security Officer (SSO)',
      'Security Awareness Training',
    ],
    color: '#0B2545',
  },
  {
    icon: Target,
    title: 'Advanced Technical Training',
    courses: [
      'Bridge Resource Management (BRM)',
      'Engine Resource Management (ERM)',
      'Electronic Chart Display and Information System (ECDIS)',
      'Global Maritime Distress and Safety System (GMDSS)',
      'Dynamic Positioning (DP)',
      'Tanker Safety and Specialized Operations',
    ],
    color: '#B8860B',
  },
  {
    icon: Award,
    title: 'Leadership & Management',
    courses: [
      'Maritime Leadership and Team Working',
      'Crisis Management and Human Behavior',
      'Maritime Resource Management',
      'Voyage Planning and Navigation',
      'Passenger Ship Safety Management',
      'Environmental Awareness Training',
    ],
    color: '#0B2545',
  },
  {
    icon: BookOpen,
    title: 'Specialized Certifications',
    courses: [
      'Chemical Tanker Operations',
      'Liquefied Gas Tanker Operations',
      'Oil Tanker Operations',
      'Offshore Installation Manager (OIM)',
      'Ballast Water Management',
      'Cyber Security in Maritime',
    ],
    color: '#B8860B',
  },
];

const careerPath = [
  {
    level: 'Entry Level',
    description: 'Foundation training and basic certifications',
    duration: '3-6 months',
  },
  {
    level: 'Junior Officer',
    description: 'Watchkeeping and operational training',
    duration: '12-18 months',
  },
  {
    level: 'Senior Officer',
    description: 'Advanced technical and management skills',
    duration: '2-3 years',
  },
  {
    level: 'Master/Chief',
    description: 'Leadership and strategic management',
    duration: 'Continuous development',
  },
];

export default function TrainingDevelopment() {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F7F4' }}>
      <PageHero
        title="Training & Development Programs"
        subtitle="Comprehensive maritime education pathways designed to advance your career"
        imageUrl="https://images.unsplash.com/photo-1774485506687-853a4d32d5d2"
        imageAlt="Maritime training in progress"
        height="medium"
      />

      {/* Overview */}
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
              Invest in Your Future
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our comprehensive training and development programs are designed to build competency, enhance safety,
              and advance careers in the maritime industry. We offer STCW-compliant courses and specialized training
              that meet international standards and industry requirements.
            </p>
          </motion.div>

          {/* Training Categories */}
          <div className="space-y-6">
            {trainingCategories.map((category, index) => {
              const Icon = category.icon;
              const isExpanded = expandedCategory === index;

              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedCategory(isExpanded ? null : index)}
                    className="w-full p-8 flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-6">
                      <div
                        className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: category.color }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-left">
                        <h3
                          className="text-2xl font-bold mb-2"
                          style={{ fontFamily: "'Playfair Display', serif", color: '#1A1A1A' }}
                        >
                          {category.title}
                        </h3>
                        <p className="text-gray-600">
                          {category.courses.length} specialized courses available
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-6 h-6" style={{ color: category.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <div className="p-8 pt-0 border-t border-gray-100">
                      <div className="grid md:grid-cols-2 gap-4 mt-6">
                        {category.courses.map((course, courseIndex) => (
                          <motion.div
                            key={course}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: courseIndex * 0.05 }}
                            className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                          >
                            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: category.color }} />
                            <span className="text-gray-700">{course}</span>
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

      {/* Career Progression */}
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
              Career Progression Path
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Structured development pathway from entry-level positions to senior maritime leadership
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {careerPath.map((stage, index) => (
              <motion.div
                key={stage.level}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg h-full">
                  <div className="w-12 h-12 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-white" style={{ backgroundColor: '#B8860B' }}>
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {stage.level}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-center mb-4">
                    {stage.description}
                  </p>
                  <div className="text-center">
                    <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: '#0B2545' }}>
                      {stage.duration}
                    </span>
                  </div>
                </div>
                {index < careerPath.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-8 h-8 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Benefits */}
      <section className="py-24 px-6">
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
              Why Train With Us
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Industry-leading training facilities and expert instruction for maritime excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: 'Accredited Programs',
                description: 'All courses are internationally recognized and STCW-compliant, ensuring global career opportunities.',
              },
              {
                icon: Users,
                title: 'Expert Instructors',
                description: 'Learn from experienced maritime professionals with decades of real-world sea-going experience.',
              },
              {
                icon: TrendingUp,
                title: 'Career Advancement',
                description: 'Structured pathways for progression with clear milestones and continuous development support.',
              },
              {
                icon: Target,
                title: 'Hands-On Training',
                description: 'State-of-the-art simulators and practical exercises ensure real-world readiness.',
              },
              {
                icon: Award,
                title: 'Industry Recognition',
                description: 'Certificates and qualifications valued by leading maritime companies worldwide.',
              },
              {
                icon: BookOpen,
                title: 'Flexible Learning',
                description: 'Multiple training formats including classroom, online, and blended learning options.',
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
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: index % 2 === 0 ? '#0B2545' : '#B8860B' }}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: '#1A1A1A' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
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
            Start Your Training Journey
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Discover the training programs that will take your maritime career to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button
                className="px-8 py-4 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#0B2545' }}
              >
                Register for Training
              </button>
            </Link>
            <Link to="/training">
              <button
                className="px-8 py-4 font-semibold rounded-lg border-2 hover:bg-gray-50 transition-all duration-300"
                style={{ borderColor: '#0B2545', color: '#0B2545' }}
              >
                View All Programs
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
