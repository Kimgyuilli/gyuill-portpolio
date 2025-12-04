import type { SocialLink as SocialLinkType } from '@/types';

interface SocialLinkProps {
  link: SocialLinkType;
}

export function SocialLink({ link }: SocialLinkProps) {
  return (
    <a
      href={link.href}
      className="w-12 h-12 bg-slate-800 hover:bg-emerald-500/20 rounded-lg flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-all"
      aria-label={link.label}
    >
      {link.icon}
    </a>
  );
}
