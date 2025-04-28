import React from 'react'
import { TimelineDemo } from "../../components/about/components/education";
import { motion } from "framer-motion";

export default function index() {

  return (
    <div className="py-40 ">
      {/* <Description /> */}
      <div className="flex justify-center flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center flex flex-col justify-center items-center"
        >
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-foreground to-zinc-500/80 bg-clip-text text-center text-5xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Education
          </span>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto pt-6">
            An overview of my education path
          </p>
        </motion.div>
        <div className="bg-background">
          <TimelineDemo />
        </div>
      </div>
    </div>
  );
}

