import React from 'react'
import ThemeSwitch from "@/components/themeSwitch";
import Navbar from "@/components/navbar";


export default function Header() {
    return (
      <div className=" fixed p-2 w-full flex items-center justify-center z-10 ">
        <div className="border w-[95%] h-fit p-4 flex flex-row justify-between items-baseline z-50 rounded-3xl  backdrop-blur-xl ">
          <div className="text-xl">PORTFOLIO</div>
          <Navbar />
          <ThemeSwitch />
        </div>
      </div>
    );
}
