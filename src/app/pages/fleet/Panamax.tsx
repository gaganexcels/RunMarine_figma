import { motion } from 'motion/react';
import { Link } from 'react-router';
import { PageHero } from '../../components/PageHero';
import { Anchor, Gauge, Ship, Globe, ArrowRight } from 'lucide-react';

const specifications = [
  { label: 'Deadweight Tonnage', value: '60,000 - 80,000 DWT' },
  { label: 'Length Overall', value: '225 - 230 meters' },
  { label: 'Beam', value: '32.2 meters (max)' },
  { label: 'Draft', value: '12 - 14 meters' },
  { label: 'Cargo Hold Capacity', value: '80,000 - 95,000 m³' },
  { label: 'Speed (Service)', value: '14 - 15 knots' },
];

const capabilities = [
  {
    icon: Ship,
    title: 'Panama Canal Optimized',
    description: 'Precision-engineered to maximize dimensions while ensuring seamless transit through the Panama Canal locks.',
  },
  {
    icon: Globe,
    title: 'Global Trade Routes',
    description: 'Perfect for major grain, coal, and mineral routes connecting the Atlantic and Pacific trade corridors.',
  },
  {
    icon: Gauge,
    title: 'Cargo Versatility',
    description: 'Designed for efficient loading and discharge of bulk commodities including grain, coal, ore, and steel products.',
  },
  {
    icon: Anchor,
    title: 'Economic Efficiency',
    description: 'Optimal balance of cargo capacity and fuel consumption, delivering superior cost-effectiveness per ton-mile.',
  },
];

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1689798448813-0ded9659ad9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    caption: 'Panamax vessel at sea',
  },
  {
    url: 'https://images.unsplash.com/photo-1693021316599-cf3a3345161c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    caption: 'Canal transit operations',
  },
  {
    url: 'https://images.unsplash.com/photo-1699100652992-48dd015a95d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    caption: 'Loading operations',
  },
];

const relatedVessels = [
  { name: 'Kamsarmax', slug: 'kamsarmax', dwt: '82,000 - 87,000 DWT' },
  { name: 'Post-Panamax', slug: 'post-panamax', dwt: '90,000 - 110,000 DWT' },
  { name: 'Ultramax', slug: 'ultramax', dwt: '60,000 - 65,000 DWT' },
];

export function Panamax() {
  return (
    <div className="min-h-screen bg-[#F8F7F4]">
      <PageHero
        title="Panamax"
        subtitle="Precision-engineered for perfect canal passage. The gold standard in balanced capacity and versatility."
        imageUrl="https://images.unsplash.com/photo-1689798448813-0ded9659ad9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
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
              The Perfect Balance
            </h2>
            <p className="text-lg text-[#6B7280] leading-relaxed">
              Panamax vessels are defined by their maximum dimensions that allow transit through the original
              Panama Canal locks. This strategic sizing makes them ideal for connecting global markets
              with exceptional efficiency, carrying substantial cargo while maintaining access to key
              maritime corridors.
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
              Excellence in Every Voyage
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Our Panamax fleet operates under the strictest quality and safety protocols. With expert crews
              trained specifically for canal transit operations and advanced navigation systems, we ensure
              seamless passage through critical waterways. Every vessel is maintained to exceed international
              standards, guaranteeing reliability across global trade routes.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-[#B8860B] mb-2">100%</div>
                <div className="text-white/80">Canal Transit Success</div>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-[#B8860B] mb-2">500+</div>
                <div className="text-white/80">Annual Voyages</div>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-[#B8860B] mb-2">Zero</div>
                <div className="text-white/80">Safety Incidents</div>
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
              Charter a Panamax Vessel
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Connect global markets with our premium Panamax fleet.
              Let us design a shipping solution tailored to your needs.
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
