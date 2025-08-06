// data/contributors.ts

export interface Contributor {
  name: string;
  avatar: string;
  profileUrl?: string;
}

// set of contributors
export const contributors = {
  kalhara: {
    name: 'Kalhara Batangala',
    avatar: '/assets/profile-pic.jpg',
    profileUrl: 'https://github.com/KalharaBatangala',
  },
  john: {
    name: 'Thithira Paranawithana',
    avatar: '/assets/thithira.jpg',
    profileUrl: 'https://github.com/Thithira-Paranawithana',
  },
  Isuri: {
    name: 'Isuri Navodya',
    avatar: '/assets/isuri.png',
    profileUrl: 'https://github.com/Thithira-Paranawithana',
  },
  Ravindu: {
    name: 'Ravindu Buwaneka',
    avatar: '/assets/ravindu.png',
    profileUrl: 'https://github.com/Thithira-Paranawithana',
  },
  Rushika: {
    name: 'Rushika David',
    avatar: '/assets/rushika.jpg',
    profileUrl: 'https://github.com/Thithira-Paranawithana',
  },
  
};
