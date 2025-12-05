import type { Project } from '@/types';

export const PROJECT_CATEGORIES = ['All', 'Web', 'Mobile', 'AI', 'Backend'] as const;

export type ProjectCategory = Project['category'];
