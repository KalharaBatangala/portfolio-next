// src/data/navigation.ts
// Site links shared by the navbar, footer and home page.
import type { IconType } from 'react-icons';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaGoogleScholar } from 'react-icons/fa6';

export interface NavItem {
  label: string;
  href: string;
}

// Order here is the order in the navbar and the footer
export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Education', href: '/education' },
  { label: 'Publications', href: '/publications' },
  { label: 'Experience', href: '/experience' },
  { label: 'Contact', href: '/contact' },
];

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/KalharaBatangala', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kalhara-batangala-2bb635213/', icon: FaLinkedin },
  { label: 'Twitter', href: 'https://x.com/KalharaBat27340', icon: FaTwitter },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=h1_hcTwAAAAJ', icon: FaGoogleScholar },
];
