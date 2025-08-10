"use client";

import NotFoundAnimation from "@/components/Common/NotFoundAnimation"; // ✅ make sure path is correct
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-center px-4">
      {/* Animation */}
      <div className="w-full max-w-md">
        <NotFoundAnimation />
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold mt-6 text-gray-800 dark:text-white">
        Oops! Page Not Found
      </h1>

      {/* Subtext */}
      <p className="mt-3 text-gray-600 dark:text-gray-300">
        Looks like you’ve wandered into the void. Let’s get you back home.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="mt-6 inline-block px-6 py-3 bg-secondary text-white rounded-lg shadow-lg hover:bg-orange-600 transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
}
