import React from 'react'
import {
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiExpress,
  SiNodedotjs,
  // SiGit,
  // SiReactquery,
  SiGithub,
  SiTailwindcss,
  // SiNextui,
  // SiHtml5,
  // SiShadcnui,
  // SiCss3,
  // SiReacthookform,
} from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { CiDatabase } from "react-icons/ci";
import { RiJavascriptFill } from "react-icons/ri";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { motion } from "framer-motion";
import { Description } from "@/components/description";
import { p } from 'framer-motion/client';


 const technologies = [
   { name: "Next.js", icon: SiNextdotjs, color: "hover:text-black" },
   { name: "React", icon: RiReactjsFill, color: "hover:text-blue-500" },
   { name: "TypeScript", icon: SiTypescript, color: "hover:text-blue-600" },
   {
     name: "JavaScript",
     icon: RiJavascriptFill,
     color: "hover:text-yellow-400",
   },
   { name: "Node.js", icon: SiNodedotjs, color: "hover:text-green-600" },
   { name: "Express", icon: SiExpress, color: "hover:text-gray-700" },
   { name: "PostgreSQL", icon: SiPostgresql, color: "hover:text-blue-700" },
   { name: "Prisma", icon: CiDatabase, color: "hover:text-indigo-600" },
   { name: "Tailwind CSS", icon: SiTailwindcss, color: "hover:text-cyan-500" },
   { name: "VS Code", icon: VscVscode, color: "hover:text-blue-500" },
   { name: "GitHub", icon: SiGithub, color: "hover:text-gray-800" },
 ];

export default function CustomIconOrbit() {
  return (
    // <div className="bg-red-500 min-h-screen bg-background  flex items-center justify-center">
    //   <div className="relative w-[400px] h-[400px]">
    //     {/* Outer orbit */}
    //     <div className="absolute inset-0 rounded-full border-2  animate-[spin_20s_linear_infinite]">
    //       <div className="absolute -left-6 top-1/2 -translate-y-1/2">
    //         <SiTypescript className="w-12 h-12 text-foreground" />
    //       </div>
    //       <div className="absolute top-1/2 -right-6 -translate-y-1/2">
    //         <RiReactjsFill className="w-12 h-12 text-foreground" />
    //       </div>
    //       <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
    //         <SiNextdotjs className="w-12 h-12 text-foreground" />
    //       </div>
    //       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
    //         <RiJavascriptFill className="w-12 h-12 text-foreground" />
    //       </div>
    //     </div>

    //     {/* Middle orbit */}
    //     <div className="absolute inset-[60px] rounded-full border-2  animate-[spin_15s_linear_infinite_reverse]">
    //       <div className="absolute -left-5 top-1/2 -translate-y-1/2">
    //         <SiNodedotjs className="w-10 h-10 text-foreground" />
    //       </div>
    //       <div className="absolute top-1/2 -right-5 -translate-y-1/2">
    //         <SiExpress className="w-10 h-10 text-foreground" />
    //       </div>
    //       <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
    //         <SiPostgresql className="w-10 h-10 text-foreground" />
    //       </div>
    //       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
    //         <CiDatabase className="w-10 h-10 text-foreground" />
    //       </div>
    //     </div>

    //     {/* Inner orbit */}
    //     <div className="absolute inset-[120px] rounded-full border-2  animate-[spin_10s_linear_infinite]">
    //       <div className="absolute -left-4 top-1/2 -translate-y-1/2">
    //         <VscVscode className="w-8 h-8 text-foreground" />
    //       </div>
    //       <div className="absolute top-1/2 -right-4 -translate-y-1/2">
    //         <SiGithub className="w-8 h-8 text-foreground" />
    //       </div>
    //       <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
    //         <SiTailwindcss className="w-8 h-8 text-foreground" />
    //       </div>
    //     </div>

    //     {/* Center circle */}
    //     {/* <div className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center">
    //       <div className="text-white/80 text-2xl font-semibold">Tech Stack</div>
    //     </div> */}
    //   </div>
    // </div>
    <div className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Tech Stack
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-foreground">
            Technologies and tools I use to build modern web applications
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="flex flex-col items-center p-6 bg-accent rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
              >
                <Icon
                  className={`text-4xl text-foreground ${tech.color} transition-colors duration-300`}
                />
                <h3 className="mt-4 text-lg font-medium text-foreground">
                  {tech.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
