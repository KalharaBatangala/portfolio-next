// components/EducationCard.tsx
"use client";

import { useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import LiIcon from './LiIcon';

interface EducationCardProps {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  description: string;
  logo?: StaticImageData;
  isLast: boolean;
}

export default function EducationCard({ institution, degree, duration, description, logo }: EducationCardProps) {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-full max-w-4xl mx-auto flex flex-col"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: .5, type: 'spring' }}
        className="bg-card-bg border border-border rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 ">
          {logo && (
            <div className="w-16 h-16 relative flex-shrink-0">
              <Image
                src={logo}
                alt={`${institution} logo`}
                fill
                className="object-contain rounded"
              />
            </div>
          )}
          <div className="flex-grow dark:text-white">
            <h3 className="text-xl font-semibold">{degree}</h3>
            <p className="text-lg text-muted-foreground">{institution}</p>
            <p className="text-sm text-muted-foreground mb-2">{duration}</p>
            <p className="text-base">{description}</p>
          </div>
        </div>
      </motion.div>
    </li>
  );
}

