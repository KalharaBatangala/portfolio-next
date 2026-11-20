'use client';

import Image from 'next/image';
import { palette } from '@/theme/theme';

// The chart service takes the colour as hex without '#'
const chartColor = palette.gold[500].replace('#', '');

type GitHubCardProps = {
  username: string;
};

export default function GitHubCard({ username }: GitHubCardProps) {
  return (
    <div className="container mx-auto px-4 py-16 -mt-2">
      <div
        className="relative p-[5px] rounded-2xl overflow-hidden max-w-4xl mx-auto animate-border-gradient-accent"
        style={{
          border: '2px solid transparent', // Required for border-image
          borderImageSlice: 1,
        }}
      >
        <div className="surface-brand rounded-2xl bg-gray-900 shadow-xl p-8">
          <h1 className="text-4xl font-bold text-white mb-6 text-center">
            Github <span className="text-secondary">Contributions</span>
          </h1>
          <p className="text-gray-300 text-lg text-center max-w-2xl mx-auto mb-8">
            I’m a passionate developer who loves turning ideas into reality. This graph shows my journey of consistent
            coding and contributions on GitHub.
          </p>
          <div className="flex justify-center">
            <Image
              src={`https://ghchart.rshah.org/${chartColor}/${username}`}
              alt={`${username}'s GitHub contribution graph`}
              width={900}
              height={200}
              sizes="(max-width: 768px) 100vw, 900px"
              unoptimized
              className="rounded-lg w-full max-w-[900px] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}