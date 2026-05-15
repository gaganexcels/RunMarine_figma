import { motion } from 'motion/react';
import { Link } from 'react-router';
import { PageHero } from '../../components/PageHero';
import { Anchor, Gauge, Ship, Globe, ArrowRight } from 'lucide-react';

const specifications = [
  { label: 'Deadweight Tonnage', value: '200,000 - 400,000 DWT' },
  { label: 'Length Overall', value: '320 - 360 meters' },
  { label: 'Beam', value: '55 - 65 meters' },
  { label: 'Draft', value: '20 - 23 meters' },
  { label: 'Cargo Hold Capacity', value: '200,000 - 250,000 m³' },
  { label: 'Speed (Service)', value: '14 - 15 knots' },
];

const capabilities = [
  {
    icon: Ship,
    title: 'Dedicated Ore Transport',
    description: 'Specifically engineered for transporting massive quantities of iron ore and mineral concentrates between continents.',
  },
  {
    icon: Globe,
    title: 'Ultra-Long Haul Routes',
    description: 'Optimized for major mining export routes from Brazil, Australia, and West Africa to steel-producing nations.',
  },
  {
    icon: Gauge,
    title: 'Maximum Economy of Scale',
    description: 'The lowest per-ton transport costs in the industry, making mineral exports economically viable across vast distances.',
  },
  {
    icon: Anchor,
    title: 'Specialized Infrastructure',
    description: 'Requires dedicated deep-water terminals with specialized loading and discharge systems for efficient operations.',
  },
];

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1585713181935-d5f622cc2415?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    caption: 'VLOC at sea',
  },
  {
    url: 'https://images.unsplash.com/photo-1751970046974-6d5a27f23ce1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    caption: 'Massive cargo capacity',
  },
  {
    url: 'https://images.unsplash.com/photo-1724597500306-a4cbb7d1324e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    caption: 'Ocean operations',
  },
];

const relatedVessels = [
  { name: 'Capesize', slug: 'capesize', dwt: '150,000 - 400,000 DWT' },
  { name: 'Post-Panamax', slug: 'post-panamax', dwt: '90,000 - 110,000 DWT' },
  { name: 'Kamsarmax', slug: 'kamsarmax', dwt: '82,000 - 87,000 DWT' },
];

export function VLOC() {
  return (
    <div className="min-h-screen bg-[#F8F7F4]">
      <PageHero
        title="VLOC"
        subtitle="Very Large Ore Carriers. Unmatched capacity for bulk mineral transport across continents."
        imageUrl="https://images.unsplash.com/photo-1585713181935-d5f622cc2415?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
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
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-[#0B2545] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The Ultimate Ore Carriers
            </h2>
            <p className="text-lg text-[#6B7280] leading-relaxed">
              Very Large Ore Carriers (VLOCs) represent the apex of specialized bulk carrier design.
              These massive vessels are purpose-built for one mission: transporting enormous quantities
              of iron ore and mineral concentrates from remote mining regions to industrial centers
              worldwide. Their exceptional scale delivers unrivaled economic efficiency for long-distance
              mineral transport.
            </p>
          </motion.div>

          {/* Specifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {specifications.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-sm text-[#6B7280] mb-2">{spec.label}</div>
                <div
                  className="text-2xl font-bold text-[#0B2545]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {spec.value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#0B2545] text-center mb-16"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Operational Capabilities
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#B8860B] rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0B2545] mb-2">
                      {capability.title}
                    </h3>
                    <p className="text-[#6B7280] leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Management Approach */}
      <section className="py-20 px-6 bg-[#0B2545]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Specialized Fleet Expertise
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Operating VLOCs demands extraordinary expertise in vessel management, cargo handling, and
              global logistics coordination. Our teams bring decades of specialized experience in managing
              these massive vessels, ensuring seamless operations from remote loading terminals to
              destination ports. Every voyage is planned with meticulous attention to efficiency, safety,
              and environmental stewardship.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-[#B8860B] mb-2">400K</div>
                <div className="text-white/80">DWT Maximum</div>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-[#B8860B] mb-2">20M+</div>
                <div className="text-white/80">Tons Annually</div>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-[#B8860B] mb-2">100%</div>
                <div className="text-white/80">Cargo Integrity</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#0B2545] text-center mb-16"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Gallery
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]"
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white font-semibold">
                    {image.caption}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Vessels */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#0B2545] text-center mb-16"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Explore Related Vessels
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedVessels.map((vessel, index) => (
              <motion.div
                key={vessel.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={`/fleet/${vessel.slug}`}
                  className="group block bg-[#F8F7F4] p-6 rounded-lg hover:shadow-xl transition-all duration-300"
                >
                  <h3
                    className="text-2xl font-bold text-[#0B2545] mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {vessel.name}
                  </h3>
                  <p className="text-[#6B7280] mb-4">{vessel.dwt}</p>
                  <div className="flex items-center text-[#B8860B] font-semibold group-hover:text-[#0B2545] transition-colors">
                    <span>View Details</span>
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#B8860B]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Charter a VLOC
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              For large-scale mineral transport, our VLOC fleet delivers unmatched efficiency.
              Contact our team to discuss your ore shipping requirements.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-[#0B2545] px-8 py-4 rounded-lg font-semibold hover:bg-[#F8F7F4] transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
