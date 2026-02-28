'use client';

import { motion } from 'framer-motion';
import { Hero } from '@/sections/Hero';
import { TransitionBand } from '@/components/TransitionBand';
import { TechStack } from '@/sections/TechStack';
import { Experience } from '@/sections/Experience';
import { Projects } from '@/sections/Projects';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';

const pageVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export default function HomePage() {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative"
    >
      <Hero />
      <TransitionBand />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </motion.main>
  );
}
