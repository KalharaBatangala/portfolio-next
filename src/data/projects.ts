// src/data/projects.ts
import { v4 as uuid } from 'uuid';
import { contributors, Contributor } from './contributors';
import { StaticImageData } from 'next/image';

export interface Project {
  id: string;
  title: string;
  description: string;
  github: string[];
  tags: string[];
  image: StaticImageData; // Updated to StaticImageData for static imports
  isNew: boolean;
  contributors?: Contributor[];
  website?: string;
}

// Static Imports for all thumbnails (convert to WebP via Squoosh, placed in /public/assets/)
import neurosight from '/public/assets/neurosight.webp';
import internship from '/public/assets/internship.webp';
import scoreme from '/public/assets/SM.webp';
import realtime from '/public/assets/realtime.webp';
import dogClassifier from '/public/assets/dog.webp';
import spaceSync from '/public/assets/space-sync.webp';
import unity from '/public/assets/unity.webp';
import passkey from '/public/assets/passkey-copy.webp';
import inpath from '/public/assets/inpath.webp';
import cuda from '/public/assets/rtx.webp';
import bash from '/public/assets/bash.webp';
import coffee from '/public/assets/Coffee.webp';


// ******************** ENG THUMBNAILS ******************************* //

export const projects: Project[] = [

  {
    id: uuid(),
    isNew: true,
    title: "Bash Scripting",
    description: "A curated collection of Bash scripts for system administration tasks, rigorously tested with Bats",
    github: ["https://github.com/KalharaBatangala/Bash-Script-Lab"],
    tags: ["Shell Scripting", "RHEL", "System Administration"],
    image: bash, 
  },
// *************************************************************************** //

  {
    id: uuid(),
    isNew: true,
    title: "NeuroSight",
    description: "Brain tumor classification using VGG16 CNN. Developed for a university project focused on medical imaging.",
    github: ["https://github.com/KalharaBatangala/NeuroSight"],
    tags: ["Deep Learning", "CNN", "Medical Imaging"],
    image: neurosight, 
  },
// *************************************************************************** //

  {
    id: uuid(),
    isNew: false,
    title: "Royal Cofféé House",
    description: "A modern coffee shop web application with an elegant UI and smooth ordering flow, built using Next.js.",
    github: ["https://github.com/KalharaBatangala/coffee-shop"],
    tags: ["Next.js", "Full-Stack Development", "E-Commerce"],
    image: coffee,
    website: 'https://royal-coffee.netlify.app/'
  },
// *************************************************************************** //

  {
    id: uuid(),
    isNew: false,
    title: "Internship Management System",
    description: "DevOps-focused system hosted on Azure during internship at SLT Mobitel.",
    github: ["https://github.com/KalharaBatangala/internshipmanagementsystem"],
    tags: ["DevOps", "Azure", "Internship"],
    image: internship,
    contributors: [contributors.Kalhara, contributors.Isuri],
  },
// *************************************************************************** //

  {
    id: uuid(),
    isNew: false,
    title: "ScoreMe | Final Year Project",
    description: "Final Year Project - Sports scoring system with mobile and web apps.",
    github: [
      "https://github.com/KalharaBatangala/ScoreMe-Mobile2",
      "https://github.com/KalharaBatangala/ScoreMe-WebApp",
    ],
    tags: ["Mobile", "Web", "Sports"],
    image: scoreme,
    contributors: [contributors.Kalhara, contributors.Ravindu, contributors.Rushika],
  },
// *************************************************************************** //

  {
    id: uuid(),
    isNew: false,
    title: "Dog Classifier",
    description: "Dog breed classification using CNN (VGG16).",
    github: ["https://github.com/KalharaBatangala/Dog-Classifier-CNN"],
    tags: ["CNN", "Image Classification"],
    image: dogClassifier,
  },
// *************************************************************************** //

  {
    id: uuid(),
    isNew: true,
    title: "Real-Time Chat App",
    description: "Built with FastAPI, Flask & Socket.IO for real-time communication.",
    github: ["https://github.com/KalharaBatangala/RealTime-chat-app"],
    tags: ["FastAPI", "Flask", "Socket.IO"],
    image: realtime,
  },
// *************************************************************************** //

  {
    id: uuid(),
    isNew: true,
    title: "Space-Sync | Augmented Reality based Furniture App",
    description: "An augmented reality featured mobile app for interior design",
    github: ["https://github.com/sxsaa/Space-Sync"],
    tags: ["Augmented Reality", "Computer Engineering Project", "Unity"],
    image: spaceSync,
    contributors: [contributors.Kalhara, contributors.Kavindu, contributors.Niru]
  },
// *************************************************************************** //
  {
    id: uuid(),
    isNew: false,
    title: "Passkey Mobile Backend",
    description: "Mobile backend hosted on Azure using cloud platform services.",
    github: ["https://github.com/KalharaBatangala/passkey"],
    tags: ["Azure", "Backend"],
    image: passkey,
    contributors: [contributors.Kalhara, contributors.Isuri]
  },
// *************************************************************************** //

  {
    id: uuid(),
    isNew: false,
    title: "3D Game Development with Unity",
    description: "Developed a basic 3D platformer and a 2D puzzle game using Unity, gaining hands-on experience with C# scripting, physics engines, and asset integration.",
    github: ["https://github.com/KalharaBatangala/Pedro-s-Pizza"],
    tags: ["Unity", "Game Development", "Real-time Rendering"],
    image: unity,
    website: 'https://play.unity.com/en/games/cc5056c7-a74b-445b-a8bf-b583bc4b663e/kalharabuild'
  },
// *************************************************************************** //
  {
    id: uuid(),
    isNew: false,
    title: "InPath Documentory Tracking System",
    description: "University exam management with intuitive dashboards for both lecturers and students.",
    github: ["https://github.com/sxsaa/inPATH"],
    tags: ["Web Design", "Full-stack"],
    image: inpath,
    contributors: [contributors.Kalhara, contributors.Yasindu, contributors.Kavindu, contributors.Niru, contributors.Thithira]
  },
// *************************************************************************** //

  
  {
    id: uuid(),
    isNew: true,
    title: "CUDA Programming",
    description: "Leveraged GPU for parallel computing using CUDA.",
    github: ["https://github.com/KalharaBatangala/CUDA-Programming"],
    tags: ["GPU", "Parallel", "CUDA"],
    image: cuda,
  }
];