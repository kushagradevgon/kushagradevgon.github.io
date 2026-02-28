'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TechBadgeProps {
  label: string;
  className?: string;
  delay?: number;
}

export function TechBadge({ label, className, delay = 0 }: TechBadgeProps) {
  return (
    <motion.span
      className={cn(
        'inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300',
        'transition-colors duration-200 hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-indigo-200',
        className
      )}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.05 }}
    >
      {label}
    </motion.span>
  );
}
