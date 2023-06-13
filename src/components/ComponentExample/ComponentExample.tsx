"use client";
import * as React from "react";
import { Resizable } from "re-resizable";
import { Tabs } from "@components/Tabs";
import { CodeIcon, EyeIcon } from "@components/Icons";
import { CopyButton } from "@components/CopyButton";
import { cn } from "@utils/cn";
import { TabsContent, TabsList, TabsTrigger } from "@components/Tabs/Tabs";

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
}: ComponentExampleProps) => {
  const [code, setCode] = React.useState("");
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="space-y-3">
      <Tabs defaultValue="preview" orientation="horizontal">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-neutral-500">
            {transformComponentName(id)}
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
              right: "hidden sm:flex items-center bg-black",
            }}
            handleComponent={{
              right: <div className="h-8 w-1.5 rounded-full bg-dark-100" />,
            }}
          >
            <div>
              <iframe
                className="w-full rounded-md"
                style={{ height: getIframeHeight(type) }}
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
          <div
            className={cn(
              "bg-[#011627] min-h-[350px]",
              !expanded && "max-h-[350px]"
            )}
          >
            <Tabs defaultValue="source">
              <div className="flex items-center justify-between px-5 pt-3">
                <TabsList className="grid w-full bg-[#011627] sm:inline-flex">
                  <TabsTrigger
                    value="source"
                    className="px-2.5 py-1.5 text-xs hover:bg-slate-700/50 data-[state=active]:bg-slate-700 data-[state=active]:text-slate-200"
                  >
                    {id}.tsx
                  </TabsTrigger>
                  <TabsTrigger
                    value="markup"
                    className="px-2.5 py-1.5 text-xs hover:bg-slate-700/50 data-[state=active]:bg-slate-700 data-[state=active]:text-slate-200"
                  >
                    {id}.html
                  </TabsTrigger>
                  <TabsTrigger
                    value="text"
                    className="px-2.5 py-1.5 text-xs hover:bg-slate-700/50 data-[state=active]:bg-slate-700 data-[state=active]:text-slate-200"
                  >
                    {id}.txt
                  </TabsTrigger>
                </TabsList>
                <div className="hidden md:inline-flex">
                  <CopyButton code={code} />
                </div>
              </div>
              <TabsContent value="source">
                <div
                  tabIndex={-1}
                  ref={(node) => {
                    node?.textContent && setCode(node.textContent);
                  }}
                  dangerouslySetInnerHTML={{ __html: source }}
                />
              </TabsContent>
              <TabsContent value="markup">
                <div
                  tabIndex={-1}
                  ref={(node) => {
                    node?.textContent && setCode(node.textContent);
                  }}
                  dangerouslySetInnerHTML={{ __html: markup }}
                />
              </TabsContent>
              <TabsContent className="h-full overscroll-none" value="text">
                <div
                  className="px-8 pb-8"
                  ref={(node) => {
                    node?.textContent && setCode(node.textContent);
                  }}
                >
                  <p>{plainText}</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
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
    default:
      return 350;
  }
};
