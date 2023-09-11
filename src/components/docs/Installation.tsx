import * as React from "react";

import { Tab, Tabs } from "nextra/components";
import { useData } from "nextra/data";

import InstallationInstructions from "./installation-instructions.mdx";
import InstallationOptions from "./installation-options.mdx";

import { Codeblock } from "@components/shared/Codeblock";

export const Installation: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { sourceCode } = useData();
  return (
    <>
      <InstallationInstructions />
      <Tabs items={["CLI", "Manual"]}>
        <Tab>
          {children}
          <InstallationOptions />
        </Tab>
        <Tab>
          <Codeblock code={sourceCode} />
        </Tab>
      </Tabs>
    </>
  );
};
