"use client";
import { useState } from "react";
import { PreviewSend } from "./PreviewSend";
import { PreviewList } from "./PreviewList";
import { CTA } from "@components/CTA";
import { BackIcon, CrossIcon, MenuIcon } from "@components/Icons";
import {
  Popover,
  PopoverAnchor,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@components/Popover";

const PreviewNavigation = ({
  id,
  html,
  children,
  files,
}: {
  id?: string;
  html?: string;
  children?: React.ReactNode;
  files: { id: string; fileName: string }[];
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Popover open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <PopoverAnchor></PopoverAnchor>
      <nav className="flex flex-wrap items-center justify-between gap-2 p-3 md:flex-nowrap">
        <div className="flex w-full items-center justify-between md:gap-8 md:w-fit">
          <CTA href="/" color="black" className="flex items-center gap-2 p-0">
            <BackIcon />
            <span className="hidden lg:block">Back Home</span>
          </CTA>
          {id && <h2 className="font-semibold">{id}.tsx</h2>}
          <PopoverTrigger
            className="md:hidden"
            aria-label={isMenuOpen ? "Close" : "Open"}
          >
            <MenuIcon />
          </PopoverTrigger>
        </div>
        <div className="flex w-full items-center justify-between gap-4 self-end md:w-fit">
          {children}
          <PreviewSend html={html} />
        </div>
      </nav>

      <PopoverContent
        className="inset-0 max-h-screen w-screen overflow-y-scroll rounded-none md:hidden"
        color="black"
      >
        <div>
          <div className="my-4 flex justify-between">
            <h2 className="text-2xl font-semibold">Select email</h2>
            <PopoverClose asChild>
              <CrossIcon />
            </PopoverClose>
          </div>
          <PopoverClose asChild>
            <PreviewList files={files} activeFileId={id} />
          </PopoverClose>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export { PreviewNavigation };
