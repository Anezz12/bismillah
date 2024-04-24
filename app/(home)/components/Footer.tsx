import React from "react";

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Footer({ className }: { className?: string }) {
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
  return (
    <div className=" border-t border-[#999] mt-10 ">
      <nav
        className={cn(
          "py-10 flex justify-between items-center animate-move-down flex-col gap-6",
          className
        )}
      >
        <div className="flex items-center gap-5">
          {socials.map((social, index) => {
            const Icon = social.Icon;
            return (
              <Link href={social.link} key={index} aria-label={social.label}>
                <Icon className="w-5 h-5 hover:scale-125 transition-all" />
              </Link>
            );
          })}
        </div>
        <h1 className="text-xs font-bold">
          © 2024 Harsena Argretya. All rights reserved.
        </h1>
      </nav>
    </div>
  );
}

export default Footer;
