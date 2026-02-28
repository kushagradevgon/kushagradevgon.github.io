'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  as?: 'button' | 'a';
  href?: string;
  onClick?: () => void;
}

export function MagneticButton({
  children,
  className,
  strength = 0.35,
  as = 'button',
  href,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { stiffness: 300, damping: 20 };
  const xSpring = useSpring(x, spring);
  const ySpring = useSpring(y, spring);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;
    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const commonProps = {
    ref: ref as React.RefObject<HTMLButtonElement & HTMLAnchorElement>,
    className: cn(
      'relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3',
      'bg-indigo-500/90 text-white font-medium backdrop-blur-sm',
      'border border-indigo-400/20 shadow-lg shadow-indigo-500/20',
      'transition-colors duration-200 hover:bg-indigo-500',
      className
    ),
    onMouseMove: handleMouseMove,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: handleMouseLeave,
    style: {
      x: xSpring,
      y: ySpring,
    },
  };

  if (as === 'a' && href) {
    return (
      <motion.a href={href} {...commonProps} onClick={onClick}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" {...commonProps} onClick={onClick}>
      {children}
    </motion.button>
  );
}
