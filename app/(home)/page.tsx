import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ActiveSectionContextProvider from "./components/ui/active-section-context";
import Projects from "./components/Projects";
import GetTouch from "./components/GetTouch";
import About from "./components/About";
import SectionDivider from "./components/SectionDivider";

function page() {
  return (
    <div className=" min-h-screen  bg-gray-900 overflow-hidden">
      <ActiveSectionContextProvider>
        <div className="bg-gray-900 dark:bg-grid-black/[0.02] relative">
          <div className=" max-w-7xl mx-auto p-5 ">
            <Header />
            <Navbar />
            <HeroSection />
            <SectionDivider />
            <About />
            <Skills />
            <Projects />
            <GetTouch />
            <Footer />
          </div>
        </div>
      </ActiveSectionContextProvider>
    </div>
  );
}

export default page;
