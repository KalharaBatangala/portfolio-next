
// 'use client';

// import { useState } from 'react';
// import Swal from 'sweetalert2';
// import Handwriting from '@/components/HandWriting';
// import ContactAnimation from '@/components/ConnectAnimation';

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         Swal.fire({
//           icon: 'success',
//           title: 'Message Sent Successfully!',
//           text: 'Thank you for reaching out.',
//           confirmButtonColor: '#4CAF50',  // Green color
//           timer: 5000,
//           timerProgressBar: true,
//         });
//         setFormData({ name: '', email: '', message: '' });
//       } else {
//         Swal.fire({
//           icon: 'error',
//           title: 'Message Not Sent!',
//           text: 'Failed to send message. Please try again.',
//           confirmButtonColor: '#d33',
//         });
//       }
//     } catch (error) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Message Not Sent !',
//         text: 'Failed to send message. Please try again.',
//         confirmButtonColor: '#d33',
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-200 dark:bg-gray-900 px-4 sm:px-6 py-12 sm:py-20 lg:py-32 flex flex-col items-center">
//       <Handwriting />

//       {/* Side-by-side layout on desktop, stacked on mobile */}
//       <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-24 w-full max-w-6xl px-4 sm:px-8 lg:px-32">
//         {/* Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="flex-1 w-full max-w-lg bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8"
//         >
//           <div className="mb-4 sm:mb-6">
//             <label
//               htmlFor="name"
//               className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               required
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition text-sm sm:text-base"
//               placeholder="Your full name"
//             />
//           </div>

//           <div className="mb-4 sm:mb-6">
//             <label
//               htmlFor="email"
//               className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition text-sm sm:text-base"
//               placeholder="your.email@example.com"
//             />
//           </div>

//           <div className="mb-4 sm:mb-6">
//             <label
//               htmlFor="message"
//               className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
//             >
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               rows={5}
//               required
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition resize-none text-sm sm:text-base"
//               placeholder="Write your message here..."
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-2 sm:py-3 bg-secondary text-white font-semibold rounded-md hover:bg-orange-600 transition-colors duration-300 text-sm sm:text-base"
//           >
//             Send Message
//           </button>
//         </form>

//         {/* Animation */}
//         <div className="flex-1 w-full flex items-center justify-center">
//           <div className="w-full max-w-[300px] sm:max-w-[400px]">
//             <ContactAnimation />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


'use client';

import { useState } from 'react';
import Swal from 'sweetalert2';
import Handwriting from '@/components/HandWriting';
import ContactAnimation from '@/components/ConnectAnimation';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully!',
          text: 'Thank you for reaching out.',
          confirmButtonColor: '#4CAF50',  // Green color
          timer: 5000,
          timerProgressBar: true,
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Message Not Sent!',
          text: 'Failed to send message. Please try again.',
          confirmButtonColor: '#d33',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Message Not Sent !',
        text: 'Failed to send message. Please try again.',
        confirmButtonColor: '#d33',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-900 px-4 sm:px-6 py-12 sm:py-20 lg:py-32 flex flex-col items-center">
      {/* Wrapper for Handwriting to ensure responsiveness */}
      <div className="w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[1200px] flex justify-center">
        <Handwriting />
      </div>

      {/* Side-by-side layout on desktop, stacked on mobile */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-24 w-full max-w-6xl px-4 sm:px-8 lg:px-32">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 w-full max-w-lg bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8"
        >
          <div className="mb-4 sm:mb-6">
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
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition text-sm sm:text-base"
              placeholder="Your full name"
            />
          </div>

          <div className="mb-4 sm:mb-6">
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
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition text-sm sm:text-base"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="mb-4 sm:mb-6">
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
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition resize-none text-sm sm:text-base"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 sm:py-3 bg-secondary text-white font-semibold rounded-md hover:bg-orange-600 transition-colors duration-300 text-sm sm:text-base"
          >
            Send Message
          </button>
        </form>

        {/* Animation */}
        <div className="flex-1 w-full flex items-center justify-center">
          <div className="w-full max-w-[300px] sm:max-w-[400px]">
            <ContactAnimation />
          </div>
        </div>
      </div>

      {/* Inline CSS for Handwriting responsiveness */}
      <style jsx>{`
        .handwriting-wrapper svg {
          width: 100%;
          height: auto;
          max-width: 100%;
          display: block;
        }

        @media (max-width: 640px) {
          .handwriting-wrapper svg {
            transform: scale(0.8);
            transform-origin: center;
          }
        }

        @media (max-width: 400px) {
          .handwriting-wrapper svg {
            transform: scale(0.6);
          }
        }
      `}</style>
    </div>
  );
};