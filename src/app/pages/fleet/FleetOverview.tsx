import { motion } from 'motion/react';
import { Link } from 'react-router';
import { PageHero } from '../../components/PageHero';
import { ArrowRight, Anchor } from 'lucide-react';

const vesselTypes = [
  {
    name: 'Bulk Carrier',
    slug: 'bulk-carrier',
    dwt: '30,000 - 200,000 DWT',
    description: 'Designed for high-volume transport of unpackaged commodities like coal, iron ore, bauxite, and grain with robust cargo holds.',
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    features: ['Iron Ore & Coal', 'Grains & Minerals', 'High Capacity Holds'],
  },
  {
    name: 'General Cargo',
    slug: 'general-cargo',
    dwt: '5,000 - 25,000 DWT',
    description: 'Highly versatile multi-purpose geared vessels equipped with onboard cranes for breakbulk, steel, forest products, and containers.',
    imageUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    features: ['Onboard Cranes', 'Breakbulk & Steel', 'Port Flexibility'],
  },
  {
    name: 'Panamax',
    slug: 'panamax',
    dwt: '60,000 - 80,000 DWT',
    description: 'Precision-engineered to maximize Panama Canal passage. The perfect balance of capacity and versatility.',
    imageUrl: 'https://images.unsplash.com/photo-1689798448813-0ded9659ad9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    features: ['Canal Transit', 'Grain', 'Coal'],
  },
  {
    name: 'Kamsarmax',
    slug: 'kamsarmax',
    dwt: '82,000 - 87,000 DWT',
    description: 'Enhanced Panamax with superior port accessibility. Optimized for modern maritime logistics.',
    imageUrl: 'https://images.unsplash.com/photo-1693021300750-c042a492248b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    features: ['Enhanced Design', 'Versatile Ports', 'Dry Bulk'],
  },
  {
    name: 'Capesize',
    slug: 'capesize',
    dwt: '150,000 - 400,000 DWT',
    description: 'The titans of the ocean. Engineered for maximum cargo capacity and efficiency on major trade routes.',
    imageUrl: 'https://images.unsplash.com/photo-1751970046974-6d5a27f23ce1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    features: ['Iron Ore', 'Coal', 'Major Trade Routes'],
  },
  {
    name: 'Ultramax',
    slug: 'ultramax',
    dwt: '60,000 - 65,000 DWT',
    description: 'Premium Handymax evolution with enhanced efficiency. The ultimate in adaptable vessel design.',
    imageUrl: 'https://images.unsplash.com/photo-1742576437150-3a79cae681f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    features: ['Fuel Efficient', 'Advanced Design', 'Flexible Operations'],
  },
  {
    name: 'Post-Panamax',
    slug: 'post-panamax',
    dwt: '90,000 - 110,000 DWT',
    description: 'Next-generation capacity for expanded canal operations. Where innovation meets efficiency.',
    imageUrl: 'https://images.unsplash.com/photo-1724597500306-a4cbb7d1324e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    features: ['Modern Design', 'High Capacity', 'Fuel Efficient'],
  },
  {
    name: 'Aframax',
    slug: 'aframax',
    dwt: '80,000 - 120,000 DWT',
    description: 'Standard medium-sized tankers favored for regional trade routes, providing superb operational accessibility.',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    features: ['Crude Oil', 'Regional Trade', 'High Versatility'],
  },
  {
    name: 'Suezmax',
    slug: 'suezmax',
    dwt: '120,000 - 160,000 DWT',
    description: 'Suez Canal optimized tankers designed to handle major crude oil routes with advanced hull efficiency.',
    imageUrl: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    features: ['Suez Passage', 'Crude Transport', 'Long Haul Efficiency'],
  },
  {
    name: 'MR Tanker',
    slug: 'mr-tanker',
    dwt: '35,000 - 55,000 DWT',
    description: 'Refined product tankers optimized for double-hull safety and precise transport of chemical and fuel grades.',
    imageUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    features: ['Refined Fuels', 'Chemical Handling', 'Double Hull Safety'],
  },
  {
    name: 'Container Vessel',
    slug: 'container-vessel',
    dwt: '20,000 - 150,000 DWT',
    description: 'High-speed intermodal liners structured for maximum stack capacity and absolute shipping schedule integrity.',
    imageUrl: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    features: ['Containerised Freight', 'High Speed Liners', 'Global Supply Chains'],
  },
  {
    name: 'Mini Bulker',
    slug: 'mini-bulker',
    dwt: '10,000 - 40,000 DWT',
    description: 'Compact powerhouses for specialized routes. Nimble vessels for challenging port access.',
    imageUrl: 'https://images.unsplash.com/photo-1763258189525-0d7b341243a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    features: ['Small Ports', 'Coastal Trade', 'Specialized Cargo'],
  },
];

export function FleetOverview() {
  return (
    <div className="min-h-screen bg-[#F8F7F4]">
      <PageHero
        title="Our Fleet"
        subtitle="A curated collection of maritime excellence. Each vessel meticulously selected for performance, efficiency, and reliability."
        imageUrl="https://images.unsplash.com/photo-1763257708028-30c6ef074aae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        height="large"
      />

      {/* Introduction */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-[#0B2545] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Engineering Maritime Excellence
            </h2>
            <p className="text-lg text-[#6B7280] leading-relaxed">
              Our diverse fleet represents the pinnacle of maritime engineering. From agile coastal vessels
              to massive ocean-going carriers, each vessel class is carefully selected and maintained to
              deliver exceptional performance across global trade routes.
            </p>
          </motion.div>

          {/* Fleet Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vesselTypes.map((vessel, index) => (
              <motion.div
                key={vessel.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={`/fleet/${vessel.slug}`}
                  className="group block bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={vessel.imageUrl}
                      alt={vessel.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* DWT Badge */}
                    <div className="absolute top-4 right-4 bg-[#B8860B] text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {vessel.dwt}
                    </div>

                    {/* Vessel Name */}
                    <div className="absolute bottom-4 left-4">
                      <h3
                        className="text-3xl font-bold text-white mb-1"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {vessel.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-[#6B7280] mb-4 leading-relaxed">
                      {vessel.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {vessel.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-[#F8F7F4] text-[#0B2545] text-sm rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-[#B8860B] font-semibold group-hover:text-[#0B2545] transition-colors">
                      <span>Explore Specifications</span>
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Statistics */}
      <section className="py-20 px-6 bg-[#0B2545]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: 'Vessel Types', value: '12+' },
              { label: 'Total Capacity', value: '2M+ DWT' },
              { label: 'Global Ports', value: '500+' },
              { label: 'Years Experience', value: '30+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className="text-5xl font-bold text-[#B8860B] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-white/80 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Anchor className="w-16 h-16 text-[#B8860B] mx-auto mb-6" />
            <h2
              className="text-4xl md:text-5xl font-bold text-[#0B2545] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Partner with Excellence
            </h2>
            <p className="text-lg text-[#6B7280] mb-8 leading-relaxed">
              Our fleet is ready to deliver your cargo with precision and care.
              Let us design a maritime solution tailored to your needs.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#B8860B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0B2545] transition-colors duration-300"
            >
              Request Fleet Information
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
