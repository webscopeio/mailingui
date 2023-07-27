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
import type { PreviewTree } from "@utils/preview";

export const PreviewShell = ({
  children,
  fileTree,
  folderId,
  fileId,
}: {
  children: React.ReactNode;
  fileTree: PreviewTree;
  folderId?: string;
  fileId?: string;
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <section className="flex h-screen overflow-hidden">
      <aside className="hidden min-w-[300px] overflow-y-scroll p-8 md:block">
        <PreviewList
          fileTree={fileTree}
          activeFileId={fileId}
          activeFolderId={folderId}
        ></PreviewList>
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
            className="absolute left-0 h-screen w-80 overflow-y-scroll rounded-none p-4 shadow-lg shadow-slate-900"
            color="black"
            align="start"
          >
            <div className="absolute right-4">
              <PopoverClose asChild>
                <CrossIcon />
              </PopoverClose>
            </div>
            <PopoverClose asChild>
              <PreviewList
                fileTree={fileTree}
                activeFileId={fileId}
                activeFolderId={folderId}
              />
            </PopoverClose>
          </PopoverContent>
        </Popover>
        {children}
      </div>
    </section>
  );
};
