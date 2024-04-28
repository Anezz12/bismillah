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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="skills"
      className="max-w-5xl mx-auto px-8  py-32"
    >
      <Title
        text="Skills 🖌️"
        className="flex flex-col items-center justify-center -rotate-6 cursor-pointer"
      />
      <HoverEffect items={skills} />
    </motion.div>
  );
}

export default Skills;
