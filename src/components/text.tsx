"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";

interface LightGradientTextProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
  colorScheme?: "blue" | "purple" | "teal" | "amber" | "pink";
}

export function LightGradientText({
  className,
  children,
  as: Component = "span",
  colorScheme = "blue",
  ...props
}: LightGradientTextProps) {
  // Predefined gradient styles by color scheme
  const gradients = {
    blue: "bg-gradient-to-br from-blue-500 via-indigo-500 to-sky-400",
    purple: "bg-gradient-to-br from-purple-500 via-fuchsia-500 to-indigo-400",
    teal: "bg-gradient-to-br from-teal-500 via-emerald-500 to-cyan-400",
    amber: "bg-gradient-to-br from-amber-500 via-orange-500 to-yellow-400",
    pink: "bg-gradient-to-br from-pink-500 via-rose-500 to-red-400",
  };

  // Simple pulse animation instead of complex aurora effects
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    // Simple interval to toggle pulse state
    const interval = setInterval(() => {
      setIsPulsing((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Component
      className={cn(
        "relative inline-block font-bold transition-all duration-1000",
        className
      )}
      {...props}
    >
      <span
        className={cn(
          "absolute inset-0 bg-clip-text text-transparent",
          gradients[colorScheme],
          isPulsing ? "opacity-100" : "opacity-80",
          "transition-opacity duration-2000"
        )}
        aria-hidden="true"
      >
        {children}
      </span>
      <span className="opacity-0">{children}</span>
    </Component>
  );
}
