'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaGithub } from 'react-icons/fa';
import { Project } from '@/data/projects';
import ProjectCover from './ProjectCover';
import { CARD_RADIUS, layoutTransition } from './ProjectCard';

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const sectionHeading = 'text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400';

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = `project-${project.slug}-title`;

  // Lock page scroll, close on Escape, keep focus inside the dialog
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus({ preventScroll: true });

    const { body, documentElement } = document;
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth;
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;
    body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPadding;
      previouslyFocused?.focus({ preventScroll: true });
    };
  }, [onClose]);

  const team = project.contributors && project.contributors.length > 1 ? project.contributors : null;
  const hasLinks = Boolean(project.website) || project.repos.length > 0;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
      {/* Backdrop: blurs and dims the page behind the card */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-gray-900/30 backdrop-blur-md dark:bg-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      />

      <motion.div
        ref={dialogRef}
        layoutId={`card-${project.slug}`}
        transition={layoutTransition}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        style={{ borderRadius: CARD_RADIUS }}
        className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden border border-black/[0.06] bg-white shadow-[0_40px_120px_-30px_rgba(0,0,0,0.55)] dark:border-white/10 dark:bg-gray-900"
      >
        <div className="overflow-y-auto overscroll-contain">
          <motion.div
            layoutId={`cover-${project.slug}`}
            transition={layoutTransition}
            className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-[21/9]"
          >
            <ProjectCover art={project.cover} />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.18, duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
            exit={{ opacity: 0, transition: { duration: 0.12 } }}
            className="p-6 sm:p-10"
          >
            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em]">
              <span className="text-secondary">{project.category}</span>
              {project.featured && (
                <>
                  <span className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                  <span className="text-gray-500 dark:text-gray-400">Featured</span>
                </>
              )}
            </div>

            <h2 id={titleId} className="mt-3 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
              {project.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">{project.description}</p>

            {project.highlights && project.highlights.length > 0 && (
              <section className="mt-8">
                <h3 className={sectionHeading}>Highlights</h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-secondary" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section className="mt-8">
              <h3 className={sectionHeading}>Built with</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-black/[0.08] bg-gray-50 px-3 py-1 text-xs text-gray-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </section>

            {team && (
              <section className="mt-8">
                <h3 className={sectionHeading}>Team</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {team.map((member) => (
                    <li key={member.name}>
                      <a
                        href={member.profileUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] py-1 pl-1 pr-3 text-xs text-gray-700 transition-colors hover:border-secondary/50 hover:text-secondary dark:border-white/10 dark:text-gray-300"
                      >
                        <Image
                          src={`/assets/${member.avatar}`}
                          alt=""
                          width={24}
                          height={24}
                          className="h-6 w-6 rounded-full object-cover"
                        />
                        {member.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {hasLinks && (
              <div className="mt-10 flex flex-wrap gap-3 border-t border-black/[0.06] pt-6 dark:border-white/10">
                {project.website && (
                  <a
                    href={project.website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(255,115,0,0.7)] transition-colors hover:bg-orange-600"
                  >
                    {project.website.label}
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                )}
                {project.repos.map((repo) => (
                  <a
                    key={repo.url}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:border-gray-900 dark:border-white/15 dark:text-white dark:hover:border-white"
                  >
                    <FaGithub className="h-4 w-4" />
                    {repo.label}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        </div>

        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur-md transition-colors hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      </motion.div>
    </div>,
    document.body,
  );
}
