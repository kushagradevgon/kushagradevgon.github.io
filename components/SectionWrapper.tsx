'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const defaultVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variants?: typeof defaultVariants;
}

export function SectionWrapper({
  children,
  className,
  id,
  variants = defaultVariants,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={cn('relative py-24 md:py-32', className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
    >
      {children}
    </motion.section>
  );
}
