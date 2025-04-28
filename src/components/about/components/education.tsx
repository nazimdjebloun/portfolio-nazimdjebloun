import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { EducationCard } from "./education-section";

export const data = [
  {
    title: "Sep 2019 - Jul 2022",
    content: (
      <EducationCard
        title="Bachelor's degree in Marketing"
        institution="University of Algiers 3"
        location="Algiers, Algeria"
        period="Sep 2019 - Jul 2022"
        description="Completed a comprehensive Marketing program with a focus on core Marketing principals."
        courses={[
          { name: "Introduction to Marketing" },
          { name: "Service marketing" },
          { name: "Sales Planning Management" },
          { name: "marketing strategies" },
          { name: "Digital marketing" },
          { name: "Strategic marketing" },
          { name: "Customer Relationship Management (CRM)" },
          { name: "Consumer Behavior" },
          { name: "Marketing Information System (MIS)" },
        ]}
        skills={[
          "Core marketing principals",
          "marketing Mix ",
          "marketing strategies",
          "Service Marketing",
          "Sales ",
        ]}
      />
    ),
  },

  {
    title: "Sep 2022 - Jul 2024",
    content: (
      <EducationCard
        title="Master's degrees in Service Marketing"
        institution="University of Algiers 3"
        location="Algiers, Algeria"
        period="Sep 2022 - Jul 2024"
        description="Completed a comprehensive Service Marketing program with a focus on strategic Service marketing and digital Service marketing techniques."
        courses={[
          { name: "Introduction to Services" },
          { name: "In depth Service Marketing" },
          { name: "Service Marketing strategies" },
          { name: "Digital Service Marketing" },
          { name: "Strategic Services Marketing" },
          { name: "Reaserche metholodies" },
          { name: "Consumer Behavior " },
        ]}
        skills={[
          "Market research",
          "Digital Service Marketing",
          "Advanced Marketing strategies",
          "Service Marketing mix",
          "Communication ",
          "SEO",
        ]}
      />
    ),
  },
  {
    title: "Sep 2022 - Apr 2024",
    content: (
      <EducationCard
        title="Computer Science (TS)"
        institution="Ibn Rochde"
        location="Algiers, Algeria"
        period="Sep 2022 - Apr 2024"
        description="Completed a comprehensive Computer Science program with a focus on Databases design,implemntation, admintration and management "
        courses={[
          { name: "Data Structures & Algorithms" },
          { name: "Web Development" },
          { name: "Database Systems" },
          { name: "Computer Networks" },
          { name: "Software Engineering" },
        ]}
        skills={[
          "Pascal",
          "JavaScript",
          "PHP",
          "HTML CSS",
          "SQL",
          "Problem solving",
          "Data Structures",
        ]}
      />
    ),
  },
];
export function TimelineDemo() {
  return (
    <div className="w-full h-full  flex justify-center items-center">
      <Timeline data={data} />
    </div>
  );
}
