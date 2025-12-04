/// <reference types="react" />

export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

export interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
}

export interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

export interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}
