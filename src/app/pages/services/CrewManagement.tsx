import { motion } from 'motion/react';
import { PageHero } from '../../components/PageHero';
import { Users, GraduationCap, Shield, Globe, Heart, Award } from 'lucide-react';
import { Link } from 'react-router';

export default function CrewManagement() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F7F4' }}>
      <PageHero
        title="Crew Management"
        subtitle="Professional seafarers for safe and efficient vessel operations"
        imageUrl="https://images.unsplash.com/photo-1776661616822-ba34fe4e5638"
        imageAlt="Crew operations on vessel"
        height="medium"
      />

      {/* Overview Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: '#0B2545' }}
            >
              Your Trusted Crew Management Partner
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We provide comprehensive crew management services that ensure your vessels are staffed with highly
              qualified, motivated, and well-trained seafarers. Our commitment to excellence in crew welfare,
              training, and compliance sets us apart in the maritime industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3
                className="text-3xl font-bold mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: '#0B2545' }}
              >
                Human Capital Excellence
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our crew management philosophy centers on recognizing seafarers as the most valuable asset in
                maritime operations. We invest in their professional development, ensure their wellbeing, and
                create pathways for career advancement.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With a global network of recruitment offices and training facilities, we maintain a pool of
                over 5,000 qualified seafarers across all ranks and vessel types, ready to join your fleet
                at short notice.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1767873306288-adb22b6dff85"
                alt="Crew handling operations"
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 px-6" style={{ backgroundColor: '#FFFFFF' }}>
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
              Comprehensive Crew Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end crew management solutions for every aspect of seafarer employment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Recruitment & Selection',
                description: 'Rigorous screening and selection process ensuring only the most qualified and experienced seafarers join your vessels.',
              },
              {
                icon: GraduationCap,
                title: 'Training & Development',
                description: 'Comprehensive training programs including STCW compliance, specialized courses, and continuous professional development.',
              },
              {
                icon: Shield,
                title: 'Certification Management',
                description: 'Complete management of all seafarer certificates, licenses, and medical fitness documentation with proactive renewal tracking.',
              },
              {
                icon: Globe,
                title: 'Travel & Logistics',
                description: 'Seamless crew change coordination with optimized travel arrangements and visa processing for all nationalities.',
              },
              {
                icon: Heart,
                title: 'Welfare & Support',
                description: 'Dedicated welfare programs ensuring crew wellbeing, family support, and 24/7 assistance for seafarers at sea.',
              },
              {
                icon: Award,
                title: 'Performance Management',
                description: 'Regular performance evaluations, career planning, and recognition programs to motivate and retain top talent.',
              },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div
                    className="w-16 h-16 rounded-lg flex items-center justify-center mb-6"
                    style={{ backgroundColor: '#B8860B' }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-4"
                    style={{ fontFamily: "'Playfair Display', serif", color: '#1A1A1A' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose Our Crew Management
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Industry-leading retention rates and crew satisfaction scores
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '5,000+',
                label: 'Qualified Seafarers',
                description: 'Diverse pool of experienced professionals across all ranks',
              },
              {
                number: '95%',
                label: 'Retention Rate',
                description: 'Industry-leading crew retention through excellent welfare',
              },
              {
                number: '24/7',
                label: 'Support Available',
                description: 'Round-the-clock assistance for crew and vessel needs',
              },
              {
                number: '100%',
                label: 'MLC Compliant',
                description: 'Full compliance with Maritime Labour Convention standards',
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10"
              >
                <div className="text-5xl font-bold mb-3" style={{ color: '#B8860B' }}>
                  {stat.number}
                </div>
                <div className="text-xl font-bold mb-3 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {stat.label}
                </div>
                <p className="text-white/70 leading-relaxed text-sm">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
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
              Our Crew Management Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology ensuring the right people in the right positions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'Understand your vessel requirements and crew specifications',
              },
              {
                step: '02',
                title: 'Recruitment',
                description: 'Source and screen qualified candidates from our global network',
              },
              {
                step: '03',
                title: 'Training',
                description: 'Ensure all certifications and vessel-specific training are complete',
              },
              {
                step: '04',
                title: 'Deployment',
                description: 'Coordinate seamless crew changes and onboarding',
              },
              {
                step: '05',
                title: 'Management',
                description: 'Ongoing support, performance monitoring, and welfare oversight',
              },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className="text-4xl font-bold mb-4"
                  style={{ color: '#B8860B', fontFamily: "'Playfair Display', serif" }}
                >
                  {step.step}
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "'Playfair Display', serif", color: '#0B2545' }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Crew Nationalities */}
      <section className="py-24 px-6" style={{ backgroundColor: '#FFFFFF' }}>
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
              Global Talent Network
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              We recruit qualified seafarers from leading maritime nations worldwide, ensuring cultural
              diversity and the highest professional standards.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'European Officers',
                description: 'Experienced deck and engine officers from EU maritime academies with international voyage experience.',
              },
              {
                title: 'Asian Crew',
                description: 'Skilled ratings and junior officers from Philippines, India, Myanmar, and Indonesia with excellent track records.',
              },
              {
                title: 'Specialized Personnel',
                description: 'Technical specialists, DPOs, and other certified personnel for specialized vessel operations.',
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-lg border-2 hover:shadow-lg transition-all duration-300"
                style={{ borderColor: '#B8860B' }}
              >
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: "'Playfair Display', serif", color: '#0B2545' }}
                >
                  {category.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
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
            Build Your Crew With Confidence
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Partner with us to ensure your vessels are staffed with professional, motivated, and well-trained seafarers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button
                className="px-8 py-4 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#0B2545' }}
              >
                Request Crew Solution
              </button>
            </Link>
            <Link to="/services">
              <button
                className="px-8 py-4 font-semibold rounded-lg border-2 hover:bg-gray-50 transition-all duration-300"
                style={{ borderColor: '#0B2545', color: '#0B2545' }}
              >
                View All Services
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
