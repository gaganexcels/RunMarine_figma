import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowUp, Mail, Phone, MapPin, Linkedin, Instagram, MessageCircle } from 'lucide-react';

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Our Fleet', href: '/fleet' },
    { name: 'Contact', href: '/contact' },
  ];

  const resources = [
    { name: 'Career Opportunities', href: '/about/our-story' },
    { name: 'Training Programs', href: '/training' },
    { name: 'Safety Policy', href: '/training/safety-policy' },
    { name: 'Environmental Policy', href: '/training/environment-policy' },
    { name: 'Certifications', href: '/about/certifications' },
  ];

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Instagram size={20} />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <Mail size={20} />, href: 'mailto:operations@runmarine.in', label: 'Email' },
    { icon: <MessageCircle size={20} />, href: 'https://wa.me/919958216002', label: 'WhatsApp' },
  ];

  return (
    <footer className="relative bg-[#0F1419] border-t-2 border-[#B8860B]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <span
              className="text-white text-3xl font-bold mb-4 block"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              RunMarine
            </span>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Commanding the Seas. Delivering Excellence. Your trusted maritime partner since 2010.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 border border-gray-600 flex items-center justify-center text-gray-400 hover:border-[#B8860B] hover:text-[#B8860B] transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#B8860B] group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#B8860B] group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="text-[#B8860B] flex-shrink-0 mt-1" />
                <span>Office Number 304, Plot 22 - 26, Sector 24, Krishna Govind Tower, Vashi, Navi Mumbai</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail size={20} className="text-[#B8860B] flex-shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:crewing@runmarine.in" className="hover:text-white transition-colors">crewing@runmarine.in</a>
                  <a href="mailto:operations@runmarine.in" className="hover:text-white transition-colors">operations@runmarine.in</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Phone size={20} className="text-[#B8860B] flex-shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919958216002" className="hover:text-white transition-colors">+91 99582 16002</a>
                  <a href="tel:+918080343416" className="hover:text-white transition-colors">+91 80803 43416</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} RunMarine. All rights reserved. RPSL License No. 123456
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-[#0B2545] border border-[#B8860B] flex items-center justify-center text-white hover:bg-[#B8860B] hover:text-[#0F1419] transition-all duration-300 z-50"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
