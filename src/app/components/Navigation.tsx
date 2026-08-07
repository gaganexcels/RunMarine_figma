import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router';

interface DropdownItem {
  name: string;
  href: string;
  description?: string;
}

interface NavItem {
  name: string;
  href?: string;
  dropdown?: DropdownItem[];
}

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownEnter = (name: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    {
      name: 'About',
      href: '/about',
      dropdown: [
        { name: 'Our Story', href: '/about/our-story', description: 'Journey since 1998' },
        { name: 'Mission & Vision', href: '/about/mission-vision', description: 'Our purpose & goals' },
        { name: 'Leadership Team', href: '/about/leadership', description: 'Executive leadership' },
        { name: 'Certifications', href: '/about/certifications', description: 'RPSL & ISO certified' },
      ],
    },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'Technical Management', href: '/services/technical-management', description: 'Complete vessel oversight' },
        { name: 'Crew Management', href: '/services/crew-management', description: 'Global crew solutions' },
        { name: 'Technical Services', href: '/services/technical-services', description: 'Engineering support' },
        { name: 'Chartering', href: '/services/chartering', description: 'Strategic vessel placement' },
        { name: 'Green Recycling', href: '/services/green-recycling', description: 'Eco-friendly disposal' },
        { name: 'Marine Spares', href: '/services/marine-spares', description: 'Parts procurement' },
        { name: 'Payroll & Tax', href: '/services/payroll-tax', description: 'Crew payroll services' },
      ],
    },
    {
      name: 'Fleet',
      href: '/fleet',
      dropdown: [
        { name: 'Bulk Carrier', href: '/fleet/bulk-carrier', description: '30,000-200,000 DWT' },
        { name: 'General Cargo', href: '/fleet/general-cargo', description: 'Multi-purpose geared' },
        { name: 'Panamax', href: '/fleet/panamax', description: '60,000-80,000 DWT' },
        { name: 'Kamsarmax', href: '/fleet/kamsarmax', description: '82,000-87,000 DWT' },
        { name: 'Capesize', href: '/fleet/capesize', description: '150,000+ DWT' },
        { name: 'Ultramax', href: '/fleet/ultramax', description: '60,000-65,000 DWT' },
        { name: 'Post-Panamax', href: '/fleet/post-panamax', description: '90,000-110,000 DWT' },
        { name: 'Aframax', href: '/fleet/aframax', description: '80,000-120,000 DWT Crude' },
        { name: 'Suezmax', href: '/fleet/suezmax', description: '120,000-160,000 DWT Tankers' },
        { name: 'MR Tanker', href: '/fleet/mr-tanker', description: '35,000-55,000 DWT Product' },
        { name: 'Container Vessel', href: '/fleet/container-vessel', description: '1,500-15,000 TEU' },
        { name: 'Mini Bulker', href: '/fleet/mini-bulker', description: '10,000-40,000 DWT' },
      ],
    },
    {
      name: 'Training',
      href: '/training',
      dropdown: [
        { name: 'Training & Development', href: '/training/development', description: 'STCW programs' },
        { name: 'Recruitment Policy', href: '/training/recruitment-policy', description: 'Hiring standards' },
        { name: 'Environment Policy', href: '/training/environment-policy', description: 'Green practices' },
        { name: 'Safety Policy', href: '/training/safety-policy', description: 'ISM compliance' },
      ],
    },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <motion.nav
        style={{
          height: '72px',
          backgroundColor: scrolled ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,1)',
          backdropFilter: scrolled ? 'blur(20px) saturate(160%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.4)' : '1px solid rgba(230,195,100,0.2)',
          boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.06)' : 'none',
          transition: 'all 400ms ease',
        }}
        className="fixed top-0 left-0 right-0 z-40"
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span
              className="text-2xl font-bold tracking-tight text-[#0a1e3c]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              RunMarine
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const active = isActive(item.href || '/');

              return (
                <div
                  key={item.name}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => item.dropdown && handleDropdownEnter(item.name)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    to={item.href || '/'}
                    className="relative flex items-center gap-1 transition-colors duration-200"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '14px',
                      color: active ? '#755b00' : '#0a1e3c',
                    }}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown size={14} />}

                    {/* Active underline */}
                    {active && (
                      <motion.div
                        className="absolute bottom-[-4px] left-0 h-[2px] bg-[#e6c364]"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      />
                    )}

                    {/* Hover underline */}
                    {!active && (
                      <motion.div
                        className="absolute bottom-[-4px] left-0 h-[2px] bg-[#e6c364]"
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>

                  {/* Glassmorphism Dropdown */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        onMouseEnter={() => handleDropdownEnter(item.name)}
                        onMouseLeave={handleDropdownLeave}
                        style={{
                          background: 'rgba(255,255,255,0.85)',
                          backdropFilter: 'blur(16px)',
                          border: '1px solid rgba(230,195,100,0.25)',
                          boxShadow: '0 16px 40px rgba(0,0,0,0.08)',
                          borderRadius: '4px',
                        }}
                        className="absolute top-full left-0 mt-2 min-w-[280px] overflow-hidden"
                      >
                        <div className="py-2">
                          {item.dropdown.map((dropItem) => (
                            <Link
                              key={dropItem.name}
                              to={dropItem.href}
                              className="block px-6 py-3 transition-all duration-200 relative group hover:bg-white/50"
                            >
                              <div
                                className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#e6c364] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                              />
                              <div className="pl-2">
                                <div
                                  className="text-[#0a1e3c]"
                                  style={{ fontFamily: "'Playfair Display', serif", fontSize: '15px' }}
                                >
                                  {dropItem.name}
                                </div>
                                {dropItem.description && (
                                  <div
                                    className="text-gray-400 mt-1"
                                    style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px' }}
                                  >
                                    {dropItem.description}
                                  </div>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <Link
            to="/contact"
            style={{
              background: scrolled ? 'rgba(117,91,0,0.85)' : '#755b00',
              backdropFilter: scrolled ? 'blur(8px)' : 'none',
              border: scrolled ? '1px solid rgba(230,195,100,0.5)' : 'none',
              borderRadius: '8px',
              padding: '10px 24px',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '13px',
              letterSpacing: '0.08em',
              transition: 'all 400ms ease',
            }}
            className="hidden lg:block text-white hover:scale-105 transition-transform"
          >
            Get in Touch
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#0a1e3c]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <span
                  className="text-[#0a1e3c] text-2xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  RunMarine
                </span>
                <button onClick={() => setIsMenuOpen(false)} className="text-[#0a1e3c] p-2">
                  <X size={24} />
                </button>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center gap-6 p-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href || '/'}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl text-[#0a1e3c] hover:text-[#755b00] transition-colors"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-8 px-8 py-3 bg-[#755b00] text-white hover:bg-[#5d4800] transition-all rounded-lg"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
