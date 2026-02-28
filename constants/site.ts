export const SITE = {
  name: 'Kushagra Devgon',
  title: 'Full-Stack Systems Engineer | Cloud & Microservices Architect | AI-Integrated Product Builder',
  bio: 'I build scalable systems, APIs, and products—from idea to production.',
  github: 'https://github.com/kushagradevgon',
  contactEmail: 'kushagradevgon@gmail.com',
  /** Formspree form ID — create a form at https://formspree.io and set your email to receive submissions. Replace with your form ID. */
  formspreeFormId: '',
  /** Freelancing: short blurb for AI and copy */
  freelancing:
    'I take on freelance projects: web apps, APIs, microservices, cloud setup, and AI integrations. Share your idea via the contact form and we can discuss scope, timeline, and next steps.',
  description:
    'Portfolio of Kushagra Devgon — Full-Stack Systems Engineer specializing in cloud architecture, microservices, event-driven systems, and AI-integrated products.',
  url: 'https://kushagradevgon.github.io',
  ogImage: '/og.png',
} as const;

export const TECH_STACK = {
  frontend: ['React.js', 'Next.js'],
  backend: ['Node.js', 'NestJS', 'Express'],
  eventSystems: ['Kafka', 'RabbitMQ'],
  databases: ['PostgreSQL', 'MongoDB', 'Firebase'],
  cloudDevOps: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Nginx'],
  ai: ['OpenAI', 'Claude API', 'Prompt engineering'],
} as const;

export const EXPERIENCE = [
  {
    company: 'Ticmint',
    role: 'Full-Stack / Systems',
    description:
      'NFT-based ticketing platform — Multi-tenant architecture, Kafka event streaming, AI integrations, and cloud deployments.',
    period: 'Recent',
  },
  {
    company: 'Vapprtech',
    role: 'Full-Stack Engineer',
    description: 'End-to-end mobile applications with CI/CD pipelines and scalable backend services.',
    period: 'Past',
  },
  {
    company: 'Agrowave & Agrishots',
    role: 'Full-Stack Developer',
    description: 'Full-stack applications for agri-tech products and data pipelines.',
    period: 'Past',
  },
] as const;

const GITHUB_BASE = 'https://github.com/kushagradevgon';

export const PROJECTS = [
  {
    title: 'Fundraiser Platform (Blockchain)',
    description:
      'Decentralized fundraising platform built on blockchain—transparent donations, smart contracts for fund release, and donor verification.',
    tags: ['Blockchain', 'Smart Contracts', 'Web3', 'TypeScript'],
    github: '',
    demo: '',
  },
  {
    title: 'Notification System',
    description:
      'Scalable real-time notification system supporting multiple channels (push, email, in-app), delivery queues, and user preferences.',
    tags: ['Node.js', 'Redis', 'Kafka', 'Microservices'],
    github: '',
    demo: '',
  },
  {
    title: 'Payment System',
    description:
      'End-to-end payment processing system with multiple gateways, reconciliation, refunds, and subscription billing.',
    tags: ['Node.js', 'PostgreSQL', 'Stripe', 'API'],
    github: '',
    demo: '',
  },
  {
    title: 'fabric-image-search',
    description: 'Image search application built with TypeScript and modern web tooling.',
    tags: ['TypeScript', 'Web'],
    github: `${GITHUB_BASE}/fabric-image-search`,
    demo: '',
  },
  {
    title: 'Govt Project — Rajiv Gandhi Yuva Mitra Internship Program (RYMP) 2023',
    description:
      'Government of Rajasthan flagship schemes and development programs—full-stack implementation for state-wide initiatives.',
    tags: ['Government', 'Rajasthan', 'Full-stack'],
    github: '',
    demo: '',
  },
  {
    title: 'Restaurant Aggregator — Gourmet Planet',
    description:
      "Non-commercial Food Lovers' App with preferential treatment, curated offerings and discounts at participating hotels and restaurants.",
    tags: ['Food tech', 'React', 'Node.js', 'Restaurants'],
    github: '',
    demo: '',
  },
  {
    title: 'Trading and Finance Platform — Sprintmoney',
    description:
      'Simplifying Mutual Funds investments—research and personalized fund recommendations based on performance, risk ratios, and forward outlook.',
    tags: ['Finance', 'Mutual funds', 'React', 'Node.js'],
    github: '',
    demo: '',
  },
  {
    title: 'Fleet Management — Agrowave Kisaan & Agrowave Fleet',
    description:
      'Farm-to-market mobility supply chain—integrated network of mobile pickups and fleet management across the country.',
    tags: ['Mobile', 'Supply chain', 'Fleet', 'Agri-tech'],
    github: '',
    demo: '',
  },
  {
    title: 'Social Networking Platform — Agrishots',
    description:
      'Farm-to-business supply chain in India with first-mile logistics—connecting farmers for better price discovery and transactional support.',
    tags: ['Social', 'Agri-tech', 'Supply chain', 'Full-stack'],
    github: '',
    demo: '',
  },
  {
    title: 'Ticmint — NFT Ticketing',
    description:
      'NFT-based ticketing platform with multi-tenant architecture, Kafka event streaming, AI integrations, and cloud-native deployment.',
    tags: ['Next.js', 'Kafka', 'Multi-tenant', 'AWS'],
    github: '',
    demo: '',
  },
] as const;
