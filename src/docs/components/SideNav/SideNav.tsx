"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type DocsItem } from "@constants";
import { cn } from "@utils/cn";

const SideNavItem = ({ item, level }: { item: DocsItem; level: number }) => {
  const pathname = usePathname();
  const { href, label, items } = item;
  const isActive = href && pathname?.includes(href);
  return (
    <li
      className={cn(
        "space-y-4 p-2 rounded-lg",
        level === 0 ? "text-lg font-bold" : "text-base font-normal",
        level === 1 &&
          "text-neutral-500 hover:text-neutral-200 hover:bg-neutral-200/20 hover:cursor-pointer",
        isActive && " bg-pink-text/20 hover:bg-pink-text/20",
        isActive && "text-pink-text hover:text-pink-text font-semibold"
      )}
    >
      {href ? <Link href={href}>{label}</Link> : <span>{label}</span>}

      {items && <SideNavList items={items} level={level + 1} />}
    </li>
  );
};

const SideNavList = ({
  items,
  level,
}: {
  items: DocsItem[];
  level: number;
}) => {
  return (
    <ul>
      {items.map((item, index) => (
        <SideNavItem key={index} item={item} level={level} />
      ))}
    </ul>
  );
};

export const SideNav = ({ items }: { items: DocsItem[] }) => {
  return (
    <nav className="p-4">
      <SideNavList items={items} level={0} />
    </nav>
  );
};
