'use client';

import { useCallback, useMemo, useState } from 'react';
import { AnimatePresence, LayoutGroup, MotionConfig, motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { Project, ProjectCategory, projectCategories, projects } from '@/data/projects';

type Filter = 'All' | ProjectCategory;

const filters: Filter[] = ['All', ...projectCategories];

const countFor = (filter: Filter) =>
  filter === 'All' ? projects.length : projects.filter((p) => p.category === filter).length;

const collaboratorCount = new Set(
  projects.flatMap((p) => p.contributors ?? []).map((c) => c.name).filter((name) => name !== 'Kalhara Batangala'),
).size;

const stats = [
  { value: projects.length, label: 'Projects' },
  { value: projectCategories.length, label: 'Disciplines' },
  { value: collaboratorCount, label: 'Collaborators' },
];

const ease = [0.22, 1, 0.36, 1] as const;

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('All');
  const [active, setActive] = useState<Project | null>(null);

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  const close = useCallback(() => setActive(null), []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-600 backdrop-blur dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            Selected work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="mt-6 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white"
          >
            Execution transcends <span className="text-secondary">imagination.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-400"
          >
            Systems, models and products I have designed and built, from Linux automation and cloud backends to
            medical imaging research and full-stack storefronts.
          </motion.p>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mx-auto mt-10 flex max-w-md justify-center divide-x divide-black/10 dark:divide-white/10"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex-1 px-4">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-semibold text-gray-900 tabular-nums dark:text-white">{stat.value}</dd>
                <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400" aria-hidden="true">
                  {stat.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </header>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mt-14 flex justify-center"
        >
          <div
            role="group"
            aria-label="Filter projects by category"
            className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-black/[0.08] bg-white/70 p-1 backdrop-blur [scrollbar-width:none] dark:border-white/10 dark:bg-white/[0.04]"
          >
            {filters.map((f) => {
              const selected = f === filter;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  aria-pressed={selected}
                  className={`relative flex-none rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${
                    selected
                      ? 'text-white dark:text-gray-900'
                      : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="project-filter-pill"
                      className="absolute inset-0 rounded-full bg-primary dark:bg-white"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">
                    {f}
                    <span className={`ml-1.5 text-xs tabular-nums ${selected ? 'opacity-60' : 'opacity-50'}`}>
                      {countFor(f)}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Grid */}
        <LayoutGroup>
          <motion.ul layout className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visible.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} onOpen={setActive} />
              ))}
            </AnimatePresence>
          </motion.ul>

          <AnimatePresence>{active && <ProjectModal key={active.slug} project={active} onClose={close} />}</AnimatePresence>
        </LayoutGroup>
      </div>
    </MotionConfig>
  );
};

export default ProjectsSection;
