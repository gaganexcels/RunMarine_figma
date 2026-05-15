import { motion } from 'motion/react';
import { useState } from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { PageHero } from '../../components/PageHero';

export function LeadershipTeam() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const team = [
    {
      name: 'Captain Rajesh Sharma',
      position: 'Chief Executive Officer',
      department: 'Executive Leadership',
      experience: '30+ years',
      expertise: 'Maritime Operations, Strategic Planning',
      bio: 'Veteran master mariner with extensive experience in vessel operations and maritime business development.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
    {
      name: 'Priya Menon',
      position: 'Chief Operations Officer',
      department: 'Operations',
      experience: '25+ years',
      expertise: 'Fleet Management, Technical Operations',
      bio: 'Expert in fleet optimization and technical management with a track record of operational excellence.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
    {
      name: 'Captain Vikram Desai',
      position: 'Head of Crew Management',
      department: 'Crew Management',
      experience: '28+ years',
      expertise: 'Seafarer Recruitment, Training & Development',
      bio: 'Dedicated to crew welfare and professional development with global recruitment expertise.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
    {
      name: 'Anjali Kapoor',
      position: 'Chief Financial Officer',
      department: 'Finance',
      experience: '20+ years',
      expertise: 'Maritime Finance, Risk Management',
      bio: 'Financial strategist specializing in maritime investments and operational cost optimization.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
    {
      name: 'Chief Engineer Amit Patel',
      position: 'Head of Technical Services',
      department: 'Technical',
      experience: '32+ years',
      expertise: 'Marine Engineering, Dry-docking, Inspections',
      bio: 'Technical expert with deep knowledge of vessel systems and maintenance protocols.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
    {
      name: 'Sarah D\'Souza',
      position: 'Head of Compliance & Safety',
      department: 'Compliance',
      experience: '22+ years',
      expertise: 'Maritime Law, ISM/ISPS Compliance',
      bio: 'Legal and compliance specialist ensuring adherence to international maritime regulations.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden bg-[#F8F7F4] cursor-pointer"
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
                          <Linkedin size={20} />
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
