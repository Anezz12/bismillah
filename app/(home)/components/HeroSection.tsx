import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <div className=" min-h-[60vh] flex items-center justify-between">
      <div className="space-y-10">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Hallo Nice to meet you!
          <br />{" "}
          <span className="underline underline-offset-8 decoration-blue-500">
            {"I'm Argretya."}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          {
            "Based in Yogyakarta Indonesia, I am currently studying at Amikom University Yogyakarta as an Informatics student."
          }
        </p>
        <Link
          href={"mailto:harsenaargrtya1@gmail.com"}
          className="inline-block"
        >
          <div>
            <h1 className="text-3xl font-bold hover:text-blue-500 transition-all">
              Contack Me{" "}
            </h1>
            <div className="w-full h-2 bg-blue-500"></div>
            <div className="w-full h-2 bg-green-500 translate-x-2"></div>
          </div>
        </Link>
      </div>
      <div>
        <div className="w-72 h-72 space-y-3 -rotate-[30deg]">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
