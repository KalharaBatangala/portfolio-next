// components/OnlineProfileCard.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { OnlineProfile } from '@/data/onlineProfiles';

export default function OnlineProfileCard({ name, icon, link, tooltip }: OnlineProfile) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20">
      <div className="relative">
        <Image src={icon} alt={`${name} icon`} width={64} height={64} className="object-contain rounded-full transition-transform duration-300 group-hover:scale-110" />
        {tooltip && (
          <div className="absolute bottom-full mb-2 hidden group-hover:block px-2 py-1 bg-gray-800 text-white text-xs rounded-md whitespace-nowrap">
            {tooltip}
          </div>
        )}
      </div>
    </Link>
  );
}