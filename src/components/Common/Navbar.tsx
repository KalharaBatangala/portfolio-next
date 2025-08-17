
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useContext } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { ThemeContext } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import logoImage from '/public/assets/falcon.webp'; // Static import for optimization


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Experience', href: '/experience' },
    { label: 'Contact', href: '/contact' },
  ];

  const linkVariants = {
    hover: { scale: 1.1, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  const isDark = theme === 'dark';

  return (
    <nav className="fixed top-0 left-0 w-full bg-primary dark:bg-gray-900 shadow-md z-50 font-poppins border-b border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div whileHover="hover" whileTap="tap" variants={linkVariants}>
            <Link href="/" prefetch={true}>
              <Image
                src={logoImage}
                alt="Kalhara Batangala Logo"
                width={48}
                height={48}
                sizes="(max-width: 640px) 40px, 48px" // Responsive sizing
                placeholder="blur" // Faster perceived load
                className="h-10 w-10 sm:h-12 sm:w-12 object-contain" // Consistent scaling
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 1 }}
            whileHover={{ opacity: 1 }} // Container-level animation
          >
            {navItems.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                prefetch={true} // Explicit prefetching
                className="text-white dark:text-gray-100 hover:text-secondary dark:hover:text-secondary transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-secondary after:transition-all after:duration-300 hover:after:w-full"
              >
                {label}
              </Link>
            ))}
            <DarkModeSwitch
              checked={isDark}
              onChange={toggleTheme}
              size={24}
              sunColor="#FF7300"
              moonColor="#D1D5DB"
              className="cursor-pointer"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            />
          </motion.div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white dark:text-gray-100 hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary rounded-md"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-primary dark:bg-gray-900 border-t border-gray-600 dark:border-gray-700"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                prefetch={true}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-white dark:text-gray-100 hover:text-secondary hover:bg-gray-700 dark:hover:bg-gray-600 rounded-md transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
            <div className="flex w-full px-3 py-2 items-center text-white dark:text-gray-100 hover:text-secondary hover:bg-gray-700 dark:hover:bg-gray-600 rounded-md transition-colors duration-300">
              <DarkModeSwitch
                checked={isDark}
                onChange={() => {
                  toggleTheme();
                  setIsOpen(false); // Close menu on toggle
                }}
                size={24}
                sunColor="#FF7300"
                moonColor="#D1D5DB"
                className="cursor-pointer mr-2"
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              />
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}