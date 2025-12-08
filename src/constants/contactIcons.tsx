import { Mail, Phone, MapPin, BookOpen } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import type { IconType } from 'react-icons';

export const CONTACT_ICONS: Record<string, LucideIcon> = {
  이메일: Mail,
  전화번호: Phone,
  위치: MapPin,
};

export const SOCIAL_ICONS: Record<string, IconType> = {
  GitHub: SiGithub,
  LinkedIn: SiLinkedin,
  'Tech Blog': BookOpen as IconType,
};

export type ContactIconKey = keyof typeof CONTACT_ICONS;
export type SocialIconKey = keyof typeof SOCIAL_ICONS;
