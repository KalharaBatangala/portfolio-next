// 'use client';

// import Image from 'next/image';
// import { useState } from 'react';
// import profilePic from '/public/assets/profile-pic.webp'; // Static import

// export default function ProfileCardWithZoom() {
//   const [isZoomed, setIsZoomed] = useState(false);
//   const [isClosing, setIsClosing] = useState(false);

//   const handleClose = () => {
//     setIsClosing(true);
//     setTimeout(() => {
//       setIsZoomed(false);
//       setIsClosing(false);
//     }, 300);
//   };

//   return (
//     <>
//       {/* Profile Card */}
//       <div
//         className="absolute top-[200px] left-[5%] sm:left-[10%] md:left-[15%] transform transition-transform duration-300 hover:scale-105 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-sm w-full cursor-pointer"
//         onClick={() => setIsZoomed(true)}
//       >
//         <Image
//           src={profilePic} // Use static import
//           alt="Profile"
//           width={160}
//           height={160}
//           sizes="(max-width: 640px) 128px, 160px"
//           priority
//           placeholder="blur"
//           className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-secondary dark:border-secondary shadow-md mx-auto sm:mx-0 object-cover cursor-pointer"
//         />
//         <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 text-center sm:text-left">
//           Kalhara Batangala
//         </h1>
//         <h2 className="text-lg sm:text-xl font-semibold tracking-wide text-gray-600 dark:text-gray-300 text-center sm:text-left">
//           Engineer | Innovator
//         </h2>
//         <p className="mt-2 text-base italic tracking-wide text-gray-500 dark:text-gray-400 text-center sm:text-left">
//           Innovation. Inspiration. Excellence.
//         </p>
//       </div>

//       {/* Zoom Modal */}
//       {isZoomed && (
//         <div
//           className="fixed inset-0 bg-primary dark:bg-gray-900 bg-opacity-75 dark:bg-opacity-90 flex items-center justify-center z-50"
//           onClick={handleClose}
//         >
//           <Image
//             src={profilePic} // Use static import
//             alt="Zoomed Profile"
//             width={350}
//             height={350}
//             sizes="350px"
//             placeholder="blur"
//             className={`object-contain rounded-xl shadow-lg transition-transform duration-300 ${
//               isClosing ? 'animate-zoom-out' : 'animate-zoom-in'
//             }`}
//             onClick={(e) => e.stopPropagation()}
//           />
//         </div>
//       )}
//     </>
//   );
// }


'use client';

import Image from 'next/image';
import { useState } from 'react';
import profilePic from '/public/assets/profile-pic.webp'; // Static import

export default function ProfileCard() {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsZoomed(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <>
      {/* Profile Card */}
      <div
        className="absolute inset-x-0 md:left-[15%] top-[50%] -translate-y-1/2 w-full max-w-sm mx-auto md:mx-0 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl z-20 cursor-pointer transition-transform duration-300 hover:scale-105"
        onClick={() => setIsZoomed(true)}
      >
        <Image
          src={profilePic}
          alt="Profile"
          width={160}
          height={160}
          sizes="(max-width: 640px) 128px, 160px"
          priority
          placeholder="blur"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-secondary dark:border-secondary shadow-md mx-auto sm:mx-0 object-cover cursor-pointer"
        />
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 text-center sm:text-left">
          Kalhara Batangala
        </h1>
        <h2 className="text-lg sm:text-xl font-semibold tracking-wide text-gray-600 dark:text-gray-300 text-center sm:text-left">
          Engineer | Innovator
        </h2>
        <p className="mt-2 text-base italic tracking-wide text-gray-500 dark:text-gray-400 text-center sm:text-left">
          Innovation. Inspiration. Excellence.
        </p>
      </div>

      {/* Zoom Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 bg-primary dark:bg-gray-900 bg-opacity-75 dark:bg-opacity-90 flex items-center justify-center z-50"
          onClick={handleClose}
          role="dialog"
          aria-label="Zoomed profile image modal"
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={profilePic}
              alt="Zoomed Profile"
              width={350}
              height={350}
              sizes="350px"
              placeholder="blur"
              className={`object-contain rounded-xl shadow-lg transition-transform duration-300 ${
                isClosing ? 'animate-zoom-out' : 'animate-zoom-in'
              }`}
            />
            <button
              className="absolute top-2 right-2 text-white bg-gray-800 bg-opacity-50 rounded-full p-1 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-secondary"
              onClick={handleClose}
              aria-label="Close zoomed image"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}