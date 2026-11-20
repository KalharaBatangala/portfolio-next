import Link from 'next/link';
import BrandMark from '@/components/Common/BrandMark';
import { navItems, socialLinks } from '@/data/navigation';

const Footer = () => {
  return (
    <footer className="surface-brand bg-primary dark:bg-gray-950 text-white py-8 border-t border-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand/Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <Link
              href="/"
              prefetch={true}
              className="mb-4 hover:scale-110 active:scale-95 transition duration-200"
            >
              <BrandMark className="h-12 w-12 bg-gold-metallic" />
            </Link>
            <p className="text-text-tertiary text-sm text-center md:text-left">
              Pioneering intelligent solutions.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-secondary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    prefetch={true}
                    className="text-text-secondary hover:text-secondary hover:scale-110 active:scale-95 transition duration-200 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-secondary after:transition-all after:duration-200 hover:after:w-full"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-secondary mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-secondary hover:scale-110 active:scale-95 transition duration-200"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-8 pt-8 border-t border-secondary/60 text-center">
          <p className="text-text-tertiary text-sm">
            &copy; {new Date().getFullYear()} Kalhara Batangala. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
