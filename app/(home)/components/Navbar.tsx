"use client";
import { useSectionInView } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

function Navbar({ className }: { className?: string }) {
  const socials = [
    {
      link: "https://www.linkedin.com/in/harsena-argretya/",
      label: "LinkedIn",
      Icon: FaLinkedin,
    },
    {
      link: "https://github.com/Anezz12",
      label: "Github",
      Icon: FaGithub,
    },
    {
      link: "https://instagram.com/argretya",
      label: "Instagram",
      Icon: FaInstagram,
    },
  ];
  const { ref } = useSectionInView("Home");
  return (
    <motion.nav
      ref={ref}
      id="home"
      className={cn(
        "py-20 flex justify-between items-center animate-move-down",
        className
      )}
    >
      <h1 className="text-2xl text-white font-bold underline underline-offset-8 decoration-blue-500 ">
        Harsena Argretya
      </h1>
      <div className="flex items-center gap-5 text-white">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}

export default Navbar;
