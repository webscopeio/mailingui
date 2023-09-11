import * as React from "react";

import { Tab, Tabs } from "nextra/components";
import { useData } from "nextra/data";

import { Preview } from "@components/shared/Preview";
import { Codeblock } from "@components/shared/Codeblock";

export const Example: React.FC<{
  name: string;
  height?: number;
  hasMDX?: boolean;
}> = ({ name, height, hasMDX }) => {
  const { examples } = useData();
  return (
    <Tabs
      items={
        hasMDX
          ? ["Preview", "Code", "MDX", "HTML"]
          : ["Preview", "Code", "HTML"]
      }
    >
      <Tab>
        <Preview html={examples[name].html} height={height} />
      </Tab>
      <Tab>
        <Codeblock code={examples[name].code} />
      </Tab>
      {hasMDX && (
        <Tab>
          <Codeblock code={examples[name].mdx} lang="mdx" />
        </Tab>
      )}
      <Tab>
        <Codeblock code={examples[name].markup} lang="html" />
      </Tab>
    </Tabs>
  );
};
