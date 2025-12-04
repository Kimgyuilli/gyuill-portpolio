import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: '최신 웹 기술을 활용한 풀스택 전자상거래 플랫폼. 사용자 친화적인 인터페이스와 안전한 결제 시스템을 구현했습니다.',
      image: 'https://images.unsplash.com/photo-1646153114001-495dfb56506d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NDgzMjk5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Task Management App',
      description: '팀 협업을 위한 실시간 작업 관리 애플리케이션. 드래그 앤 드롭, 실시간 알림, 파일 공유 기능을 포함합니다.',
      image: 'https://images.unsplash.com/photo-1688413709025-5f085266935a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBwYXR0ZXJufGVufDF8fHx8MTc2NDc2OTA0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
      github: '#',
      demo: '#',
    },
    {
      title: 'AI Chat Assistant',
      description: 'OpenAI API를 활용한 인공지능 챗봇 서비스. 자연어 처리를 통해 사용자와 자연스러운 대화를 제공합니다.',
      image: 'https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBjb2Rpbmd8ZW58MXx8fHwxNzY0NzQzNjE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Python', 'FastAPI', 'OpenAI', 'React'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-slate-100">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            최근 진행한 주요 프로젝트들입니다. 각 프로젝트는 실제 문제를 해결하기 위해 설계되었습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="mb-3 text-slate-100">{project.title}</h3>
                <p className="text-slate-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-slate-800 text-slate-300 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
