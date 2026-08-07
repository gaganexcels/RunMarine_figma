import { motion } from 'motion/react';
import { Link } from 'react-router';
import { PageHero } from '../../components/PageHero';
import { Anchor, Gauge, Ship, Globe, ArrowRight } from 'lucide-react';

const specifications = [
  { label: 'Deadweight Tonnage', value: '30,000 - 200,000+ DWT' },
  { label: 'Length Overall', value: '180 - 300 meters' },
  { label: 'Beam', value: '30 - 50 meters' },
  { label: 'Draft', value: '10 - 18.5 meters' },
  { label: 'Cargo Hold Capacity', value: '40,000 - 220,000 m³' },
  { label: 'Speed (Service)', value: '13.5 - 15 knots' },
];

const capabilities = [
  {
    icon: Ship,
    title: 'Dry Bulk Capacity',
    description: 'Engineered to carry massive quantities of unpacked dry cargo such as iron ore, coal, grain, and cement with supreme efficiency.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Capable of traversing major oceanic trade lanes, connecting key resource-producing regions to primary global industrial hubs.',
  },
  {
    icon: Gauge,
    title: 'High Cargo Efficiency',
    description: 'Optimized cargo hold structures and large hatch openings ensure rapid loading and discharging, reducing port stay duration.',
  },
  {
    icon: Anchor,
    title: 'Structural Resilience',
    description: 'Robust double-hull and high-tensile steel constructions offer superior durability under high-stress bulk operations.',
  },
];

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1544816155-12df9643f363?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    caption: 'Bulk Carrier at open sea',
  },
  {
    url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    caption: 'Loading operations at dry terminal',
  },
  {
    url: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    caption: 'Industrial harbor logistics',
  },
];

const relatedVessels = [
  { name: 'Panamax', slug: 'panamax', dwt: '60,000 - 80,000 DWT' },
  { name: 'Capesize', slug: 'capesize', dwt: '160,000 - 210,000 DWT' },
  { name: 'Kamsarmax', slug: 'kamsarmax', dwt: '82,000 - 87,000 DWT' },
];

export function BulkCarrier() {
  return (
    <div className="min-h-screen bg-[#F8F7F4]">
      <PageHero
        title="Bulk Carrier"
        subtitle="The backbone of global commodity trade. Massive carrying capacity designed for optimal efficiency and heavy-duty logistics."
        imageUrl="https://images.unsplash.com/photo-1544816155-12df9643f363?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
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
              Essential Commodity Transport
            </h2>
            <p className="text-lg text-[#6B7280] leading-relaxed">
              Our Bulk Carrier fleet forms the absolute foundation of global maritime transport. Specially designed to
              carry loose, high-density dry cargoes like iron ore, grain, coal, and minerals, these vessels are
              vital to maintaining supply lines for energy, construction, and agriculture sectors worldwide.
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
              Unyielding Standards in Bulk Shipping
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              We manage our bulk carrier operations with a meticulous eye for safety, cargo integrity, and environmental 
              sustainability. Implementing modern weather-routing programs, real-time stress monitoring, and structured
              preventative maintenance, our ships achieve maximum reliability, crossing trade lanes seamlessly and 
              efficiently.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-[#B8860B] mb-2">99.8%</div>
                <div className="text-white/80">On-Time Discharging</div>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-[#B8860B] mb-2">12M+ Tons</div>
                <div className="text-white/80">Annual Cargo Transited</div>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-[#B8860B] mb-2">Zero</div>
                <div className="text-white/80">Loss of Cargo Incidents</div>
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
              Charter a Bulk Carrier
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Unlock streamlined logistics with our highly reliable, top-tier Bulk Carrier fleet. 
              Let our experts coordinate your cargo movements with maximum safety.
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
