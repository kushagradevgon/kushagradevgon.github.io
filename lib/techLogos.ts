/**
 * Tech name -> logo URL (Simple Icons CDN)
 * Fallback: generic tech/code icon when no mapping exists.
 */
const BASE = 'https://cdn.simpleicons.org';

/** Fallback logo for tech items without a specific icon (generic tech stack icon) */
export const FALLBACK_TECH_LOGO = `${BASE}/codeberg/8B5CF6`;

export const TECH_LOGOS: Record<string, string> = {
  'React.js': `${BASE}/react/61DAFB`,
  'Next.js': `${BASE}/nextdotjs/fff`,
  'TypeScript': `${BASE}/typescript/3178C6`,
  'Tailwind CSS': `${BASE}/tailwindcss/06B6D4`,
  'HTML': `${BASE}/html5/E34F26`,
  'CSS': `${BASE}/css3/1572B6`,
  'Node.js': `${BASE}/nodedotjs/339933`,
  'NestJS': `${BASE}/nestjs/E0234E`,
  'Express': `${BASE}/express/000`,
  'REST APIs': `${BASE}/swagger/85EA2D`,
  'GraphQL': `${BASE}/graphql/E10098`,
  'Kafka': `${BASE}/apachekafka/231F20`,
  'RabbitMQ': `${BASE}/rabbitmq/FF6600`,
  'Redis': `${BASE}/redis/DC382D`,
  'Message queues': `${BASE}/rabbitmq/FF6600`,
  'PostgreSQL': `${BASE}/postgresql/4169E1`,
  'MongoDB': `${BASE}/mongodb/47A248`,
  'Firebase': `${BASE}/firebase/FFCA28`,
  'AWS': `${BASE}/amazonaws/FF9900`,
  'Docker': `${BASE}/docker/2496ED`,
  'Kubernetes': `${BASE}/kubernetes/326CE5`,
  'Terraform': `${BASE}/terraform/7B42BC`,
  'CI/CD': `${BASE}/githubactions/2088FF`,
  'Nginx': `${BASE}/nginx/009639`,
  'Git': `${BASE}/git/F05032`,
  'Linux': `${BASE}/linux/FCC624`,
  'OpenAI': `${BASE}/openai/412991`,
  'Claude API': `${BASE}/anthropic/191919`,
  'Prompt engineering': `${BASE}/openai/412991`,
  'AI integrations': `${BASE}/openai/412991`,
};

export function getTechLogo(tech: string): string {
  return TECH_LOGOS[tech] ?? FALLBACK_TECH_LOGO;
}
