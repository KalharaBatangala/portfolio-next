// app/education/page.tsx
import { Metadata } from 'next';
import EducationContent from '@/components//Education/EducationContent';

export const metadata: Metadata = {
  title: 'Kalhara Profile | Education',
  description: 'My educational background and qualifications.',
};

export default function EducationPage() {
  return <EducationContent />;
}