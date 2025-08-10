// src/app/projects/page.tsx
'use client';

import ProjectsSection from '@/components/Projects/ProjectsSection';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';



const videoURL =
  'https://ythbmiddineeqbsayptz.supabase.co/storage/v1/object/sign/kalhara-portfolio/1.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81MDJiNzZmOS1mMWZlLTQ1ODMtOWEyNy1iYzgzMDU5N2EzM2UiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJrYWxoYXJhLXBvcnRmb2xpby8xLm1wNCIsImlhdCI6MTc1NDcyMzUwNywiZXhwIjoxOTEyNDAzNTA3fQ.bHp1HVNxG_whEWTwvNFqHu6rspBUB2w5l_Z2a_0-uG0';
// This video URL expires in 09-08-2030
// stored in supabase

export default function ProjectsPage() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>

      <Head>
        <title>Kalhara Profile | Projects</title>
        <meta name="description" content="Projects page" />
      </Head>


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
              backgroundColor: 'transparent',
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

      <div className="relative">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-screen object-cover opacity-100"
          style={{ position: 'fixed', zIndex: -1 }}
        >
          <source src={videoURL} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 bg-black bg-opacity-30">
          <ProjectsSection />
        </div>
      </div>
    </>
  );
}
