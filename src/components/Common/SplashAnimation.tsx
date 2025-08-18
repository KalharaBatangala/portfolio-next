'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import logoImage from '/public/assets/falcon.webp'; // Static import for optimization

export default function SplashAnimation() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1500); // Stay for 2.5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          key="splash"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0.5 }} // Stay visible during the timeout
          exit={{ opacity: 0, scale: 0.5 }} // Zoom out on exit
          transition={{ duration: 1, ease: 'easeInOut' }} // 1s zoom-out
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'transparent',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}
        >
          <Image
            src={logoImage}
            alt="Falcon Logo"
            width={500}
            height={500}
            sizes="50vw"
            placeholder="blur"
            className="w-[50vw] h-auto"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}