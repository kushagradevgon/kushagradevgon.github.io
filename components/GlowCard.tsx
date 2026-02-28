'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverGlow?: boolean;
}

export function GlowCard({
  children,
  className,
  delay = 0,
  hoverGlow = true,
}: GlowCardProps) {
  return (
    <motion.div
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl',
        'transition-all duration-300',
        hoverGlow && 'glow-border hover:border-indigo-500/25',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Subtle top gradient line */}
      {hoverGlow && (
        <div
          className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-60"
          aria-hidden
        />
      )}
      {children}
    </motion.div>
  );
}
