// src/app/projects/page.tsx
'use client';

import ProjectsSection from '@/components/Projects/ProjectsSection';

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
        <source src="/assets/1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 bg-black bg-opacity-30">
        <ProjectsSection />
      </div>
    </div>
  );
}