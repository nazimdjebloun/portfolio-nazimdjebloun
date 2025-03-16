"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// import {Link} from "@heroui/react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      navName: "Experience",
      navLink: "/experience",
    },
    {
      navName: "Contact",
      navLink: "/contact",
    },
  ];
  const pathname = usePathname();
  return (
    <nav>
      <div className=" rounded-2xl">
        <ul className="hidden md:flex  flex-row gap-3 text-md">
          {navBar.map((item) => {
            const isActive = pathname === item.navLink;
            return (
              <li key={item.navLink} className="relative group">
                <Link
                  href={item.navLink}
                  className={` relative transition-colors duration-300 
                ${
                  isActive
                    ? "text-foreground"
                    : "text-zinc-500 hover:text-foreground"
                }`}
                >
                  {item.navName}

                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-foreground transition-all duration-300 ease-in-out 
                  ${isActive ? "w-full" : "w-0 "}`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* button to open dynamique nav bar */}
        <div className="md:hidden flex items-center">
          <Button
            variant="outline"
            size="icon"
            className="flex rounded-xl  items-center justify-center content-center transition-all duration-300"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <div className="relative w-6 h-6 flex items-center justify-center">
              <X
                className={`absolute  transform transition-all duration-300 ease-in-out ${
                  isMenuOpen
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 rotate-90 scale-50"
                }`}
                aria-hidden="true"
              />
              <Menu
                className={`absolute  transform transition-all duration-300 ease-in-out ${
                  isMenuOpen
                    ? "opacity-0 -rotate-90 scale-50"
                    : "opacity-100 rotate-0 scale-100"
                }`}
                aria-hidden="true"
              />
            </div>
          </Button>
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className=" flex flex-col gap-2 py-2">
          {navBar.map((item, index) => {
            const isActive = pathname === item.navLink;
            return (
              <li
                key={item.navLink}
                className="relative group"
                style={{
                  transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                  opacity: isMenuOpen ? 1 : 0,
                  transition: `transform 0.3s ease-in-out ${
                    index * 0.05
                  }s, opacity 0.3s ease-in-out ${index * 0.05}s`,
                }}
              >
                <Link
                  href={item.navLink}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`block relative transition-colors duration-300  w-fit ${
                    isActive
                      ? "text-foreground"
                      : "text-zinc-500 hover:text-foreground"
                  }`}
                >
                  {item.navName}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-foreground transition-all duration-300 ease-in-out 
                  ${isActive ? "w-full" : "w-0 "}`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
