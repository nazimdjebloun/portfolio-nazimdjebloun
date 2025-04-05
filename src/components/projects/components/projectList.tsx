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
  const [loading, setLoading] = useState<boolean>(true); // Loading state to track the loading status
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const res = await import("../data/data");
        setProjects(res.default);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error loading projects:", error);
        setLoading(false); // Set loading to false even if there is an error
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
        <ul className="flex gap-20 p-10 flex-wrap items-center justify-center ">
          {loading ? (
            // Show the loader while loading is true
            <div className="flex justify-center items-center">
              <Loader2
                size={50}
                className="animate-spin text-4xl text-gray-500"
              />{" "}
            </div>
          ) : (
            // Map through projects once they are loaded
            <>
              {projects.map((project, index) => (
                <Suspense
                  key={index}
                  // fallback={
                  // You can have a different fallback UI for each LazyProjectCard
                  //   <div className="project-card-loading">
                  //     <Loader2 className="animate-spin text-gray-500" />
                  //   </div>
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
            </>
          )}

          {/* {projects.map((project, index) => (
            <Suspense key={index}>
              <LazyProjectCard
                images={project.images}
                title={project.title}
                description={project.description}
                details={project.details}
                stack={project.stack}
              />
            </Suspense>
          ))} */}
        </ul>
      </div>
    </div>
  );
}
