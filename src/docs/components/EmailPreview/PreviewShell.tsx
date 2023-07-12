"use client";

import * as React from "react";
import { PreviewList } from "./PreviewList";
import { MenuIcon, CrossIcon } from "@components/Icons";
import { CTA } from "@components/CTA";
import {
  Popover,
  PopoverAnchor,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@components/Popover";

export const PreviewShell = ({
  children,
  files,
  paramsId,
}: {
  children: React.ReactNode;
  files: {
    id: string;
    fileName: string;
  }[];
  paramsId?: string;
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <section className="flex h-screen overflow-hidden">
      <aside className="hidden min-w-[300px] overflow-y-scroll p-8 md:block">
        <PreviewList files={files} activeFileId={paramsId}></PreviewList>
      </aside>
      <div className="flex h-full flex-1 flex-col">
        <Popover open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <PopoverAnchor />
          <PopoverTrigger
            aria-label={isMenuOpen ? "Close" : "Open"}
            className="absolute bottom-2 left-2 z-10 md:hidden"
            asChild
          >
            <CTA color="black">
              <MenuIcon className="mr-2 rotate-180" />
              Emails
            </CTA>
          </PopoverTrigger>
          <PopoverContent
            className="absolute left-0 h-screen w-80 overflow-y-scroll rounded-none p-0 shadow-lg shadow-slate-900"
            color="black"
            align="start"
          >
            <div className="sticky top-0 flex justify-between bg-black p-4">
              <h2 className="font-bold">Select email</h2>
              <PopoverClose asChild>
                <CrossIcon />
              </PopoverClose>
            </div>
            <div className="px-4">
              <PopoverClose asChild>
                <PreviewList files={files} activeFileId={paramsId} />
              </PopoverClose>
            </div>
          </PopoverContent>
        </Popover>
        {children}
      </div>
    </section>
  );
};
