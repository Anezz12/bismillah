"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "./ui/card-hover-effect";
import { motion } from "framer-motion";
import {
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { useSectionInView } from "@/lib/hooks";

function Skills() {
  const skills = [
    {
      text: "HTML",
      Icon: SiHtml5,
    },
    {
      text: "CSS",
      Icon: SiCss3,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },

    {
      text: "JavaScript",
      Icon: SiJavascript,
    },
    {
      text: "Node.js",
      Icon: SiNodedotjs,
    },
    {
      text: "Git",
      Icon: SiGit,
    },

    {
      text: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "MongoDb",
      Icon: SiMongodb,
    },
  ];
  const { ref } = useSectionInView("Skills");

  return (
    <div className="max-w-5xl mx-auto px-8  py-14 animate-move-down">
      <motion.div
        ref={ref}
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="skills"
      ></motion.div>
      <Title
        text="Skills 🖌️"
        className="flex flex-col items-center justify-center -rotate-6 cursor-pointer"
      />
      <HoverEffect items={skills} />
    </div>
  );
}

export default Skills;
