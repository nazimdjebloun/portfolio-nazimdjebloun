"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface GradientTextProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
  gradient?:
    | "primary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "purple"
    | "vibrant"
    | "soft"
    | "medium";
        
  weight?: "normal" | "medium" | "semibold" | "bold";
}

export  function CustomGradientText({
  className,
  children,
  as: Component = "span",
  gradient = "medium",
  weight = "normal",
  ...props
}: GradientTextProps) {
  // Premium SaaS-style gradients
  const gradients = {
    primary: "bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600",
    success: "bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600",
    info: "bg-gradient-to-r from-cyan-600 via-blue-400 to-sky-600",
    warning: "bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-600",
    danger: "bg-gradient-to-r from-red-600 via-rose-500 to-pink-600",
    purple: "bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-600",
    soft: "bg-gradient-to-r from-blue-400 via-purple-400 to-zinc-400",
    medium: "bg-gradient-to-r from-blue-500 via-purple-500 to-zinc-500",
    vibrant: "bg-gradient-to-r from-blue-600 via-purple-600 to-zinc-600",
  };

  // Font weights
  const weights = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  return (
    <Component
      className={cn("inline-block", weights[weight], className)}
      {...props}
    >
      <span
        className={cn(
          "text-background",
          "bg-clip-text text-transparent",
          "antialiased",
          gradients[gradient]
        )}
      >
        {children}
      </span>
    </Component>
  );
}
