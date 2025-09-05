// components/LiIcon.tsx
"use client";

import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

interface LiIconProps {
  reference: React.RefObject<HTMLLIElement>;
}

export default function LiIcon({ reference }: LiIconProps) {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ['center end', 'center center'],
  });

  return (
    <figure className="absolute left-0 stroke-secondary">
      <svg className="-rotate-90 w-[75px] h-[75px]" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-background"
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse stroke-1 fill-secondary"
        />
      </svg>
    </figure>
  );
}


