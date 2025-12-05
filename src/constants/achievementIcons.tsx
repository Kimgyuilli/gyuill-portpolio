import { Award, Trophy, FileCheck, GitBranch } from 'lucide-react';

export const ACHIEVEMENT_ICONS: Record<string, React.ReactNode> = {
  'AWS Certified Solutions Architect': <Award />,
  '해커톤 대상': <Trophy />,
  정보처리기사: <FileCheck />,
  'Open Source Contributor': <GitBranch />,
};

export const DEFAULT_ACHIEVEMENT_ICON = <Award />;
