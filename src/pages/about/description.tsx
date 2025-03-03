import React from "react";
import { MorphingText } from "@/components/magicui/morphing-text";
import { GradientText } from "@/components/ui/gradient-text";

const texts = [
    "Digital Experiences",
    "Robust systems solutions",
    "Inoovative ideas",
];

export  function Description() {
    return (
      <div className="">
        <MorphingText
          texts={texts}
          className=" dark:from-white dark:to-slate-900/10"
        />
        {/* <h1 className="text-4xl font-bold bg-gradient-to-r from-color-1 via-color-3 to-color-5 bg-clip-text text-transparent animate-gradient">
                Gradient Text
              </h1> */}

        <div className=" py-40 px-10  pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-foreground to-zinc-500/80 bg-clip-text text-center md:text-2xl/8 sm:text-xl/8  text-transparent dark:from-white dark:to-slate-900/10">
          I'm a full-stack software developer passionate about turning ideas
          into
          <GradientText
          // colors={["foreground", "zinc-700", "purple-500"]}
          >
            engaging digital experiences. <br />
          </GradientText>
          I believe in crafting applications that are not just
          <GradientText
          // colors={["foreground", "zinc-700", "purple-500"]}
          >
            functional
          </GradientText>
          but also
          <GradientText
          // colors={["foreground", "zinc-700", "purple-500"]}
          >
            intuitive
          </GradientText>
          and visually captivating. With a focus on creativity,
          <GradientText
          // colors={["foreground", "zinc-700", "purple-500"]}
          >
            analytical thinking
          </GradientText>
          and a relentless
          <GradientText
          // colors={["foreground", "zinc-700", "purple-500"]}
          >
            pursuit of excellence.
          </GradientText>
          I approach every project with
          {/* <GradientText colors={["foreground", "zinc-700", "purple-500"]}> */}
          <GradientText
          // colors={["foreground", "zinc-700", "purple-500"]}
          >
            enthusiasm and dedication.
          </GradientText>
          I'm committed
          <GradientText
          // colors={["foreground", "zinc-700", "purple-500"]}
          >
            to continuous learning
          </GradientText>
          and staying at the forefront of
          <GradientText
          // colors={["foreground", "zinc-700", "purple-500"]}
          >
            innovation.
          </GradientText>
        </div>
      </div>
    );
}
