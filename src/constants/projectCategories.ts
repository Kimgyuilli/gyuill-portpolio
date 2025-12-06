export const PROJECT_CATEGORIES = ['All', 'Web', 'Mobile', 'AI', 'Backend'] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];
