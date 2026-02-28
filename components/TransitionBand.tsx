'use client';

import { motion } from 'framer-motion';

export function TransitionBand() {
  return (
    <div
      className="relative overflow-hidden"
      style={{ height: 80, background: 'linear-gradient(to bottom, #130a2a 0%, #f5f9ff 100%)' }}
    >
      {/* Shimmer sweep left → right */}
      <motion.div
        className="absolute inset-y-0 w-1/2"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(139,92,246,0.22), rgba(56,189,248,0.18), transparent)',
        }}
        animate={{ x: ['-100%', '300%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
      />
      {/* Shimmer sweep right → left, offset */}
      <motion.div
        className="absolute inset-y-0 w-1/3"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(236,72,153,0.18), transparent)',
        }}
        animate={{ x: ['300%', '-100%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear', repeatDelay: 0.5, delay: 1.2 }}
      />
      {/* Center glow orb */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 400,
          height: 60,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(139,92,246,0.25) 0%, rgba(56,189,248,0.1) 50%, transparent 70%)',
          filter: 'blur(16px)',
        }}
        animate={{ scaleX: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
