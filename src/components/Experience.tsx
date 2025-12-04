import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const experiences = [
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

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-slate-100">Work Experience</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            다양한 프로젝트와 팀에서 쌓아온 실무 경험입니다.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 last:pb-0 border-l-2 border-slate-800"
            >
              <div className="absolute left-0 top-0 w-4 h-4 bg-emerald-500 rounded-full -translate-x-[9px]"></div>
              
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/50 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-slate-100 mb-1">{exp.position}</h3>
                    <div className="flex items-center gap-2 text-emerald-400">
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-slate-300 flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
