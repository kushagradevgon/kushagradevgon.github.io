'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE } from '@/constants';
import { getAnswer } from '@/lib/aiPortfolio';

type AIStatus = 'idle' | 'thinking' | 'done';
const DOTS = [0, 1, 2];

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [askQuestion, setAskQuestion] = useState('');
  const [askAnswer, setAskAnswer] = useState('');
  const [aiStatus, setAiStatus] = useState<AIStatus>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!SITE.formspreeFormId) { setStatus('error'); return; }
    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${SITE.formspreeFormId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, subject: subject || `Contact from ${name || 'portfolio'}`, message, _replyto: email }),
      });
      if (res.ok) { setStatus('success'); setName(''); setEmail(''); setSubject(''); setMessage(''); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  const handleAsk = (e: FormEvent) => {
    e.preventDefault();
    const q = askQuestion.trim();
    if (!q) return;
    setAiStatus('thinking');
    setAskAnswer('');
    setTimeout(() => { setAskAnswer(getAnswer(q)); setAiStatus('done'); }, 500);
  };

  return (
    <section id="contact" className="section-bg-contact relative py-24 md:py-32">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-xl px-6">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-pink-500">
            Let's build together
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Get in touch
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-12 rounded-full heading-accent-pink" />
          <p className="mx-auto mt-4 max-w-md text-[15px] text-slate-500">
            Have a project in mind? Ask below or send a message directly.
          </p>
        </motion.div>

        {/* AI Ask block */}
        <motion.div
          className="mt-10 overflow-hidden rounded-2xl border border-pink-100 bg-white shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="border-b border-pink-100 bg-pink-50/50 px-5 py-3.5">
            <p className="text-[13px] font-medium text-slate-600">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-pink-400 align-middle" />
              Ask about working together
            </p>
          </div>
          <div className="p-5">
            <form onSubmit={handleAsk}>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={askQuestion}
                  onChange={(e) => setAskQuestion(e.target.value)}
                  placeholder="e.g. What do you offer? How do I hire you?"
                  disabled={aiStatus === 'thinking'}
                  className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 placeholder-slate-400 outline-none transition-all focus:border-pink-300 focus:bg-white focus:ring-2 focus:ring-pink-100 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={aiStatus === 'thinking'}
                  className="btn-hero-primary relative shrink-0 overflow-hidden px-5 py-2.5 text-sm"
                  style={{ background: 'linear-gradient(135deg, #ec4899, #be185d)' }}
                >
                  <AnimatePresence mode="wait">
                    {aiStatus === 'thinking' ? (
                      <motion.span
                        key="dots"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-1"
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
                      <motion.span key="ask" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        Ask
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
              <AnimatePresence>
                {aiStatus === 'done' && askAnswer && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-3 rounded-xl border border-pink-100 bg-pink-50 p-3 text-[13px] leading-relaxed text-slate-600"
                  >
                    {askAnswer}
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="my-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-[11px] font-medium uppercase tracking-widest text-slate-400">or send a message</span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        {/* Contact form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: 'Name', type: 'text', value: name, onChange: setName, placeholder: 'Your name', required: true },
              { label: 'Email', type: 'email', value: email, onChange: setEmail, placeholder: 'you@example.com', required: true },
            ].map(({ label, type, value, onChange, placeholder, required }) => (
              <label key={label} className="block">
                <span className="mb-1.5 block text-[13px] font-medium text-slate-600">{label}</span>
                <input
                  type={type}
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
                  placeholder={placeholder}
                  required={required}
                  disabled={status === 'sending'}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 placeholder-slate-400 outline-none transition-all focus:border-violet-300 focus:bg-white focus:ring-2 focus:ring-violet-100 disabled:opacity-50"
                />
              </label>
            ))}
          </div>
          <label className="block">
            <span className="mb-1.5 block text-[13px] font-medium text-slate-600">Subject</span>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="What's this about?"
              disabled={status === 'sending'}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 placeholder-slate-400 outline-none transition-all focus:border-violet-300 focus:bg-white focus:ring-2 focus:ring-violet-100 disabled:opacity-50"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-[13px] font-medium text-slate-600">Message</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe your project or idea..."
              rows={5}
              required
              disabled={status === 'sending'}
              className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 placeholder-slate-400 outline-none transition-all focus:border-violet-300 focus:bg-white focus:ring-2 focus:ring-violet-100 disabled:opacity-50"
            />
          </label>

          <AnimatePresence>
            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="rounded-xl border border-emerald-200 bg-emerald-50 py-3 text-center text-sm font-medium text-emerald-700"
              >
                Message sent! I'll get back to you soon.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="rounded-xl border border-red-200 bg-red-50 py-3 text-center text-sm font-medium text-red-600"
              >
                {SITE.formspreeFormId ? 'Something went wrong. Try again.' : 'Add your Formspree form ID in constants/site.ts.'}
              </motion.p>
            )}
          </AnimatePresence>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn-hero-primary w-full min-h-[48px] text-[15px]"
            style={{ background: 'linear-gradient(135deg, #ec4899, #7c3aed)' }}
          >
            <AnimatePresence mode="wait">
              {status === 'sending' ? (
                <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="flex items-center justify-center gap-2"
                >
                  {DOTS.map((i) => (
                    <motion.span key={i} className="h-2 w-2 rounded-full bg-white"
                      animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                    />
                  ))}
                </motion.span>
              ) : (
                <motion.span key="send" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  Send message
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </motion.form>
      </div>
    </section>
  );
}
