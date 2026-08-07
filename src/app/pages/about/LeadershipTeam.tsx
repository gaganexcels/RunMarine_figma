import { motion } from 'motion/react';
import { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import { PageHero } from '../../components/PageHero';

export function LeadershipTeam() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const team = [
    {
      name: 'Nagaraj P. Somasi',
      position: 'Managing Director',
      department: 'Executive Leadership',
      experience: '15+ years',
      expertise: 'Maritime Operations, Strategic Planning',
      bio: 'Veteran master mariner with extensive experience in vessel operations and maritime business development.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
    {
      name: 'Gauri Shankar',
      position: 'Director',
      department: 'Corporate Management',
      experience: '10+ years',
      expertise: 'Business Operations, Client Relations & Maritime Administration',
      bio: 'Overseeing organizational growth, client coordination, and operational efficiency across diverse maritime management functions.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
    {
      name: 'Captain Sailesh Kumar',
      position: 'Chief Operations Officer',
      department: 'Operations & Logistics',
      experience: '15+ years',
      expertise: 'Fleet Operations, Maritime Logistics & Vessel Coordination',
      bio: 'Managing operational logistics and vessel coordination with hands-on maritime expertise across domestic and international operations.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
    {
      name: 'Varun Kumar',
      position: 'Crew Manager',
      department: 'Crew Management',
      experience: '20+ years',
      expertise: 'Crew Operations, Seafarer Deployment & Workforce Coordination',
      bio: 'Specialized in crew planning, seafarer coordination, and maintaining efficient workforce operations for global maritime assignments.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
    {
      name: 'Ravi Shankar Kumar',
      position: 'Founder',
      department: 'Founding Leadership',
      experience: '25+ years',
      expertise: 'Maritime Leadership, Fleet Operations & Industry Development',
      bio: 'Veteran maritime professional with decades of experience in building operational excellence and long-term shipping industry relationships.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
    // {
    //   name: 'Sarah D\'Souza',
    //   position: 'Head of Compliance & Safety',
    //   department: 'Compliance',
    //   experience: '22+ years',
    //   expertise: 'Maritime Law, ISM/ISPS Compliance',
    //   bio: 'Legal and compliance specialist ensuring adherence to international maritime regulations.',
    //   image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    // },
  ];

  return (
    <>
      <PageHero
        title="Leadership Team"
        subtitle="Experienced Professionals Guiding Our Global Operations"
        imageUrl="https://images.unsplash.com/photo-1769297603337-3dd7bfba6cc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
        imageAlt="Ship crew operations"
        height="medium"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-5xl font-bold text-[#1A1A1A] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Meet Our <span className="text-[#B8860B]">Leadership</span>
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Our executive team brings together decades of maritime expertise and global industry experience
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden bg-[#F8F7F4] cursor-pointer w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] max-w-sm md:max-w-none"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-[#0B2545]/95 p-6 flex flex-col justify-center"
                  >
                    <div className="text-white space-y-3">
                      <p className="text-sm font-semibold text-[#B8860B]">{member.department}</p>
                      <p className="text-sm"><strong>Experience:</strong> {member.experience}</p>
                      <p className="text-sm"><strong>Expertise:</strong> {member.expertise}</p>
                      <p className="text-sm leading-relaxed mt-4">{member.bio}</p>
                      <div className="flex gap-4 mt-6">
                        <button className="p-2 bg-white/10 hover:bg-white/20 transition-colors">
                          <Phone size={20} />
                        </button>
                        <button className="p-2 bg-white/10 hover:bg-white/20 transition-colors">
                          <Mail size={20} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3
                    className="text-2xl font-bold text-[#1A1A1A] mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-[#0B2545] font-semibold">{member.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
