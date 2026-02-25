import { Description } from "@/components/description";
import CustomIconOrbit from "@/components/custom-icon-orbit";

import DownloadResume from "@/components/downloadResume";
import { CustomGradientText } from "@/components/custom-gradient-text";

export default function Home() {
  return (
    <div className="py-40 flex flex-col gap-7">
      <div className="flex flex-col justify-center items-center gap-11">
        <span className=" lg:text-7xl  md:text-5xl text-3xl pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-foreground to-zinc-500/80 bg-clip-text text-center  font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Nazim Djebloun
        </span>
        <CustomGradientText
          className="font-normal  lg:text-7xl md:text-5xl  text-3xl"
          gradient="medium"
        >
          Full Stack Software Dev
        </CustomGradientText>
        <DownloadResume />
      </div>
      <CustomIconOrbit />
      <div className="h-full">
        <Description />
      </div>
      \
    </div>
  );
}
