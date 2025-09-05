// // components/EducationContent.tsx
"use client";

import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import EducationCard from './EducationCard';
import { educationData } from '@/data/education';
import CertificationCard from './CertificationCard';
import { certificatesData } from '@/data/certificates';

export default function EducationContent() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <main className="min-h-screen bg-background text-foreground pt-24 px-4 sm:px-6 lg:px-8 bg-gray-200 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto bg-gray-200 dark:bg-gray-900">
        <h1 className="font-bold text-4xl md:text-6xl mb-20 w-full text-center sm:mb-10 sm:text-5xl dark:text-white">
          Education
        </h1>
        <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-0 w-[4px] h-full bg-primary dark:bg-secondary origin-top hidden md:block"
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 md:ml-16 xs:ml-8">
            {educationData.map((edu) => (
              <EducationCard key={edu.id} {...edu} isLast={false} />
            ))}
          </ul>
        </div>
        

        <section className="mt-16 pb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-secondary">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificatesData.map((cert) => (
              <CertificationCard key={cert.id} {...cert} />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}

