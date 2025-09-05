// components/TimelineDot.tsx
"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface TimelineDotProps {
  reference: React.RefObject<HTMLLIElement>;
}

export default function TimelineDot({ reference }: TimelineDotProps) {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            dotRef.current?.classList.add('scale-100', 'opacity-100');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (reference.current) {
      observer.observe(reference.current);
    }

    return () => observer.disconnect();
  }, [reference]);

  return (
    <div
      ref={dotRef}
      className="absolute left-[-2.25rem] top-1/2 transform -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-2 border-background scale-0 opacity-0 transition-all duration-500 ease-out hidden md:block"
    />
  );
}