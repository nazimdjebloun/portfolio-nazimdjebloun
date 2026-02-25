import React from "react";
import { experiences } from "@/components/experience/data/data";
import dynamic from "next/dynamic";

const ExperienceCard = dynamic(() =>
  import("@/components/experience-card").then((mod) => mod.ExperienceCard)
);

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background py-20 md:py-40">
      <div className="max-w-4xl mx-auto flex justify-center items-center flex-col px-4">
        <div className="flex content-center justify-center flex-col">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-foreground to-zinc-500/80 bg-clip-text text-center lg:text-8xl md:text-6xl text-4xl font-semibold leading-tight text-transparent dark:from-white dark:to-slate-900/10">
            Experience
          </span>

          <p className="text-center text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto py-5">
            My professional journey
          </p>
        </div>

        <div className="grid gap-6 w-full p-2">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </div>
    </div>
  );
}
