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

export interface Education {
  period: string;
  school: string;
  major: string;
  details?: string;
}

export interface AboutInfo {
  paragraphs: string[];
  workspaceImage?: string;
}

export interface HeroData {
  name: string;
  role: string;
  roles: string[]; // For typing animation
  bio: string;
  profileImage: string;
  email: string;
  phone: string;
  address: string;
  social: {
    github: string;
    linkedin: string;
    blog: string;
  };
  about: AboutInfo;
  education: Education[];
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
  phone: '010-1234-5678',
  address: '서울특별시 마포구',
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    blog: 'https://yourblog.com',
  },
  about: {
    paragraphs: [
      '안녕하세요! 저는 열정적인 IT 개발자입니다. 새로운 기술을 배우고 혁신적인 솔루션을 만드는 것을 좋아합니다.',
      '웹 개발, 모바일 앱 개발, 그리고 시스템 아키텍처 설계에 전문성을 가지고 있으며, 사용자 중심의 직관적인 제품을 만드는 데 집중하고 있습니다.',
      '팀워크를 중시하며, 지속적인 학습과 성장을 통해 더 나은 개발자가 되기 위해 노력하고 있습니다.',
    ],
    workspaceImage:
      'https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBjb2Rpbmd8ZW58MXx8fHwxNzY0NzQzNjE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  education: [
    {
      period: '2019.03 - 2024.02',
      school: '홍익대학교 컴퓨터공학과 19학번 졸업',
      major: '컴퓨터공학',
    },
    {
      period: '2020.12 - 2022.05',
      school: '42 서울 3기',
      major: 'Software Engineering',
    },
  ],
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
