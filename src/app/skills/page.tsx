"use client";
import React from "react";
import dynamic from "next/dynamic";
import {
  skillCategories,
} from "@/components/skills/data/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SkillSection = dynamic(
  () =>
    import("@/components/skills/components/skillsection").then(
      (mod) => mod.SkillSection
    ),
  {
    ssr: false,
  }
);

export default function SkillsPage() {
  return (
    <div className="flex flex-col justify-center items-center content-center py-20 md:py-40 px-4">
      <div className="text-center mb-8 md:mb-12">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-foreground to-zinc-500/80 bg-clip-text text-center lg:text-8xl md:text-6xl text-4xl font-semibold leading-tight text-transparent dark:from-white dark:to-slate-900/10">
          Technical Expertise
        </span>

        <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto pt-6 text-center">
          A comprehensive overview of my skills and technologies I work with to
          create modern, scalable, and user-friendly applications
        </p>
      </div>

      <Tabs defaultValue={skillCategories[0]?.title} className="w-full max-w-4xl">
        <TabsList className="grid w-full grid-cols-3">
          {skillCategories.map((category) => (
            <TabsTrigger key={category.title} value={category.title}>
              {category.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {skillCategories.map((category) => (
          <TabsContent key={category.title} value={category.title}>
            <SkillSection category={category} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
