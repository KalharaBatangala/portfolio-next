'use client';

import React from 'react';
import { Experience } from '@/data/experiences';

type ExperienceCardProps = {
  experience: Experience;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="bg-gray-900 rounded-lg shadow-lg p-6 max-w-xl mx-auto mb-6 relative group overflow-hidden">
      {experience.isFeatured && (
        <div className="absolute top-3 left-3 bg-orange-600 text-white text-xs font-semibold px-2 py-1 rounded shadow-lg z-10">
          Featured
        </div>
      )}

      <div className="flex items-center space-x-4 mb-4">
        {experience.logo && (
          <img
            src={experience.logo}
            alt={`${experience.company} logo`}
            className="w-16 h-16 object-contain rounded"
          />
        )}
        <div>
          <h3 className="text-2xl font-bold text-white">{experience.role}</h3>
          <p className="text-gray-400">
            {experience.company} | <span className="italic">{experience.duration}</span>
          </p>
        </div>
      </div>

      <ul className="list-disc list-inside text-gray-300 mb-4">
        {experience.description.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>

      {experience.techStack && (
        <div className="flex flex-wrap gap-2">
          {experience.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="bg-orange-600 text-white text-xs px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
