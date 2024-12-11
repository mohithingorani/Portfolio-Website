"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import Typewriter from "typewriter-effect";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [strings] = useState([
    "Mohit Hingorani",
    "Full Stack Developer",
    "Graphics Designer"
  
  ]);
  const [currentString, setCurrentString] = useState(strings[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % strings.length;
        console.log(nextIndex);
        setCurrentString(strings[nextIndex]);
        console.log(strings[nextIndex]);
        console.log(currentString);
        return nextIndex; // Update currentIndex
      });
    }, 5000);
    return () => clearInterval(interval); // Clean up interval
  }, [strings]); // strings is constant, so it's safe to include
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 sm:mb-0 scroll-mt-[100rem] flex flex-col sm:flex-row items-center text-center sm:text-left   py-16"
    >
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
          className="relative"
        >
          <Image
            src="/mohit2.jpg"
            alt="Mohit Hingorani"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-24 w-24 sm:h-48 sm:w-48 rounded-full object-cover border-[0.35rem] border-gray-300 shadow-lg dark:border-gray-700"
          />
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </motion.div>
      </div>

      <div className="sm:px-20 md:px-10 mt-8 sm:mt-0 text-gray-800 dark:text-gray-100">
        <motion.h1
          className="mb-6 sm:mb-10  leading-tight max-w-[50rem] "
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className=" flex flex-col  md:text-3xl font-mono gap-4 font-semibold">
            <div className="flex items-center md:justify-start justify-center gap-4">
              <div>Hello, I'm </div>
              <Typewriter
                key={currentString} // Force re-render when currentString changes
                options={{
                  loop: false,
                }}
                onInit={(typewriter: any) => {
                  typewriter
                    .typeString(currentString)
                    .pauseFor(500)
                    .deleteAll()
                    .start();
                }}
              />
            </div>
            <div className="px-8  md:px-0">
              I'm a full-stack developer with extensive experience in web
              development. I enjoy building sites & applications. My primary
              focus is Next.js.
            </div>
          </div>
        </motion.h1>

        <motion.div
          className="flex flex-row items-center  justify-start md:gap-6   font-medium font-mono"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            href="#contact"
            className="bg-white p-4 text-gray-700 flex items-center gap-2 lg:px-8  text-sm lg:text-lg rounded-full focus:scale-[1.15] hover:scale-[1.05] hover:text-gray-900 active:shadow-md transition duration-300 shadow-md dark:bg-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 lg:px-8 text-sm lg:text-lg rounded-full focus:scale-[1.15] hover:scale-[1.05] hover:text-gray-900 active:shadow-md transition duration-300 shadow-md dark:bg-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
            href="/Resume.pdf"
            download
          >
            Download Resume{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>

          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-900 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.05] active:scale-105 transition duration-300 shadow-md dark:bg-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
            href="https://www.linkedin.com/in/mohit-hingorani-439265248/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-900 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.05] active:scale-105 transition duration-300 shadow-md dark:bg-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
            href="https://github.com/mohithingorani"
            target="_blank"
          >
            <FaGithub />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
