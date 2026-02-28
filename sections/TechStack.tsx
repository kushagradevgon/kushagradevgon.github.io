'use client';

import { motion } from 'framer-motion';
import { TECH_STACK } from '@/constants';
import { getTechLogo } from '@/lib/techLogos';

const categories: {
  key: keyof typeof TECH_STACK;
  label: string;
  accent: string;
  lightBg: string;
  lightBorder: string;
  dot: string;
}[] = [
  { key: 'frontend',     label: 'Frontend',      accent: '#0284c7', lightBg: '#f0f9ff', lightBorder: '#bae6fd', dot: 'bg-sky-500' },
  { key: 'backend',      label: 'Backend',        accent: '#059669', lightBg: '#f0fdf4', lightBorder: '#a7f3d0', dot: 'bg-emerald-500' },
  { key: 'eventSystems', label: 'Event Systems',  accent: '#d97706', lightBg: '#fffbeb', lightBorder: '#fde68a', dot: 'bg-amber-500' },
  { key: 'databases',    label: 'Databases',      accent: '#7c3aed', lightBg: '#f5f3ff', lightBorder: '#ddd6fe', dot: 'bg-violet-500' },
  { key: 'cloudDevOps',  label: 'Cloud & DevOps', accent: '#2563eb', lightBg: '#eff6ff', lightBorder: '#bfdbfe', dot: 'bg-blue-500' },
  { key: 'ai',           label: 'AI',             accent: '#db2777', lightBg: '#fdf2f8', lightBorder: '#fbcfe8', dot: 'bg-pink-500' },
];

export function TechStack() {
  return (
    <section id="tech" className="section-bg-tech relative py-24 md:py-32">

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-sky-500">
            What I work with
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Tech Stack
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-12 rounded-full heading-accent-blue" />
          <p className="mx-auto mt-4 max-w-xl text-[15px] text-slate-500">
            Tools and systems I use to build scalable products from idea to production.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ key, label, accent, lightBg, lightBorder, dot }, i) => (
            <motion.div
              key={key}
              className="group relative overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
              style={{ borderColor: lightBorder }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ boxShadow: `0 8px 32px -8px ${accent}30` }}
            >
              {/* Top accent line */}
              <div
                className="absolute left-0 right-0 top-0 h-[3px] rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, ${accent}, ${accent}40, transparent)` }}
              />

              <div className="flex items-center gap-2.5">
                <span className={`h-2 w-2 rounded-full ${dot}`} />
                <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: accent }}>
                  {label}
                </h3>
              </div>

              <ul className="mt-4 flex flex-wrap gap-2">
                {TECH_STACK[key].map((tech, j) => (
                  <motion.li
                    key={tech}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 + j * 0.04 }}
                  >
                    <span
                      className="inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-[13px] font-medium text-slate-600 transition-colors hover:text-slate-900"
                      style={{ backgroundColor: lightBg, borderColor: lightBorder }}
                    >
                      <img
                        src={getTechLogo(tech)}
                        alt=""
                        className="h-3.5 w-3.5 shrink-0"
                        width={14}
                        height={14}
                        loading="lazy"
                      />
                      {tech}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
