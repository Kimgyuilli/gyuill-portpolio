import { Code2, Database, Globe, Layout, Server, Smartphone } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Backend',
      skills: ['Node.js', 'Python', 'Java', 'Spring Boot', 'Express'],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Supabase'],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile',
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'DevOps',
      skills: ['Docker', 'AWS', 'CI/CD', 'Kubernetes', 'GitHub Actions'],
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: 'Tools',
      skills: ['Git', 'VS Code', 'Figma', 'Jira', 'Notion'],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-slate-100">Skills & Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            다양한 기술 스택과 도구를 활용하여 효율적이고 확장 가능한 솔루션을 개발합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/50 transition-colors"
            >
              <div className="text-emerald-400 mb-4">
                {category.icon}
              </div>
              <h3 className="mb-4 text-slate-100">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
