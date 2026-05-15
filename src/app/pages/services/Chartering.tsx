import { motion } from 'motion/react';
import { PageHero } from '../../components/PageHero';
import { Anchor, TrendingUp, FileSearch, Globe, Handshake, Shield } from 'lucide-react';
import { Link } from 'react-router';

export default function Chartering() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F7F4' }}>
      <PageHero
        title="Chartering Services"
        subtitle="Strategic vessel chartering solutions connecting shipowners with global markets"
        imageUrl="https://images.unsplash.com/photo-1769234424931-7d2d05ba72ab"
        imageAlt="Cargo ship operations"
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
              Your Trusted Chartering Partner
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We provide comprehensive chartering services that maximize vessel utilization and revenue
              potential. Our deep market knowledge, extensive network, and commitment to transparency
              ensure optimal chartering solutions for both shipowners and charterers.
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
                Market Intelligence & Expertise
            </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our chartering team combines decades of shipping market experience with real-time market
                intelligence to secure the best terms for your vessels. We understand market cycles,
                regional dynamics, and cargo flows across all major trade routes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you're seeking time charter employment, voyage fixtures, or bareboat arrangements,
                we leverage our global network to connect you with reliable counterparties and negotiate
                favorable terms.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1777206078985-4959beeaf00e"
                alt="Container vessel at sea"
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chartering Services */}
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
              Our Chartering Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive chartering solutions for all vessel types and charter arrangements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Anchor,
                title: 'Time Charter',
                description: 'Long-term charter arrangements providing stable revenue streams and operational flexibility for vessel owners.',
              },
              {
                icon: TrendingUp,
                title: 'Voyage Charter',
                description: 'Single voyage fixtures optimized for current market conditions and cargo-specific requirements.',
              },
              {
                icon: FileSearch,
                title: 'Bareboat Charter',
                description: 'Bareboat charter arrangements with comprehensive due diligence and charter party negotiation support.',
              },
              {
                icon: Globe,
                title: 'Market Analysis',
                description: 'Regular market reports, freight rate analysis, and strategic positioning advice for optimal charter timing.',
              },
              {
                icon: Handshake,
                title: 'Charter Negotiation',
                description: 'Expert negotiation of charter party terms ensuring balanced agreements and risk mitigation.',
              },
              {
                icon: Shield,
                title: 'Contract Management',
                description: 'Professional charter party administration, claims handling, and dispute resolution support.',
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

      {/* Vessel Types */}
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
              Vessel Types We Handle
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Expertise across all major vessel segments and trade routes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                type: 'Bulk Carriers',
                description: 'Handysize to Capesize vessels for dry bulk commodities',
                sizes: 'Handysize, Supramax, Panamax, Capesize',
              },
              {
                type: 'Container Vessels',
                description: 'Feeder to Post-Panamax container ship chartering',
                sizes: 'Feeder, Panamax, Post-Panamax',
              },
              {
                type: 'Tankers',
                description: 'Product and chemical tankers across all sizes',
                sizes: 'Coastal, MR, LR1, LR2',
              },
              {
                type: 'General Cargo',
                description: 'Multi-purpose and project cargo vessels',
                sizes: 'Geared, Heavy-lift, MPP',
              },
            ].map((vessel, index) => (
              <motion.div
                key={vessel.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10"
              >
                <h3 className="text-2xl font-bold mb-3 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {vessel.type}
                </h3>
                <p className="text-white/70 leading-relaxed mb-4">
                  {vessel.description}
                </p>
                <div className="text-sm" style={{ color: '#B8860B' }}>
                  {vessel.sizes}
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
              Why Choose Our Chartering Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven track record in securing optimal charter terms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Global Network',
                description: 'Extensive relationships with major charterers, operators, and traders worldwide ensuring access to the best opportunities.',
                number: '500+',
                label: 'Trusted Partners',
              },
              {
                title: 'Market Expertise',
                description: 'Deep understanding of freight markets, trade flows, and regional dynamics enabling strategic decision-making.',
                number: '25+',
                label: 'Years Experience',
              },
              {
                title: 'Fast Execution',
                description: 'Quick response times and efficient negotiation processes ensuring you never miss market opportunities.',
                number: '48hrs',
                label: 'Average Response',
              },
              {
                title: 'Transparent Service',
                description: 'Clear communication, honest advice, and full transparency throughout the chartering process.',
                number: '100%',
                label: 'Client Satisfaction',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg border-2 hover:shadow-xl transition-all duration-300"
                style={{ borderColor: '#B8860B' }}
              >
                <div className="flex items-start gap-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2" style={{ color: '#0B2545' }}>
                      {item.number}
                    </div>
                    <div className="text-gray-500 text-sm">{item.label}</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: '#1A1A1A' }}>
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
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
              Our Chartering Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology ensuring successful charter fixtures
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: '01',
                title: 'Requirement Analysis',
                description: 'Understanding your vessel specifications and charter preferences',
              },
              {
                step: '02',
                title: 'Market Research',
                description: 'Identifying optimal opportunities based on current market conditions',
              },
              {
                step: '03',
                title: 'Negotiation',
                description: 'Expert negotiation of charter party terms and conditions',
              },
              {
                step: '04',
                title: 'Documentation',
                description: 'Preparation and execution of comprehensive charter agreements',
              },
              {
                step: '05',
                title: 'Management',
                description: 'Ongoing support throughout the charter period',
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
            Ready to Charter Your Vessel?
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Let our experienced chartering team connect you with the right opportunities and secure optimal terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button
                className="px-8 py-4 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#0B2545' }}
              >
                Discuss Chartering Options
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
