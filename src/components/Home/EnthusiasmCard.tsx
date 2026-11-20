import React from 'react';
import { profile } from '@/data/profile';

// Research interests card (edit the list in src/data/profile.ts)
const EnthusiasmCard = () => {
  return (
    <div className="relative overflow-hidden bg-card-bg border border-border p-6 rounded-2xl shadow-xl w-full font-poppins">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gold-metallic" />
      <h3 className="font-display text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-5">Research Interests</h3>
      <ul className="space-y-3">
        {profile.researchInterests.map((interest) => (
          <li key={interest} className="flex items-center gap-3">
            <span aria-hidden="true" className="h-2 w-2 flex-none rotate-45 bg-secondary" />
            <span className="text-lg text-gray-800 dark:text-gray-300">{interest}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnthusiasmCard;
