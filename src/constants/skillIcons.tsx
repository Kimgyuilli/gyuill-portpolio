import { Code2, Database, Globe, Layout, Server, Smartphone } from 'lucide-react';

export const SKILL_ICONS = {
  Frontend: <Code2 />,
  Backend: <Server />,
  Database: <Database />,
  Mobile: <Smartphone />,
  DevOps: <Globe />,
  Tools: <Layout />,
} as const;

// Simple Icons CDN slug 매핑
export const SKILL_ICON_SLUGS: Record<string, string> = {
  // Frontend
  React: 'react',
  TypeScript: 'typescript',
  Vite: 'vite',
  // Backend
  Django: 'django',
  Python: 'python',
  Java: 'openjdk',
  'Spring Boot': 'springboot',
  // Database
  PostgreSQL: 'postgresql',
  MySQL: 'mysql',
  Redis: 'redis',
  // DevOps
  Docker: 'docker',
  AWS: 'amazonwebservices',
  GCP: 'googlecloud',
  NCP: 'naver',
  'CI/CD': 'githubactions',
  Kubernetes: 'kubernetes',
  'GitHub Actions': 'githubactions',
  // Tools
  Git: 'git',
  'VS Code': 'visualstudiocode',
  IntelliJ: 'intellijidea',
  Figma: 'figma',
  Slack: 'slack',
  Notion: 'notion',
  Postman: 'postman',
};

// CDN 아이콘 URL 생성
export const getSkillIconUrl = (skill: string, isDark = false): string => {
  const slug = SKILL_ICON_SLUGS[skill];
  if (!slug) return '';
  // 다크모드일 때는 흰색, 라이트모드일 때는 각 브랜드 색상
  const color = isDark ? 'white' : undefined;
  return `https://cdn.simpleicons.org/${slug}${color ? `/${color}` : ''}`;
};

export type SkillIconKey = keyof typeof SKILL_ICONS;
