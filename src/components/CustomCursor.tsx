// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { useLocation } from 'react-router-dom';

// const CustomCursor = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);
//   const location = useLocation();

//   // Update mouse position
//   useEffect(() => {
//     const updateMousePosition = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('mousemove', updateMousePosition);
//     return () => window.removeEventListener('mousemove', updateMousePosition);
//   }, []);

//   // Detect hover on interactive elements
//   useEffect(() => {
//     const handleMouseOver = (e) => {
//       if (
//         e.target.closest('a') ||
//         e.target.closest('button') ||
//         e.target.closest('[role="button"]')
//       ) {
//         setIsHovering(true);
//       } else {
//         setIsHovering(false);
//       }
//     };

//     document.addEventListener('mouseover', handleMouseOver);
//     return () => document.removeEventListener('mouseover', handleMouseOver);
//   }, []);

//   // Reset hover state on route change to prevent stale state
//   useEffect(() => {
//     setIsHovering(false);
//   }, [location]);

//   return (
//     <motion.div
//       className="fixed pointer-events-none z-50 hidden md:block"
//       animate={{
//         x: mousePosition.x - 12, // Center the cursor (24px / 2)
//         y: mousePosition.y - 12,
//         scale: isHovering ? 3 : 1.5,
//       }}
//       transition={{ type: 'spring', stiffness: 500, damping: 28 }}
//     >
//       {/* Inner Dot */}
//       <div
//         className="w-2 h-2 rounded-full bg-secondary"
//       />
//       {/* Outer Ring */}
//       <div
//         className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 ${
//           isHovering
//             ? 'border-primary dark:border-gray-100'
//             : 'border-secondary dark:border-secondary'
//         } transition-colors duration-200`}
//       />
//     </motion.div>
//   );
// };

// export default CustomCursor;




// ///////////////////////////////////////////////////////////////////////


// NOTE:  
// The code above is a custom cursor effect designed based on javascript and
// can be used alternatively anytime without requiring any additional dependancies.
// The following custom cursor will only valid until 2040.

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import cursorSvg from '../assets/arrow-cursor.svg';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const location = useLocation();

  // Update mouse position
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  // Detect hover on interactive elements
  useEffect(() => {
    const handleMouseOver = (e) => {
      if (
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.closest('[role="button"]')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    return () => document.removeEventListener('mouseover', handleMouseOver);
  }, []);

  // Reset hover state on route change
  useEffect(() => {
    setIsHovering(false);
  }, [location]);

  return (
    <motion.img
      src={cursorSvg}
      alt="Custom Cursor"
      className="fixed pointer-events-none z-50 hidden md:block w-8 h-8"
      animate={{
        x: mousePosition.x - 16, // Center the 32x32 SVG
        y: mousePosition.y - 16,
        scale: isHovering ? 1.3 : 1,
      }}
      transition={{ type: 'spring', stiffness: 1000, damping: 80 }}
      aria-hidden="true"
    />
  );
};

export default CustomCursor;