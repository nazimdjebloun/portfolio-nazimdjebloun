"use client";
// import React from "react";
// import { SkillCard } from "./skillcard";
// import { ShineBorder } from "@/components/ui/shine-border";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShineBorder } from "@/components/ui/shine-border";
import { SkillCard } from "./skillcard";
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
    <div className="relative w-full  overflow-hidden  rounded-xl ">
      <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
      <div className="bg-secondary/50 backdrop-blur-sm p-6 w-full h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-fourground bg-opacity-10 rounded-lg">
            {category.icon}
          </div>
          <div>
            <h3 className="text-sm md:text-xl font-bold text-foreground">
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
      <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
    </div>
  );
}
