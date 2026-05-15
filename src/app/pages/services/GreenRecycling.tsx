import { motion } from 'motion/react';
import { PageHero } from '../../components/PageHero';
import { Recycle, Leaf, Shield, FileCheck, Scale, Award } from 'lucide-react';
import { Link } from 'react-router';

export default function GreenRecycling() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F7F4' }}>
      <PageHero
        title="Green Recycling"
        subtitle="Environmentally responsible ship recycling adhering to international standards"
        imageUrl="https://images.unsplash.com/photo-1645865406062-872af9faa81a"
        imageAlt="Ship recycling operations"
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
              Sustainable Ship Recycling
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We provide environmentally sound and socially responsible ship recycling services that comply
              with the Hong Kong Convention, EU Ship Recycling Regulation, and all international standards.
              Our commitment to green recycling ensures maximum value recovery while protecting workers and
              the environment.
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
                alt="Ship recycling facility"
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
                Responsible End-of-Life Solutions
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Ship recycling represents both an environmental responsibility and a commercial opportunity.
                We work exclusively with approved green recycling facilities that meet the highest
                international standards for worker safety, environmental protection, and material recovery.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our comprehensive approach ensures full regulatory compliance, maximizes scrap value, and
                provides complete transparency throughout the recycling process from initial assessment to
                final documentation.
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
              Our Green Recycling Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support for environmentally responsible ship recycling
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Recycle,
                title: 'Recycling Facility Selection',
                description: 'Identification and vetting of approved green recycling facilities meeting all international environmental and safety standards.',
              },
              {
                icon: Leaf,
                title: 'Environmental Compliance',
                description: 'Full compliance with Hong Kong Convention, EU SRR, and Basel Convention requirements for hazardous materials management.',
              },
              {
                icon: Shield,
                title: 'Safety Management',
                description: 'Ensuring worker safety through approved facilities with proper equipment, training, and safety procedures.',
              },
              {
                icon: FileCheck,
                title: 'IHM Preparation',
                description: 'Development and certification of Inventory of Hazardous Materials in compliance with regulatory requirements.',
              },
              {
                icon: Scale,
                title: 'Price Negotiation',
                description: 'Expert negotiation of scrap prices ensuring maximum value recovery based on current market conditions.',
              },
              {
                icon: Award,
                title: 'Documentation Support',
                description: 'Complete handling of all required documentation, certificates, and regulatory approvals throughout the process.',
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

      {/* Compliance Standards */}
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
              Compliance & Standards
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Full adherence to international regulations and best practices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Hong Kong Convention',
                description: 'Full compliance with the Hong Kong International Convention for the Safe and Environmentally Sound Recycling of Ships.',
                points: ['Ship Recycling Plan', 'Facility Authorization', 'Safe-for-hot work certificate', 'Final statement of compliance'],
              },
              {
                title: 'EU Ship Recycling Regulation',
                description: 'Adherence to EU Regulation 1257/2013 for vessels flying EU flags or calling at EU ports.',
                points: ['EU-approved facilities', 'IHM Part I, II, III', 'Ready for recycling certificate', 'Statement of completion'],
              },
              {
                title: 'Basel Convention',
                description: 'Compliance with Basel Convention on transboundary movements of hazardous wastes.',
                points: ['Prior informed consent', 'Waste classification', 'Transboundary notification', 'Movement documentation'],
              },
              {
                title: 'International Standards',
                description: 'Meeting ILO, IMO, and industry best practices for worker safety and environmental protection.',
                points: ['Worker safety protocols', 'PPE requirements', 'Waste management plans', 'Emergency procedures'],
              },
            ].map((standard, index) => (
              <motion.div
                key={standard.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10"
              >
                <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {standard.title}
                </h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  {standard.description}
                </p>
                <ul className="space-y-2">
                  {standard.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: '#B8860B' }} />
                      <span className="text-white/80 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
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
              Why Choose Our Green Recycling Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expertise and commitment to responsible ship recycling
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: '100%',
                label: 'Green Compliance',
                description: 'All facilities meet international environmental standards',
              },
              {
                number: '50+',
                label: 'Vessels Recycled',
                description: 'Successfully managed green recycling projects',
              },
              {
                number: '15+',
                label: 'Approved Yards',
                description: 'Global network of certified recycling facilities',
              },
              {
                number: 'Zero',
                label: 'Environmental Incidents',
                description: 'Perfect safety and environmental record',
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

      {/* Our Process */}
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
              Our Recycling Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach ensuring responsible and compliant recycling
            </p>
          </motion.div>

          <div className="grid md:grid-cols-6 gap-6">
            {[
              {
                step: '01',
                title: 'Initial Assessment',
                description: 'Vessel evaluation and IHM preparation',
              },
              {
                step: '02',
                title: 'Facility Selection',
                description: 'Identifying suitable approved recycling yards',
              },
              {
                step: '03',
                title: 'Price Negotiation',
                description: 'Securing best market rates',
              },
              {
                step: '04',
                title: 'Documentation',
                description: 'Completing all regulatory requirements',
              },
              {
                step: '05',
                title: 'Delivery',
                description: 'Safe delivery to recycling facility',
              },
              {
                step: '06',
                title: 'Completion',
                description: 'Final documentation and closure',
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
                  className="text-4xl font-bold mb-3"
                  style={{ color: '#B8860B', fontFamily: "'Playfair Display', serif" }}
                >
                  {step.step}
                </div>
                <h3
                  className="text-lg font-bold mb-2"
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

      {/* Environmental Commitment */}
      <section className="py-24 px-6" style={{ backgroundColor: '#F8F7F4' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 text-center"
              style={{ fontFamily: "'Playfair Display', serif", color: '#0B2545' }}
            >
              Our Environmental Commitment
            </h2>
            <div className="bg-white p-10 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We believe that ship recycling must be conducted in an environmentally sound and socially
                responsible manner. Our commitment goes beyond regulatory compliance to ensure genuine
                environmental protection and worker safety.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                All our partner recycling facilities are regularly audited and must demonstrate:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Proper handling and disposal of hazardous materials',
                  'Safe working conditions with appropriate protective equipment',
                  'Environmental management systems preventing pollution',
                  'Waste segregation and recycling maximization',
                  'Worker training and health monitoring programs',
                  'Emergency response capabilities and procedures',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#B8860B' }} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through our green recycling services, vessel owners can fulfill their environmental
                responsibilities while achieving fair market value for their assets.
              </p>
            </div>
          </motion.div>
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
            Planning Vessel Recycling?
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Let us guide you through a responsible, compliant, and profitable recycling process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button
                className="px-8 py-4 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#0B2545' }}
              >
                Request Recycling Proposal
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
