import * as React from 'react'
import { motion, useMotionValue } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from "@/components/ui/button";
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
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Image from "next/image";

interface ImageSwiperProps extends React.HTMLAttributes<HTMLDivElement> {
  images: string[];
}

export function ImageSwiper({ images, className, ...props }: ImageSwiperProps) {
  const [imgIndex, setImgIndex] = React.useState(0);
  const dragX = useMotionValue(0);
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [dialogIsOpen, dialogSetIsOpen] = React.useState(false);

  const handleOpenModal = () => {
    dialogSetIsOpen(true);
  };

  const handleCloseModal = () => {
    dialogSetIsOpen(false);
  };

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -10 && imgIndex < images.length - 1) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= 10 && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };

  return (
    <div
      className={cn(
        "group relative aspect-square h-full w-full overflow-hidden rounded-lg",
        className
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 z-10">
        {imgIndex > 0 && (
          <div className="absolute left-5 top-1/2 -translate-y-1/2">
            <Button
              variant="ghost"
              size="icon"
              className="border pointer-events-auto h-8 w-8 rounded-full bg-white dark:bg-black pacity-0 transition-opacity group-hover:opacity-100"
              onClick={() => setImgIndex((prev) => prev - 1)}
            >
              <ChevronLeft className="h-4 w-4 text-foreground" />
            </Button>
          </div>
        )}

        {imgIndex < images.length - 1 && (
          <div className="absolute right-5 top-1/2 -translate-y-1/2">
            <Button
              variant="ghost"
              size="icon"
              className="border pointer-events-auto h-8 w-8 rounded-full bg-white dark:bg-black opacity-0 transition-opacity group-hover:opacity-100"
              onClick={() => setImgIndex((prev) => prev + 1)}
            >
              <ChevronRight className="h-4 w-4 text-foreground" />
            </Button>
          </div>
        )}

        <div className="absolute bottom-2 w-full flex justify-center">
          <div className="flex min-w-9 items-center justify-center rounded-md bg-black/80 px-2 py-0.5 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
            {imgIndex + 1}/{images.length}
          </div>
        </div>
      </div>

      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        dragMomentum={false}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        onDragEnd={onDragEnd}
        transition={{
          damping: 18,
          stiffness: 90,
          type: "spring",
          duration: 0.2,
        }}
        className="flex h-full w-full cursor-grab items-center rounded-[inherit] active:cursor-grabbing"
      >
        {images.map((src, i) => {
          return (
            <motion.div
              key={i}
              className="h-full w-full shrink-0 overflow-hidden"
            >
              <div
                // onClick={onOpen}
                onClick={handleOpenModal}
                className="overflow-hidden "
              >
                <Image
                  loading="lazy"
                  width={500}
                  height={500}
                  alt="image"
                  src={src}
                  className="h-full w-full  pointer-events-none "
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <Dialog open={dialogIsOpen} onOpenChange={handleCloseModal}>
        <DialogContent className="max-w-[90%] overflow-y-auto ">
          <DialogHeader>
            <DialogTitle>Full screen view</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="relative h-full w-full  rounded-xl border">
            <Image
              loading="lazy"
              unoptimized
              quality={50}
              width={500}
              height={500}
              src={images[imgIndex]}
              alt="Fullscreen view"
              className="h-[100%] w-full object-contain rounded-2xl"
            />
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              {/* <Button type="button" variant="secondary">
                Close
              </Button> */}
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

{
  /* <Button onClick={onOpen}>Open Modal</Button> */
}
{
  /* <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
        backdrop="blur"
      >
        <ModalContent className="bg-background">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Full screen view
              </ModalHeader>
              <ModalBody>
                <div className="relative h-full w-full  rounded-xl border">
                  <Image
                    loading="lazy"
                    unoptimized
                    quality={50}
                    width={500}
                    height={500}
                    src={images[imgIndex]}
                    alt="Fullscreen view"
                    className="h-[100%] w-full object-contain rounded-2xl"
                  />
                </div>
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
