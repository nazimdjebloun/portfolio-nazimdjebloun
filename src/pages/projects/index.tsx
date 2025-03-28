import React from "react";
import { motion } from "framer-motion";
import ProjectList from "@/components/projects/components/projectList";

export default function Projects() {
  return (
    <div>
      <div className="py-40 flex flex-col items-center justify-center ">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center flex flex-col justify-center items-center"
          >
            <span className=" pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-foreground to-zinc-500/80 bg-clip-text text-center text-5xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
              Projects
            </span>
            <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto pt-6">
              A collection of key projects that showcase my development journey
              and hands-on experience with modern web technologies.
            </p>
          </motion.div>
        </div>
        <ProjectList />
      </div>
    </div>
  );
}
