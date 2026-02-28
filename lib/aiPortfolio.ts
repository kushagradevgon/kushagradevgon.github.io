import { SITE, EXPERIENCE, PROJECTS, TECH_STACK } from '@/constants';

/** Build context string from portfolio for AI/QA */
export function getPortfolioContext(): string {
  const tech = [
    ...TECH_STACK.frontend,
    ...TECH_STACK.backend,
    ...TECH_STACK.eventSystems,
    ...TECH_STACK.databases,
    ...TECH_STACK.cloudDevOps,
    ...TECH_STACK.ai,
  ].join(', ');
  const exp = EXPERIENCE.map((e) => `${e.company}: ${e.role}. ${e.description}`).join(' ');
  const proj = PROJECTS.map((p) => `${p.title}: ${p.description}`).join(' ');
  return `${SITE.name}. ${SITE.title}. ${SITE.bio} Tech: ${tech}. Experience: ${exp}. Projects: ${proj}`;
}

/** Keyword triggers and answer generators (AI-style Q&A from portfolio data) */
const QA: { keywords: string[]; answer: () => string }[] = [
  {
    keywords: ['who are you', 'what do you do', 'tell me about', 'introduce', 'about you'],
    answer: () =>
      `${SITE.name} — ${SITE.title}. ${SITE.bio} I focus on systems, APIs, and shipping products from idea to production.`,
  },
  {
    keywords: ['experience', 'work', 'worked', 'companies', 'jobs', 'career'],
    answer: () =>
      `I've worked at: ${EXPERIENCE.map((e) => `${e.company} (${e.role})`).join('; ')}. ${EXPERIENCE.map((e) => e.description).join(' ')}`,
  },
  {
    keywords: ['project', 'projects', 'built', 'build', 'portfolio'],
    answer: () =>
      `Notable projects: ${PROJECTS.slice(0, 5).map((p) => p.title).join('; ')}. ${PROJECTS[0]?.description ?? ''} And more — check the Projects section.`,
  },
  {
    keywords: ['tech', 'stack', 'technologies', 'skills', 'tools', 'use', 'what do you use'],
    answer: () =>
      `I use: Frontend — ${TECH_STACK.frontend.join(', ')}. Backend — ${TECH_STACK.backend.join(', ')}. Cloud & DevOps — ${TECH_STACK.cloudDevOps.join(', ')}. Databases — ${TECH_STACK.databases.join(', ')}. AI — ${TECH_STACK.ai.join(', ')}.`,
  },
  {
    keywords: ['contact', 'email', 'reach', 'hire', 'available'],
    answer: () =>
      `You can reach me via the contact form on this page; messages go to ${SITE.contactEmail}. I'm open to interesting opportunities.`,
  },
  /* Freelancing */
  {
    keywords: ['freelance', 'freelancing', 'hire you', 'hire me', 'work with you', 'work together', 'collaborate', 'project together'],
    answer: () => SITE.freelancing,
  },
  {
    keywords: ['services', 'what do you offer', 'what can you build', 'what do you do for clients', 'offer'],
    answer: () =>
      `I offer: full-stack web apps (React, Next.js, Node), APIs and microservices, event-driven systems (Kafka, queues), cloud and DevOps (AWS, Docker, K8s), and AI integrations. ${SITE.freelancing}`,
  },
  {
    keywords: ['price', 'pricing', 'rate', 'rates', 'cost', 'how much', 'budget'],
    answer: () =>
      `Pricing depends on scope, timeline, and complexity. Describe your project in the contact form and I’ll get back with a rough estimate and next steps. No obligation.`,
  },
  {
    keywords: ['how to start', 'how to hire', 'process', 'get started', 'start a project', 'next steps'],
    answer: () =>
      `Use the “Get in touch” form below: tell me about your project, goals, and timeline. I’ll reply to discuss scope and how we can work together.`,
  },
  {
    keywords: ['availability', 'available', 'when', 'timeline', 'schedule'],
    answer: () =>
      `I’m open to new projects. Send your requirements via the contact form and I’ll respond with availability and a proposed timeline.`,
  },
  {
    keywords: ['build my project', 'make my app', 'develop', 'create my', 'need a developer', 'looking for developer'],
    answer: () =>
      `I’d be glad to discuss your project. Use the contact form to describe what you want to build; I’ll reply to ${SITE.contactEmail} and we can align on scope and next steps.`,
  },
  {
    keywords: ['ticmint', 'agrowave', 'vapprtech', 'sprintmoney', 'gourmet', 'rymp', 'agrishots'],
    answer: () => {
      const names = ['Ticmint', 'Agrowave', 'Vapprtech', 'Sprintmoney', 'Gourmet Planet', 'RYMP', 'Agrishots'];
      const q = names.find((n) => EXPERIENCE.some((e) => e.company.includes(n)) || PROJECTS.some((p) => p.title.includes(n)));
      const exp = EXPERIENCE.find((e) => e.company.toLowerCase().includes((q ?? '').toLowerCase()));
      const proj = PROJECTS.find((p) => p.title.toLowerCase().includes((q ?? '').toLowerCase()));
      if (exp) return `${exp.company}: ${exp.role}. ${exp.description}`;
      if (proj) return `${proj.title}: ${proj.description}`;
      return `I've worked on several products — check Experience and Projects for details.`;
    },
  },
];

/** Get an AI-style answer from portfolio data based on the user question */
export function getAnswer(question: string): string {
  const q = question.toLowerCase().trim();
  if (!q) return 'Ask me about my experience, projects, or tech stack.';
  for (const { keywords, answer } of QA) {
    if (keywords.some((k) => q.includes(k))) return answer();
  }
  return `I'm ${SITE.name}. ${SITE.bio} Ask about my experience, projects, tech stack, or freelancing—or use the contact form to discuss your project.`;
}
