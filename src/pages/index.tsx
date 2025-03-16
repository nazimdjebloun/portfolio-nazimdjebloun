import { AuroraText } from "@/components/magicui/aurora-text";
// import { useTheme } from "next-themes";
// import { MagicCard } from "@/components/magicui/magic-card";
// import { BackgroundBeams } from "@/components/ui/background-beams";
// import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { motion } from "framer-motion";
import { Description } from "@/components/description";
import CustomIconOrbit from "@/components/custom-icon-orbit";

// import DownloadResume from "@/components/downloadResume";

export default function Home() {
  return (
    <div className="py-40 flex flex-col gap-7">
      {/* <BackgroundBeams /> */}
      <div className="flex flex-col justify-center items-center gap-11">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center flex flex-col justify-center items-center"
        >
          <span className=" lg:text-7xl  md:text-5xl text-3xl pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-foreground to-zinc-500/80 bg-clip-text text-center  font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Nazim Djebloun
          </span>
        </motion.div>
        <AuroraText className="text-center pointer-events-none whitespace-pre-wrap lg:text-7xl md:text-5xl  text-3xl">
          Full Stack Software Dev
        </AuroraText>
      </div>
      <CustomIconOrbit />

      <div className="h-full">
        <Description />
      </div>
      {/* <DownloadResume /> */}
    </div>
  );
}

{
  /* <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden ">
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center flex flex-col justify-center items-center"
        ></motion.div>
        <OrbitingCircles radius={200}>
          <RiReactjsFill size={30} />
          <RiJavascriptFill size={30} />
          <SiNextdotjs size={30} />
          <SiTypescript size={30} />
          <SiNodedotjs size={30} />
          <SiExpress size={30} />
          <SiPostgresql size={30} />
        </OrbitingCircles>
        <OrbitingCircles radius={100} reverse speed={1}>
          <VscVscode size={30} />
          <SiTailwindcss size={30} />
          <CiDatabase size={30} />
          <SiGithub size={30} />
        </OrbitingCircles> 
      </div>*/
}
