import type { ContactInfo, SocialLink } from '@/types';

export const contactInfoData: Omit<ContactInfo, 'icon'>[] = [
  {
    label: '이메일',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
  },
  {
    label: '전화번호',
    value: '+82 10-1234-5678',
    href: 'tel:+821012345678',
  },
  {
    label: '위치',
    value: '서울, 대한민국',
  },
];

export const socialLinksData: Omit<SocialLink, 'icon'>[] = [
  {
    href: '#',
    label: 'GitHub',
  },
  {
    href: '#',
    label: 'LinkedIn',
  },
];
