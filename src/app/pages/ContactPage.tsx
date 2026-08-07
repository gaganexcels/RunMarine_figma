import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Copy, Check } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { toast } from 'sonner';

export function ContactPage() {
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true });
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    toast.success(`${label} copied to clipboard`);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! We will get back to you soon.');
  };

  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="We're here to help with all your maritime management needs"
        imageUrl="https://images.unsplash.com/photo-1640471617789-39d28cc34aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
        imageAlt="Maritime port at golden hour"
        height="medium"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -30 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="text-4xl font-bold text-[#1A1A1A] mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-[#E5E5E5] focus:outline-none focus:border-[#0B2545] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-[#E5E5E5] focus:outline-none focus:border-[#0B2545] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-[#E5E5E5] focus:outline-none focus:border-[#0B2545] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-[#E5E5E5] focus:outline-none focus:border-[#0B2545] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-[#E5E5E5] focus:outline-none focus:border-[#0B2545] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-[#E5E5E5] focus:outline-none focus:border-[#0B2545] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[#0B2545] text-white hover:bg-[#13505B] transition-colors font-semibold"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3
                  className="text-3xl font-bold text-[#1A1A1A] mb-8"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 group cursor-pointer" onClick={() => handleCopy('Office Number 304, Plot 22 - 26, Sector 24, Krishna Govind Tower, Vashi, Navi Mumbai', 'Address')}>
                    <div className="p-3 bg-[#F8F7F4] group-hover:bg-[#0B2545] transition-colors">
                      {copiedItem === 'Address' ? <Check size={24} className="text-white" /> : <MapPin size={24} className="text-[#0B2545] group-hover:text-white transition-colors" />}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1A1A1A] mb-1">Address</h4>
                      <p className="text-[#6B7280]">
                        Office Number 304, Plot 22 - 26, Sector 24
                        <br />
                        Krishna Govind Tower, Vashi, Navi Mumbai
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group cursor-pointer" onClick={() => handleCopy('+91 99582 16002, +91 80803 43416', 'Phone')}>
                    <div className="p-3 bg-[#F8F7F4] group-hover:bg-[#0B2545] transition-colors">
                      {copiedItem === 'Phone' ? <Check size={24} className="text-white" /> : <Phone size={24} className="text-[#0B2545] group-hover:text-white transition-colors" />}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1A1A1A] mb-1">Phone</h4>
                      <p className="text-[#6B7280]">
                        <a href="tel:+919958216002" className="hover:text-[#0B2545] transition-colors font-medium">+91 99582 16002</a>
                      </p>
                      <p className="text-[#6B7280]">
                        <a href="tel:+918080343416" className="hover:text-[#0B2545] transition-colors font-medium">+91 80803 43416</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group cursor-pointer" onClick={() => handleCopy('crewing@runmarine.in, operations@runmarine.in', 'Email')}>
                    <div className="p-3 bg-[#F8F7F4] group-hover:bg-[#0B2545] transition-colors">
                      {copiedItem === 'Email' ? <Check size={24} className="text-white" /> : <Mail size={24} className="text-[#0B2545] group-hover:text-white transition-colors" />}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1A1A1A] mb-1">Email</h4>
                      <p className="text-[#6B7280]">
                        <a href="mailto:crewing@runmarine.in" className="hover:text-[#0B2545] transition-colors font-medium">crewing@runmarine.in</a>
                      </p>
                      <p className="text-[#6B7280]">
                        <a href="mailto:operations@runmarine.in" className="hover:text-[#0B2545] transition-colors font-medium">operations@runmarine.in</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#F8F7F4]">
                      <Clock size={24} className="text-[#0B2545]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1A1A1A] mb-1">Hours</h4>
                      <p className="text-[#6B7280]">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-[#6B7280]">24/7 Emergency Support Available</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F8F7F4] p-8">
                <h4 className="text-xl font-bold text-[#1A1A1A] mb-4">WhatsApp Support</h4>
                <p className="text-[#6B7280] mb-4">
                  Get instant support through WhatsApp for urgent inquiries
                </p>
                <a
                  href="https://wa.me/919958216002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white hover:bg-[#20BA5A] transition-colors font-semibold"
                >
                  <Phone size={20} />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div
              className="mb-4"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '12px',
                letterSpacing: '0.18em',
                color: '#e6c364',
              }}
            >
              VISIT US
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '42px',
                fontWeight: 700,
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
                color: '#0a1e3c',
              }}
            >
              Our Location<span style={{ color: '#e6c364' }}>.</span>
            </h2>
          </motion.div>

          {/* Map Embed Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden mb-8"
            style={{
              borderRadius: '4px',
              height: '480px',
              border: '1px solid rgba(0,0,0,0.08)',
            }}
          >
            <iframe
              src="https://maps.google.com/maps?q=Krishna%20Govind%20Tower,%20Sector%2024,%20Vashi,%20Navi%20Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RunMarine Office Location"
            />
          </motion.div>

          {/* Google Maps Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Krishna+Govind+Tower,+Sector+24,+Vashi,+Navi+Mumbai"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                background: '#755b00',
                borderRadius: '8px',
                padding: '14px 32px',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                color: 'white',
                transition: 'all 250ms ease',
              }}
              className="hover:scale-105 hover:shadow-[0_0_20px_rgba(230,195,100,0.35)] active:scale-95"
            >
              <MapPin size={18} />
              Get Directions
            </a>

            <a
              href="https://maps.google.com/?q=Krishna+Govind+Tower,+Sector+24,+Vashi,+Navi+Mumbai"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                background: 'rgba(255,255,255,0.9)',
                border: '1px solid rgba(117,91,0,0.3)',
                borderRadius: '8px',
                padding: '14px 32px',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                color: '#755b00',
                transition: 'all 250ms ease',
              }}
              className="hover:bg-white hover:border-[#755b00] active:scale-95"
            >
              <MapPin size={18} />
              View on Google Maps
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
