"use client";

import * as React from "react";
import { PreviewNavigation } from "./PreviewNavigation";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@components/Tabs/Tabs";
import { CodeIcon, EyeIcon } from "@components/Icons";
import { cn } from "@utils/cn";
import { CopyButton } from "@components/CopyButton";

export const PreviewPane = ({
  id,
  data,
}: {
  id: string;
  data: {
    id: string;
    html: string;
    source: string;
    markup: string;
    plainText: string;
  };
}) => {
  const [code, setCode] = React.useState("");
  return (
    <Tabs
      className="h-full w-full overflow-hidden"
      defaultValue="preview"
      orientation="horizontal"
    >
      <PreviewNavigation id={id} html={data.html}>
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
      </PreviewNavigation>
      <TabsContent
        className="relative h-full w-full overflow-y-scroll data-[orientation=horizontal]:mt-0"
        value="preview"
      >
        <iframe
          className="h-full w-full"
          style={{
            height: "100vh",
          }}
          id={id}
          title={id}
          srcDoc={data.html}
        />
      </TabsContent>
      <TabsContent
        className="relative h-full w-full overflow-y-scroll data-[orientation=horizontal]:mt-0"
        value="code"
      >
        <div className={cn("bg-[#011627] min-h-full")}>
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
                dangerouslySetInnerHTML={{ __html: data.source }}
              />
            </TabsContent>
            <TabsContent value="markup">
              <div
                tabIndex={-1}
                ref={(node) => {
                  node?.textContent && setCode(node.textContent);
                }}
                dangerouslySetInnerHTML={{ __html: data.markup }}
              />
            </TabsContent>
            <TabsContent value="text">
              <div
                className="whitespace-pre-line px-8 pb-8"
                tabIndex={-1}
                ref={(node) => {
                  node?.textContent && setCode(node.textContent);
                }}
                dangerouslySetInnerHTML={{
                  __html: data.plainText,
                }}
              />
            </TabsContent>
          </Tabs>
        </div>
      </TabsContent>
    </Tabs>
  );
};
