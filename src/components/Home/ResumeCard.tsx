// src/components/Home/ResumeCard.tsx
import React from 'react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { profile } from '@/data/profile';

const buttonBase =
  'flex items-center justify-center gap-2 flex-1 px-4 py-3 rounded-md border-2 border-secondary font-semibold text-center text-sm transition-colors duration-300';

const ResumeCard: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-card-bg border border-border rounded-2xl shadow-xl p-6 w-full">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gold-metallic" />
      <h3 className="font-display text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Resumes</h3>
      <div className="flex gap-4">
        {profile.resumes.map((resume, i) => (
          <a
            key={resume.href}
            href={resume.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={resume.ariaLabel}
            className={`${buttonBase} ${
              i === 0
                ? 'bg-secondary text-on-secondary hover:bg-transparent hover:text-secondary'
                : 'bg-transparent text-secondary hover:bg-secondary hover:text-on-secondary'
            }`}
          >
            {resume.label}
            <ArrowTopRightOnSquareIcon className="w-5 h-5 flex-none" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ResumeCard;
