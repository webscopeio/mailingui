"use client";

import * as React from "react";
import { cn } from "@utils/cn";

export type CollapsibleContentProps = {
  children: React.ReactNode;
  expandLabel?: string;
  collapseLabel?: string;
  expandedButtonInset?: boolean;
  className?: string;
  collapsedSize?: string;
  fromBlack?: boolean;
};

export const CollapsibleContent = ({
  children,
  expandLabel = "Expand",
  collapseLabel = "Collapse",
  expandedButtonInset = false,
  className,
  collapsedSize = "max-h-[350px]",
  fromBlack = false,
}: CollapsibleContentProps) => {
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  return (
    <div
      className={cn("relative overflow-hidden", isCollapsed && collapsedSize)}
    >
      <div className={className}>{children}</div>
      <div
        className={cn(
          "flex flex-col items-center justify-end p-4",
          isCollapsed &&
            `bg-gradient-to-t ${fromBlack ? "from-black" : "from-stone-950"}`,
          isCollapsed && "pointer-events-none absolute inset-0 h-full w-full",
          !isCollapsed && (expandedButtonInset ? "absolute inset-0 p-2" : "p-8")
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
          {isCollapsed ? expandLabel : collapseLabel}
        </button>
      </div>
    </div>
  );
};