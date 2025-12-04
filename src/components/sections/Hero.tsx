import {
  Github,
  Linkedin,
  BookOpen,
  ChevronDown,
  Users,
  Monitor,
  ListChecks,
  GitCommit,
  Folder,
  Code2,
  Calendar,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { heroData } from '@/data/hero';

const iconMap = {
  BookOpen: BookOpen,
  Users: Users,
  Monitor: Monitor,
  ListChecks: ListChecks,
} as const;

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = heroData.roles[currentRole];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(
      () => {
        if (!isDeleting && displayText === role) {
          setIsDeleting(true);
        } else if (isDeleting && displayText === '') {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % heroData.roles.length);
        } else {
          setDisplayText(
            isDeleting
              ? role.substring(0, displayText.length - 1)
              : role.substring(0, displayText.length + 1)
          );
        }
      },
      !isDeleting && displayText === role ? 2000 : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-slate-950 to-blue-500/10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Profile Section */}
          <div className="text-center lg:text-left space-y-6">
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-emerald-500/30 shadow-2xl">
                <img
                  src={heroData.profileImage}
                  alt={heroData.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <span className="text-emerald-400 text-lg">안녕하세요, 저는</span>
              <h1 className="mt-2 mb-4 text-slate-100">{heroData.name}</h1>
              <div className="h-8 mb-4">
                <span className="text-2xl text-emerald-400">{displayText}</span>
                <span className="animate-pulse text-emerald-400">|</span>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed">{heroData.bio}</p>
            </div>

            <div className="flex justify-center lg:justify-start gap-4 pt-4">
              <a
                href={heroData.social.blog}
                className="text-slate-400 hover:text-emerald-400 transition-colors p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800"
                aria-label="Blog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookOpen size={24} />
              </a>
              <a
                href={heroData.social.github}
                className="text-slate-400 hover:text-emerald-400 transition-colors p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </a>
              <a
                href={heroData.social.linkedin}
                className="text-slate-400 hover:text-emerald-400 transition-colors p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#contact"
                className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 rounded-lg transition-colors font-medium"
              >
                연락하기
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-colors font-medium"
              >
                프로젝트 보기
              </a>
            </div>
          </div>

          {/* Right: Highlights & Stats */}
          <div className="space-y-12">
            {/* Diamond Grid Highlights */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-8 max-w-md mx-auto">
                {heroData.highlights.map((highlight, index) => {
                  const Icon = iconMap[highlight.icon as keyof typeof iconMap];
                  return (
                    <div key={index} className="flex flex-col items-center text-center group">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-slate-100 font-semibold mb-1 text-sm">
                        {highlight.title}
                      </h3>
                      <p className="text-slate-400 text-xs">{highlight.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {heroData.stats.map((stat, index) => {
                const statIcons = {
                  'GitHub Commits': GitCommit,
                  Projects: Folder,
                  Technologies: Code2,
                  'Years Experience': Calendar,
                } as const;
                const StatIcon = statIcons[stat.label as keyof typeof statIcons];

                return (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-emerald-500/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <StatIcon className="w-5 h-5 text-emerald-400" />
                      <span className="text-slate-400 text-sm">{stat.label}</span>
                    </div>
                    <p className="text-3xl font-bold text-slate-100">
                      {stat.value}
                      {stat.suffix && <span className="text-emerald-400">{stat.suffix}</span>}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-emerald-400 transition-colors animate-bounce"
        aria-label="Scroll to About section"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
