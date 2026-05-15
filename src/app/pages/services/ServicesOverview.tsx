import { motion } from 'motion/react';
import { PageHero } from '../../components/PageHero';
import { Ship, Users, Wrench, Anchor, Recycle, Package, DollarSign, Settings } from 'lucide-react';
import { Link } from 'react-router';

const services = [
  {
    icon: Ship,
    title: 'Technical Management',
    description: 'Comprehensive vessel management ensuring optimal performance, compliance, and operational excellence.',
    link: '/services/technical-management',
    color: '#0B2545',
  },
  {
    icon: Users,
    title: 'Crew Management',
    description: 'Professional crew recruitment, training, and management services for vessels worldwide.',
    link: '/services/crew-management',
    color: '#B8860B',
  },
  {
    icon: Wrench,
    title: 'Technical Services',
    description: 'Expert technical support, maintenance planning, and engineering solutions for your fleet.',
    link: '/services/technical-services',
    color: '#0B2545',
  },
  {
    icon: Anchor,
    title: 'Chartering',
    description: 'Strategic chartering solutions connecting shipowners with reliable charterers globally.',
    link: '/services/chartering',
    color: '#B8860B',
  },
  {
    icon: Recycle,
    title: 'Green Recycling',
    description: 'Environmentally responsible ship recycling services adhering to international regulations.',
    link: '/services/green-recycling',
    color: '#0B2545',
  },
  {
    icon: Package,
    title: 'Marine Spares',
    description: 'Reliable procurement and delivery of quality marine spare parts and equipment.',
    link: '/services/marine-spares',
    color: '#B8860B',
  },
  {
    icon: DollarSign,
    title: 'Payroll & Tax',
    description: 'Comprehensive payroll and tax management services for maritime operations.',
    link: '/services/payroll-tax',
    color: '#0B2545',
  },
  {
    icon: Settings,
    title: 'Consulting Services',
    description: 'Strategic maritime consulting for operational optimization and business growth.',
    link: '/services/consulting',
    color: '#B8860B',
  },
];

export default function ServicesOverview() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F7F4' }}>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive maritime solutions tailored to your vessel management needs"
        imageUrl="https://images.unsplash.com/photo-1645865406062-872af9faa81a"
        imageAlt="Cargo ship at sea"
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
              Excellence in Maritime Management
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We provide end-to-end maritime solutions that ensure operational efficiency, regulatory compliance,
              and sustainable growth. Our integrated services are designed to meet the evolving needs of modern
              shipping operations.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link to={service.link}>
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full group">
                      <div
                        className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: service.color }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3
                        className="text-2xl font-bold mb-4"
                        style={{ fontFamily: "'Playfair Display', serif", color: '#1A1A1A' }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="flex items-center text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300" style={{ color: service.color }}>
                        Learn More
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

      {/* Why Choose Our Services */}
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
              Why Choose Our Services
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Decades of maritime expertise combined with modern technology and unwavering commitment to excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Integrated Solutions',
                description: 'Seamless coordination across all service areas for maximum efficiency and cost savings.',
              },
              {
                title: 'Global Network',
                description: 'Worldwide presence with local expertise ensuring support wherever your vessels operate.',
              },
              {
                title: 'Innovation-Driven',
                description: 'Leveraging cutting-edge technology and industry best practices for optimal results.',
              },
              {
                title: 'Regulatory Expertise',
                description: 'Deep understanding of international maritime regulations and compliance requirements.',
              },
              {
                title: '24/7 Support',
                description: 'Round-the-clock availability ensuring immediate response to any operational needs.',
              },
              {
                title: 'Sustainable Practices',
                description: 'Commitment to environmental responsibility and sustainable maritime operations.',
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#B8860B' }}>
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {benefit.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {benefit.description}
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
            Ready to Optimize Your Fleet?
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Discover how our integrated maritime services can enhance your operational efficiency
            and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button
                className="px-8 py-4 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#0B2545' }}
              >
                Get Started
              </button>
            </Link>
            <Link to="/about">
              <button
                className="px-8 py-4 font-semibold rounded-lg border-2 hover:bg-gray-50 transition-all duration-300"
                style={{ borderColor: '#0B2545', color: '#0B2545' }}
              >
                Learn More About Us
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
