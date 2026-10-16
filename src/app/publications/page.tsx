// app/publications/page.tsx
import { Metadata } from 'next';
import PublicationsContent from '@/components/Publications/PublicationsContent';

export const metadata: Metadata = {
  title: 'Kalhara Profile | Publications',
  description: 'Journal articles and conference papers by Kalhara Batangala.',
};

export default function PublicationsPage() {
  return <PublicationsContent />;
}
