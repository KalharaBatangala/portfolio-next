// data/education.ts
import { StaticImageData } from 'next/image';

// ************  Static Import  *****************
import Jpura from '/public/assets/Jpura-logo.webp';
import KV from '/public/assets/KV.webp';
import ESOFT from '/public/assets/ESOFT.webp';

// *************** END STATIC IMPORT ************

export interface EducationData {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  description: string;
  logo: StaticImageData; 
}

export const educationData: EducationData[] = [
  {
    id: 1,
    institution: 'University of Sri Jayewardenepura',
    degree: 'BSc. (Hons) in Computer Engineering',
    duration: '2021 - 2025',
    description: 'Developed strong expertise in advanced computer architectures. My final year research focused on applying deep learning for image classification and parallel programming.',
    logo: Jpura,
  },
  {
    id: 2,
    institution: 'Kegalu Vidyalaya',
    degree: 'GCE O/L & GCE A/L',
    duration: '2005 - 2018',
    description: 'Completed GCE Advanced Level in the Physical Science stream. ',
    logo: KV,
  },
  {
    id: 3,
    institution: 'ESOFT Metro College',
    degree: 'Diploma in Information Technology',
    duration: '2015 - 2016',
    description: 'Completed a Diploma in Information Technology (DiTec) at ESOFT Metro College, gaining practical knowledge in computer systems.',
    logo: ESOFT,
  },
];