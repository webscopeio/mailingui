"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@components/Sheet";
import { CrossIcon, CodeIcon } from "@components/Icons";
import { SideNav } from "@components/SideNav";
import type { DocItems } from "@constants";

export const MobileDocsNav = ({ items }: { items: DocItems }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  // Close the sheet when navigating (did not work as expected automatically)
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="flex gap-4 border-b border-solid border-dark-700 p-4">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <CodeIcon className="h-6 w-6" />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="overflow-y-auto border-neutral-500 bg-black"
        >
          <SheetClose asChild>
            <CrossIcon className="absolute right-6 top-6 h-6 w-6" />
          </SheetClose>
          <SheetClose asChild>
            <SideNav items={items} className="p-6" />
          </SheetClose>
        </SheetContent>
      </Sheet>
      <p className="flex gap-2">
        <span>Getting Started</span>
        <span>{">"}</span>
        <span>Overview</span>
      </p>
    </nav>
  );
};
