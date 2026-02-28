'use client';

import { useState, FormEvent, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { SITE } from '@/constants';
import { getAnswer } from '@/lib/aiPortfolio';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const CHIPS = [
  {
    label: 'What is your React experience?',
    q: 'What is your React experience?',
    icon: (
      <svg className="h-3.5 w-3.5 shrink-0 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    label: 'Show me dynamic projects',
    q: 'Show me dynamic projects',
    icon: (
      <svg className="h-3.5 w-3.5 shrink-0 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: 'Available for full-time?',
    q: 'Available for full-time?',
    icon: (
      <svg className="h-3.5 w-3.5 shrink-0 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
];

type AIStatus = 'idle' | 'thinking' | 'done';

const DOTS = [0, 1, 2];

export function Hero() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [aiStatus, setAiStatus] = useState<AIStatus>('idle');
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAsk = async (e: FormEvent) => {
    e.preventDefault();
    const q = question.trim();
    if (!q) return;
    setAiStatus('thinking');
    setAnswer('');
    await new Promise((r) => setTimeout(r, 700));
    setAnswer(getAnswer(q));
    setAiStatus('done');
  };

  const runChip = (q: string) => {
    setQuestion(q);
    setAiStatus('thinking');
    setAnswer('');
    inputRef.current?.focus();
    setTimeout(() => {
      setAnswer(getAnswer(q));
      setAiStatus('done');
    }, 700);
  };

  return (
    <section className="relative isolate min-h-screen overflow-x-hidden hero-bg-base">

      {/* ── Aurora blobs ── */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
        {/* Main teal / cyan aurora — large, dominant, center-right */}
        <div
          className="aurora-blob-1 absolute rounded-full"
          style={{
            width: '680px', height: '600px',
            top: '5%', left: '38%',
            background: 'radial-gradient(ellipse, rgba(13,214,188,0.65) 0%, rgba(6,182,212,0.5) 30%, rgba(20,184,166,0.25) 60%, transparent 80%)',
            filter: 'blur(70px)',
          }}
        />
        {/* Violet / purple blob — left */}
        <div
          className="aurora-blob-2 absolute rounded-full"
          style={{
            width: '500px', height: '520px',
            top: '20%', left: '-8%',
            background: 'radial-gradient(ellipse, rgba(139,92,246,0.7) 0%, rgba(109,40,217,0.55) 35%, rgba(76,29,149,0.3) 65%, transparent 80%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Deep purple bottom-right */}
        <div
          className="aurora-blob-3 absolute rounded-full"
          style={{
            width: '550px', height: '480px',
            bottom: '-5%', right: '5%',
            background: 'radial-gradient(ellipse, rgba(124,58,237,0.55) 0%, rgba(91,33,182,0.4) 40%, transparent 75%)',
            filter: 'blur(90px)',
          }}
        />
        {/* Secondary teal upper-right */}
        <div
          className="aurora-blob-4 absolute rounded-full"
          style={{
            width: '380px', height: '360px',
            top: '0%', right: '10%',
            background: 'radial-gradient(ellipse, rgba(20,184,166,0.45) 0%, rgba(6,182,212,0.3) 50%, transparent 75%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      {/* ── Hexagonal grid ── */}
      <div
        className="hero-hex-grid pointer-events-none absolute inset-0 -z-[9] opacity-60"
        aria-hidden
      />

      {/* ── Content ── */}
      <div className="relative z-0 flex min-h-screen flex-col items-center justify-center px-5 pt-20 pb-28 sm:px-8">
        <motion.div
          className="mx-auto w-full max-w-[600px] text-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.p
            variants={item}
            className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-300"
          >
            Full-Stack Systems Engineer
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={item}
            className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl md:leading-[1.05]"
          >
            <span className="gradient-text">{SITE.name}</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={item}
            className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg"
          >
            {SITE.title}
          </motion.p>

          {/* Bio */}
          <motion.p
            variants={item}
            className="mt-3 text-[14px] leading-relaxed text-slate-400"
          >
            {SITE.bio}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#experience"
              className="btn-hero-primary min-h-[46px] px-7 py-3 text-[15px]"
            >
              View experience
            </a>
            <a
              href="#projects"
              className="btn-hero-glass min-h-[46px] px-7 py-3 text-[15px] font-medium"
            >
              See projects
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-glass min-h-[46px] px-7 py-3 text-[15px] font-medium"
            >
              GitHub
            </a>
          </motion.div>

          {/* AI section */}
          <motion.div variants={item} className="mt-12">
            {/* Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {CHIPS.map(({ label, q, icon }) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => runChip(q)}
                  className="chip-ask"
                >
                  {icon}
                  {label}
                </button>
              ))}
            </div>

            {/* Ask bar — animated pill */}
            <form onSubmit={handleAsk} className="mt-4">
              <motion.div
                className="ask-bar relative flex items-center gap-2 px-5 py-2 overflow-hidden"
                animate={
                  aiStatus === 'thinking'
                    ? { boxShadow: ['0 0 30px -8px rgba(109,40,217,0.35)', '0 0 55px -6px rgba(13,214,188,0.5)', '0 0 40px -8px rgba(139,92,246,0.5)', '0 0 30px -8px rgba(109,40,217,0.35)'] }
                    : focused
                    ? { boxShadow: '0 0 48px -8px rgba(109,40,217,0.6), inset 0 0 0 1px rgba(255,255,255,0.05)' }
                    : { boxShadow: '0 0 32px -10px rgba(109,40,217,0.35)' }
                }
                transition={{ duration: 1.8, repeat: aiStatus === 'thinking' ? Infinity : 0, ease: 'easeInOut' }}
              >
                {/* Animated shimmer bar that sweeps when thinking */}
                <AnimatePresence>
                  {aiStatus === 'thinking' && (
                    <motion.div
                      className="pointer-events-none absolute inset-0 rounded-full"
                      initial={{ x: '-110%', opacity: 0 }}
                      animate={{ x: '110%', opacity: [0, 0.3, 0.3, 0] }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.2 }}
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(13,214,188,0.35), rgba(139,92,246,0.25), transparent)',
                      }}
                    />
                  )}
                </AnimatePresence>

                {/* Idle sparkle icon */}
                <motion.div
                  animate={
                    aiStatus === 'thinking'
                      ? { rotate: 360, scale: [1, 1.2, 1] }
                      : { rotate: 0, scale: 1 }
                  }
                  transition={
                    aiStatus === 'thinking'
                      ? { duration: 1.5, repeat: Infinity, ease: 'linear' }
                      : { duration: 0.3 }
                  }
                  className="shrink-0"
                >
                  <svg width="16" height="16" viewBox="0 0 44 44" fill="none" className="opacity-60">
                    <path
                      d="M22 0 L24.5 19.5 L44 22 L24.5 24.5 L22 44 L19.5 24.5 L0 22 L19.5 19.5 Z"
                      fill={aiStatus === 'thinking' ? '#0dd6bc' : '#a78bfa'}
                    />
                  </svg>
                </motion.div>

                <input
                  ref={inputRef}
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  placeholder="Ask about experience, projects, freelancing..."
                  disabled={aiStatus === 'thinking'}
                  className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 outline-none disabled:opacity-60"
                />

                <motion.button
                  type="submit"
                  disabled={aiStatus === 'thinking'}
                  className="btn-hero-primary relative shrink-0 overflow-hidden px-5 py-2 text-sm"
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.04 }}
                >
                  <AnimatePresence mode="wait">
                    {aiStatus === 'thinking' ? (
                      <motion.span
                        key="dots"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-[3px]"
                      >
                        {DOTS.map((i) => (
                          <motion.span
                            key={i}
                            className="h-1.5 w-1.5 rounded-full bg-white"
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                          />
                        ))}
                      </motion.span>
                    ) : (
                      <motion.span
                        key="ask"
                        initial={{ opacity: 0, x: 6 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -6 }}
                        transition={{ duration: 0.18 }}
                      >
                        Ask
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.div>

              {/* Answer card */}
              <AnimatePresence>
                {aiStatus === 'done' && answer && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-3 rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-left text-[13px] leading-relaxed text-slate-300 backdrop-blur-md"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-teal-400">
                        Answer
                      </span>
                    </div>
                    {answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </motion.div>


        {/* Sparkle decoration — bottom right */}
        <motion.div
          className="pointer-events-none absolute bottom-10 right-8 sm:bottom-14 sm:right-12"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <svg width="44" height="44" viewBox="0 0 44 44" fill="white" aria-hidden>
            <path d="M22 0 L24.5 19.5 L44 22 L24.5 24.5 L22 44 L19.5 24.5 L0 22 L19.5 19.5 Z" />
          </svg>
        </motion.div>
      </div>

    </section>
  );
}
