// src/app/projects/page.tsx

type Project = {
  title: string;
  description: string;
  github: string;
  demo: string;
};




const projects = [
  {
    title: 'Medical Imaging AI',
    description:
      'A deep learning model for detecting anomalies in medical images, built with TensorFlow and deployed using Docker for scalable inference.',
    github: '#',
    demo: '#',
  },
  {
    title: 'DevOps Dashboard',
    description:
      'A web-based dashboard for monitoring CI/CD pipelines, integrating with Jenkins and Kubernetes for real-time system administration insights.',
    github: '#',
    demo: '#',
  },
  {
    title: 'Portfolio Website',
    description:
      'A responsive portfolio site showcasing my work, built with React, Tailwind CSS, and Vite, featuring a dark mode toggle and modular design.',
    github: '#',
    demo: '#',
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative w-full min-h-screen bg-transparent dark:bg-gray-900 font-poppins pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
          My Projects
        </h2>
        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {project.title}
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="text-secondary hover:text-primary dark:hover:text-primary transition-colors duration-300"
                  aria-label={`View ${project.title} on GitHub`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  className="text-secondary hover:text-primary dark:hover:text-primary transition-colors duration-300"
                  aria-label={`View demo of ${project.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

