"use client";
import * as React from "react";
import { Resizable } from "re-resizable";
import { Tabs } from "@components/Tabs";
import { CodeIcon, EyeIcon } from "@components/Icons";
import { cn } from "@utils/cn";
import { TabsContent, TabsList, TabsTrigger } from "@components/Tabs/Tabs";
import { TabbedCode, TabbedCodeItem } from "@components/Code";

export type ComponentExampleProps = {
  type: string;
  id: string;
  html: string;
  source: string;
  markup: string;
  plainText: string;
};

export const ComponentExample = ({
  type,
  id,
  html,
  source,
  markup,
  plainText,
  headline,
}: ComponentExampleProps & { headline?: React.ReactNode }) => {
  const tabData: TabbedCodeItem[] = [
    {
      id: `${id}.tsx`,
      htmlCode: source,
    },
    {
      id: `${id}.html`,
      htmlCode: markup,
    },
    {
      id: `${id}.txt`,
      htmlCode: plainText,
      isPlainText: true,
    },
  ];

  return (
    <div className={cn("space-y-3")}>
      <Tabs defaultValue="preview" orientation="horizontal">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-neutral-500">
            {headline || transformComponentName(id)}
          </h3>
          <TabsList className="rounded-full">
            <TabsTrigger value="preview" className="rounded-full p-2">
              <EyeIcon className="h-4 w-4" />
              <span className="hidden md:inline-flex">Preview</span>
            </TabsTrigger>
            <TabsTrigger value="code" className="rounded-full p-2">
              <CodeIcon className="h-4 w-4" />
              <span className="hidden md:inline-flex">Code</span>
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent className="relative rounded-md" value="preview">
          <Resizable
            bounds="parent"
            minWidth="320px"
            handleStyles={{
              right: {
                right: "initial",
                left: "100%",
                paddingLeft: "0.25rem",
                paddingRight: "0.25rem",
                width: "auto",
                cursor: "ew-resize",
              },
            }}
            handleClasses={{
              right: cn("hidden sm:flex items-center bg-black"),
            }}
            handleComponent={{
              right: <div className="h-8 w-1.5 rounded-full bg-dark-100" />,
            }}
          >
            <div>
              <iframe
                className="w-full rounded-md"
                style={{
                  // We need to set this to full width
                  // And scroll on overflow
                  height: getIframeHeight(type),
                }}
                id={id}
                title={id}
                srcDoc={html}
              />
            </div>
          </Resizable>
        </TabsContent>
        <TabsContent
          className="relative overflow-hidden rounded-md"
          value="code"
        >
          <TabbedCode
            tabs={tabData}
            collapsedClassName="max-h-[350px]"
            className="min-h-[350px]"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

function transformComponentName(componentName: string): string {
  const transformedName = componentName
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Insert space between lowercase and uppercase letters
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2"); // Insert space between uppercase letters followed by lowercase letter

  return transformedName;
}

// Mappings of component name to iframe height
const getIframeHeight = (type: string): number => {
  switch (type) {
    case "badges":
      return 120;
    case "buttons":
      return 160;
    case "dividers":
      return 230;
    case "paragraphs":
      return 290;
    default:
      return 350;
  }
};
