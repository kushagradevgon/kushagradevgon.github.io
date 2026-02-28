'use client';

import { motion } from 'framer-motion';
import { SITE } from '@/constants';

export function Footer() {
  return (
    <footer className="section-bg-contact relative border-t border-pink-100 py-14">
      <motion.div
        className="mx-auto max-w-6xl px-6 text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} {SITE.name}. Built with Next.js, Tailwind
          & Framer Motion.
        </p>
      </motion.div>
    </footer>
  );
}
