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
    tags: ["AI", "CNN", "Medical"],
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
    contributors: [contributors.kalhara, contributors.Isuri],
  },
  {
    id: uuid(),
    isNew: false,
    title: "ScoreMe",
    description: "Final Year Project - Sports scoring system with mobile and web apps.",
    github: [
      "https://github.com/KalharaBatangala/ScoreMe-Mobile2",
      "https://github.com/KalharaBatangala/ScoreMe-WebApp",
    ],
    tags: ["Mobile", "Web", "Sports"],
    image: "/assets/SM.jpg",
    contributors: [contributors.kalhara, contributors.Ravindu, contributors.Rushika],
  },
  {
    id: uuid(),
    isNew: true,
    title: "Real-Time Chat App",
    description: "Built with FastAPI, Flask & Socket.IO for real-time communication.",
    github: ["https://github.com/KalharaBatangala/RealTime-chat-app"],
    tags: ["FastAPI", "Flask", "Socket.IO"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlXx1-A0bDSUqoCewGPNhVCN-IeXx7gPpqf_GiC2HJKR6UGBwOq9VzcVdt-w6nnbvXYgU&usqp=CAU",
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
    contributors: [contributors.Isuri]
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
  },

  {
    id: uuid(),
    isNew: true,
    title: "CUDA Programming",
    description: "Leveraged GPU parallel computing using CUDA.",
    github: ["https://github.com/KalharaBatangala/CUDA-Programming"],
    tags: ["GPU", "Parallel", "CUDA"],
    image: "/assets/rtx.png",
  },

  {
    id: uuid(),
    isNew: true,
    title: "CUDA Programming",
    description: "Leveraged GPU parallel computing using CUDA.",
    github: ["https://github.com/KalharaBatangala/CUDA-Programming"],
    tags: ["GPU", "Parallel", "CUDA"],
    image: "/assets/rtx.png",
  },

  {
    id: uuid(),
    isNew: true,
    title: "CUDA Programming",
    description: "Leveraged GPU parallel computing using CUDA.",
    github: ["https://github.com/KalharaBatangala/CUDA-Programming"],
    tags: ["GPU", "Parallel", "CUDA"],
    image: "/assets/rtx.png",
  },

  {
    id: uuid(),
    isNew: true,
    title: "CUDA Programming",
    description: "Leveraged GPU parallel computing using CUDA.",
    github: ["https://github.com/KalharaBatangala/CUDA-Programming"],
    tags: ["GPU", "Parallel", "CUDA"],
    image: "/assets/rtx.png",
  },
];
