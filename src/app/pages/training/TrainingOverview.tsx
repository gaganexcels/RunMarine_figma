import { motion } from 'motion/react';
import { PageHero } from '../../components/PageHero';
import { GraduationCap, Users, Award, TrendingUp, Shield, Anchor, Globe, BookOpen } from 'lucide-react';
import { Link } from 'react-router';

const trainingPrograms = [
  {
    icon: GraduationCap,
    title: 'Training & Development',
    description: 'Comprehensive training programs designed to enhance crew competencies and operational excellence.',
    link: '/training/development',
    color: '#0B2545',
  },
  {
    icon: Users,
    title: 'Recruitment Policy',
    description: 'Strategic recruitment framework ensuring we attract and retain top maritime talent.',
    link: '/training/recruitment-policy',
    color: '#B8860B',
  },
  {
    icon: Shield,
    title: 'Safety Policy',
    description: 'Zero-incident culture through comprehensive safety training and strict adherence to protocols.',
    link: '/training/safety-policy',
    color: '#0B2545',
  },
  {
    icon: Anchor,
    title: 'Environment Policy',
    description: 'Commitment to sustainable maritime operations and environmental protection standards.',
    link: '/training/environment-policy',
    color: '#B8860B',
  },
];

const statistics = [
  { value: '15,000+', label: 'Seafarers Trained', icon: Users },
  { value: '99.8%', label: 'Training Completion Rate', icon: Award },
  { value: '50+', label: 'Training Centers Worldwide', icon: Globe },
  { value: '100+', label: 'Certified Courses', icon: BookOpen },
];

export default function TrainingOverview() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F7F4' }}>
      <PageHero
        title="Training & Development"
        subtitle="Empowering maritime excellence through world-class training and continuous development"
        imageUrl="https://images.unsplash.com/photo-1566995956590-7731f4b389ee"
        imageAlt="Maritime crew training"
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
              Building Maritime Excellence
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our commitment to excellence begins with investing in our people. We provide comprehensive training
              programs that combine industry best practices with cutting-edge technology, ensuring our crew members
              are equipped with the skills and knowledge needed to excel in modern maritime operations.
            </p>
          </motion.div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-8 mb-24">
            {statistics.map((stat, index) => {
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

          {/* Training Programs Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link to={program.link}>
                    <div className="bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full group">
                      <div
                        className="w-20 h-20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: program.color }}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h3
                        className="text-2xl font-bold mb-4"
                        style={{ fontFamily: "'Playfair Display', serif", color: '#1A1A1A' }}
                      >
                        {program.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {program.description}
                      </p>
                      <div className="flex items-center text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300" style={{ color: program.color }}>
                        Explore Details
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
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
              Our Training Approach
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              A holistic methodology that combines theoretical knowledge with practical application
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: 'Comprehensive Curriculum',
                description: 'Industry-leading courses covering all aspects of maritime operations, from basic seamanship to advanced technical skills.',
              },
              {
                icon: TrendingUp,
                title: 'Continuous Development',
                description: 'Ongoing training and upskilling programs to keep our crew at the forefront of maritime innovation.',
              },
              {
                icon: Award,
                title: 'Industry Certifications',
                description: 'STCW-compliant training with recognized certifications from leading maritime authorities worldwide.',
              },
              {
                icon: Shield,
                title: 'Safety-First Culture',
                description: 'Embedded safety protocols and emergency response training in every program we deliver.',
              },
              {
                icon: Globe,
                title: 'Global Standards',
                description: 'Training programs aligned with international regulations and best practices across all maritime sectors.',
              },
              {
                icon: Users,
                title: 'Expert Instructors',
                description: 'Experienced maritime professionals and certified trainers with decades of sea-going experience.',
              },
            ].map((approach, index) => {
              const Icon = approach.icon;
              return (
                <motion.div
                  key={approach.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
                >
                  <div className="w-14 h-14 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: '#B8860B' }}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {approach.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {approach.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training Facilities */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: '#0B2545' }}
              >
                World-Class Training Facilities
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our state-of-the-art training centers are equipped with the latest maritime simulation technology,
                hands-on equipment, and modern learning facilities. We maintain training centers across major
                maritime hubs worldwide, ensuring accessibility for our global workforce.
              </p>
              <ul className="space-y-4">
                {[
                  'Full mission bridge simulators',
                  'Engine room simulators',
                  'GMDSS and communication labs',
                  'Fire fighting and safety equipment training',
                  'Digital learning platforms',
                  'Virtual reality training modules',
                ].map((facility, index) => (
                  <motion.li
                    key={facility}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#B8860B' }} />
                    <span className="text-gray-700">{facility}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1561625101-e8ac2e0fbe11"
                alt="Training facility"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
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
            Join Our Training Programs
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Invest in your maritime career with our industry-leading training and development opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button
                className="px-8 py-4 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#0B2545' }}
              >
                Enroll Now
              </button>
            </Link>
            <Link to="/about">
              <button
                className="px-8 py-4 font-semibold rounded-lg border-2 hover:bg-gray-50 transition-all duration-300"
                style={{ borderColor: '#0B2545', color: '#0B2545' }}
              >
                Learn More
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
