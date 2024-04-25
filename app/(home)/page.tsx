import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ActiveSectionContextProvider from "./components/ui/active-section-context";
import Projects from "./components/Projects";

function page() {
  return (
    <div className=" min-h-screen bg-gray-900 overflow-hidden">
      <ActiveSectionContextProvider>
        <div className="bg-gray-900 dark:bg-grid-black/[0.02] relative">
          <div className="max-w-7xl mx-auto p-5 ">
            <Header />
            <Navbar />
            <HeroSection />
          </div>
          <div className="h-10 xl:h-32 bg-gradient-to-t -bottom-5 left-0 xl:bottom-0 w-full"></div>
        </div>
        <div className="max-w-7xl mx-auto p-5  mt-5">
          <Skills />
        </div>
        <div className="max-w-3xl mx-auto p-5  mt-5">
          <Projects />
        </div>
        <div className="max-w-7xl mx-auto p-5  mt-20">
          <Footer />
        </div>
      </ActiveSectionContextProvider>
    </div>
  );
}

export default page;
