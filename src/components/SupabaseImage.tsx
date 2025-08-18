// // src/components/SupabaseImage.tsx
// 'use client';

// import { useEffect, useState } from 'react';

// type SupabaseImageProps = {
//   path: string; // e.g. "projects/myproject.png"
//   alt: string;
//   className?: string;
// };

// export default function SupabaseImage({ path, alt, className }: SupabaseImageProps) {
//   const [url, setUrl] = useState<string | null>(null);

//   useEffect(() => {
//     async function fetchSignedUrl() {
//       try {
//         const res = await fetch(`/api/getImageUrl?path=${encodeURIComponent(path)}`);
//         const data = await res.json();
//         if (data.url) setUrl(data.url);
//       } catch (err) {
//         console.error("Error fetching image URL:", err);
//       }
//     }
//     fetchSignedUrl();
//   }, [path]);

//   if (!url) {
//     return (
//       <div className={`bg-gray-700 animate-pulse ${className}`}>
//         {/* Skeleton placeholder */}
//       </div>
//     );
//   }

//   // eslint-disable-next-line @next/next/no-img-element
//   return <img src={url} alt={alt} className={className} />;
// }

// 'use client';

// import Image from 'next/image';
// import { useEffect, useState } from 'react';

// type SupabaseImageProps = {
//   path: string;
//   alt: string;
//   className?: string;
//   width?: number;
//   height?: number;
//   sizes?: string;
// };

// export default function SupabaseImage({
//   path,
//   alt,
//   className,
//   width = 32,
//   height = 32,
//   sizes = '32px',
// }: SupabaseImageProps) {
//   const [url, setUrl] = useState<string>('https://via.placeholder.com/32x32?text=Loading');

//   useEffect(() => {
//     async function fetchSignedUrl() {
//       try {
//         const res = await fetch(`/api/getImageUrl?path=${encodeURIComponent(path)}`);
//         const data = await res.json();
//         if (data.url) {
//           setUrl(data.url);
//         } else {
//           console.error(`No URL returned for path: ${path}`);
//           setUrl('https://via.placeholder.com/32x32?text=No+Image');
//         }
//       } catch (err) {
//         console.error(`Error fetching signed URL for ${path}:`, err);
//         setUrl('https://via.placeholder.com/32x32?text=No+Image');
//       }
//     }
//     if (!path.startsWith('http')) {
//       fetchSignedUrl();
//     } else {
//       setUrl(path);
//     }
//   }, [path]);

//   return (
//     <Image
//       src={url}
//       alt={alt}
//       width={width}
//       height={height}
//       sizes={sizes}
//       className={className}
//       // No placeholder="blur" to avoid errors
//     />
//   );
// }


'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type SupabaseImageProps = {
  path: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  sizes?: string;
};

export default function SupabaseImage({
  path,
  alt,
  className,
  width = 32,
  height = 32,
  sizes = '32px',
}: SupabaseImageProps) {
  const [url, setUrl] = useState<string | null>(null); // null = loading

  useEffect(() => {
    async function fetchSignedUrl() {
      try {
        if (!path) {
          console.error('SupabaseImage: Empty path provided');
          setUrl('https://via.placeholder.com/32x32?text=No+Image');
          return;
        }
        const res = await fetch(`/api/getImageUrl?path=${encodeURIComponent(path)}`);
        const data = await res.json();
        if (data.url) {
          setUrl(data.url);
        } else {
          console.error(`SupabaseImage: No URL returned for path: ${path}`);
          setUrl('https://via.placeholder.com/32x32?text=No+Image');
        }
      } catch (err) {
        console.error(`SupabaseImage: Error fetching signed URL for path "${path}":`, err);
        setUrl('https://via.placeholder.com/32x32?text=No+Image');
      }
    }
    if (!path.startsWith('http')) {
      fetchSignedUrl();
    } else {
      setUrl(path);
    }
  }, [path]);

  // Loading skeleton with pulse effect
  if (url === null) {
    return <div className={`bg-gray-700 rounded-full animate-pulse ${className}`} />;
  }

  return (
    <Image
      src={url}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
    />
  );
}