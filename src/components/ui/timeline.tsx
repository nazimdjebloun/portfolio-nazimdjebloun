// "use client";
// import {
//   useMotionValueEvent,
//   useScroll,
//   useTransform,
//   motion,
// } from "framer-motion";
// import React, { useEffect, useRef, useState } from "react";

// interface TimelineEntry {
//   title: string;
//   content: React.ReactNode;
// }

// export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [height, setHeight] = useState(0);

//   useEffect(() => {
//     if (ref.current) {
//       const rect = ref.current.getBoundingClientRect();
//       setHeight(rect.height);
//     }
//   }, [ref]);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 10%", "end 100%"],
//   });

//   const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
//   const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

//   return (
//     // full timpeline compoenent
//     <div
//       className=" w-full  font-sans md:px-10 flex justify-center items-center flex-col"
//       ref={containerRef}
//     >
//       <div className="">
//         <h2 className="text-2xl md:text-4xl mb-4 text-muted-foreground py-10 text-center">
//           An overview of my education path
//         </h2>

//       </div>

//       <div ref={ref} className="relative w-[70%] pb-20  flex flex-col gap-36">
//         {data.map((item, index) => (
//           <div key={index} className="flex flex-row  pt-10 md:pt-40 md:gap-10">
            
//             <div className="bg-red-400 sticky flex flex-col  md:flex-row z-10 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              
//               {/* timelinecircle */}
//               <div className=" h-10 absolute left-3 md:left-3 w-10 rounded-full bg-zinc-500 dark:bg-zinc-400 flex items-center justify-center">
//                 <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
//               </div>

//               {/* large screen timeline title or time  */}
//               <h3 className="hidden lg:block text-3xl md:pl-20 font-bold text-foreground ">
//                 {item.title} test 1
//               </h3>
//             </div>
//             {/* beginning of the card  */}
//             <div className="flex flex-col relative pl-20 pr-4 md:pl-4 w-full">

//               {/* small screnn title */}
//               <h3 className=" lg:hidden block text-2xl mb-4 text-left font-bold text-foreground">
//                 {item.title} test 2
//               </h3>
//               {item.content}{" "}
//             </div>
//           </div>
//         ))}
//         <div
//           style={{
//             height: height + "px",
//           }}
//           className=" absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-zinc-700 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
//         >
//           <motion.div
//             style={{
//               height: heightTransform,
//               opacity: opacityTransform,
//             }}
//             className="  absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };




















"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 5%", "end 100%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-backfround font-sans md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto  px-4 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-4xl text-muted-foreground py-10 text-center">
          An overview of my education path
        </h2>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20 space-y-28">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 ">
            <div className=" sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full ">
              <div className=" h-10 absolute left-3 md:left-3 w-10 rounded-full bg-zinc-500 dark:bg-zinc-400 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-accent  border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-2xl font-bold text-neutral-700 dark:text-neutral-400">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full space-y-12">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-700 dark:text-neutral-400">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
































// "use client";
// import {
//   useMotionValueEvent,
//   useScroll,
//   useTransform,
//   motion,
// } from "framer-motion";
// import React, { useEffect, useRef, useState } from "react";
// import { GridItem } from "@/pages/about/education-section";

// interface TimelineEntry {
//   title: string;
//   content: React.ReactNode;
// }


// export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [height, setHeight] = useState(0);

//   useEffect(() => {
//     if (ref.current) {
//       const rect = ref.current.getBoundingClientRect();
//       setHeight(rect.height);
//     }
//   }, [ref]);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 10%", "end 50%"],
//   });

//   const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
//   const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

//   return (
//     <div
//       className="w-full h-full bg-background font-sans md:px-10 relative"
//       ref={containerRef}
//     >
//       <div className="w-full max-w-5xl mx-auto mb-8">
//         <h2 className="text-lg md:text-4xl mb-4 text-foreground">
//           An overview of my education path
//         </h2>
//         {/* Commented section removed */}
//       </div>

//       <div ref={ref} className="relative w-full max-w-5xl mx-auto pb-20">
//         {data.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col md:flex-row pt-10 md:pt-28 md:gap-10"
//           >
//             <div className="sticky z-10 flex flex-col md:flex-row items-center top-20 self-start md:w-1/3">
//               <div className="h-10 absolute left-0 md:left-0 w-10 rounded-full bg-zinc-500 dark:bg-zinc-400 flex items-center justify-center">
//                 <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
//               </div>
//               <h3 className="hidden md:block text-xl md:pl-16 font-bold text-foreground">
//                 {item.title}
//               </h3>
//             </div>

            

//             <div className="relative pl-16 md:pl-0 pr-4 md:w-2/3">
//               <h3 className="md:hidden block text-xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
//                 {item.title}
//               </h3>
//               {item.content}
//             </div>
//           </div>
//         ))}

//         <div
//           style={{
//             height: height + "px",
//           }}
//           className="absolute left-0 md:left-0 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-zinc-700 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
//         >
//           <motion.div
//             style={{
//               height: heightTransform,
//               opacity: opacityTransform,
//             }}
//             className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// // Dummy data with correct format
// export const data = [
//   {
//     title: "Sep 2019 - Jul 2022",
//     content: (
//       <GridItem
//         title="Bachelor's degree : Marketing."
//         description="Marketing."
//         details="University of Algiers 3"
//       />
//     ),
//   },
//   {
//     title: "Sep 2022 - Jul 2024",
//     content: (
//       <GridItem
//         title="Master's degree : Service marketing."
//         description="Service marketing."
//         details="University of Algiers 3."
//       />
//     ),
//   },
//   {
//     title: "Sep 2022 - Present",
//     content: (
//       <GridItem
//         title="Computer science (TS) : Databases."
//         description="Databases."
//         details="Ibn Rochde."
//       />
//     ),
//   },
// ];

// export function TimelineDemo() {
//   return (
//     <div className="w-full bg-background h-full flex justify-center items-center">
//       <Timeline data={data} />
//     </div>
//   );
// }