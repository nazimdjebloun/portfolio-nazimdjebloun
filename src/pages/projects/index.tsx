import React from "react";
import dynamic from "next/dynamic";

const ProjectList = dynamic(
  () => import("@/components/projects/components/projectList")
);
export default function Projects() {
  return (
    <div>
      <div className="py-40 flex flex-col items-center justify-center ">
        <div className="flex flex-col justify-center ">
          <span className=" pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-foreground to-zinc-500/80 bg-clip-text text-center text-5xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Projects
          </span>
          <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto pt-6 text-center">
            A collection of key projects that showcase my development journey
            and hands-on experience with modern web technologies.
          </p>
        </div>
        <ProjectList />
      </div>
    </div>
  );
}
