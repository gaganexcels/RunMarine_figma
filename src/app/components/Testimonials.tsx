import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  flag: string;
}

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const testimonials: Testimonial[] = [
    {
      quote: "RunMarine's technical management has been impeccable. Their proactive approach to maintenance and compliance has reduced our downtime by 40%.",
      name: 'Captain Lars Hansen',
      title: 'Fleet Operations Director',
      company: 'Nordic Shipping AS',
      flag: '🇳🇴',
    },
    {
      quote: 'The crew quality and training standards RunMarine provides are unmatched. Every seafarer arrives fully prepared and highly professional.',
      name: 'Dimitris Papadopoulos',
      title: 'CEO',
      company: 'Aegean Maritime',
      flag: '🇬🇷',
    },
    {
      quote: 'Their 24/7 support system gives us complete peace of mind. Technical issues are resolved swiftly, keeping our vessels on schedule.',
      name: 'Tan Wei Ming',
      title: 'Managing Director',
      company: 'Pacific Bulk Carriers',
      flag: '🇸🇬',
    },
    {
      quote: 'RunMarine transformed our fleet operations. The efficiency gains and cost savings have exceeded our projections significantly.',
      name: 'Sarah Mitchell',
      title: 'VP Maritime Operations',
      company: 'Atlantic Logistics Group',
      flag: '🇺🇸',
    },
    {
      quote: 'Outstanding compliance and safety record. RunMarine\'s attention to detail during port state inspections is remarkable.',
      name: 'Hiroshi Yamamoto',
      title: 'Senior Fleet Manager',
      company: 'Tokyo Shipping Co.',
      flag: '🇯🇵',
    },
    {
      quote: 'The green recycling service was seamless. They handled every regulatory requirement and maximized our vessel\'s residual value.',
      name: 'Raj Malhotra',
      title: 'Director of Fleet Services',
      company: 'Mumbai Maritime Ltd.',
      flag: '🇮🇳',
    },
    {
      quote: 'Crew welfare and retention have improved dramatically since partnering with RunMarine. Their HR systems are world-class.',
      name: 'Klaus Becker',
      title: 'Operations Manager',
      company: 'Hamburg Bulk Lines',
      flag: '🇩🇪',
    },
    {
      quote: 'Chartering support from RunMarine opened new trade routes we hadn\'t considered. Their market intelligence is invaluable.',
      name: 'Maria Santos',
      title: 'Commercial Director',
      company: 'Manila Shipping Corp.',
      flag: '🇵🇭',
    },
    {
      quote: 'Technical services and spare parts procurement are always timely. RunMarine\'s global network ensures zero delays.',
      name: 'Ahmed Al-Rashid',
      title: 'Chief Engineer',
      company: 'Gulf Maritime Services',
      flag: '🇦🇪',
    },
    {
      quote: 'The payroll and tax compliance service eliminated administrative headaches. Everything is accurate, timely, and transparent.',
      name: 'Chen Li',
      title: 'Finance Director',
      company: 'Shanghai Ocean Transport',
      flag: '🇨🇳',
    },
    {
      quote: 'RunMarine\'s ISM compliance support prepared us perfectly for our DOC audit. Zero non-conformities on first attempt.',
      name: 'Giovanni Rossi',
      title: 'QHSE Manager',
      company: 'Mediterranean Carriers',
      flag: '🇮🇹',
    },
    {
      quote: 'Their environmental initiatives align perfectly with our sustainability goals. RunMarine is a true partner in green shipping.',
      name: 'Emma Johansson',
      title: 'Sustainability Officer',
      company: 'Scandinavian Bulk AB',
      flag: '🇸🇪',
    },
    {
      quote: 'Crew training programs exceed STCW standards. The competency and professionalism of RunMarine seafarers is exceptional.',
      name: 'Captain Park Jin-Ho',
      title: 'Marine Superintendent',
      company: 'Korea Shipping Lines',
      flag: '🇰🇷',
    },
    {
      quote: 'Insurance claims handling was professional and efficient. RunMarine\'s documentation and communication made the process smooth.',
      name: 'François Dubois',
      title: 'Risk Manager',
      company: 'Marseille Maritime SA',
      flag: '🇫🇷',
    },
    {
      quote: 'Five years with RunMarine and our fleet performance metrics have never been better. ROI speaks for itself.',
      name: 'Robert Thompson',
      title: 'Chairman',
      company: 'British Offshore Holdings',
      flag: '🇬🇧',
    },
  ];

  const settingsRow1 = {
    dots: false,
    infinite: true,
    speed: 8000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const settingsRow2 = {
    ...settingsRow1,
    rtl: true,
  };

  const midpoint = Math.ceil(testimonials.length / 2);
  const row1 = testimonials.slice(0, midpoint);
  const row2 = testimonials.slice(midpoint);

  return (
    <section ref={ref} className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center"
        >
          {/* Eyebrow */}
          <div
            className="mb-4"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '12px',
              letterSpacing: '0.18em',
              color: '#e6c364',
            }}
          >
            CLIENT TESTIMONIALS
          </div>

          {/* Headline */}
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
            Trusted Worldwide<span style={{ color: '#e6c364' }}>.</span>
          </h2>

          {/* Sub-text */}
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
            Hear from the maritime leaders who trust RunMarine with their most valuable assets
          </p>
        </motion.div>
      </div>

      {/* Carousel Row 1 - Left to Right */}
      <div className="mb-8">
        <Slider {...settingsRow1}>
          {row1.map((testimonial, index) => (
            <div key={index} className="px-3">
              <div
                className="bg-white p-8 h-full transition-all duration-300"
                style={{
                  border: '1px solid rgba(0,0,0,0.06)',
                  borderRadius: '4px',
                  minHeight: '280px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote size={32} strokeWidth={1} className="text-[#e6c364]" />
                </div>

                {/* Quote Text */}
                <p
                  className="mb-6 flex-1"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '15px',
                    lineHeight: '1.7',
                    color: '#0a1e3c',
                    fontStyle: 'italic',
                  }}
                >
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="pt-4 border-t border-gray-100">
                  <div
                    className="mb-1"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '16px',
                      fontWeight: 600,
                      color: '#0a1e3c',
                    }}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    className="mb-1"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '13px',
                      color: '#6b7280',
                    }}
                  >
                    {testimonial.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '13px',
                      color: '#755b00',
                      fontWeight: 500,
                    }}
                  >
                    {testimonial.flag} {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Carousel Row 2 - Right to Left */}
      <div>
        <Slider {...settingsRow2}>
          {row2.map((testimonial, index) => (
            <div key={index} className="px-3">
              <div
                className="bg-white p-8 h-full transition-all duration-300"
                style={{
                  border: '1px solid rgba(0,0,0,0.06)',
                  borderRadius: '4px',
                  minHeight: '280px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote size={32} strokeWidth={1} className="text-[#e6c364]" />
                </div>

                {/* Quote Text */}
                <p
                  className="mb-6 flex-1"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '15px',
                    lineHeight: '1.7',
                    color: '#0a1e3c',
                    fontStyle: 'italic',
                  }}
                >
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="pt-4 border-t border-gray-100">
                  <div
                    className="mb-1"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '16px',
                      fontWeight: 600,
                      color: '#0a1e3c',
                    }}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    className="mb-1"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '13px',
                      color: '#6b7280',
                    }}
                  >
                    {testimonial.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '13px',
                      color: '#755b00',
                      fontWeight: 500,
                    }}
                  >
                    {testimonial.flag} {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
