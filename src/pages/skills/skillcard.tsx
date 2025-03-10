
"use client";
import React from 'react'


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
    <div className="border-1  dark:border-borderaccent p-4 rounded-2xl hover:shadow-lg  transition-all duration-300 ">
      <h4 className="text-sm md:text-xl font-semibold text-[hsl(var(--foreground))]   mb-2">
        {skill.name}
      </h4>
      <p className="text-sm text-[hsl(var(--muted-foreground))] mb-3">
        {skill.description}
      </p>
      <div className="flex md:flex-wrap gap-2 ">
        {skill.tools.map((tool) => (
          <div key={tool.tool} className="box-border">
            <div className=" border-1 dark:border-borderaccent  bg-accent group inline-block h-[fit] w-[40px] overflow-hidden rounded-full cursor-pointer shadow-lg hover:w-[180px] min-w-[fit]   hover:-[160px]transition-[width,transform,shadow] duration-300 hover:shadow-xl hover:scale-105">
              <div className=" flex  items-center h-full w-full rounded-full ">
                <div className=" rounded-full bg-secondary flex-shrink-0 flex items-center justify-center size-[40px] transition-transform duration-300 group-hover:scale-100">
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





