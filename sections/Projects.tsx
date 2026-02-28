'use client';

import { motion } from 'framer-motion';
import { PROJECTS } from '@/constants';

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-bg-projects relative py-24 md:py-32">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-violet-600">
            What I've built
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Projects
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-12 rounded-full heading-accent-violet" />
          <p className="mx-auto mt-4 max-w-xl text-[15px] text-slate-500">
            Selected product and platform work across fintech, agri-tech, and infrastructure.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-violet-100 bg-white shadow-sm transition-all duration-300 hover:border-violet-200 hover:shadow-lg"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ boxShadow: '0 12px 40px -10px rgba(139,92,246,0.2)', y: -2 }}
            >
              {/* Index number */}
              <div className="absolute right-4 top-4 text-[11px] font-bold text-violet-200">
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Top accent bar on hover */}
              <div className="h-[3px] w-full bg-gradient-to-r from-violet-500 via-indigo-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex flex-1 flex-col p-6">
                <h3 className="pr-8 text-[15px] font-semibold leading-snug text-slate-800">
                  {project.title}
                </h3>
                <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-slate-500">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-violet-100 bg-violet-50 px-2 py-0.5 text-[11px] font-medium text-violet-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {(project.github || project.demo) && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[38px] items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-600 transition-colors hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700"
                      >
                        <GitHubIcon className="h-3.5 w-3.5" />
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[38px] items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-600 transition-colors hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700"
                      >
                        <ExternalIcon className="h-3.5 w-3.5" />
                        Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
