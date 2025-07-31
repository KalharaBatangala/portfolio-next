'use client';

import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { ThemeContext } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
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
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/falcon.png"
                alt="Kalhara Batangala Logo"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ label, href }) => (
              <motion.div key={label} whileHover="hover" whileTap="tap" variants={linkVariants}>
                <Link
                  href={href}
                  className="text-white dark:text-gray-100 hover:text-secondary dark:hover:text-secondary transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-secondary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {label}
                </Link>
              </motion.div>
            ))}

            {/* Dark Mode Toggle */}
            <DarkModeSwitch
              checked={isDark}
              onChange={toggleTheme}
              size={24}
              sunColor="#FF7300"
              moonColor="#D1D5DB"
              className="cursor-pointer"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            />
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white dark:text-gray-100 hover:text-secondary"
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
              <motion.div key={label} whileTap={{ scale: 0.95 }}>
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-white dark:text-gray-100 hover:text-secondary hover:bg-gray-700 dark:hover:bg-gray-600 rounded-md transition-colors duration-300"
                >
                  {label}
                </Link>
              </motion.div>
            ))}

            {/* Mobile Dark Mode Toggle */}
            <button
              onClick={() => {
                toggleTheme();
                toggleMenu();
              }}
              className="flex w-full px-3 py-2 items-center text-white dark:text-gray-100 hover:text-secondary hover:bg-gray-700 dark:hover:bg-gray-600 rounded-md transition-colors duration-300"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <DarkModeSwitch
                checked={isDark}
                onChange={toggleTheme}
                size={24}
                sunColor="#FF7300"
                moonColor="#D1D5DB"
                className="cursor-pointer mr-2"
              />
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
