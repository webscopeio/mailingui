"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { DocItems, DocItemGroup, DocItem } from "@constants";
import { cn } from "@utils/cn";

const SideNavItem = ({ item }: { item: DocItem }) => {
  const pathname = usePathname();
  const { href, label } = item;
  const isActive = pathname?.includes(href);
  return (
    <li
      className={cn(
        "p-2 rounded-lg text-neutral-500 hover:text-neutral-200 hover:bg-neutral-200/20 hover:cursor-pointer",
        isActive &&
          " bg-pink-text/20 hover:bg-pink-text/20 text-pink-text hover:text-pink-text font-semibold"
      )}
    >
      <Link href={href}>{label}</Link>
    </li>
  );
};

const SideNavGroup = ({ group }: { group: DocItemGroup }) => {
  const { label, items } = group;
  return (
    <li className="mb-4 space-y-4">
      <span className="text-lg font-bold">{label}</span>
      <ul>
        {items.map((item, index) => (
          <SideNavItem key={index} item={item} />
        ))}
      </ul>
    </li>
  );
};

export const SideNav = ({ items }: { items: DocItems }) => {
  return (
    <nav className="p-4">
      <ul>
        {items.map((group, index) => (
          <SideNavGroup key={index} group={group} />
        ))}
      </ul>
    </nav>
  );
};
