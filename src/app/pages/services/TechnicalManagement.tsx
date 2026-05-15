import { motion } from 'motion/react';
import { PageHero } from '../../components/PageHero';
import { Ship, ClipboardCheck, Wrench, BarChart, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router';

export default function TechnicalManagement() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F7F4' }}>
      <PageHero
        title="Technical Management"
        subtitle="Comprehensive vessel management for optimal performance and compliance"
        imageUrl="https://images.unsplash.com/photo-1645865406062-872af9faa81a"
        imageAlt="Cargo ship at sea"
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
              Excellence in Technical Management
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our technical management services ensure your vessels operate at peak efficiency while maintaining
              full regulatory compliance. We combine decades of maritime expertise with cutting-edge technology
              to deliver comprehensive vessel management solutions.
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
                src="https://images.unsplash.com/photo-1769234424931-7d2d05ba72ab"
                alt="Cargo ship on ocean"
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
                Comprehensive Vessel Oversight
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We provide end-to-end technical management services that cover every aspect of vessel operations,
                from routine maintenance to major repairs, ensuring your fleet maintains the highest standards
                of safety and performance.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our dedicated team of experienced marine engineers and technical superintendents work around
                the clock to monitor vessel performance, coordinate maintenance schedules, and ensure compliance
                with all international maritime regulations.
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
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technical management services tailored to your operational needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Ship,
                title: 'Planned Maintenance System',
                description: 'Advanced PMS implementation ensuring all equipment is maintained according to manufacturer specifications and regulatory requirements.',
              },
              {
                icon: ClipboardCheck,
                title: 'Regulatory Compliance',
                description: 'Full compliance with IMO, flag state, and class requirements including ISM, ISPS, MLC, and environmental regulations.',
              },
              {
                icon: Wrench,
                title: 'Dry-Docking Management',
                description: 'Complete dry-dock planning and supervision ensuring timely completion within budget while meeting all survey requirements.',
              },
              {
                icon: BarChart,
                title: 'Performance Monitoring',
                description: 'Real-time vessel performance tracking and analysis to optimize fuel efficiency and operational costs.',
              },
              {
                icon: Shield,
                title: 'Safety Management',
                description: 'Comprehensive safety management systems ensuring crew safety and environmental protection at all times.',
              },
              {
                icon: Globe,
                title: 'Global Technical Support',
                description: '24/7 technical support worldwide with rapid response capabilities for any operational emergencies.',
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
              Why Choose Our Technical Management
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Industry-leading expertise and commitment to operational excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Experienced Team',
                description: 'Our technical superintendents average over 20 years of seagoing and shore-based experience across various vessel types.',
                number: '20+',
                label: 'Years Experience',
              },
              {
                title: 'Cost Optimization',
                description: 'Proven track record of reducing operational costs through efficient maintenance planning and strategic procurement.',
                number: '15%',
                label: 'Average Savings',
              },
              {
                title: 'Safety Record',
                description: 'Outstanding safety performance with zero major incidents across our managed fleet in the past five years.',
                number: '100%',
                label: 'Safety Compliance',
              },
              {
                title: 'Global Coverage',
                description: 'Worldwide network of vetted service providers and workshops ensuring quality support at any port.',
                number: '500+',
                label: 'Global Ports',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10"
              >
                <div className="flex items-start gap-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2" style={{ color: '#B8860B' }}>
                      {item.number}
                    </div>
                    <div className="text-white/60 text-sm">{item.label}</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {item.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
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
              Our Management Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic methodology ensuring consistent excellence across all managed vessels
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'Comprehensive evaluation of vessel condition, systems, and operational requirements.',
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Strategic development of maintenance schedules, budget forecasts, and compliance roadmaps.',
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Expert execution of planned maintenance, repairs, and improvements with quality oversight.',
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Continuous monitoring and refinement to enhance performance and reduce operational costs.',
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
      <section className="py-24 px-6" style={{ backgroundColor: '#FFFFFF' }}>
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
            Ready to Enhance Your Fleet Management?
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Let our experienced technical team take care of your vessels while you focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button
                className="px-8 py-4 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#0B2545' }}
              >
                Request a Consultation
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
