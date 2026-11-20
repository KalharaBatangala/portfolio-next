'use client';

import { Fragment, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MotionConfig, motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import profilePic from '/public/assets/profile-pic.webp'; // Static import
import { profile } from '@/data/profile';
import { socialLinks } from '@/data/navigation';

const ease = [0.22, 1, 0.36, 1] as const;

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

export default function Hero() {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsZoomed(false);
      setIsClosing(false);
    }, 300);
  };

  const [primaryAction, secondaryAction] = profile.actions;

  return (
    <MotionConfig reducedMotion="user">
      {/* Always navy, in light and dark mode, like the navbar above it */}
      <section className="surface-brand relative isolate overflow-hidden bg-navy-radial pt-16 text-white">
        {/* Backdrop: fine grid and a soft gold glow */}
        <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10" />
        <div
          aria-hidden="true"
          className="absolute -right-48 top-1/4 -z-10 h-[34rem] w-[34rem] rounded-full bg-secondary/10 blur-3xl"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20 lg:px-8 lg:py-28">
          {/* Text */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <motion.p
              {...rise(0)}
              className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-secondary sm:text-xs"
            >
              <span aria-hidden="true" className="hidden h-px w-10 bg-secondary sm:block" />
              {profile.affiliation}
            </motion.p>

            <motion.h1
              {...rise(0.08)}
              className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            >
              {profile.name.first} <span className="text-gold-metallic">{profile.name.last}</span>
            </motion.h1>

            <motion.h2
              {...rise(0.16)}
              className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-lg font-medium tracking-wide text-white/90 sm:text-xl lg:justify-start"
            >
              {profile.roles.map((role, i) => (
                <Fragment key={role}>
                  {i > 0 && <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-secondary" />}
                  <span>{role}</span>
                </Fragment>
              ))}
            </motion.h2>

            <motion.p {...rise(0.22)} className="mt-3 font-display text-lg italic text-white/60">
              {profile.tagline}
            </motion.p>

            <motion.div {...rise(0.3)} className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
              {primaryAction && (
                <Link
                  href={primaryAction.href}
                  className="group inline-flex items-center gap-2 rounded-full bg-gold-metallic px-7 py-3.5 text-sm font-semibold text-on-secondary shadow-[0_12px_32px_-12px_rgb(var(--secondary)/0.7)] transition duration-300 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
                >
                  {primaryAction.label}
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              )}
              {secondaryAction && (
                <Link
                  href={secondaryAction.href}
                  className="inline-flex items-center rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-secondary hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                >
                  {secondaryAction.label}
                </Link>
              )}
            </motion.div>

            <motion.ul {...rise(0.38)} className="mt-10 flex justify-center gap-6 lg:justify-start" aria-label="Social profiles">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-white/55 transition-colors duration-300 hover:text-secondary"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Portrait: an arch with a fine gold frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease }}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <button
              type="button"
              onClick={() => setIsZoomed(true)}
              aria-label="Enlarge profile photo"
              className="group relative w-56 cursor-pointer focus-visible:outline-none sm:w-64 lg:w-full lg:max-w-[21rem]"
            >
              <span
                aria-hidden="true"
                className="absolute -inset-3 rounded-b-[2rem] rounded-t-full border border-secondary/45 transition-colors duration-500 group-hover:border-secondary sm:-inset-4"
              />
              <span className="relative block aspect-[4/5] overflow-hidden rounded-b-[1.5rem] rounded-t-full bg-navy-800 ring-1 ring-secondary group-focus-visible:ring-2">
                <Image
                  src={profilePic}
                  alt="Kalhara Batangala"
                  fill
                  sizes="(min-width: 1024px) 560px, 420px"
                  priority
                  placeholder="blur"
                  // The photo is full-length: zoom in on the head and shoulders (and past the photographer's credit bar)
                  className="origin-[50%_20%] scale-[1.75] object-cover object-[50%_20%] transition-transform duration-700 ease-out group-hover:scale-[1.8]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-950/70 to-transparent"
                />
              </span>
            </button>
          </motion.div>
        </div>

        {/* Credentials strip */}
        <div className="border-t border-white/10 bg-navy-950/40 backdrop-blur-sm">
          <dl className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8">
            {profile.highlights.map(({ label, value }) => (
              <div key={label} className="py-5 text-center sm:px-6 sm:py-6 sm:text-left sm:first:pl-0">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary">{label}</dt>
                <dd className="mt-1.5 text-sm text-white/85 sm:text-base">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div aria-hidden="true" className="h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />
      </section>

      {/* Zoom Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-primary/80 backdrop-blur-sm dark:bg-gray-950/90"
          onClick={handleClose}
        >
          <Image
            src={profilePic}
            alt="Kalhara Batangala, full photo"
            width={350}
            height={525}
            sizes="350px"
            placeholder="blur"
            className={`max-h-[85vh] w-auto rounded-xl object-contain shadow-lg ring-1 ring-secondary/60 transition-transform duration-300 ${
              isClosing ? 'animate-zoom-out' : 'animate-zoom-in'
            }`}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </MotionConfig>
  );
}
