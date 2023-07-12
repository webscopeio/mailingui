"use client";

import * as React from "react";
import { Code } from "./Code";
import { Tabs } from "@components/Tabs";
import { TabsContent, TabsList, TabsTrigger } from "@components/Tabs/Tabs";
import { CopyButton } from "@components/CopyButton";
import { cn } from "@utils/cn";
import {
  FadingCollapsible,
  FadingCollapsibleProps,
} from "@components/FadingCollapsible";

export interface TabbedCodeItem {
  id: string;
  label?: string;
  htmlCode: string;
  isPlainText?: boolean;
}

interface TabbedCodeProps {
  className?: string;
  collapsedClassName?: string;
  tabs: TabbedCodeItem[];
}

export const TabbedCode = ({
  collapsedClassName,
  className,
  tabs,
}: TabbedCodeProps) => {
  const isExpandable = typeof collapsedClassName === "string";
  const Wrapper = isExpandable ? FadingCollapsible : React.Fragment;
  const wrapperProps: Omit<FadingCollapsibleProps, "children"> = isExpandable
    ? {
        collapsedSizeClassName: collapsedClassName,
        buttonOverlayClassName: (isCollapsed) =>
          !isCollapsed ? "absolute inset-0 p-2" : "p-8",
      }
    : {};

  const [code, setCode] = React.useState("");

  return (
    <>
      <Wrapper {...wrapperProps}>
        <Tabs
          className={cn("bg-[#011627]", className)}
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
      </Wrapper>
    </>
  );
};
TabbedCode.displayName = "TabbedCode";
