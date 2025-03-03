
"use client";
import React from 'react'
import { Tabs, Tab } from "@heroui/react";
import { SkillSection } from "@/pages/skills/skillsection";
import { skillCategories } from "@/pages/skills/data";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

//import { Meteors } from "@/components/magicui/meteors";
//import { AuroraBackground } from "@/components/ui/aurora-background";
export default function Skills() {
  const theme = useTheme();
  return (
    <div className="flex flex-col justify-center items-center content-center py-40 ">
      {/* <Skillsbackground /> */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center flex flex-col justify-center items-center"
      >
        {" "}
        <div className="text-center mb-12">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-foreground to-zinc-500/80 bg-clip-text text-center  lg:text-8xl  md:text-6xl text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Technical Expertise
          </span>

          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            A comprehensive overview of my skills and technologies I work with
            to create modern, scalable, and user-friendly applications
          </p>
        </div>
      </motion.div>

      <div className="">
        <Tabs
          aria-label="Options"
          placement="top"
          className="w-[320px] md:w-[750px] lg:w-[900px] mx-auto overflow-"
        >
          {skillCategories.map((category) => (
            <Tab
              key={category.title}
              title={category.title}
              className="w-[320px] md:w-[750px] lg:w-[900px] mx-auto "
            >
              <SkillSection key={category.title} category={category} />
            </Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
