import { Description } from "@/components/description";
import CustomIconOrbit from "@/components/custom-icon-orbit";
import DownloadResume from "@/components/downloadResume";
import { CustomGradientText } from "@/components/custom-gradient-text";

export default function Home() {
  return (
    <div className="py-20 md:py-40 flex flex-col gap-10 md:gap-20">
      <div className="flex flex-col justify-center items-center gap-8 md:gap-11 px-4">
        <span className="lg:text-7xl md:text-5xl text-4xl pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-foreground to-zinc-500/80 bg-clip-text text-center font-semibold leading-tight text-transparent dark:from-white dark:to-slate-900/10">
          Nazim Djebloun
        </span>
        <CustomGradientText
          className="font-normal lg:text-7xl md:text-5xl text-3xl text-center"
          gradient="medium"
        >
          Full Stack Software Dev
        </CustomGradientText>
        <DownloadResume />
      </div>
      <CustomIconOrbit />
      <div className="w-full max-w-4xl mx-auto">
        <Description />
      </div>
    </div>
  );
}
