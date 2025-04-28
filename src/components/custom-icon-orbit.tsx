import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiExpress,
  SiNodedotjs,
  SiGithub,
  SiTailwindcss,
} from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { RiJavascriptFill } from "react-icons/ri";
import { div } from "framer-motion/client";

const techStack = [
  { Icon: SiNextdotjs, color: "text-black" },
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
          <div key={index}>
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
          </div>
        ))}
      </div>
    </div>
  );
}
