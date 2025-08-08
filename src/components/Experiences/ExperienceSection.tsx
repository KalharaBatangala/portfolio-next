'use client';

import React from 'react';
import ExperienceCard from './ExperienceCard';
import { experiences } from '@/data/experiences';

const ExperienceSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">Industry Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
