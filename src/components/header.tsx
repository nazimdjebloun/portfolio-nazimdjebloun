import React from 'react'
import ThemeSwitch from "@/components/themeSwitch";
import Navbar from "@/components/navbar";
// import { ShineBorder } from "@/components/magicui/shine-border";
// import { useTheme } from "next-themes";

export default function Header() {
  // const theme = useTheme();

  return (
    <div className=" fixed p-2 w-full flex items-center justify-center z-40 ">
      {/* <ShineBorder
          className="rounded-xl p-0   w-full sm:w-[600px] md:w-[750px] lg:w-[900px] mx-auto"
          // color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          color={theme.theme === "dark" ? "white" : "black"}
        ></ShineBorder> */}
      <div className=" w-[95%] h-fit p-4 flex flex-row justify-between items-center z-50 rounded-3xl  backdrop-blur-xl">
        <div className="text-xl">PORTFOLIO</div>
        <Navbar />
        <ThemeSwitch />
      </div>
    </div>
  );
}


