
import Image from 'next/image';
import EnthusiasmCard from '@/components/Home/EnthusiasmCard';
import ResumeCard from '@/components/Home/ResumeCard';
import RotatingContact from '@/components/Common/RotatingContact';
import ProfileCard from '@/components/Home/ProfileCard';
import bannerImage from '/public/assets/Portfolio-banner.webp'; // Static import



export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-transparent dark:bg-gray-900 font-poppins">
      {/* Banner */}
      <div className="mt-16 pt-12 px-12 relative overflow-hidden " style={{ height: '350px' }} >
        
        <Image
          src={bannerImage} // Use static import  
          alt="Portfolio Banner"
          fill
          sizes="100vw"
          priority
          placeholder="blur" 
          className="object-cover object-bottom"
        />
        
      </div>

      {/* Profile Card */}
      <ProfileCard />

      {/* Main Content */}
      <div className="relative mt-[150px] mb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8">
        {/* Left: About Me */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            About Me
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-justify">
            I&apos;m Kalhara Batangala, an aspiring engineer passionate about
            leveraging technology to solve real-world problems. With a keen
            interest in DevOps, system administration, and deep learning for
            medical imaging, I strive to build innovative solutions that drive
            progress and impact lives positively.
          </p>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 text-justify">
            I build resilient systems designed to withstand failures, adhering
            to industry best practices to deliver high-quality products with
            robust performance and reliability.
          </p>

          {/* Rotating Contact Below About Me */}
          <div className="mt-8 flex justify-center md:justify-start">
            <RotatingContact />
          </div>
        </div>

        {/* Divider */}
        <div
          className="hidden md:block border-l border-secondary h-auto self-stretch"
          style={{
            maskImage:
              'linear-gradient(to bottom, black 0%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, black 0%, transparent 100%)',
          }}
        />

        {/* Right: Resume & Enthusiasm */}
        <div className="flex flex-col max-w-sm w-full md:ml-auto gap-8">
          <ResumeCard />
          <EnthusiasmCard />
        </div>
      </div>
    </div>
  );
}

