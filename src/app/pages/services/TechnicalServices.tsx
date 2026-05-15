import { motion } from 'motion/react';
import { PageHero } from '../../components/PageHero';
import { Wrench, Cog, FileText, Compass, Zap, Database } from 'lucide-react';
import { Link } from 'react-router';

export default function TechnicalServices() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F7F4' }}>
      <PageHero
        title="Technical Services"
        subtitle="Expert engineering solutions and technical support for maritime operations"
        imageUrl="https://images.unsplash.com/photo-1777206078985-4959beeaf00e"
        imageAlt="Container vessel technical operations"
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
              Advanced Technical Solutions
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our technical services team provides specialized engineering expertise and practical solutions
              to ensure your vessels operate at peak efficiency. From condition assessments to complex
              troubleshooting, we deliver comprehensive technical support worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1645865406062-872af9faa81a"
                alt="Vessel technical systems"
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3
                className="text-3xl font-bold mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: '#0B2545' }}
              >
                Engineering Excellence
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our team of marine engineers and naval architects brings decades of combined experience
                across all vessel types and technical systems. We provide practical, cost-effective solutions
                that enhance vessel performance and reliability.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you need pre-purchase surveys, retrofit design, or emergency technical support,
                our experts are available 24/7 to provide immediate assistance and long-term solutions.
              </p>
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
              Our Technical Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive engineering solutions for every technical challenge
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Wrench,
                title: 'Condition Surveys',
                description: 'Detailed pre-purchase, pre-charter, and condition assessment surveys by experienced marine surveyors.',
              },
              {
                icon: Cog,
                title: 'Retrofit & Upgrades',
                description: 'Design and supervision of vessel modifications, equipment upgrades, and performance enhancement projects.',
              },
              {
                icon: FileText,
                title: 'Technical Due Diligence',
                description: 'Comprehensive technical assessments for vessel acquisitions, ensuring informed investment decisions.',
              },
              {
                icon: Compass,
                title: 'Navigation Systems',
                description: 'Installation, calibration, and maintenance of advanced navigation and communication equipment.',
              },
              {
                icon: Zap,
                title: 'Energy Efficiency',
                description: 'Performance optimization studies, fuel efficiency improvements, and emission reduction solutions.',
              },
              {
                icon: Database,
                title: 'Technical Documentation',
                description: 'Development and maintenance of technical manuals, procedures, and digital management systems.',
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
                    style={{ backgroundColor: '#0B2545' }}
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

      {/* Specialized Services */}
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
              Specialized Technical Expertise
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Advanced capabilities for complex technical challenges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Propulsion Systems',
                description: 'Main engine overhauls, shaft alignment, propeller optimization, and hybrid propulsion installations.',
                features: ['Engine diagnostics', 'Performance testing', 'Fuel system optimization', 'Emission control systems'],
              },
              {
                title: 'Electrical & Automation',
                description: 'Power generation systems, automation upgrades, and electrical installations with latest technology.',
                features: ['Generator maintenance', 'Automation systems', 'Power management', 'Control systems'],
              },
              {
                title: 'Hull & Structures',
                description: 'Structural surveys, steel renewal projects, and hull optimization for improved performance.',
                features: ['Thickness gauging', 'Structural analysis', 'Coating surveys', 'Corrosion management'],
              },
              {
                title: 'Safety Systems',
                description: 'Fire detection, lifesaving equipment, and emergency systems ensuring full regulatory compliance.',
                features: ['Fire safety audits', 'LSA inspections', 'Safety equipment', 'Emergency procedures'],
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10"
              >
                <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {service.title}
                </h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#B8860B' }} />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose Our Technical Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading technical expertise backed by proven results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: '30+',
                label: 'Years Experience',
                description: 'Decades of maritime engineering excellence',
              },
              {
                number: '500+',
                label: 'Projects Completed',
                description: 'Successful technical interventions worldwide',
              },
              {
                number: '24/7',
                label: 'Technical Support',
                description: 'Emergency assistance available anytime',
              },
              {
                number: '100%',
                label: 'Quality Assured',
                description: 'ISO certified processes and standards',
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg border-2 hover:shadow-lg transition-all duration-300"
                style={{ borderColor: '#B8860B' }}
              >
                <div className="text-5xl font-bold mb-3" style={{ color: '#0B2545' }}>
                  {stat.number}
                </div>
                <div className="text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: '#1A1A1A' }}>
                  {stat.label}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
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
              Our Technical Service Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic methodology ensuring effective technical solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Analysis',
                description: 'Comprehensive technical assessment and problem identification',
              },
              {
                step: '02',
                title: 'Solution Design',
                description: 'Development of cost-effective technical solutions and implementation plans',
              },
              {
                step: '03',
                title: 'Execution',
                description: 'Professional implementation with quality control and safety oversight',
              },
              {
                step: '04',
                title: 'Validation',
                description: 'Testing, commissioning, and performance verification',
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
                  className="text-6xl font-bold mb-4"
                  style={{ color: '#B8860B', fontFamily: "'Playfair Display', serif" }}
                >
                  {step.step}
                </div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: "'Playfair Display', serif", color: '#0B2545' }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
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
            Need Technical Expertise?
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Connect with our engineering team for expert technical solutions and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button
                className="px-8 py-4 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#0B2545' }}
              >
                Request Technical Support
              </button>
            </Link>
            <Link to="/services">
              <button
                className="px-8 py-4 font-semibold rounded-lg border-2 hover:bg-gray-50 transition-all duration-300"
                style={{ borderColor: '#0B2545', color: '#0B2545' }}
              >
                Explore All Services
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
