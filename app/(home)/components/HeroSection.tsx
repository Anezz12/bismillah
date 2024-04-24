import Link from "next/link";
import React from "react";
import { MovingBorderBtn } from "./ui/moving-border";
import Title from "./Title";
import Image from "next/image";

function HeroSection() {
  return (
    <div className=" min-h-[60vh] flex flex-col-reverse gap-16 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl  lg:text-5xl font-bold flex flex-col space-y-6">
          Hallo Nice to meet you👋🏻
          <br />
          <span className="underline underline-offset-8 decoration-blue-500 ">
            {"My Name Harsena Argretya"}
          </span>
        </h1>
        <p className="md:max-w-lg text-xl text-gray-300">
          {
            "a self-taught Indonesian programmer. since 2022, I've been learning programming. Now a software engineering student with more web development experience."
          }
        </p>
      </div>
      <div className="relative">
        <div className="w-72 h-72 space-y-3 relative">
          <Image
            width={1000}
            height={100}
            src="/pp.jpeg"
            alt="Gambar"
            className="rounded-lg absolute object-cover"
          />
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <div className="absolute bottom-5 sm:-bottom-14 left-14 -sm:left-10">
          <MovingBorderBtn borderRadius=".05rem" className="p-3 font-semibold ">
            {" "}
            <Link href="mailto:harsenaargrtya1@gmail.com">
              {" "}
              <span>You Can Contact Me</span>
            </Link>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
