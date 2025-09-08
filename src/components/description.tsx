import React from "react";
// import { MorphingText } from "@/components/magicui/morphing-text";
// import { GradientText } from "@/components/ui/gradient-text";
import { CustomGradientText } from "@/components/custom-gradient-text";


export function Description() {
  return (
    <div className="h-10">
      {/* <div className=" px-10  pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-foreground to-zinc-500/80 bg-clip-text text-center md:text-2xl/8 sm:text-xl/8  text-transparent dark:from-white dark:to-slate-900/10"> */}
      <div className="px-10 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-foreground to-zinc-500 bg-clip-text text-center md:text-2xl/8 sm:text-xl/8 text-transparent dark:from-white dark:to-slate-400">
        I&apos;m a full-stack
        <CustomGradientText className="font-normal" gradient="medium">
          {" "}
          software{" "}
        </CustomGradientText>
        developer passionate about turning ideas into
        <CustomGradientText>
          {" "}
          engaging digital experiences. <br />
        </CustomGradientText>
        I believe in crafting applications that are not just
        <CustomGradientText> functional </CustomGradientText>
        but also
        <CustomGradientText> intuitive </CustomGradientText>
        and visually captivating. With a focus on creativity,
        <CustomGradientText> analytical thinking </CustomGradientText>
        and a relentless
        <CustomGradientText> pursuit of excellence. </CustomGradientText>I
        approach every project with
        {/* <GradientText colors={["foreground", "zinc-700", "purple-500"]}> */}
        <CustomGradientText> enthusiasm and dedication. </CustomGradientText>
        I&apos;m committed
        <CustomGradientText> to continuous learning </CustomGradientText>
        and staying at the forefront of
        <CustomGradientText> innovation. </CustomGradientText>
      </div>
    </div>
  );
}
      



