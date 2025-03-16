// import React from 'react'
// import {
//   SiNextdotjs,
//   SiTypescript,
//   SiPostgresql,
//   SiExpress,
//   SiNodedotjs,
//   // SiGit,
//   // SiReactquery,
//   SiGithub,
//   SiTailwindcss,
//   // SiNextui,
//   // SiHtml5,
//   // SiShadcnui,
//   // SiCss3,
//   // SiReacthookform,
// } from "react-icons/si";
// import { RiReactjsFill } from "react-icons/ri";
// import { VscVscode } from "react-icons/vsc";
// import { CiDatabase } from "react-icons/ci";
// import { RiJavascriptFill } from "react-icons/ri";
// import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
// import { motion } from "framer-motion";
// import { Description } from "@/components/description";
// import { p } from 'framer-motion/client';

//  const technologies = [
//    { name: "Next.js", icon: SiNextdotjs, color: "hover:text-black" },
//    { name: "React", icon: RiReactjsFill, color: "hover:text-blue-500" },
//    { name: "TypeScript", icon: SiTypescript, color: "hover:text-blue-600" },
//    {
//      name: "JavaScript",
//      icon: RiJavascriptFill,
//      color: "hover:text-yellow-400",
//    },
//    { name: "Node.js", icon: SiNodedotjs, color: "hover:text-green-600" },
//    { name: "Express", icon: SiExpress, color: "hover:text-gray-700" },
//    { name: "PostgreSQL", icon: SiPostgresql, color: "hover:text-blue-700" },
//    { name: "Prisma", icon: CiDatabase, color: "hover:text-indigo-600" },
//    { name: "Tailwind CSS", icon: SiTailwindcss, color: "hover:text-cyan-500" },
//    { name: "VS Code", icon: VscVscode, color: "hover:text-blue-500" },
//    { name: "GitHub", icon: SiGithub, color: "hover:text-gray-800" },
//  ];

// export default function CustomIconOrbit() {
//   return (
//     <div className=" min-h-screen bg-background  flex items-center justify-center">
//       <div className="relative w-[400px] h-[400px]">
//         {/* Outer orbit */}
//         <div className="absolute inset-0 rounded-full border-2  animate-[spin_20s_linear_infinite]">
//           <div className="absolute -left-6 top-1/2 -translate-y-1/2">
//             <SiTypescript className="w-12 h-12 text-foreground" />
//           </div>
//           <div className="absolute top-1/2 -right-6 -translate-y-1/2">
//             <RiReactjsFill className="w-12 h-12 text-foreground" />
//           </div>
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
//             <SiNextdotjs className="w-12 h-12 text-foreground" />
//           </div>
//           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
//             <RiJavascriptFill className="w-12 h-12 text-foreground" />
//           </div>
//         </div>

//         {/* Middle orbit */}
//         <div className="absolute inset-[60px] rounded-full border-2  animate-[spin_15s_linear_infinite_reverse]">
//           <div className="absolute -left-5 top-1/2 -translate-y-1/2">
//             <SiNodedotjs className="w-10 h-10 text-foreground" />
//           </div>
//           <div className="absolute top-1/2 -right-5 -translate-y-1/2">
//             <SiExpress className="w-10 h-10 text-foreground" />
//           </div>
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
//             <SiPostgresql className="w-10 h-10 text-foreground" />
//           </div>
//           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
//             <CiDatabase className="w-10 h-10 text-foreground" />
//           </div>
//         </div>

//         {/* Inner orbit */}
//         <div className="absolute inset-[120px] rounded-full border-2  animate-[spin_10s_linear_infinite]">
//           <div className="absolute -left-4 top-1/2 -translate-y-1/2">
//             <VscVscode className="w-8 h-8 text-foreground" />
//           </div>
//           <div className="absolute top-1/2 -right-4 -translate-y-1/2">
//             <SiGithub className="w-8 h-8 text-foreground" />
//           </div>
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
//             <SiTailwindcss className="w-8 h-8 text-foreground" />
//           </div>
//         </div>

//         {/* Center circle */}
//         {/* <div className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center">
//           <div className="text-white/80 text-2xl font-semibold">Tech Stack</div>
//         </div> */}
//       </div>
//     </div>
//   );
// }

// import { motion } from "framer-motion";
// import { useState } from "react";

// const techStack = [
//   { name: "React", icon: "/icons/react.svg" },
//   { name: "Node.js", icon: "/icons/nodejs.svg" },
//   { name: "Tailwind", icon: "/icons/tailwind.svg" },
// ];

// export default function FloatingTechStack() {
//   const [hovered, setHovered] = useState<number | null>(null);

//   return (
//     <div className="relative flex justify-center items-center h-[400px]">
//       {techStack.map((tech, index) => (
//         <motion.img
//           key={tech.name}
//           src={tech.icon}
//           alt={tech.name}
//           className="w-16 h-16 absolute"
//           initial={{ y: 0 }}
//           animate={{
//             y: hovered === index ? -10 : 0,
//             scale: hovered === index ? 1.2 : 1,
//           }}
//           transition={{ type: "spring", stiffness: 300 }}
//           onMouseEnter={() => setHovered(index)}
//           onMouseLeave={() => setHovered(null)}
//         />
//       ))}
//     </div>
//   );
// }

import { motion } from "framer-motion";
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
// import { CiDatabase } from "react-icons/ci";
import { RiJavascriptFill } from "react-icons/ri";
import { div } from "framer-motion/client";

const techStack = [
  { Icon: SiNextdotjs, color: "text-gray-200" },
  { Icon: RiReactjsFill, color: "text-blue-500" },
  { Icon: SiTypescript, color: "text-blue-600" },
  { Icon: SiPostgresql, color: "text-blue-700" },
  { Icon: SiExpress, color: "text-gray-400" },
  { Icon: SiNodedotjs, color: "text-green-600" },
  { Icon: SiGithub, color: "text-gray-500" },
  { Icon: SiTailwindcss, color: "text-cyan-500" },
  { Icon: RiJavascriptFill, color: "text-yellow-400" },
  // { Icon: VscVscode, color: "text-blue-400" },
];

export default function CustomIconOrbit() {
  return (
    <div className=" h-[fit] flex justify-center items-center py-20 ">
      {/* <div className="flex flex-row flex-wrap justify-center gap-10  p-5 space-y-5"> */}
      <div className="flex flex-row flex-wrap justify-center gap-10 p-5 ">
        {techStack.map(({ Icon, color }, index) => (
          <div>
            <motion.div
              key={index}
              className={` text-5xl ${color} `}
              initial={{
                y: index % 2 === 0 ? -20 : 20,
                willChange: "transform",
              }}
              animate={{ y: index % 2 === 0 ? 20 : -20 }}
              transition={{
                duration: 1.5, // Fixed duration for better timing
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <Icon />
            </motion.div>
            {/* {index % 2 === 0 ? (
              <div
                key={index}
                className={` text-5xl ${color} drop-shadow-lg py-0`}
              >
                <Icon className="" />
              </div>
            ) : (
              <div
                key={index}
                className={` text-5xl ${color} drop-shadow-lg py-10 `}
              >
                <Icon className="" />
              </div>
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
}
