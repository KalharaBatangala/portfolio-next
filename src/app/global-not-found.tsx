import './globals.css';
import { Poppins } from 'next/font/google';
import type { Metadata } from 'next';
import NotFoundPage from './not-found/page';
import { themeScript } from '@/theme/themeScript';

// Same font and theme script as app/layout.tsx, which this page bypasses
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kalhara.vercel.app'),
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function GlobalNotFound() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${poppins.variable} antialiased`}>

        <div>
            <NotFoundPage/>
        </div>
        
      </body>
    </html>
  );
}
