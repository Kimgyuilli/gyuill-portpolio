import { Briefcase, Calendar } from 'lucide-react';
import type { Experience } from '@/types';

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0 border-l-2 border-slate-800">
      <div className="absolute left-0 top-0 w-4 h-4 bg-emerald-500 rounded-full -translate-x-[9px]"></div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/50 transition-colors">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-slate-100 mb-1">{experience.position}</h3>
            <div className="flex items-center gap-2 text-emerald-400">
              <Briefcase size={16} />
              <span>{experience.company}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Calendar size={16} />
            <span>{experience.period}</span>
          </div>
        </div>

        <ul className="space-y-2">
          {experience.description.map((item, itemIndex) => (
            <li key={itemIndex} className="text-slate-300 flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
