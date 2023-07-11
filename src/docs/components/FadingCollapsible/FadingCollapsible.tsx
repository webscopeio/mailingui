"use client";

import * as React from "react";
import { cn } from "@utils/cn";

type FadingCollapsibleProps = {
  children: React.ReactNode;
  className?: string;
  collapsedSizeClassName?: string;
};

const COLLAPSED_SIZE_CLASS_NAME = "max-h-[260px]";

export const FadingCollapsible = ({
  children,
  className = "space-y-8 md:space-y-12",
  collapsedSizeClassName = COLLAPSED_SIZE_CLASS_NAME,
}: FadingCollapsibleProps) => {
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        isCollapsed && collapsedSizeClassName
      )}
    >
      <div className={className}>{children}</div>
      <div
        className={cn(
          isCollapsed && "bg-gradient-to-t from-stone-950",
          isCollapsed
            ? "pointer-events-none absolute inset-0 h-full w-full"
            : "",
          "flex flex-col items-center justify-end p-4"
        )}
      >
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={cn([
            isCollapsed
              ? "text-sm px-3 py-1.5 bg-neutral-200 text-neutral-800"
              : "text-xs px-2 py-1",
            "pointer-events-auto rounded-md font-medium transition-all duration-300",
            /** Hover styles */
            isCollapsed
              ? "hover:bg-neutral-400"
              : "hover:bg-slate-800 hover:text-white",
            /** Focus styles */
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-400 focus-visible:ring-offset-2 ring-offset-dark-800",
            /** Disabled styles */
            "disabled:pointer-events-none disabled:opacity-50",
          ])}
        >
          {isCollapsed ? "Show more" : "Hide section"}
        </button>
      </div>
    </div>
  );
};
