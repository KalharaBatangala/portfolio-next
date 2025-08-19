
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';
import logoImage from '/public/assets/falcon.webp';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand/Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <Link
              href="/"
              prefetch={true}
              className="text-2xl font-bold text-secondary mb-4 hover:scale-110 active:scale-95 transition duration-200"
            >
              <Image
                src={logoImage}
                alt="Kalhara Batangala Logo"
                width={48}
                height={48}
                sizes="(max-width: 768px) 40px, 48px"
                placeholder="blur"
                className="w-auto h-12"
              />
            </Link>
            <p className="text-text-tertiary text-sm text-center md:text-left">
              Pioneering intelligent solutions.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-secondary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'Projects', href: '/projects' },
                { label: 'Experience', href: '/experience' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
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
              <a
                href="https://github.com/KalharaBatangala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-secondary hover:scale-110 active:scale-95 transition duration-200"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/kalhara-batangala-2bb635213/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-secondary hover:scale-110 active:scale-95 transition duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/KalharaBat27340"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-secondary hover:scale-110 active:scale-95 transition duration-200"
                aria-label="Twitter"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-8 pt-8 border-t border-secondary text-center">
          <p className="text-text-tertiary text-sm">
            &copy; 2025 Kalhara Batangala. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;