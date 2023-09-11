import * as React from "react";

import { Tab, Tabs } from "nextra/components";
import { useData } from "nextra/data";

import { TestForm } from "./TestForm";

import { Preview } from "@components/shared/Preview";
import { Codeblock } from "@components/shared/Codeblock";

export const Template: React.FC<{
  name: string;
  height?: number;
  hasMDX?: boolean;
}> = ({ name, height, hasMDX }) => {
  const { templates } = useData();
  return (
    <Tabs
      items={
        hasMDX
          ? ["Preview", "Code", "MDX", "HTML", "Test"]
          : ["Preview", "Code", "HTML", "Test"]
      }
    >
      <Tab>
        <Preview html={templates[name].html} height={height} />
      </Tab>
      <Tab>
        <Codeblock code={templates[name].code} />
      </Tab>
      {hasMDX && (
        <Tab>
          <Codeblock code={templates[name].mdx} lang="mdx" />
        </Tab>
      )}
      <Tab>
        <Codeblock code={templates[name].markup} lang="html" />
      </Tab>
      <Tab>
        <TestForm html={templates[name].html} />
      </Tab>
    </Tabs>
  );
};
