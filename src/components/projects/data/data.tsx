

import { RiReactjsFill } from "react-icons/ri";
import { AceternityLogo } from "@/components/skills/data/data";
import {
  SiNextdotjs,
  SiPostgresql,
  SiExpress,
  SiNodedotjs,
  SiReactquery,
  SiTailwindcss,
  SiNextui,
  SiShadcnui,
  SiAxios,
} from "react-icons/si";
import { FaMagic } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";

// Optimize image imports using Next.js Image optimization
const PORTFOLIO_IMAGES = {
  portfolio: "/images/projects/portfolio/potfolio.png",
  education: "/images/projects/portfolio/education.png",
  skills: "/images/projects/portfolio/skills.png",
  contact: "/images/projects/portfolio/contact.png",
};

const PRODUCTION_IMAGES = {
  client: "/images/projects/productionapp/client.png",
  affichefiche: "/images/projects/productionapp/affiche-dossier.png",
  createdossier: "/images/projects/productionapp/create-dossier.png",
  dossier: "/images/projects/productionapp/dossier.png",
  pv: "/images/projects/productionapp/pv.png",
  createfiche: "/images/projects/productionapp/create-fiche.png",
};

const TODO_IMAGES = {
  add: "/images/projects/todolist/add.png",
  deleteTask: "/images/projects/todolist/deleteTask.png",
  view: "/images/projects/todolist/view.png",
  edit: "/images/projects/todolist/edit.png",
  simple: "/images/projects/todolist/SimpleToDoList.png",
};

// Type definitions for better type safety
interface Stack {
  name: string;
  icon?: React.ReactNode;
}

interface ProjectDetails {
  overview: string;
  features: { name: string }[];
}

interface Project {
  images: string[];
  title: string;
  description: string;
  details: ProjectDetails;
  stack: Stack[];
}

const projects: Project[] = [
  {
    images: [
      PRODUCTION_IMAGES.client,
      PRODUCTION_IMAGES.createfiche,
      PRODUCTION_IMAGES.dossier,
      PRODUCTION_IMAGES.pv,
      PRODUCTION_IMAGES.createfiche,
      PRODUCTION_IMAGES.affichefiche,
    ],
    title: "Production management app",
    description:
      "A Full stack production management app built for real use case",
    details: {
      overview:
        "A production management app with manufacturing workflow tracker designed to optimize workshop operations, from client orders to production delivery.",
      features: [
        {
          name: "Track client details, purchase orders, and order specifications",
        },
        {
          name: "Generate production sheets per workshop with status updates (In Progress/Completed)",
        },
        {
          name: "Monitor raw material usage with quantities/prices per production sheet",
        },
        {
          name: "Create inspection reports (PV) with reservations and approval statuses",
        },
        {
          name: "Track order progress (Processing/Finished) and production bottlenecks",
        },
      ],
    },
    stack: [
      { name: "Next Js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Shadcn", icon: <SiShadcnui /> },
      { name: "JavaScript", icon: <RiJavascriptFill /> },
      { name: "Node js", icon: <SiNodedotjs /> },
      { name: "Express js", icon: <SiExpress /> },
      { name: "AXIOS", icon: <SiAxios /> },
      { name: "React Query", icon: <SiReactquery /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
  {
    images: [
      PORTFOLIO_IMAGES.portfolio,
      PORTFOLIO_IMAGES.education,
      PORTFOLIO_IMAGES.skills,
      PORTFOLIO_IMAGES.contact,
    ],
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
      TODO_IMAGES.simple,
      TODO_IMAGES.add,
      TODO_IMAGES.edit,
      TODO_IMAGES.view,
      TODO_IMAGES.deleteTask,
    ],
    title: "TO DO LIST",
    description:
      "A modern, responsive task management system with real-time updates and intuitive user interface",
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
