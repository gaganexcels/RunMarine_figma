import { motion } from 'motion/react';
import { Link } from 'react-router';
import { PageHero } from '../../components/PageHero';
import { Anchor, Gauge, Ship, Globe, ArrowRight } from 'lucide-react';

const specifications = [
  { label: 'Deadweight Tonnage', value: '5,000 - 30,000 DWT' },
  { label: 'Length Overall', value: '100 - 180 meters' },
  { label: 'Beam', value: '16 - 28 meters' },
  { label: 'Draft', value: '6 - 10.5 meters' },
  { label: 'Cargo Hold Capacity', value: '7,000 - 38,000 m³' },
  { label: 'Speed (Service)', value: '12 - 14 knots' },
];

const capabilities = [
  {
    icon: Ship,
    title: 'Multi-Purpose Carriage',
    description: 'Equipped to transport a diverse array of goods ranging from steel rolls, pipes, heavy machinery, and paper reels to timber and packed containers.',
  },
  {
    icon: Globe,
    title: 'Flexible Route Access',
    description: 'Perfectly scaled to navigate shallow-draft rivers, regional canals, and smaller secondary ports inaccessible to massive ocean-going giants.',
  },
  {
    icon: Gauge,
    title: 'Self-Sustained Gear',
    description: 'Outfitted with heavy-duty on-board deck cranes, allowing independent loading and unloading operations even at unequipped harbors.',
  },
  {
    icon: Anchor,
    title: 'Versatile Stowage',
    description: 'Features adjustable tween-decks and box-shaped holds, meticulously designed to maximize spatial usage and protect delicate project cargo.',
  },
];

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    caption: 'General Cargo vessel at coastal transit',
  },
  {
    url: 'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    caption: 'Dynamic sea voyage cargo logistics',
  },
  {
    url: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    caption: 'Loading operations with heavy ship crane',
  },
];

const relatedVessels = [
  { name: 'Mini Bulker', slug: 'mini-bulker', dwt: '10,000 - 25,000 DWT' },
  { name: 'Ultramax', slug: 'ultramax', dwt: '60,000 - 65,000 DWT' },
  { name: 'Panamax', slug: 'panamax', dwt: '60,000 - 80,000 DWT' },
];

export function GeneralCargo() {
  return (
    <div className="min-h-screen bg-[#F8F7F4]">
      <PageHero
        title="General Cargo"
        subtitle="The ultimate multi-purpose maritime workhorse. Engineered with independent gear to handle specialized commodities and reach restricted ports."
        imageUrl="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
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
              Unparalleled Versatility
            </h2>
            <p className="text-lg text-[#6B7280] leading-relaxed">
              Our General Cargo and multi-purpose fleet provides tailored solutions for non-standard shipments, complex 
              logistical structures, and project cargo. With adjustable cargo layouts and self-sustaining crane gear, 
              these vessels effortlessly service niche harbors and localized markets that lack industrial port facilities.
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
              Precision for Complex Voyages
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Multi-purpose general cargo operations require an exceptional level of stowage planning and sea-fastening 
              expertise. Our teams utilize state-of-the-art 3D layout software to model loading stresses, ensure safe centers 
              of gravity, and guarantee that heavy cargo reaches its destination in absolute pristine condition.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-[#B8860B] mb-2">100%</div>
                <div className="text-white/80">Self-Sufficient Loading</div>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-[#B8860B] mb-2">350+</div>
                <div className="text-white/80">Unique Harbors Serviced</div>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-[#B8860B] mb-2">Zero</div>
                <div className="text-white/80">Stowage Damage Events</div>
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
              Charter a General Cargo Vessel
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Unlock unmatched transport versatility for non-standard, industrial, or project commodities. 
              Get in touch with our operations team to secure your custom shipping plan today.
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
