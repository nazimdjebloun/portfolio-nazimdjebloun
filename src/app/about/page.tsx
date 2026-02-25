import React from 'react';
import dynamic from "next/dynamic";

const TimelineDemo = dynamic(
  () =>
    import("@/components/about/components/education").then(
      (mod) => mod.TimelineDemo
    ),
  {
    ssr: true,
  }
);

export default function AboutPage() {
  return (
    <div className="py-20 md:py-40">
      <div className="flex justify-center flex-col px-4">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-foreground to-zinc-500/80 bg-clip-text text-center text-5xl md:text-8xl font-semibold leading-tight text-transparent dark:from-white dark:to-slate-900/10">
          Education
        </span>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto pt-6 text-center">
          An overview of my education path
        </p>

        <div className="bg-background mt-10">
          <TimelineDemo />
        </div>
      </div>
    </div>
  );
}
