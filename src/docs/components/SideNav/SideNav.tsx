"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type DocsItem } from "@constants";
import { cn } from "@utils/cn";

const SideNavItem = ({ item, level }: { item: DocsItem; level: number }) => {
  const pathname = usePathname();
  const { href, label, items } = item;
  const textClass = level === 0 ? "text-lg font-bold" : "text-base opacity-90";
  return (
    <li className="space-y-2">
      {href ? (
        <Link
          className={cn(
            level === 0 ? "text-lg font-bold" : "text-base opacity-90",
            "hover:opacity-70",
            href !== "/" &&
              pathname?.includes(href) &&
              (level !== 0 || href === pathname) &&
              "text-pink-text"
          )}
          href={href}
        >
          {label}
        </Link>
      ) : (
        <span className={textClass}>{label}</span>
      )}

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
  const spaceClass = level === 0 ? "space-y-4" : "space-y-2";
  return (
    <ul className={spaceClass}>
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
