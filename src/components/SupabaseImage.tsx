// src/components/SupabaseImage.tsx
'use client';

import { useEffect, useState } from 'react';

type SupabaseImageProps = {
  path: string; // e.g. "projects/myproject.png"
  alt: string;
  className?: string;
};

export default function SupabaseImage({ path, alt, className }: SupabaseImageProps) {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSignedUrl() {
      try {
        const res = await fetch(`/api/getImageUrl?path=${encodeURIComponent(path)}`);
        const data = await res.json();
        if (data.url) setUrl(data.url);
      } catch (err) {
        console.error("Error fetching image URL:", err);
      }
    }
    fetchSignedUrl();
  }, [path]);

  if (!url) {
    return (
      <div className={`bg-gray-700 animate-pulse ${className}`}>
        {/* Skeleton placeholder */}
      </div>
    );
  }

  return <img src={url} alt={alt} className={className} />;
}
