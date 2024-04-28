"use client";
import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Title from "./Title";

function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 text-center py-28 pb-52 sm:mb-40 scroll-mt-12  flex-col items-center justify-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="flex flex-col items-center justify-center">
        <Title
          text="About Me🖌️"
          className="flex flex-col items-center justify-center -rotate-6 cursor-pointer py-10"
        />

        <p className="mb-3 max-w-[50rem]  leading-loose text-xl">
          I am a 4th semester student majoring in
          <span className="font-medium"> Informatics</span>, I decided to pursue
          my passion for programming. I studied
          <span className="font-medium"> full-stack web development</span>.
          <span className="italic"> My favorite part of programming</span> is
          the problem-solving aspect. I <span className="underline">love</span>{" "}
          the feeling of finally figuring out a solution to a problem. My core
          stack is{" "}
          <span className="font-medium">
            React, Next.js, Node.js, MYSQL and MongoDB
          </span>
          . I am also familiar with Javascript and I am starting to learn
          Typescript as well. I am always looking to learn new technologies. I
          am currently
          <span className="font-medium"> studying</span> to develop my
          potential.
        </p>

        <p className=" max-w-[45rem]  text-xl">
          <span className="italic">When Im not coding</span>, I enjoy playing
          video games, watching movies. I also enjoy{" "}
          <span className="font-medium">learning new things</span>. I am
          currently learning about <span className="font-medium">history</span>
          .Im also learning how to use LInux OS.
        </p>
      </div>
    </motion.section>
  );
}

export default About;
