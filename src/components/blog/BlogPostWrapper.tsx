import * as React from "react";
import dayjs from "dayjs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { blogPostRegistry } from "@registry/blog";

export const BlogPostWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const slug = pathname.match(/\/([^/]+)$/)?.[1];
  const registry = blogPostRegistry.find((item) => item.slug === slug);

  if (!registry) return null;
  const { title, date, description, github } = registry;

  return (
    <div className="mx-auto">
      <header className="space-y-2 pt-2">
        <div className="flex items-center gap-x-2 text-sm text-gray-400">
          <time dateTime={date}>{dayjs(date).format("dddd D MMMM YY")}</time>
          <span>·</span>
          <div className="space-x-1">
            <span>by</span>
            <a target="_blank" href={`https://github.com/${github}`}>
              <span className="brand-gradient bg-clip-text font-semibold text-transparent">
                @{github}
              </span>
            </a>
          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
        <p className="pt-2 leading-7 text-gray-400">{description}</p>
      </header>
      {children}
      <footer className="flex items-center gap-x-3 pt-12">
        <Image
          width={50}
          height={50}
          alt={github}
          src={
            github
              ? `http://avatars.githubusercontent.com/${github}`
              : "https://github.com/identicons/webscope.png"
          }
          className="overflow-hidden rounded-full"
        />
        <div className="grid gap-1 text-gray-400">
          <div className="space-x-1">
            <span>Written by</span>
            <a target="_blank" href={`https://github.com/${github}`}>
              <span className="brand-gradient bg-clip-text font-semibold text-transparent">
                {github}
              </span>
            </a>
          </div>
          <time dateTime={date}>{dayjs(date).format("dddd D MMMM YY")}</time>
        </div>
      </footer>
    </div>
  );
};
