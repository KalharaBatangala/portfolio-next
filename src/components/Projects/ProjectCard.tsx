
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/projects';
import SupabaseImage from '@/components/SupabaseImage';
import titaniumImage from '/public/assets/titanium.webp'; // Static import
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div
      className="relative p-6 rounded-lg shadow-lg overflow-hidden group hover:brightness-110 transition duration-300"
      style={{ position: 'relative' }}
    >
      <Image
        src={titaniumImage}
        alt="Project background"
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        placeholder="blur"
        className="object-cover object-center"
        style={{ zIndex: -1 }}
      />

      {project.isNew && (
        <div className="absolute top-4 left-0 z-30">
          <div className="relative">
            <div className="absolute -top-2 -left-5 transform -rotate-45 bg-red-600 text-white text-[10px] font-bold px-6 py-[1px] shadow-md">
              Featured
            </div>
          </div>
        </div>
      )}

      <Image
        src={project.image} // Static import
        alt={`${project.title} thumbnail`}
        width={300}
        height={128}
        sizes="(max-width: 768px) 100vw, 33vw"
        placeholder="blur"
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

    {/* Project Links (GitHub + Website) */}
    <div className="flex items-center space-x-4 mt-2">
      {/* GitHub Links */}
      {project.github.map((link, index) => (
        <a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 hover:text-orange-400 transition duration-200"
          aria-label={`GitHub repository for ${project.title}`}
        >
          GitHub
        </a>
      ))}

      {/* Demo Website */}
      {project.website && (
        <a
          href={project.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-secondary hover:text-gray-300 transition duration-200"
          aria-label={`Live demo of ${project.title}`}
        >
          <GlobeAltIcon className="w-6 h-6" />
        </a>
      )}
    </div>



      {/* Contributors */}
      {project.contributors && project.contributors.length > 0 && (
        <div className="flex items-center mt-3">
          <span className="text-sm text-gray-400 mr-2">Contributors:</span>
          <div className="flex -space-x-3">
            {project.contributors.map((contributor, index) => (
              <a
                key={index}
                href={contributor.profileUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                title={contributor.name}
                className="block hover:scale-105 transition-transform duration-200"
              >
                <SupabaseImage
                  path={contributor.avatar}
                  alt={contributor.name}
                  className="w-8 h-8 rounded-full border-2 border-gray-800"
                />
              </a>
            ))}
          </div>
        </div>
      )}

      <div
        className="absolute inset-0 pointer-events-none group-hover:bg-gradient-to-r group-hover:from-[rgba(255,255,255,0.95)] group-hover:to-[rgba(255,255,255,0)]"
        style={{
          background: 'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 100%)',
          transition: 'background 1.2s ease-in-out',
        }}
      />
    </div>
  );
};

export default ProjectCard;