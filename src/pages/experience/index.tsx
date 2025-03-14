import React from 'react'
import { ExperienceCard } from "../../components/experience-card";
import { experiences } from "./data/data";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className="min-h-screen bg-background py-40 ">
      <div className="max-w-4xl mx-auto flex justify-center items-center flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 flex flex-col justify-center items-center"
        >
          <div className="flex content-center justify-center flex-col">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-foreground to-zinc-500/80 bg-clip-text text-center  lg:text-8xl  md:text-6xl text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
              Experience
            </span>

            <p className="text-center text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto py-5">
              My professional journey
            </p>
          </div>
        </motion.div>
        <div className="grid gap-6">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </div>
    </div>
  );
}
