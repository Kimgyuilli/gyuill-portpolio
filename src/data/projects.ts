import type { Project } from '@/types';

export const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description:
      '최신 웹 기술을 활용한 풀스택 전자상거래 플랫폼. 사용자 친화적인 인터페이스와 안전한 결제 시스템을 구현했습니다.',
    image:
      'https://images.unsplash.com/photo-1646153114001-495dfb56506d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NDgzMjk5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: '#',
    demo: '#',
    category: 'Web',
    detailedDescription:
      '현대적인 전자상거래 플랫폼을 구축하여 사용자에게 원활한 쇼핑 경험을 제공합니다. React 기반의 반응형 UI와 Node.js 백엔드를 결합하여 빠르고 안정적인 서비스를 구현했습니다. Stripe를 통한 안전한 결제 처리와 실시간 재고 관리 시스템을 갖추고 있습니다.',
    features: [
      '반응형 UI/UX 디자인으로 모바일, 태블릿, 데스크톱 지원',
      'Stripe 결제 시스템 통합 및 보안 강화',
      '실시간 재고 관리 및 주문 추적',
      '상품 검색 및 필터링 기능',
      '사용자 리뷰 및 평점 시스템',
      '관리자 대시보드',
    ],
    techStack: {
      frontend: ['React', 'TypeScript', 'Redux Toolkit', 'React Query'],
      backend: ['Node.js', 'Express', 'REST API'],
      database: ['PostgreSQL', 'Redis'],
      deployment: ['AWS EC2', 'Docker', 'Nginx'],
    },
    challenges: [
      '대용량 트래픽 처리를 위한 Redis 캐싱 전략 수립',
      '결제 프로세스의 보안 및 에러 핸들링 강화',
      '실시간 재고 동기화 문제 해결',
    ],
    outcome:
      '월 평균 5,000명 이상의 활성 사용자 확보, 평균 페이지 로딩 속도 1.2초 달성, 결제 성공률 98% 이상 유지',
    duration: '2024.01 - 2024.04',
    teamSize: '4명',
    role: 'Full Stack Developer',
  },
  {
    title: 'Task Management App',
    description:
      '팀 협업을 위한 실시간 작업 관리 애플리케이션. 드래그 앤 드롭, 실시간 알림, 파일 공유 기능을 포함합니다.',
    image:
      'https://images.unsplash.com/photo-1688413709025-5f085266935a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBwYXR0ZXJufGVufDF8fHx8MTc2NDc2OTA0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    github: '#',
    demo: '#',
    category: 'Web',
    detailedDescription:
      '팀의 생산성을 높이기 위한 실시간 협업 작업 관리 도구입니다. 직관적인 칸반 보드와 드래그 앤 드롭 기능으로 작업 관리가 간편하며, WebSocket을 통한 실시간 동기화로 팀원들과 원활하게 협업할 수 있습니다.',
    features: [
      '칸반 보드 스타일의 직관적인 작업 관리',
      '드래그 앤 드롭으로 작업 상태 변경',
      '실시간 알림 및 업데이트',
      '파일 첨부 및 공유',
      '작업 코멘트 및 멘션',
      '팀 대시보드 및 통계',
    ],
    techStack: {
      frontend: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      backend: ['Supabase', 'PostgreSQL', 'Realtime Subscriptions'],
      deployment: ['Vercel', 'Supabase Hosting'],
    },
    challenges: [
      '실시간 동기화 시 충돌 방지 및 낙관적 업데이트 구현',
      '드래그 앤 드롭 UX 최적화',
      'Supabase Row Level Security를 활용한 권한 관리',
    ],
    outcome: '팀 내부에서 사용 중이며, 작업 관리 효율성 40% 향상',
    duration: '2023.09 - 2023.12',
    teamSize: '2명',
    role: 'Frontend Developer',
  },
  {
    title: 'AI Chat Assistant',
    description:
      'OpenAI API를 활용한 인공지능 챗봇 서비스. 자연어 처리를 통해 사용자와 자연스러운 대화를 제공합니다.',
    image:
      'https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBjb2Rpbmd8ZW58MXx8fHwxNzY0NzQzNjE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Python', 'FastAPI', 'OpenAI', 'React'],
    github: '#',
    demo: '#',
    category: 'AI',
    detailedDescription:
      'OpenAI GPT 모델을 활용한 지능형 대화 시스템입니다. 사용자의 질문을 이해하고 맥락에 맞는 답변을 제공하며, 대화 히스토리를 유지하여 연속적인 대화가 가능합니다. 다양한 도메인의 질문에 답변할 수 있도록 프롬프트 엔지니어링을 적용했습니다.',
    features: [
      'GPT-4 기반 자연어 처리',
      '대화 히스토리 관리',
      '스트리밍 응답으로 실시간 피드백',
      '다국어 지원',
      '대화 컨텍스트 유지',
      '사용량 모니터링 대시보드',
    ],
    techStack: {
      frontend: ['React', 'TypeScript', 'TanStack Query'],
      backend: ['Python', 'FastAPI', 'OpenAI API'],
      database: ['MongoDB'],
      deployment: ['Docker', 'AWS ECS'],
    },
    challenges: [
      'OpenAI API 비용 최적화 및 토큰 관리',
      '스트리밍 응답 처리 및 에러 핸들링',
      '대화 컨텍스트 길이 제한 문제 해결',
    ],
    outcome: '베타 테스트 200명 참여, 평균 응답 시간 2초 이내, 사용자 만족도 4.5/5',
    duration: '2024.05 - 2024.07',
    teamSize: '개인 프로젝트',
    role: 'Full Stack Developer',
  },
];
