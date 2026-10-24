"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Skip the fade on the very first page load, as before
  const isFirstRender = useRef(true);
  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  return (
    <ThemeProvider>
      <Navbar />
      {/*
        Enter-only page transition. An exit animation (AnimatePresence mode="wait") can leave the
        new page stuck invisible in production, because the App Router swaps the page content
        inside the wrapper that is still fading out.
      */}
      <motion.div
        key={pathname} // Remounts on route change, so every page fades in and always ends visible
        initial={isFirstRender.current ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        {children}
      </motion.div>
      <Footer />
    </ThemeProvider>
  );
}
