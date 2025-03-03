

import { RiReactjsFill } from "react-icons/ri";
 import {AceternityLogo} from "@/pages/skills/data";
import { Code, Database, Globe, Server } from 'lucide-react';

import {
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiExpress,
  SiNodedotjs,
  SiGit,
  SiReactquery,
  SiGithub,
  SiTailwindcss,
  SiNextui,
  SiHtml5,
  SiShadcnui,
  SiCss3,
  SiReacthookform,
  SiAxios,
  SiPostman,
} from "react-icons/si";
import { FaMagic } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { CiDatabase } from "react-icons/ci";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";

import portfolio from "../../../public/images/projects/portfolio/potfolio.png";
import education from "../../../public/images/projects/portfolio/education.png";
import skills from "../../../public/images/projects/portfolio/skills.png";
import contact from "../../../public/images/projects/portfolio/contact.png";

import { Images } from "lucide-react";
// import add from "@/public/images/projects/todolist/add.png";
import add from "../../../public/images/projects/todolist/add.png";
import deleteTask from "../../../public//images/projects/todolist/deleteTask.png";
import view from "../../../public//images/projects/todolist/view.png";
import edit from "../../../public//images/projects/todolist/edit.png";
import SimpleToDoList from "../../../public//images/projects/todolist/SimpleToDoList.png";

const projects = [
  {
    images: [portfolio.src, education.src, skills.src, contact.src],

    title: "Portfolio",
    description:
      " A modern, responsive portfolio showcasing my journey, skills, and how to get in touch",

    details: {
      overview:
        "A portfolio where you will find insights about my educational background, technical skills, and how to reach me",
      features: [
        { name: "Home section" },
        { name: "About section with a brief intro and an education journey" },
        { name: "Skills section with an overview of the technologies i use" },
        { name: "Projects section" },
        { name: "Contact section" },
      ],
    },
    stack: [
      { name: "Next Js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <BiLogoTypescript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Aceternity UI", icon: <AceternityLogo /> },
      { name: "Shadcn", icon: <SiShadcnui /> },
      { name: "Magic UI", icon: <FaMagic /> },
      { name: "Hero Ui", icon: <SiNextui /> },
    ],
  },
  {
    images: [
      SimpleToDoList.src,
      add.src,
      edit.src,
      view.src,
      deleteTask.src,
      add.src,
    ],
    // images: [add.src, deleteTask.src, view.src, edit.src],
    title: "TO DO LIST",
    description: `A modern, responsive task management system with real-time updates and intuitive user interface
`,
    details: {
      // Users can create, view, edit, and delete tasks, as well as move them between different status columns as their progress changes.
      overview:
        "full-stack to-do list application designed to help users organize tasks across different stages of completion. The application features a clean, intuitive interface with three main columns: Scheduled, Ongoing, and Completed tasks. ",
      features: [
        { name: "Task Creation for the three section " },
        { name: "Task Detail View for the three section" },
        { name: "Task Editing for the three section" },
        { name: "Task Deletion for the three section" },
        { name: "Status Transitions for the three section" },
        { name: "Real-time Updates for the three section" },
      ],
    },
    stack: [
      { name: "React js", icon: <RiReactjsFill /> },
      { name: "JavaScript", icon: <RiJavascriptFill /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Node js", icon: <SiNodedotjs /> },
      { name: "Express js", icon: <SiExpress /> },
      { name: "AXIOS", icon: <SiAxios /> },
      { name: "React Query", icon: <SiReactquery /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Hero UI", icon: <SiNextui /> },
    ],
  },
];

export default projects;
