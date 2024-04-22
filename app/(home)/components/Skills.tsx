"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "./ui/card-hover-effect";
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

  return (
    <div className="max-w-5xl mx-auto px-8 ">
      <Title
        text="Skills"
        className="flex flex-col items-center justify-center -rotate-6 cursor-pointer"
      />
      <HoverEffect items={skills} />
    </div>
  );
}

export default Skills;
