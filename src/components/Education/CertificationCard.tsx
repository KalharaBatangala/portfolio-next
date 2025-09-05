// components/CertificationCard.tsx
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CertificateData } from '@/data/certificates';

type CertificationCardProps = CertificateData

export default function CertificationCard({ name, issuer, date, link, background }: CertificationCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="card-container relative w-full h-64 cursor-pointer"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="card w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <motion.div
          className="card-front absolute w-full h-full bg-card-bg border border-border rounded-lg shadow-md p-6 flex flex-col justify-center items-center text-center text-white"
          style={{
            backfaceVisibility: 'hidden',
            backgroundImage: `url(${background.src})`, // Assuming background is StaticImageData
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-base text-muted-foreground mb-1">{issuer}</p>
          <p className="text-sm text-muted-foreground">{date}</p>
        </motion.div>

        {/* Back Side */}
        <motion.div
          className="card-back absolute w-full h-full bg-card-bg border border-border rounded-lg shadow-md p-6 flex justify-center items-center text-center border-primary dark:border-white"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline font-semibold text-lg"
          >
            View Certificate
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}