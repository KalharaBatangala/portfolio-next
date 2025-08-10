'use client';

import { useState } from 'react';
import Handwriting from '@/components/HandWriting';
import ContactAnimation from '@/components/ConnectAnimation';


// export const metadata = {
//   title: 'Kalhara Profile | Contact',
//   description: 'My project portfolio - contact page',
// };


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! Thank you for reaching out.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-900 px-6 py-20 sm:py-32 flex flex-col items-center">
      <Handwriting />

      {/* Side-by-side layout */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-24 w-full max-w-6xl px-32">

        
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 w-full max-w-lg bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition"
              placeholder="Your full name"
              style={{ fontSize: '1rem' }}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition"
              placeholder="your.email@example.com"
              style={{ fontSize: '1rem' }}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition resize-none"
              placeholder="Write your message here..."
              style={{ fontSize: '1rem' }}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-secondary text-white font-semibold rounded-md hover:bg-orange-600 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Animation */}
        <div className="flex-1 w-full flex items-center justify-center">
          <div className="w-full max-w-[400px]">
            <ContactAnimation />
          </div>
        </div>
      </div>
    </div>
  );
}
