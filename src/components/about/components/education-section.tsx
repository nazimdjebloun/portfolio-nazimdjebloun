// import React from "react";
// import { GlowingEffect } from "@/components/ui/glowing-effect";

// interface GridItemProps {
//   //   area: string;
//   //   icon: React.ReactNode;
//   title: string;
//   description: React.ReactNode;
//   details: React.ReactNode;
//   courses: React.ReactNode;
// }
 

// export const GridItem = ({ title, description, details, courses }: GridItemProps) => {
//   return (
//     <main className="">
//       <div className=" bg-background border  relative h-full rounded-2.5xl  p-2  md:rounded-3xl md:p-3">
//         {/* //this isss */}
//         <GlowingEffect
//           spread={40}
//           glow={true}
//           disabled={false}
//           proximity={64}
//           inactiveZone={0.01}
//           variant="rainbow"
//           borderWidth={2}
//           opacity={1}
//         />
//         <div className=" relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 shadow-[0px_0px_27px_0px_rgba(100,100,100,0.1)]  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
//           <div className=" relative flex flex-1 flex-col justify-between gap-3">
//             {/* <div className="w-fit rounded-lg border border-gray-600 p-2 ">
//               {icon}
//             </div> */}
//             <div className="space-y-3">
//               <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-foreground">
//                 {title}
//               </h3>
//               <h2
//                 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem]
//               md:text-base/[1.375rem]  text-foreground"
//               >
//                 {description}
//               </h2>
//               <h1>{details}</h1>
//               <span>{courses}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

import React from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Calendar, MapPin, Award, BookOpen, Briefcase } from "lucide-react";
import Image from "next/image";

interface Course {
  name: string;
  grade?: string;
}

interface EducationCardProps {
  title: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
  courses?: Course[];
  skills?: string[];
  logo?: string;
}

export const EducationCard = ({
  title,
  institution,
  location,
  period,
  description,
  achievements = [],
  courses = [],
  skills = [],
  logo,
}: EducationCardProps) => {
  return (
    // <div className="bg-background border relative h-full rounded-2.5xl p-2 md:rounded-3xl md:p-3">
    <div className="bg-background border relative h-full rounded-3xl p-2">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        variant="rainbow"
        borderWidth={2}
        opacity={1}
      />
      <div className="relative flex h-full flex-col justify-between gap- overflow-hidden rounded-xl border-0.75 p-4 shadow-[0px_0px_27px_0px_rgba(100,100,100,0.1)] dark:shadow-[0px_0px_27px_0px_#2D2D2D] ">
        <div className=" relative flex flex-1 flex-col justify-center gap-5 ">
          <div className=" flex items-start justify-between ">
            <div className="space-y-1">
              <h3 className=" text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-foreground">
                {title}
              </h3>
              <div className="flex items-center text-foreground/80">
                {logo ? (
                  <Image
                    width={500}
                    height={500}
                    src={logo}
                    alt={institution}
                    className="h-6 w-6 mr-2"
                  />
                ) : (
                  <Award className="h-5 w-5 mr-2 text-primary" />
                )}
                <span className="font-medium">{institution}</span>
              </div>
            </div>
          </div>

          <div className=" mt-1 space-y-2 md:mt-3 md:space-y-4">
            <div className="flex flex-wrap gap-3 text-sm text-foreground/70">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{location}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{period}</span>
              </div>
            </div>

            <div className="text-sm/[1.5] text-foreground/80">
              <p>{description}</p>
            </div>

            {achievements.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-semibold flex items-center">
                  <Award className="h-4 w-4 mr-1 text-primary" />
                  Achievements
                </h4>
                <ul className="list-disc list-inside text-sm text-foreground/80 space-y-1">
                  {achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}

            {courses.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-semibold flex items-center">
                  <BookOpen className="h-4 w-4 mr-1 text-primary" />
                  Key Courses
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm text-foreground/80">
                  {courses.map((course, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-1">•</span>
                      <span>
                        {course.name}
                        {course.grade && (
                          <span className="text-primary ml-1">
                            ({course.grade})
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {skills.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-semibold flex items-center">
                  <Briefcase className="h-4 w-4 mr-1 text-primary" />
                  Skills Acquired
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};