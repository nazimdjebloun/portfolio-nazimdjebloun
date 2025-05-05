import React from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Button } from "@/components/ui/button";
import { ImageSwiper } from "@/components/ui/image-swiper";
// import {
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   useDisclosure,
// } from "@heroui/react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { CheckCircle2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";


interface Stack {
  name: string;
  icon?: React.ReactNode;
}

interface ProjectDetails {
  overview: string;
  features: Stack[];
}

interface ProjectCardProps {
  images: string[];
  title: string;
  description: string;
  details: ProjectDetails;
  stack: Stack[];
}

function ProjectCard({
  images,
  title,
  description,
  details,
  stack,
}: ProjectCardProps) {
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <li className="group h-[600px] ">
      <div className="bg-background border relative h-full rounded-xl p-2">
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
        <div className=" max-w-sm backdrop:relative flex flex-col gap-3 h-full  overflow-hidden rounded-xl border-0.75 p-4 shadow-[0px_0px_27px_0px_rgba(100,100,100,0.1)] dark:shadow-[0px_0px_27px_0px_#2D2D2D] ">
          <div className=" text-xl md:text-2xl text-foreground">
            <p> {title}</p>
          </div>

          <div className="w-full h-44 rounded-2xl  p-1 border">
            <ImageSwiper className="w-full h-full" images={images} />
          </div>

          <div className="text-xs sm:text-sm md:text-lg flex flex-col items-start">
            <p>{description}</p>
            {/* <Button
              variant="secondary"
              className="rounded-xl self-end"
              onClick={onOpen}
            >
              View details
            </Button> */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary" className="rounded-xl self-end">
                  View details
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]  p-5 rounded-3xl">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                  </DialogDescription>
                </DialogHeader>
                <p className="text-md">{details.overview}</p>

                {details && (
                  <ul className="mt-4 space-y-2 text-md">
                    {details.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="">
                          <CheckCircle2 />
                        </span>
                        <span>{feature.name}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </DialogContent>
            </Dialog>
            <Separator className="my-4" />
          </div>

          <div className="flex flex-wrap gap-2 ">
            {stack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-secondary px-3 py-1 rounded-full hover:bg-accent  transition-all duration-200 hover:scale-105"
              >
                {tech.icon && (
                  <span className="text-base md:text-base text-foreground">
                    {tech.icon}
                  </span>
                )}
                <span className="text-xs md:text-sm font-medium ">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}
export default ProjectCard;





        {
          /* <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
          <ModalContent className="bg-background">
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  {title} overview
                </ModalHeader>

                <ModalBody>

                  <p className="text-md">{details.overview}</p>

                  
                  {details && (
                    <ul className="mt-4 space-y-2 text-md">
                      {details.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="">
                            <CheckCircle2 />
                          </span>
                          <span>{feature.name}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </ModalBody>

                <ModalFooter>
                  <Button
                    variant="ghost"
                    className=" hover:bg-red-500 hover:text-white"
                    onClick={onClose}
                  >
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal> */
        }