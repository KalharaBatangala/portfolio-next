// data/certificates.ts
import { StaticImageData } from 'next/image';
import { v4 as uuid } from 'uuid';
import Background1 from '/public/assets/cert-common.webp'; 


export interface CertificateData {
  id: string;
  name: string;
  issuer: string;
  date: string;
  link: string;
  background: StaticImageData; 
}

export const certificatesData: CertificateData[] = [
  {
    id: uuid(),
    name: 'Machine Learning',
    issuer: 'Issued by DeepLearning.ai',
    date: 'May 2024',
    link: 'https://coursera.org/share/9722c88a175899098dc7a20794b2722e',
    background: Background1,
  },
  {
    id: uuid(),
    name: 'Neural Networks & Deep Learning',
    issuer: 'Issued by DeepLearning.ai',
    date: 'May 2024',
    link: 'https://coursera.org/share/de68f328de3e2f7c18e65f0884446ddd',
    background: Background1,
  },
  {
    id: uuid(),
    name: 'Jenkins - Level 1',
    issuer: 'Issued by Kodekloud',
    date: 'September 2025',
    link: 'https://engineer.kodekloud.com/certificate-verification/28e5469e-2769-4be0-bb2d-b2f8b7cd6e5d',
    background: Background1,
  },
  {
    id: uuid(),
    name: 'Git - Level 1',
    issuer: 'Issued by Kodekloud',
    date: 'September 2025',
    link: 'https://engineer.kodekloud.com/certificate-verification/af534940-4102-4e76-8c50-9d539e70f1ac',
    background: Background1,
  },
  {
    id: uuid(),
    name: 'Deep Learning for Object Detection',
    issuer: 'Issued by Mathworks',
    date: 'May 2024',
    link: 'https://coursera.org/share/e896878f0f213f8694efb2e366dbee13',
    background: Background1,
  },
  {
    id: uuid(),
    name: 'Introduction to Deep Learning for Computer Vision',
    issuer: 'Issued by Mathworks',
    date: 'May 2024',
    link: 'https://coursera.org/share/c7c78c31a2904d4358e496db1417aad2',
    background: Background1,
  },
  {
    id: uuid(),
    name: 'Unity and C# Basics',
    issuer: 'Issued by Meta',
    date: 'May 2024',
    link: 'https://coursera.org/share/5cb4db3170cdee2a9b35003e447dc9f5',
    background: Background1,
  },
  {
    id: uuid(),
    name: 'AWS Educate Introduction to Cloud 101',
    issuer: 'Issued by AWS Training and Certification',
    date: 'January 2025',
    link: 'https://www.credly.com/badges/e3a23391-55d9-4b9a-a659-f90ef9e54f52/public_url',
    background: Background1,
  },
  
];