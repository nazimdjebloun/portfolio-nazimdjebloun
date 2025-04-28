
"use client";
import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@heroui/react";
import { SkillSection } from "@/components/skills/components/skillsection";
import {
  SkillCategoryType,
  skillCategories,
} from "@/components/skills/data/data";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function Skills() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Set loading to false after initial render
    setLoading(false);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center content-center py-40 ">
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

          <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto pt-6">
            A comprehensive overview of my skills and technologies I work with
            to create modern, scalable, and user-friendly applications
          </p>
        </div>
      </motion.div>

      <div className="">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader2
              size={50}
              className="animate-spin text-4xl text-gray-500"
            />
          </div>
        ) : (
          <Tabs
            aria-label="Options"
            placement="top"
            className="w-[350px] md:w-[750px] lg:w-[900px] pb-3"
          >
            {skillCategories.map((category) => (
              <Tab
                key={category.title}
                title={category.title}
                className="w-[350px] md:w-[750px] lg:w-[900px] p-0 m-0"
              >
                <SkillSection key={category.title} category={category} />
              </Tab>
            ))}
          </Tabs>
        )}
      </div>
    </div>
  );
}
