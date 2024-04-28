"use client";
import React from "react";
import { motion } from "framer-motion";

function SectionDivider() {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className="bg-gray-200 my-24 h-16 w-1 rounded-full sm:block  dark:bg-opacity-20"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.125 }}
      ></motion.div>
    </div>
  );
}

export default SectionDivider;
