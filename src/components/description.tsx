import React from "react";
// import { MorphingText } from "@/components/magicui/morphing-text";
// import { GradientText } from "@/components/ui/gradient-text";
import { AuroraText } from "@/components/magicui/aurora-text";

// const texts = [
//   "Digital Experiences",
//   "Robust systems solutions",
//   "Inoovative ideas",
// ];

export function Description() {
  return (
    <div className="h-10">
      {/* <div className=" px-10  pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-foreground to-zinc-500/80 bg-clip-text text-center md:text-2xl/8 sm:text-xl/8  text-transparent dark:from-white dark:to-slate-900/10"> */}
      <div className="px-10 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-foreground to-zinc-500 bg-clip-text text-center md:text-2xl/8 sm:text-xl/8 text-transparent dark:from-white dark:to-slate-400">
        I&apos;m a full-stack
        <AuroraText > software </AuroraText>
        developer passionate about turning ideas into

        <AuroraText >
          {" "}
          engaging digital experiences. <br />
        </AuroraText>
        I believe in crafting applications that are not just
        <AuroraText > functional </AuroraText>
        but also
        <AuroraText > intuitive </AuroraText>
        and visually captivating. With a focus on creativity,
        <AuroraText > analytical thinking </AuroraText>
        and a relentless
        <AuroraText > pursuit of excellence. </AuroraText>I
        approach every project with
        {/* <GradientText colors={["foreground", "zinc-700", "purple-500"]}> */}
        <AuroraText >
          {" "}
          enthusiasm and dedication.{" "}
        </AuroraText>
        I&apos;m committed
        <AuroraText > to continuous learning </AuroraText>
        and staying at the forefront of
        <AuroraText > innovation. </AuroraText>
      </div>
    </div>
  );
}
      



      //  <MorphingText
      //     texts={texts}
      //     className=" dark:from-white dark:to-slate-900/10"
      //   /> 

//  <GradientText colors={["foreground", "zinc-700", "purple-500"]}>
//     innovation.
//   </GradientText>;
//    <h1 className="text-4xl font-bold bg-gradient-to-r from-color-1 via-color-3 to-color-5 bg-clip-text text-transparent animate-gradient">
//           Gradient Text
//     </h1> 
