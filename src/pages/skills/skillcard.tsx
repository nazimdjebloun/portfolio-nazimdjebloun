
"use client";
import React from 'react'
// import { Badge } from "@/components/ui/badge";
// import { cn } from "@/lib/utils";
// import { StarBorder } from "@/components/ui/star-border";

interface tools {
  tool: string;
  icon: React.ReactNode;
}

interface SkillDetail {
  name: string;
  description: string;
  tools: tools[];
}
// bg - zinc - 700;
export function SkillCard({ skill }: { skill: SkillDetail }) {
  return (
    <div className="border-1 border-borderaccent p-4 rounded-2xl hover:shadow-lg  transition-all duration-300 ">
      <h4 className="text-lg font-semibold text-[hsl(var(--foreground))] mb-2">
        {skill.name}
      </h4>
      <p className="text-[hsl(var(--muted-foreground))] mb-3 text-sm">
        {skill.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {skill.tools.map((tool) => (
          <div key={tool.tool}>


            <div className="border-1 border-borderaccent  bg-accent group inline-block h-[fit] w-[40px] overflow-hidden rounded-full cursor-pointer shadow-lg hover:w-[180px] min-w-[fit] hover:-[160px]transition-[width,transform,shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:shadow-xl hover:scale-105">
              <div className=" flex items-center h-full w-full rounded-full ">
                <div className=" rounded-full bg-secondary flex-shrink-0 flex items-center justify-center w-[40px] h-[40px] transition-transform duration-300 group-hover:scale-100">
                  {tool.icon}
                </div>
                <span className="px-2 opacity-0 text-[15px] font-medium whitespace-nowrap transform translate-x-[-10px] transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0">
                  {tool.tool}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}





            // <div>
            //   <StarBorder className="">
            //     <div className="flex gap-2 p-0 m-0">
            //       <span className="text-sm">{tool.icon}</span>
            //       <span className="text-sm">{tool.tool}</span>
            //     </div>
            //   </StarBorder>
            // </div>;


            // <Badge className="group  p-2 rounded-2xl border-accent-foreground gap-2 bg-accent text-card-fourground hover:bg-background">
            //   <span className="text-sm">{tool.icon}</span>
            //   <span className="hidden group-hover:inline-block ">
            //     {tool.tool}
            //   </span>
            // </Badge>;


            // <div
            //   className={` group inline-block h-[40px] w-[40px] overflow-auto  rounded-full cursor-pointer shadow-xl  hover:w-fit`}
            // >
            //   <div className={`flex items-center h-full w-full rounded-full `}>
            //     <span className="rounded-full flex justify-center items-center w-[40px] h-[40px] ">
            //       {tool.icon}
            //     </span>
            //     <span className="px-3 hidden text-[15px] font-medium whitespace-nowrap  group-hover:inline-block">
            //       {tool.tool}
            //     </span>
            //   </div>
            // </div>;