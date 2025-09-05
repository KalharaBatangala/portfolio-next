
import Head from 'next/head';
import ExperienceSection from '@/components/Experiences/ExperienceSection';
import SplashAnimation from '@/components/Common/SplashAnimation';
import GitHubCard from '@/components/Experiences/GitHubCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kalhara Profile | Experiences',
  description: 'My Professional career experiences',
};


const githubUsername = 'KalharaBatangala';

export default function ExperiencePage() {
  return (
    <>
      <Head>
        <title>Kalhara Profile | Experience</title>
        <meta
          name="description"
          content="Discover Kalhara Batangala's professional experience in DevOps, system administration, and deep learning."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Kalhara Batangala, experience, DevOps, deep learning, portfolio" />
      </Head>

      <SplashAnimation />

      <div className="relative bg-gray-200 dark:bg-black">
        <div className="relative z-10 bg-gray-200 dark:bg-black bg-opacity-30 min-h-screen">
          <ExperienceSection />

          {/* Divider */}
          <div className="container mx-auto px-4 -my-2">
            <div className="h-[2px] bg-secondary max-w-4xl mx-auto animate-fade-in" />  
          </div>
          
          <GitHubCard username={githubUsername} />
        </div>
      </div>
    </>
  );
}