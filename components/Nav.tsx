'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SITE } from '@/constants';
import { cn } from '@/lib/utils';

const LINKS = [
  { href: '#', label: 'Home' },
  { href: '#tech', label: 'Tech' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

function LogoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        'fixed left-0 right-0 top-0 z-40 transition-all duration-300',
        scrolled ? 'bg-[#0f172a]/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      )}
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="#"
          className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-cyan-400 transition-colors hover:bg-white/5 hover:text-cyan-300"
          aria-label="Home"
        >
          <LogoIcon className="h-5 w-5" />
        </Link>
        <ul className="flex items-center gap-0.5 sm:gap-1">
          {LINKS.map(({ href, label }) => (
            <li key={label}>
              <Link
                href={href}
                className="flex min-h-[44px] items-center rounded-lg px-3 py-2 text-[15px] font-medium text-white/80 transition-all hover:bg-white/5 hover:text-white hover:shadow-[0_0_20px_-5px_rgba(139,92,246,0.4)] sm:px-4"
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="ml-1 border-l border-white/10 pl-2 sm:ml-2">
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-white/80 transition-colors hover:bg-white/5 hover:text-white"
              aria-label="GitHub"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
