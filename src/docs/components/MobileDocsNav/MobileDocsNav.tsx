"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@components/Sheet";
import { CrossIcon, LibraryIcon } from "@components/Icons";
import { SideNav } from "@components/SideNav";
import type { DocItems } from "@constants";

export const MobileDocsNav = ({ items }: { items: DocItems }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const currentDocItem = findCurrentItem(items, pathname);

  // Close the sheet when navigating (did not work as expected automatically)
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="flex gap-6 border-b border-solid border-dark-700 p-4">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <LibraryIcon className="h-6 w-6" />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="overflow-y-auto border-neutral-500"
        >
          <SheetClose asChild>
            <CrossIcon className="absolute right-6 top-6 h-6 w-6" />
          </SheetClose>
          <SheetClose asChild>
            <SideNav items={items} className="p-6" />
          </SheetClose>
        </SheetContent>
      </Sheet>
      {currentDocItem && (
        <p className="flex gap-3">
          <span className="text-neutral-500">{currentDocItem.groupLabel}</span>
          <span>{">"}</span>
          <span className="font-semibold">{currentDocItem.itemLabel}</span>
        </p>
      )}
    </nav>
  );
};

function findCurrentItem(items: DocItems, pathname: string) {
  for (const group of items) {
    for (const item of group.items) {
      if (item.href === pathname) {
        return {
          groupLabel: group.label,
          itemLabel: item.label,
          href: item.href,
        };
      }
    }
  }
  return null;
}