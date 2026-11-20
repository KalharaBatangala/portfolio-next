import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Poppins } from "next/font/google";
import Providers from "@/components/Providers";
import { themeScript } from "@/theme/themeScript";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

// Serif display face for the name and section headings (font-display)
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kalhara.vercel.app"),
  title: "Kalhara Profile | Home",
  description: "Kalhara Batangala - DevOps Engineer, Software Developer, System Administrator, and Machine Learning Engineer",
  // The falcon on a charcoal tile, so it stays visible on both light and dark browser tabs
  icons: {
    icon: [
      { url: "/icons/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/icons/apple-icon.png",
  }
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${poppins.variable} ${playfair.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
