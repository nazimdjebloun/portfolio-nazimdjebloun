
"use client";
import React from 'react'
import { Badge } from "@/components/ui/badge";


interface tools {
  tool: string;
  icon: React.ReactNode;
}

interface SkillDetail {
  name: string;
  description: string;
  tools: tools[];
}

export function SkillCard({ skill }: { skill: SkillDetail }) {
  return (
    <div className="p-4 rounded-lg hover:shadow-lg transition-all duration-300">
      <h4 className="text-lg font-semibold text-[hsl(var(--foreground))] mb-2">
        {skill.name}
      </h4>
      <p className="text-[hsl(var(--muted-foreground))] mb-3 text-sm">
        {skill.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {skill.tools.map((tool) => (
          <span
            key={tool.tool}
            // className="px-2 py-1 bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] rounded text-xs font-medium"
          >

            <Badge className="p-2 rounded-2xl border-accent-foreground gap-2 bg-accent text-card-fourground hover:bg-background">
              {tool.icon}
              {tool.tool}
            </Badge>

          </span>
        ))}
      </div>
    </div>
  );
}
