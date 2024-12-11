"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 mx-4 md:mx-0">
        Currently in my third year of pursuing a degree in{" "}
        <span className="font-medium">Computer Science Engineering</span> at
        Manipal University Jaipur, I have cultivated a strong passion for
        programming.{" "}
        <span className="italic">
          The aspect of programming I find most engaging
        </span>{" "}
        is solving complex problems. I <span className="underline">love</span>{" "}
        the challenge and satisfaction of crafting effective solutions. My core
        tech stack includes{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and PostgreSQL
        </span>
        . I am also proficient in TypeScript and Prisma and am continuously
        learning new technologies. I am actively seeking a{" "}
        <span className="font-medium">
          full-time software developer position
        </span>{" "}
        to apply and further develop my skills.
      </p>
      <p>
        <span className="italic">When I’m not coding</span>, I enjoy playing
        video games, watching movies, and playing chess. I also have a strong
        interest in <span className="font-medium">learning new things</span>.
        Additionally, I am a skilled{" "}
        <span className="font-medium">graphics designer</span> and serve as the{" "}
        <span className="font-medium">General Secretary</span> of the IEEE
        Computer Society at my college, where I drive innovation and manage
        various technical initiatives.
      </p>
    </motion.section>
  );
}
