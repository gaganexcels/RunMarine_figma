import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Anchor, Award, Ship, Users } from 'lucide-react';

interface Story {
  id: string;
  title: string;
  icon: React.ReactNode;
  headline: string;
  description: string;
  imageUrl: string;
  stats: { value: string; label: string }[];
}

export function StoriesFromTheSea() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeTab, setActiveTab] = useState('rescue');

  const stories: Story[] = [
    {
      id: 'rescue',
      title: 'Emergency Response',
      icon: <Anchor size={20} />,
      headline: 'Coordinating a Critical Mid-Ocean Rescue',
      description:
        'When a Panamax vessel faced engine failure 800 nautical miles from port, our 24/7 operations center coordinated a complex rescue operation. Within hours, we mobilized technical teams, arranged air transport for critical spare parts, and liaised with coast guard authorities across three jurisdictions. The vessel was operational within 36 hours, crew safety maintained, and cargo delivery met—showcasing the power of global coordination and rapid response.',
      imageUrl: 'https://images.unsplash.com/photo-1589182337358-2cb63099350c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      stats: [
        { value: '36 hrs', label: 'Response Time' },
        { value: '3', label: 'Countries Coordinated' },
        { value: '100%', label: 'Crew Safety' },
      ],
    },
    {
      id: 'training',
      title: 'Crew Excellence',
      icon: <Users size={20} />,
      headline: 'Building Maritime Leaders Through Training',
      description:
        'Our crew development program transformed a junior deckhand into a certified Chief Officer within four years. Through structured STCW training, mentorship aboard our managed vessels, and leadership development workshops, we cultivate maritime professionals who exceed industry standards. This investment in human capital ensures our clients receive crews that are not just compliant, but exceptional.',
      imageUrl: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      stats: [
        { value: '500+', label: 'Crew Trained Annually' },
        { value: '98%', label: 'Certification Success' },
        { value: '12+', label: 'Nationalities' },
      ],
    },
    {
      id: 'achievement',
      title: 'Industry Recognition',
      icon: <Award size={20} />,
      headline: 'Zero PSC Deficiencies Across Entire Fleet',
      description:
        'Achieving a full year of port state control inspections without a single deficiency across our managed fleet of 50+ vessels is unprecedented in the industry. This milestone reflects our obsessive attention to ISM compliance, rigorous maintenance protocols, and proactive crew training. When inspectors board our vessels, they find documentation that exceeds requirements and systems that operate flawlessly.',
      imageUrl: 'https://images.unsplash.com/photo-1640471617789-39d28cc34aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      stats: [
        { value: '0', label: 'PSC Deficiencies' },
        { value: '50+', label: 'Vessels Inspected' },
        { value: '100%', label: 'Pass Rate' },
      ],
    },
    {
      id: 'sustainability',
      title: 'Green Initiative',
      icon: <Ship size={20} />,
      headline: 'Pioneering Eco-Friendly Ship Recycling',
      description:
        'When a major shipowner needed to decommission five aging bulk carriers, they turned to our green recycling division. We secured HKC-certified yards, ensured full environmental compliance, and maximized residual value recovery. Each vessel was dismantled with zero environmental incidents, all hazardous materials properly disposed of, and scrap metals recycled responsibly—setting the industry standard for sustainable end-of-life vessel management.',
      imageUrl: 'https://images.unsplash.com/photo-1611348524140-53c9a25263d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      stats: [
        { value: '5', label: 'Vessels Recycled' },
        { value: '100%', label: 'HKC Compliant' },
        { value: '0', label: 'Environmental Incidents' },
      ],
    },
  ];

  const activeStory = stories.find((s) => s.id === activeTab) || stories[0];

  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
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
            REAL STORIES
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
            Stories From the Sea<span style={{ color: '#e6c364' }}>.</span>
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
            Real challenges, real solutions—see how we navigate complex maritime operations
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {stories.map((story) => (
            <button
              key={story.id}
              onClick={() => setActiveTab(story.id)}
              className="relative group"
              style={{
                padding: '12px 24px',
                borderRadius: '8px',
                border: activeTab === story.id ? '1px solid #e6c364' : '1px solid rgba(0,0,0,0.1)',
                background: activeTab === story.id ? 'rgba(230,195,100,0.08)' : 'white',
                transition: 'all 250ms ease',
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                fontWeight: 500,
                color: activeTab === story.id ? '#755b00' : '#6b7280',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              {story.icon}
              {story.title}
            </button>
          ))}
        </motion.div>

        {/* Story Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <div
            className="relative overflow-hidden"
            style={{
              aspectRatio: '4/3',
              borderRadius: '4px',
            }}
          >
            <img
              src={activeStory.imageUrl}
              alt={activeStory.headline}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Content */}
          <div>
            <h3
              className="mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '36px',
                fontWeight: 700,
                lineHeight: '1.2',
                color: '#0a1e3c',
              }}
            >
              {activeStory.headline}
            </h3>
            <p
              className="mb-8"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#6b7280',
              }}
            >
              {activeStory.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {activeStory.stats.map((stat, index) => (
                <div key={index}>
                  <div
                    className="mb-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '32px',
                      fontWeight: 700,
                      color: '#755b00',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '13px',
                      color: '#6b7280',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
