import { AuroraText } from "@/components/magicui/aurora-text";

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
