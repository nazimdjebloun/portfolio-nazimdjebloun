
"use client";
import React from 'react'
import { Tabs, Tab } from "@heroui/react";
import { SkillSection } from "@/pages/skills/skillsection";
import { skillCategories } from "@/pages/skills/data";

export default function Skills() {
  return (
    <div className="flex flex-col justify-center items-center content-center ">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[hsl(var(--foreground))] mb-4">
          Technical Expertise
        </h2>
        <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
          A comprehensive overview of my skills and technologies I work with to
          create modern, scalable, and user-friendly applications
        </p>
      </div>

      <div className="">
        <Tabs aria-label="Options" placement="top" className="w-[900px] ">
          {skillCategories.map((category) => (
            <Tab
              key={category.title}
              title={category.title}
              className="w-[900px] "
            >
              <SkillSection key={category.title} category={category} />
            </Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
