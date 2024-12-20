import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "TechGhar 🏠",
    description:
      "An innovative, user-friendly web application designed to enhance energy efficiency within your home.",
    tags: ["React", "Next.js", "PostgreSQL", "Tailwind", "Prisma"],
    imageUrl: "/website1.jpg",
    href: "https://github.com/mohithingorani/SmartHomeAuto",
  },
  {title : "WellNest",
  description: "An Online Therapy Platform for Mental Health",
  tags: ["ReactNative", "Node.js", "PostgreSQL"],
  imageUrl: "/wellnestimage.jpg",
  href: "https://github.com/mohithingorani/WellNest"}, 
  {
    title:"Realtime Chat App",
    description: "A  website with real-time messaging using WebSockets. Chat in real-time, and enjoy seamless communication.",
    tags: ["Typescript", "NextJS", "NextAuth", "WebSockets"],
    imageUrl: "/chatappimage.png",
    href: "https://github.com/mohithingorani/chat-app-frontend"
  }, {
    title:"Hex And Code",
    description: "An LMS for for collaborative learning.",
    tags: ["Next.js", "Tailwind"],
    imageUrl: "/hexandcodes.png",
    href: "https://github.com/mohithingorani/HexAndCode"
  }
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Recoil",
  "Next.js 14",
  "Tailwind CSS",
  "Material UI",
  "Node.js",
  "Express.js",
  "Hono Web Framework",
  "Serverless Backends",
  "Autogenerated Clients",
  "MongoDB",
  "PostgreSQL",
  "Prisma ORM",
  "Docker",
  "Cloudflare Deployment",
  "WebSockets",
  "MonoRepos",
  "Python",
  "C",
  "C++",
  "Git",
  "Bash",
  "LaTeX"
] as const;
