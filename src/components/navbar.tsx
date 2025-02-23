"use client";
import React from "react";
import Link from "next/link";
// import {Link} from "@heroui/react";


import { usePathname } from "next/navigation";
export default function Navbar() {

  const navBar = [
    {
      navName: "Home",
      navLink: "/",
    },
    {
      navName: "About",
      navLink: "/about",
    },
    {
      navName: "Skills",
      navLink: "/skills",
    },
    {
      navName: "Projects",
      navLink: "/projects",
    },
    {
      navName: "Contact",
      navLink: "/contact",
    },
  ];
  const pathname = usePathname();
  return (
    <div>
      <div className="rounded-2xl p-3  ">
        <ul className="flex flex-row gap-3 text-md">
          {navBar.map((item) => {
            const isActive = pathname === item.navLink; 
            return (
              <li key={item.navLink} className="relative group">
                <Link
                  href={item.navLink}
                  className={`relative transition-colors duration-300 
                ${
                  isActive
                    ? "text-foreground"
                    : "text-zinc-500 hover:text-foreground"
                }`}
                >
                  {item.navName}
     
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-foreground transition-all duration-300 ease-in-out 
                  ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
