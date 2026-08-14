import { motion } from 'motion/react';
import { useState } from 'react';
import { Send, MapPin, Mail, Phone, Copy, Check } from 'lucide-react';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast.success('Copied!');
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
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
            CONTACT US
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '48px',
              fontWeight: 700,
              lineHeight: '1.08',
              letterSpacing: '-0.02em',
              color: '#0a1e3c',
            }}
          >
            Get in Touch<span style={{ color: '#e6c364' }}>.</span>
          </h2>
          <p
            className="mt-6 mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px',
              lineHeight: '1.7',
              color: '#6b7280',
              maxWidth: '560px',
            }}
          >
            Ready to elevate your maritime operations? Contact us today
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[#1A1A1A] mb-2 font-medium">Full Name</label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-3 bg-[#F8F7F4] text-[#1A1A1A] border-2 border-transparent focus:border-[#0B2545] focus:bg-white transition-all duration-300 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#1A1A1A] mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-3 bg-[#F8F7F4] text-[#1A1A1A] border-2 border-transparent focus:border-[#0B2545] focus:bg-white transition-all duration-300 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#1A1A1A] mb-2 font-medium">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-3 bg-[#F8F7F4] text-[#1A1A1A] border-2 border-transparent focus:border-[#0B2545] focus:bg-white transition-all duration-300 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#1A1A1A] mb-2 font-medium">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('company')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 bg-[#F8F7F4] text-[#1A1A1A] border-2 border-transparent focus:border-[#0B2545] focus:bg-white transition-all duration-300 outline-none"
                />
              </div>

              <div>
                <label className="block text-[#1A1A1A] mb-2 font-medium">
                  Service of Interest
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('service')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 bg-[#F8F7F4] text-[#1A1A1A] border-2 border-transparent focus:border-[#0B2545] focus:bg-white transition-all duration-300 outline-none"
                >
                  <option value="">Select a service</option>
                  <option value="technical">Technical Management</option>
                  <option value="crew">Crew Management</option>
                  <option value="chartering">Chartering</option>
                  <option value="recycling">Green Recycling</option>
                  <option value="spares">Marine Spares</option>
                  <option value="payroll">Payroll & Tax</option>
                  <option value="training">Training</option>
                </select>
              </div>

              <div>
                <label className="block text-[#1A1A1A] mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#F8F7F4] text-[#1A1A1A] border-2 border-transparent focus:border-[#0B2545] focus:bg-white transition-all duration-300 resize-none outline-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: '100%',
                  background: '#755b00',
                  borderRadius: '8px',
                  padding: '16px 32px',
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '14px',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  color: 'white',
                  transition: 'all 250ms ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                }}
                className="hover:shadow-[0_0_20px_rgba(230,195,100,0.35)]"
              >
                Send Message
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="h-64 border border-[#E5E5E5] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d657.6361157198063!2d73.00914081119856!3d19.069352137092952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1469f2fffff%3A0x2f841cb99b39a2ef!2sground%20floor%2C%20Krishna%20Govinda%20Tower%2C%20Sector%2024%2C%20Vashi%2C%20Navi%20Mumbai%2C%20Maharashtra%20400703!5e0!3m2!1sen!2sin!4v1786709153091!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
/>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 border border-[#E5E5E5] text-[#0B2545]">
                  <MapPin size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-[#1A1A1A] font-semibold mb-1">Office Address</h4>
                  <p className="text-[#6B7280]">
                  Office Number 304, Plot 22 - 26, Sector 24, Krishna Govind Tower,
                    <br />
                    Vashi, Navi Mumbai, 400703, Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 border border-[#E5E5E5] text-[#0B2545]">
                  <Mail size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-[#1A1A1A] font-semibold mb-1">Email</h4>
                  <button
                    onClick={() => copyToClipboard('runmarine507@gmail.com', 'email')}
                    className="text-[#6B7280] hover:text-[#0B2545] transition-colors flex items-center gap-2"
                  >
                    runmarine507@gmail.com
                    {copiedField === 'email' ? (
                      <Check size={16} className="text-green-600" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 border border-[#E5E5E5] text-[#0B2545]">
                  <Phone size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-[#1A1A1A] font-semibold mb-2">Phone</h4>
                  <button
                    onClick={() => copyToClipboard('+91 80803 43416', 'phone1')}
                    className="text-[#6B7280] hover:text-[#0B2545] transition-colors flex items-center gap-2 mb-2"
                  >
                    +91 80803 43416
                    {copiedField === 'phone1' ? (
                      <Check size={16} className="text-green-600" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                  <button
                    onClick={() => copyToClipboard('+91 99582 16002', 'phone2')}
                    className="text-[#6B7280] hover:text-[#0B2545] transition-colors flex items-center gap-2"
                  >
                    +91 99582 16002'
                    {copiedField === 'phone2' ? (
                      <Check size={16} className="text-green-600" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
              </div>

              <div className="pt-6 border-t border-[#E5E5E5]">
                <h4 className="text-[#1A1A1A] font-semibold mb-2">Working Hours</h4>
                <p className="text-[#6B7280]">
                  Monday - Friday: 9:00 AM - 6:00 PM IST
                  <br />
                  Saturday: 9:00 AM - 1:00 PM IST
                  <br />
                  24/7 Emergency Support Available
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
