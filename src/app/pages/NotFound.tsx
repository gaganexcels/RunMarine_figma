import { Link } from 'react-router';
import { motion } from 'motion/react';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F7F4] px-6">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-9xl font-bold text-[#0B2545] mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          404
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-bold text-[#1A1A1A] mb-4"
        >
          Page Not Found
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[#6B7280] mb-8"
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-[#0B2545] text-white hover:bg-[#13505B] transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
