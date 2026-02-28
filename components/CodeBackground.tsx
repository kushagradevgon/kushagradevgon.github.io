'use client';

const CODE_TOKENS = [
  'const',
  '=>',
  '{}',
  '()',
  'function',
  'return',
  'import',
  '</>',
  'async',
  'await',
  'try',
  '[]',
  'export',
  'interface',
  'type',
  '=>',
  '...',
  '&&',
  '||',
  'null',
  'true',
  'false',
];

/** Positions and delays for floating code tokens - deterministic for SSR/hydration */
const POSITIONS = [
  { left: '5%', top: '10%', delay: 0 },
  { left: '15%', top: '25%', delay: 2 },
  { left: '85%', top: '15%', delay: 1 },
  { left: '75%', top: '70%', delay: 3 },
  { left: '25%', top: '80%', delay: 1.5 },
  { left: '90%', top: '45%', delay: 0.5 },
  { left: '8%', top: '55%', delay: 2.5 },
  { left: '50%', top: '20%', delay: 1 },
  { left: '60%', top: '85%', delay: 2 },
  { left: '35%', top: '12%', delay: 0.8 },
  { left: '70%', top: '30%', delay: 1.8 },
  { left: '20%', top: '60%', delay: 2.2 },
  { left: '95%', top: '75%', delay: 0.3 },
  { left: '42%', top: '92%', delay: 1.2 },
  { left: '55%', top: '5%', delay: 2.8 },
];

export function CodeBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-[5] overflow-hidden"
      aria-hidden
    >
      {CODE_TOKENS.slice(0, POSITIONS.length).map((token, i) => (
        <span
          key={`${token}-${i}`}
          className="code-float absolute font-mono text-xs font-medium text-indigo-500/15 selection:bg-transparent"
          style={{
            left: POSITIONS[i].left,
            top: POSITIONS[i].top,
            animationDelay: `${POSITIONS[i].delay}s`,
          }}
        >
          {token}
        </span>
      ))}
    </div>
  );
}
