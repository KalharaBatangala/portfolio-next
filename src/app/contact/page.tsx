// app/contact/page.tsx

import { Metadata } from 'next';
import ContactContent from '@/components/Contact/ContactContent';

export const metadata: Metadata = {
  title: 'Kalhara Profile | Contact',
  description: 'Get in touch with Kalhara Batangala, DevOps Engineer, System Administrator, and Deep Learning Enthusiast.',
};

export default function ContactPage() {
  return <ContactContent />;
}