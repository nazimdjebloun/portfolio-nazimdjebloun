// import { ReactNode } from "react";

// interface GradientTextProps {
//   children: ReactNode;
//   colors?: string[];
// }

// export function GradientText({
//   children,
//   colors
//  = ["from-blue-500", "via-purple-500", "to-purple-500"],
// }: GradientTextProps) {
//   // Create the gradient class string from the colors array
//   const gradientClass = colors
//     .map((color, index) => {
//       if (index === 0) return `from-${color}`;
//       if (index === colors.length - 1) return `to-${color}`;
//       return `via-${color}`;
//     })
//     .join(" ");

//   return (
//     <p
//       className={` font-bold bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent animate-gradient inline`}
//     >
//       {" "}
//       {children}{" "}
//     </p>
//   );
// }

import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  colors?: string[];
}

export function GradientText({
  children,
  // colors = ["foreground ", "zinc-300", "purple-500"],
  colors = ["foreground", "zinc-200", "purple-500"],
}: GradientTextProps) {
  // Create the gradient class string from the colors array
  const gradientClass = colors
    .map((color, index) => {
      if (index === 0) return `from-${color}`;
      if (index === colors.length - 1) return `to-${color}`;
      return `via-${color}`;
    })
    .join(" ");

  return (
    <span
      className={`font-bold bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent animate-gradient inline`}
    >
      {" "}
      {children}{" "}
    </span>
  );
}