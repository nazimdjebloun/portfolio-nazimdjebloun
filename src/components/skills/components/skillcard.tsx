
"use client";
import { div, span } from "framer-motion/client";
import React from "react";

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

      <div className="grid  grid-cols-[40px_40px_40px] gap-2 md:flex ">
        {skill.tools.map((tool: any, index: number) => (
          <div className="" key={tool.tool}>
            <div className=" inline box-border">
              <div className="overflow-hidden border-1 dark:border-borderaccent  bg-accent group  h-fit w-[40px]  rounded-full cursor-pointer shadow-lg hover:w-[170px]  transition-[width,transform,shadow] duration-300 hover:shadow-xl hover:scale-105">
                <div className=" flex  items-center h-full w-full rounded-full ">
                  <div className=" rounded-full bg-secondary flex-shrink-0 flex items-center justify-center size-[40px] transition-transform duration-300 group-hover:scale-100">
                    {tool.icon}
                  </div>
                  <span className="px-2 opacity-0 text-[12px] font-medium whitespace-nowrap transform translate-x-[-10px] transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0">
                    {tool.tool}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
}

{
  /* {(index + 1) % 3 === 0 && <div className="basis-full h-0">ff</div>} */
}

      {
        /* {(index + 1) % 3 === 0 && <div className="bg-red-300 h-5 w-full" />} */
      }

      {
        /* 
      <div className=" ">
        {skill.tools.map((tool: any, index: number) => (
          <span
            className="overflow-hidden border-1 dark:border-borderaccent  bg-accent group  h-fit w-[40px]  rounded-full cursor-pointer shadow-lg hover:w-[170px]  transition-[width,transform,shadow] duration-300 hover:shadow-xl hover:scale-105"
            key={tool.tool}
          >
            <span className=" rounded-full bg-secondary flex-shrink-0 flex items-center justify-center size-[40px] transition-transform duration-300 group-hover:scale-100">
              {tool.icon}
            </span>
            <span className="px-2 opacity-0 text-[12px] font-medium whitespace-nowrap transform translate-x-[-10px] transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0">
              {tool.tool}
            </span>
          </span>
        ))}
      </div> */
      }



          // (index + 1) % 3 === 0 ? (
          //   <>
          //     <div className="inline-flex bg-red-400" key={tool.tool}>
          //       <div className="box-border">
          //         <div className="overflow-hidden border-1 dark:border-borderaccent  bg-accent group  h-fit w-[40px]  rounded-full cursor-pointer shadow-lg hover:w-[170px]  transition-[width,transform,shadow] duration-300 hover:shadow-xl hover:scale-105">
          //           <div className=" flex  items-center h-full w-full rounded-full ">
          //             <div className=" rounded-full bg-secondary flex-shrink-0 flex items-center justify-center size-[40px] transition-transform duration-300 group-hover:scale-100">
          //               {tool.icon}
          //             </div>
          //             <span className="px-2 opacity-0 text-[12px] font-medium whitespace-nowrap transform translate-x-[-10px] transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0">
          //               {tool.tool}
          //             </span>
          //           </div>
          //         </div>
          //       </div>
          //     </div>
          //   </>
          // ) : (
          //   <>
          //     <br />
          //     <div className="inline-flex bg-red-400" key={tool.tool}>
          //       <div className="box-border">
          //         <div className="overflow-hidden border-1 dark:border-borderaccent  bg-accent group  h-fit w-[40px]  rounded-full cursor-pointer shadow-lg hover:w-[170px]  transition-[width,transform,shadow] duration-300 hover:shadow-xl hover:scale-105">
          //           <div className=" flex  items-center h-full w-full rounded-full ">
          //             <div className=" rounded-full bg-secondary flex-shrink-0 flex items-center justify-center size-[40px] transition-transform duration-300 group-hover:scale-100">
          //               {tool.icon}
          //             </div>
          //             <span className="px-2 opacity-0 text-[12px] font-medium whitespace-nowrap transform translate-x-[-10px] transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0">
          //               {tool.tool}
          //             </span>
          //           </div>
          //         </div>
          //       </div>
          //     </div>
          //   </>
          // )