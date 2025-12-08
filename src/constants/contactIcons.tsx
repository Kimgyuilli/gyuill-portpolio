import { Mail, Phone, MapPin, Github, Linkedin, BookOpen } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const CONTACT_ICONS: Record<string, LucideIcon> = {
  이메일: Mail,
  전화번호: Phone,
  위치: MapPin,
};

export const SOCIAL_ICONS: Record<string, LucideIcon> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  'Tech Blog': BookOpen,
};

export type ContactIconKey = keyof typeof CONTACT_ICONS;
export type SocialIconKey = keyof typeof SOCIAL_ICONS;
