// // src/app/projects/page.tsx
// 'use client';

// import ProjectsSection from '@/components/Projects/ProjectsSection';
// import { motion, AnimatePresence } from 'framer-motion';
// import React, { useState, useEffect } from 'react';
// import Head from 'next/head';



// const videoURL =
//   'https://ythbmiddineeqbsayptz.supabase.co/storage/v1/object/sign/kalhara-portfolio/Globe-Optimized.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81MDJiNzZmOS1mMWZlLTQ1ODMtOWEyNy1iYzgzMDU5N2EzM2UiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJrYWxoYXJhLXBvcnRmb2xpby9HbG9iZS1PcHRpbWl6ZWQubXA0IiwiaWF0IjoxNzU1NDUxNzc1LCJleHAiOjE5MTMxMzE3NzV9.aqdD5BFEtC_5cvsobgJAIBzqZ4yChdd-SWWCDXf2czw';
// // This video URL expires in 09-08-2030
// // stored in supabase

// export default function ProjectsPage() {
//   const [showSplash, setShowSplash] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setShowSplash(false), 2500);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>

//       <Head>
//         <title>Kalhara Profile | Projects</title>
//         <meta name="description" content="Projects page" />
//       </Head>


//       {/* Splash Animation */}
//       <AnimatePresence>
//         {showSplash && (
//           <motion.div
//             key="splash"
//             initial={{ opacity: 1, scale: 1 }}
//             animate={{ opacity: 0, scale: 0.5 }}
//             exit={{ opacity: 0, scale: 0.5 }}
//             transition={{ duration: 1, ease: 'easeInOut' }}
//             style={{
//               position: 'fixed',
//               top: 0,
//               left: 0,
//               width: '100vw',
//               height: '100vh',
//               backgroundColor: 'transparent',
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               zIndex: 9999,
//             }}
//           >
//             <motion.img
//               src="/falcon.png"
//               alt="Falcon Logo"
//               style={{ width: '50vw', height: 'auto' }}
//               initial={{ scale: 1 }}
//               animate={{ scale: 1 }}
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <div className="relative">
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="absolute top-0 left-0 w-full h-screen object-cover opacity-100"
//           style={{ position: 'fixed', zIndex: -1 }}
//         >
//           <source src={videoURL} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="relative z-10 bg-black bg-opacity-30">
//           <ProjectsSection />
//         </div>
//       </div>
//     </>
//   );
// }


import ProjectsSection from '@/components/Projects/ProjectsSection';
import Image from 'next/image';
import Head from 'next/head';
import logoImage from '/public/assets/falcon.webp'; // Use WebP from Footer/Navbar
import SplashAnimation from '@/components/Common/SplashAnimation';

const videoURL =
  'https://ythbmiddineeqbsayptz.supabase.co/storage/v1/object/sign/kalhara-portfolio/Globe-Optimized.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81MDJiNzZmOS1mMWZlLTQ1ODMtOWEyNy1iYzgzMDU5N2EzM2UiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJrYWxoYXJhLXBvcnRmb2xpby9HbG9iZS1PcHRpbWl6ZWQubXA0IiwiaWF0IjoxNzU1NDUxNzc1LCJleHAiOjE5MTMxMzE3NzV9.aqdD5BFEtC_5cvsobgJAIBzqZ4yChdd-SWWCDXf2czw'; // Update after uploading compressed video

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Kalhara Batangala | Projects</title>
        <meta name="description" content="Explore Kalhara Batangala's innovative projects in DevOps, system administration, and deep learning for medical imaging." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Kalhara Batangala, projects, DevOps, deep learning, portfolio" />
      </Head>

      {/* <div
        className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-[9999] bg-transparent animate-splash"
        style={{ animation: 'splash 1s ease-in-out forwards', animationDelay: '0.0s' }}
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
      </div> */}

      <SplashAnimation/>

      <div className="relative">
        <video
          autoPlay
          muted
          loop
          playsInline
          //loading="lazy"
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