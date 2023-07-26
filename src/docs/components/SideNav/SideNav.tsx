"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { DocItems, DocItemGroup, DocItem } from "@constants";
import { cn } from "@utils/cn";

const SideNavItem = ({ item }: { item: DocItem }) => {
  const pathname = usePathname();
  const { href, label } = item;
  const isActive = pathname === href;
  return (
    <li
      className={cn(
        "relative rounded-lg text-neutral-500 hover:text-neutral-200 hover:bg-neutral-200/20 hover:cursor-pointer",
        isActive &&
          " bg-pink-text/20 hover:bg-pink-text/20 text-pink-text hover:text-pink-text font-semibold"
      )}
    >
      <Link className="block w-full px-3 py-2" href={href}>
        {label}
      </Link>
    </li>
  );
};

const SideNavGroup = ({ group }: { group: DocItemGroup }) => {
  const { label, items } = group;
  return (
    <li className="mb-4 space-y-4">
      <span className="px-3 text-lg font-bold">{label}</span>
      <ul>
        {items.map((item, index) => (
          <SideNavItem key={index} item={item} />
        ))}
      </ul>
    </li>
  );
};

export const SideNav = ({
  items,
  className,
}: {
  items: DocItems;
  className?: string;
}) => {
  return (
    <nav className={cn("px-4", className)}>
      <ul>
        {items.map((group, index) => (
          <SideNavGroup key={index} group={group} />
        ))}
      </ul>
    </nav>
  );
};
