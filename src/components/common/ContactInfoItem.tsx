import type { ContactInfo } from '@/types';

interface ContactInfoItemProps {
  info: ContactInfo;
}

export function ContactInfoItem({ info }: ContactInfoItemProps) {
  const content = (
    <div className="flex items-center gap-4 text-slate-300">
      <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400">
        {info.icon}
      </div>
      <div>
        <p>{info.label}</p>
        {info.href ? (
          <a href={info.href} className="text-slate-400 hover:text-emerald-400 transition-colors">
            {info.value}
          </a>
        ) : (
          <p className="text-slate-400">{info.value}</p>
        )}
      </div>
    </div>
  );

  return content;
}
