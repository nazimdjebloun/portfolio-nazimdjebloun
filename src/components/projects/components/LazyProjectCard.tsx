"use client";

import { Loader2 } from "lucide-react";
import dynamic from "next/dynamic";

// Lazy load ProjectCard with SSR disabled
const LazyProjectCard = dynamic(() => import("./projectCard"), {
  ssr: false,
//   loading: () => (
//     //    <Loader2 size={50} className=" animate-spin " />
//   ),
});

export default LazyProjectCard;
