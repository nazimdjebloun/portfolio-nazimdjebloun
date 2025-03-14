import React from "react";
import { motion } from "framer-motion";
import ProjectList from "@/components/projects/components/projectList";

export default function Projects() {
  return (
    <div>
      <ul className="py-40 flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=""
        >
          <span className="ointer-events-none whitespace-pre-wrap bg-gradient-to-b from-foreground to-zinc-500/80 bg-clip-text text-center text-5xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Projects
          </span>
        </motion.div>
        <ProjectList />
      </ul>
    </div>
  );
}
