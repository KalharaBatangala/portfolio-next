'use client';
import React from 'react';

const AboutCard: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full dark:bg-primary">
      <h3 className="text-xl font-bold text-gray-800 mb-4 dark:text-white">About Me</h3>
      <p className="text-gray-600 text-sm dark:text-text-tertiary">
        I&apos;m Kalhara Batangala, an aspiring engineer passionate about leveraging technology to solve real-world problems. With a keen interest in DevOps, system administration, and deep learning for medical imaging, I strive to build innovative solutions that drive progress and impact lives positively.
      </p>
    </div>
  );
};

export default AboutCard;
