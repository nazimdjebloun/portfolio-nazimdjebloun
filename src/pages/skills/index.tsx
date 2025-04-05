
"use client";
import React, { Suspense, useEffect, useState } from "react";
import { Tabs, Tab } from "@heroui/react";
import { SkillSection } from "@/components/skills/components/skillsection";
import { SkillCategoryType } from "@/components/skills/data/data";
// import { useTheme } from "next-themes";
import { skillCategories } from "@/components/skills/data/data";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

//import { Meteors } from "@/components/magicui/meteors";
//import { AuroraBackground } from "@/components/ui/aurora-background";
export default function Skills() {
  const [skillCategories, setSkillCategories] = useState<SkillCategoryType[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(true); // Loading state to track the loading status
  useEffect(() => {
    // This will be triggered only after the component has mounted
    const loadData = async () => {
      try {
        // Dynamically import the data only after the component mounts
        const res = await import("@/components/skills/data/data");
        setLoading(false); // Set loading to false once data is fetched
        // Set the skillCategories from the imported data
        setSkillCategories(res.skillCategories); // Assuming res.default holds the data
      } catch (error) {
        console.error("Error loading skill categories:", error);
        setLoading(false); // Set loading to false even if there is an error
      }
    };

    // Run loadData function after the page mounts
    loadData();
  }, []);

  // const theme = useTheme();
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

          <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto pt-6">
            A comprehensive overview of my skills and technologies I work with
            to create modern, scalable, and user-friendly applications
          </p>
        </div>
      </motion.div>

      <div className="">
        {/* <Tabs
          aria-label="Options"
          placement="top"
          className="w-[350px] md:w-[750px] lg:w-[900px]  pb-3"
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
        </Tabs> */}
        {loading ? (
          // Show the loader when loading is true
          <div className="flex justify-center items-center">
            <Loader2
              size={50}
              className="animate-spin text-4xl text-gray-500"
            />
          </div>
        ) : (
          // Show the Tabs only when the data is loaded
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

      {/* <div className="h-[200px] w-[350px] bg-red-200 p-3 grid grid-cols-[40px_40px_40px] gap-2">
        <div className="w-[40px] h-[40px] rounded-full hover:w-[170px] bg-black">
          text
        </div>
        <div className="w-[40px] h-[40px] rounded-full hover:w-[170px] bg-black">
          text
        </div>
        <div className="w-[40px] h-[40px] rounded-full hover:w-[170px] bg-black">
          text
        </div>
        <div className="w-[40px] h-[40px] rounded-full hover:w-[170px] bg-black">
          text
        </div>
        <div className="w-[40px] h-[40px] rounded-full hover:w-[170px] bg-black ">
          text
        </div>
        <div className="w-[40px] h-[40px] rounded-full  hover:w-[170px] bg-black ">
          text
        </div>
        <div className="w-[40px] h-[40px]  rounded-full hover:w-[170px] bg-black ">
          text
        </div>
        <div className="w-[40px] h-[40px] rounded-full hover:w-[170px] bg-black">
          text
        </div>
      </div> */}
    </div>
  );
}
