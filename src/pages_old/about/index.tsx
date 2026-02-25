import React from 'react'

import dynamic from "next/dynamic";

const TimelineDemo = dynamic(
  () =>
    import("../../components/about/components/education").then(
      (mod) => mod.TimelineDemo
    ),
  {
    ssr: true,
  }
);

export default function index() {
  return (
    <div className="py-40 ">
      {/* <Description /> */}
      <div className="flex justify-center flex-col">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-foreground to-zinc-500/80 bg-clip-text text-center text-5xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Education
        </span>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto pt-6">
          An overview of my education path
        </p>

        <div className="bg-background">
          <TimelineDemo />
        </div>
      </div>
    </div>
  );
}

