import { motion } from 'motion/react';
import { PageHero } from '../../components/PageHero';
import { Package, Search, Clock, Globe, Shield, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';

export default function MarineSpares() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F7F4' }}>
      <PageHero
        title="Marine Spares"
        subtitle="Reliable procurement and delivery of quality marine spare parts worldwide"
        imageUrl="https://images.unsplash.com/photo-1777206078985-4959beeaf00e"
        imageAlt="Marine equipment and spares"
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
              Your Marine Spares Partner
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We provide comprehensive marine spare parts procurement services ensuring your vessels receive
              genuine, quality components on time and at competitive prices. Our global network and technical
              expertise guarantee the right parts for your operational needs.
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
                Global Procurement Network
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                With established relationships with major OEMs, authorized distributors, and trusted suppliers
                worldwide, we source genuine spare parts for all makes and models of marine equipment. Our
                procurement team verifies authenticity and quality for every component.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you need emergency spares delivered to port or planned inventory management for
                scheduled maintenance, we provide flexible solutions tailored to your operational requirements
                and budget constraints.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1645865406062-872af9faa81a"
                alt="Marine operations"
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
              Our Spares Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive spare parts solutions from sourcing to delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Package,
                title: 'Parts Procurement',
                description: 'Sourcing of genuine OEM and approved aftermarket spare parts for all types of marine equipment and machinery.',
              },
              {
                icon: Search,
                title: 'Technical Identification',
                description: 'Expert technical support to identify correct part numbers and specifications based on equipment details.',
              },
              {
                icon: Clock,
                title: 'Emergency Supply',
                description: 'Rapid response for urgent spares requirements with expedited delivery to any port worldwide.',
              },
              {
                icon: Globe,
                title: 'Global Delivery',
                description: 'Worldwide logistics network ensuring reliable delivery to vessels at sea or in port.',
              },
              {
                icon: Shield,
                title: 'Quality Assurance',
                description: 'Rigorous verification of part authenticity and quality with full documentation and certificates.',
              },
              {
                icon: TrendingUp,
                title: 'Inventory Management',
                description: 'Strategic inventory planning and management services optimizing spare parts availability and costs.',
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

      {/* Parts Categories */}
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
              Parts We Supply
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive coverage of all marine equipment and systems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: 'Main Engine Parts',
                items: ['Cylinder heads & liners', 'Pistons & rings', 'Fuel injection equipment', 'Turbocharger components', 'Bearings & seals'],
              },
              {
                category: 'Auxiliary Equipment',
                items: ['Generator parts', 'Air compressor components', 'Purifier spares', 'Pump parts', 'Heat exchanger parts'],
              },
              {
                category: 'Deck Equipment',
                items: ['Winch components', 'Crane parts', 'Mooring equipment', 'Anchor windlass parts', 'Hatch cover spares'],
              },
              {
                category: 'Electrical & Electronics',
                items: ['Navigation equipment', 'Communication systems', 'Automation parts', 'Switchboard components', 'Control systems'],
              },
              {
                category: 'Propulsion & Steering',
                items: ['Propeller components', 'Shaft bearings', 'Steering gear parts', 'Thruster components', 'Gearbox spares'],
              },
              {
                category: 'Safety & LSA',
                items: ['Life raft parts', 'Fire fighting equipment', 'EEBD & SCBA', 'Life jacket components', 'Immersion suits'],
              },
            ].map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10"
              >
                <h3 className="text-xl font-bold mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: '#B8860B' }} />
                      <span className="text-white/70 text-sm">{item}</span>
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
              Why Choose Our Spares Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reliable supply chain and competitive pricing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Genuine Parts Guaranteed',
                description: 'We supply only genuine OEM parts or approved alternatives with full traceability and manufacturer certifications.',
                number: '100%',
                label: 'Authenticity',
              },
              {
                title: 'Competitive Pricing',
                description: 'Direct relationships with manufacturers and bulk purchasing power enable us to offer the most competitive market rates.',
                number: '20%',
                label: 'Average Savings',
              },
              {
                title: 'Fast Delivery',
                description: 'Global logistics network and local inventory ensure rapid delivery even for urgent requirements.',
                number: '24-48hrs',
                label: 'Typical Delivery',
              },
              {
                title: 'Technical Support',
                description: 'Expert technical team available to assist with part identification, specifications, and installation guidance.',
                number: '24/7',
                label: 'Support Available',
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
              Our Procurement Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamlined ordering ensuring accurate delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: '01',
                title: 'Enquiry',
                description: 'Submit your spares requirement with equipment details',
              },
              {
                step: '02',
                title: 'Identification',
                description: 'Our team identifies correct parts and sources',
              },
              {
                step: '03',
                title: 'Quotation',
                description: 'Competitive pricing with delivery timeline',
              },
              {
                step: '04',
                title: 'Procurement',
                description: 'Order placement and quality verification',
              },
              {
                step: '05',
                title: 'Delivery',
                description: 'Logistics coordination and delivery confirmation',
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

      {/* OEM Partners */}
      <section className="py-24 px-6" style={{ backgroundColor: '#F8F7F4' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: '#0B2545' }}
            >
              Authorized OEM Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain authorized partnerships with leading marine equipment manufacturers including
              MAN, Wartsila, Alfa Laval, Mitsubishi, Yanmar, and many others, ensuring access to genuine
              spare parts with full manufacturer warranties and technical support.
            </p>
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
            Need Marine Spares?
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Contact us for competitive quotations on genuine spare parts delivered worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button
                className="px-8 py-4 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#0B2545' }}
              >
                Request Quotation
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
