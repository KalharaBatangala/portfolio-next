// src/data/projects.ts
import { contributors, Contributor } from './contributors';

export const projectCategories = ['Web', 'AI & GPU', 'Mobile & XR', 'Cloud & DevOps'] as const;
export type ProjectCategory = (typeof projectCategories)[number];

// Each cover is an illustration drawn in components/Projects/ProjectCover.tsx
export type ProjectCoverArt =
  | 'terminal'
  | 'mri'
  | 'coffee'
  | 'tea'
  | 'pipeline'
  | 'scoreboard'
  | 'cnn'
  | 'chat'
  | 'wordmark'
  | 'ar'
  | 'fingerprint'
  | 'pizza'
  | 'platforms'
  | 'dashboard'
  | 'cuda';

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  slug: string; // stable id: used for React keys and shared-layout animations
  title: string;
  tagline: string; // one line, shown on the card
  description: string; // shown in the expanded view
  highlights?: string[];
  category: ProjectCategory;
  tags: string[];
  repos: ProjectLink[];
  website?: ProjectLink;
  featured: boolean;
  contributors?: Contributor[];
  cover: ProjectCoverArt;
}

// Featured projects first, then the rest. The order here is the order on the page.
export const projects: Project[] = [
  {
    slug: 'vellora',
    title: 'Vellora',
    tagline: 'A full-stack luxury fashion store with an editorial, quiet-luxury storefront.',
    description:
      'Vellora is a Colombo house of cashmere, silk, tailoring and fine leather goods, built as a working full-stack store. It began as Clothify, an interview assignment, and was later redesigned into an editorial storefront and deployed on Vercel.',
    highlights: [
      'Shop with category tabs, a filter drawer, sorting, search and pagination',
      'JWT authentication, with a guest bag that merges into the account on sign-in',
      'Checkout with validated delivery details, order confirmation and order history',
      'Express and Mongoose REST API with role-based admin endpoints',
    ],
    category: 'Web',
    tags: ['React 19', 'Vite', 'Express', 'MongoDB', 'JWT', 'Vercel'],
    repos: [{ label: 'Source code', url: 'https://github.com/KalharaBatangala/vellora' }],
    website: { label: 'Visit the store', url: 'https://vellora-mu.vercel.app/' },
    featured: true,
    contributors: [contributors.Kalhara],
    cover: 'wordmark',
  },
  {
    slug: 'neurosight',
    title: 'NeuroSight',
    tagline: 'Brain tumour classification from MRI scans with a VGG16 CNN.',
    description:
      'NeuroSight is a medical imaging web application that helps radiologists analyse MRI scans. A VGG16 convolutional neural network classifies brain tumours, giving clinicians insight to inform the next steps of a treatment plan. Developed as a university project focused on medical imaging.',
    highlights: [
      'VGG16 convolutional neural network for tumour classification',
      'Web interface for analysing MRI scan images',
    ],
    category: 'AI & GPU',
    tags: ['Deep Learning', 'CNN', 'VGG16', 'Medical Imaging'],
    repos: [{ label: 'Source code', url: 'https://github.com/KalharaBatangala/NeuroSight' }],
    featured: true,
    cover: 'mri',
  },
  {
    slug: 'space-sync',
    title: 'Space Sync',
    tagline: 'Visualise 3D furniture in your own room with augmented reality.',
    description:
      'Space Sync is a cross-platform augmented reality app built with Unity and AR Foundation. It lets homeowners and interior designers place 3D furniture in their real space and see the layout before buying anything. Built as a Computer Engineering group project.',
    highlights: [
      'Real-time AR placement with plane detection on horizontal surfaces',
      'Touch gestures to rotate, scale and move furniture',
      'Models loaded from Google Cloud Storage, cached for offline use',
      'Runs on both iOS and Android',
    ],
    category: 'Mobile & XR',
    tags: ['Unity', 'AR Foundation', 'C#', 'Google Cloud'],
    repos: [{ label: 'Source code', url: 'https://github.com/sxsaa/Space-Sync' }],
    featured: true,
    contributors: [contributors.Kalhara, contributors.Kavindu, contributors.Niru],
    cover: 'ar',
  },
  {
    slug: 'tea-picker',
    title: 'Tea Picker',
    tagline: 'A cloud-synced mobile app for daily tea leaf collection and payments.',
    description:
      "A multi-user Flutter app for managing tea pickers' daily leaf collection and payment records. Records sync to the cloud through Firestore, with a local Sqflite store so they can still be kept offline in the field.",
    highlights: [
      'Multi-user access with Google Sign-In',
      'Offline-first local storage with Sqflite',
      'Cloud sync through Cloud Firestore',
    ],
    category: 'Mobile & XR',
    tags: ['Flutter', 'Firestore', 'Sqflite', 'Google Auth'],
    repos: [{ label: 'Source code', url: 'https://github.com/KalharaBatangala/Tea-Picker-App' }],
    website: {
      label: 'View demo',
      url: 'https://drive.google.com/file/d/16cAelbtBWRQBpPgE79_RgICX6GRLEmi0/view?usp=sharing',
    },
    featured: true,
    cover: 'tea',
  },
  {
    slug: 'cuda',
    title: 'CUDA Programming',
    tagline: 'Parallel computing on NVIDIA GPUs with CUDA C/C++.',
    description:
      'Experiments in GPU parallel programming with CUDA C/C++, exploring how work is split across threads, blocks and grids to run thousands of operations at once.',
    category: 'AI & GPU',
    tags: ['CUDA', 'C/C++', 'GPU', 'Parallel Computing'],
    repos: [{ label: 'Source code', url: 'https://github.com/KalharaBatangala/CUDA-Programming' }],
    featured: true,
    cover: 'cuda',
  },
  {
    slug: 'royal-coffee',
    title: 'Royal Coffee House',
    tagline: 'A concept coffee house in Kandy with an interactive drink builder.',
    description:
      "A concept site for an imaginary royal coffee house in Kandy, built around a real piece of history: in the 1870s Ceylon was one of the world's largest coffee producers, until leaf rust destroyed the estates and the island turned to tea. The illustrations and motion are hand-built with SVG and CSS, with no UI or animation libraries.",
    highlights: [
      'The Royal Atelier: a drink builder where an SVG glass fills layer by layer',
      'Recipe-driven cup illustrations shared by the menu, cart and quiz',
      'A working cart and a "Royal Decree" checkout sealed with a wax stamp',
      'A scroll-animated heritage timeline of coffee in Ceylon',
    ],
    category: 'Web',
    tags: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS'],
    repos: [{ label: 'Source code', url: 'https://github.com/KalharaBatangala/coffee-shop' }],
    website: { label: 'Visit the site', url: 'https://royal-coffee.netlify.app/' },
    featured: false,
    cover: 'coffee',
  },
  {
    slug: 'scoreme',
    title: 'ScoreMe',
    tagline: 'Final-year project: real-time sports scoring across mobile and web.',
    description:
      'My final-year Computer Engineering project: a system that manages and displays real-time scoring for sports events. It reduces manual scoring errors, gives spectators live updates and adds analytics for players and teams, through a mobile app and a companion web app.',
    highlights: [
      'Live score updates for spectators',
      'Player and team analytics',
      'Mobile app for scorers, web app for viewers',
    ],
    category: 'Mobile & XR',
    tags: ['Flutter', 'Web', 'Real-time', 'Sports'],
    repos: [
      { label: 'Mobile app', url: 'https://github.com/KalharaBatangala/ScoreMe-Mobile' },
      { label: 'Web app', url: 'https://github.com/KalharaBatangala/SMweb' },
    ],
    featured: false,
    contributors: [contributors.Kalhara, contributors.Ravindu, contributors.Rushika],
    cover: 'scoreboard',
  },
  {
    slug: 'realtime-chat',
    title: 'Real-Time Chat',
    tagline: 'Group chat with Firebase auth, containerised and deployed on AWS.',
    description:
      "A web chat application with user authentication and real-time group messaging. The first version paired FastAPI WebSockets with a Streamlit UI. When Streamlit's rerun model kept dropping connections, I rebuilt the front end in Flask with Socket.IO for stable messaging.",
    highlights: [
      'Email and password sign-in with Firebase Authentication',
      'Messages stored in Firestore with user ID and timestamp',
      'Dockerised and deployed to AWS Elastic Beanstalk',
    ],
    category: 'Web',
    tags: ['FastAPI', 'Flask', 'Socket.IO', 'Firebase', 'Docker', 'AWS'],
    repos: [{ label: 'Source code', url: 'https://github.com/KalharaBatangala/RealTime-chat-app' }],
    featured: false,
    cover: 'chat',
  },
  {
    slug: 'internship-management',
    title: 'Internship Management System',
    tagline: 'A DevOps-focused internship management platform hosted on Azure.',
    description:
      'A system for managing internships, built and hosted on Microsoft Azure during my internship at SLT-Mobitel, with a focus on DevOps practices for deploying and running it.',
    category: 'Cloud & DevOps',
    tags: ['DevOps', 'Azure', 'CI/CD'],
    repos: [
      { label: 'Source code', url: 'https://github.com/KalharaBatangala/internshipmanagementsystem' },
    ],
    featured: false,
    contributors: [contributors.Kalhara, contributors.Isuri],
    cover: 'pipeline',
  },
  {
    slug: 'bash-script-lab',
    title: 'Bash Script Lab',
    tagline: 'Bash automation for RHEL system administration, tested with Bats.',
    description:
      'A curated collection of Bash scripts for Linux system administration on Red Hat Enterprise Linux 9, covering automation, user management and file permissions. Each script is documented and tested with Bats.',
    highlights: [
      'File management, process control and network diagnostics',
      'User administration and permissions',
      'Backup, recovery, monitoring and logging',
      'Automated tests with Bats on GitHub Actions',
    ],
    category: 'Cloud & DevOps',
    tags: ['Bash', 'RHEL', 'Bats', 'System Administration'],
    repos: [{ label: 'Source code', url: 'https://github.com/KalharaBatangala/Bash-Script-Lab' }],
    featured: false,
    cover: 'terminal',
  },
  {
    slug: 'vitos-pizza',
    title: "Vito's Pizza House",
    tagline: 'A wood-fired pizzeria site with a pizza builder and online ordering.',
    description:
      'A restaurant website for small businesses, with online ordering built in React and Vite. Orders and contact messages are captured with Netlify Forms, so it needs no backend.',
    highlights: [
      'Full menu with search and vegetarian, vegan and spicy filters',
      'Pizza builder with sizes, extra toppings and live pricing',
      'Cart drawer, promo codes, and delivery or pickup checkout',
      'Order confirmation with an order tracker and receipt',
    ],
    category: 'Web',
    tags: ['React', 'Vite', 'Netlify'],
    repos: [{ label: 'Source code', url: 'https://github.com/KalharaBatangala/Pedro-s-Pizza' }],
    website: { label: 'Visit the site', url: 'https://vitospizzahut.netlify.app/' },
    featured: false,
    contributors: [contributors.Kalhara],
    cover: 'pizza',
  },
  {
    slug: 'inpath',
    title: 'inPATH',
    tagline: 'University exam management dashboards for lecturers and students.',
    description:
      'Dashboards for lecturers and students that bring university exam management into one place, from enrolment through to results.',
    highlights: ['Enrolment', 'Attendance tracking', 'Result management', 'Seat allocation'],
    category: 'Web',
    tags: ['Full-stack', 'Web Design', 'Dashboards'],
    repos: [{ label: 'Source code', url: 'https://github.com/sxsaa/inPATH' }],
    featured: false,
    contributors: [
      contributors.Kalhara,
      contributors.Yasindu,
      contributors.Kavindu,
      contributors.Niru,
      contributors.Thithira,
    ],
    cover: 'dashboard',
  },
  {
    slug: 'passkey-backend',
    title: 'Passkey Mobile Backend',
    tagline: 'A mobile app backend running on Azure cloud services.',
    description:
      "A backend for a mobile application, hosted on Microsoft Azure using the platform's managed cloud services.",
    category: 'Cloud & DevOps',
    tags: ['Azure', 'Backend', 'Cloud'],
    repos: [], // the old link (github.com/KalharaBatangala/passkey) returns 404
    featured: false,
    contributors: [contributors.Kalhara, contributors.Isuri],
    cover: 'fingerprint',
  },
  {
    slug: 'dog-classifier',
    title: 'Dog Classifier',
    tagline: 'Dog breed classification with a VGG16 CNN.',
    description:
      'An image classification model that identifies dog breeds, built on the VGG16 convolutional neural network architecture.',
    category: 'AI & GPU',
    tags: ['CNN', 'VGG16', 'Image Classification'],
    repos: [{ label: 'Source code', url: 'https://github.com/KalharaBatangala/Dog-Classifier-CNN' }],
    featured: false,
    cover: 'cnn',
  },
  {
    slug: 'unity-games',
    title: 'Unity Game Development',
    tagline: 'A 3D platformer and a 2D puzzle game built in Unity.',
    description:
      'A basic 3D platformer and a 2D puzzle game built in Unity, for hands-on experience with C# scripting, physics engines and asset integration.',
    category: 'Mobile & XR',
    tags: ['Unity', 'C#', 'Game Development'],
    repos: [], // the old link pointed at the pizza repo
    website: {
      label: 'Play on Unity',
      url: 'https://play.unity.com/en/games/cc5056c7-a74b-445b-a8bf-b583bc4b663e/kalharabuild',
    },
    featured: false,
    cover: 'platforms',
  },
];
