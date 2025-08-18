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
}

// Static Imports for all thumbnails (convert to WebP via Squoosh, placed in /public/assets/)
import neurosight from '/public/assets/neurosight.webp';
import internship from '/public/assets/internship.webp';
import scoreme from '/public/assets/SM.webp';
import realtime from '/public/assets/realtime.webp';
import dogClassifier from '/public/assets/dog.webp';
import spaceSync from '/public/assets/space-sync.webp';
import pedrosPizza from '/public/assets/pizza.webp';
import passkey from '/public/assets/passkeys-header.webp';
import inpath from '/public/assets/inpath.webp';
import todoDotNet from '/public/assets/todo.webp';
import cuda from '/public/assets/rtx.webp';


// ******************** ENG THUMBNAILS ******************************* //

export const projects: Project[] = [
  {
    id: uuid(),
    isNew: true,
    title: "NeuroSight",
    description: "Brain tumor classification using VGG16 CNN. Developed for a university project focused on medical imaging.",
    github: ["https://github.com/KalharaBatangala/NeuroSight"],
    tags: ["Deep Learning", "CNN", "Medical Imaging"],
    image: neurosight, 
  },
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
  {
    id: uuid(),
    isNew: true,
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
  {
    id: uuid(),
    isNew: true,
    title: "Real-Time Chat App",
    description: "Built with FastAPI, Flask & Socket.IO for real-time communication.",
    github: ["https://github.com/KalharaBatangala/RealTime-chat-app"],
    tags: ["FastAPI", "Flask", "Socket.IO"],
    image: realtime,
  },
  {
    id: uuid(),
    isNew: false,
    title: "Dog Classifier",
    description: "Dog breed classification using CNN (VGG16).",
    github: ["https://github.com/KalharaBatangala/Dog-Classifier-CNN"],
    tags: ["CNN", "Image Classification"],
    image: dogClassifier,
  },
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
  {
    id: uuid(),
    isNew: false,
    title: "Pedro's Pizza",
    description: "Static frontend hosted on Amazon S3. Showcasing DevOps hosting skills.",
    github: ["https://github.com/KalharaBatangala/Pedro-s-Pizza"],
    tags: ["AWS", "Static Site", "DevOps"],
    image: pedrosPizza,
  },
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
  {
    id: uuid(),
    isNew: false,
    title: "Todo App (.NET)",
    description: "Simple .NET Todo app for framework practice.",
    github: ["https://github.com/KalharaBatangala/Todo-DotNet"],
    tags: [".NET", "Practice"],
    image: todoDotNet,
  },
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