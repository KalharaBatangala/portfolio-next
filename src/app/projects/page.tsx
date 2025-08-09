// src/app/projects/page.tsx
'use client';

import ProjectsSection from '@/components/Projects/ProjectsSection';

const videoURL = 'https://ythbmiddineeqbsayptz.supabase.co/storage/v1/object/sign/kalhara-portfolio/1.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81MDJiNzZmOS1mMWZlLTQ1ODMtOWEyNy1iYzgzMDU5N2EzM2UiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJrYWxoYXJhLXBvcnRmb2xpby8xLm1wNCIsImlhdCI6MTc1NDcyMzUwNywiZXhwIjoxOTEyNDAzNTA3fQ.bHp1HVNxG_whEWTwvNFqHu6rspBUB2w5l_Z2a_0-uG0'
// This video URL expires in 09-08-2030 
// stored in supabase

export default function ProjectsPage() {
  return (
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
  );
}