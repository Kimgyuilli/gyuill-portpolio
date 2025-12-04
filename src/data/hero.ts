export interface HeroHighlight {
  title: string;
  description: string;
  icon: string; // Icon name from lucide-react
}

export interface HeroStat {
  value: string;
  label: string;
  suffix?: string;
}

export interface HeroData {
  name: string;
  role: string;
  roles: string[]; // For typing animation
  bio: string;
  profileImage: string;
  email: string;
  social: {
    github: string;
    linkedin: string;
    blog: string;
  };
  highlights: HeroHighlight[];
  stats: HeroStat[];
}

export const heroData: HeroData = {
  name: '홍길동',
  role: '풀스택 개발자',
  roles: ['풀스택 개발자', '문제 해결사', '혁신가', '팀 플레이어'],
  bio: '사용자 중심의 웹 애플리케이션을 설계하고 개발하는 풀스택 개발자입니다. 새로운 기술을 학습하고 문제를 해결하는 것을 즐깁니다.',
  profileImage: '/images/profile.jpg',
  email: 'your.email@example.com',
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    blog: 'https://yourblog.com',
  },
  highlights: [
    {
      title: '독창적인 학습 자세',
      description: '스터디와 프로젝트를 통해 학습',
      icon: 'BookOpen',
    },
    {
      title: '커뮤니케이션',
      description: '다양한 동아리 활동',
      icon: 'Users',
    },
    {
      title: '꾸준한 기록',
      description: '꾸준히 작성된 테크 블로그',
      icon: 'Monitor',
    },
    {
      title: '계획적 개발',
      description: '노션을 통한 일정 관리 및 개발',
      icon: 'ListChecks',
    },
  ],
  stats: [
    {
      value: '500',
      label: 'GitHub Commits',
      suffix: '+',
    },
    {
      value: '15',
      label: 'Projects',
      suffix: '+',
    },
    {
      value: '20',
      label: 'Technologies',
      suffix: '+',
    },
    {
      value: '3',
      label: 'Years Experience',
      suffix: '+',
    },
  ],
};
