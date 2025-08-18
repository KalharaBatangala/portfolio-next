// // src/app/projects/page.tsx

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