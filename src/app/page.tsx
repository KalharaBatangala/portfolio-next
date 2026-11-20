import Hero from '@/components/Home/Hero';
import EnthusiasmCard from '@/components/Home/EnthusiasmCard';
import ResumeCard from '@/components/Home/ResumeCard';
import RotatingContact from '@/components/Common/RotatingContact';
import { profile } from '@/data/profile';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-background font-poppins">
      <Hero />

      {/* Main Content */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col md:flex-row gap-12">
        {/* Left: About Me */}
        <div className="flex-1">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
            <span aria-hidden="true" className="h-px w-10 bg-secondary" />
            Profile
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-gray-900 dark:text-white mb-8">About</h2>
          {profile.about.map((paragraph, i) => (
            <p
              key={i}
              className={`${i > 0 ? 'mt-5' : ''} text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-justify`}
            >
              {paragraph}
            </p>
          ))}

          {/* Rotating Contact Below About Me */}
          <div className="mt-10 flex justify-center md:justify-start">
            <RotatingContact />
          </div>
        </div>

        {/* Divider */}
        <div
          className="hidden md:block border-l border-secondary h-auto self-stretch"
          style={{
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          }}
        />

        {/* Right: Resume & Enthusiasm */}
        <div className="flex flex-col max-w-sm w-full mx-auto md:mx-0 md:ml-auto gap-8">
          <ResumeCard />
          <EnthusiasmCard />
        </div>
      </section>
    </div>
  );
}
