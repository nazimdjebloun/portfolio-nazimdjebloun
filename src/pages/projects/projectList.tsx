import React from 'react'
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ProjectCard } from "./projectCard";
import Image from "next/image";
import projects from "./data";



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
