// src/data/publications.ts

export type PublicationType = 'journal' | 'conference';

export interface Publication {
  id: string;
  type: PublicationType;
  title: string;
  authors: string[];
  venue: string; // Journal name or conference proceedings
  year: number;
  month?: string;
  location?: string; // Conference location
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string; // e.g. '10.1109/XXXX.2026.0000000' (rendered as https://doi.org/<doi>)
  url?: string; // Publisher page, e.g. IEEE Xplore
  urlLabel?: string; // Link text for url, defaults to 'View Paper'
  status?: 'Accepted' | 'In Press'; // Omit once published
}

export interface PublicationCategory {
  type: PublicationType;
  title: string;
  emptyMessage: string;
}

// Section order on the Publications page
export const publicationCategories: PublicationCategory[] = [
  {
    type: 'journal',
    title: 'Journals',
    emptyMessage: 'No journal publications yet.',
  },
  {
    type: 'conference',
    title: 'Conference Papers',
    emptyMessage: 'No conference papers yet.',
  },
];

// Author names shown in bold within author lists
export const highlightedAuthors: string[] = ['Kalhara Batangala', 'K. Batangala'];

// Entries are sorted by year (newest first) within each section
export const publications: Publication[] = [
  {
    id: 'mercon-2026-brain-tumor-resnet',
    type: 'conference',
    title: 'Brain Tumor Classification using Deep Residual Networks',
    authors: ['Kalhara Batangala', 'Akarshani Amarasinghe', 'Udaya Wijenayake'],
    venue: '2026 Moratuwa Engineering Research Conference (MERCon)',
    year: 2026,
    month: 'Aug.',
    location: 'Moratuwa, Sri Lanka',
    pages: '109-114',
    doi: '10.1109/MERCon71835.2026.11691315',
    url: 'https://ieeexplore.ieee.org/document/11691315',
    urlLabel: 'IEEE Xplore',
  },
];
