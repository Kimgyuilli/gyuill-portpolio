import type { SkillCategory } from '@/types';

export const skillCategories: Omit<SkillCategory, 'icon'>[] = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Python', 'Java', 'Spring Boot', 'Express'],
  },
  {
    title: 'Database',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Supabase'],
  },
  {
    title: 'Mobile',
    skills: ['React Native', 'Flutter', 'iOS', 'Android'],
  },
  {
    title: 'DevOps',
    skills: ['Docker', 'AWS', 'CI/CD', 'Kubernetes', 'GitHub Actions'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'VS Code', 'Figma', 'Jira', 'Notion'],
  },
];
