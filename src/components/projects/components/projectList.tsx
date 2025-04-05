"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "./projectCard";
import LazyProjectCard from "./LazyProjectCard";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";
// import projects from "../data/data";
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

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const res = await import("../data/data");
        setProjects(res.default);
      } catch (error) {
        console.error("Error loading projects:", error);
      }
    };
    loadProjects();
  }, []);

  return (
    <div>
      <div className="">
        {/* <ul className="flex gap-20 p-10 flex-wrap items-center justify-center ">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              images={project.images}
              title={project.title}
              description={project.description}
              details={project.details}
              stack={project.stack}
            />
          ))}
        </ul> */}
        <ul className="flex gap-20 p-10 flex-wrap items-center justify-center">
          {projects.map((project, index) => (
            <Suspense
              key={index}
              // fallback={
              // <div>
              //   <Loader2 size={50} className=" animate-spin " />
              // </div>
              // }
            >
              <LazyProjectCard
                images={project.images}
                title={project.title}
                description={project.description}
                details={project.details}
                stack={project.stack}
              />
            </Suspense>
          ))}
        </ul>
      </div>
    </div>
  );
}
