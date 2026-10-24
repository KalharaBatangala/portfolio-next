
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
            About
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-justify">
            Kalhara Batangala is a Probationary Lecturer in the Department of
            Electrical and Information Engineering, Faculty of Engineering,
            University of Ruhuna, where he teaches Mobile Application
            Development, Computer Networks and Machine Learning. He holds a BSc Engineering
            (Hons) in Computer Engineering from the Faculty of Engineering,
            University of Sri Jayewardenepura.
          </p>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 text-justify">
            His research centres on deep learning for medical imaging. His
            final-year research combined deep learning for image classification
            with GPU parallel programming, and his work on brain tumour
            classification using deep residual networks was published in the
            proceedings of the 2026 Moratuwa Engineering Research Conference
            (MERCon). His wider interests include machine learning, optical
            networks and wireless communications.
          </p>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 text-justify">
            During his undergraduate studies, he interned in DevOps and cloud
            operations at SLT-Mobitel, building CI/CD pipelines, running
            containerised workloads on Docker and Kubernetes, and administering
            Linux and Windows servers across on-premises and cloud environments.
            That industry grounding shapes both his engineering and his
            teaching: systems that are reliable, secure and built to withstand
            failure.
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

