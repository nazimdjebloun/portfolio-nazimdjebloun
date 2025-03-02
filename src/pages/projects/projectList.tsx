import React from 'react'
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ProjectCard } from "./projectCard";
import Image from "next/image";
import projects from "./data";

// const projects = [
//   {
//     image: "/project-images/potfolio.png",
//     title: "My Awesome Project",
//     description:
//       "This is a brief description of my awesome project. It does X, Y, and Z. It solves problem A and B.", // Project description
//     stack: [{ name: "Next.js" }, { name: "React" }, { name: "Tailwind CSS" }],
//   },
//   {
//     image: "/project-images/potfolio.png",
//     title: "Portfolio Website",
//     description:
//       "A personal portfolio website built with Next.js and Tailwind CSS.",
//     stack: [{ name: "Next.js" }, { name: "React" }, { name: "Tailwind CSS" }],
//   },
// ];


export default function ProjectList() {
  return (
    <div>
      <div className="">
        <ul className="flex gap-20 p-10 flex-wrap">
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
        </ul>
      </div>
    </div>
  );
}
