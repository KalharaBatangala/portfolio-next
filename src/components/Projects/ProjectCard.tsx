'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { Project } from '@/data/projects';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div
      className="relative p-6 rounded-lg shadow-lg overflow-hidden group"
      style={{
        backgroundImage: `url('/assets/titanium.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      initial={{ filter: 'brightness(100%)' }}
      whileHover={{ filter: 'brightness(110%)' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {/* Conditional Ribbon */}
      {project.isNew && (
        <div className="absolute top-4 left-0 z-30">
          <div className="relative">
            <div className="absolute -top-2 -left-5 transform -rotate-45 bg-red-600 text-white text-[10px] font-bold px-6 py-[1px] shadow-md">
              Featured
            </div>
          </div>
        </div>
      )}

      <img
        src={project.image}
        alt={`${project.title} thumbnail`}
        className="w-full h-32 object-cover rounded-t-lg mb-4"
        onError={(e) => {
          e.currentTarget.src = 'https://via.placeholder.com/300x200?text=No+Image';
        }}
      />
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-gray-300 text-sm mb-2">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-2">
        {project.tags.map((tag, index) => (
          <span key={index} className="text-xs text-orange-500 bg-gray-700 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        {project.github.map((link, index) => (
          <Link
            key={index}
            href={link}
            target="_blank"
            className="text-orange-500 hover:text-orange-400"
          >
            GitHub
          </Link>
        ))}
      </div>
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{
          background:
            'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 100%)',
        }}
        whileHover={{
          background:
            'linear-gradient(to right, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0) 70%)',
        }}
        animate={{ backgroundPosition: ['-100%', '100%'] }}
        transition={{ duration: 1.2, ease: 'easeInOut', repeat: 0 }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundPosition = '-100%';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundPosition = '100%';
        }}
      />
    </motion.div>
  );
};

export default ProjectCard;
