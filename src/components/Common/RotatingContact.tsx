'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import CircularText from './CircularText';
// Reusable spinning circle text (you can replace this with your own SVG file if needed)

// Created once at module level: creating it inside the component remounts the link on every render
const MotionLink = motion.create(Link);

export default function RotatingContact() {
  return (
    <div className="flex items-center justify-center mt-30">
      <div className="relative w-48 h-48 sm:w-40 sm:h-40">
        {/* Spinning text circle */}
        <CircularText className="absolute inset-0 animate-spin-slower" />

        {/* Center button */}
        <MotionLink
          href="/contact"
          className="flex items-center justify-center absolute left-1/2 top-1/2
                     -translate-x-1/2 -translate-y-1/2 
                     bg-primary text-white rounded-full font-semibold
                     shadow-md border-2 border-primary dark:border-white
                     w-24 h-24 text-center leading-tight
                     hover:bg-white hover:text-secondary
                     transition-colors duration-300
                     sm:w-15 sm:h-15 sm:text-sm"
        >
          Contact <br /> Me
        </MotionLink>
      </div>
    </div>
  );
}
