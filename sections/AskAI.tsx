'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/SectionWrapper';
import { getAnswer } from '@/lib/aiPortfolio';
import { cn } from '@/lib/utils';

type Status = 'idle' | 'thinking' | 'done';

export function AskAI() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const q = question.trim();
    if (!q) return;
    setStatus('thinking');
    setAnswer('');
    // Simulate a short delay for "AI thinking" feel
    await new Promise((r) => setTimeout(r, 600));
    const reply = getAnswer(q);
    setAnswer(reply);
    setStatus('done');
  };

  return (
    <SectionWrapper id="ask-ai" className="px-6">
      <div className="mx-auto max-w-2xl">
        <div className="relative inline-flex flex-col items-center mx-auto mb-10">
          <h2 className="section-title text-center text-3xl font-bold md:text-4xl">
            Ask AI about me
          </h2>
          <div
            className="mt-2 h-0.5 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
            aria-hidden
          />
        </div>
        <p className="mx-auto mb-8 max-w-md text-center text-zinc-400">
          Ask about my experience, projects, or tech stack. Answers are generated from my portfolio.
        </p>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-2">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="e.g. What’s your experience? What tech do you use?"
              disabled={status === 'thinking'}
              className={cn(
                'flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 disabled:opacity-50',
                'focus:border-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/20'
              )}
            />
            <button
              type="submit"
              disabled={status === 'thinking'}
              className={cn(
                'rounded-lg bg-indigo-500 px-5 py-3 font-medium text-white',
                'transition-colors hover:bg-indigo-600 disabled:opacity-60'
              )}
            >
              {status === 'thinking' ? '...' : 'Ask'}
            </button>
          </div>

          {status === 'thinking' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-400"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-400" />
              <span>Thinking...</span>
            </motion.div>
          )}

          {status === 'done' && answer && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-lg border border-indigo-500/20 bg-indigo-500/5 px-4 py-4 text-zinc-200"
            >
              <p className="text-sm font-medium text-indigo-400/90 mb-1">Answer</p>
              <p className="text-sm leading-relaxed">{answer}</p>
            </motion.div>
          )}
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
