

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
  SiSupabase,
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
const SHLADTY_IMAGES = {
  linktree: "/images/projects/shladty/shladty-linktree.png",
  menu: "/images/projects/shladty/shladty-menu.png",
  order: "/images/projects/shladty/shladty-order.png",
  checkout: "/images/projects/shladty/shladty-checkout.png",
  admin: "/images/projects/shladty/shladty-admin.png",
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

const DIGITKOM_LANDING_IMAGES = {
  main: "/images/projects/digitikomLandingPage/Screenshot 2026-02-25 at 21-22-47 DigitKom.png",
  sec: "/images/projects/digitikomLandingPage/Screenshot 2026-02-25 at 21-23-03 DigitKom.png",
  third:
    "/images/projects/digitikomLandingPage/Screenshot 2026-02-25 at 21-23-12 DigitKom.png",
  fourth:
    "/images/projects/digitikomLandingPage/Screenshot 2026-02-25 at 21-23-23 DigitKom.png",
  fifth:
    "/images/projects/digitikomLandingPage/Screenshot 2026-02-25 at 21-23-36 DigitKom.png",
  sixth:
    "/images/projects/digitikomLandingPage/Screenshot 2026-02-25 at 21-23-52 DigitKom.png",
};

const DIGITKOM_ADMIN_IMAGES = {
  img1: "/images/projects/digitkomAdmin/Screenshot 2026-02-25 at 21-27-50 DigitKom.png",
  img2: "/images/projects/digitkomAdmin/Screenshot 2026-02-25 at 21-27-58 DigitKom.png",
  img3: "/images/projects/digitkomAdmin/Screenshot 2026-02-25 at 21-28-19 DigitKom.png",
  img4: "/images/projects/digitkomAdmin/Screenshot 2026-02-25 at 21-28-26 DigitKom.png",
  img5: "/images/projects/digitkomAdmin/Screenshot 2026-02-25 at 21-28-43 DigitKom.png",
  img6: "/images/projects/digitkomAdmin/Screenshot 2026-02-25 at 21-28-50 DigitKom.png",
  img7: "/images/projects/digitkomAdmin/Screenshot 2026-02-25 at 21-28-58 DigitKom.png",
  img8: "/images/projects/digitkomAdmin/Screenshot 2026-02-25 at 21-29-19 DigitKom.png",
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
      DIGITKOM_ADMIN_IMAGES.img1,
      DIGITKOM_ADMIN_IMAGES.img2,
      DIGITKOM_ADMIN_IMAGES.img3,
      DIGITKOM_ADMIN_IMAGES.img4,
      DIGITKOM_ADMIN_IMAGES.img5,
      DIGITKOM_ADMIN_IMAGES.img6,
      DIGITKOM_ADMIN_IMAGES.img7,
      DIGITKOM_ADMIN_IMAGES.img8,
    ],
    title: "DigitKom Admin Platform",
    description:
      "A robust, real-time management platform for CRM, production workflows, and financial tracking.",
    details: {
      overview:
        "DigitKom Admin is an all-in-one agency management system. it handles the entire client lifecycle—from prospect tracking to production delivery and financial reporting—using a multi-role architecture.",
      features: [
        {
          name: "CRM Suite: Full funnel tracking with interaction logs and automated follow-up reminders",
        },
        {
          name: "Production Workflow: Multi-stage approval process (SMM & Design) with Asset Management integration",
        },
        {
          name: "Contract Management: Lifecycle tracking for SMM, Web, and Design services with deliverable quotas",
        },
        {
          name: "Financial Engine: Payment lifecycle tracking against contracts with fee and discount management",
        },
        {
          name: "Security: Role-based access control (RBAC) with secure identity management via Clerk",
        },
      ],
    },
    stack: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <BiLogoTypescript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Shadcn UI", icon: <SiShadcnui /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Clerk Auth" },
      { name: "React Hook Form" },
    ],
  },
  {
    images: [
      DIGITKOM_LANDING_IMAGES.main,
      DIGITKOM_LANDING_IMAGES.sec,
      DIGITKOM_LANDING_IMAGES.third,
      DIGITKOM_LANDING_IMAGES.fourth,
      DIGITKOM_LANDING_IMAGES.fifth,
      DIGITKOM_LANDING_IMAGES.sixth,
    ],
    title: "Digitkom",
    description:
      "A high-performance digital storefront for a premium marketing agency with sophisticated animations.",
    details: {
      overview:
        "Digitkom is a state-of-the-art web application serving as the primary touchpoint for a marketing agency. It features a custom design system with glassmorphism, seamless page transitions, and a conversion-focused ecosystem.",
      features: [
        {
          name: "Service Ecosystem: Dedicated deep-dive pages for SMM, Media Buying, Design, and Web Dev",
        },
        {
          name: "Modern UI/UX: Custom 'ModernHeader' with adaptive blur effects and full responsiveness",
        },
        {
          name: "Content Hub: Built-in blog system for sharing industry insights and updates",
        },
        {
          name: "Conversion Flows: Integrated contact and careers streams to drive business growth",
        },
        {
          name: "Type-Safe Infrastructure: Robust technical foundation using Next.js 15 and TypeScript",
        },
      ],
    },
    stack: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <BiLogoTypescript /> },
      { name: "Tailwind CSS 4", icon: <SiTailwindcss /> },
      { name: "Shadcn UI", icon: <SiShadcnui /> },
      { name: "Framer Motion" },
      { name: "Zod" },
      { name: "Resend" },
    ],
  },
  {
    images: [
      SHLADTY_IMAGES.linktree,
      SHLADTY_IMAGES.menu,
      SHLADTY_IMAGES.order,
      SHLADTY_IMAGES.checkout,
      SHLADTY_IMAGES.admin,
    ],
    title: "Shladty Ordering App",
    description:
      "A real-time ordering and restaurant management app built for a beachside restaurant. ",
    details: {
      overview:
        "A full-stack ordering system allowing customers to scan a QR code to browse the menu and place orders, with a live admin dashboard for real-time order tracking and workflow management.",
      features: [
        {
          name: "QR-code based ordering for seamless client interaction",
        },
        {
          name: "Live admin dashboard with real-time updates on incoming orders",
        },
        {
          name: "Category-based menu with item details and special notes ",
        },
        {
          name: "Order tracking from creation to fulfillment, including special instructions",
        },
        {
          name: "Secure user authentication using clerk Auth for admins",
        },
      ],
    },
    stack: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Shadcn UI", icon: <SiShadcnui /> },
      { name: "JavaScript", icon: <RiJavascriptFill /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "React Query", icon: <SiReactquery /> },
      { name: "Axios", icon: <SiAxios /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },

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
