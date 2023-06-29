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
import { TabbedCode, TabbedCodeItem } from "@components/Code";

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
  const tabData: TabbedCodeItem[] = [
    {
      id: `${data.id}.tsx`,
      htmlCode: data.source,
    },
    {
      id: `${data.id}.html`,
      htmlCode: data.markup,
    },
    {
      id: `${data.id}.txt`,
      htmlCode: data.plainText,
      isPlainText: true,
    },
  ];

  return (
    <Tabs
      className="flex h-full w-full flex-col overflow-hidden"
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
        className="relative w-full overflow-y-scroll data-[orientation=horizontal]:mt-0"
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
        className="relative w-full overflow-y-scroll data-[orientation=horizontal]:mt-0"
        value="code"
      >
        <TabbedCode className="min-h-full" tabs={tabData} />
      </TabsContent>
    </Tabs>
  );
};
