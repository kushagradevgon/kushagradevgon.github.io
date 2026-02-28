'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '@/constants';
import { useGSAPScrollTrigger, animateTimelineLine } from '@/animations/gsap';

export function Experience() {
  const lineRef = useRef<HTMLDivElement>(null);
  useGSAPScrollTrigger();

  useEffect(() => {
    if (lineRef.current) {
      animateTimelineLine(lineRef);
    }
  }, []);

  return (
    <section id="experience" className="section-bg-experience relative py-24 md:py-32">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-600">
            Where I've worked
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Experience
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-12 rounded-full heading-accent-teal" />
          <p className="mx-auto mt-4 max-w-xl text-[15px] text-slate-500">
            Building products across ticketing, mobile, and agri-tech.
          </p>
        </motion.div>

        <div className="relative mt-16">
          {/* Animated timeline line */}
          <div
            ref={lineRef}
            className="absolute left-[15px] top-4 bottom-0 w-[2px] origin-top scale-y-0"
            style={{ background: 'linear-gradient(to bottom, #14b8a6, rgba(20,184,166,0.25), transparent)' }}
            aria-hidden
          />

          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.company}
              className={`relative flex gap-8 ${i !== EXPERIENCE.length - 1 ? 'pb-14' : ''}`}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              {/* Dot */}
              <div className="relative z-10 mt-1 flex h-8 w-8 shrink-0 items-center justify-center">
                <motion.div
                  className="h-3.5 w-3.5 rounded-full border-2 border-teal-500 bg-white"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 + 0.2, type: 'spring', stiffness: 300 }}
                  style={{ boxShadow: '0 0 10px rgba(20,184,166,0.4)' }}
                />
              </div>

              {/* Card */}
              <div className="flex-1 rounded-2xl border border-teal-100 bg-white p-5 shadow-sm transition-all duration-300 hover:border-teal-200 hover:shadow-md">
                {/* Company badge */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <span className="inline-block rounded-lg border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
                      {exp.company}
                    </span>
                    <p className="mt-2 text-base font-semibold text-slate-800">{exp.role}</p>
                  </div>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-500">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-slate-500">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
