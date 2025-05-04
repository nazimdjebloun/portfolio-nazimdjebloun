"use client";
import React from "react";
// import LazyProjectCard from "./LazyProjectCard";
// import { Suspense } from "react";
import projects from "../data/data";
import dynamic from "next/dynamic";

interface Stack {
  name: string;
  icon?: React.ReactNode;
}

interface ProjectDetails {
  overview: string;
  features: Stack[];
}

interface Project {
  images: string[];
  title: string;
  description: string;
  details: ProjectDetails;
  stack: Stack[];
}

const LazyProjectCard = dynamic(() => import("./projectCard"), {
  ssr: false,
});

export default function ProjectList() {
  return (
    <div>
      <div className="">
        <ul className="flex gap-20 p-10 flex-wrap items-center justify-center">
          {/* {loading ? (
            <div className="flex justify-center items-center">
              <Loader2
                size={50}
                className="animate-spin text-4xl text-gray-500"
              />
            </div>
          ) : ()} */}
          <>
            {projects.map((project, index) => (
              // <Suspense
              //   key={index}
              //   fallback={
              //     <div className="w-[350px] h-[450px] rounded-lg bg-gray-100 dark:bg-gray-800 animate-pulse">
              //       <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-t-lg"></div>
              //       <div className="p-4 space-y-3">
              //         <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
              //         <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
              //         <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
              //       </div>
              //     </div>
              //   }
              // ></Suspense>
              <LazyProjectCard
                images={project.images}
                title={project.title}
                description={project.description}
                details={project.details}
                stack={project.stack}
              />
            ))}
          </>
        </ul>
      </div>
    </div>
  );
}
