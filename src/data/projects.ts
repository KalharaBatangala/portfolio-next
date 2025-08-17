import { v4 as uuid } from 'uuid';
import { contributors, Contributor } from './contributors';

export interface Project {
    id: string;
  title: string;
  description: string;
  github: string[];
  tags: string[];
  image: string; // URL or local path to image
  isNew: boolean;
  contributors?: Contributor[];
}

export const projects: Project[] = [
  {
    id: uuid(),
    isNew: true,
    title: "NeuroSight",
    description: "Brain tumor classification using VGG16 CNN. Developed for a university project focused on medical imaging.",
    github: ["https://github.com/KalharaBatangala/NeuroSight"],
    tags: ["Deep Learning", "CNN", "Medical Imaging"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJVu_08F4utt2wfdzvvDbW5oIBy5-Ovg9jrA&s",
    
  },
  {
    id: uuid(),
    isNew: false,
    title: "Internship Management System",
    description: "DevOps-focused system hosted on Azure during internship at SLT Mobitel.",
    github: ["https://github.com/KalharaBatangala/internshipmanagementsystem"],
    tags: ["DevOps", "Azure", "Internship"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
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
    image: "/assets/SM.webp",
    contributors: [contributors.Kalhara, contributors.Ravindu, contributors.Rushika],
  },
  {
    id: uuid(),
    isNew: true,
    title: "Real-Time Chat App",
    description: "Built with FastAPI, Flask & Socket.IO for real-time communication.",
    github: ["https://github.com/KalharaBatangala/RealTime-chat-app"],
    tags: ["FastAPI", "Flask", "Socket.IO"],
    image: "https://files.ably.io/ghost/prod/2023/01/build-a-realtime-chat-app-from-scratch--1-.png",
  },
  {
    id: uuid(),
    isNew: false,
    title: "Dog Classifier",
    description: "Dog breed classification using CNN (VGG16).",
    github: ["https://github.com/KalharaBatangala/Dog-Classifier-CNN"],
    tags: ["CNN", "Image Classification"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBQlV2BYVRYZcdLgjsV5voTC3YIW6ePOo35w&s",
  },
  {
    id: uuid(),
    isNew: true,
    title: "Space-Sync | Augmented Reality based Furniture App",
    description: "An augmented reality featured mobile app for interior design",
    github: ["https://github.com/sxsaa/Space-Sync"],
    tags: ["Augmented Reality", "Computer Engineering Project", "Unity"],
    image: "https://d3i2s57s2jetfw.cloudfront.net/wp-content/uploads/2025/08/b4efa85bffd4d66c5ea0ec7cfa0bf684-1200x0-c-default.jpg",
    contributors: [contributors.Kalhara, contributors.Kavindu, contributors.Niru]
  },
  {
    id: uuid(),
    isNew: false,
    title: "Pedro's Pizza",
    description: "Static frontend hosted on Amazon S3. Showcasing DevOps hosting skills.",
    github: ["https://github.com/KalharaBatangala/Pedro-s-Pizza"],
    tags: ["AWS", "Static Site", "DevOps"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
  },
  {
    id: uuid(),
    isNew: false,
    title: "Passkey Mobile Backend",
    description: "Mobile backend hosted on Azure using cloud platform services.",
    github: ["https://github.com/KalharaBatangala/passkey"],
    tags: ["Azure", "Backend"],
    image: "https://alloy-website.transforms.svdcdn.com/production/passkeys-header.png?w=2388&h=1963&auto=compress%2Cformat&fit=min&dm=1716914506&s=bf3987f105e2c063ee6950628922577b",
    contributors: [contributors.Kalhara, contributors.Isuri]
  },

  {
    id: uuid(),
    isNew: false,
    title: "InPath Documentory Tracking System",
    description: "University exam management with intuitive dashboards for both lecturers and students.",
    github: ["https://github.com/sxsaa/inPATH"],
    tags: ["Web Design", "Full-stack"],
    image: "/assets/inpath.png",
    contributors: [contributors.Kalhara, contributors.Yasindu, contributors.Kavindu, contributors.Niru, contributors.Thithira]
  },
  {
    id: uuid(),
    isNew: false,
    title: "Todo App (.NET)",
    description: "Simple .NET Todo app for framework practice.",
    github: ["https://github.com/KalharaBatangala/Todo-DotNet"],
    tags: [".NET", "Practice"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHy4-fMxXIdw_zHUYnm5DjuGDznZtUXYovpTD5wm126EUp22dHT_FPUywBB-Nz5ywTLig&usqp=CAU",
    
  },
  {
    id: uuid(),
    isNew: true,
    title: "CUDA Programming",
    description: "Leveraged GPU parallel computing using CUDA.",
    github: ["https://github.com/KalharaBatangala/CUDA-Programming"],
    tags: ["GPU", "Parallel", "CUDA"],
    image: "/assets/rtx.png",
  }
];
