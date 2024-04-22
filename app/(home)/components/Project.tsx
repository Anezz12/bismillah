import React from "react";
import {
  SiDotnet,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

function project() {
  const projects = [
    {
      title: "AmikomConnetc",
      tech: [SiNextdotjs, SiReact, SiMongodb, SiTailwindcss],
      link: "https://amikomconnect.vercel.app/",
      cover: "/profile-1.png",
      background: "bg-indigo-500",
    },
    {
      title: "Ps Rental",
      tech: [SiDotnet, SiMysql],
      link: "https://github.com/Anezz12/PsRental",
      cover: "/profile-2.png",
      background: "bg-blue-500",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects"
        className="flex flex-col items-center justify-center rotate-6 cursor-pointer"
      />
      <div className=" grid grid-cols-1 sm:grid-cols-2 pt-20">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index}>
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover imageUrl={project.cover}>
                  <h1>{project.title}</h1>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default project;