'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { Project } from '@/data/projects';
import ProjectCover from './ProjectCover';

export const CARD_RADIUS = 20;
export const layoutTransition = { type: 'spring', stiffness: 260, damping: 32, mass: 0.9 } as const;

type ProjectCardProps = {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onOpen }) => {
  const visibleTags = project.tags.slice(0, 3);
  const hiddenTagCount = project.tags.length - visibleTags.length;

  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
      // Stagger only the entrance; re-arranging after a filter change moves every card together
      transition={{
        default: { duration: 0.5, delay: Math.min(index * 0.05, 0.4), ease: [0.22, 1, 0.36, 1] },
        layout: layoutTransition,
      }}
      className="h-full"
    >
      <motion.button
        type="button"
        layoutId={`card-${project.slug}`}
        transition={layoutTransition}
        onClick={() => onOpen(project)}
        whileHover={{ y: -4 }}
        aria-haspopup="dialog"
        aria-label={`${project.title}: ${project.tagline} Open project details`}
        style={{ borderRadius: CARD_RADIUS }}
        className="group relative flex h-full w-full flex-col overflow-hidden text-left
                   border border-black/[0.06] bg-white/80 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-16px_rgba(0,0,0,0.18)] backdrop-blur-sm
                   dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none
                   transition-[border-color,box-shadow] duration-500 ease-out
                   hover:border-secondary/40 hover:shadow-[0_24px_48px_-24px_rgba(255,115,0,0.45)]
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-200 dark:focus-visible:ring-offset-gray-900"
      >
        <motion.div
          layoutId={`cover-${project.slug}`}
          transition={layoutTransition}
          className="relative aspect-[16/10] w-full overflow-hidden"
        >
          <ProjectCover art={project.cover} className="cover-zoom" />
          {project.featured && (
            <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              Featured
            </span>
          )}
        </motion.div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary">
            {project.category}
          </p>
          <h3 className="mt-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            {project.tagline}
          </p>

          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
            {visibleTags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-black/[0.08] px-2.5 py-0.5 text-[11px] text-gray-600 dark:border-white/10 dark:text-gray-400"
              >
                {tag}
              </li>
            ))}
            {hiddenTagCount > 0 && (
              <li className="rounded-full px-1.5 py-0.5 text-[11px] text-gray-400 dark:text-gray-500">
                +{hiddenTagCount}
              </li>
            )}
          </ul>

          <div className="mt-auto flex items-center justify-between pt-5">
            {project.contributors && project.contributors.length > 1 ? (
              <div className="flex -space-x-2">
                {project.contributors.map((contributor) => (
                  <Image
                    key={contributor.name}
                    src={`/assets/${contributor.avatar}`}
                    alt=""
                    width={28}
                    height={28}
                    className="h-7 w-7 rounded-full object-cover ring-2 ring-white dark:ring-gray-900"
                  />
                ))}
              </div>
            ) : (
              <span className="text-xs text-gray-400 dark:text-gray-500">Solo project</span>
            )}
            <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 transition-colors duration-300 group-hover:text-secondary dark:text-white">
              Details
              <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </motion.button>
    </motion.li>
  );
};

export default ProjectCard;
