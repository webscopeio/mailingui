"use client";

import * as React from "react";
import { Code } from "./Code";
import { Tabs } from "@components/Tabs";
import { TabsContent, TabsList, TabsTrigger } from "@components/Tabs/Tabs";
import { CopyButton } from "@components/CopyButton";
import { cn } from "@utils/cn";

export interface TabbedCodeItem {
  id: string;
  label?: string;
  htmlCode: string;
  isPlainText?: boolean;
}

interface TabbedCodeProps {
  className?: string;
  collapsedClassName?: string;
  expandedClassName?: string;
  tabs: TabbedCodeItem[];
}

const CodeExpandableFooter = ({
  expanded,
  setExpanded,
}: {
  expanded: boolean;
  setExpanded: (value: boolean) => void;
}) => (
  <footer
    className={cn(
      "absolute pointer-events-none rounded-md h-full w-full inset-0 bg-gradient-to-t from-slate-900 flex justify-center items-end pb-8",
      expanded ? "pb-2 bg-none" : "pb-8"
    )}
  >
    <button
      onClick={() => setExpanded(!expanded)}
      className={cn([
        expanded
          ? "text-xs px-2 py-1"
          : "text-sm px-3 py-1.5 bg-neutral-200 text-neutral-800",
        "pointer-events-auto rounded-md font-medium transition-all duration-300",
        /** Hover styles */
        expanded
          ? "hover:bg-slate-800 hover:text-white"
          : "hover:bg-neutral-400",
        /** Focus styles */
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-400 focus-visible:ring-offset-2 ring-offset-dark-800",
        /** Disabled styles */
        "disabled:pointer-events-none disabled:opacity-50",
      ])}
    >
      {!expanded ? "Expand" : "Collapse"}
    </button>
  </footer>
);

export const TabbedCode = ({
  collapsedClassName,
  expandedClassName,
  className,
  tabs,
}: TabbedCodeProps) => {
  const isExpandable = collapsedClassName || expandedClassName;

  const [code, setCode] = React.useState("");
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <>
      <Tabs
        className={cn(
          "bg-[#011627]",
          className,
          isExpanded ? expandedClassName : collapsedClassName
        )}
        defaultValue={tabs[0]?.id}
      >
        <div className="flex items-center justify-between px-5 pt-3">
          <TabsList className="grid w-full bg-[#011627] sm:inline-flex">
            {tabs.map(({ id, label }) => (
              <TabsTrigger
                key={id}
                value={id}
                className="px-2.5 py-1.5 text-xs hover:bg-slate-700/50 data-[state=active]:bg-slate-700 data-[state=active]:text-slate-200"
              >
                {label ?? id}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="hidden md:inline-flex">
            <CopyButton code={code} />
          </div>
        </div>
        {tabs.map(({ id, htmlCode, isPlainText }) => (
          <TabsContent key={id} value={id}>
            <Code
              className={cn(isPlainText && "whitespace-pre-line px-8 pb-8")}
              ref={(node) => {
                node?.textContent && setCode(node.textContent);
              }}
              htmlCode={htmlCode}
            />
          </TabsContent>
        ))}
      </Tabs>
      {isExpandable && (
        <CodeExpandableFooter
          expanded={isExpanded}
          setExpanded={setIsExpanded}
        />
      )}
    </>
  );
};
TabbedCode.displayName = "TabbedCode";
