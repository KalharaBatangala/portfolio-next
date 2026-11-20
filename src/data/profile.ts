// src/data/profile.ts
// Everything written on the home page. Edit text here; the layout follows.

export const profile = {
  name: { first: 'Kalhara', last: 'Batangala' },

  // Small line above the name
  affiliation: 'Probationary Lecturer · University of Ruhuna',

  // Shown under the name, separated by gold dividers
  roles: ['Engineer', 'Researcher'],

  tagline: 'Innovation. Inspiration. Excellence.',

  // Buttons in the hero
  actions: [
    { label: 'View Projects', href: '/projects' },
    { label: 'Get in Touch', href: '/contact' },
  ],

  // Credential strip along the bottom of the hero
  highlights: [
    { label: 'Academia', value: 'Lecturer, University of Ruhuna' },
    { label: 'Research', value: 'Published at MERCon 2026' },
    { label: 'Industry', value: 'DevOps & Cloud, SLT-Mobitel' },
  ],

  about: [
    'Kalhara Batangala is a Probationary Lecturer in the Department of Electrical and Information Engineering, Faculty of Engineering, University of Ruhuna, where he teaches Mobile Application Development, Computer Networks and Machine Learning. He holds a BSc Engineering (Hons) in Computer Engineering from the Faculty of Engineering, University of Sri Jayewardenepura.',
    'His research centres on deep learning for medical imaging. His final-year research combined deep learning for image classification with GPU parallel programming, and his work on brain tumour classification using deep residual networks was published in the proceedings of the 2026 Moratuwa Engineering Research Conference (MERCon). His wider interests include machine learning, optical networks and wireless communications.',
    'During his undergraduate studies, he interned in DevOps and cloud operations at SLT-Mobitel, building CI/CD pipelines, running containerised workloads on Docker and Kubernetes, and administering Linux and Windows servers across on-premises and cloud environments. That industry grounding shapes both his engineering and his teaching: systems that are reliable, secure and built to withstand failure.',
  ],

  researchInterests: ['Optical Networks', 'Wireless Communications', 'Machine Learning'],

  // The first resume is shown as the filled (primary) button
  resumes: [
    { label: 'Research Engineer', href: '/Kalhara_Batangala_CV.pdf', ariaLabel: 'Open Research Engineer resume' },
    { label: 'DevOps Engineer', href: '/Kalhara_SoftwareEngineer.pdf', ariaLabel: 'Open DevOps Engineer resume' },
  ],
};
