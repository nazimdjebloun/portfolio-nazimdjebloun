
"use client";
import React from 'react'
import { SkillCard } from "@/pages/skills/skillcard";


interface tools {
  tool: string;
  icon: React.ReactNode;
}

interface SkillDetail {
  name: string;
  description: string;
  tools: tools[];
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: SkillDetail[];
}


export function SkillSection({ category }: { category: SkillCategory }) {
  return (
    <div className="bg-secondary  rounded-xl p-6 ">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-fourground bg-opacity-10 rounded-lg">
          {category.icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-[hsl(var(--foreground))]">
            {category.title}
          </h3>
          <p className="text-sm text-[hsl(var(--muted-foreground))]">
            {category.description}
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-1 gap-4">
        {category.skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}