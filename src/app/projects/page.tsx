// src/app/projects/page.tsx
import { Metadata } from 'next';
import ProjectsSection from '@/components/Projects/ProjectsSection';
import AmbientBackground from '@/components/Projects/AmbientBackground';
import SplashAnimation from '@/components/Common/SplashAnimation';

export const metadata: Metadata = {
  title: 'Kalhara Profile | Projects',
  description:
    "Explore Kalhara Batangala's projects in DevOps, cloud, full-stack development and deep learning for medical imaging.",
  keywords: ['Kalhara Batangala', 'projects', 'DevOps', 'deep learning', 'portfolio'],
};

export default function ProjectsPage() {
  return (
    <>
      <SplashAnimation />

      <main className="relative isolate min-h-screen overflow-hidden">
        <AmbientBackground />
        <ProjectsSection />
      </main>
    </>
  );
}
