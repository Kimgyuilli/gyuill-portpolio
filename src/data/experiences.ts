import type { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    company: 'Tech Company A',
    position: 'Senior Full Stack Developer',
    period: '2022.03 - 현재',
    description: [
      '웹 애플리케이션 아키텍처 설계 및 구현',
      'React, TypeScript를 활용한 프론트엔드 개발',
      'Node.js 기반 백엔드 API 개발 및 최적화',
      '신규 팀원 멘토링 및 코드 리뷰',
    ],
  },
  {
    company: 'Startup B',
    position: 'Full Stack Developer',
    period: '2020.06 - 2022.02',
    description: [
      'MVP 제품 개발 및 출시',
      'RESTful API 설계 및 개발',
      'AWS 인프라 구축 및 관리',
      '데이터베이스 스키마 설계',
    ],
  },
  {
    company: 'IT Company C',
    position: 'Junior Developer',
    period: '2019.01 - 2020.05',
    description: [
      '레거시 코드 유지보수 및 리팩토링',
      '새로운 기능 개발 및 버그 수정',
      '단위 테스트 및 통합 테스트 작성',
      'Git을 활용한 버전 관리',
    ],
  },
];
