import Header from "@/components/header";
import "./globals.css";
import localFont from "next/font/local"; // Using local font to avoid network issues
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import BackgroundOverlay from "@/components/BackgroundOverlay";

// Load Inter font locally
const inter = localFont({
  src: "../public/fonts/inter/Inter_28pt-Regular.ttf",
  variable: "--font-inter",
});

export const metadata = {
  title: "Mohit | Portfolio Website",
  description: "Mohit is a full stack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.variable} relative pt-28 sm:pt-36 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-gray-900 dark:text-gray-100 dark:text-opacity-90`}
      >
        {/* Background Overlay with bubbles */}
        <BackgroundOverlay />

        {/* Theme and Section Context Providers */}
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            {/* Header */}
            <Header />

            {/* Main Content */}
            {children}

            {/* Footer */}
            <Footer />

            {/* Notifications */}
            <Toaster position="top-right" />

            {/* Theme Switch */}
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
