
import React from 'react';

// Strong Enthusiasm card component for displaying interests
const EnthusiasmCard = () => {
  // Interests list for easy updates
  const interests = [
    'DevOps Engineering',
    'System Administration',
    'Deep Learning for medical imaging'
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-sm w-full font-poppins">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Strong Enthusiasm</h3>
      <ul className="space-y-2">
        {interests.map((interest, index) => (
          <li key={index} className="flex items-center">
            <span className="text-secondary mr-2 text-3xl">•</span> {/* Larger bullet point for visibility */}
            <span className="text-lg text-gray-800 dark:text-gray-300">{interest}</span> {/* Larger text for clarity */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnthusiasmCard;