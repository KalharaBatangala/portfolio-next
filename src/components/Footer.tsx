"use client";

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';


const Footer = () => {
  const linkVariants = {
    hover: { scale: 1.1, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand/Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <motion.div whileHover="hover" whileTap="tap" variants={linkVariants}>
              <Link href="/" className="text-2xl font-bold text-secondary mb-4">
                <Image
                  src="/assets/falcon.png"
                  alt="Kalhara Batangala Logo"
                  width={48}
                  height={48}
                  className="w-auto h-12"
                />
              </Link>
            </motion.div>
            <p className="text-text-tertiary text-sm text-center md:text-left">
              Building the Future, One Project at a Time
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-secondary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'Projects', href: '/projects' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <motion.div whileHover="hover" whileTap="tap" variants={linkVariants}>
                    <Link
                      href={item.href}
                      className="text-text-secondary hover:text-secondary transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-secondary after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-secondary mb-4">Connect</h3>
            <div className="flex space-x-4">
              <motion.div whileHover="hover" whileTap="tap" variants={linkVariants}>
                <a
                  href="https://github.com/KalharaBatangala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-secondary transition-colors duration-300"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
              </motion.div>
              <motion.div whileHover="hover" whileTap="tap" variants={linkVariants}>
                <a
                  href="https://www.linkedin.com/in/kalhara-batangala-2bb635213/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-secondary transition-colors duration-300"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </motion.div>
              <motion.div whileHover="hover" whileTap="tap" variants={linkVariants}>
                <a
                  href="https://x.com/KalharaBat27340"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-secondary transition-colors duration-300"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-8 pt-8 border-t border-secondary text-center">
          <p className="text-text-tertiary text-sm">
            &copy; {new Date().getFullYear()} Kalhara Batangala. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
