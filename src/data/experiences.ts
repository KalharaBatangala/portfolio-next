
import { StaticImageData } from 'next/image';
import sltLogo from '/public/assets/slt-logo.webp'; 

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string[];
  logo?: StaticImageData;
  techStack?: string[];
  isFeatured?: boolean;
}

export const experiences: Experience[] = [
  {
    id: 'slt-internship',
    company: 'Sri Lanka Telecom Mobitel (SLT Mobitel)',
    role: 'Intern - DevOps & Cloud Operations',
    duration: 'Jun 2024 - Dec 2024',
    description: [
      'Managed cloud hosting and deployment of enterprise applications.',
      'Enhanced DevOps pipelines improving deployment speed by 30%.',
      'Monitored and maintained infrastructure using Azure and AWS.',
      'Collaborated with cross-functional teams to troubleshoot system issues.',
    ],
    logo: sltLogo,
    techStack: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    isFeatured: true,
  },
 
];