import { motion } from 'motion/react';
import { useState, useRef } from 'react';
import { Play, X } from 'lucide-react';

interface VideoPlayerProps {
  thumbnailUrl: string;
  videoUrl: string;
  title: string;
  description?: string;
}

export function VideoPlayer({ thumbnailUrl, videoUrl, title, description }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 100);
  };

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  };

  return (
    <div className="relative">
      {!isPlaying ? (
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative overflow-hidden group cursor-pointer"
          onClick={handlePlay}
          style={{
            aspectRatio: '16/9',
            borderRadius: '4px',
          }}
        >
          {/* Thumbnail */}
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />

          {/* Overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, rgba(10,30,60,0.6) 0%, rgba(10,30,60,0.3) 100%)',
            }}
          >
            {/* Play Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(12px)',
                border: '2px solid rgba(255,255,255,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 250ms ease',
              }}
            >
              <Play size={32} fill="white" className="text-white ml-1" />
            </motion.div>
          </div>

          {/* Text Overlay */}
          {description && (
            <div
              className="absolute bottom-0 left-0 right-0 p-6"
              style={{
                background: 'linear-gradient(180deg, rgba(10,30,60,0) 0%, rgba(10,30,60,0.8) 100%)',
              }}
            >
              <h3
                className="text-white mb-1"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '20px',
                  fontWeight: 600,
                }}
              >
                {title}
              </h3>
              <p
                className="text-white/80"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                }}
              >
                {description}
              </p>
            </div>
          )}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative"
          style={{
            aspectRatio: '16/9',
            borderRadius: '4px',
            overflow: 'hidden',
            background: 'black',
          }}
        >
          {/* Video */}
          <video
            ref={videoRef}
            controls
            className="w-full h-full"
            style={{ borderRadius: '4px' }}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 transition-all"
            style={{ borderRadius: '50%' }}
          >
            <X size={20} className="text-white" />
          </button>
        </motion.div>
      )}
    </div>
  );
}
