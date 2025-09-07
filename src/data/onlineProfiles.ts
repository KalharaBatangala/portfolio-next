// data/onlineProfiles.ts

import { StaticImageData } from "next/image";


import unity from '/public/assets/unity-profile.webp';
import THM from '/public/assets/THM-profile.webp';
import HTB from '/public/assets/HTB-profile.webp';
import HRNK from '/public/assets/HRNK-profile.webp';
import MS from '/public/assets/MS-profile.webp';
import KodeKloud from '/public/assets/kodekloud-profile.webp';


export interface OnlineProfile {
  id: number;
  name: string;
  icon: StaticImageData; 
  link: string;
  tooltip?: string; 
}

export const onlineProfilesData: OnlineProfile[] = [
  {
    id: 1,
    name: 'TryHackMe',
    icon: THM, 
    link: 'https://tryhackme.com/p/kalharabatangala',
    tooltip: 'Cybersecurity learning and challenges',
  },
  {
    id: 2,
    name: 'HackTheBox',
    icon: HTB,
    link: 'https://app.hackthebox.com/profile/overview',
    tooltip: 'Penetration testing labs',
  },
  {
    id: 3,
    name: 'Unity',
    icon: unity,
    link: 'https://learn.unity.com/u/64b0cb81edbc2a5361ee3dbb?tab=profile',
    tooltip: 'Real Time Rendering',
  },
  {
    id: 4,
    name: 'HackerRank',
    icon: HRNK,
    link: 'https://www.hackerrank.com/profile/kalharabatangala',
    tooltip: 'Coding challenges and badges',
  },
  {
    id: 5,
    name: 'Microsoft Learn',
    icon: MS,
    link: 'https://learn.microsoft.com/en-us/users/drammkbatangala-6601/transcript/763j4f102l48k85?tab=tab-learning-paths',
    tooltip: 'Microsoft Learning',
  },
  {
    id: 6,
    name: 'Microsoft Learn',
    icon: KodeKloud,
    link: 'https://learn.kodekloud.com/user/certificate/7064aa56-761a-44c5-acbd-63d5fd0e384b',
    tooltip: 'Kodekloud',
  },
  
];