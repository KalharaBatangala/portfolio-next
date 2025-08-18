// 'use client';

// import ProjectCard from './ProjectCard';
// import { motion } from 'framer-motion';
// import { projects } from '@/data/projects';

// const ProjectsSection: React.FC = () => {
//   return (
//     <div className="container mx-auto mt-8 py-16 px-4 relative z-10">
//       <motion.div
//         className="bg-gray-900 bg-opacity-70 p-6 rounded-lg shadow-lg mb-8"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         style={{ position: 'relative', zIndex: 1 }}
//       >
//         <motion.h1
//           className="text-5xl font-extrabold text-white text-center tracking-tight"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//         >
//           Execution Transcends Imagination !
//         </motion.h1>
//         <motion.div
//           className="absolute inset-0 border-2 border-[length:100px_100%] border-transparent rounded-lg pointer-events-none"
//           style={{ zIndex: -1 }}
//           initial={{
//             borderImage:
//               'linear-gradient(to right, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 100%) 1',
//           }}
//           animate={{
//             borderImage:
//               'linear-gradient(to right, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 100%) 1',
//             backgroundPosition: ['0% 0%', '100% 0%', '100% 100%', '0% 100%', '0% 0%'],
//           }}
//           transition={{
//             duration: 3,
//             ease: 'linear',
//             times: [0, 0.25, 0.5, 0.75, 1],
//             repeat: Infinity,
//           }}
//         />
//       </motion.div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.map((project, index) => (
//           <ProjectCard key={index} project={project} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectsSection;


import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';

const ProjectsSection: React.FC = () => {
  return (
    <div className="container mx-auto mt-8 py-16 px-4 relative z-10">
      <div
        className="bg-gray-900 bg-opacity-70 p-6 rounded-lg shadow-lg mb-8 relative animate-fade-in"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <h1 className="text-5xl font-extrabold text-white text-center tracking-tight animate-fade-in-delay">
          Execution Transcends Imagination!
        </h1>
        <div
          className="absolute inset-0 border-2 border-transparent rounded-lg pointer-events-none animate-border-gradient"
          style={{ zIndex: -1 }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;