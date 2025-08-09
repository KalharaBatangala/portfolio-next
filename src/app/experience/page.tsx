

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import ExperienceSection from '@/components/Experiences/ExperienceSection';

const githubUsername = 'KalharaBatangala';

// Orange color = #FF7300 (Current)
// Green color = #40c463

const ExperiencePage: React.FC = () => {
  // State to control splash visibility
  const [showSplash, setShowSplash] = useState(true);

  // After splash animation duration (say 2.5s), hide splash
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Splash Animation */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 0.5 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: '#000',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 9999,
            }}
          >
            <motion.img
              src="/falcon.png"
              alt="Falcon Logo"
              style={{ width: '50vw', height: 'auto' }}
              initial={{ scale: 1 }}
              animate={{ scale: 1 }}
            />
          </motion.div>
        )}
      </AnimatePresence>


        <ExperienceSection/>

      {/* Main About Content - hidden under splash */}
      <div className={`container mx-auto px-4 py-16 mt-20 ${showSplash ? 'hidden' : 'block'}`}>
        <motion.div
          className="relative p-[5px] rounded-2xl overflow-hidden max-w-4xl mx-auto"
          animate={{
            background: [
              'linear-gradient(270deg, #ff7f50, #ffcc70, #ff7f50)',
              'linear-gradient(90deg, #ffcc70, #ff7f50, #ffcc70)',
            ],
            backgroundPosition: ['0% 50%', '100% 50%'],
            backgroundSize: ['200% 200%', '200% 200%'],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Solid Black Inner Card */}
          <div className="rounded-2xl bg-[#000000] shadow-xl p-8">
            <h1 className="text-4xl font-bold text-white mb-6 text-center">
              About Me
            </h1>
            <p className="text-gray-300 text-lg text-center max-w-2xl mx-auto mb-8">
              I’m a passionate developer who loves turning ideas into reality.
              This graph shows my journey of consistent coding and contributions
              on GitHub.
            </p>

            {/* Contribution Graph */}
            <div className="flex justify-center">
              <img
                src={`https://ghchart.rshah.org/FF7300/${githubUsername}`}
                alt={`${githubUsername}'s GitHub contribution graph`}
                className="rounded-lg w-full max-w-[900px] mx-auto"
              />
            </div>

            {/*
            Using a standard <img> tag here instead of Next.js <Image> because:
            - The GitHub contribution graph is an external dynamically generated image.
            - Next.js <Image> optimization features (like resizing, lazy loading) don't apply well to external URLs.
            - Using <img> avoids unnecessary complexity and potential issues with external image optimization.
            - The performance impact here is minimal as this is a single small image.
            This decision follows best practices by balancing optimization and simplicity.
            */}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ExperiencePage;
