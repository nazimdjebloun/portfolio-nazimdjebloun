import React from "react";
import { Card, CardBody, CardFooter, Button, Chip } from "@heroui/react";
import { BadgeCheck, ChevronDown, ChevronUp } from "lucide-react";

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
  companyLogo?: string;
}

export function ExperienceCard({
  role,
  company,
  period,
  description,
  achievements,
  skills,
}: // companyLogo,
ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <Card className="w-full bg-background border">
      <CardBody className="p-5 space-y-5">
        <div className="flex justify-between">
          <div className="flex justify-between items-start flex-col ">
            <h3 className="text-xl font-bold">{role}</h3>
            <p className="text-zinc-500">{company}</p>
            <p className="text-small text-zinc-500">{period}</p>
          </div>
          <div></div>
        </div>

        <p className="text-zinc-500">{description}</p>

        <div
          className={`space-y-2 overflow-hidden transition-all duration-300 ${
            isExpanded ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-start gap-2">
              <BadgeCheck className="text-foreground mt-1" />
              <p>{achievement}</p>
            </div>
          ))}
        </div>
      </CardBody>
      <CardFooter className="flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Chip
              key={index}
              variant="flat"
              size="sm"
              className="bg-default-100"
            >
              {skill}
            </Chip>
          ))}
        </div>

        <Button
          variant="light"
          endContent={
            isExpanded ? (
              <ChevronUp className="transition-transform" />
            ) : (
              <ChevronDown className="transition-transform" />
            )
          }
          onPress={() => setIsExpanded(!isExpanded)}
          className="w-full"
        >
          {isExpanded ? "Show Less" : "Show More"}
        </Button>
      </CardFooter>
    </Card>
  );
}
