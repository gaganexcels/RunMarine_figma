import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { VideoPlayer } from './VideoPlayer';

interface VideoItem {
  thumbnailUrl: string;
  videoUrl: string;
  title: string;
  description: string;
}

export function VideoShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const videos: VideoItem[] = [
    {
      thumbnailUrl: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-ship-crew-working-on-deck-4095-large.mp4',
      title: 'Technical Excellence',
      description: 'See our technical teams perform comprehensive vessel inspections and maintenance',
    },
    {
      thumbnailUrl: 'https://images.unsplash.com/photo-1640471617789-39d28cc34aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-cargo-ship-in-the-sea-23588-large.mp4',
      title: 'Global Operations',
      description: "Experience our fleet navigating the world's most challenging maritime routes",
    },
    {
      thumbnailUrl: 'https://images.unsplash.com/photo-1645865406062-872af9faa81a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-container-ship-sailing-through-the-ocean-1904-large.mp4',
      title: 'Crew Training',
      description: 'Discover our comprehensive crew development programs and STCW training facilities',
    },
  ];

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
            WATCH OUR STORY
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
            Experience RunMarine<span style={{ color: '#e6c364' }}>.</span>
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
            Go behind the scenes of our maritime operations and see what sets us apart
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <VideoPlayer
                thumbnailUrl={video.thumbnailUrl}
                videoUrl={video.videoUrl}
                title={video.title}
                description={video.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
