'use client';

import Image from 'next/image';
import { useState } from 'react';
import EnthusiasmCard from '@/components/EnthusiasmCard';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsZoomed(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <div className="relative w-full min-h-screen bg-transparent dark:bg-gray-900 font-poppins">
      {/* Banner Wrapper */}
      <div className="mt-16 pt-12 px-12">
        <div
          className="rounded-t-[32px] overflow-hidden"
          style={{
            backgroundImage: `url('/assets/Portfolio-banner.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            height: '350px',
          }}
        />
      </div>

      {/* Profile Card */}
      <div className="absolute top-[200px] left-[5%] sm:left-[10%] md:left-[15%] transform transition-transform duration-300 hover:scale-105 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-sm w-full cursor-pointer " onClick={() => setIsZoomed(true)}>
        <Image
          src="/assets/profile-pic.jpg"
          alt="Profile"
          width={160}
          height={160}
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-secondary dark:border-secondary shadow-md mx-auto sm:mx-0 object-cover cursor-pointer"
          
        />
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 text-center sm:text-left">
          Kalhara Batangala
        </h1>
        <h2 className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 text-center sm:text-left">
          Aspiring Engineer
        </h2>
        <p className="mt-2 text-base text-gray-500 dark:text-gray-400 text-center sm:text-left">
          Building the Future, One Project at a Time
        </p>
      </div>

      {/* About & Enthusiasm */}
      <div className="relative mt-[150px] mb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">About Me</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I&apos;m Kalhara Batangala, an aspiring engineer passionate about leveraging technology to solve real-world problems. With a keen interest in DevOps, system administration, and deep learning for medical imaging, I strive to build innovative solutions that drive progress and impact lives positively.
          </p>
        </div>

        {/* Vertical Divider */}
        <div
          className="hidden md:block border-l border-secondary h-auto self-stretch"
          style={{
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          }}
        />

        {/* Enthusiasm Card */}
        <div className="max-w-sm w-full md:ml-auto">
          <EnthusiasmCard />
        </div>
      </div>

      {/* Zoomed Image Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 bg-primary dark:bg-gray-900 bg-opacity-75 dark:bg-opacity-90 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          {/* <img
            src="/assets/profile-pic.jpg"
            alt="Zoomed Profile"
            className={`max-w-[90vw] max-h-[90vh] object-contain rounded-xl shadow-lg transition-transform duration-300 ${
              isClosing ? 'animate-zoom-out' : 'animate-zoom-in'
            }`}
            onClick={(e) => e.stopPropagation()}
          /> */}
          <Image
            src="/assets/profile-pic.jpg"
            alt="Zoomed Profile"
            width={350} // Customize max width
            height={350} // Customize max height
            className={`object-contain rounded-xl shadow-lg transition-transform duration-300 ${
              isClosing ? 'animate-zoom-out' : 'animate-zoom-in'
            }`}
            onClick={(e) => e.stopPropagation()}
          />


        </div>
      )}
    </div>
  );
}
