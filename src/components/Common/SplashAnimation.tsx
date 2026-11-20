'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import BrandMark from '@/components/Common/BrandMark';

export default function SplashAnimation() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1500); // Removed once the 1s fade has finished
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
          {/* Navy on light pages, gold on dark: the white logo was invisible in light mode */}
          <BrandMark label="Falcon Logo" className="w-[50vw] aspect-square bg-primary dark:bg-secondary" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}