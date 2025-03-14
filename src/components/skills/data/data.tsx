
import {
  Layout,
  Database,
  Terminal,
  Globe,
  Server,
  Wrench,
} from "lucide-react";
import { RiReactjsFill } from "react-icons/ri";
// import magicui from "public/magicui.svg"

import {
  SiNextdotjs,
  SiPostgresql,
  SiExpress,
  SiNodedotjs,
  SiGit,
  SiReactquery,
  SiGithub,
  SiTailwindcss,
  SiNextui,
  SiShadcnui,
  SiReacthookform,
  SiAxios,
  SiPostman,
} from "react-icons/si";
import { FaMagic } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { CiDatabase } from "react-icons/ci";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";

interface tools {
  tool: string;
  icon: React.ReactNode;
}

interface SkillDetail {
  name: string;
  description: string;
  tools: tools[];
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: SkillDetail[];
}

export const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-black dark:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const skillCategories: SkillCategory[] = [
  {
    // title: "Frontend Development",
    title: "Frontend",

    icon: <Layout className="w-6 h-6 text-[hsl(var(--primary))]" />,
    description: "Building responsive and interactive user interfaces",
    skills: [
      {
        name: "Modern React Development",
        description:
          "Proficient in React.js and Next.js with TypeScript and JavaScript, building scalable and performant applications",
        // tools: ["React.js", "Next.js", "TypeScript", "React Query", "Redux"],
        tools: [
          {
            tool: "React.js",
            icon: <RiReactjsFill size={22} />,
            // icon: null,
          },
          {
            tool: "Next.js",
            icon: <SiNextdotjs size={22} />,
            //   icon: null,
          },
          {
            tool: "JavaScript",
            icon: <RiJavascriptFill size={22} />,
            //    icon: null,
          },
          {
            tool: "TypeScript",
            icon: <BiLogoTypescript size={22} />,
            // icon: null,
          },
          {
            tool: "React Query",
            icon: <SiReactquery size={22} />,
            //   icon: null,
          },
          {
            tool: "React form hook",
            icon: <SiReacthookform size={22} />,
            //   icon: null,
          },
        ],
      },
      {
        name: "UI Development",
        description:
          "Creating beautiful and responsive interfaces with modern CSS frameworks and building reusable and accessible UI components",
        // tools: ["Tailwind CSS", "Shadcn/UI", "Hero UI", "CSS3", "HTML5"],
        tools: [
          // {
          //   tool: "HTML5",
          //   icon: <SiHtml5 size={18} />,
          //   // icon: null,
          // },
          // {
          //   tool: "CSS3",
          //   icon: <SiCss3 size={18} />,
          //   //   icon: null,
          // },
          {
            tool: "Tailwind CSS",
            icon: <SiTailwindcss size={18} />,
            //  icon: null,
          },
          {
            tool: "Hero UI ( Next UI )",
            icon: <SiNextui size={18} />,
            // icon: null,
          },
          {
            tool: "Shadcn/UI",
            icon: <SiShadcnui size={18} />,
            //  icon: null,
          },
          {
            tool: "Magic UI",
            icon: <FaMagic size={18} />,
            //  icon: null,
          },
          {
            tool: "aceternity UI",
            icon: <AceternityLogo />,
            // icon: null,
          },
        ],
      },
    ],
  },
  {
    // title: "Backend & Database",
    // title: "Backend Development",
    title: "Backend",

    icon: <Database className="w-6 h-6 text-[hsl(var(--primary))]" />,
    description: "Designing and implementing server-side solutions",
    skills: [
      {
        name: "Database Management",
        description:
          "Experienced in database design, optimization, and administration",
        // tools: ["PostgreSQL", "pgAdmin", "SQL", "Database Design"],
        tools: [
          {
            tool: "PostgreSQL ",
            // icon: null,
            icon: <SiPostgresql size={18} />,
          },
          {
            tool: "pgAdmin ",
            //  icon: null,

            icon: <SiPostgresql size={18} />,
          },
          {
            tool: "SQL",
            //icon: null,
            icon: <Terminal size={18} />,
          },
          {
            tool: "Database Design",
            // icon: null,
            icon: <CiDatabase size={18} />,
          },
        ],
      },
      {
        name: "API Development",
        description: "Building robust and scalable RESTful APIs",
        // tools: ["REST APIs", "Node.js", "Express", "API Design"],
        tools: [
          {
            tool: "Node.js",
            // icon: null,
            icon: <SiNodedotjs size={18} />,
          },
          {
            tool: "Express.js",
            // icon: null,
            icon: <SiExpress size={18} />,
          },
          {
            tool: "AXIOS",
            //   icon: null,
            icon: <SiAxios size={18} />,
          },
          {
            tool: "REST APIs",
            //   icon: null,
            icon: <Globe size={18} />,
          },
          {
            tool: "Postman",
            //   icon: null,
            icon: <SiPostman size={18} />,
          },
        ],
      },
    ],
  },
  {
    // title: "Development Tools",
    title: "Dev Tools",

    icon: <Wrench className="w-6 h-6 text-[hsl(var(--primary))]" />,
    description: "Utilizing modern development tools and practices",
    skills: [
      {
        name: "Version Control",
        description: "Proficient in Git and GitHub ",
        // tools: ["Git", "GitHub", "GitFlow", "Code Review"],
        tools: [
          {
            tool: "Git",
            // icon: null,
            icon: <SiGit size={18} />,
          },
          {
            tool: "GitHub",
            // icon: null,
            icon: <SiGithub size={18} />,
          },
        ],
      },
      {
        name: "Development Environment",
        description:
          "Experienced with modern development tools and environments",
        // tools: ["VS Code", "npm/yarn", "Terminal", "DevTools"],
        tools: [
          {
            tool: "VS Code",
            //  icon: null,
            icon: <VscVscode size={18} />,
          },
          {
            tool: "npm",
            // icon: null,
            icon: <Server size={18} />,
          },
        ],
      },
    ],
  },
  // {
  //   title: "UI/UX & Design",
  //   icon: <Palette className="w-6 h-6 text-[hsl(var(--primary))]" />,
  //   description: "Creating engaging user experiences",
  //   skills: [
  //     {
  //       name: "Component Design",
  //       description: "Building reusable and accessible UI components",
  //       // tools: [
  //       //   "Component Libraries",
  //       //   "Accessibility",
  //       //   "UI/UX Design",
  //       //   "Design Systems",
  //       // ],
  //       tools: [
  //         {
  //           tool: "Hero UI ( Next UI )",
  //           icon: <SiNextui size={18} />,
  //         },
  //         {
  //           tool: "Shadcn/UI",
  //           icon: <SiShadcnui size={18} />,
  //         },
  //         {
  //           tool: "Magic UI",
  //           icon: <SiShadcnui size={18} />,
  //         },
  //         {
  //           tool: "aceternity UI",
  //           icon: <SiShadcnui size={18} />,
  //         },
  //       ],
  //     },
  //     // {
  //     //   name: "Responsive Design",
  //     //   description: "Creating adaptive layouts for all devices",
  //     //   // tools: [
  //     //   //   "Mobile-First",
  //     //   //   "Responsive Design",
  //     //   //   "Cross-Browser Compatibility",
  //     //   // ],
  //     //   tools: [
  //     //     {
  //     //       tool: "HTML5",
  //     //       icon: <RiReactjsFill size={18} />,
  //     //     },
  //     //     {
  //     //       tool: "CSS3",
  //     //       icon: <RiReactjsFill size={18} />,
  //     //     },
  //     //     {
  //     //       tool: "Tailwind CSS",
  //     //       icon: <RiReactjsFill size={18} />,
  //     //     },
  //     //     {
  //     //       tool: "Hero UI",
  //     //       icon: <RiReactjsFill size={18} />,
  //     //     },
  //     //     {
  //     //       tool: "Shadcn/UI",
  //     //       icon: <RiReactjsFill size={18} />,
  //     //     },
  //     //   ],
  //     // },
  //   ],
  // },
];


 export  const skills = [
   {
     key: "frontend",
     title: "frontend",
     body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.`,
   },
   {
     key: "backend",
     title: "backend",
     body: `Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.`,
   },
   {
     key: "videos",
     title: "videos",
     body: `Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.`,
   },
   {
     key: "softskills",
     title: "softskills",
     body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor inci`,
   },
 ];
