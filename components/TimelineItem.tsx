'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TimelineItemProps {
  company: string;
  role: string;
  description: string;
  period: string;
  index: number;
  isLast?: boolean;
}

export function TimelineItem({
  company,
  role,
  description,
  period,
  index,
  isLast = false,
}: TimelineItemProps) {
  return (
    <motion.div
      className={cn('relative flex gap-6 md:gap-8', !isLast && 'pb-16')}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Dot */}
      <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center">
        <motion.div
          className="h-3 w-3 rounded-full border-2 border-indigo-500 bg-background"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.2 }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 pt-0.5">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-semibold text-white">{company}</h3>
          <span className="text-sm text-zinc-500">·</span>
          <span className="text-sm text-indigo-400">{role}</span>
          <span className="ml-auto text-xs text-zinc-500">{period}</span>
        </div>
        <p className="mt-2 text-zinc-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
